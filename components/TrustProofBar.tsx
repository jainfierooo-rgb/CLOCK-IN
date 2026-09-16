'use client';

import { motion } from 'framer-motion';

const metrics = [
  {
    value: '101×',
    unit: 'VALUATION YIELD',
    label: 'Enterprise Value Compounding',
    desc: 'Autonomous margin expansion from bottom to top.',
  },
  {
    value: '14–21',
    unit: 'DAYS TO GO-LIVE',
    label: 'Turnkey Launch Cycle',
    desc: 'From initial data audit to production execution.',
  },
  {
    value: '22ms',
    unit: 'GLOBAL EDGE',
    label: 'Deterministic Latency',
    desc: 'Instant booking, triage, and bi-directional ERP sync.',
  },
  {
    value: '0.00%',
    unit: 'HALLUCINATION',
    label: 'Mathematical Safety',
    desc: 'Hard deterministic boundaries and zero PHI leakage.',
  },
];

export default function TrustProofBar() {
  return (
    <section className="bg-[#FAF8F5] border-b border-[#E5E0D8] py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E0D8]">
          {metrics.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col justify-between space-y-3 ${idx > 0 ? 'pt-8 lg:pt-0 lg:pl-8' : ''}`}
            >
              <div className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#0D9488] font-bold">
                  {item.unit}
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0A0A0A] tracking-tight">
                  {item.value}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#262626] mb-1">
                  {item.label}
                </div>
                <p className="text-xs text-[#666666] leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
