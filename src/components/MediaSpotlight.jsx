import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';
import { mediaSpotlight } from '../data/siteData';

export default function MediaSpotlight() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 3 >= mediaSpotlight.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 3 < 0 ? Math.max(0, mediaSpotlight.length - 3) : prev - 3));
  };

  const visibleArticles = mediaSpotlight.slice(slideIndex, slideIndex + 3);

  return (
    <section className="py-24 bg-[#080612] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/15 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Press & Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3">
              Media <span className="font-secondary text-brand-purple italic">Spotlight</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Futurense consistently makes headlines across top national and international business publications for transforming tech education.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/10 text-white transition-all hover:border-brand-purple/40"
              aria-label="Previous Article"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/10 text-white transition-all hover:border-brand-purple/40"
              aria-label="Next Article"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0e0a24]/90 hover:border-brand-purple/50 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a24] via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  {/* Publisher Logo */}
                  {article.outletLogo && (
                    <div className="mb-4 h-6 flex items-center">
                      <img
                        src={article.outletLogo}
                        alt="Media Logo"
                        className="max-h-6 max-w-[130px] object-contain filter brightness-125"
                      />
                    </div>
                  )}

                  <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors line-clamp-3 leading-snug mb-3">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                <span className="text-gray-400">{article.date}</span>
                <span className="text-brand-purple flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
