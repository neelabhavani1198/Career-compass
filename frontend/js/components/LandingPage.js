/**
 * Career Compass - Landing Page Component
 */

window.LandingPageComponent = {
  render() {
    return `
      <!-- Hero Section -->
      <section class="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
        <!-- Background decorative gradients -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/60 to-transparent -z-10 blur-3xl pointer-events-none"></div>
        <div class="absolute -top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl -z-10 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column: Value Proposition & CTA -->
            <div class="lg:col-span-7 text-left space-y-6">
              
              <!-- Tagline Pill -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide shadow-sm border border-blue-200">
                <span class="w-2 h-2 rounded-full bg-blue-600 pulse-active"></span>
                <span>Discover Your Interests. Explore Your Future.</span>
              </div>

              <!-- Main Heading -->
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14213D] leading-tight tracking-tight">
                Empowering Students with <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Career Compass AI Career Guidance</span>
              </h1>

              <!-- Subheading Description -->
              <p class="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                Confused about what to study after <strong>10th</strong> or <strong>12th</strong>? Have a personalized conversation with our intelligent career counsellor. In 10 adaptive questions, discover high-potential degree courses and intermediate streams tailored to your unique passions.
              </p>

              <!-- CTA Buttons & Badges -->
              <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button onclick="window.App.navigateTo('education-select')" class="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-semibold text-lg shadow-royal transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                  <span>Start Career Assessment</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>

                <button onclick="window.App.navigateTo('explore-careers')" class="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl text-blue-700 bg-white hover:bg-blue-50/80 font-semibold text-base border border-blue-200 shadow-soft transition duration-200 cursor-pointer">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  <span>Explore 40+ Career Fields</span>
                </button>
              </div>

              <!-- Key Highlights Bar -->
              <div class="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 text-left">
                <div>
                  <div class="text-2xl font-bold text-blue-600">40+</div>
                  <div class="text-xs text-slate-500 font-medium">Interest Categories</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-blue-600">100%</div>
                  <div class="text-xs text-slate-500 font-medium">Personalized Flow</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-blue-600">10 / 12th</div>
                  <div class="text-xs text-slate-500 font-medium">Focused Advice</div>
                </div>
              </div>

            </div>

            <!-- Right Column: Interactive Educational Illustration -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="relative w-full max-w-md">
                
                <!-- Card Container with subtle shadow and border -->
                <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-royal border border-blue-100 relative z-10 card-hover-lift">
                  
                  <!-- AI Dialogue Mock Header -->
                  <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                    <div class="flex items-center gap-3">
                      <div class="w-11 h-11 rounded-2xl overflow-hidden border border-blue-200 shadow-sm flex items-center justify-center bg-white flex-shrink-0">
                        <img src="assets/logo-icon.svg" alt="Career Compass Logo" class="w-full h-full object-cover">
                      </div>
                      <div>
                        <div class="font-extrabold text-base text-[#14213D] tracking-wide font-heading">Career Compass AI</div>
                        <div class="text-xs text-emerald-600 font-medium flex items-center gap-1">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Adaptive Counsellor
                        </div>
                      </div>
                    </div>
                    <span class="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg">Question 1/10</span>
                  </div>

                  <!-- Simulated Conversation Sample -->
                  <div class="space-y-4 text-xs sm:text-sm">
                    <!-- AI Bubble -->
                    <div class="bg-blue-50/80 text-slate-800 p-3.5 rounded-2xl rounded-tl-sm border border-blue-100/60 leading-relaxed">
                      <span class="font-semibold text-blue-700">AI:</span> What do you enjoy doing most in your free time?
                    </div>

                    <!-- User Bubble -->
                    <div class="bg-blue-600 text-white p-3.5 rounded-2xl rounded-tr-sm ml-auto max-w-[85%] leading-relaxed shadow-sm">
                      <span class="font-semibold text-blue-100">You:</span> I love drawing realistic nature scenes and experimenting with computer art.
                    </div>

                    <!-- AI Adaptive Response Bubble -->
                    <div class="bg-blue-50/80 text-slate-800 p-3.5 rounded-2xl rounded-tl-sm border border-blue-100/60 leading-relaxed">
                      <span class="font-semibold text-blue-700">AI:</span> Fascinating! Do you see yourself designing digital user interfaces (UI/UX) or creating physical architectural structures?
                    </div>
                  </div>

                  <!-- Quick preview pills -->
                  <div class="mt-6 pt-4 border-t border-slate-100">
                    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Live Matching Pathways:</div>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium">B.Des UI/UX</span>
                      <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium">B.Arch</span>
                      <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium">B.Tech CSE</span>
                    </div>
                  </div>

                </div>

                <!-- Floating Accent Element -->
                <div class="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-3 z-20">
                  <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Academic Eligibility</div>
                    <div class="text-[11px] text-slate-500">Subject prerequisites verified</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Three Core Features Section -->
      <section class="py-16 bg-white border-y border-slate-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <h2 class="text-3xl font-extrabold text-[#14213D] tracking-tight">
              Why <span class="text-blue-600">Career Compass</span> Outperforms Fixed Questionnaires
            </h2>
            <p class="mt-3 text-base text-slate-600">
              Unlike static 50-question psychometric tests, our AI listens to each answer and builds a personalized dialogue tailored to your unique interests.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Feature Card 1 -->
            <div class="bg-gradient-to-b from-blue-50/50 to-white p-8 rounded-2xl border border-blue-100/80 shadow-soft card-hover-lift">
              <div class="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#14213D] mb-3">1. AI-Powered Career Discovery</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Dynamic 10-question adaptive assessment that explores your hobbies, academic strengths, work style preferences, and creative ambitions in real time.
              </p>
            </div>

            <!-- Feature Card 2 -->
            <div class="bg-gradient-to-b from-blue-50/50 to-white p-8 rounded-2xl border border-blue-100/80 shadow-soft card-hover-lift">
              <div class="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#14213D] mb-3">2. Personalized Recommendations</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Receive exactly <strong>Top 3 degree courses</strong> (12th pass) or <strong>Top 2 intermediate streams</strong> (10th pass), vetted against eligibility criteria, entrance exams, and syllabus rigor.
              </p>
            </div>

            <!-- Feature Card 3 -->
            <div class="bg-gradient-to-b from-blue-50/50 to-white p-8 rounded-2xl border border-blue-100/80 shadow-soft card-hover-lift">
              <div class="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-6 shadow-md shadow-sky-500/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#14213D] mb-3">3. Explore Future Opportunities</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Compare starting salaries, further study paths (Masters, Ph.D.), government entrance examinations (JEE, NEET, CLAT, UPSC), and private sector market trends.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- How AI Counselling Works (3 Steps) -->
      <section class="py-16 md:py-20 bg-[#F5F9FF]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">Methodology</span>
            <h2 class="mt-3 text-3xl font-extrabold text-[#14213D] tracking-tight">How Career Compass Works</h2>
            <p class="mt-2 text-slate-600 text-sm sm:text-base">Three easy steps from initial confusion to an actionable, high-clarity educational roadmap.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            <!-- Step 1 -->
            <div class="bg-white p-7 rounded-2xl shadow-soft border border-slate-200/70 relative z-10 text-center">
              <div class="w-12 h-12 mx-auto rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center mb-4">
                1
              </div>
              <h4 class="text-lg font-bold text-[#14213D] mb-2">Select Your Qualification</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Choose whether you just cleared Class 10 (stream selection) or Class 12 (undergraduate course selection).
              </p>
            </div>

            <!-- Step 2 -->
            <div class="bg-white p-7 rounded-2xl shadow-soft border border-slate-200/70 relative z-10 text-center">
              <div class="w-12 h-12 mx-auto rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center mb-4">
                2
              </div>
              <h4 class="text-lg font-bold text-[#14213D] mb-2">Engage in 10 AI Questions</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Chat naturally. Each follow-up question is generated dynamically based on your previous answer, with suggested option pills.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="bg-white p-7 rounded-2xl shadow-soft border border-slate-200/70 relative z-10 text-center">
              <div class="w-12 h-12 mx-auto rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center mb-4">
                3
              </div>
              <h4 class="text-lg font-bold text-[#14213D] mb-2">Get Actionable Roadmaps</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Review your top course or stream matches, compare key metrics, and download a printable PDF career report.
              </p>
            </div>

          </div>

          <!-- Bottom CTA -->
          <div class="mt-14 text-center">
            <button onclick="window.App.navigateTo('education-select')" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-bold text-base shadow-royal transition cursor-pointer">
              <span>Begin Your Free Assessment Now</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>

        </div>
      </section>
    `;
  }
};
