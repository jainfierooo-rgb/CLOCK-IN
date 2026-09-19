'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Play, 
  Pause, 
  RotateCcw, 
  TrendingUp, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Zap, 
  ArrowRight,
  BarChart3,
  Cpu
} from 'lucide-react';

interface Scenario {
  id: number;
  sector: string;
  tag: string;
  latency: string;
  confidence: string;
  query: string;
  response: string;
  dataInsight: {
    title: string;
    metric: string;
    metricLabel: string;
    bars: { label: string; value: number; display: string }[];
    badge: { system: string; action: string; code: string };
  };
}

const scenarios: Scenario[] = [
  {
    id: 1,
    sector: 'Luxury Hospitality',
    tag: 'ZONED PMS // OPERA CLOUD',
    latency: '< 1s',
    confidence: '99.98%',
    query: 'Do you allow pets in private pool villas this weekend, and what is our current occupancy yield?',
    response: 'Yes, 2 Garden Pool Villas are open with private enclosed garden runs and complimentary pet amenities at $340/night. Live Opera PMS ledger has provisional dates held for your account.',
    dataInsight: {
      title: 'Real-Time Yield & Dynamic Occupancy',
      metric: '+34%',
      metricLabel: 'Ancillary RevPAR Yield',
      bars: [
        { label: 'Mon', value: 62, display: '62%' },
        { label: 'Wed', value: 76, display: '76%' },
        { label: 'Fri', value: 94, display: '94%' },
        { label: 'Sat', value: 98, display: '98%' },
        { label: 'Sun', value: 85, display: '85%' },
      ],
      badge: {
        system: 'ORACLE OPERA CLOUD',
        action: 'PROVISIONAL RESERVATION LOCKED',
        code: 'VILLA-04 // RES-88219',
      },
    },
  },
  {
    id: 2,
    sector: 'Clinical Networks',
    tag: 'HIPAA ENCLAVE // EPIC EHR',
    latency: '< 1s',
    confidence: '100.00%',
    query: 'Triage patient reporting mild chest tightness and schedule Dr. Harrison in Cardiology tomorrow.',
    response: 'Triage vital risk evaluated at 0.12 (low acute). Verified Dr. Harrison has an Epic EHR consultation opening tomorrow at 10:30 AM. Zero PHI retention enclave token generated.',
    dataInsight: {
      title: 'Patient No-Show Rate Deflection',
      metric: '-85%',
      metricLabel: 'Clinical No-Show Rate Drop',
      bars: [
        { label: 'Legacy Clinic', value: 28, display: '28.0%' },
        { label: 'Manual Call', value: 21, display: '21.5%' },
        { label: 'Clockin AI', value: 4.2, display: '4.2%' },
      ],
      badge: {
        system: 'EPIC SYSTEMS EHR (HL7 FHIR)',
        action: 'CONSULTATION ROSTER CONFIRMED',
        code: 'DR-HARRISON // SLOT-1030AM',
      },
    },
  },
  {
    id: 3,
    sector: 'Precision Manufacturing',
    tag: 'SCADA GATE // SAP S/4HANA',
    latency: '< 1s',
    confidence: '99.95%',
    query: 'Inspect Machine Line 4B telemetry, bearing vibration levels, and raw material buffer stock.',
    response: 'Line 4B operating at 99.4% nominal uptime. Bearing vibration is 0.03mm (within 0.05mm threshold). Raw material buffer at 24 days; automated replenishment PO drafted in SAP.',
    dataInsight: {
      title: 'Sensor Defect & Tolerance Telemetry',
      metric: '99.4%',
      metricLabel: 'Machine Line 4B Uptime',
      bars: [
        { label: 'Vibration', value: 60, display: '0.03mm (Normal)' },
        { label: 'Thermal', value: 42, display: '42°C (Optimal)' },
        { label: 'Optical Gate', value: 99.4, display: '1,200 Parts / Min' },
      ],
      badge: {
        system: 'SAP S/4HANA MANUFACTURING',
        action: 'AUTOMATED REORDER PO DRAFTED',
        code: 'PO-88194 // BEARING-B4',
      },
    },
  },
  {
    id: 4,
    sector: 'Omnichannel Commerce',
    tag: 'REVENUE ENGINE // SHOPIFY PLUS',
    latency: '< 1s',
    confidence: '99.92%',
    query: 'What is the conversion recovery rate on WhatsApp abandoned carts over the past 7 days?',
    response: 'Autonomous conversational recovery sequence converted 28.4% of abandoned shopping carts across 1,420 checkout sessions, generating +$42,800 in incremental revenue.',
    dataInsight: {
      title: 'Conversational Cart Recovery Multiplier',
      metric: '28.4%',
      metricLabel: 'Cart Conversion Yield',
      bars: [
        { label: 'Standard Email', value: 4.1, display: '4.1%' },
        { label: 'Generic SMS', value: 9.2, display: '9.2%' },
        { label: 'Clockin AI', value: 28.4, display: '28.4%' },
      ],
      badge: {
        system: 'SHOPIFY PLUS & STRIPE TREASURY',
        action: 'PRE-FILLED CHECKOUT DISPATCHED',
        code: 'ORDER-6691 // 1-TAP AUTH',
      },
    },
  },
];

