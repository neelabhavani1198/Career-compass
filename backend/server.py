"""
Career Compass - Flask Backend Server
Provides REST APIs for assessment sessions, AI-driven adaptive dialogue,
career database queries, and static frontend file serving via Flask.
"""

import sys
import os
import uuid
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory

# Add current directory to path
sys.path.insert(0, os.path.dirname(__file__))

import career_data
import database
import ai_service

PORT = 8000
FRONTEND_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend"))

app = Flask(__name__, static_folder=FRONTEND_DIR)

# CORS & Cache-Control headers
@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, DELETE"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    return response

# Handle preflight OPTIONS requests across all routes
@app.route("/<path:path>", methods=["OPTIONS"])
@app.route("/", methods=["OPTIONS"])
def handle_options(path=""):
    return "", 204

# =========================================================================
# REST API ROUTES
# =========================================================================

@app.route("/api/config", methods=["GET"])
def get_config():
    gemini_key = ai_service.get_gemini_api_key()
    has_key = bool(gemini_key and len(gemini_key) > 5)
    return jsonify({
        "status": "ok",
        "app_name": "Career Compass",
        "framework": "Flask",
        "version": "2.0.0",
        "ai_engine": "Google Gemini 2.5 Flash" if has_key else "Intelligent Semantic Engine",
        "has_gemini_key": has_key,
        "total_categories_12th": len(career_data.get_class_12_categories()),
        "total_streams_10th": len(career_data.get_class_10_streams())
    })

@app.route("/api/config/key", methods=["POST"])
def set_api_key():
    body = request.get_json(silent=True) or {}
    api_key = body.get("api_key", "").strip()
    if api_key:
        database.set_setting("GEMINI_API_KEY", api_key)
        return jsonify({"success": True, "message": "Gemini API key configured successfully"})
    else:
        database.set_setting("GEMINI_API_KEY", "")
        return jsonify({"success": True, "message": "API key cleared"})

@app.route("/api/categories", methods=["GET"])
def get_categories():
    return jsonify({
        "class_12_categories": career_data.get_class_12_categories(),
        "class_10_streams": career_data.get_class_10_streams()
    })

@app.route("/api/sessions", methods=["GET"])
def list_sessions():
    sessions = database.list_recent_sessions(limit=20)
    return jsonify({"sessions": sessions})

@app.route("/api/sessions/<session_id>", methods=["GET"])
def get_session(session_id):
    session = database.get_session(session_id)
    if session:
        return jsonify(session)
    return jsonify({"error": "Session not found"}), 404

@app.route("/api/chat/start", methods=["POST"])
def start_chat():
    body = request.get_json(silent=True) or {}
    education_level = body.get("education_level", "12th")
    if education_level not in ["10th", "12th"]:
        education_level = "12th"

    session_id = str(uuid.uuid4())
    first_q = ai_service.FIRST_QUESTION_12TH if education_level == "12th" else ai_service.FIRST_QUESTION_10TH

    session_data = {
        "id": session_id,
        "education_level": education_level,
        "created_at": datetime.now().isoformat(),
        "completed": False,
        "current_question_index": 1,
        "history": [
            {
                "role": "model",
                "content": first_q["question"],
                "quick_options": first_q["quick_options"],
                "question_number": 1
            }
        ],
        "profile": {
            "education_level": education_level,
            "domains": {},
            "all_answers": [],
            "detected_interests": []
        },
        "recommendations": None
    }

    database.save_session(session_data)

    return jsonify({
        "session_id": session_id,
        "education_level": education_level,
        "question_number": 1,
        "total_questions": 10,
        "question": first_q["question"],
        "quick_options": first_q["quick_options"],
        "profile": session_data["profile"]
    })

