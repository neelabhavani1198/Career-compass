/**
 * Career Compass - Compare Courses / Streams Modal Component
 */

window.CompareModalComponent = {
  render(session) {
    if (!session || !session.recommendations) return "";

    const { education_level, recommendations } = session;
    const is12th = education_level === "12th";

    return `
      <div id="compare-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
        
        <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
          
          <!-- Modal Header -->
          <div class="px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
            <div>
              <h3 class="text-xl font-bold">
                ${is12th ? "Side-by-Side Comparison: Top 3 Degree Courses" : "Side-by-Side Comparison: Top 2 Academic Streams"}
              </h3>
              <p class="text-xs text-blue-100 mt-0.5">
                Compare curriculum, eligibility, entrance examinations, and career scopes.
              </p>
            </div>
            
            <button onclick="window.App.closeCompareModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Comparison Table Scroll Container -->
          <div class="flex-1 overflow-x-auto overflow-y-auto p-6">
            ${is12th ? this.render12thTable(recommendations) : this.render10thTable(recommendations)}
          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
            <button onclick="window.App.downloadPDFReport()" class="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer">
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Download as PDF</span>
            </button>

            <button onclick="window.App.closeCompareModal()" class="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition cursor-pointer">
              Close Comparison
            </button>
          </div>

        </div>

      </div>
    `;
  },

  render12thTable(recs) {
    return `
      <table class="w-full border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr>
            <th class="p-4 bg-slate-100 text-slate-700 font-bold border-b border-slate-200 w-1/4">Evaluation Parameter</th>
            ${recs.map(r => `
              <th class="p-4 bg-blue-50/70 border-b-2 border-blue-500 font-extrabold text-[#14213D] w-1/4">
                <span class="text-xs text-blue-600 block mb-0.5">${r.rank}</span>
                <span class="text-base">${r.recommended_course}</span>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 text-slate-700">
          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">AI Interest Fit</td>
            ${recs.map(r => `
              <td class="p-4">
                <span class="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                  ${r.match_percentage}% Fit
                </span>
              </td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Course Duration</td>
            ${recs.map(r => `
              <td class="p-4 font-semibold text-slate-800">${r.duration}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Academic Eligibility</td>
            ${recs.map(r => `
              <td class="p-4">${r.eligibility}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Entrance Examinations</td>
            ${recs.map(r => `
              <td class="p-4 font-medium text-blue-700">${(r.entrance_exams || []).join(", ") || "Merit Based"}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Estimated Starting Package</td>
            ${recs.map(r => `
              <td class="p-4 font-bold text-emerald-700">${r.salary_range}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Curriculum Highlights</td>
            ${recs.map(r => `
              <td class="p-4 text-xs">${(r.important_subjects || []).join(", ")}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Prominent Career Paths</td>
            ${recs.map(r => `
              <td class="p-4 font-medium">${(r.career_opportunities || []).join(", ")}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Higher Studies Scope</td>
            ${recs.map(r => `
              <td class="p-4 text-xs">${(r.further_study || []).join(", ")}</td>
            `).join("")}
          </tr>
        </tbody>
      </table>
    `;
  },

  render10thTable(recs) {
    return `
      <table class="w-full border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr>
            <th class="p-4 bg-slate-100 text-slate-700 font-bold border-b border-slate-200 w-1/3">Evaluation Metric</th>
            ${recs.map(r => `
              <th class="p-4 bg-blue-50/70 border-b-2 border-blue-500 font-extrabold text-[#14213D] w-1/3">
                <span class="text-xs text-blue-600 block mb-0.5">${r.rank}</span>
                <span class="text-lg">${r.stream_name}</span>
                <span class="block text-xs font-normal text-slate-500">${r.tagline}</span>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 text-slate-700">
          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Stream Affinity</td>
            ${recs.map(r => `
              <td class="p-4">
                <span class="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                  ${r.match_percentage}% Match
                </span>
              </td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Academic Rigor</td>
            ${recs.map(r => `
              <td class="p-4 font-bold text-indigo-700">${r.academic_rigor}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Main Subjects</td>
            ${recs.map(r => `
              <td class="p-4 font-medium">${(r.main_subjects || []).join(", ")}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Key Advantages</td>
            ${recs.map(r => `
              <td class="p-4 text-xs">
                <ul class="list-disc pl-4 space-y-1">
                  ${(r.important_advantages || []).map(a => `<li>${a}</li>`).join("")}
                </ul>
              </td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Subjects Needing Attention</td>
            ${recs.map(r => `
              <td class="p-4 text-xs text-amber-800">
                <ul class="list-disc pl-4 space-y-1">
                  ${(r.subjects_needing_attention || []).map(s => `<li>${s}</li>`).join("")}
                </ul>
              </td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Future Degree Doors</td>
            ${recs.map(r => `
              <td class="p-4 text-xs">${(r.future_degree_options || []).join(", ")}</td>
            `).join("")}
          </tr>

          <tr>
            <td class="p-4 font-bold bg-slate-50 text-slate-900">Career Horizons</td>
            ${recs.map(r => `
              <td class="p-4 font-medium">${(r.career_opportunities || []).join(", ")}</td>
            `).join("")}
          </tr>
        </tbody>
      </table>
    `;
  }
};