export default function LiveConciergeDemo() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animStage, setAnimStage] = useState<'query' | 'thinking' | 'response' | 'complete'>('complete');
  const [progress, setProgress] = useState(0);

  const activeScenario = scenarios[currentIdx];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Playback Loop Orchestrator
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setProgress(0);
    setAnimStage('query');

    // Stage 1: Query typed
    const t1 = setTimeout(() => {
      setAnimStage('thinking');
    }, 1600);

    // Stage 2: Thinking & Synthesizing
    const t2 = setTimeout(() => {
      setAnimStage('response');
    }, 2800);

    // Stage 3: Response & Rich Data Card complete
    const t3 = setTimeout(() => {
      setAnimStage('complete');
    }, 4000);

    // Progress bar ticker over 9 seconds total
    const intervalTime = 100;
    const totalDuration = 9000;
    const step = (intervalTime / totalDuration) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIdx((c) => (c + 1) % scenarios.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIdx, isPlaying]);

  const handleSelectScenario = (idx: number) => {
    setCurrentIdx(idx);
    setProgress(0);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleRestart = () => {
    setProgress(0);
    setAnimStage('query');
    setTimeout(() => setAnimStage('thinking'), 1200);
    setTimeout(() => setAnimStage('response'), 2400);
    setTimeout(() => setAnimStage('complete'), 3600);
  };

  return (
    <section id="demo" className="py-24 bg-white border-b border-[#EAE6DF] text-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[10px] font-mono tracking-widest uppercase text-[#63615A] font-bold shadow-xs">
              <Terminal className="w-3.5 h-3.5 text-[#0A0A0A]" />
              <span>AUTONOMOUS TELEMETRY ENGINE // VIDEO-LIKE AUTO SIMULATION</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.1]">
              Watch Clockin AI execute in real time.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#5A5852] leading-relaxed font-normal">
              Zero manual typing required. Watch how our domain SLM processes enterprise queries, writes directly to ERP ledgers, and generates real-time telemetry graphs instantaneously.
            </p>
          </div>

          {/* Video Controls Bar */}
          <div className="flex items-center gap-3 bg-[#FAF8F5] p-2 rounded-2xl border border-[#EAE6DF] shadow-xs shrink-0 self-start lg:self-end">
            <button
              onClick={handleTogglePlay}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0A0A] text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#262626] transition-colors cursor-pointer shadow-xs"
              aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Loop</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Play Loop</span>
                </>
              )}
            </button>

            <button
              onClick={handleRestart}
              className="p-2 rounded-xl bg-white border border-[#EAE6DF] text-[#0A0A0A] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
              aria-label="Restart current scenario"
              title="Restart Scenario"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono font-bold text-[#0A0A0A] bg-white rounded-xl border border-[#EAE6DF]">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A] animate-ping"></span>
              <span>LIVE SRE FEED</span>
            </div>
          </div>
        </div>

        {/* Main Interface Layout: Scenario Selector (Left) + Multi-Modal Terminal (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive 4-Sector Scenario Deck */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#7A7770] font-bold px-1 mb-2">
              Select Sector Scenario ({currentIdx + 1} / 4):
            </div>

            {scenarios.map((sc, idx) => {
              const isSelected = currentIdx === idx;
              return (
                <button
                  key={sc.id}
                  onClick={() => handleSelectScenario(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#0A0A0A] shadow-md ring-1 ring-[#0A0A0A]/10'
                      : 'bg-[#FAF8F5] border-[#EAE6DF] hover:bg-white hover:border-[#BFB8AA]'
                  }`}
                >
                  {/* Active Progress Bar Underlay on Active Tab */}
                  {isSelected && isPlaying && (
                    <div 
                      className="absolute bottom-0 left-0 top-0 bg-[#0A0A0A]/[0.03] transition-all duration-100 pointer-events-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  <div className="flex items-center justify-between pb-2 border-b border-[#EAE6DF]/60 relative z-10">
                    <span className="text-[10px] font-mono font-bold text-[#7A7770] tracking-wider">
                      SCENARIO 0{sc.id}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#5A5852] border border-[#EAE6DF]'
                    }`}>
                      {sc.latency}
                    </span>
                  </div>

                  <div className="pt-3 space-y-1 relative z-10">
                    <h3 className={`font-bold text-sm sm:text-base tracking-tight ${
                      isSelected ? 'text-[#0A0A0A]' : 'text-[#4A4A46]'
                    }`}>
                      {sc.sector}
                    </h3>
                    <p className="text-xs text-[#6A6862] line-clamp-1 font-mono">
                      {sc.tag}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Hardware Telemetry Badge */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] text-xs font-mono text-[#5A5852] space-y-1.5">
              <div className="flex items-center justify-between font-bold text-[#0A0A0A]">
                <span>DETERMINISTIC BOUNDARY</span>
                <span className="text-[#0A0A0A]">{activeScenario.confidence}</span>
              </div>
              <div className="text-[11px] text-[#7A7770] leading-relaxed">
                Zero hallucination mathematical guardrail. Real-time deterministic inference verified on cloud-native infrastructure.
              </div>
            </div>
          </div>

          {/* Right: The Dynamic Chatbot & Real-Time Data Insights Console */}
          <div className="lg:col-span-8 bg-[#FAF8F5] rounded-3xl border border-[#EAE6DF] shadow-lg overflow-hidden flex flex-col">
            
            {/* Terminal Top Masthead Bar */}
            <div className="bg-white px-6 py-4 border-b border-[#EAE6DF] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                  C
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0A0A0A] flex items-center gap-2">
                    <span>Clockin AI Telemetry Engine</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse"></span>
                  </div>
                  <div className="text-[10px] font-mono text-[#7A7770]">
                    SECTOR: {activeScenario.sector.toUpperCase()} &bull; LATENCY: {activeScenario.latency}
                  </div>
                </div>
              </div>

              {/* Progress Bar Ribbon */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#7A7770]">
                  <span>AUTO-CYCLE</span>
                  <div className="w-24 h-1.5 bg-[#EAE6DF] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0A0A0A] transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase text-[#0A0A0A] bg-[#FAF8F5] border border-[#EAE6DF] px-3 py-1 rounded-md font-bold shadow-xs">
                  {activeScenario.tag}
                </span>
              </div>
            </div>

            {/* Main Chat Conversation Viewport */}
            <div className="p-6 sm:p-8 space-y-6 min-h-[460px] flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* 1. Simulated User Query Message */}
                <AnimatePresence mode="wait">
                  {(animStage === 'query' || animStage === 'thinking' || animStage === 'response' || animStage === 'complete') && (
                    <motion.div
                      key={`query-${activeScenario.id}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl bg-[#0A0A0A] text-white rounded-br-xs shadow-sm space-y-1">
                        <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                          ENTERPRISE OPERATOR INQUIRY
                        </div>
                        <p className="text-xs sm:text-sm font-medium leading-relaxed">
                          &ldquo;{activeScenario.query}&rdquo;
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 2. Clockin AI Real-Time Processing Status */}
                {animStage === 'thinking' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-xs font-mono text-[#5A5852] bg-white px-4 py-2.5 rounded-xl border border-[#EAE6DF] max-w-fit shadow-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0A] animate-ping"></span>
                    <span>Clockin AI synthesizing context graph &amp; executing atomic ledger write ({activeScenario.latency})...</span>
                  </motion.div>
                )}

                {/* 3. Clockin AI Natural Language Response */}
                <AnimatePresence mode="wait">
                  {(animStage === 'response' || animStage === 'complete') && (
                    <motion.div
                      key={`resp-${activeScenario.id}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[95%] sm:max-w-[88%] p-4 sm:p-5 rounded-2xl bg-white text-[#0A0A0A] rounded-bl-xs border border-[#EAE6DF] shadow-xs space-y-2">
                        <div className="flex items-center justify-between pb-1 border-b border-[#EAE6DF]/60">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7A7770] font-bold uppercase">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A0A0A]" />
                            <span>CLOCKIN AUTONOMOUS NODE // DETERMINISTIC DISPATCH</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#0A0A0A] font-bold">
                            {activeScenario.latency}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#0A0A0A] leading-relaxed font-normal">
                          {activeScenario.response}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 4. Rich Multimodal Data Insight Card (Graphs, Bars, Confirmation Badges) */}
                <AnimatePresence mode="wait">
                  {animStage === 'complete' && (
                    <motion.div
                      key={`card-${activeScenario.id}`}
                      initial={{ opacity: 0, scale: 0.96, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE6DF] shadow-md space-y-5"
                    >
                      {/* Insight Card Header */}
                      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#EAE6DF] gap-2">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-[#0A0A0A]" />
                          <span className="text-xs font-mono font-extrabold uppercase text-[#0A0A0A]">
                            {activeScenario.dataInsight.title}
                          </span>
                        </div>

                        {/* Highlight Key Metric */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#7A7770] uppercase">
                            {activeScenario.dataInsight.metricLabel}:
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#0A0A0A] text-white text-xs font-mono font-bold">
                            {activeScenario.dataInsight.metric}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Visual Bar Chart */}
                      <div className="space-y-3 pt-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A7770] font-semibold">
                          TELEMETRY DISTRIBUTION &amp; OUTCOME YIELD
                        </div>

                        <div className="grid grid-cols-1 gap-2.5">
                          {activeScenario.dataInsight.bars.map((bar, bIdx) => (
                            <div key={bIdx} className="space-y-1">
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-[#4A4A46] font-semibold">{bar.label}</span>
                                <span className="text-[#0A0A0A] font-bold">{bar.display}</span>
                              </div>
                              <div className="w-full h-2.5 bg-[#FAF8F5] rounded-full overflow-hidden border border-[#EAE6DF]">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${bar.value}%` }}
                                  transition={{ duration: 0.8, delay: bIdx * 0.1, ease: 'easeOut' }}
                                  className={`h-full rounded-full ${
                                    bIdx === activeScenario.dataInsight.bars.length - 1
                                      ? 'bg-[#0A0A0A]'
                                      : 'bg-[#7A7770]'
                                  }`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Verified Atomic System Write Badge */}
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#0A0A0A]" />
                          <span className="font-bold text-[#0A0A0A]">
                            {activeScenario.dataInsight.badge.system}
                          </span>
                          <span className="text-neutral-300">|</span>
                          <span className="text-[#5A5852]">
                            {activeScenario.dataInsight.badge.action}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-white text-[#0A0A0A] font-bold border border-[#EAE6DF] text-[10px]">
                          {activeScenario.dataInsight.badge.code}
                        </span>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Bottom Video Progress Ribbon & Status Indicator */}
              <div className="pt-4 border-t border-[#EAE6DF] flex flex-wrap items-center justify-between text-xs font-mono text-[#7A7770] gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0A0A0A] animate-pulse"></span>
                  <span>AUTONOMOUS EXECUTION ENGINE &bull; NO HUMAN INTERVENTION</span>
                </div>
                
                <div className="flex items-center gap-2 text-[#0A0A0A] font-bold">
                  <span>SCENARIO {currentIdx + 1} OF 4</span>
                  <span className="text-neutral-300">/</span>
                  <span>AUTO-ADVANCE IN {(9 - (progress * 0.09)).toFixed(0)}S</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
