"""
Career Compass - SQLite Database Layer
Stores user assessment sessions, conversation transcripts, and final recommendations securely.
"""

import sqlite3
import json
import os
from typing import Dict, Any, List, Optional
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(__file__), "career_compass.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Sessions table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS sessions (
            id TEXT PRIMARY KEY,
            education_level TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            completed INTEGER DEFAULT 0,
            current_question_index INTEGER DEFAULT 1,
            history_json TEXT NOT NULL,
            profile_json TEXT NOT NULL,
            recommendations_json TEXT
        )
    """)
    
    # Settings table (for local API config if user configures it)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
        )
    """)
    
    conn.commit()
    conn.close()

def save_session(session_data: Dict[str, Any]) -> bool:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    now = datetime.now().isoformat()
    
    cursor.execute("""
        INSERT INTO sessions (id, education_level, created_at, updated_at, completed, current_question_index, history_json, profile_json, recommendations_json)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
            updated_at = excluded.updated_at,
            completed = excluded.completed,
            current_question_index = excluded.current_question_index,
            history_json = excluded.history_json,
            profile_json = excluded.profile_json,
            recommendations_json = excluded.recommendations_json
    """, (
        session_data["id"],
        session_data["education_level"],
        session_data.get("created_at", now),
        now,
        1 if session_data.get("completed", False) else 0,
        session_data.get("current_question_index", 1),
        json.dumps(session_data.get("history", [])),
        json.dumps(session_data.get("profile", {})),
        json.dumps(session_data.get("recommendations", [])) if session_data.get("recommendations") else None
    ))
    
    conn.commit()
    conn.close()
    return True

def get_session(session_id: str) -> Optional[Dict[str, Any]]:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM sessions WHERE id = ?", (session_id,))
    row = cursor.fetchone()
    conn.close()
    
    if not row:
        return None
        
    return {
        "id": row["id"],
        "education_level": row["education_level"],
        "created_at": row["created_at"],
        "updated_at": row["updated_at"],
        "completed": bool(row["completed"]),
        "current_question_index": row["current_question_index"],
        "history": json.loads(row["history_json"]),
        "profile": json.loads(row["profile_json"]),
        "recommendations": json.loads(row["recommendations_json"]) if row["recommendations_json"] else None
    }

def list_recent_sessions(limit: int = 10) -> List[Dict[str, Any]]:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("SELECT id, education_level, created_at, updated_at, completed, current_question_index FROM sessions ORDER BY updated_at DESC LIMIT ?", (limit,))
    rows = cursor.fetchall()
    conn.close()
    
    return [dict(r) for r in rows]

def set_setting(key: str, value: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", (key, value))
    conn.commit()
    conn.close()

def get_setting(key: str) -> Optional[str]:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT value FROM settings WHERE key = ?", (key,))
    row = cursor.fetchone()
    conn.close()
    return row[0] if row else None

# Initialize upon module load
init_db()
