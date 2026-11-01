/**
 * Career Compass - AI Career Chatbot Component
 */

window.ChatbotComponent = {
  render(state) {
    const { session, isLoading, isTyping } = state;
    if (!session) {
      return `<div class="p-12 text-center text-slate-500">Initializing Assessment Session...</div>`;
    }

    const { education_level, current_question_index, history, profile } = session;
    const progressPercent = Math.min(100, Math.round(((current_question_index - 1) / 10) * 100));
    const is12th = education_level === "12th";

    // Build chat message elements
    let messagesHtml = "";
    if (history && history.length > 0) {
      messagesHtml = history.map((msg, idx) => {
        const isAI = msg.role === "model";
        const isLatest = idx === history.length - 1;

        if (isAI) {
          return `
            <div class="flex items-start gap-3 sm:gap-4 animate-fade-in-up">
              <!-- Career Compass AI Counsellor Avatar -->
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl overflow-hidden border border-blue-200 shadow-sm flex-shrink-0 mt-0.5 bg-white">
                <img src="assets/logo-icon.svg" alt="Career Compass AI" class="w-full h-full object-cover">
              </div>

              <!-- AI Bubble -->
              <div class="max-w-[85%] sm:max-w-[78%]">
                <div class="bg-white text-slate-800 p-4 sm:p-5 rounded-2xl rounded-tl-sm border border-blue-100 shadow-soft leading-relaxed text-sm sm:text-base">
                  ${msg.content}
                </div>

                <!-- Suggested Quick-Reply Pills (Only on latest AI question and when not loading) -->
                ${isLatest && msg.quick_options && msg.quick_options.length > 0 && !isLoading && !isTyping ? `
                  <div class="mt-3.5 flex flex-wrap gap-2">
                    ${msg.quick_options.map(opt => `
                      <button onclick="window.App.handleSendAnswer('${opt.replace(/'/g, "\\'")}')" class="pill-option text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl transition text-left cursor-pointer">
                        ${opt}
                      </button>
                    `).join("")}
                  </div>
                ` : ""}
              </div>
            </div>
          `;
        } else {
          return `
            <div class="flex items-start justify-end gap-3 sm:gap-4 animate-fade-in-up">
              <!-- Student Bubble -->
              <div class="max-w-[85%] sm:max-w-[78%]">
                <div class="bg-blue-600 text-white p-4 sm:p-5 rounded-2xl rounded-tr-sm shadow-royal leading-relaxed text-sm sm:text-base">
                  ${msg.content}
                </div>
              </div>

              <!-- Student Avatar -->
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 text-white flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>
          `;
        }
      }).join("");
    }

    return `
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        <!-- Chat Control Bar (Progress & Navigation) -->
        <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-soft border border-slate-200/80 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <!-- Left: Mode and Step Badge -->
          <div class="flex items-center gap-3 w-full sm:w-auto">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-full uppercase tracking-wider">
              ${is12th ? "12th Pass &bull; Degree Discovery" : "10th Pass &bull; Stream Discovery"}
            </span>

            <div class="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 pulse-active"></span>
              <span>Career Compass AI Active</span>
            </div>
          </div>

          <!-- Center: Progress Bar -->
          <div class="w-full sm:w-72 flex flex-col gap-1.5">
            <div class="flex justify-between items-center text-xs font-semibold text-slate-600">
              <span>Question ${current_question_index} of 10</span>
              <span class="text-blue-600">${progressPercent}% Complete</span>
            </div>
            <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 rounded-full" style="width: ${progressPercent}%;"></div>
            </div>
          </div>

          <!-- Right: Action Buttons (Back & Restart) -->
          <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
            ${current_question_index > 1 ? `
              <button onclick="window.App.handlePreviousQuestion()" class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium flex items-center gap-1 transition cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span>Previous</span>
              </button>
            ` : ""}

            <button onclick="window.App.confirmRestart()" class="px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 text-xs font-medium flex items-center gap-1 transition cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <span>Restart</span>
            </button>
          </div>

        </div>

        <!-- Chat Container Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Main Chat Dialogue Box (8 cols) -->
          <div class="lg:col-span-8 flex flex-col h-[600px] sm:h-[650px] bg-slate-50/50 rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
            
            <!-- Message Stream Area -->
            <div id="chat-messages-container" class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              ${messagesHtml}

              <!-- Typing Indicator -->
              ${(isTyping || isLoading) ? `
                <div class="flex items-start gap-3 sm:gap-4 animate-fade-in-up">
                  <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl overflow-hidden border border-blue-200 shadow-sm flex-shrink-0 bg-white">
                    <img src="assets/logo-icon.svg" alt="Career Compass AI" class="w-full h-full object-cover">
                  </div>
                  <div class="bg-white p-4 rounded-2xl rounded-tl-sm border border-blue-100 shadow-soft flex items-center gap-2">
                    <span class="text-xs font-semibold text-slate-500 mr-2">Career Compass AI is analyzing your thoughts...</span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                  </div>
                </div>
              ` : ""}
            </div>

            <!-- Chat Input Area -->
            <div class="p-3 sm:p-4 bg-white border-t border-slate-200">
              <form id="chat-input-form" onsubmit="window.App.handleInputSubmit(event)" class="flex items-center gap-2">
                <input 
                  type="text" 
                  id="chat-user-input"
                  placeholder="Type your answer in detail or select an option pill above..."
                  class="flex-1 px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-slate-50/50"
                  ${(isLoading || isTyping) ? "disabled" : ""}
                  autocomplete="off"
                />
                <button 
                  type="submit" 
                  class="px-5 sm:px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-royal flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  ${(isLoading || isTyping) ? "disabled" : ""}
                >
                  <span>Send</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </button>
              </form>
              <div class="mt-2 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <span>💡 Tip: Feel free to express what you genuinely love doing. The AI personalizes each follow-up.</span>
              </div>
            </div>

          </div>

          <!-- Sidebar: Live Student Profile & Insights (4 cols) -->
          <div class="lg:col-span-4 space-y-5">
            
            <!-- Live Profile Card -->
            <div class="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft">
              <h4 class="text-base font-bold text-[#14213D] flex items-center gap-2 mb-4">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span>Live Student Profile</span>
              </h4>

              <div class="space-y-4 text-xs sm:text-sm">
                
                <div>
                  <span class="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">Target Level</span>
                  <div class="font-bold text-slate-800 mt-0.5">
                    ${is12th ? "Class 12th &rarr; Degree Courses" : "Class 10th &rarr; +2 Stream Choice"}
                  </div>
                </div>

                ${profile?.stream_studied ? `
                  <div>
                    <span class="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">Academic Stream</span>
                    <div class="font-bold text-blue-600 mt-0.5">${profile.stream_studied}</div>
                  </div>
                ` : ""}

                <div>
                  <span class="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">Detected Strengths & Themes</span>
                  <div class="flex flex-wrap gap-1.5 mt-1.5">
                    ${profile?.detected_interests && profile.detected_interests.length > 0 ? (
                      profile.detected_interests.map(i => `
                        <span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg capitalize border border-blue-100">
                          ${i.replace('_', ' ')}
                        </span>
                      `).join("")
                    ) : `
                      <span class="text-slate-400 italic text-xs">Analyzing as you chat...</span>
                    `}
                  </div>
                </div>

                <div>
                  <span class="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">Assessment Status</span>
                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-full bg-slate-100 rounded-full h-2">
                      <div class="bg-blue-600 h-2 rounded-full" style="width: ${progressPercent}%"></div>
                    </div>
                    <span class="text-xs font-bold text-slate-700">${current_question_index}/10</span>
                  </div>
                </div>

              </div>

              <!-- Recommendation Engine Notice -->
              <div class="mt-6 p-3.5 bg-blue-50/70 rounded-xl border border-blue-100/80 text-[11px] text-blue-800 leading-relaxed">
                <strong>Next Milestone:</strong> After question 10, the AI will perform a comprehensive matrix analysis and recommend ${is12th ? "exactly 3 degree courses" : "exactly 2 academic streams"} with eligibility verification.
              </div>

            </div>

            <!-- Helpful Guidance Card -->
            <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-6 shadow-royal">
              <h5 class="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Did You Know?</h5>
              <p class="text-xs sm:text-sm text-blue-50 leading-relaxed">
                Hobbies don't always have to become full careers—they can also serve as creative anchors alongside fulfilling professions. Our algorithm balances your practical strengths with what excites you.
              </p>
            </div>

          </div>

        </div>

      </section>
    `;
  }
};
