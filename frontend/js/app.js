/**
 * CareerCompass - Main Application Controller & Router
 */

window.App = {
  state: {
    currentPage: "landing", // 'landing' | 'education-select' | 'chat' | 'results' | 'explore-careers' | 'about'
    session: null,
    isLoading: false,
    isTyping: false,
    config: null,
    categoriesData: null,
    isSettingsOpen: false,
    isCompareOpen: false,
    toastMessage: null
  },

  async init() {
    console.log("Career Compass initializing...");
    // Load config from backend
    try {
      this.state.config = await window.CareerAPI.getConfig();
      this.state.categoriesData = await window.CareerAPI.getCategories();
    } catch (e) {
      console.warn("Initialization fetch warning:", e);
    }

    // Handle browser hash navigation if present
    const hash = window.location.hash.replace("#", "");
    if (hash && ["landing", "education-select", "explore-careers", "about"].includes(hash)) {
      this.state.currentPage = hash;
    }

    this.renderApp();
  },

  navigateTo(page) {
    this.state.currentPage = page;
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.renderApp();
  },

  // Start new assessment session
  async startAssessmentSession(educationLevel) {
    this.state.isLoading = true;
    this.renderApp();

    try {
      const sessionData = await window.CareerAPI.startAssessment(educationLevel);
      this.state.session = {
        id: sessionData.session_id,
        education_level: sessionData.education_level,
        current_question_index: sessionData.question_number,
        completed: false,
        history: [
          {
            role: "model",
            content: sessionData.question,
            quick_options: sessionData.quick_options,
            question_number: 1
          }
        ],
        profile: sessionData.profile || {},
        recommendations: null
      };

      this.state.isLoading = false;
      this.navigateTo("chat");
    } catch (err) {
      this.state.isLoading = false;
      this.showToast("Failed to initialize assessment. Please try again.", "error");
      this.renderApp();
    }
  },

  // Submit student's answer from input form
  handleInputSubmit(e) {
    if (e) e.preventDefault();
    const input = document.getElementById("chat-user-input");
    if (!input) return;
    const answer = input.value.trim();
    if (!answer) return;
    input.value = "";
    this.handleSendAnswer(answer);
  },

  // Send answer to backend and get next adaptive question or final results
  async handleSendAnswer(answerText) {
    if (!this.state.session || this.state.isLoading || this.state.isTyping) return;

    const session = this.state.session;
    const currQNum = session.current_question_index;

    // Immediately append user message to local state for responsive UI
    session.history.push({
      role: "user",
      content: answerText,
      question_number: currQNum
    });

    this.state.isTyping = true;
    this.renderApp();
    this.scrollChatToBottom();

    try {
      // Simulate natural human counselling cadence (500ms delay)
      const [apiResponse] = await Promise.all([
        window.CareerAPI.sendMessage(session.id, answerText),
        new Promise(resolve => setTimeout(resolve, 600))
      ]);

      this.state.isTyping = false;

      if (apiResponse.completed) {
        // Assessment completed! Update state with recommendations and go to results
        session.completed = true;
        session.recommendations = apiResponse.recommendations;
        session.profile = apiResponse.profile;
        this.navigateTo("results");
        this.showToast("Assessment complete! Recommendations generated.", "success");
      } else {
        // Next question received
        session.current_question_index = apiResponse.question_number;
        session.history.push({
          role: "model",
          content: apiResponse.question,
          quick_options: apiResponse.quick_options,
          question_number: apiResponse.question_number
        });
        session.profile = apiResponse.profile;
        this.renderApp();
        this.scrollChatToBottom();
      }
    } catch (err) {
      this.state.isTyping = false;
      this.showToast("Connection issue with AI counsellor. Retrying...", "error");
      this.renderApp();
    }
  },

  // Revert to previous question
  async handlePreviousQuestion() {
    if (!this.state.session || this.state.isLoading) return;
    this.state.isLoading = true;
    this.renderApp();

    try {
      const res = await window.CareerAPI.previousQuestion(this.state.session.id);
      this.state.session.current_question_index = res.question_number;
      // Truncate history appropriately
      const history = this.state.session.history;
      while (history.length > 0 && history[history.length - 1].question_number > res.question_number) {
        history.pop();
      }
      this.state.session.completed = false;
      this.state.isLoading = false;
      this.renderApp();
      this.scrollChatToBottom();
      this.showToast(`Returned to Question ${res.question_number}`, "info");
    } catch (err) {
      this.state.isLoading = false;
      this.showToast("Could not return to previous question.", "error");
      this.renderApp();
    }
  },

  // Confirm restart
  confirmRestart() {
    if (confirm("Are you sure you want to restart this assessment from the beginning? Your current answers will be reset.")) {
      this.state.session = null;
      this.navigateTo("education-select");
    }
  },

  // Download PDF Report
  downloadPDFReport() {
    if (!this.state.session || !this.state.session.recommendations) {
      this.showToast("No assessment report available to download.", "error");
      return;
    }
    window.CareerExporter.exportReport(this.state.session);
  },

  // Share recommendations
  shareRecommendations() {
    const text = `I just discovered my ideal career pathways using Career Compass AI! Check it out: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({
        title: "Career Compass - My AI Career Recommendations",
        text: text,
        url: window.location.origin
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      this.showToast("Recommendation share link copied to clipboard!", "success");
    }
  },

  // Modals
  openSettingsModal() {
    this.state.isSettingsOpen = true;
    this.renderApp();
  },

  closeSettingsModal() {
    this.state.isSettingsOpen = false;
    this.renderApp();
  },

  async handleSaveApiKey() {
    const input = document.getElementById("gemini-api-key-input");
    if (!input) return;
    const key = input.value.trim();
    if (!key) {
      alert("Please enter a valid Gemini API key or click Cancel.");
      return;
    }

    try {
      const res = await window.CareerAPI.setApiKey(key);
      this.state.config = await window.CareerAPI.getConfig();
      this.state.isSettingsOpen = false;
      this.showToast("Google Gemini API key saved & connected!", "success");
      this.renderApp();
    } catch (err) {
      alert("Failed to save API key.");
    }
  },

  async handleClearApiKey() {
    if (confirm("Remove your stored Gemini API key?")) {
      await window.CareerAPI.setApiKey("");
      this.state.config = await window.CareerAPI.getConfig();
      this.state.isSettingsOpen = false;
      this.showToast("Stored Gemini API key removed.", "info");
      this.renderApp();
    }
  },

  openCompareModal() {
    this.state.isCompareOpen = true;
    this.renderApp();
  },

  closeCompareModal() {
    this.state.isCompareOpen = false;
    this.renderApp();
  },

  // Toast feedback
  showToast(message, type = "info") {
    this.state.toastMessage = { message, type };
    setTimeout(() => {
      this.state.toastMessage = null;
      const el = document.getElementById("toast-container");
      if (el) el.innerHTML = "";
    }, 3800);
    this.renderToast();
  },

  renderToast() {
    const container = document.getElementById("toast-container");
    if (!container || !this.state.toastMessage) return;

    const { message, type } = this.state.toastMessage;
    const bgColor = type === "success" ? "bg-emerald-600" : type === "error" ? "bg-rose-600" : "bg-blue-600";

    container.innerHTML = `
      <div class="${bgColor} text-white px-5 py-3 rounded-2xl shadow-xl font-medium text-xs sm:text-sm flex items-center gap-3 animate-fade-in-up">
        <span>${message}</span>
      </div>
    `;
  },

  scrollChatToBottom() {
    setTimeout(() => {
      const el = document.getElementById("chat-messages-container");
      if (el) {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    }, 100);
  },

  // Core render function
  renderApp() {
    const mainContainer = document.getElementById("app-root");
    if (!mainContainer) return;

    let contentHtml = "";

    switch (this.state.currentPage) {
      case "landing":
        contentHtml = window.LandingPageComponent.render();
        break;
      case "education-select":
        contentHtml = window.EducationSelectComponent.render();
        break;
      case "chat":
        contentHtml = window.ChatbotComponent.render(this.state);
        break;
      case "results":
        contentHtml = window.ResultsPageComponent.render(this.state);
        break;
      case "explore-careers":
        contentHtml = window.ExploreCareersComponent.render(this.state.categoriesData);
        break;
      case "about":
        contentHtml = window.AboutPageComponent.render();
        break;
      default:
        contentHtml = window.LandingPageComponent.render();
    }

    // Settings Modal
    let modalHtml = "";
    if (this.state.isSettingsOpen) {
      modalHtml += window.SettingsModalComponent.render(this.state.config);
    }
    if (this.state.isCompareOpen && this.state.session) {
      modalHtml += window.CompareModalComponent.render(this.state.session);
    }

    mainContainer.innerHTML = contentHtml + modalHtml;

    // Post-render focus for chat
    if (this.state.currentPage === "chat" && !this.state.isLoading && !this.state.isTyping) {
      const input = document.getElementById("chat-user-input");
      if (input && document.activeElement !== input) {
        input.focus();
      }
      this.scrollChatToBottom();
    }
  }
};

// Initialize on DOM loaded
window.addEventListener("DOMContentLoaded", () => {
  window.App.init();
});
