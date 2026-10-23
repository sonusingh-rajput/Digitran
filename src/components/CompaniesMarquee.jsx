import React from 'react';
import { hiringCompanies } from '../data/siteData';
import { Award, Users, Building, TrendingUp } from 'lucide-react';

export default function CompaniesMarquee() {
  const stats = [
    { label: "Learners Impacted", value: "25,000+", icon: Users, subtext: "Across India & Global" },
    { label: "Hiring Partners", value: "400+", icon: Building, subtext: "Fortune 500s & Tech Unicorns" },
    { label: "Course Rating", value: "4.8 / 5", icon: Award, subtext: "Verified Learner Reviews" },
    { label: "Avg Salary Hike", value: "68%", icon: TrendingUp, subtext: "Post Deep-Tech Skilling" }
  ];

  return (
    <section className="py-16 bg-[#080612] border-y border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
          Students Working With Top Companies Like
        </h2>
      </div>

      {/* Infinite Marquee Track 1 (Left) */}
      <div className="relative w-full overflow-hidden mb-6">
        <div className="marquee-track flex items-center gap-12 sm:gap-16">
          {[...hiringCompanies, ...hiringCompanies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-14 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-purple/30 transition-all opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-7 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Gradient edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080612] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080612] to-transparent pointer-events-none" />
      </div>

      {/* Stats Counter Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e0a24]/60 border border-white/5 hover:border-brand-purple/30 transition-all text-center group"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-brand-purple/10 text-brand-purple mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-gray-200 mb-1">{stat.label}</div>
                <div className="text-[11px] text-gray-400">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
