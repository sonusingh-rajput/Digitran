import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Building2,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Zap,
  Award,
  Target,
  ChevronRight
} from 'lucide-react';

const programs = [
  {
    id: 'ai-career-accelerator',
    category: 'For Colleges',
    tag: 'Most Popular',
    tagColor: 'text-[#F6A305] bg-[#F6A305]/10 border-[#F6A305]/30',
    icon: GraduationCap,
    title: 'AI Career Accelerator',
    subtitle: 'Final-Year Students',
    duration: '4–8 Weeks',
    mode: 'Hybrid / On-Campus',
    audience: '50–500 Students',
    outcomes: [
      'GenAI & Prompt Engineering for real job roles',
      'Portfolio projects with industry mentors',
      'Resume & interview prep with AI tools',
      'Placement-ready AI skills certification'
    ],
    desc: 'End-to-end AI readiness bootcamp for final-year students. Combines GenAI tools, automation exposure, and portfolio projects that speak to top-tier recruiters.'
  },
  {
    id: 'faculty-ai-enablement',
    category: 'For Colleges',
    tag: 'High Impact',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    icon: Award,
    title: 'Faculty AI Enablement',
    subtitle: 'Teaching Staff & HODs',
    duration: '2–5 Days',
    mode: 'On-Campus Workshop',
    audience: '20–100 Faculty',
    outcomes: [
      'Teaching with AI: lesson design & assessments',
      'AI-assisted research and paper writing',
      'Automated grading and classroom tools',
      'Curriculum integration frameworks'
    ],
    desc: 'A focused workshop enabling faculty to teach with AI, redesign assessment frameworks, and use GenAI tools productively in academic settings.'
  },
  {
    id: 'ai-foundation-workshop',
    category: 'For Colleges',
    tag: 'Entry Level',
    tagColor: 'text-green-400 bg-green-500/10 border-green-500/30',
    icon: Sparkles,
    title: 'AI Foundation Workshop',
    subtitle: 'All Students & Faculty',
    duration: '1–2 Days',
    mode: 'On-Campus Intensive',
    audience: 'Any Batch Size',
    outcomes: [
      'What AI can and cannot do — practical clarity',
      'Top 10 AI tools every student should know',
      'Hands-on prompt engineering exercises',
      'Career pathways in an AI-first world'
    ],
    desc: 'A single-day or two-day awareness-to-action sprint for institutions looking to kick off their AI journey with minimum friction.'
  },
  {
    id: 'ai-innovation-lab',
    category: 'For Colleges',
    tag: 'Flagship',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    icon: Zap,
    title: 'AI Innovation Lab',
    subtitle: 'Institution-Wide Program',
    duration: 'Semester / Annual',
    mode: 'Blended',
    audience: 'Full Campus',
    outcomes: [
      'Institutional Center of Excellence setup',
      'Student-led AI projects & hackathons',
      'Industry mentors & live challenge tracks',
      'Curriculum co-creation for AICTE alignment'
    ],
    desc: 'A flagship institution-wide program that transforms a college into a recognized AI learning hub with measurable placement, research, and innovation outcomes.'
  },
  {
    id: 'role-based-ai-upskilling',
    category: 'For Companies',
    tag: 'Enterprise',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    icon: Building2,
    title: 'Role-Based AI Upskilling',
    subtitle: 'Teams & Departments',
    duration: '3–6 Weeks',
    mode: 'Live Online / Hybrid',
    audience: '25–500 Employees',
    outcomes: [
      'Targeted AI modules per function (Sales, HR, Ops)',
      'Real-world workflow automation exercises',
      'AI tool integration for existing software stacks',
      'Internal AI Champion cohort development'
    ],
    desc: 'Targeted AI upskilling tracks built per function — Sales, HR, Finance, Operations, Customer Support. No generic GenAI demos; just practical role-specific capability building.'
  },
  {
    id: 'executive-ai-strategy',
    category: 'For Companies',
    tag: 'C-Suite',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    icon: Target,
    title: 'Executive AI Strategy Workshop',
    subtitle: 'Leadership & CXO Teams',
    duration: '1–2 Days',
    mode: 'In-Person / Virtual',
    audience: 'C-Suite & VPs',
    outcomes: [
      'AI opportunity prioritization framework',
      'Build vs Buy vs Partner decision mapping',
      'Data privacy & responsible AI governance',
      '90-day AI execution roadmap'
    ],
    desc: 'Map strategic business priorities to an actionable 90-day AI execution plan. Helps leadership teams align on AI investments with clear ROI benchmarks and risk frameworks.'
  }
];

const categories = ['All Programs', 'For Colleges', 'For Companies'];

export default function ProgramsPage({ onOpenCallbackModal }) {
  const [activeCategory, setActiveCategory] = useState('All Programs');

  const filtered = activeCategory === 'All Programs'
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>AI Programs &amp; Workshops | DigiTran</title>
        <meta
          name="description"
          content="Explore DigiTran's AI programs for colleges and companies — from AI Career Accelerators and Faculty Enablement to Executive AI Strategy Workshops and Role-Based Upskilling."
        />
      </Helmet>

      <main className="min-h-screen bg-black text-white pt-28 pb-20 selection:bg-[#F6A305] selection:text-black">

        {/* HERO */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F6A305]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DigiTran Programs Catalog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Practical AI Programs,{' '}
              <span className="text-[#F6A305]">Real Outcomes.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
              Whether you're a college building AI-ready graduates or a company automating operations — every DigiTran program is designed around measurable outcomes, not course hours.
            </p>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {/* Category Filter */}
          <div className="flex items-center gap-2 mb-10 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#F6A305] text-black shadow-lg shadow-[#F6A305]/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-2 text-xs text-gray-500">{filtered.length} programs</span>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filtered.map((program) => (
              <div
                key={program.id}
                className="p-7 rounded-3xl bg-[#0f0f0f] border border-white/10 hover:border-[#F6A305]/40 transition-all hover:-translate-y-1.5 duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F6A305]/15 border border-[#F6A305]/30 flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-[#F6A305]" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${program.tagColor}`}>
                      {program.tag}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{program.category}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F6A305] transition-colors mb-0.5">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#F6A305] font-medium mb-3">{program.subtitle}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-5">{program.desc}</p>

                  {/* Meta */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 mb-5">
                    <div className="text-center">
                      <div className="text-[10px] text-gray-500 mb-0.5">Duration</div>
                      <div className="text-xs font-semibold text-white">{program.duration}</div>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <div className="text-[10px] text-gray-500 mb-0.5">Mode</div>
                      <div className="text-xs font-semibold text-white">{program.mode}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] text-gray-500 mb-0.5">Audience</div>
                      <div className="text-xs font-semibold text-white">{program.audience}</div>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-2 mb-6">
                    {program.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F6A305] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold text-black bg-[#F6A305] hover:bg-[#e09404] text-center transition-all shadow-lg shadow-[#F6A305]/20"
                  >
                    Request Program
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F6A305]/8 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <span className="text-xs font-bold text-[#F6A305] uppercase tracking-wider block mb-4">Custom Program Design</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Don't See Exactly What You Need?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm mb-8 leading-relaxed">
                Every DigiTran engagement starts with a discovery conversation. Tell us your AI challenge and we'll design a program around your specific institutional or organizational context.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F6A305] text-black font-bold rounded-full hover:bg-[#e09404] transition-all shadow-lg shadow-[#F6A305]/25"
              >
                Start with One Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
