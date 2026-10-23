import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { flcLeaders } from '../data/siteData';
import { Quote, X, ExternalLink } from 'lucide-react';

export default function CouncilPage() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <>
      <Helmet>
        <title>Futurense Leaders Council (FLC) | 100+ Global Tech Leaders</title>
        <meta name="description" content="Meet the industry leaders and CXOs who mentor Futurense learners from Google, Best Buy, Myntra, Aditya Birla, and more." />
      </Helmet>

      <div className="pt-32 pb-24 bg-[#080612] min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/687e11ae076e4c47d227af38/68bae21f2c9984d23c366cd2_FLC%20logo%20black.svg"
                alt="FLC Logo"
                className="h-10 filter invert brightness-200"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Futurense Leaders <span className="font-secondary text-brand-purple italic">Council</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              India's premier AI think-tank bridging CXO boardroom strategy with engineering curriculum, giving our learners an unfair advantage.
            </p>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {flcLeaders.map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#0e0a24]/90 hover:border-brand-purple/50 transition-all hover:-translate-y-2 duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a24] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors">
                        {leader.name}
                      </h4>
                      {leader.companyLogo && (
                        <img
                          src={leader.companyLogo}
                          alt="Logo"
                          className="h-5 max-w-[70px] object-contain filter brightness-125"
                        />
                      )}
                    </div>
                    <p className="text-xs text-brand-purple font-medium line-clamp-1 mb-3">
                      {leader.role}
                    </p>
                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3 border-t border-white/5 text-[11px] font-semibold text-brand-purple flex items-center justify-between">
                  <span>View Bio</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Leader Modal */}
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

            <div className="flex items-center justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-brand-purple text-white hover:bg-purple-600 transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
