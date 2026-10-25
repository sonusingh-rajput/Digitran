import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Users,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Award,
  Target,
  Zap
} from 'lucide-react';

const advisors = [
  {
    id: 1,
    name: 'AI Strategy Lead',
    role: 'Enterprise AI Transformation',
    company: 'Fortune 500 Technology',
    expertise: ['AI Strategy', 'Digital Transformation', 'Enterprise Architecture'],
    quote: 'AI adoption without capability building is like installing rocket engines on a bicycle. DigiTran builds both.'
  },
  {
    id: 2,
    name: 'EdTech Innovation Head',
    role: 'Academic AI Integration',
    company: 'Leading University Group',
    expertise: ['Curriculum Design', 'Faculty Development', 'Student Outcomes'],
    quote: 'The next competitive advantage for institutions is graduating students who can actually use AI in real jobs.'
  },
  {
    id: 3,
    name: 'Operations Excellence Director',
    role: 'Process Automation & AI',
    company: 'Global Manufacturing Corp',
    expertise: ['Process Mining', 'RPA + AI', 'Cost Optimization'],
    quote: 'We eliminated 40% of manual processing overhead within 90 days of DigiTran\'s automation sprint.'
  },
  {
    id: 4,
    name: 'CTO & Co-Founder',
    role: 'AI Product Architecture',
    company: 'SaaS Scale-up',
    expertise: ['LLM Integration', 'Agentic AI', 'Product Strategy'],
    quote: 'DigiTran\'s vendor-neutral approach helped us choose the right AI stack without vendor lock-in.'
  },
  {
    id: 5,
    name: 'HR Innovation Leader',
    role: 'Talent & AI Readiness',
    company: 'Top 10 Indian Conglomerate',
    expertise: ['AI Upskilling', 'Workforce Planning', 'L&D'],
    quote: 'Role-based AI training that actually changes how teams work — not just adds a bullet to their resume.'
  },
  {
    id: 6,
    name: 'Placement & TPO Head',
    role: 'Student Career Development',
    company: 'Tier-1 Engineering College',
    expertise: ['Placement Strategy', 'Industry Connect', 'Skill Gaps'],
    quote: 'After DigiTran\'s AI Career Accelerator, our campus placement percentage hit an all-time high.'
  }
];

const pillars = [
  {
    icon: Target,
    title: 'Industry-First Curriculum',
    desc: 'Every program co-designed with practitioners solving real problems—not academic theory exercises.'
  },
  {
    icon: Zap,
    title: 'Rapid 90-Day Results',
    desc: 'From discovery sprint to working PoC in under 90 days. No bloated consulting timelines.'
  },
  {
    icon: Award,
    title: 'Outcome Accountability',
    desc: 'We measure success by placement rates, process efficiency gains, and ROI—not completion certificates.'
  },
  {
    icon: Users,
    title: 'Cross-Sector Advisory',
    desc: 'Our council spans EdTech, Enterprise, FinTech, Manufacturing, and Government—real-world diversity of AI challenges.'
  }
];

export default function CouncilPage({ onOpenCallbackModal }) {
  return (
    <>
      <Helmet>
        <title>DigiTran Advisory Council | AI Leaders & Practitioners</title>
        <meta
          name="description"
          content="Meet the industry leaders, CXOs, and AI practitioners who shape DigiTran's programs and advisory approach across education and enterprise."
        />
      </Helmet>

      <main className="min-h-screen bg-black text-white pt-28 pb-20 selection:bg-[#F6A305] selection:text-black">

        {/* HERO */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F6A305]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DigiTran Advisory Council</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Practitioners Who{' '}
              <span className="text-[#F6A305]">Shape Real AI Impact</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
              Our advisory council is made up of operators, educators, and technology leaders who have built, deployed, and scaled AI across industries. Their insights drive every DigiTran program and engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F6A305] text-black font-bold rounded-full hover:bg-[#e09404] transition-all shadow-lg shadow-[#F6A305]/25"
              >
                Book AI Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:border-[#F6A305] hover:text-[#F6A305] transition-all"
              >
                About DigiTran
              </Link>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-[#F6A305]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6A305]/15 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-[#F6A305]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F6A305] transition-colors">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ADVISORY SECTION HEADER */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#F6A305] uppercase tracking-wider block mb-3">Advisory Perspectives</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Voices That Drive DigiTran's Mission
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Real leaders solving real problems with AI — these are the practitioners who inform, challenge, and validate our approach to AI readiness and automation.
            </p>
          </div>

          {/* ADVISOR CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="p-6 rounded-3xl bg-[#0f0f0f] border border-white/10 hover:border-[#F6A305]/40 transition-all hover:-translate-y-1.5 duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F6A305]/30 to-[#F6A305]/10 border border-[#F6A305]/30 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#F6A305]" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#F6A305] transition-colors mb-0.5">
                    {advisor.name}
                  </h3>
                  <p className="text-xs text-[#F6A305] font-semibold mb-0.5">{advisor.role}</p>
                  <p className="text-xs text-gray-500 mb-4">{advisor.company}</p>

                  {/* Quote */}
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/8 mb-4">
                    <p className="text-xs text-gray-300 leading-relaxed italic">
                      "{advisor.quote}"
                    </p>
                  </div>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {advisor.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#F6A305]/10 text-[#F6A305] border border-[#F6A305]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F6A305]/8 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join the Conversation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Start Your AI Transformation?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm mb-8 leading-relaxed">
                Whether you're an institution building AI-ready graduates or a company automating operations — DigiTran's practitioners are ready for one practical conversation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F6A305] text-black font-bold rounded-full hover:bg-[#e09404] transition-all shadow-lg shadow-[#F6A305]/25"
                >
                  Book AI Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:subrat@digitran.agency"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:border-[#F6A305] hover:text-[#F6A305] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  subrat@digitran.agency
                </a>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
