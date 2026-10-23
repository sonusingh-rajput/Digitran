import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  FileSpreadsheet,
  Users,
  Headphones,
  TrendingUp,
  Settings,
  ShieldAlert,
  BarChart3,
  Bot,
  Zap,
  Download,
  Calendar
} from 'lucide-react';

export default function AutomationPage({ onOpenCallbackModal }) {
  const [activeFunction, setActiveFunction] = useState('hr');
  const [assessmentForm, setAssessmentForm] = useState({
    company: '',
    email: '',
    role: '',
    primaryFunction: 'operations'
  });
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  const functionData = {
    hr: {
      name: 'Human Resources',
      icon: Users,
      headline: 'Automate Candidate Screening & Employee Support',
      tasks: [
        {
          title: 'Resume Screening & Ranking',
          desc: 'Parse hundreds of inbound resumes against job requirements with contextual semantic matching, eliminating 80% of first-pass manual review.',
          metric: '85% faster shortlisting'
        },
        {
          title: 'Employee Policy & Benefits Assistant',
          desc: 'Instant 24/7 AI conversational agent responding to complex internal HR queries, leaves, insurance, and company policy documents.',
          metric: '60% query deflection'
        },
        {
          title: 'Document Extraction & Verification',
          desc: 'Automated OCR extraction and compliance verification of national IDs, degree certificates, and background verification records.',
          metric: 'Zero data entry errors'
        },
        {
          title: 'Employee Onboarding Workflows',
          desc: 'Auto-generate personalized welcome materials, track checklist completion, and trigger IT provisioning tickets automatically.',
          metric: '4x faster time-to-productivity'
        }
      ],
      metricsList: ['Processing time', 'Response time', 'Manual touch reduction', 'New hire satisfaction']
    },
    finance: {
      name: 'Finance & Accounting',
      icon: FileSpreadsheet,
      headline: 'Zero-Touch Invoicing & Intelligent Reconciliation',
      tasks: [
        {
          title: 'Invoice & Receipt Extraction',
          desc: 'Intelligent multi-format document extraction (PDF, scan, email attachments) with line-item validation and ERP two-way matching.',
          metric: '92% straight-through processing'
        },
        {
          title: 'Automated Reconciliation Support',
          desc: 'Cross-match bank statements, vendor ledgers, and payment gateways with anomaly flags and mismatch root-cause explanations.',
          metric: '70% less manual touches'
        },
        {
          title: 'Executive Financial Report Preparation',
          desc: 'Auto-synthesize multi-entity P&L summaries, variance analyses, and forecast slide decks directly from underlying data lakes.',
          metric: 'Days to minutes turnaround'
        },
        {
          title: 'Expense Audit & Compliance Check',
          desc: 'Real-time policy compliance scoring on corporate credit cards and travel expense submissions before manager sign-off.',
          metric: '100% audit coverage'
        }
      ],
      metricsList: ['Cycle time', 'Exception rate', 'Manual touches', 'Audit accuracy']
    },
    customer_service: {
      name: 'Customer Support',
      icon: Headphones,
      headline: 'Context-Aware Copilots & Intelligent Ticket Routing',
      tasks: [
        {
          title: 'Enterprise Knowledge Copilot',
          desc: 'Drafts accurate, context-aware responses citing verified knowledge base articles directly into Zendesk/Freshdesk/Salesforce.',
          metric: '45% reduction in AHT'
        },
        {
          title: 'Ticket Classification & Triage',
          desc: 'Semantic sentiment and urgency tagging that routes critical tier-3 issues directly to on-call specialists with root-cause briefs.',
          metric: '99% routing accuracy'
        },
        {
          title: 'Call & Chat Summary Generation',
          desc: 'Auto-generates structured call logs, customer sentiment tags, and follow-up action items right into your CRM post-interaction.',
          metric: '5 mins saved per call'
        },
        {
          title: 'Automated Quality Assurance (QA)',
          desc: 'Audit 100% of customer support transcripts for compliance, empathy, and tone consistency instead of standard 2% spot checks.',
          metric: '50x audit sample size'
        }
      ],
      metricsList: ['Average Handle Time (AHT)', 'First-contact resolution', 'Deflection rate', 'QA compliance score']
    },
    sales: {
      name: 'Sales & Marketing',
      icon: TrendingUp,
      headline: 'Deep Prospect Enrichment & Automated Proposal Engines',
      tasks: [
        {
          title: 'Inbound Lead Enrichment & Qualification',
          desc: 'Instantly research prospect domain, tech stack, funding, and LinkedIn footprints to rank lead readiness before SDR reach-out.',
          metric: '3x SDR outbound velocity'
        },
        {
          title: 'Custom Proposal & RFP Drafting',
          desc: 'Auto-draft tailored RFP responses, statements of work (SOWs), and security questionnaires using your past win repository.',
          metric: '75% faster proposal turnaround'
        },
        {
          title: 'Executive Meeting Briefings & Action Logs',
          desc: 'Transcribe sales calls, extract client objections, compile agreed milestones, and synchronize fields directly to HubSpot or Salesforce.',
          metric: 'Zero missing CRM records'
        },
        {
          title: 'Personalized Outbound Content Workflows',
          desc: 'Generate hyper-personalized campaign variations referencing specific prospect pain points and current industry triggers.',
          metric: '2.4x higher response rates'
        }
      ],
      metricsList: ['Lead-processing time', 'Proposal throughput', 'Conversion velocity', 'Pipeline accuracy']
    },
    operations: {
      name: 'Operations & IT',
      icon: Settings,
      headline: 'SOP Intelligence, Alert Routing & Document Processing',
      tasks: [
        {
          title: 'Interactive SOP & Playbook Assistant',
          desc: 'Turn thousands of pages of static operational manuals into an interactive query assistant for field engineers and warehouse staff.',
          metric: '80% faster issue resolution'
        },
        {
          title: 'IT Incident Triage & Root Cause Analysis',
          desc: 'Correlate alerts across Datadog, CloudWatch, and PagerDuty to draft instant incident reports and suggest remediation steps.',
          metric: '65% MTTR reduction'
        },
        {
          title: 'Vendor Contract & SLA Parser',
          desc: 'Extract key renewal dates, penalty clauses, and performance obligations across hundreds of supplier agreements.',
          metric: '100% deadline visibility'
        },
        {
          title: 'Cross-System Data Sync & Validation',
          desc: 'Bridge legacy on-prem databases with cloud systems using automated AI validation rules and automated exception alerts.',
          metric: '99.9% data hygiene'
        }
      ],
      metricsList: ['Turnaround time', 'Error rate', 'Throughput volume', 'Operational downtime']
    }
  };

  const implementationSteps = [
    {
      step: '01',
      title: 'Process Discovery',
      desc: 'Map key personnel, legacy systems, inputs, bottlenecks, and existing control points to identify high-friction targets.',
      tag: 'Mapping & Bottlenecks'
    },
    {
      step: '02',
      title: 'AI Opportunity Assessment',
      desc: 'Rigorously classify candidate workflows by business value, technical feasibility, data privacy/sensitivity, and implementation effort.',
      tag: 'Scoring & Prioritization'
    },
    {
      step: '03',
      title: 'Proof of Concept (PoC)',
      desc: 'Demonstrate the end-to-end workflow using real representative enterprise data in an isolated, secure test environment.',
      tag: 'Live Validation'
    },
    {
      step: '04',
      title: 'Build & Integrate',
      desc: 'Connect production APIs, ERPs/CRMs, enterprise knowledge sources, and multi-tier approval mechanisms.',
      tag: 'Enterprise Integration'
    },
    {
      step: '05',
      title: 'Human-in-the-Loop',
      desc: 'Embed human review checkpoints where legal accuracy, regulatory compliance, or nuanced strategic judgment is mandatory.',
      tag: 'Governance & Safety'
    },
    {
      step: '06',
      title: 'Measure & Scale',
      desc: 'Establish clear baseline KPIs (time saved, cost deflection, error rates) and expand proven models across adjacent departments.',
      tag: 'Continuous ROI'
    }
  ];

  const servicePackages = [
    {
      title: 'AI Discovery Sprint',
      duration: '1–2 Weeks',
      ideal: 'Teams exploring where AI can create measurable operational ROI',
      features: [
        'End-to-end operational process mapping',
        'Prioritized backlog of top 10 AI use cases',
        'Feasibility & data sensitivity risk matrix',
        'ROI projection & technical architecture roadmap',
        'Executive presentation & 90-day action plan'
      ],
      ctaText: 'Book Discovery Sprint',
      popular: false
    },
    {
      title: 'Automation Proof of Concept (PoC)',
      duration: '2–6 Weeks',
      ideal: 'Companies wanting to validate a mission-critical automated workflow',
      features: [
        'One production-ready defined workflow prototype',
        'Integration with your existing systems (CRM/ERP/APIs)',
        'Enterprise data security & privacy guardrails',
        'Benchmark accuracy & turnaround time report',
        'User acceptance testing & staff walk-through'
      ],
      ctaText: 'Launch a PoC',
      popular: true
    },
    {
      title: 'AI Automation Program',
      duration: 'Custom Engagement',
      ideal: 'Enterprises executing systematic transformation across departments',
      features: [
        'Multi-workflow enterprise implementation',
        'Full ERP, CRM & database bidirectional sync',
        'Human-in-the-loop review dashboards',
        'Change management & team adoption enablement',
        'Ongoing SLA, optimization & model maintenance'
      ],
      ctaText: 'Discuss Enterprise Program',
      popular: false
    }
  ];

  const handleAssessmentSubmit = (e) => {
    e.preventDefault();
    if (!assessmentForm.email) return;
    setAssessmentSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>AI Automation Solutions | Turn Repetitive Work into Intelligent Workflows | DigiTran</title>
        <meta
          name="description"
          content="Identify high-volume manual tasks and build practical AI-enabled automations that integrate seamlessly with your existing enterprise systems."
        />
      </Helmet>

      <main className="min-h-screen bg-black text-white pt-28 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#F6A305]/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6A305]/10 border border-[#F6A305]/30 text-[#F6A305] text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>Enterprise AI Workflow Automation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Turn Repetitive Work into <br />
              <span className="text-[#F6A305]">Intelligent Workflows</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              We identify high-volume manual tasks and build practical AI-enabled automations that integrate with the systems your teams already use—cutting turnaround times and freeing your people for high-leverage work.
            </p>

            {/* MANDATORY DUAL CTAS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenCallbackModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#F6A305] text-black font-bold text-base rounded-full hover:bg-[#e09404] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#F6A305]/20 flex items-center justify-center gap-2"
              >
                <span>Book an AI Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/20 text-white font-medium text-base rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                Request an AI Program for Your Institution
              </Link>
            </div>
          </div>

          {/* DASHBOARD HERO PREVIEW */}
          <div className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src="/images/ai_automation_dashboard.jpg"
              alt="DigiTran Enterprise AI Automation Dashboard"
              className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-200">
                  Live Enterprise Integration: Multi-Agent Workflows, OCR Document Pipelines & SLA Tracking
                </span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F6A305]/20 text-[#F6A305] border border-[#F6A305]/30">
                Measurable Impact First
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: EXAMPLE AUTOMATION OPPORTUNITIES (BY FUNCTION) */}
        <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black via-[#0d0d0d] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-xs uppercase tracking-widest text-[#F6A305] font-bold mb-3">
                Functional Impact Matrix
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Where AI Automation Delivers Immediate ROI
              </p>
              <p className="text-gray-400 text-base">
                Targeting high-volume, rules-based, and document-heavy processes where friction is highest and measurable impact is immediate.
              </p>
            </div>

            {/* FUNCTION SELECTOR BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
              {Object.entries(functionData).map(([key, data]) => {
                const IconComponent = data.icon;
                const isSelected = activeFunction === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveFunction(key)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F6A305] text-black shadow-lg shadow-[#F6A305]/20 scale-105'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#F6A305]'}`} />
                    <span>{data.name}</span>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE FUNCTION CONTENT CARD */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F6A305] font-bold">
                    Target Domain
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {functionData[activeFunction].headline}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-400 font-semibold mr-1">Key Metrics Tracked:</span>
                  {functionData[activeFunction].metricsList.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4 WORKFLOW OPPORTUNITY CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {functionData[activeFunction].tasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-black/60 border border-white/10 hover:border-[#F6A305]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <h4 className="text-lg font-bold text-white">{task.title}</h4>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F6A305]/15 text-[#F6A305] border border-[#F6A305]/30 shrink-0">
                          {task.metric}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{task.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm text-gray-400">
                  Have a proprietary internal process in {functionData[activeFunction].name}?
                </span>
                <button
                  onClick={onOpenCallbackModal}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#F6A305] hover:text-white transition-colors"
                >
                  <span>Request Custom Process Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: 6-STEP IMPLEMENTATION METHOD */}
        <section className="py-20 border-t border-white/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Proven Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Our 6-Step Implementation Method
              </h2>
              <p className="text-gray-400 text-base">
                How we take operational friction from initial diagnosis to battle-tested production deployment with zero business disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#F6A305]/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-white/20 group-hover:text-[#F6A305] transition-colors">
                        {s.step}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F6A305] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FLOW INDICATOR ROADMAP SUMMARY */}
            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-gray-300">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Workflow className="w-4 h-4 text-[#F6A305]" /> The Pipeline:
              </span>
              <span className="text-[#F6A305] font-semibold">1. Discover</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[#F6A305] font-semibold">2. Prioritize</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[#F6A305] font-semibold">3. Prototype</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[#F6A305] font-semibold">4. Implement</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[#F6A305] font-semibold">5. Human-in-the-Loop</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[#F6A305] font-semibold">6. Scale</span>
            </div>
          </div>
        </section>

        {/* SECTION: SERVICE PACKAGES */}
        <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#F6A305] font-bold">
                Engagement Models
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Structured Service Packages
              </h2>
              <p className="text-gray-400 text-base">
                Predictable timeframes and guaranteed deliverables designed to minimize risk from first discovery to full-scale automation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicePackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                    pkg.popular
                      ? 'bg-[#151515] border-2 border-[#F6A305] shadow-2xl shadow-[#F6A305]/10 relative lg:-translate-y-2'
                      : 'bg-[#111111] border border-white/10 hover:border-white/25'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F6A305] text-black text-xs font-black uppercase tracking-wider">
                      Most Selected Path
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#F6A305] tracking-wider uppercase">
                        {pkg.duration}
                      </span>
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                    <p className="text-sm text-gray-400 mb-6">{pkg.ideal}</p>

                    <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#F6A305] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenCallbackModal}
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all ${
                      pkg.popular
                        ? 'bg-[#F6A305] text-black hover:bg-[#e09404]'
                        : 'bg-white/10 text-white hover:bg-white hover:text-black border border-white/20'
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CORPORATE LEAD MAGNET (PAGE 5 BLUEPRINT) */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#1a1505] via-[#121212] to-black border border-[#F6A305]/40 p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F6A305]/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6A305]/20 text-[#F6A305] text-xs font-bold uppercase mb-4">
                    <Download className="w-3.5 h-3.5" /> Corporate Lead Magnet
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    Find Your First 10 AI Automation Opportunities
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    A guided assessment toolkit designed for operations, finance, and engineering leaders to rapidly evaluate internal workflows and produce a high-impact, prioritized shortlist.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F6A305]" />
                      <span>Task complexity vs ROI scoring rubric</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F6A305]" />
                      <span>Feasibility and security checklist for data privacy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F6A305]" />
                      <span>Pre-built prompt and API integration decision trees</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 bg-black/70 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  {assessmentSubmitted ? (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 rounded-full bg-[#F6A305]/20 text-[#F6A305] flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Checklist Sent!</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        We've emailed the assessment toolkit to <span className="text-[#F6A305] font-semibold">{assessmentForm.email}</span>. Check your inbox to begin identifying opportunities.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleAssessmentSubmit} className="space-y-3.5">
                      <h4 className="text-base font-bold text-white mb-1">Get the Assessment Free</h4>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Company / Organization</label>
                        <input
                          type="text"
                          required
                          value={assessmentForm.company}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Work Email</label>
                        <input
                          type="email"
                          required
                          value={assessmentForm.email}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Department / Function</label>
                        <select
                          value={assessmentForm.primaryFunction}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, primaryFunction: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a1a1a] border border-white/15 text-white text-sm focus:outline-none focus:border-[#F6A305]"
                        >
                          <option value="operations">Operations & IT</option>
                          <option value="finance">Finance & Accounting</option>
                          <option value="hr">Human Resources</option>
                          <option value="support">Customer Support</option>
                          <option value="sales">Sales & Marketing</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full mt-2 py-3 bg-[#F6A305] text-black font-bold text-sm rounded-lg hover:bg-[#e09404] transition-colors flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Assessment Guide</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FINAL CTA SECTION */}
        <section className="py-20 border-t border-white/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Have a process that consumes too much manual effort?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's run a short 20-minute discovery session to map the workflow, estimate the ROI, and outline a zero-risk prototype.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenCallbackModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#F6A305] text-black font-bold text-base rounded-full hover:bg-[#e09404] transition-all shadow-lg shadow-[#F6A305]/20 flex items-center justify-center gap-2"
              >
                <span>Book an AI Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/reskilling"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/20 text-white font-medium text-base rounded-full hover:bg-white hover:text-black transition-all"
              >
                Explore AI Reskilling
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
