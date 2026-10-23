import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Cpu, Briefcase, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { innovationEcosystem } from '../data/siteData';

export default function InnovationEcosystem() {
  const [activeCard, setActiveCard] = useState(0);

  const icons = [Cpu, Bot, Briefcase, Users];

  return (
    <section className="py-24 bg-[#080612] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/15 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-3">
            Proprietary Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5">
            Inside the Futurense <br />
            <span className="font-secondary text-brand-purple italic">
              Innovation Ecosystem
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            An integrated stack of AI copilots, simulation labs, and expert systems - purpose-built to accelerate careers through real-world learning and hiring outcomes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovationEcosystem.map((item, idx) => {
            const Icon = icons[idx];
            const isActive = activeCard === idx;

            return (
              <div
                key={item.tag}
                onMouseEnter={() => setActiveCard(idx)}
                className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-[#181238] to-[#0c091d] border-brand-purple/60 shadow-xl shadow-brand-purple/15 -translate-y-2'
                    : 'bg-[#0f0b24]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-brand-purple text-white' : 'bg-white/5 text-gray-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-white/20">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{item.tag}</h3>
                  <div className="text-xs font-semibold text-brand-purple mb-2">{item.subtitle}</div>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">{item.type}</p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-brand-purple">
                  <span>Explore Sandbox</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Button */}
        <div className="mt-14 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
          >
            Explore Full Ecosystem Details
            <ArrowRight className="w-4 h-4 text-brand-purple" />
          </Link>
        </div>

      </div>
    </section>
  );
}
