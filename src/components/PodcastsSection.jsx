import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Headphones, X } from 'lucide-react';
import { podcastEpisodes } from '../data/siteData';

export default function PodcastsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= podcastEpisodes.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, podcastEpisodes.length - 3) : prev - 3));
  };

  const visibleEpisodes = podcastEpisodes.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 bg-gradient-to-b from-[#080612] via-[#0d0922] to-[#080612] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/15 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-3">
              <Headphones className="w-3.5 h-3.5" />
              <span>Futurense Originals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3">
              Listen To Our <span className="font-secondary text-brand-purple italic">Podcast</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              From industry insights to career acceleration playbooks, tune into candid conversations with top global leaders and AI architects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/10 text-white transition-all hover:border-brand-purple/40"
              aria-label="Previous Episode"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/10 text-white transition-all hover:border-brand-purple/40"
              aria-label="Next Episode"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Podcast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleEpisodes.map((pod) => (
            <div
              key={pod.id}
              onClick={() => setSelectedVideo(pod)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#0e0a24]/80 hover:border-brand-purple/50 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Thumbnail with duration badge and play icon */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                  <img
                    src={pod.thumbnail}
                    alt={pod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-[11px] font-mono text-white">
                    {pod.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors line-clamp-2 mb-2 leading-snug">
                    {pod.title}
                  </h3>
                  <div className="text-xs text-gray-400">
                    <span className="text-brand-purple font-semibold">ft.</span> {pod.guest}
                  </div>
                </div>
              </div>

              <div className="px-6 py-3.5 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-brand-purple">
                <span>Watch Episode</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* YouTube Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0c091d] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeEmbed}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold text-white">{selectedVideo.title}</h3>
              <p className="text-xs text-gray-400 mt-1">Featuring {selectedVideo.guest}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
