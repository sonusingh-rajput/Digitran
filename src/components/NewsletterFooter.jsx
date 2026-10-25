import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 relative overflow-hidden">
      {/* Bottom Conversion Rule / AI Discovery Call Banner */}
      <div className="border-b border-white/10 py-16 bg-gradient-to-r from-neutral-950 via-black to-neutral-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#F6A305]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Discovery &amp; Transformation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Have an AI skill gap or a manual workflow to automate?
              </h3>
              <p className="text-gray-400 text-sm">
                Get practical roadmaps, curated ROI frameworks, and actionable AI blueprints delivered straight to your inbox.
              </p>
            </div>

            <div className="w-full max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-[#F6A305]/15 border border-[#F6A305]/40 text-[#F6A305] text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! You are subscribed to the DigiTran AI Executive Briefing.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email address"
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F6A305]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#F6A305] hover:bg-[#e09404] text-black text-sm font-bold flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-[#F6A305]/20 hover:scale-[1.02]"
                  >
                    Subscribe
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info with DigiTran Logo */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group" aria-label="DigiTran Home">
              <div className="transition-all duration-300">
                <img
                  src="/DigiTran_logo_dark.png"
                  alt="DigiTran Logo"
                  className="h-12 w-auto object-contain filter-none"
                />
              </div>
            </Link>

            <p className="text-gray-300 font-semibold text-sm mb-2">
              AI Skills. AI Solutions. Measurable Business Impact.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm font-normal">
              "We help people become AI-ready and help organizations become AI-enabled." Combining hands-on capability building with production-ready AI automation workflows.
            </p>

            <div className="space-y-2.5 text-xs text-gray-400 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F6A305] shrink-0 mt-0.5" />
                <span className="leading-relaxed">WeWork BLOCK-L, Embassy TechVillage, Devarabisanahalli, Kadabeesanahalli, Bengaluru, Karnataka 560103</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F6A305] shrink-0" />
                <a href="tel:+919663419966" className="hover:text-[#F6A305] transition-colors">+91 966 341 9966</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F6A305] shrink-0" />
                <a href="mailto:subrat@digitran.agency" className="hover:text-[#F6A305] transition-colors">subrat@digitran.agency</a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-gray-500">LLPIN:</span>
                <span className="font-mono text-gray-300">ACB-4520</span>
                <span className="text-gray-500 ml-2">GST:</span>
                <span className="font-mono text-gray-300">29AAVFN3849D1ZP</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/digitran_beyond_ordinary/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F6A305] text-gray-300 hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@DigitalKathawachak"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F6A305] text-gray-300 hover:text-black transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/digitran_contentcrafters/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F6A305] text-gray-300 hover:text-black transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pillar 1: AI Reskilling */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6A305]" />
              AI Reskilling
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/reskilling" className="hover:text-[#F6A305] transition-colors">AI Foundation (1–2 Days)</Link></li>
              <li><Link to="/reskilling" className="hover:text-[#F6A305] transition-colors">AI Career Accelerator</Link></li>
              <li><Link to="/reskilling" className="hover:text-[#F6A305] transition-colors">Faculty AI Enablement</Link></li>
              <li><Link to="/reskilling" className="hover:text-[#F6A305] transition-colors">AI Innovation Lab for Colleges</Link></li>
              <li><Link to="/reskilling" className="hover:text-[#F6A305] transition-colors">Role-based AI for Companies</Link></li>
              <li><Link to="/reskilling" className="hover:text-[#F6A305] transition-colors">Executive AI Workshop (90-Day)</Link></li>
            </ul>
          </div>

          {/* Pillar 2: AI Automation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6A305]" />
              AI Automation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/automation" className="hover:text-[#F6A305] transition-colors">Process Discovery Sprint</Link></li>
              <li><Link to="/automation" className="hover:text-[#F6A305] transition-colors">Intelligent Document AI</Link></li>
              <li><Link to="/automation" className="hover:text-[#F6A305] transition-colors">HR Onboarding &amp; Screening AI</Link></li>
              <li><Link to="/automation" className="hover:text-[#F6A305] transition-colors">Finance &amp; Invoice Automation</Link></li>
              <li><Link to="/automation" className="hover:text-[#F6A305] transition-colors">Customer Service Copilots</Link></li>
              <li><Link to="/automation" className="hover:text-[#F6A305] transition-colors">Automation PoC (2–6 Weeks)</Link></li>
            </ul>
          </div>

          {/* Conversions & Discovery */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6A305]" />
              Company &amp; GTM
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/about" className="hover:text-[#F6A305] transition-colors">About DigiTran</Link></li>
              <li><Link to="/contact" className="hover:text-[#F6A305] transition-colors">Book AI Discovery Call</Link></li>
              <li><Link to="/contact" className="hover:text-[#F6A305] transition-colors">Request Institutional Program</Link></li>
              <li><Link to="/reskilling" className="hover:text-[#F6A305] transition-colors">College Readiness Checklist</Link></li>
              <li><Link to="/automation" className="hover:text-[#F6A305] transition-colors">Top 10 AI Opportunities</Link></li>
              <li><Link to="/about" className="hover:text-[#F6A305] transition-colors">Security &amp; Responsible AI</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2026 DigiTran Technologies. All rights reserved.</span>
            <span className="hidden sm:block text-gray-700">•</span>
            <span className="text-gray-600">LLPIN: ACB-4520 &nbsp;|&nbsp; GST: 29AAVFN3849D1ZP</span>
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-gray-300">Privacy &amp; Security</Link>
            <Link to="/about" className="hover:text-gray-300">Responsible AI Policy</Link>
            <Link to="/contact" className="hover:text-gray-300">AI Readiness Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
