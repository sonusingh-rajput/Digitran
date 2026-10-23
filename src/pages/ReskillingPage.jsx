import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Download,
  ArrowRight,
  Clock,
  Sparkles,
  Users,
  Award,
  Layers,
  Building2,
  Calendar,
  ShieldCheck,
  Send
} from 'lucide-react';

export default function ReskillingPage({ onOpenCallbackModal }) {
  const [activeTab, setActiveTab] = useState('colleges');
  const [checklistEmail, setChecklistEmail] = useState('');
  const [checklistDownloaded, setChecklistDownloaded] = useState(false);

  const collegePrograms = [
    {
      title: 'AI Foundation',
      audience: 'Students & Faculty',
      content: 'Core AI concepts, prompt engineering, GenAI tools, responsible AI, and personal productivity workflows.',
      format: '1–2 Days',
      badge: 'High Impact Workshop'
    },
    {
      title: 'AI Career Accelerator',
      audience: 'Final-Year Students',
      content: 'Generative AI + automation, portfolio capstone projects, real-world case studies, and AI interview preparation.',
      format: '4–8 Weeks',
      badge: 'Placement Favorite'
    },
    {
      title: 'Faculty AI Enablement',
      audience: 'Faculty & Department Heads',
      content: 'Teaching with AI, automated assessment design, academic research productivity, and institutional AI policies.',
      format: '2–5 Days',
      badge: 'Accreditation Ready'
    },
    {
      title: 'AI Innovation Lab',
      audience: 'Entire Institution',
      content: 'Setting up an on-campus AI center of excellence, mentored industry hackathons, challenges, and startup incubations.',
      format: 'Semester / Annual',
      badge: 'Institutional Flagship'
    }
  ];

  const companyPrograms = [
    {
      title: 'AI for Everyone',
      audience: 'Non-Technical Teams',
      content: 'Foundational AI literacy, safe enterprise usage, prompting techniques, and everyday administrative productivity.',
      format: '1 Day Bootcamp'
    },
    {
      title: 'AI for Managers & Leaders',
      audience: 'Team Leads & Department Heads',
      content: 'Use-case identification, governance, ROI calculation, change management, and technology vendor evaluation.',
      format: '2–3 Days'
    },
    {
      title: 'Role-Based AI Upskilling',
      audience: 'HR, Sales, Finance, Support, Ops, Dev',
      content: 'Tailored toolkits and automated pipelines designed specifically for day-to-day job functions and KPIs.',
      format: '3–6 Weeks'
    },
    {
      title: 'AI Champions Program',
      audience: 'Cross-Functional Power Users',
      content: 'Building an internal cohort of AI evangelists to drive grassroots workflow automation and team adoption.',
      format: '4–8 Weeks'
    },
    {
      title: 'Executive AI Strategy Workshop',
      audience: 'Founders & C-Suite',
      content: 'Turning broad AI ambitions into an actionable, prioritized 90-day execution roadmap and technology plan.',
      format: '1–2 Days Offsite'
    }
  ];

  const handleDownloadChecklist = (e) => {
    e.preventDefault();
    if (!checklistEmail) return;
    setChecklistDownloaded(true);
  };

  return (
    <>
      <Helmet>
        <title>AI Reskilling Programs | DigiTran</title>
        <meta
          name="description"
          content="Practical AI learning designed around roles, projects, and measurable business outcomes for colleges and enterprises."
        />
      </Helmet>

      <main className="min-h-screen bg-black text-white pt-28 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F6A305]/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Outcome-Led AI Capability Building</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Make Your Students and <br />
              <span className="text-[#F6A305]">Workforce AI-Ready</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-normal">
              Practical AI learning designed around real roles, projects, and measurable business outcomes—not just generic tool demonstrations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact?tab=colleges"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F6A305] hover:bg-[#e09404] text-black text-sm font-bold shadow-lg shadow-[#F6A305]/20 transition-all hover:scale-[1.02]"
              >
                Request an AI Program for Your Institution
              </Link>
              <button
                onClick={onOpenCallbackModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 text-sm font-semibold transition-all"
              >
                Book an AI Discovery Call
              </button>
            </div>
          </div>

          {/* Hero Lab Image Feature */}
          <div className="mt-14 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group max-w-5xl mx-auto">
            <img
              src="/images/ai_reskilling_lab.jpg"
              alt="DigiTran AI Innovation Lab"
              className="w-full h-[360px] sm:h-[460px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#F6A305] text-black text-xs font-bold uppercase mb-2">
                  Campus & Enterprise Hub
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Hands-On AI Labs & Real-World Capstones
                </h3>
                <p className="text-sm text-gray-300 max-w-xl">
                  Learners build functioning LLM copilots, custom automated pipelines, and deployed portfolio applications.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-[#F6A305] shrink-0 bg-black/60 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                <span>15,000+ Students Upskilled</span>
                <span>•</span>
                <span>100% Project Driven</span>
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME OVER HOURS BANNER */}
        <section className="py-12 bg-neutral-950 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-neutral-900 to-black border border-white/10 relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F6A305]">
                  Our Pedagogical Core
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                  We Sell Outcomes, Not Course Hours
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  We don’t believe in generic "30-hour GenAI video lectures." We anchor every engagement around verified deliverables:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-[#F6A305] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">For Higher Education</h4>
                      <p className="text-xs text-gray-400 mt-1">
                        "Build an AI-enabled portfolio project and crack high-tier campus placements with production code."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-[#F6A305] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">For Enterprise Teams</h4>
                      <p className="text-xs text-gray-400 mt-1">
                        "Help your operations and finance teams identify and automate 3 high-volume manual workflows in 30 days."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM CATALOG WITH TABS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F6A305]">
                Tailored Curriculums
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Explore Structured AI Offerings
              </h2>
            </div>

            {/* Toggle Switcher */}
            <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/15">
              <button
                onClick={() => setActiveTab('colleges')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'colleges'
                    ? 'bg-[#F6A305] text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                For Colleges & Universities
              </button>
              <button
                onClick={() => setActiveTab('companies')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'companies'
                    ? 'bg-[#F6A305] text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                For Companies & Enterprises
              </button>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeTab === 'colleges' ? collegePrograms : companyPrograms).map((prog, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-[#F6A305]/40 transition-all hover:bg-white/[0.02] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/10">
                      {prog.audience}
                    </span>
                    <span className="text-xs font-semibold text-[#F6A305] flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.format}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F6A305] transition-colors mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {prog.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">
                    {prog.badge || 'Hands-On Labs'}
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-white group-hover:text-[#F6A305] flex items-center gap-1 transition-colors"
                  >
                    View Syllabus & Proposal <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COLLEGE LEAD MAGNET */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-[#F6A305]/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6A305]/20 text-[#F6A305] text-xs font-bold mb-4">
                  <Download className="w-3.5 h-3.5" />
                  Free Strategic Resource
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  AI Readiness Checklist for Colleges
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  25 critical questions designed for University Leadership, Deans, Faculty, and Placement Teams to audit AI curriculum, compute infrastructure, and corporate recruiter readiness.
                </p>
                <ul className="space-y-2 text-xs text-gray-400 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305]" />
                    <span>Curriculum alignment with hiring benchmarks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305]" />
                    <span>Faculty enablement and ethical AI policies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305]" />
                    <span>Compute requirements for student capstones</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-white/5 p-6 rounded-2xl border border-white/10">
                {checklistDownloaded ? (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-10 h-10 text-[#F6A305] mx-auto mb-3" />
                    <h4 className="text-base font-bold text-white">Checklist Sent!</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Check your inbox for the download link and executive briefing.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDownloadChecklist} className="space-y-3">
                    <h4 className="text-sm font-bold text-white">Download the 25-Point Checklist</h4>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/20 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F6A305]"
                    />
                    <input
                      type="text"
                      placeholder="Institution / College Name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/20 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F6A305]"
                    />
                    <input
                      type="email"
                      value={checklistEmail}
                      onChange={(e) => setChecklistEmail(e.target.value)}
                      placeholder="Official Work Email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/20 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F6A305]"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#F6A305] hover:bg-[#e09404] text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      Instant PDF Download <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
