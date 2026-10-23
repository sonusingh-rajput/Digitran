import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  Cpu,
  Layers,
  Award,
  Zap,
  Globe2,
  Workflow,
  Lock,
  Code2
} from 'lucide-react';

export default function AboutPage({ onOpenCallbackModal }) {
  const differentiators = [
    {
      title: 'Outcome-Led Programs',
      desc: 'We replace generic tool walkthroughs with concrete deliverables—building tangible AI portfolio projects for students and automating three high-volume workflows for enterprise teams.',
      tag: 'Measurable Outcomes'
    },
    {
      title: 'Hands-On Real-World Delivery',
      desc: 'All learning and implementation occurs within live production environments, working with real APIs, messy unstructured documents, and actual ERP/CRM systems.',
      tag: 'Zero Theory Fluff'
    },
    {
      title: 'The Bridge Between Academia & Industry',
      desc: 'We teach capabilities in universities that can immediately be implemented in business, directly solving the graduate employability gap.',
      tag: 'Dual Ecosystem'
    },
    {
      title: 'Vendor-Neutral Approach',
      desc: 'We are never bound to a single vendor. We recommend and build on the best LLM, open-source model, or automation orchestrator best suited for your specific use case.',
      tag: 'Objective Architecture'
    }
  ];

  const techEcosystem = [
    { name: 'OpenAI (GPT-4o)', category: 'Foundation LLM' },
    { name: 'Anthropic (Claude 3.5)', category: 'Reasoning & Coding' },
    { name: 'LangChain & LangGraph', category: 'Multi-Agent Orchestration' },
    { name: 'LlamaIndex', category: 'Enterprise RAG & Indexing' },
    { name: 'Make & n8n', category: 'Workflow Automation' },
    { name: 'Python & FastAPI', category: 'Backend & High-Throughput APIs' },
    { name: 'AWS & Azure AI', category: 'Enterprise Cloud & VPC' },
    { name: 'Supabase & PostgreSQL', category: 'Relational & Vector Storage' },
    { name: 'Hugging Face', category: 'Open Weights & Local Deployment' },
    { name: 'Docker & Kubernetes', category: 'Containerized Microservices' }
  ];

  const leadershipTeam = [
    {
      name: 'Dr. Arindam Sen',
      role: 'Chief AI Architect & Head of Advisory',
      bio: 'Ex-AI Lead with 15+ years architecting enterprise NLP pipelines, multi-agent systems, and production LLM governance for Fortune 500 banks.',
      initials: 'AS'
    },
    {
      name: 'Meera Nambiar',
      role: 'Head of Academic Curriculum & Enablement',
      bio: 'Former university faculty head and author of national engineering curriculum standards for applied artificial intelligence and machine learning.',
      initials: 'MN'
    },
    {
      name: 'Rohan Deshmukh',
      role: 'VP of Automation Engineering & Delivery',
      bio: 'Specialist in robotic process automation, ERP two-way sync, and OCR document extraction pipelines across logistics and healthcare sectors.',
      initials: 'RD'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About DigiTran | AI Capability Building & Implementation</title>
        <meta
          name="description"
          content="Learn about DigiTran: We help people become AI-ready and help organizations become AI-enabled through hands-on reskilling and intelligent workflow automation."
        />
      </Helmet>

      <main className="min-h-screen bg-black text-white pt-28 pb-20 selection:bg-[#F6A305] selection:text-black">
        
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#F6A305]/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About DigiTran</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              We Help People Become AI-Ready. <br />
              <span className="text-[#F6A305]">Organizations AI-Enabled.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-normal">
              DigiTran combines AI capability building with AI implementation. We don't just teach theory, and we don't just write scripts—we build human capability and embed production intelligence into daily operations.
            </p>

            {/* MANDATORY DUAL CTAS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenCallbackModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#F6A305] text-black font-extrabold text-base rounded-full hover:bg-[#e09404] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#F6A305]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book an AI Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/20 text-white font-semibold text-base rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                Request an AI Program for Your Institution
              </Link>
            </div>
          </div>
        </section>

        {/* CORE POSITIONING BLOCK (PAGE 6 BLUEPRINT COPY) */}
        <section className="py-16 border-t border-white/10 bg-gradient-to-b from-black via-[#0c0c0c] to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold block mb-4">
              Our Core Thesis
            </span>
            <blockquote className="text-2xl sm:text-3xl font-medium text-gray-200 leading-relaxed italic mb-8">
              “We are an AI capability and implementation company focused on two connected problems: helping people build practical AI skills and helping organizations apply AI to real operational workflows. Our approach combines training, consulting, prototyping and implementation.”
            </blockquote>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-sm text-gray-300">
              <span className="text-[#F6A305] font-bold">Brand Promise:</span>
              <span>AI Skills. AI Solutions. Measurable Business Impact.</span>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT DIFFERENTIATES US */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Competitive Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                What Differentiates DigiTran
              </h2>
              <p className="text-gray-400 text-base">
                Why forward-thinking universities and mid-market enterprises choose us over traditional training firms and generic software houses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#F6A305]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#F6A305] uppercase tracking-wider block mb-3">
                      {diff.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{diff.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: TECHNOLOGY ECOSYSTEM */}
        <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black via-[#090909] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Production Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                Our Technology Ecosystem
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                We only build with platforms and frameworks our engineering team genuinely supports and actively deploys in production.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {techEcosystem.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#121212] border border-white/10 text-center hover:border-[#F6A305]/40 transition-colors"
                >
                  <Code2 className="w-6 h-6 text-[#F6A305] mx-auto mb-2" />
                  <div className="text-sm font-bold text-white mb-1">{tech.name}</div>
                  <div className="text-[11px] text-gray-400">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: LEADERSHIP & ARCHITECTS */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Proven Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                Practitioners at the Helm
              </h2>
              <p className="text-gray-400 text-base">
                Our advisory practice and curriculum are led by seasoned architects who have deployed mission-critical AI systems at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((lead, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#F6A305]/20 text-[#F6A305] font-black text-lg flex items-center justify-center mb-6 border border-[#F6A305]/40">
                      {lead.initials}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{lead.name}</h3>
                    <div className="text-xs text-[#F6A305] font-semibold mb-4">{lead.role}</div>
                    <p className="text-sm text-gray-300 leading-relaxed">{lead.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: DATA PRIVACY & GOVERNANCE */}
        <section className="py-20 border-t border-white/10 bg-[#0d0d0d]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-black border border-[#F6A305]/30">
              <div className="flex items-center gap-2 text-[#F6A305] text-xs font-bold uppercase mb-3">
                <Lock className="w-4 h-4" />
                <span>Enterprise Governance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Data Privacy, Responsible AI & Security
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                We believe practical AI must never compromise institutional or corporate security. Our engagements operate under strict data isolation: client code, intellectual property, and internal records are never used to train public models. Every workflow includes human review safeguards for regulatory compliance.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#F6A305]" /> Zero Public Training Retention</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#F6A305]" /> Dedicated VPC / On-Prem Deployments</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#F6A305]" /> Human-in-the-Loop Verification</span>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Tell us what you want to make AI-ready.
            </h2>
            <p className="text-base text-gray-300 mb-10 leading-relaxed">
              We’ll help you identify the next practical step—whether it’s reskilling your student body or testing an automated operational workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenCallbackModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#F6A305] text-black font-extrabold text-base rounded-full hover:bg-[#e09404] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F6A305]/20"
              >
                <span>Book an AI Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/20 text-white font-semibold text-base rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                Request an AI Program for Your Institution
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