@app.route("/api/chat/message", methods=["POST"])
def send_chat_message():
    body = request.get_json(silent=True) or {}
    session_id = body.get("session_id")
    user_answer = body.get("answer", "").strip()

    if not session_id or not user_answer:
        return jsonify({"error": "Missing session_id or answer"}), 400

    session = database.get_session(session_id)
    if not session:
        return jsonify({"error": "Session not found"}), 404

    curr_q_idx = session["current_question_index"]
    education_level = session["education_level"]
    history = session["history"]
    profile = session["profile"]

    # Add user answer to history
    history.append({
        "role": "user",
        "content": user_answer,
        "question_number": curr_q_idx
    })

    # Extract signals & update profile
    signals = ai_service.analyze_student_answer_keywords(user_answer)
    profile = ai_service.update_student_profile(profile, signals, curr_q_idx)

    next_q_idx = curr_q_idx + 1

    if next_q_idx <= 10:
        # Generate next adaptive question
        next_q_data = ai_service.get_next_question(education_level, next_q_idx, history, profile)
        history.append({
            "role": "model",
            "content": next_q_data["question"],
            "quick_options": next_q_data["quick_options"],
            "question_number": next_q_idx
        })

        session["current_question_index"] = next_q_idx
        session["history"] = history
        session["profile"] = profile
        database.save_session(session)

        return jsonify({
            "completed": False,
            "session_id": session_id,
            "education_level": education_level,
            "question_number": next_q_idx,
            "total_questions": 10,
            "question": next_q_data["question"],
            "quick_options": next_q_data["quick_options"],
            "profile": profile
        })
    else:
        # 10 Questions complete! Run final analysis and recommendations!
        recommendations = ai_service.generate_recommendations(education_level, history, profile)
        session["completed"] = True
        session["current_question_index"] = 10
        session["history"] = history
        session["profile"] = profile
        session["recommendations"] = recommendations
        database.save_session(session)

        return jsonify({
            "completed": True,
            "session_id": session_id,
            "education_level": education_level,
            "total_questions": 10,
            "profile": profile,
            "recommendations": recommendations
        })

@app.route("/api/chat/previous", methods=["POST"])
def previous_chat_question():
    body = request.get_json(silent=True) or {}
    session_id = body.get("session_id")
    session = database.get_session(session_id)
    if not session:
        return jsonify({"error": "Session not found"}), 404

    curr_q_idx = session["current_question_index"]
    if curr_q_idx > 1:
        # Rollback last user and AI message
        history = session["history"]
        while history and history[-1].get("question_number") == curr_q_idx:
            history.pop()
        if history and history[-1].get("role") == "user":
            history.pop()

        new_idx = curr_q_idx - 1
        session["current_question_index"] = new_idx
        session["history"] = history
        session["completed"] = False
        database.save_session(session)

        last_model_msg = next((m for m in reversed(history) if m.get("role") == "model"), None)
        q_text = last_model_msg["content"] if last_model_msg else "Please answer the previous question:"
        q_opts = last_model_msg.get("quick_options", []) if last_model_msg else []

        return jsonify({
            "session_id": session_id,
            "education_level": session["education_level"],
            "question_number": new_idx,
            "total_questions": 10,
            "question": q_text,
            "quick_options": q_opts,
            "profile": session["profile"]
        })
    else:
        return jsonify({"error": "Already at question 1"}), 400

# =========================================================================
# STATIC FRONTEND SERVING (SPA)
# =========================================================================

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    # If file exists in frontend directory, serve it
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    # Otherwise fallback to index.html for client-side routing
    return send_from_directory(app.static_folder, "index.html")

def run(port=PORT):
    # Set stdout to utf-8 if possible
    if sys.stdout.encoding != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8")
        except Exception:
            pass

    print("===============================================================")
    print(">> Career Compass Flask Backend Server Running")
    print(f">> Local URL: http://localhost:{port}")
    print(f">> Serving static files from: {FRONTEND_DIR}")
    print("===============================================================")
    app.run(host="127.0.0.1", port=port, debug=False)

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    run(port)
