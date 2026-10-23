import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ArrowRight, CheckCircle2, Calendar, Award } from 'lucide-react';
import { programsCatalog } from '../data/siteData';

export default function ProgramsPage({ onOpenCallbackModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUni, setSelectedUni] = useState('ALL');
  const [selectedDegree, setSelectedDegree] = useState('ALL');

  const universities = ['ALL', 'IIT Roorkee', 'IITM Pravartak', 'IIT Jodhpur', 'IIT Jammu'];
  const degrees = ['ALL', 'PG Certificate', 'Executive Program', "Master's Degree", 'Undergraduate Degree'];

  const filteredPrograms = programsCatalog.filter((prog) => {
    const matchesSearch = prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUni = selectedUni === 'ALL' || prog.university === selectedUni;
    const matchesDegree = selectedDegree === 'ALL' || prog.degree === selectedDegree;
    return matchesSearch && matchesUni && matchesDegree;
  });

  return (
    <>
      <Helmet>
        <title>All Programs | Futurense Technologies</title>
        <meta name="description" content="Explore industry-aligned Deep-Tech and AI Degrees offered in collaboration with India's top IITs and IIMs." />
      </Helmet>

      <div className="pt-32 pb-24 bg-[#080612] min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-purple/15 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
              Curated Academic Programs
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Explore Our <span className="font-secondary text-brand-purple italic">AI Degrees & Programs</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Transform your career with specialized credentials from India's premier institutes. Zero theory fluff, 100% applied engineering.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#0f0b24] border border-white/10 mb-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by topic (e.g. Agentic AI, VLSI, Cybersecurity, Cloud)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple"
                />
              </div>

              {/* University Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedUni}
                  onChange={(e) => setSelectedUni(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#140e30] border border-white/15 text-xs text-white focus:outline-none focus:border-brand-purple"
                >
                  {universities.map(u => (
                    <option key={u} value={u}>{u === 'ALL' ? 'All Universities' : u}</option>
                  ))}
                </select>
              </div>

              {/* Degree Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#140e30] border border-white/15 text-xs text-white focus:outline-none focus:border-brand-purple"
                >
                  {degrees.map(d => (
                    <option key={d} value={d}>{d === 'ALL' ? 'All Degrees' : d}</option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
            <span>Showing <strong className="text-white">{filteredPrograms.length}</strong> programs</span>
            {(searchTerm || selectedUni !== 'ALL' || selectedDegree !== 'ALL') && (
              <button
                onClick={() => { setSearchTerm(''); setSelectedUni('ALL'); setSelectedDegree('ALL'); }}
                className="text-brand-purple hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="p-7 rounded-3xl bg-[#0e0a24]/90 border border-white/10 hover:border-brand-purple/50 transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <img src={prog.universityLogo} alt={prog.university} className="h-9 object-contain" />
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                      {prog.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors line-clamp-2 mb-2 leading-snug">
                    {prog.title}
                  </h3>
                  <div className="text-xs text-brand-purple font-medium mb-3">{prog.university} • {prog.degree}</div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {prog.description}
                  </p>
                </div>

                <div>
                  <div className="py-3 border-y border-white/10 grid grid-cols-2 gap-2 text-[11px] text-gray-300 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-purple" />
                      <span>{prog.mode}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={onOpenCallbackModal}
                      className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-brand-purple hover:from-violet-500 hover:to-purple-400 text-center shadow-lg shadow-purple-900/30 transition-all"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={onOpenCallbackModal}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      Brochure
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
