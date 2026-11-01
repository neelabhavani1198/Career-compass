/**
 * Career Compass - Recommendations & Results Page Component
 */

window.ResultsPageComponent = {
  render(state) {
    const { session } = state;
    if (!session || !session.recommendations) {
      return `<div class="p-16 text-center text-slate-500 font-semibold">No recommendation results available. Please complete an assessment.</div>`;
    }

    const { education_level, recommendations, profile } = session;
    const is12th = education_level === "12th";

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        
        <!-- Celebration Header -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide mb-4 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Assessment Complete &bull; 10 Dynamic Questions Analyzed</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-extrabold text-[#14213D] tracking-tight">
            ${is12th ? "Your Top 3 Degree Course Recommendations" : "Your Top 2 Intermediate Stream Recommendations"}
          </h1>

          <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            ${is12th 
              ? "Synthesized from your 10-question dialogue and matched against 40 interest categories with educational eligibility validation." 
              : "Synthesized from your dialogue to guide your Intermediate (+2) stream selection across CBSE, ICSE, and State Boards."}
          </p>

          <!-- Action Toolbar (Compare, PDF, Save, Share) -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onclick="window.App.openCompareModal()" class="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-royal flex items-center gap-2 transition cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              <span>${is12th ? "Compare 3 Courses" : "Compare 2 Streams"}</span>
            </button>

            <button onclick="window.App.downloadPDFReport()" class="px-5 py-3 rounded-xl bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm border border-blue-200 shadow-soft flex items-center gap-2 transition cursor-pointer">
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Download PDF Career Report</span>
            </button>

            <button onclick="window.App.shareRecommendations()" class="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm flex items-center gap-2 transition cursor-pointer">
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
              <span>Share</span>
            </button>

            <button onclick="window.App.confirmRestart()" class="px-4 py-3 rounded-xl bg-white hover:bg-red-50 text-red-600 font-semibold text-sm border border-red-200 shadow-sm flex items-center gap-2 transition cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <span>Restart</span>
            </button>
          </div>

        </div>

        <!-- Recommendation Cards List -->
        ${is12th ? this.render12thCards(recommendations) : this.render10thCards(recommendations)}

        <!-- Bottom Explorer & Advisory Banner -->
        <div class="mt-16 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft text-center max-w-4xl mx-auto">
          <h3 class="text-xl font-bold text-[#14213D] mb-2">Want to Explore More Career Fields?</h3>
          <p class="text-sm text-slate-600 max-w-2xl mx-auto mb-6">
            Browse our comprehensive library of all 40 specialized interest categories spanning Engineering, Medicine, Business, Design, Law, Pure Sciences, and Public Safety.
          </p>
          <button onclick="window.App.navigateTo('explore-careers')" class="px-6 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-sm rounded-xl transition inline-flex items-center gap-2 cursor-pointer border border-blue-200">
            <span>Open 40-Category Career Directory</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>

          <div class="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 leading-relaxed text-left">
            <strong>Advisory Notice & Caveat:</strong> Match indicators reflect algorithmic alignment with self-reported answers and do not scientifically diagnose aptitude. Starting salary ranges are indicative figures based on contemporary industry campus recruitment surveys and vary by candidate proficiency, geographic location, and institutional tier.
          </div>
        </div>

      </section>
    `;
  },

  render12thCards(recommendations) {
    return `
      <div class="space-y-8 max-w-5xl mx-auto">
        ${recommendations.map(rec => `
          <div class="bg-white rounded-3xl border-2 ${rec.rank_num === 1 ? 'border-blue-500 shadow-royal' : 'border-slate-200/80 shadow-soft'} p-6 sm:p-8 card-hover-lift transition relative overflow-hidden">
            
            <!-- Rank Header & Match Badge -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full ${
                    rec.rank_num === 1 ? 'bg-blue-600 text-white' :
                    rec.rank_num === 2 ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700'
                  }">
                    ${rec.rank}
                  </span>
                  <span class="text-xs font-semibold text-slate-400">&bull; ${rec.domain}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-[#14213D]">${rec.recommended_course}</h2>
                <div class="text-xs sm:text-sm text-slate-500 mt-1">
                  Category: <strong>${rec.category_name}</strong> (${rec.duration})
                </div>
              </div>

              <!-- Match Indicator -->
              <div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center sm:text-right min-w-[170px]">
                <div class="text-2xl sm:text-3xl font-black text-blue-600">${rec.match_percentage}%</div>
                <div class="text-[11px] font-semibold text-blue-800 uppercase tracking-wide">Interest Alignment</div>
                <div class="text-[10px] text-slate-500 mt-0.5">AI Algorithmic Estimate</div>
              </div>
            </div>

            <!-- Why Matches Rationale -->
            <div class="mt-6 bg-gradient-to-r from-blue-50/60 to-transparent p-4 sm:p-5 rounded-2xl border-l-4 border-blue-600">
              <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1.5 flex items-center gap-1.5">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Why This Course Matches Your Profile
              </h4>
              <p class="text-sm text-slate-700 leading-relaxed">
                ${rec.why_matches}
              </p>
            </div>

            <!-- Course Intelligence Grid -->
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              <!-- Column 1: Curriculum & Eligibility -->
              <div class="space-y-4">
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Key Curriculum Subjects</span>
                  <div class="flex flex-wrap gap-1.5">
                    ${(rec.important_subjects || []).map(s => `
                      <span class="px-2.5 py-1 bg-white text-slate-700 border border-slate-200 rounded-md font-medium text-xs">
                        ${s}
                      </span>
                    `).join("")}
                  </div>
                </div>

                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Academic Eligibility</span>
                  <p class="text-slate-800 font-medium">${rec.eligibility}</p>
                </div>

                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Entrance Examinations</span>
                  <div class="flex flex-wrap gap-1.5">
                    ${(rec.entrance_exams || []).map(e => `
                      <span class="px-2.5 py-1 bg-blue-100/70 text-blue-800 rounded-md font-semibold text-xs">
                        ${e}
                      </span>
                    `).join("")}
                  </div>
                </div>
              </div>

              <!-- Column 2: Careers, Salary & Further Study -->
              <div class="space-y-4">
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Career Opportunities</span>
                  <p class="text-slate-800 font-medium">
                    ${(rec.career_opportunities || []).join(" &bull; ")}
                  </p>
                </div>

                <div class="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                  <span class="text-emerald-800 font-semibold block mb-1">Estimated Starting Salary</span>
                  <div class="text-base font-bold text-emerald-700">${rec.salary_range}</div>
                  <div class="text-[11px] text-slate-500 mt-1">${rec.salary_notes}</div>
                </div>

                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Further Study & Specializations</span>
                  <p class="text-slate-700">
                    ${(rec.further_study || []).join(", ")}
                  </p>
                </div>
              </div>

            </div>

            <!-- Alternative Degree Options in this Category -->
            ${rec.all_degree_options && rec.all_degree_options.length > 1 ? `
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center flex-wrap gap-2 text-xs">
                <span class="font-bold text-slate-500">Related Degrees:</span>
                ${rec.all_degree_options.map(deg => `
                  <span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    ${deg}
                  </span>
                `).join("")}
              </div>
            ` : ""}

          </div>
        `).join("")}
      </div>
    `;
  },

  render10thCards(recommendations) {
    return `
      <div class="space-y-8 max-w-5xl mx-auto">
        ${recommendations.map(rec => `
          <div class="bg-white rounded-3xl border-2 ${rec.rank_num === 1 ? 'border-blue-500 shadow-royal' : 'border-slate-200/80 shadow-soft'} p-6 sm:p-8 card-hover-lift transition relative overflow-hidden">
            
            <!-- Rank Header & Match Badge -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full ${
                    rec.rank_num === 1 ? 'bg-blue-600 text-white' : 'bg-indigo-100 text-indigo-700'
                  }">
                    ${rec.rank}
                  </span>
                  <span class="text-xs font-semibold text-slate-400">&bull; Academic Rigor: ${rec.academic_rigor}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-[#14213D]">${rec.stream_name}</h2>
                <div class="text-xs sm:text-sm text-slate-500 mt-1">
                  ${rec.tagline}
                </div>
              </div>

              <!-- Match Indicator -->
              <div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center sm:text-right min-w-[170px]">
                <div class="text-2xl sm:text-3xl font-black text-blue-600">${rec.match_percentage}%</div>
                <div class="text-[11px] font-semibold text-blue-800 uppercase tracking-wide">Stream Affinity</div>
                <div class="text-[10px] text-slate-500 mt-0.5">AI Algorithmic Estimate</div>
              </div>
            </div>

            <!-- Why Matches Rationale -->
            <div class="mt-6 bg-gradient-to-r from-blue-50/60 to-transparent p-4 sm:p-5 rounded-2xl border-l-4 border-blue-600">
              <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1.5 flex items-center gap-1.5">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Why This Stream Matches Your Interests
              </h4>
              <p class="text-sm text-slate-700 leading-relaxed">
                ${rec.why_matches}
              </p>
            </div>

            <!-- Stream Intelligence Grid -->
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              <!-- Column 1: Subjects & Advantages -->
              <div class="space-y-4">
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Compulsory & Elective Subjects</span>
                  <div class="flex flex-wrap gap-1.5">
                    ${(rec.main_subjects || []).map(s => `
                      <span class="px-2.5 py-1 bg-white text-slate-800 border border-slate-200 rounded-md font-semibold text-xs">
                        ${s}
                      </span>
                    `).join("")}
                  </div>
                </div>

                <div class="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <span class="text-emerald-800 font-semibold block mb-1.5">Important Stream Advantages</span>
                  <ul class="space-y-1.5 text-slate-700">
                    ${(rec.important_advantages || []).map(a => `
                      <li class="flex items-start gap-1.5">
                        <span class="text-emerald-600 font-bold">&bull;</span>
                        <span>${a}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>
              </div>

              <!-- Column 2: Subjects Needing Attention & Future Courses -->
              <div class="space-y-4">
                <div class="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                  <span class="text-amber-800 font-semibold block mb-1.5">Subjects Requiring Particular Attention</span>
                  <ul class="space-y-1.5 text-slate-700">
                    ${(rec.subjects_needing_attention || []).map(sub => `
                      <li class="flex items-start gap-1.5">
                        <span class="text-amber-600 font-bold">!</span>
                        <span>${sub}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>

                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Future Degree Pathways</span>
                  <p class="text-slate-800 font-medium leading-relaxed">
                    ${(rec.future_degree_options || []).join(" &bull; ")}
                  </p>
                </div>

                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span class="text-slate-500 font-semibold block mb-1">Career Opportunities</span>
                  <p class="text-slate-700">
                    ${(rec.career_opportunities || []).join(", ")}
                  </p>
                </div>
              </div>

            </div>

            <!-- Board Variation Note -->
            <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <strong>School & Board Note:</strong> ${rec.board_notes} Available subject combinations vary between schools; verify specific 5th elective offerings before final admission.
            </div>

          </div>
        `).join("")}
      </div>
    `;
  }
};
