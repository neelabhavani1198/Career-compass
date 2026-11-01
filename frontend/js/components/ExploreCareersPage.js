/**
 * Career Compass - Explore Careers & Categories Directory Component
 */

window.ExploreCareersComponent = {
  activeTab: "12th", // "12th" or "10th"
  activeDomain: "All Domains",
  searchQuery: "",
  selectedCategory: null,

  render(categoriesData) {
    const class12Cats = categoriesData?.class_12_categories || [];
    const class10Streams = categoriesData?.class_10_streams || window.CAREER_COMPASS_DATA.class10Streams;

    // Filter 12th categories
    let filtered12th = class12Cats.filter(cat => {
      const matchSearch = !this.searchQuery || 
        cat.category.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        cat.courses.some(c => c.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        cat.careers.some(car => car.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        cat.domain.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchDomain = this.activeDomain === "All Domains" || cat.domain === this.activeDomain;
      return matchSearch && matchDomain;
    });

    // Filter 10th streams
    let filtered10th = class10Streams.filter(stream => {
      return !this.searchQuery ||
        stream.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        stream.tagline.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        stream.future_courses.some(c => c.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        stream.career_opportunities.some(car => car.toLowerCase().includes(this.searchQuery.toLowerCase()));
    });

    const domains = window.CAREER_COMPASS_DATA.class12Domains;

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-10">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">Database & Directory</span>
          <h1 class="mt-3 text-3xl sm:text-5xl font-extrabold text-[#14213D] tracking-tight">
            Explore Careers & Academic Pathways
          </h1>
          <p class="mt-3 text-base text-slate-600">
            Browse our structured repository of 40 specialized interest categories and 5 academic intermediate streams.
          </p>
        </div>

        <!-- Toggle 12th Categories vs 10th Streams -->
        <div class="flex justify-center mb-8">
          <div class="bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-soft inline-flex gap-2">
            <button 
              onclick="window.ExploreCareersComponent.setTab('12th')" 
              class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                this.activeTab === '12th' ? 'bg-blue-600 text-white shadow-royal' : 'text-slate-600 hover:text-blue-600'
              }">
              40 Undergrad Categories (12th Pass)
            </button>
            <button 
              onclick="window.ExploreCareersComponent.setTab('10th')" 
              class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                this.activeTab === '10th' ? 'bg-blue-600 text-white shadow-royal' : 'text-slate-600 hover:text-blue-600'
              }">
              5 Intermediate Streams (10th Pass)
            </button>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mb-8">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search by career, course (B.Tech, MBBS, BBA), subject or exam..." 
              value="${this.searchQuery}"
              oninput="window.ExploreCareersComponent.handleSearch(this.value)"
              class="w-full px-5 py-4 pl-12 rounded-2xl bg-white border border-slate-200 shadow-soft text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <svg class="w-5 h-5 text-slate-400 absolute left-4 top-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <!-- Domain Pills (For 12th view) -->
        ${this.activeTab === '12th' ? `
          <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            ${domains.map(d => `
              <button 
                onclick="window.ExploreCareersComponent.setDomain('${d}')"
                class="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  this.activeDomain === d 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200/80'
                }">
                ${d}
              </button>
            `).join("")}
          </div>
        ` : ""}

        <!-- Cards Grid -->
        ${this.activeTab === '12th' ? this.render12thGrid(filtered12th) : this.render10thGrid(filtered10th)}

        <!-- Detail Modal (if selected) -->
        ${this.selectedCategory ? this.renderDetailModal(this.selectedCategory) : ""}

      </section>
    `;
  },

  render12thGrid(categories) {
    if (categories.length === 0) {
      return `<div class="p-16 text-center text-slate-500 font-semibold bg-white rounded-3xl border border-slate-200">No matching career fields found for your search.</div>`;
    }

    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${categories.map(cat => `
          <div onclick="window.ExploreCareersComponent.openDetail(${cat.id})" class="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-500 shadow-soft hover:shadow-royal transition duration-200 card-hover-lift cursor-pointer flex flex-col justify-between text-left">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  ${cat.domain}
                </span>
                <span class="text-xs font-bold text-slate-400">#${cat.id}</span>
              </div>

              <h3 class="text-lg font-bold text-[#14213D] mb-2">${cat.category}</h3>
              
              <div class="mb-4">
                <span class="text-xs font-semibold text-slate-400 block mb-1">Key Degree Courses:</span>
                <p class="text-xs font-medium text-slate-700 line-clamp-2">
                  ${cat.courses.join(", ")}
                </p>
              </div>

              <div class="mb-4">
                <span class="text-xs font-semibold text-slate-400 block mb-1">Typical Career Roles:</span>
                <p class="text-xs text-slate-600 line-clamp-2">
                  ${cat.careers.join(", ")}
                </p>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold">
              <span>View Full Details & Requirements</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  render10thGrid(streams) {
    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${streams.map(stream => `
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-500 shadow-soft hover:shadow-royal transition duration-200 card-hover-lift flex flex-col justify-between text-left">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Rigor: ${stream.academic_rigor}
                </span>
                <span class="text-xs font-semibold text-slate-400">${stream.id}</span>
              </div>

              <h3 class="text-xl font-bold text-[#14213D] mb-1">${stream.name}</h3>
              <p class="text-xs font-medium text-slate-500 mb-4">${stream.tagline}</p>

              <div class="mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                <strong class="text-slate-800 block mb-1">Main Subjects:</strong>
                <span class="text-slate-600">${stream.main_subjects.join(", ")}</span>
              </div>

              <div class="mb-4 text-xs">
                <strong class="text-slate-800 block mb-1">Future Degrees:</strong>
                <p class="text-slate-600 line-clamp-2">${stream.future_courses.join(", ")}</p>
              </div>
            </div>

            <button onclick="window.App.startAssessmentSession('10th')" class="w-full mt-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs transition cursor-pointer">
              Assess Fit For This Stream
            </button>
          </div>
        `).join("")}
      </div>
    `;
  },

  renderDetailModal(cat) {
    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
        <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden text-left">
          
          <div class="px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-200">${cat.domain} &bull; Category #${cat.id}</span>
              <h3 class="text-2xl font-bold mt-0.5">${cat.category}</h3>
            </div>
            <button onclick="window.ExploreCareersComponent.closeDetail()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
            <div>
              <h5 class="font-bold text-slate-800 uppercase tracking-wider text-xs mb-2">Available Degree Programs:</h5>
              <div class="flex flex-wrap gap-2">
                ${cat.courses.map(c => `<span class="px-3 py-1 bg-blue-50 text-blue-700 font-bold rounded-lg border border-blue-100">${c}</span>`).join("")}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div><strong>Typical Duration:</strong> ${cat.duration}</div>
              <div><strong>Academic Eligibility:</strong> ${cat.eligibility}</div>
              <div><strong>Entrance Exams:</strong> ${(cat.entrance_exams || []).join(", ") || "Merit Based"}</div>
              <div><strong>Estimated Starting Salary:</strong> ${cat.salary_range}</div>
            </div>

            <div>
              <h5 class="font-bold text-slate-800 uppercase tracking-wider text-xs mb-1.5">Key Curriculum Subjects:</h5>
              <div class="flex flex-wrap gap-1.5">
                ${cat.important_subjects.map(s => `<span class="px-2.5 py-1 bg-white text-slate-700 border border-slate-200 rounded-md font-medium">${s}</span>`).join("")}
              </div>
            </div>

            <div>
              <h5 class="font-bold text-slate-800 uppercase tracking-wider text-xs mb-1">Career Opportunities:</h5>
              <p class="text-slate-700 font-medium">${cat.careers.join(" &bull; ")}</p>
            </div>

            <div>
              <h5 class="font-bold text-slate-800 uppercase tracking-wider text-xs mb-1">Higher Study Pathways:</h5>
              <p class="text-slate-600">${cat.further_study.join(", ")}</p>
            </div>

            <div class="p-3 bg-amber-50 rounded-xl border border-amber-100 text-slate-600 text-[11px]">
              <strong>Salary Caveat:</strong> ${cat.salary_notes}
            </div>
          </div>

          <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
            <button onclick="window.App.startAssessmentSession('12th')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition cursor-pointer">
              Take Assessment to Test My Fit
            </button>
            <button onclick="window.ExploreCareersComponent.closeDetail()" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition cursor-pointer">
              Close
            </button>
          </div>

        </div>
      </div>
    `;
  },

  setTab(tab) {
    this.activeTab = tab;
    window.App.renderApp();
  },

  setDomain(domain) {
    this.activeDomain = domain;
    window.App.renderApp();
  },

  handleSearch(query) {
    this.searchQuery = query;
    window.App.renderApp();
  },

  openDetail(catId) {
    const categories = window.App.state.categoriesData?.class_12_categories || [];
    this.selectedCategory = categories.find(c => c.id === catId);
    window.App.renderApp();
  },

  closeDetail() {
    this.selectedCategory = null;
    window.App.renderApp();
  }
};
