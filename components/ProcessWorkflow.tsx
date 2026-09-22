'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  GitBranch, 
  Maximize2, 
  X,
  Zap,
  ArrowRight
} from 'lucide-react';

interface LoopStep {
  id: number;
  title: string;
  shortLabel: string;
  tag: string;
  cx: number;
  cy: number;
  desc: string;
  detail: string;
  inputs: string[];
  output: string;
}

const loopSteps: LoopStep[] = [
  {
    id: 1,
    title: 'Autonomously and agentically prepare data ontology and knowledge graph',
    shortLabel: 'FRAGMENTED DATA',
    tag: 'Autonomous & Agentic Data Preparation',
    cx: 270,
    cy: 430,
    desc: 'Messy, fragmented communications from WhatsApp, phone voice, scanned PDFs, and legacy SQL databases are ingested and mapped into a structured semantic knowledge graph.',
    detail: 'Zero-PII sanitation, multi-modal OCR parsing, and relational schema normalization.',
    inputs: ['WhatsApp chat logs & audio', 'Paper Bills of Lading & invoices', 'Legacy SQL tables', 'IoT plant sensors'],
    output: 'Enterprise Knowledge Graph',
  },
  {
    id: 2,
    title: 'Autonomously and agentically prepare context graph from existing workflows',
    shortLabel: 'PROCESS & WORKFLOW',
    tag: 'Process Intelligence (Context Graph)',
    cx: 110,
    cy: 270,
    desc: 'Constructs an operational context graph capturing standard operating procedures (SOPs), pricing constraints, triage hierarchy, and departmental handoff rules.',
    detail: 'Maps the physical operational physics of your enterprise into mathematical boundary constraints.',
    inputs: ['Operational SOP manuals', 'Departmental approval matrices', 'Dynamic rate cards', 'Shift handover records'],
    output: 'Operational Context Graph',
  },
  {
    id: 3,
    title: 'Autonomously fine-tune domain-specific Small Language Models (SLMs)',
    shortLabel: 'DOMAIN SLMs',
    tag: 'Deterministic Neural Core',
    cx: 270,
    cy: 270,
    desc: 'Fine-tunes specialized domain models equipped with deterministic guardrails that eliminate hallucination and deliver real-time response speeds.',
    detail: 'Lightweight, ultra-fast domain models running in private cryptographic hardware enclaves.',
    inputs: ['Knowledge Graph', 'Context Graph', 'Deterministic Safety Bounds', 'Real-Time Latency Optimizations'],
    output: 'Calibrated Domain SLM Weights',
  },
  {
    id: 4,
    title: 'Deploy agentic workflows across business operations',
    shortLabel: 'AGENTIC WORKFLOWS',
    tag: 'Agent Monitoring & Controls',
    cx: 270,
    cy: 110,
    desc: 'Dispatches autonomous agents across WhatsApp, telephone IVR, and atomic ERP webhooks (Opera PMS, Epic EHR, SAP S/4HANA) without manual human delay.',
    detail: 'Autonomous agents execute real-time bookings, clinical triage, and supply reordering with supervisor guardrails.',
    inputs: ['Calibrated SLM Weights', 'Opera / Epic / SAP API Keys', 'WhatsApp Direct Connectors', 'Human-in-the-Loop Fallbacks'],
    output: 'Live Autonomous Operational Nodes',
  },
  {
    id: 5,
    title: 'Compound intelligence continuously through evaluation, learning, and optimization',
    shortLabel: 'AUTONOMOUS EVALS',
    tag: 'Continuous Learning & Compounding',
    cx: 430,
    cy: 270,
    desc: 'Self-reinforcing feedback loops monitor accuracy, detect operational drift, and continuously optimize model weights to compound business valuation by 101×.',
    detail: 'Real-time telemetry, automated drift radar, and quarterly margin expansion auditing.',
    inputs: ['Transaction completion telemetry', 'Guest & patient sentiment', 'Model confidence scores', 'Quarterly ROI benchmarks'],
    output: '101× Enterprise Valuation Multiplier',
  },
];

