import React, { useState } from 'react';
import { universityPartners } from '../data/siteData';

export default function UniversityPartners() {
  const [filter, setFilter] = useState('ALL');

  const filtered = filter === 'ALL'
    ? universityPartners
    : universityPartners.filter(u => u.type === filter);

  const row1 = universityPartners.slice(0, 9);
  const row2 = universityPartners.slice(9);

  return (
    <section className="py-20 bg-gradient-to-b from-[#080612] via-[#0d0922] to-[#080612] overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Our University <span className="font-secondary text-brand-purple italic">Partners</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
          Co-designed degrees and specialized AI skilling programs with India’s premier IITs, IIMs, and top-tier US universities.
        </p>

        {/* Filter Pills */}
        <div className="inline-flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10 mb-8">
          {['ALL', 'IIT', 'IIM', 'US'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-brand-purple text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat === 'ALL' ? 'All Universities' : cat === 'US' ? 'US Universities' : `${cat}s`}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee Row 1 (Rightward) */}
      <div className="relative w-full overflow-hidden mb-6">
        <div className="marquee-track flex items-center gap-8">
          {[...row1, ...row1, ...row1].map((uni, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center justify-center shrink-0 w-44 sm:w-52 h-20 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-purple/40 transition-all hover:bg-white/[0.06] group"
            >
              <img
                src={uni.logo}
                alt={uni.name}
                className="max-h-10 max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080612] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080612] to-transparent pointer-events-none" />
      </div>

      {/* Marquee Row 2 (Leftward) */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track-reverse flex items-center gap-8">
          {[...row2, ...row2, ...row2].map((uni, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center justify-center shrink-0 w-44 sm:w-52 h-20 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-purple/40 transition-all hover:bg-white/[0.06] group"
            >
              <img
                src={uni.logo}
                alt={uni.name}
                className="max-h-10 max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080612] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080612] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
