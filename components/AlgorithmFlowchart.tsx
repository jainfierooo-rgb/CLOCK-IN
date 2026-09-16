'use client';

import { useState } from 'react';
import {
  Database,
  GitBranch,
  Zap,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  FileSpreadsheet,
  Building2,
  HeartPulse,
  Factory,
} from 'lucide-react';

const pipelineStages = [
  {
    step: 'STAGE 01',
    title: 'Multi-Modal Ingestion',
    icon: Database,
    badge: '0.02s Ingestion',
    summary: 'Ingestion of messy, unstructured inputs from physical and digital channels.',
    bullets: [
      'Voice calls and WhatsApp audio transcripts',
      'Unstructured PDF RFQs, invoices and claims',
      'SCADA industrial sensor telemetry feeds',
      'Legacy database & spreadsheet webhooks',
    ],
  },
  {
    step: 'STAGE 02',
    title: 'Deterministic Guardrails',
    icon: GitBranch,
    badge: 'Zero Hallucination',
    summary: 'Applies mathematical boundary rules to eliminate AI hallucination entirely.',
    bullets: [
      'Factual ledger cross-verification',
      'SOC2 Type II & HIPAA isolation barrier',
      'Domain-specific prompt weights & schemas',
      'Instant human-in-the-loop fallback triage',
    ],
  },
  {
    step: 'STAGE 03',
    title: 'Autonomous Webhooks',
    icon: Zap,
    badge: 'Bidirectional Sync',
    summary: 'Triggers atomic write actions across enterprise databases without manual entry.',
    bullets: [
      'Direct Opera & Cloudbeds PMS room locking',
      'Epic & Cerner EHR appointment commit',
      'SAP, Oracle & Salesforce ERP order triggers',
      'Automated inventory buffer PO drafts',
    ],
  },
  {
    step: 'STAGE 04',
    title: '101× Margin Yield',
    icon: TrendingUp,
    badge: 'Sub-25ms Latency',
    summary: 'Instant resolution delivered back to guests, patients, and plant supervisors.',
    bullets: [
      '0-second front-desk wait time at resorts',
      '-45% no-show rates across clinical clinics',
      '99.4% manufacturing machinery availability',
      'Immutable cryptographic audit ledger',
    ],
  },
];

const problemScenarios = [
  {
    id: 'hospitality',
    icon: Building2,
    industry: 'Hospitality',
    problem:
      'A luxury resort receives 150 simultaneous WhatsApp inquiries on a holiday weekend asking about private pool villas, pet rules, dining reservations, and late checkout.',
    bottleneck:
      'Front desk staff overwhelmed with 45-minute phone queues, resulting in lost bookings and frustrated VIP guests.',
    resolution: [
      'Clockin AI concurrently ingests all 150 conversational threads with zero queue.',
      'Cross-checks live villa ledger and pet policies in Opera PMS in 18 milliseconds.',
      'Secures provisional dates, collects guest preferences, and generates payment links.',
      'Result: +34% direct ancillary bookings with 0 minutes front-desk delay.',
    ],
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    industry: 'Healthcare',
    problem:
      'Clinical receptionists spend 5 hours per day re-typing handwritten doctor prescriptions, paper lab orders, and managing schedule cancellations.',
    bottleneck:
      'High administrative fatigue, 28% consultation no-show rates, and physician schedule fragmentation.',
    resolution: [
      'Clockin AI extracts optical text from paper lab orders and maps to HL7 FHIR standards.',
      'Matches patient cardiology urgency against Dr. Harrison’s EHR calendar.',
      'Dispatches automated WhatsApp reminders with one-tap reschedule options.',
      'Result: -45% patient no-show rates and zero administrative backlog.',
    ],
  },
  {
    id: 'manufacturing',
    icon: Factory,
    industry: 'Manufacturing',
    problem:
      'Machine Line 4B flags an irregular micro-vibration defect, but maintenance technicians cannot locate the 1,200-page German PDF manual.',
    bottleneck:
      'Production halted at $12,000 per hour while supervisors search through paper binders and spreadsheets.',
    resolution: [
      'Sensor telemetry triggers Clockin AI’s industrial neural parser instantly.',
      'Queries 1,200-page OEM manual and locates torque calibration spec on page 784.',
      'Drafts an expedited replacement bearing PO into SAP ERP for supervisor approval.',
      'Result: Machine restored in 14 minutes, avoiding $48,000 in downtime.',
    ],
  },
];

