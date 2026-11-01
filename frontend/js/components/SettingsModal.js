/**
 * Career Compass - AI Settings Modal Component
 */

window.SettingsModalComponent = {
  render(config) {
    const hasKey = config?.has_gemini_key || false;
    const engineName = config?.ai_engine || "Career Compass Intelligent Engine";

    return `
      <div id="settings-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
        
        <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden text-left">
          
          <!-- Modal Header -->
          <div class="px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl overflow-hidden border border-white/30 bg-white">
                <img src="assets/logo-icon.svg" alt="Career Compass" class="w-full h-full object-cover">
              </div>
              <div>
                <h3 class="text-lg font-bold">Career Compass AI Engine Configuration</h3>
                <p class="text-xs text-blue-100">Configure Google Gemini API integration</p>
              </div>
            </div>

            <button onclick="window.App.closeSettingsModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 space-y-5 text-xs sm:text-sm">
            
            <!-- Current Status Box -->
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Active AI Model</div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full ${hasKey ? 'bg-emerald-500 pulse-active' : 'bg-blue-500'}"></span>
                <span class="font-bold text-slate-800 text-sm sm:text-base">${engineName}</span>
              </div>
              <div class="mt-2 text-xs text-slate-500 leading-relaxed">
                ${hasKey 
                  ? "Connected to Google Gemini API with live cloud inference." 
                  : "Using built-in high-precision semantic decision engine. You can connect your Google Gemini API key below for live generative models."}
              </div>
            </div>

            <!-- API Key Input Field -->
            <div>
              <label class="block font-bold text-slate-700 mb-1.5" for="gemini-api-key-input">
                Google Gemini API Key
              </label>
              <input 
                type="password" 
                id="gemini-api-key-input"
                placeholder="${hasKey ? '••••••••••••••••••••••••••••••••' : 'AIzaSy...'}"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 bg-slate-50/50 text-sm font-mono"
              />
              <p class="mt-1.5 text-[11px] text-slate-400">
                Stored securely on your local server backend SQLite database, never exposed in frontend scripts.
              </p>
            </div>

            <!-- Instructions -->
            <div class="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 leading-relaxed">
              <strong>How to get a free API key:</strong>
              <ol class="list-decimal pl-4 mt-1.5 space-y-1 text-slate-600">
                <li>Visit <a href="https://aistudio.google.com/app/apikey" target="_blank" class="text-blue-600 underline font-semibold">Google AI Studio</a>.</li>
                <li>Sign in with your Google account.</li>
                <li>Click <strong>"Create API Key"</strong> and paste it here.</li>
              </ol>
            </div>

          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
            ${hasKey ? `
              <button onclick="window.App.handleClearApiKey()" class="text-xs font-semibold text-red-600 hover:text-red-700 transition cursor-pointer">
                Clear Stored Key
              </button>
            ` : `<div></div>`}

            <div class="flex items-center gap-2">
              <button onclick="window.App.closeSettingsModal()" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition cursor-pointer">
                Cancel
              </button>

              <button onclick="window.App.handleSaveApiKey()" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-royal transition cursor-pointer">
                Save & Connect
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
  }
};
