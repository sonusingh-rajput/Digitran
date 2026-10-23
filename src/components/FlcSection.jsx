import React, { useState, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, X, ExternalLink, Quote } from 'lucide-react';
import { flcLeaders } from '../data/siteData';

export default function FlcSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const nextSlide = () => {
    setSliderIndex((prev) => (prev + 3 >= flcLeaders.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setSliderIndex((prev) => (prev - 3 < 0 ? Math.max(0, flcLeaders.length - 3) : prev - 3));
  };

  const visibleLeaders = flcLeaders.slice(sliderIndex, sliderIndex + 3);

  return (
    <section id="flc" className="py-24 bg-[#080612] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn.prod.website-files.com/687e11ae076e4c47d227af38/68bae21f2c9984d23c366cd2_FLC%20logo%20black.svg"
              alt="FLC Logo"
              className="h-10 filter invert brightness-200"
            />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            The Council that Powers The Next wave of <span className="font-secondary text-brand-purple italic">Talent</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Over 100+ global CXOs, AI directors, and engineering leaders actively mentor our learners, curate curriculum, and drive hiring pipelines.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="max-w-4xl mx-auto mb-20 rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl relative group">
          <div className="relative aspect-video w-full bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://cdn.prod.website-files.com/687e11ae076e4c47d227af38/68da041c75cf8483e8147420_Futurense%20Home%20Final.avif"
              loop
              playsInline
              onClick={toggleVideo}
            >
              <source src="https://futurense.b-cdn.net/FLC%20Video.mp4" type="video/mp4" />
              <source src="https://futurense.b-cdn.net/FLC%20Video.webm" type="video/webm" />
              Your browser does not support HTML5 video.
            </video>

            {/* Custom Play/Pause Overlay */}
            {!isPlaying && (
              <div 
                onClick={toggleVideo}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all hover:bg-black/30"
              >
                <div className="w-20 h-20 rounded-full bg-brand-purple/90 text-white flex items-center justify-center shadow-2xl shadow-purple-900/60 transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
              </div>
            )}

            {isPlaying && (
              <button
                onClick={toggleVideo}
                className="absolute bottom-4 right-4 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Pause Video"
              >
                <Pause className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="p-4 sm:p-6 bg-[#0e0a24] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">Futurense Leadership Council In Action</div>
              <div className="text-xs text-gray-400">Discover how industry titans bridge the gap between classroom and high-impact AI careers.</div>
            </div>
            <button
              onClick={toggleVideo}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0"
            >
              {isPlaying ? 'Pause Video' : 'Watch Official Film'}
            </button>
          </div>
        </div>

        {/* Carousel Header & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Hear It From Our FLC Leaders</h3>
            <p className="text-xs text-gray-400 mt-1">Direct perspectives from top directors at Google, Best Buy, Myntra, and more.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/10 text-white transition-all hover:border-brand-purple/40"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/10 text-white transition-all hover:border-brand-purple/40"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleLeaders.map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#0e0a24]/90 hover:border-brand-purple/50 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Photo with play indicator */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a24] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-brand-purple">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Name and Company Logo */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors">
                        {leader.name}
                      </h4>
                      <p className="text-xs text-brand-purple font-medium line-clamp-1 mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                    {leader.companyLogo && (
                      <img
                        src={leader.companyLogo}
                        alt="Company"
                        className="h-6 max-w-[80px] object-contain filter brightness-125 shrink-0"
                      />
                    )}
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 mt-4">
                    "{leader.quote}"
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-brand-purple">
                <span>View Full Profile</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Leader Details Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0e0a24] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-brand-purple/50 shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white">{selectedLeader.name}</h3>
                <p className="text-sm text-brand-purple font-medium mt-1">{selectedLeader.role}</p>
                {selectedLeader.companyLogo && (
                  <div className="mt-3 inline-block p-2 rounded-lg bg-white/5 border border-white/10">
                    <img src={selectedLeader.companyLogo} alt="" className="h-6 object-contain" />
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                <Quote className="w-4 h-4 text-brand-purple" />
                <span>Leader Perspective</span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed italic">
                "{selectedLeader.quote}"
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-brand-purple text-white hover:bg-purple-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
