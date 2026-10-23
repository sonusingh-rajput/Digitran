import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  PlayCircle,
  Flag,
  MessageSquare,
  GraduationCap,
  Building2,
  Cpu,
  Workflow,
  Sparkles,
  FileText,
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenCallbackModal }) {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'reskilling' | 'automation' | 'resources' | null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-black border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: DigiTran Logo - Prominent, pure transparent bg, white unhovered, original #F6A305 on hover */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center py-0.5"
              aria-label="DigiTran Home"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div
                id="navbar-logo-container"
                className="bg-transparent flex items-center justify-center transition-all duration-300"
              >
                <img
                  id="navbar-logo-img"
                  src="/DigiTran_logo_dark.png"
                  alt="DigiTran Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 select-none"
                  style={{
                    filter: isLogoHovered ? 'none' : 'grayscale(1) brightness(2)'
                  }}
                />
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Links - 18px font size */}
          <nav className="hidden lg:flex items-center gap-8 text-[18px] font-semibold tracking-wide uppercase text-gray-300">
            
            {/* LINK 1: HOME */}
            <Link
              to="/"
              className={`py-2 transition-colors cursor-pointer text-[18px] font-semibold tracking-wide ${
                location.pathname === '/' ? 'text-[#F6A305]' : 'hover:text-[#F6A305]'
              }`}
            >
              HOME
            </Link>

            {/* LINK 2: AI RESKILLING (MEGA DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('reskilling')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/reskilling"
                onClick={() => setActiveDropdown(null)}
                className={`flex items-center gap-2 py-2 transition-colors cursor-pointer select-none text-[18px] font-semibold tracking-wide ${
                  location.pathname === '/reskilling' || activeDropdown === 'reskilling'
                    ? 'text-[#F6A305]'
                    : 'hover:text-[#F6A305]'
                }`}
                aria-expanded={activeDropdown === 'reskilling'}
                aria-haspopup="true"
              >
                <span>AI RESKILLING</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'reskilling' ? 'rotate-180 text-[#F6A305]' : 'text-gray-400'
                  }`}
                />
              </Link>

              {/* RESKILLING MEGA DROPDOWN */}
              {activeDropdown === 'reskilling' && (
                <div
                  className="absolute top-full -left-28 pt-3.5 z-50 normal-case"
                  onMouseEnter={() => handleMouseEnter('reskilling')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[840px] bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-100 p-8 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-2 gap-8 items-start">
                      
                      {/* Column 1: For Colleges & Universities */}
                      <div className="flex flex-col justify-start">
                        <h3 className="text-[16px] font-semibold text-gray-500 mb-5 leading-normal flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-[#F6A305]" />
                          <span>Programs for Colleges</span>
                        </h3>
                        
                        <div className="space-y-4">
                          <Link
                            to="/reskilling"
                            className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <Sparkles className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                AI Career Accelerator
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                GenAI + automation + portfolio projects for final-year students (4–8 wks)
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/reskilling"
                            className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <GraduationCap className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                Faculty AI Enablement
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Teaching with AI, assessment design, and academic research productivity
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/reskilling"
                            className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <Workflow className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                AI Innovation Lab
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Institutional center of excellence, hackathons & mentored industry challenges
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Programs for Companies */}
                      <div className="flex flex-col justify-start">
                        <h3 className="text-[16px] font-semibold text-gray-500 mb-5 leading-normal flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#F6A305]" />
                          <span>Programs for Companies</span>
                        </h3>

                        <div className="space-y-4">
                          <Link
                            to="/reskilling"
                            className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <Cpu className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                Role-Based AI Upskilling
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Targeted AI pipelines for Sales, HR, Finance, Customer Support, Ops & Dev
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/reskilling"
                            className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <Compass className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                Executive AI Strategy Workshop
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Map strategic business priorities to an actionable 90-day AI execution plan
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/reskilling"
                            className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <ShieldCheck className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                AI Champions Program
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Build an internal powerhouse cohort that spearheads grassroots automation
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Selling outcomes, not course hours.
                      </span>
                      <Link
                        to="/reskilling"
                        className="text-xs font-bold text-[#F6A305] hover:text-black flex items-center gap-1 transition-colors"
                      >
                        <span>View All Reskilling Pathways</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* LINK 3: AI AUTOMATION */}
            <Link
              to="/automation"
              className={`py-2 transition-colors cursor-pointer text-[18px] font-semibold tracking-wide ${
                location.pathname === '/automation' ? 'text-[#F6A305]' : 'hover:text-[#F6A305]'
              }`}
            >
              AI AUTOMATION
            </Link>

            {/* LINK 4: ABOUT US */}
            <Link
              to="/about"
              className={`py-2 transition-colors cursor-pointer text-[18px] font-semibold tracking-wide ${
                location.pathname === '/about' ? 'text-[#F6A305]' : 'hover:text-[#F6A305]'
              }`}
            >
              ABOUT US
            </Link>

            {/* LINK 5: RESOURCES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className={`flex items-center gap-2 py-2 transition-colors cursor-pointer select-none text-[18px] font-semibold tracking-wide ${
                  activeDropdown === 'resources' ? 'text-[#F6A305]' : 'hover:text-[#F6A305]'
                }`}
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
              >
                <span>RESOURCES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180 text-[#F6A305]' : 'text-gray-400'
                  }`}
                />
              </button>

              {/* RESOURCES MEGA MENU */}
              {activeDropdown === 'resources' && (
                <div
                  className="absolute top-full -left-64 pt-3.5 z-50 normal-case"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[960px] bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex items-stretch animate-in fade-in slide-in-from-top-2 duration-200">
                    
                    {/* Left & Center: Lead Magnets & Practice */}
                    <div className="w-[62%] p-8 grid grid-cols-2 gap-8 items-start">
                      
                      {/* Column 1: Free Assessment Assets */}
                      <div className="flex flex-col justify-start">
                        <h3 className="text-[16px] font-semibold text-gray-500 mb-5 leading-normal">
                          Assessments & Tools
                        </h3>
                        <div className="space-y-4">
                          <Link
                            to="/reskilling"
                            className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <FileText className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                College Readiness Checklist
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                25 questions for leadership, faculty, and placement teams
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/automation"
                            className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <Cpu className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                Top 10 Automation Finder
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Guided rubric for operations & finance leaders
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Architecture & Company */}
                      <div className="flex flex-col justify-start">
                        <h3 className="text-[16px] font-semibold text-gray-500 mb-5 leading-normal">
                          Architecture & Company
                        </h3>
                        <div className="space-y-4">
                          <Link
                            to="/about"
                            className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <Flag className="w-5 h-5 stroke-[2] text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                About DigiTran
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Our mission, core positioning & leadership team
                              </p>
                            </div>
                          </Link>

                          <Link
                            to="/about"
                            className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                          >
                            <div className="mt-1 text-gray-900 shrink-0">
                              <ShieldCheck className="w-5 h-5 text-gray-800 group-hover:text-[#F6A305]" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-bold text-gray-900 group-hover:text-[#F6A305] transition-colors">
                                Security & Governance
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">
                                Zero-data retention, VPC isolation & human-in-the-loop
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* Right: Featured Blueprint Card */}
                    <div className="w-[38%] bg-[#f8f9fa] p-8 border-l border-gray-100 flex flex-col justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#F6A305] font-bold block mb-2">
                          GTM Blueprint
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                          AI Reskilling + AI Automation
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                          Explore our practical 90-day launch roadmap bridging academic capability building with enterprise workflow automation.
                        </p>
                        <div className="p-3 rounded-xl bg-white border border-gray-200 text-xs text-gray-700 space-y-1.5 mb-6">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F6A305]" />
                            <span>Discovery Sprint (1–2 Wks)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F6A305]" />
                            <span>Working PoC (2–6 Wks)</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={onOpenCallbackModal}
                        className="w-full py-2.5 rounded-xl bg-black text-white hover:bg-[#F6A305] hover:text-black font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Book an AI Discovery Call</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* RIGHT: Contact Button - 18px font size, white background + black text on hover */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              id="navbar-contact-button"
              to="/contact"
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
              className={`inline-flex items-center justify-center px-7 py-2 text-[18px] font-medium tracking-wide rounded-full border transition-all duration-200 shadow-sm cursor-pointer ${
                isContactHovered
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white/40 hover:bg-white hover:text-black hover:border-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/98 border-b border-white/15 px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200 normal-case">
          <Link
            to="/"
            className="block text-[18px] font-semibold tracking-wide uppercase text-gray-200 hover:text-[#F6A305] py-2 border-b border-white/10"
          >
            Home
          </Link>

          <Link
            to="/reskilling"
            className="block text-[18px] font-semibold tracking-wide uppercase text-gray-200 hover:text-[#F6A305] py-2 border-b border-white/10"
          >
            AI Reskilling
          </Link>

          <Link
            to="/automation"
            className="block text-[18px] font-semibold tracking-wide uppercase text-gray-200 hover:text-[#F6A305] py-2 border-b border-white/10"
          >
            AI Automation
          </Link>

          <Link
            to="/about"
            className="block text-[18px] font-semibold tracking-wide uppercase text-gray-200 hover:text-[#F6A305] py-2 border-b border-white/10"
          >
            About Us
          </Link>

          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center py-2.5 text-[18px] font-medium tracking-wide text-white rounded-full border border-white/40 hover:bg-white hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
