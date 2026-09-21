'use client';

import { motion } from 'framer-motion';

const metrics = [
  {
    value: '24/7',
    unit: 'AVAILABILITY',
    label: 'Automated Operations',
    desc: 'Zero wait times on customer calls, WhatsApp, and bookings.',
  },
  {
    value: '14–21',
    unit: 'DAYS TO LAUNCH',
    label: 'Turnkey Go-Live',
    desc: 'From discovery to live deployment with your existing tools.',
  },
  {
    value: '6+',
    unit: 'KEY INDUSTRIES',
    label: 'Industry Support',
    desc: 'Hospitality, Healthcare, Manufacturing, Retail, and more.',
  },
  {
    value: '0',
    unit: 'EXTRA HARDWARE',
    label: 'Cloud-Native Setup',
    desc: 'Runs seamlessly in the cloud with zero on-site maintenance.',
  },
];

export default function TrustProofBar() {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#EAE6DF] py-16 sm:py-20 overflow-hidden text-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between space-y-3 p-6 sm:p-0 rounded-2xl bg-white sm:bg-transparent border border-[#EAE6DF] sm:border-0 lg:border-r lg:last:border-r-0 lg:pr-8"
            >
              <div className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#737068] font-bold">
                  {item.unit}
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0A0A0A] tracking-tight">
                  {item.value}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                  {item.label}
                </div>
                <p className="text-xs text-[#5A5852] leading-relaxed max-w-xs font-normal">
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
