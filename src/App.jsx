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
              <Route path="/programs" element={<ReskillingPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="/about" element={<AboutPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/council" element={<AboutPage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
              <Route path="*" element={<HomePage onOpenCallbackModal={() => setIsSupportOpen(true)} />} />
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
