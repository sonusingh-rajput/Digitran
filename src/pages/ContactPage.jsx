import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  AlertCircle,
  Loader2
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SETUP: Paste your Google Apps Script Web App URL below.
// See /google-apps-script/README.md for the 3-step setup guide.
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxOm_65cvrtej_0F0m3jXMTAY5kQ8f5ZHr4ZN7HWe8dUsi7YtgZxvEiaW3r9Cxe_n9DUw/exec';
const SUBMIT_EMAIL = 'sonusinghrajput270@gmail.com';

async function sendFormEmail(subject, body, extraFields = {}) {
  // If script URL is not configured yet, fall back to mailto
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
    const mailtoLink = `mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    return { ok: true, fallback: true };
  }

  // POST to Google Apps Script Web App
  // Using mode: 'no-cors' and text/plain to prevent browser CORS blocks
  const payload = {
    to: SUBMIT_EMAIL,
    subject: subject,
    body: body,
    ...extraFields
  };

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  return { ok: true };
}

const initialCompanyForm = {
  company: '',
  role: '',
  workEmail: '',
  functionName: 'Operations',
  manualProcess: '',
  systems: '',
  volume: '',
  desiredOutcome: ''
};

const initialCollegeForm = {
  institution: '',
  role: '',
  workEmail: '',
  count: '',
  currentInitiatives: '',
  desiredProgram: 'AI Career Accelerator',
  department: '',
  timeline: 'Immediate (Next 30 Days)'
};

export default function ContactPage() {
  const [formTab, setFormTab] = useState('company'); // 'company' | 'college'
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  // Form states for Companies
  const [companyForm, setCompanyForm] = useState(initialCompanyForm);

  // Form states for Colleges
  const [collegeForm, setCollegeForm] = useState(initialCollegeForm);

  const resetAllForms = () => {
    setCompanyForm(initialCompanyForm);
    setCollegeForm(initialCollegeForm);
    setSubmitted(false);
    setSendError(null);
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    if (!companyForm.company || !companyForm.workEmail) return;
    setSending(true);
    setSendError(null);
    const subject = `[DigiTran] AI Discovery Call Request – ${companyForm.company}`;
    const body = `New Company Inquiry via DigiTran Website
======================================
Company: ${companyForm.company}
Role: ${companyForm.role}
Email: ${companyForm.workEmail}
Function / Department: ${companyForm.functionName}
Current Manual Process: ${companyForm.manualProcess}
Systems in Use: ${companyForm.systems}
Monthly Volume: ${companyForm.volume}
Desired Outcome: ${companyForm.desiredOutcome}
======================================
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`;
    try {
      await sendFormEmail(subject, body, {
        name: companyForm.role ? `${companyForm.company} (${companyForm.role})` : companyForm.company,
        email: companyForm.workEmail,
        company: companyForm.company,
        role: companyForm.role,
        service: 'Enterprise AI Discovery Call',
        source: 'Contact Page - Corporate Track'
      });
      // EMPTY/RESET FORM FIELDS ON SUCCESSFUL SUBMIT
      setCompanyForm(initialCompanyForm);
      setSubmitted(true);
    } catch (err) {
      setSendError('Failed to send. Please try again or email us directly at subrat@digitran.agency');
    } finally {
      setSending(false);
    }
  };

  const handleCollegeSubmit = async (e) => {
    e.preventDefault();
    if (!collegeForm.institution || !collegeForm.workEmail) return;
    setSending(true);
    setSendError(null);
    const subject = `[DigiTran] Institutional AI Program Request – ${collegeForm.institution}`;
    const body = `New College/Institution Inquiry via DigiTran Website
======================================
Institution: ${collegeForm.institution}
Role: ${collegeForm.role}
Email: ${collegeForm.workEmail}
Student/Faculty Count: ${collegeForm.count}
Desired Program: ${collegeForm.desiredProgram}
Department: ${collegeForm.department}
Current AI Initiatives: ${collegeForm.currentInitiatives}
Preferred Timeline: ${collegeForm.timeline}
======================================
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`;
    try {
      await sendFormEmail(subject, body, {
        name: collegeForm.role ? `${collegeForm.institution} (${collegeForm.role})` : collegeForm.institution,
        email: collegeForm.workEmail,
        college: collegeForm.institution,
        role: collegeForm.role,
        service: collegeForm.desiredProgram,
        source: 'Contact Page - Institutional Track'
      });
      // EMPTY/RESET FORM FIELDS ON SUCCESSFUL SUBMIT
      setCollegeForm(initialCollegeForm);
      setSubmitted(true);
    } catch (err) {
      setSendError('Failed to send. Please try again or email us directly at subrat@digitran.agency');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Discovery &amp; Institutional Program Request | DigiTran</title>
        <meta
          name="description"
          content="Start your AI transformation with one practical conversation. Request an AI discovery session for your company or an institutional AI readiness program for your college."
        />
      </Helmet>

      <main className="min-h-screen bg-black text-white pt-28 pb-20 selection:bg-[#F6A305] selection:text-black">

        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#F6A305]/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Low-Friction AI Discovery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Start Your AI Transformation with <br />
              <span className="text-[#F6A305]">One Practical Conversation.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-normal">
              Tell us what you want to make AI-ready. Whether you need to upskill an institutional cohort or automate high-volume operations, we'll help you identify the next practical, zero-risk step.
            </p>
          </div>
        </section>

        {/* MAIN INTERACTIVE DISCOVERY SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: TRUST CONTENT & CONTACT DETAILS */}
            <div className="lg:col-span-5 space-y-8">

              {/* BRAND PROMISE & POSITIONING */}
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10">
                <span className="text-xs font-bold text-[#F6A305] uppercase tracking-wider block mb-2">
                  Our Approach
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI Skills. AI Solutions. Measurable Business Impact.
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  "We are an AI capability and implementation company focused on two connected problems: helping people build practical AI skills and helping organizations apply AI to real operational workflows. Our approach combines training, consulting, prototyping and implementation."
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0" />
                    <span>Outcome-led programs rather than generic tool demos</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0" />
                    <span>Hands-on delivery using real-world projects &amp; workflows</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0" />
                    <span>Vendor-neutral architecture tailored to your use case</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0" />
                    <span>Strict data privacy: zero training retention on client data</span>
                  </div>
                </div>
              </div>

              {/* DIRECT CONTACT CHANNELS */}
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-6">
                <h4 className="text-base font-bold text-white">Direct Advisory Channels</h4>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F6A305]/15 text-[#F6A305] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Official Correspondence</div>
                    <a href="mailto:subrat@digitran.agency" className="text-sm font-semibold text-white hover:text-[#F6A305] transition-colors">
                      subrat@digitran.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F6A305]/15 text-[#F6A305] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Institutional &amp; Enterprise Helpline</div>
                    <a href="tel:+919663419966" className="text-sm font-semibold text-white hover:text-[#F6A305] transition-colors">
                      +91 966 341 9966
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F6A305]/15 text-[#F6A305] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Registered Office</div>
                    <p className="text-sm font-semibold text-white leading-snug">
                      WeWork BLOCK-L, Embassy TechVillage,<br />
                      Devarabisanahalli, Kadabeesanahalli,<br />
                      Bengaluru, Karnataka 560103
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F6A305]/15 text-[#F6A305] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">SLA Response Window</div>
                    <span className="text-sm font-semibold text-white">Under 24 hours (Discovery confirmation)</span>
                  </div>
                </div>

                {/* Registration details */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">LLPIN No.</div>
                    <div className="text-xs font-mono font-semibold text-gray-300">ACB-4520</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">GST</div>
                    <div className="text-xs font-mono font-semibold text-gray-300">29AAVFN3849D1ZP</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs text-gray-400 mb-3">Follow DigiTran</div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/digitran_beyond_ordinary/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#F6A305]/20 border border-white/10 hover:border-[#F6A305]/40 text-xs text-gray-300 hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#F6A305]" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://www.youtube.com/@DigitalKathawachak"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#F6A305]/20 border border-white/10 hover:border-[#F6A305]/40 text-xs text-gray-300 hover:text-white transition-all"
                      aria-label="YouTube"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#F6A305]" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      YouTube
                    </a>
                    <a
                      href="https://www.instagram.com/digitran_contentcrafters/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#F6A305]/20 border border-white/10 hover:border-[#F6A305]/40 text-xs text-gray-300 hover:text-white transition-all"
                      aria-label="Instagram"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#F6A305]" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* SECURITY ASSURANCE */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-[#F6A305] shrink-0" />
                <p className="text-xs text-gray-300 leading-relaxed">
                  All discovery inquiries are safeguarded under strict mutual NDA standards. We never share institutional or corporate data with third parties.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: DUAL TAB DISCOVERY FORM */}
            <div className="lg:col-span-7">
              <div className="bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">

                {/* FORM SELECTOR TABS */}
                <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 mb-8">
                  <button
                    type="button"
                    onClick={() => { setFormTab('company'); setSubmitted(false); setSendError(null); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${formTab === 'company'
                      ? 'bg-[#F6A305] text-black shadow-md'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>FOR COMPANIES</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setFormTab('college'); setSubmitted(false); setSendError(null); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${formTab === 'college'
                      ? 'bg-[#F6A305] text-black shadow-md'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>FOR COLLEGES</span>
                  </button>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F6A305]/20 text-[#F6A305] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed mb-2">
                      Your inquiry has been sent directly to our team via Gmail. We'll respond within 24 hours.
                    </p>
                    <p className="text-xs text-gray-500 mb-6">
                      Delivered to: <span className="text-[#F6A305]">{SUBMIT_EMAIL}</span>
                    </p>
                    <button
                      onClick={resetAllForms}
                      className="px-6 py-2.5 rounded-full bg-[#F6A305] hover:bg-[#F6A305]/90 text-xs font-bold text-black transition-colors shadow-lg cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <>
                    {/* TAB 1: FOR COMPANIES */}
                    {formTab === 'company' && (
                      <form onSubmit={handleCompanySubmit} className="space-y-4">
                        <div className="pb-2">
                          <h3 className="text-xl font-bold text-white">Book an AI Discovery Call</h3>
                          <p className="text-xs text-gray-400 mt-1">
                            Identify repetitive workflows, reduce manual touches, and assess automation feasibility.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Company *</label>
                            <input
                              type="text"
                              required
                              value={companyForm.company}
                              onChange={(e) => setCompanyForm({ ...companyForm, company: e.target.value })}
                              placeholder="Acme Global Inc."
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Your Role / Designation *</label>
                            <input
                              type="text"
                              required
                              value={companyForm.role}
                              onChange={(e) => setCompanyForm({ ...companyForm, role: e.target.value })}
                              placeholder="VP Operations / Head of IT"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Work Email *</label>
                            <input
                              type="email"
                              required
                              value={companyForm.workEmail}
                              onChange={(e) => setCompanyForm({ ...companyForm, workEmail: e.target.value })}
                              placeholder="alex@company.com"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Function / Department</label>
                            <select
                              value={companyForm.functionName}
                              onChange={(e) => setCompanyForm({ ...companyForm, functionName: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c1c1c] border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            >
                              <option value="Operations">Operations &amp; Back-Office</option>
                              <option value="Finance">Finance &amp; Accounting</option>
                              <option value="Customer Support">Customer Support / Service</option>
                              <option value="HR">Human Resources</option>
                              <option value="Sales">Sales &amp; Marketing</option>
                              <option value="IT">IT &amp; Engineering</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Current Manual Process</label>
                            <input
                              type="text"
                              value={companyForm.manualProcess}
                              onChange={(e) => setCompanyForm({ ...companyForm, manualProcess: e.target.value })}
                              placeholder="e.g. Invoice matching, candidate screening"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Systems in Use</label>
                            <input
                              type="text"
                              value={companyForm.systems}
                              onChange={(e) => setCompanyForm({ ...companyForm, systems: e.target.value })}
                              placeholder="e.g. SAP, Salesforce, Zendesk, Excel"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Monthly Transaction Volume</label>
                            <input
                              type="text"
                              value={companyForm.volume}
                              onChange={(e) => setCompanyForm({ ...companyForm, volume: e.target.value })}
                              placeholder="e.g. 5,000 tickets/month, 800 invoices"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Desired Outcome</label>
                            <input
                              type="text"
                              value={companyForm.desiredOutcome}
                              onChange={(e) => setCompanyForm({ ...companyForm, desiredOutcome: e.target.value })}
                              placeholder="e.g. 70% faster turnaround, zero errors"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#F6A305]/8 border border-[#F6A305]/20 flex items-center gap-2">
                          <Send className="w-4 h-4 text-[#F6A305] shrink-0" />
                          <span className="text-xs text-gray-300">Form submission will be delivered instantly to our team</span>
                        </div>

                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full mt-4 py-4 bg-[#F6A305] text-black font-extrabold text-sm rounded-full hover:bg-[#e09404] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F6A305]/20 disabled:opacity-70"
                        >
                          {sending ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending Request...</span>
                            </>
                          ) : (
                            <>
                              <span>Confirm Discovery Call Request</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    )}

                    {/* TAB 2: FOR COLLEGES */}
                    {formTab === 'college' && (
                      <form onSubmit={handleCollegeSubmit} className="space-y-4">
                        <div className="pb-2">
                          <h3 className="text-xl font-bold text-white">Request an AI Program for Your Institution</h3>
                          <p className="text-xs text-gray-400 mt-1">
                            Equip students and faculty with practical AI capabilities, curriculum, and placement accelerators.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Institution Name *</label>
                            <input
                              type="text"
                              required
                              value={collegeForm.institution}
                              onChange={(e) => setCollegeForm({ ...collegeForm, institution: e.target.value })}
                              placeholder="National Institute of Technology..."
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Your Role / Designation *</label>
                            <input
                              type="text"
                              required
                              value={collegeForm.role}
                              onChange={(e) => setCollegeForm({ ...collegeForm, role: e.target.value })}
                              placeholder="Dean / TPO Head / IQAC Lead / HoD"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Work Email *</label>
                            <input
                              type="email"
                              required
                              value={collegeForm.workEmail}
                              onChange={(e) => setCollegeForm({ ...collegeForm, workEmail: e.target.value })}
                              placeholder="tpo@institution.edu"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Student / Faculty Count</label>
                            <input
                              type="text"
                              value={collegeForm.count}
                              onChange={(e) => setCollegeForm({ ...collegeForm, count: e.target.value })}
                              placeholder="e.g. 250 final-year students, 40 faculty"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Desired Program</label>
                            <select
                              value={collegeForm.desiredProgram}
                              onChange={(e) => setCollegeForm({ ...collegeForm, desiredProgram: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c1c1c] border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            >
                              <option value="AI Career Accelerator">AI Career Accelerator (Final-Year Students)</option>
                              <option value="Faculty AI Enablement">Faculty AI Enablement (2–5 Days)</option>
                              <option value="AI Foundation Workshop">AI Foundation (1–2 Days)</option>
                              <option value="AI Innovation Lab">AI Innovation Lab (Semester/Annual Flagship)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Department</label>
                            <input
                              type="text"
                              value={collegeForm.department}
                              onChange={(e) => setCollegeForm({ ...collegeForm, department: e.target.value })}
                              placeholder="e.g. CSE, IT, ECE, MCA, Institution-wide"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Current AI Initiatives (If Any)</label>
                            <input
                              type="text"
                              value={collegeForm.currentInitiatives}
                              onChange={(e) => setCollegeForm({ ...collegeForm, currentInitiatives: e.target.value })}
                              placeholder="e.g. Elective subject, student coding club"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-300 mb-1">Preferred Timeline</label>
                            <select
                              value={collegeForm.timeline}
                              onChange={(e) => setCollegeForm({ ...collegeForm, timeline: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c1c1c] border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                            >
                              <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                              <option value="Upcoming Semester">Upcoming Semester</option>
                              <option value="Placement Season Preparation">Placement Season Preparation</option>
                              <option value="Next Academic Year">Next Academic Year</option>
                            </select>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#F6A305]/8 border border-[#F6A305]/20 flex items-center gap-2">
                          <Send className="w-4 h-4 text-[#F6A305] shrink-0" />
                          <span className="text-xs text-gray-300">Form submission will be delivered instantly to our team</span>
                        </div>

                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full mt-4 py-4 bg-[#F6A305] text-black font-extrabold text-sm rounded-full hover:bg-[#e09404] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F6A305]/20 disabled:opacity-70"
                        >
                          {sending ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending Request...</span>
                            </>
                          ) : (
                            <>
                              <span>Request Institutional Proposal</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </>
                )}

              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