export default function ProcessWorkflow() {
  const [activeId, setActiveId] = useState(3);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeStep = loopSteps.find((s) => s.id === activeId) || loopSteps[2];

  return (
    <section id="flowchart" className="py-14 sm:py-24 lg:py-32 bg-[#FAF8F5] text-[#0A0A0A] border-y border-[#EAE6DF] overflow-hidden relative">
      <div id="architecture" className="absolute -top-24 left-0 pointer-events-none" />
      <div id="process" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase text-[#63615A] font-bold mb-3 sm:mb-4 shadow-2xs">
            <GitBranch className="w-3.5 h-3.5 text-[#0A0A0A]" />
            <span>NEURAL INFRASTRUCTURE // THE CLOCKIN SLM LOOP</span>
          </div>

          <h2 className="font-extrabold text-2xl sm:text-4xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.12] mb-3 sm:mb-6">
            Agentic. Autonomous. Self-Reinforcing.
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-[#5A5852] leading-relaxed font-normal max-w-3xl">
            A closed-loop autonomous intelligence architecture. We ingest fragmented enterprise data, construct dynamic context graphs, fine-tune domain-specific Small Language Models (SLMs), and compound valuation by 101× through continuous evaluation.
          </p>
        </motion.div>

        {/* Master OpenAI Architecture Engine Container */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0A0A0A] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-14 border border-white/10 shadow-2xl mb-12 sm:mb-20 relative overflow-hidden text-white"
        >
          
          {/* Subtle Technical Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top Architecture Meta Toolbar */}
          <div className="flex flex-wrap items-center justify-between pb-8 mb-8 border-b border-white/10 relative z-10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"></span>
              <span className="font-bold text-white tracking-wider uppercase">
                CLOSED-LOOP SLM ORBITAL ENGINE // WORLDWIDE CLUSTERS
              </span>
            </div>
            
            <button
              onClick={() => setLightboxOpen(true)}
              className="mt-2 sm:mt-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-[11px] text-neutral-200 font-mono font-semibold transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-white" />
              <span>Expand High-Res Schematic</span>
            </button>
          </div>

          {/* Main Interactive Grid: Orbital SVG Diagram (Left) + 5-Step Glassmorphic Rail (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left: Responsive Interactive SVG Circular Loop */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-[440px] aspect-square relative select-none mx-auto p-1 sm:p-2">
                
                <svg 
                  viewBox="0 0 540 540" 
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  <defs>
                    {/* Monochrome Gradients */}
                    <radialGradient id="slmGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                      <stop offset="60%" stopColor="#E5E5E5" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#888888" stopOpacity="0.9" />
                    </radialGradient>
                    <radialGradient id="outerRingGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="70%" stopColor="transparent" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
                    </radialGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Outer Orbital Background Highway */}
                  <circle 
                    cx="270" 
                    cy="270" 
                    r="160" 
                    fill="url(#outerRingGlow)" 
                    stroke="rgba(255,255,255,0.12)" 
                    strokeWidth="2" 
                  />
                  
                  {/* Active Animated Conduit Orbit */}
                  <circle 
                    cx="270" 
                    cy="270" 
                    r="160" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.85)" 
                    strokeWidth="2.5" 
                    strokeDasharray="8 6" 
                    className="animate-spin"
                    style={{ animationDuration: '40s', transformOrigin: 'center' }}
                  />

                  {/* Inner Concentric Pulse Ring */}
                  <circle 
                    cx="270" 
                    cy="270" 
                    r="105" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.12)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4" 
                  />

                  {/* Bi-Directional Connectors from Orbit to Center */}
                  {/* Top to Center */}
                  <line x1="270" y1="160" x2="270" y2="215" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="3 3" />
                  {/* Bottom to Center */}
                  <line x1="270" y1="380" x2="270" y2="325" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="3 3" />
                  {/* Left to Center */}
                  <line x1="160" y1="270" x2="215" y2="270" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="3 3" />
                  {/* Right to Center */}
                  <line x1="380" y1="270" x2="325" y2="270" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Directional Flow Arrows around the Ring */}
                  {/* Top-Right Arrow */}
                  <polygon points="385,150 375,142 375,158" fill="#FFFFFF" transform="rotate(45 385 150)" />
                  {/* Bottom-Right Arrow */}
                  <polygon points="385,390 375,382 375,398" fill="#FFFFFF" transform="rotate(135 385 390)" />
                  {/* Bottom-Left Arrow */}
                  <polygon points="155,390 145,382 145,398" fill="#FFFFFF" transform="rotate(225 155 390)" />
                  {/* Top-Left Arrow */}
                  <polygon points="155,150 145,142 145,158" fill="#FFFFFF" transform="rotate(315 155 150)" />

                  {/* Center Node: DOMAIN SLMs (Node 3) */}
                  <g 
                    onClick={() => setActiveId(3)}
                    className="cursor-pointer transition-transform hover:scale-105"
                    style={{ transformOrigin: '270px 270px' }}
                  >
                    {activeId === 3 && (
                      <circle cx="270" cy="270" r="66" fill="none" stroke="#FFFFFF" strokeWidth="2" filter="url(#glow)" />
                    )}
                    <circle cx="270" cy="270" r="56" fill="url(#slmGlow)" stroke="#FFFFFF" strokeWidth="2.5" />
                    <text x="270" y="264" textAnchor="middle" fill="#000000" fontSize="13" fontWeight="900" letterSpacing="1" fontFamily="var(--font-sans), sans-serif">
                      DOMAIN
                    </text>
                    <text x="270" y="282" textAnchor="middle" fill="#000000" fontSize="13" fontWeight="900" letterSpacing="1" fontFamily="var(--font-sans), sans-serif">
                      SLMs
                    </text>
                    <circle cx="295" cy="245" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="295" y="249" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      3
                    </text>
                  </g>

                  {/* Outer Node 4: AGENTIC WORKFLOWS (Top) */}
                  <g 
                    onClick={() => setActiveId(4)}
                    className="cursor-pointer transition-transform hover:scale-105"
                    style={{ transformOrigin: '270px 110px' }}
                  >
                    {activeId === 4 && (
                      <circle cx="270" cy="110" r="54" fill="none" stroke="#FFFFFF" strokeWidth="2" filter="url(#glow)" />
                    )}
                    <circle cx="270" cy="110" r="46" fill="#141416" stroke={activeId === 4 ? '#FFFFFF' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                    <text x="270" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      AGENTIC
                    </text>
                    <text x="270" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      WORKFLOWS
                    </text>
                    <circle cx="295" cy="85" r="9" fill="#000000" stroke={activeId === 4 ? '#FFFFFF' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
                    <text x="295" y="88.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                      4
                    </text>
                  </g>

                  {/* Outer Node 5: AUTONOMOUS EVALS (Right) */}
                  <g 
                    onClick={() => setActiveId(5)}
                    className="cursor-pointer transition-transform hover:scale-105"
                    style={{ transformOrigin: '430px 270px' }}
                  >
                    {activeId === 5 && (
                      <circle cx="430" cy="270" r="54" fill="none" stroke="#FFFFFF" strokeWidth="2" filter="url(#glow)" />
                    )}
                    <circle cx="430" cy="270" r="46" fill="#141416" stroke={activeId === 5 ? '#FFFFFF' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                    <text x="430" y="266" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      AUTONOMOUS
                    </text>
                    <text x="430" y="280" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      EVALS
                    </text>
                    <circle cx="455" cy="245" r="9" fill="#000000" stroke={activeId === 5 ? '#FFFFFF' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
                    <text x="455" y="248.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                      5
                    </text>
                  </g>

                  {/* Outer Node 1: FRAGMENTED DATA (Bottom) */}
                  <g 
                    onClick={() => setActiveId(1)}
                    className="cursor-pointer transition-transform hover:scale-105"
                    style={{ transformOrigin: '270px 430px' }}
                  >
                    {activeId === 1 && (
                      <circle cx="270" cy="430" r="54" fill="none" stroke="#FFFFFF" strokeWidth="2" filter="url(#glow)" />
                    )}
                    <circle cx="270" cy="430" r="46" fill="#141416" stroke={activeId === 1 ? '#FFFFFF' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                    <text x="270" y="426" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      FRAGMENTED
                    </text>
                    <text x="270" y="440" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      DATA
                    </text>
                    <circle cx="295" cy="405" r="9" fill="#000000" stroke={activeId === 1 ? '#FFFFFF' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
                    <text x="295" y="408.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                      1
                    </text>
                  </g>

                  {/* Outer Node 2: PROCESS & WORKFLOW (Left) */}
                  <g 
                    onClick={() => setActiveId(2)}
                    className="cursor-pointer transition-transform hover:scale-105"
                    style={{ transformOrigin: '110px 270px' }}
                  >
                    {activeId === 2 && (
                      <circle cx="110" cy="270" r="54" fill="none" stroke="#FFFFFF" strokeWidth="2" filter="url(#glow)" />
                    )}
                    <circle cx="110" cy="270" r="46" fill="#141416" stroke={activeId === 2 ? '#FFFFFF' : 'rgba(255,255,255,0.2)'} strokeWidth="2" />
                    <text x="110" y="266" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      PROCESS &amp;
                    </text>
                    <text x="110" y="280" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-sans), sans-serif">
                      WORKFLOW
                    </text>
                    <circle cx="135" cy="245" r="9" fill="#000000" stroke={activeId === 2 ? '#FFFFFF' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
                    <text x="135" y="248.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                      2
                    </text>
                  </g>

                </svg>

                {/* Sub-label under diagram */}
                <div className="text-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest pt-2">
                  CLICK ANY NODE (1 &ndash; 5) TO INSPECT PIPELINE
                </div>
              </div>
            </div>

            {/* Right: Glassmorphic 5-Step Interactive Architectural Rail */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Glassmorphic Header Card */}
              <div className="bg-[#0F0F12]/90 backdrop-blur-md p-4 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-neutral-400 mb-2">
                  AGENTIC // AUTONOMOUS // SELF-REINFORCING
                </div>
                
                <h3 className="font-extrabold text-xl sm:text-3xl text-white tracking-tight leading-snug mb-4 sm:mb-6">
                  Five Pillars of Autonomous Compounding
                </h3>

                {/* The 5 Interactive Numbered Steps */}
                <div className="space-y-3">
                  {loopSteps.map((step) => {
                    const isSelected = activeId === step.id;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveId(step.id)}
                        className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 flex items-start gap-3 sm:gap-4 border cursor-pointer ${
                          isSelected
                            ? 'bg-white/[0.08] border-white shadow-md ring-1 ring-white/30'
                            : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                        }`}
                      >
                        {/* Step Number Circle */}
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full shrink-0 flex items-center justify-center font-mono font-extrabold text-[11px] sm:text-xs transition-colors ${
                          isSelected ? 'bg-white text-black' : 'bg-white/10 text-neutral-400'
                        }`}>
                          {step.id}
                        </div>

                        {/* Title & Detail */}
                        <div className="space-y-1">
                          <div className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                            isSelected ? 'text-white' : 'text-neutral-300'
                          }`}>
                            {step.title}
                          </div>
                          
                          {isSelected && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="text-xs text-neutral-400 leading-relaxed pt-1"
                            >
                              {step.desc}
                            </motion.p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>

          {/* Active Node Bottom Inspector Strip */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-xs font-mono">
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold">
                0{activeStep.id}
              </div>
              <div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">
                  {activeStep.tag}
                </div>
                <div className="font-bold text-white text-sm">
                  {activeStep.shortLabel}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 text-neutral-300 leading-relaxed">
              {activeStep.detail}
            </div>

            <div className="md:col-span-3 flex md:justify-end">
              <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/15 text-neutral-200 text-[11px] font-bold">
                OUT: {activeStep.output}
              </div>
            </div>
          </div>

        </motion.div>

        {/* Dual-Branch Operational Comparison Schematic */}
        <div className="space-y-8">
          
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#6A6862] font-bold mb-2">
              FLOW COMPARISON // DUAL BRANCH ARCHITECTURE
            </div>
            <h3 className="font-extrabold text-2xl sm:text-4xl text-[#0A0A0A] tracking-tight">
              The Fork: Traditional Friction vs. The Autonomous Highway
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-stretch">
            
            {/* Left Branch: The Status Quo Friction Flow */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FFF8F8] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-red-200 relative flex flex-col justify-between space-y-5 shadow-md text-[#1A1A1A]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-red-200">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold border border-red-200">
                    BRANCH A // THE STATUS QUO
                  </span>
                  <span className="text-xs font-mono text-red-700 font-bold">
                    HIGH FRICTION &bull; CHOKED LATENCY
                  </span>
                </div>

                <h4 className="font-extrabold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
                  Why traditional enterprise operations stall
                </h4>

                <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
                  Legacy organizations route requests through disconnected human queues, manual spreadsheet entry, and siloed software interfaces.
                </p>

                {/* Drawn Chokepoint Nodes */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-red-100 flex items-start gap-3 shadow-2xs">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#1A1A1A]">Front Desk Phone Queues Exceeding 30 Minutes</div>
                      <div className="text-[11px] text-[#5A5852]">VIP arrival surges result in lost bookings, dropped calls, and frustrated guests.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-red-100 flex items-start gap-3 shadow-2xs">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#1A1A1A]">Nurses &amp; Doctors Spending 3+ Hours on Manual EHR Scheduling</div>
                      <div className="text-[11px] text-[#5A5852]">Severe clinical burnout and scheduling errors driving 28%+ appointment no-shows.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-red-100 flex items-start gap-3 shadow-2xs">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#1A1A1A]">Unplanned Plant Machine Downtime Costing $22,000 / Hour</div>
                      <div className="text-[11px] text-[#5A5852]">Technicians scramble through 800-page paper binders to diagnose fault codes.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-red-100 flex items-start gap-3 shadow-2xs">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#1A1A1A]">Standard Public LLMs Hallucinating Critical Data</div>
                      <div className="text-[11px] text-[#5A5852]">Consumer chatbots invent false room rates, medical instructions, and pricing.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chokepoint Outcome Badge */}
              <div className="p-4 rounded-xl bg-red-100 border border-red-200 text-xs font-mono text-red-800 text-center font-bold">
                RESULT: Operational Attrition, Lost Revenue &amp; High Overhead
              </div>
            </motion.div>

            {/* Right Branch: The Clockin AI Highway Flow */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border-2 border-[#0A0A0A] shadow-xl relative flex flex-col justify-between space-y-5 text-[#0A0A0A]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DF]">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-[#FAF8F5] text-[#0A0A0A] px-3 py-1 rounded-full font-bold border border-[#EAE6DF]">
                    BRANCH B // THE CLOCKIN AI MULTIPLIER
                  </span>
                  <span className="text-xs font-mono text-[#0A0A0A] font-bold">
                    REAL-TIME AUTONOMOUS HIGHWAY
                  </span>
                </div>

                <h4 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
                  Turnkey production intelligence in 21 days
                </h4>

                <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
                  Clockin AI replaces human friction nodes with deterministic neural pipelines synchronized directly with your underlying enterprise databases.
                </p>

                {/* Drawn Highway Nodes */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#0A0A0A]">24/7 Instant VIP WhatsApp Concierge &bull; 1.4s Resolution</div>
                      <div className="text-[11px] text-[#5A5852]">Direct Opera PMS &amp; Cloudbeds sync confirms bookings and captures +34% spend.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#0A0A0A]">Cryptographic Zero-Retention HIPAA Enclave</div>
                      <div className="text-[11px] text-[#5A5852]">Instant intake scheduling cuts patient no-shows by 45% with 0% data leakage.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#0A0A0A]">High-Speed Edge Vision Quality Inspection &bull; 1,200 Parts / Min</div>
                      <div className="text-[11px] text-[#5A5852]">Conversational SOP diagnostics eliminate downtime and auto-draft SAP purchase orders.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#0A0A0A]">Deterministic Mathematical Guardrails &bull; 0.00% Hallucination</div>
                      <div className="text-[11px] text-[#5A5852]">Zero technical burden on internal IT: our applied team audits, tunes, and deploys.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multiplier Outcome Badge */}
              <div className="p-4 rounded-xl bg-[#0A0A0A] text-white text-xs font-mono text-center font-extrabold border border-[#0A0A0A]">
                RESULT: 101× Enterprise Valuation Compounded in 21 Days
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* High-Resolution Schematic Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/15 p-4 sm:p-6"
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3 font-semibold">
                HIGH-RESOLUTION NEURAL ARCHITECTURE BLUEPRINT
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center p-2">
                <img 
                  src="/architecture-diagram.jpg" 
                  alt="Clockin AI Closed-Loop SLM Architecture"
                  className="w-full h-auto object-contain max-h-[75vh] mx-auto"
                />
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-2">
                <div>AGENTIC &bull; AUTONOMOUS &bull; SELF-REINFORCING</div>
                <div className="text-white font-bold">CLOCKIN.AI // SYSTEM ARCHITECTURE 2026</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
