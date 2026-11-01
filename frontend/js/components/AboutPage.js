/**
 * Career Compass - About Us & How It Works Component
 */

window.AboutPageComponent = {
  render() {
    return `
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="w-16 h-16 mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-md mb-4 bg-white">
            <img src="assets/logo-icon.svg" alt="Career Compass Logo" class="w-full h-full object-cover">
          </div>
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">Platform Philosophy</span>
          <h1 class="mt-3 text-3xl sm:text-5xl font-extrabold text-[#14213D] tracking-tight">
            About Career Compass
          </h1>
          <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover Your Interests. Explore Your Future. Pioneering conversational educational technology to guide secondary and higher secondary students toward rewarding academic horizons.
          </p>
        </div>

        <!-- Vision and Story -->
        <div class="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft mb-12">
          <h2 class="text-2xl font-bold text-[#14213D] mb-4">Our Mission at Career Compass</h2>
          <p class="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
            Every year, millions of students finish Class 10 and Class 12 facing overwhelming pressure to select streams or college degrees without knowing how their personal passions relate to modern careers.
          </p>
          <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
            <strong>Career Compass</strong> was built to replace rigid, mechanical multiple-choice questionnaires with an <strong>adaptive, empathetic conversational AI</strong>. Rather than forcing students into boxes, our platform listens to students, discovers what truly excites them in their free time, and connects those themes with real undergraduate degrees and academic streams.
          </p>
        </div>

        <!-- Core Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div class="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
            <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
              1
            </div>
            <h3 class="text-xl font-bold text-[#14213D] mb-3">Adaptive Context Dialogue</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Our AI retains conversation history from question 1 to 10. If you mention loving nature drawing, it doesn't immediately suggest B.Tech; it asks whether you prefer realistic sketches, architectural blueprints, or UI/UX design.
            </p>
          </div>

          <div class="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100">
            <div class="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
              2
            </div>
            <h3 class="text-xl font-bold text-[#14213D] mb-3">Strict Eligibility Guardrails</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              We never recommend courses that students are academically ineligible to pursue. For instance, MBBS is never recommended to a Commerce student, and professional engineering degrees strictly require Mathematics prerequisites.
            </p>
          </div>

          <div class="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
            <div class="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
              3
            </div>
            <h3 class="text-xl font-bold text-[#14213D] mb-3">Holistic Career Taxonomy</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Covering 40 detailed undergraduate categories and 5 intermediate streams. From emerging fields like Artificial Intelligence, Cybersecurity, and EV Mobility, to noble service sectors like Law, Civil Services, and Clinical Medicine.
            </p>
          </div>

          <div class="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
            <div class="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
              4
            </div>
            <h3 class="text-xl font-bold text-[#14213D] mb-3">Ethical AI Principles</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              Career Compass makes clear that its match indicators are AI estimates, not psychological clinical diagnoses. We provide transparent entrance exam prerequisites, subject challenges, and industry salary ranges with context.
            </p>
          </div>

        </div>

        <!-- FAQs Section -->
        <div class="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft mb-12">
          <h2 class="text-2xl font-bold text-[#14213D] mb-6">Frequently Asked Questions</h2>
          
          <div class="space-y-6 text-sm">
            <div>
              <h4 class="font-bold text-slate-800 text-base mb-1">Is Career Compass free for all students?</h4>
              <p class="text-slate-600 leading-relaxed">Yes, Career Compass is completely free to use. Students can take the assessment multiple times and download comprehensive career reports as printable PDFs.</p>
            </div>

            <div class="pt-4 border-t border-slate-100">
              <h4 class="font-bold text-slate-800 text-base mb-1">How many questions does the AI counsellor ask?</h4>
              <p class="text-slate-600 leading-relaxed">The chatbot asks approximately 10 questions, one at a time. It provides both quick clickable option pills and an open text box so you can express your thoughts in your own words.</p>
            </div>

            <div class="pt-4 border-t border-slate-100">
              <h4 class="font-bold text-slate-800 text-base mb-1">Can I review or change a previous answer?</h4>
              <p class="text-slate-600 leading-relaxed">Yes! At any point during the assessment, you can click the "Previous Question" button in the upper control bar to re-answer the preceding question.</p>
            </div>

            <div class="pt-4 border-t border-slate-100">
              <h4 class="font-bold text-slate-800 text-base mb-1">What AI model powers Career Compass?</h4>
              <p class="text-slate-600 leading-relaxed">The platform runs on Google Gemini (such as Gemini 2.5 Flash), supported by our built-in intelligent semantic decision engine. You can configure your own Google Gemini API key via the settings panel at any time.</p>
            </div>
          </div>
        </div>

        <!-- Call to Action Banner -->
        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-12 text-center shadow-royal">
          <h2 class="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Discover Your Future with Career Compass?</h2>
          <p class="text-blue-100 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Take the 10-question adaptive assessment today and receive personalized recommendations tailored to your unique passions.
          </p>
          <button onclick="window.App.navigateTo('education-select')" class="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold text-base rounded-xl shadow-lg transition cursor-pointer">
            Start Career Assessment Now
          </button>
        </div>

      </section>
    `;
  }
};
