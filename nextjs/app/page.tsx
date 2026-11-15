'use client';

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [config, setConfig] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'assessment' | 'explore' | 'about'>('home');
  const [educationLevel, setEducationLevel] = useState<'10th' | '12th' | null>(null);
  const [session, setSession] = useState<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [categoriesData, setCategoriesData] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.warn('Config fetch warning:', err));

    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategoriesData(data))
      .catch(err => console.warn('Categories fetch warning:', err));
  }, []);

  const startAssessment = async (level: '10th' | '12th') => {
    setIsLoading(true);
    setEducationLevel(level);
    try {
      const res = await fetch('/api/chat/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ education_level: level })
      });
      const data = await res.json();
      setSession({
        id: data.session_id,
        education_level: data.education_level,
        current_question_index: data.question_number,
        completed: false,
        history: [
          {
            role: 'model',
            content: data.question,
            quick_options: data.quick_options,
            question_number: 1
          }
        ],
        profile: data.profile,
        recommendations: null
      });
      setActiveTab('assessment');
    } catch (e) {
      alert('Could not connect to Next.js API route.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!session || !text.trim() || isLoading || isTyping) return;
    const answer = text.trim();
    setInputValue('');

    const updatedHistory = [
      ...session.history,
      { role: 'user', content: answer, question_number: session.current_question_index }
    ];

    setSession((prev: any) => ({ ...prev, history: updatedHistory }));
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: session.id, answer })
      });
      const data = await res.json();
      setIsTyping(false);

      if (data.completed) {
        setSession((prev: any) => ({
          ...prev,
          completed: true,
          recommendations: data.recommendations,
          profile: data.profile
        }));
      } else {
        setSession((prev: any) => ({
          ...prev,
          current_question_index: data.question_number,
          history: [
            ...updatedHistory,
            {
              role: 'model',
              content: data.question,
              quick_options: data.quick_options,
              question_number: data.question_number
            }
          ],
          profile: data.profile
        }));
      }
    } catch (e) {
      setIsTyping(false);
      alert('Failed to send message to Next.js backend.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center bg-white">
              <img src="/assets/logo-icon.svg" alt="Career Compass Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-extrabold text-xl text-[#14213D] leading-none flex items-center gap-1.5">
                <span>Career <span className="text-blue-600">Compass</span></span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">Next.js</span>
              </div>
              <div className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Discover Your Interests. Explore Your Future.
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-blue-600' : 'hover:text-blue-600'}>Home</button>
            <button onClick={() => setActiveTab('assessment')} className={activeTab === 'assessment' ? 'text-blue-600' : 'hover:text-blue-600'}>Assessment</button>
            <button onClick={() => setActiveTab('explore')} className={activeTab === 'explore' ? 'text-blue-600' : 'hover:text-blue-600'}>Explore Careers</button>
            <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'text-blue-600' : 'hover:text-blue-600'}>About</button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{config?.framework || 'Next.js App Router'}</span>
            </div>
            <button onClick={() => { setActiveTab('assessment'); setSession(null); setEducationLevel(null); }} className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md hover:bg-blue-700 transition">
              Start Assessment
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <section className="text-center py-12 md:py-20 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Discover Your Interests. Explore Your Future.</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#14213D] tracking-tight max-w-4xl mx-auto">
              Empowering Students with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Career Compass AI</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built on modern <strong>Next.js App Router</strong> backend APIs. Adaptive 10-question AI counselling to discover the top degree courses and intermediate streams.
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => { setActiveTab('assessment'); setSession(null); setEducationLevel(null); }} className="px-8 py-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-bold text-base shadow-lg transition">
                Start Career Assessment
              </button>
              <button onClick={() => setActiveTab('explore')} className="px-6 py-4 rounded-xl text-blue-700 bg-white border border-blue-200 font-bold text-base hover:bg-blue-50 transition">
                Explore 40+ Fields
              </button>
            </div>
          </section>
        )}

        {activeTab === 'assessment' && !session && (
          <section className="max-w-4xl mx-auto py-12 text-center space-y-8">
            <h2 className="text-3xl font-extrabold text-[#14213D]">What is your current educational qualification?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">High School</span>
                <h3 className="text-2xl font-bold mt-4 mb-2">10th PASS</h3>
                <p className="text-sm text-slate-600 mb-6">Completed Class 10 and looking for the right stream (Science, Commerce, Arts) for Intermediate.</p>
                <button onClick={() => startAssessment('10th')} className="w-full py-3.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl font-bold text-sm transition">
                  Continue with 10th
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">Pre-University</span>
                <h3 className="text-2xl font-bold mt-4 mb-2">12th PASS</h3>
                <p className="text-sm text-slate-600 mb-6">Completed Class 12 and looking for the right undergraduate degree course out of 40 categories.</p>
                <button onClick={() => startAssessment('12th')} className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md transition">
                  Continue with 12th
                </button>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'assessment' && session && !session.completed && (
          <section className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center text-xs font-semibold">
              <span className="text-blue-600 uppercase font-bold">{session.education_level} Pass Assessment</span>
              <span>Question {session.current_question_index} of 10</span>
              <button onClick={() => setSession(null)} className="text-red-500 hover:underline">Restart</button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 h-[500px] overflow-y-auto space-y-4">
              {session.history.map((msg: any, idx: number) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'}`}>
                    <p>{msg.content}</p>
                    {msg.quick_options && msg.quick_options.length > 0 && idx === session.history.length - 1 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.quick_options.map((opt: string, i: number) => (
                          <button key={i} onClick={() => handleSendMessage(opt)} className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-medium border border-blue-200 transition">
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-xs text-slate-500 italic flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                  Career Compass AI is generating your personalized follow-up...
                </div>
              )}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your answer or select an option above..."
                className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 shadow-sm transition">
                Send
              </button>
            </form>
          </section>
        )}

        {activeTab === 'assessment' && session && session.completed && (
          <section className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase bg-emerald-100 px-3 py-1 rounded-full">Assessment Complete</span>
              <h2 className="text-3xl font-extrabold text-[#14213D]">
                {session.education_level === '12th' ? 'Your Top 3 Degree Courses' : 'Your Top 2 Academic Streams'}
              </h2>
            </div>

            <div className="space-y-6">
              {session.recommendations.map((rec: any, idx: number) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">{rec.rank}</span>
                      <h3 className="text-2xl font-bold mt-2 text-[#14213D]">{rec.recommended_course || rec.stream_name}</h3>
                      <p className="text-xs text-slate-500">{rec.category_name || rec.tagline}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-blue-600">{rec.match_percentage}%</span>
                      <span className="block text-[10px] text-slate-500">AI Estimate</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 bg-blue-50/50 p-4 rounded-xl border border-blue-100">{rec.why_matches}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => { setSession(null); setEducationLevel(null); }} className="px-6 py-3 bg-slate-800 text-white font-bold text-sm rounded-xl hover:bg-slate-900 transition">
                Take Another Assessment
              </button>
            </div>
          </section>
        )}

        {activeTab === 'explore' && categoriesData && (
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-[#14213D]">Explore 40+ Career Fields</h2>
              <input
                type="text"
                placeholder="Search by career, degree, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoriesData.class_12_categories
                .filter((cat: any) => !searchQuery || cat.category.toLowerCase().includes(searchQuery.toLowerCase()) || cat.courses.some((c: string) => c.toLowerCase().includes(searchQuery.toLowerCase())))
                .map((cat: any) => (
                  <div key={cat.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">{cat.domain}</span>
                    <h3 className="font-bold text-lg text-[#14213D]">{cat.category}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2"><strong>Degrees:</strong> {cat.courses.join(', ')}</p>
                    <p className="text-xs text-slate-600 line-clamp-2"><strong>Careers:</strong> {cat.careers.join(', ')}</p>
                  </div>
                ))}
            </div>
          </section>
        )}

        {activeTab === 'about' && (
          <section className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-3xl font-extrabold text-[#14213D]">About Career Compass</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Career Compass is an AI-powered conversational educational technology platform built on Next.js. It conducts 10 adaptive questions to guide students toward their ideal higher secondary streams or undergraduate degrees.
            </p>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
              <strong>Framework Note:</strong> The backend is powered by Next.js Route Handlers (`app/api/...`), completely ported from Python to modern TypeScript.
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        &copy; 2026 Career Compass. Built with Next.js App Router and TypeScript.
      </footer>
    </div>
  );
}
