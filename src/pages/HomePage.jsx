import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Layers,
  Cpu,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  ArrowUpRight,
  Workflow,
  BarChart3,
  Calendar,
  Send,
  Lock,
  Compass,
  FileCheck,
  HelpCircle,
  Quote
} from 'lucide-react';

export default function HomePage({ onOpenCallbackModal }) {
  const [activeAudience, setActiveAudience] = useState('colleges');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    workEmail: '',
    entityType: 'College / University',
    areaOfInterest: 'AI Reskilling & Curriculum',
    count: '',
    message: '',
    meetingTime: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.workEmail) return;
    setFormSubmitted(true);
  };

  const revenuePillars = [
    {
      title: 'AI Reskilling',
      tag: 'Capability Building',
      desc: 'Role-based AI programs for students, faculty, and enterprise employees. Hands-on workshops, bootcamps, capstone projects, and certification pathways designed around outcomes—not tool tours.',
      link: '/reskilling',
      linkLabel: 'Explore Reskilling Programs',
      points: [
        'Faculty AI Enablement & Curriculum Redesign',
        'Final-year Student AI Career Accelerators',
        'Cross-department corporate upskilling (HR, Sales, Ops, Dev)',
        'Internal AI Champions & Power-User Cohorts'
      ],
      icon: GraduationCap
    },
    {
      title: 'AI Automation',
      tag: 'Operational Intelligence',
      desc: 'Identify high-volume repetitive tasks and build intelligent, multi-agent AI workflows, document parsers, and custom copilots that integrate directly into the software systems your teams already use.',
      link: '/automation',
      linkLabel: 'Explore Intelligent Automations',
      points: [
        'Process Discovery & Bottleneck Diagnostics',
        'Enterprise Document Extraction & OCR (Invoices, IDs, Claims)',
        'Context-Aware Customer Support & Knowledge Copilots',
        'Bidirectional ERP, CRM & Database Integrations'
      ],
      icon: Cpu
    },
    {
      title: 'AI Advisory & PoC',
      tag: 'Strategic Execution',
      desc: 'Zero-risk, rapid AI readiness assessments, use-case scoring rubrics, and production-grade prototypes that translate abstract board-level AI ambitions into a validated 90-day execution roadmap.',
      link: '/contact',
      linkLabel: 'Book Advisory Session',
      points: [
        'AI Opportunity Prioritization (Feasibility vs Value)',
        'Security, Privacy & Data Sensitivity Audits',
        '2–4 Week Rapid Working Proof of Concepts (PoCs)',
        'Vendor-Neutral Architecture & LLM Model Selection'
      ],
      icon: Compass
    }
  ];

  const audienceData = {
    colleges: {
      title: 'Colleges, Universities & Autonomous Institutions',
      subtitle: 'Build future-proof institutions where graduates thrive in an AI-first employment landscape.',
      benefits: [
        'Modernize curriculum with GenAI, prompt engineering, and real-world automation stacks',
        'Enable faculty with AI teaching methodologies, automated grading, and research tools',
        'Direct career accelerator cohorts that enhance tier-1 campus placement statistics',
        'Establish on-campus AI Innovation Labs with mentored industry hackathons'
      ],
      buyerTitle: 'Ideal for: Vice Chancellors, Deans, IQAC Coordinators, HoDs, and TPO Placement Heads.'
    },
    companies: {
      title: 'SMEs, Mid-Market & Enterprise Operations',
      subtitle: 'Eliminate manual bottlenecks and deploy practical copilots across core business functions.',
      benefits: [
        'Systematic process discovery to uncover the top 10 high-friction automation opportunities',
        'Custom copilots for HR, Finance, Customer Service, Operations, and Sales teams',
        'Significant cycle time reductions, near-zero data entry errors, and high deflection rates',
        'Enterprise data isolation with human-in-the-loop review safeguards'
      ],
      buyerTitle: 'Ideal for: COOs, CIOs, CTOs, VP Operations, HR Leaders, and Functional Directors.'
    },
    leadership: {
      title: 'Executive Leadership & Innovation Teams',
      subtitle: 'Turn broad executive interest into an actionable, measurable 90-day AI rollout plan.',
      benefits: [
        'Executive strategy workshops mapping strategic company priorities to AI solutions',
        'Governance frameworks, AI security compliance, and vendor selection playbooks',
        'Clear ROI projection models with measurable cost savings and turnaround metrics',
        'Cross-functional change management to ensure organic workforce adoption'
      ],
      buyerTitle: 'Ideal for: Founders, CEOs, Board Members, and Enterprise Transformation Heads.'
    }
  };

  const workflowRoadmap = [
    { step: '01', title: 'Discover', desc: 'Deep-dive audit into institutional curriculum gaps or enterprise operational bottlenecks.' },
    { step: '02', title: 'Prioritize', desc: 'Score opportunities by ROI, feasibility, student employability, or process volume.' },
    { step: '03', title: 'Train / Prototype', desc: 'Deploy tailored role-based reskilling cohorts or build isolated working PoCs.' },
    { step: '04', title: 'Implement', desc: 'Embed production workflows into live systems or institutional academic schedules.' },
    { step: '05', title: 'Measure', desc: 'Track hard baseline KPIs: placement rates, cycle times, error rates, and deflection.' },
    { step: '06', title: 'Scale', desc: 'Expand successful models across other university departments or enterprise branches.' }
  ];

  const testimonials = [
    {
      quote: 'DigiTran transformed our final-year engineering students from theoretical learners to industry-grade AI builders. Our placement offers in AI-first roles surged by 42% in just one academic cycle.',
      author: 'Dr. Ramesh Sharma',
      role: 'Dean of Academic Affairs & Placement Head',
      type: 'Higher Education Institution'
    },
    {
      quote: 'The AI Discovery Sprint pinpointed 3 repetitive processes in our finance and HR operations that consumed over 800 hours a month. Within 4 weeks, DigiTran automated invoice reconciliations with zero errors.',
      author: 'Priya Sundaram',
      role: 'VP of Human Resources & Operations',
      type: 'Mid-Market Enterprise'
    },
    {
      quote: 'Unlike vendors who just sell generic tool subscriptions, DigiTran built bespoke workflows that actually talk to our legacy ERP. Their human-in-the-loop review model gave our leadership 100% confidence.',
      author: 'Vikramaditya Mehta',
      role: 'Chief Operating Officer',
      type: 'Fintech & Shared Services Group'
    }
  ];

  const trustProfiles = [
    {
      name: 'Enterprise AI Architects',
      focus: 'Multi-Agent Workflows & Secure LLM Pipelines',
      desc: 'Former tech leads specializing in LangChain, LlamaIndex, vector databases, and zero-data-retention enterprise deployments.'
    },
    {
      name: 'Master Reskilling Instructors',
      focus: 'Role-Based Pedagogy & Capstone Projects',
      desc: 'Industry practitioners with 10+ years teaching hands-on AI engineering, GenAI frameworks, and automated student assessments.'
    },
    {
      name: 'Process Automation Engineers',
      focus: 'Systems Integration & OCR Ingestion',
      desc: 'Specialists connecting SAP, Salesforce, custom SQL databases, and webhook orchestrations with human-in-the-loop governance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>DigiTran | Build AI-Ready People. Automate AI-Ready Businesses.</title>
        <meta
          name="description"
          content="We help colleges prepare students and faculty for an AI-first world, while helping companies identify and automate repetitive work with practical AI solutions."
        />
      </Helmet>

      <main className="min-h-screen bg-black text-white selection:bg-[#F6A305] selection:text-black">
        
        {/* ========================================================= */}
        {/* HERO SECTION (PAGE 3 BLUEPRINT)                           */}
        {/* ========================================================= */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[#F6A305]/10 blur-[150px] pointer-events-none rounded-full" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#F6A305]/5 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              
              {/* BRAND PROMISE BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Skills. AI Solutions. Measurable Business Impact.</span>
              </div>

              {/* HERO HEADLINE */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Build AI-Ready People. <br />
                <span className="text-[#F6A305]">Automate AI-Ready</span> Businesses.
              </h1>

              {/* HERO SUBHEADLINE */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
                We help colleges prepare students and faculty for an AI-first world, while helping companies identify and automate repetitive work with practical AI solutions.
              </p>

              {/* PRIMARY CTAS (UNIVERSAL CONVERSION RULE) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button
                  onClick={onOpenCallbackModal}
                  className="w-full sm:w-auto px-8 py-4 bg-[#F6A305] text-black font-extrabold text-base rounded-full hover:bg-[#e09404] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#F6A305]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book an AI Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/reskilling"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold text-base rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center"
                >
                  Explore AI Reskilling
                </Link>
                <Link
                  to="/automation"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-gray-300 font-semibold text-base rounded-full hover:border-[#F6A305] hover:text-[#F6A305] transition-all flex items-center justify-center"
                >
                  Explore AI Automation
                </Link>
              </div>

            </div>

            {/* HIGH TECH HERO IMAGE */}
            <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative group bg-gradient-to-b from-white/5 to-transparent p-2">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src="/images/hero_ai_transformation.jpg"
                  alt="DigiTran AI Reskilling and Automation Ecosystem"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                
                {/* FLOATING STATS OVERLAY */}
                <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#F6A305]">50+</div>
                    <div className="text-xs text-gray-400 mt-0.5">Automated Workflows</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">25,000+</div>
                    <div className="text-xs text-gray-400 mt-0.5">Learners Upskilled</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#F6A305]">80+</div>
                    <div className="text-xs text-gray-400 mt-0.5">College & Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">99.4%</div>
                    <div className="text-xs text-gray-400 mt-0.5">Zero-Error Execution</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* WHAT WE DO: THE THREE REVENUE PILLARS                      */}
        {/* ========================================================= */}
        <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black via-[#0d0d0d] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Comprehensive AI Capability & Delivery
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
                What We Do
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                We combine hands-on capability building with production implementation—ensuring organizations build both AI-ready people and AI-enabled workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {revenuePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#F6A305]/60 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#F6A305]/15 border border-[#F6A305]/30 flex items-center justify-center text-[#F6A305] group-hover:scale-110 transition-transform">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#F6A305] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        {pillar.desc}
                      </p>

                      <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                        {pillar.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-300 leading-snug">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={pillar.link}
                      className="inline-flex items-center justify-between w-full py-3 px-5 rounded-xl bg-white/5 hover:bg-[#F6A305] hover:text-black font-bold text-sm text-white transition-all group/btn"
                    >
                      <span>{pillar.linkLabel}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* WHO WE SERVE: AUDIENCE BREAKDOWN                           */}
        {/* ========================================================= */}
        <section className="py-24 border-t border-white/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Target Sectors
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
                Who We Serve
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Bespoke solutions structured for institutions fostering talent and enterprises seeking operational leverage.
              </p>
            </div>

            {/* AUDIENCE TABS */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveAudience('colleges')}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  activeAudience === 'colleges'
                    ? 'bg-[#F6A305] text-black shadow-lg shadow-[#F6A305]/20 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Colleges & Universities</span>
              </button>

              <button
                onClick={() => setActiveAudience('companies')}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  activeAudience === 'companies'
                    ? 'bg-[#F6A305] text-black shadow-lg shadow-[#F6A305]/20 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>SMEs & Enterprise Functions</span>
              </button>

              <button
                onClick={() => setActiveAudience('leadership')}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  activeAudience === 'leadership'
                    ? 'bg-[#F6A305] text-black shadow-lg shadow-[#F6A305]/20 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Executive Leadership</span>
              </button>
            </div>

            {/* ACTIVE AUDIENCE CARD */}
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6A305]/5 blur-3xl pointer-events-none rounded-full" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold text-[#F6A305] uppercase tracking-wider">
                    {audienceData[activeAudience].buyerTitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
                    {audienceData[activeAudience].title}
                  </h3>
                  <p className="text-base text-gray-300 mb-8 leading-relaxed">
                    {audienceData[activeAudience].subtitle}
                  </p>

                  <div className="space-y-4">
                    {audienceData[activeAudience].benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#F6A305] shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-200">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <button
                      onClick={onOpenCallbackModal}
                      className="px-7 py-3.5 bg-[#F6A305] text-black font-bold text-sm rounded-full hover:bg-[#e09404] transition-all flex items-center gap-2"
                    >
                      <span>Book an AI Discovery Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link
                      to={activeAudience === 'colleges' ? '/reskilling' : '/automation'}
                      className="px-7 py-3.5 bg-white/5 border border-white/15 text-white font-semibold text-sm rounded-full hover:bg-white hover:text-black transition-all"
                    >
                      {activeAudience === 'colleges' ? 'View College Programs' : 'View Automation Matrix'}
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                    <img
                      src={
                        activeAudience === 'colleges'
                          ? '/images/ai_reskilling_lab.jpg'
                          : '/images/ai_automation_dashboard.jpg'
                      }
                      alt={audienceData[activeAudience].title}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* HOW WE WORK: 6-STEP PROCESS ROADMAP                        */}
        {/* ========================================================= */}
        <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black via-[#090909] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Engagement Pipeline
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
                How We Work
              </h2>
              <p className="text-gray-300 text-base">
                A disciplined six-phase execution framework that guarantees low risk, high clarity, and verified measurable business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {workflowRoadmap.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#131313] border border-white/10 hover:border-[#F6A305]/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-3xl font-black text-white/20 group-hover:text-[#F6A305] transition-colors mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F6A305] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                Discover → Prioritize → Train / Prototype → Implement → Measure → Scale
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TRUST SECTION: PROFILES, TESTIMONIALS & PRINCIPLES         */}
        {/* ========================================================= */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* SUBSECTION 1: TESTIMONIALS (COLLEGE, HR, OPERATIONS) */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Validated Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                Voices of Impact
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                From academic halls to enterprise operations—hear how institutions and mid-market leaders thrive with DigiTran.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div>
                    <Quote className="w-8 h-8 text-[#F6A305] mb-4 opacity-75" />
                    <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-bold text-white text-base">{t.author}</div>
                    <div className="text-xs text-[#F6A305] font-medium mt-0.5">{t.role}</div>
                    <div className="text-xs text-gray-400 mt-1">{t.type}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUBSECTION 2: TEAM CAPABILITY PROFILES */}
            <div className="mb-20">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                  Expert Team
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Practitioners, Not Theorists
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trustProfiles.map((tp, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-1">{tp.name}</h4>
                    <span className="text-xs text-[#F6A305] font-semibold block mb-3">{tp.focus}</span>
                    <p className="text-xs text-gray-400 leading-relaxed">{tp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SUBSECTION 3: SECURITY, PRIVACY & RESPONSIBLE AI PRINCIPLES */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#141005] via-[#101010] to-black border border-[#F6A305]/30 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-[#F6A305] text-xs font-bold uppercase mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Data Protection</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Security, Privacy & Responsible-AI Principles
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We enforce zero customer data retention for model re-training, strict role-based access control (RBAC), end-to-end encryption in transit and at rest, and mandatory human oversight on high-stakes outputs.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-gray-300 font-semibold">
                  Zero Data Retention
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-gray-300 font-semibold">
                  SOC2 Architecture
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-gray-300 font-semibold">
                  Vendor Neutral
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: CTA + DISCOVERY LEAD FORM                  */}
        {/* ========================================================= */}
        <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black via-[#0d0d0d] to-black relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 leading-tight">
                Have an AI skill gap or a process that consumes too much manual effort?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Let’s identify the opportunity. Tell us what you want to make AI-ready, and we’ll help you structure the next practical step.
              </p>
            </div>

            {/* INTERACTIVE LEAD DISCOVERY FORM */}
            <div className="bg-[#121212] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#F6A305]/20 text-[#F6A305] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Discovery Session Requested</h3>
                  <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed mb-6">
                    Thank you, <span className="text-[#F6A305] font-semibold">{formData.name}</span>. Our AI Solutions Team will review your requirements for <span className="text-white font-semibold">{formData.organization}</span> and confirm your meeting time via <span className="text-[#F6A305]">{formData.workEmail}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* ROW 1: ENTITY SELECTOR */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      I am representing:
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, entityType: 'College / University' })}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                          formData.entityType === 'College / University'
                            ? 'bg-[#F6A305] text-black border-[#F6A305]'
                            : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        A College / University
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, entityType: 'Company / Enterprise' })}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                          formData.entityType === 'Company / Enterprise'
                            ? 'bg-[#F6A305] text-black border-[#F6A305]'
                            : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        A Company / Enterprise
                      </button>
                    </div>
                  </div>

                  {/* ROW 2: NAME & ORGANIZATION */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Rajesh Patel / Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1.5">
                        Institution / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Apex Institute of Tech / Acme Global"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305] transition-colors"
                      />
                    </div>
                  </div>

                  {/* ROW 3: EMAIL & AREA OF INTEREST */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1.5">
                        Work / Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@institution.edu / name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1.5">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.areaOfInterest}
                        onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305] transition-colors"
                      >
                        <option value="AI Reskilling & Curriculum">AI Reskilling & Curriculum (Colleges)</option>
                        <option value="Student Placement Accelerator">Student Placement Accelerator (Students)</option>
                        <option value="Process Discovery & Workflow Automation">Process Discovery & Workflow Automation (Companies)</option>
                        <option value="Enterprise Copilot / Document Extraction">Enterprise Copilot / Document Extraction</option>
                        <option value="Executive 90-Day AI Roadmap">Executive 90-Day AI Strategy & Roadmap</option>
                      </select>
                    </div>
                  </div>

                  {/* ROW 4: TEAM COUNT & PREFERRED MEETING TIME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1.5">
                        Estimated Students / Team Members Count
                      </label>
                      <input
                        type="text"
                        value={formData.count}
                        onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                        placeholder="e.g. 150 students or 25-person team"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1.5">
                        Preferred Meeting Time Window
                      </label>
                      <input
                        type="text"
                        value={formData.meetingTime}
                        onChange={(e) => setFormData({ ...formData, meetingTime: e.target.value })}
                        placeholder="e.g. Next Tuesday morning (IST)"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305] transition-colors"
                      />
                    </div>
                  </div>

                  {/* ROW 5: MESSAGE */}
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-1.5">
                      Tell us what you want to make AI-ready (Process or Program details)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the repetitive manual process, student skill gap, or AI pilot goal..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305] transition-colors"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#F6A305] text-black font-extrabold text-base rounded-full hover:bg-[#e09404] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#F6A305]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request AI Discovery Session</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-6 text-xs text-gray-400 pt-2">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#F6A305]" /> Zero Spam Guarantee
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F6A305]" /> Confidential NDA Protected
                    </span>
                  </div>

                </form>
              )}
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
