/**
 * Career Compass - Education Level Selection Component (Step 1)
 */

window.EducationSelectComponent = {
  render() {
    return `
      <section class="min-h-[82vh] py-12 md:py-20 flex items-center justify-center">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <!-- Back button & Page title -->
          <div class="text-center mb-12">
            <button onclick="window.App.navigateTo('landing')" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition mb-6 cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>Back to Home</span>
            </button>
            
            <span class="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Step 1 of 2</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
              What is your current educational qualification?
            </h1>
            <p class="mt-3 text-base text-slate-600 max-w-xl mx-auto">
              Select your completed milestone to tailor the conversational questions, eligibility parameters, and career databases.
            </p>
          </div>

          <!-- Two Large Interactive Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <!-- CARD 1: 10TH PASS -->
            <div class="bg-white rounded-3xl p-8 border-2 border-slate-200/80 hover:border-blue-500 shadow-soft hover:shadow-royal transition-all duration-300 card-hover-lift flex flex-col justify-between text-left group">
              <div>
                <!-- Badge & Illustration -->
                <div class="flex items-center justify-between mb-6">
                  <span class="px-3.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wide border border-blue-200">
                    High School
                  </span>
                  
                  <!-- School Student Graphic / Badge -->
                  <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                </div>

                <!-- Title & Description -->
                <h3 class="text-2xl font-bold text-[#14213D] mb-3 group-hover:text-blue-600 transition">
                  10th PASS
                </h3>
                <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Completed Class 10 and looking for the right stream for Intermediate / 11th and 12th education.
                </p>

                <!-- Key Outcomes List -->
                <div class="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-600">
                  <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Recommends <strong>Top 2 Suitable Academic Streams</strong></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Evaluates Science (PCM/PCB/PCMB), Commerce & Arts</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Identifies subjects requiring special attention</span>
                  </div>
                </div>
              </div>

              <!-- Button -->
              <button onclick="window.App.startAssessmentSession('10th')" class="w-full py-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-base transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer group-hover:bg-blue-600 group-hover:text-white">
                <span>Continue with 10th</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </div>

            <!-- CARD 2: 12TH PASS -->
            <div class="bg-white rounded-3xl p-8 border-2 border-slate-200/80 hover:border-blue-500 shadow-soft hover:shadow-royal transition-all duration-300 card-hover-lift flex flex-col justify-between text-left group">
              <div>
                <!-- Badge & Illustration -->
                <div class="flex items-center justify-between mb-6">
                  <span class="px-3.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wide border border-indigo-200">
                    Pre-University / +2
                  </span>
                  
                  <!-- College Student Graphic / Cap -->
                  <div class="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                </div>

                <!-- Title & Description -->
                <h3 class="text-2xl font-bold text-[#14213D] mb-3 group-hover:text-blue-600 transition">
                  12th PASS
                </h3>
                <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Completed Class 12 and looking for the right undergraduate degree or professional course.
                </p>

                <!-- Key Outcomes List -->
                <div class="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-600">
                  <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Recommends <strong>Top 3 Suitable Degree Courses</strong></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Mapped across 40 specialized interest categories</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Entrance exams, salary ranges & eligibility check</span>
                  </div>
                </div>
              </div>

              <!-- Button -->
              <button onclick="window.App.startAssessmentSession('12th')" class="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all duration-200 shadow-royal flex items-center justify-center gap-2 cursor-pointer">
                <span>Continue with 12th</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </div>

          </div>

          <!-- Advisory Note -->
          <div class="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
            You will engage in an interactive 10-question AI assessment. You can review and edit previous answers at any time.
          </div>

        </div>
      </section>
    `;
  }
};
