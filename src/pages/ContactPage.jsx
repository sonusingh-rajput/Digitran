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
  Lock,
  Cpu,
  Layers
} from 'lucide-react';

export default function ContactPage() {
  const [formTab, setFormTab] = useState('company'); // 'company' | 'college'
  const [submitted, setSubmitted] = useState(false);

  // Form states for Companies
  const [companyForm, setCompanyForm] = useState({
    company: '',
    role: '',
    workEmail: '',
    functionName: 'Operations',
    manualProcess: '',
    systems: '',
    volume: '',
    desiredOutcome: ''
  });

  // Form states for Colleges
  const [collegeForm, setCollegeForm] = useState({
    institution: '',
    role: '',
    workEmail: '',
    count: '',
    currentInitiatives: '',
    desiredProgram: 'AI Career Accelerator',
    department: '',
    timeline: 'Immediate (Next 30 Days)'
  });

  const handleCompanySubmit = (e) => {
    e.preventDefault();
    if (!companyForm.company || !companyForm.workEmail) return;
    setSubmitted(true);
  };

  const handleCollegeSubmit = (e) => {
    e.preventDefault();
    if (!collegeForm.institution || !collegeForm.workEmail) return;
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>AI Discovery & Institutional Program Request | DigiTran</title>
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
              Tell us what you want to make AI-ready. Whether you need to upskill an institutional cohort or automate high-volume operations, we’ll help you identify the next practical, zero-risk step.
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
                  “We are an AI capability and implementation company focused on two connected problems: helping people build practical AI skills and helping organizations apply AI to real operational workflows. Our approach combines training, consulting, prototyping and implementation.”
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0" />
                    <span>Outcome-led programs rather than generic tool demos</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0" />
                    <span>Hands-on delivery using real-world projects & workflows</span>
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
                    <a href="mailto:contact@digitran.ai" className="text-sm font-semibold text-white hover:text-[#F6A305] transition-colors">
                      contact@digitran.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F6A305]/15 text-[#F6A305] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Institutional & Enterprise Helpline</div>
                    <span className="text-sm font-semibold text-white">+91 (80) 4567-8900 / +1 (888) 344-4872</span>
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
              </div>

              {/* SECURITY ASSURANCE */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-[#F6A305] shrink-0" />
                <p className="text-xs text-gray-300 leading-relaxed">
                  All discovery inquiries are safeguarded under strict mutual NDA standards. We never share institutional or corporate data with third parties.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: DUAL TAB DISCOVERY FORM (PAGE 6 BLUEPRINT) */}
            <div className="lg:col-span-7">
              <div className="bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
                
                {/* FORM SELECTOR TABS */}
                <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 mb-8">
                  <button
                    type="button"
                    onClick={() => { setFormTab('company'); setSubmitted(false); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formTab === 'company'
                        ? 'bg-[#F6A305] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>FOR COMPANIES</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setFormTab('college'); setSubmitted(false); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formTab === 'college'
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
                    <h3 className="text-2xl font-bold text-white mb-2">Discovery Session Requested</h3>
                    <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed mb-6">
                      Thank you. Your requirements have been routed to our senior AI practice leads. We will review your systems and proposed outcomes and confirm our 20-minute discussion slot within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <>
                    {/* TAB 1: FOR COMPANIES (PDF PAGE 6 EXACT FIELDS) */}
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
                              <option value="Operations">Operations & Back-Office</option>
                              <option value="Finance">Finance & Accounting</option>
                              <option value="Customer Support">Customer Support / Service</option>
                              <option value="HR">Human Resources</option>
                              <option value="Sales">Sales & Marketing</option>
                              <option value="IT">IT & Engineering</option>
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

                        <button
                          type="submit"
                          className="w-full mt-4 py-4 bg-[#F6A305] text-black font-extrabold text-sm rounded-full hover:bg-[#e09404] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F6A305]/20"
                        >
                          <span>Confirm Discovery Call Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    )}

                    {/* TAB 2: FOR COLLEGES (PDF PAGE 6 EXACT FIELDS) */}
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

                        <button
                          type="submit"
                          className="w-full mt-4 py-4 bg-[#F6A305] text-black font-extrabold text-sm rounded-full hover:bg-[#e09404] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F6A305]/20"
                        >
                          <span>Request Institutional Proposal</span>
                          <ArrowRight className="w-4 h-4" />
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