export default function AlgorithmFlowchart() {
  const [activeScenario, setActiveScenario] = useState('hospitality');
  const scenario = problemScenarios.find((s) => s.id === activeScenario)!;

  return (
    <section id="algorithm" className="py-24 bg-[#FAF8F5] border-y border-[#E5E0D8] text-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#0D9488] font-bold bg-white border border-[#E5E0D8] px-3.5 py-1 rounded-full inline-block mb-3">
            ALGORITHMIC RESOLUTION ENGINE
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight leading-tight mb-4">
            How Clockin AI Solves Complex Enterprise Bottlenecks
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
            A deterministic algorithmic pipeline bridging unstructured operational physical reality with automated ERP execution in sub-25 milliseconds.
          </p>
        </div>

        {/* 4-Stage Flowchart Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E5E0D8] shadow-sm hover:border-[#0D9488] transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7E2D8] mb-5">
                    <span className="text-[10px] font-mono font-bold text-[#666666] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E5E0D8]">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#0D9488] bg-[#CCFBF1] px-2.5 py-1 rounded">
                      {stage.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center text-[#0D9488] mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-lg text-[#0A0A0A] tracking-tight mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed mb-5">
                    {stage.summary}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-2 pt-4 border-t border-[#E7E2D8]">
                    {stage.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-[#262626]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 flex-shrink-0" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Connector Indicator on Large Screens */}
                {idx < pipelineStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-[#E5E0D8] flex items-center justify-center text-[#666666] shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Problem Solving Interactive Architecture Panel */}
        <div className="bg-white rounded-3xl border border-[#E5E0D8] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E0D8] mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#0D9488] font-bold">
                REAL-WORLD TEST BENCH
              </span>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight mt-1">
                Select a Complex Scenario to Inspect
              </h3>
            </div>

            {/* Scenario Switcher Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-[#FAF8F5] rounded-xl border border-[#E5E0D8]">
              {problemScenarios.map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => setActiveScenario(scen.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeScenario === scen.id
                      ? 'bg-white text-[#0A0A0A] shadow-sm border border-[#E5E0D8]'
                      : 'text-[#666666] hover:text-[#0A0A0A]'
                  }`}
                >
                  {scen.industry}
                </button>
              ))}
            </div>
          </div>

          {/* Scenario Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Problem & Bottleneck */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8]">
                <div className="text-[10px] font-mono uppercase text-[#E11D48] font-bold tracking-wider mb-2">
                  [ BOTTLENECK ANALYSIS ]
                </div>
                <h4 className="font-bold text-base text-[#0A0A0A] mb-2 leading-snug">
                  {scenario.problem}
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {scenario.bottleneck}
                </p>
              </div>
            </div>

            {/* Right: Clockin Algorithmic Pipeline Resolution */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#0D9488]/30">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8] mb-5">
                <div className="text-[10px] font-mono uppercase text-[#0D9488] font-bold tracking-wider">
                  [ CLOCKIN ALGORITHM EXECUTION ]
                </div>
                <span className="text-[10px] font-mono text-[#0D9488] bg-[#CCFBF1] px-2.5 py-0.5 rounded font-bold">
                  DETERMINISTIC VERIFIED
                </span>
              </div>

              <div className="space-y-3.5">
                {scenario.resolution.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#262626]">
                    <div className="w-5 h-5 rounded-full bg-[#0D9488] text-white flex items-center justify-center flex-shrink-0 text-[10px] font-mono font-bold mt-0.5">
                      0{sIdx + 1}
                    </div>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
