import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, Briefcase, Building2, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { programsCatalog } from '../data/siteData';

export default function Hero({ onOpenCallbackModal }) {
  const [persona, setPersona] = useState('working-professional');
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade-in',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Filter recommendations based on persona
  const getRecommendedPrograms = () => {
    if (persona === 'college-student') {
      return programsCatalog.filter(p => p.degree.includes('Degree') || p.university === 'IIT Jodhpur');
    }
    if (persona === 'enterprise') {
      return programsCatalog.filter(p => p.tag === 'Enterprise Fav' || p.tag === 'Top Rated');
    }
    return programsCatalog.slice(0, 3);
  };

  const personaOptions = [
    { id: 'working-professional', label: 'Working Professional', icon: Briefcase, desc: 'Upskill with Executive Degrees & Certifications from IITs' },
    { id: 'college-student', label: 'College Student / Graduate', icon: GraduationCap, desc: 'Launch high-paying deep-tech & AI career straight out of college' },
    { id: 'enterprise', label: 'Enterprise & Hiring Leader', icon: Building2, desc: 'Deploy tailored zero-day production-ready AI engineering talent' }
  ];

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080612]">
      {/* Dynamic Background Mesh and Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-purple-900/30 via-violet-900/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Badge */}
          <div className="hero-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>India's #1 Deep-Tech & AI Skilling Ecosystem</span>
          </div>

          {/* Display H1 */}
          <h1 className="hero-fade-in text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            We Build Talent That <br />
            <span className="font-secondary text-brand-purple italic tracking-normal">
              Builds AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-in text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            The only ecosystem where deep-tech skilling and hiring co-exist in one intelligent pipeline with India's top IITs, IIMs, and global universities.
          </p>

          {/* CTAs */}
          <div className="hero-fade-in flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/programs"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-brand-purple hover:from-violet-500 hover:to-purple-400 shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              Explore AI Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onOpenCallbackModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-gray-200 hover:text-white rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 transition-all"
            >
              Talk to Career Advisor
            </button>
          </div>

          {/* Hero Persona Selector */}
          <div className="hero-fade-in pt-8 border-t border-white/10">
            <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
              I’m Here For
            </h2>

            {/* Persona Switcher Tabs */}
            <div className="inline-flex flex-wrap justify-center gap-3 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 max-w-2xl mx-auto mb-8">
              {personaOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = persona === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setPersona(opt.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-brand-purple text-white shadow-lg shadow-purple-900/40 font-semibold'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Recommended Programs Cards for Chosen Persona */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
              {getRecommendedPrograms().map((prog) => (
                <div
                  key={prog.id}
                  className="group relative p-6 rounded-2xl bg-[#0e0a24]/90 border border-white/10 hover:border-brand-purple/50 transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between shadow-lg hover:shadow-brand-purple/10"
                >
                  <div>
                    {/* Partner logo & tag */}
                    <div className="flex items-center justify-between mb-4">
                      <img src={prog.universityLogo} alt={prog.university} className="h-8 object-contain" />
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                        {prog.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors line-clamp-2 mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-[11px] text-gray-400">
                      <span className="font-semibold text-white">{prog.duration}</span> • {prog.mode}
                    </div>
                    <Link
                      to="/programs"
                      className="text-xs font-semibold text-brand-purple flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
