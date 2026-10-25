import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import NewsletterFooter from './components/NewsletterFooter';
import SupportPopup from './components/SupportPopup';
import HomePage from './pages/HomePage';
import ReskillingPage from './pages/ReskillingPage';
import AutomationPage from './pages/AutomationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CouncilPage from './pages/CouncilPage';
import ProgramsPage from './pages/ProgramsPage';

// Scroll to top upon route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#F6A305] selection:text-black">
          <Navbar onOpenCallbackModal={() => setIsSupportOpen(true)} />
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="/reskilling" element={<ReskillingPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="/automation" element={<AutomationPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="/programs" element={<ProgramsPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="/about" element={<AboutPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/council" element={<CouncilPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              {/* Catch-all: 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          <NewsletterFooter />

          {/* Floating Need Help Support Popup */}
          <SupportPopup
            isOpen={isSupportOpen}
            onClose={() => setIsSupportOpen(false)}
            onOpen={() => setIsSupportOpen(true)}
          />

          {/* Back To Top Floating Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 right-6 z-40 p-3 rounded-full bg-white/10 hover:bg-[#F6A305] hover:text-black text-white border border-white/15 backdrop-blur-md shadow-xl transition-all hover:scale-110 active:scale-95 group cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      </Router>
    </HelmetProvider>
  );
}

// ─── 404 Not Found Page ────────────────────────────────────────────────────────
function NotFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 selection:bg-[#F6A305] selection:text-black">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F6A305]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Large 404 */}
        <div className="text-[140px] sm:text-[180px] font-black leading-none tracking-tighter text-white/[0.06] select-none mb-0">
          404
        </div>

        <div className="-mt-8 sm:-mt-12 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-bold uppercase tracking-wider mb-6">
            <span>Page Not Found</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            This page doesn't exist{' '}
            <span className="text-[#F6A305]">yet.</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
            The URL you visited hasn't been created. You might have followed an old link, or perhaps it's coming soon. Head back to explore DigiTran's AI programs and automation solutions.
          </p>
        </div>

        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#F6A305] text-black font-bold rounded-full hover:bg-[#e09404] transition-all shadow-lg shadow-[#F6A305]/25 text-sm"
          >
            ← Back to Home
          </a>
          <a
            href="/reskilling"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-[#F6A305] hover:text-[#F6A305] transition-all text-sm"
          >
            AI Reskilling
          </a>
          <a
            href="/automation"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-[#F6A305] hover:text-[#F6A305] transition-all text-sm"
          >
            AI Automation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-[#F6A305] hover:text-[#F6A305] transition-all text-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Quick contact */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-500">
          <a href="tel:+919663419966" className="hover:text-[#F6A305] transition-colors">
            📞 +91 966 341 9966
          </a>
          <a href="mailto:subrat@digitran.agency" className="hover:text-[#F6A305] transition-colors">
            ✉ subrat@digitran.agency
          </a>
        </div>
      </div>
    </main>
  );
}
