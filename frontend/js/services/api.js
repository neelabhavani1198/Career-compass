/**
 * Career Compass Frontend API Client
 * Manages communication with backend REST API endpoints.
 */

const API_BASE = window.location.origin;

window.CareerAPI = {
  // Check backend and AI configuration
  async getConfig() {
    try {
      const res = await fetch(`${API_BASE}/api/config`);
      if (!res.ok) throw new Error("Failed to fetch config");
      return await res.json();
    } catch (err) {
      console.warn("API config call failed, using default info:", err);
      return {
        status: "ok",
        app_name: "Career Compass",
        ai_engine: "Career Compass Intelligent Engine",
        has_gemini_key: false,
        total_categories_12th: 40,
        total_streams_10th: 5
      };
    }
  },

  // Save Gemini API key
  async setApiKey(apiKey) {
    const res = await fetch(`${API_BASE}/api/config/key`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey })
    });
    return await res.json();
  },

  // Start new assessment session
  async startAssessment(educationLevel) {
    try {
      const res = await fetch(`${API_BASE}/api/chat/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ education_level: educationLevel })
      });
      if (!res.ok) throw new Error("Could not start assessment");
      return await res.json();
    } catch (err) {
      console.error("Start assessment error:", err);
      throw err;
    }
  },

  // Send student answer and receive next dynamic question or final recommendations
  async sendMessage(sessionId, answer) {
    try {
      const res = await fetch(`${API_BASE}/api/chat/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, answer: answer })
      });
      if (!res.ok) throw new Error("Failed to process answer");
      return await res.json();
    } catch (err) {
      console.error("Chat message error:", err);
      throw err;
    }
  },

  // Go back to previous question
  async previousQuestion(sessionId) {
    try {
      const res = await fetch(`${API_BASE}/api/chat/previous`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId })
      });
      if (!res.ok) throw new Error("Failed to revert to previous question");
      return await res.json();
    } catch (err) {
      console.error("Previous question error:", err);
      throw err;
    }
  },

  // Fetch full category & stream database for Explore Careers page
  async getCategories() {
    try {
      const res = await fetch(`${API_BASE}/api/categories`);
      if (!res.ok) throw new Error("Failed to fetch categories");
      return await res.json();
    } catch (err) {
      console.warn("Fetch categories error:", err);
      return {
        class_12_categories: [],
        class_10_streams: window.CAREER_COMPASS_DATA.class10Streams
      };
    }
  },

  // Fetch specific saved session
  async getSession(sessionId) {
    try {
      const res = await fetch(`${API_BASE}/api/sessions/${sessionId}`);
      if (!res.ok) throw new Error("Session not found");
      return await res.json();
    } catch (err) {
      console.error("Get session error:", err);
      return null;
    }
  }
};
