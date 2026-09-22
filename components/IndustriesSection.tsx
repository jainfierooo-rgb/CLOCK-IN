'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, ArrowRight, Cpu, Mail } from 'lucide-react';

const industriesList = [
  {
    slug: 'hospitality',
    num: 'SEC-01',
    name: 'Luxury Hospitality & Resorts',
    summary: 'We take over front-desk booking congestion, 24/7 multilingual guest concierges, dining reservations, and personalized room service directly synchronized with your PMS ledgers.',
    impact: '+34% Ancillary Spend',
    systems: ['Opera Cloud', 'Cloudbeds', 'Amadeus'],
    turnaround: '1.2s VIP Resolution',
  },
  {
    slug: 'healthcare',
    num: 'SEC-02',
    name: 'Hospitals & Clinical Networks',
    summary: 'We take over routine patient scheduling, zero-wait intake triage, physician consultation routing, and post-discharge recovery check-ins within a verified HIPAA enclave.',
    impact: '-45% No-Show Rates',
    systems: ['Epic EHR', 'Cerner', 'HL7 FHIR'],
    turnaround: '100% Zero-PHI Retention',
  },
  {
    slug: 'manufacturing',
    num: 'SEC-03',
    name: 'Precision Manufacturing & Plants',
    summary: 'We take over machinery diagnostic SOPs, automated defect logging via edge computer vision, and autonomous raw material buffer replenishment directly inside SAP.',
    impact: '99.4% Machine Uptime',
    systems: ['Siemens MindSphere', 'SAP S/4HANA', 'SCADA'],
    turnaround: '1,200 Parts / Min Vision Gate',
  },
  {
    slug: 'retail',
    num: 'SEC-04',
    name: 'Retail & Omnichannel Commerce',
    summary: 'We take over customer catalog navigation, WhatsApp abandoned cart recovery sequences, dynamic sizing advice, and instant frictionless return label authorization.',
    impact: '+28% Cart Conversion',
    systems: ['Shopify Plus', 'Salesforce', 'NetSuite'],
    turnaround: '18-Sec Return Label Issuance',
  },
  {
    slug: 'finance',
    num: 'SEC-05',
    name: 'Banking & Financial Services',
    summary: 'We take over multi-page loan document extraction, deterministic KYC identity verification, and natural language portfolio intelligence with zero-hallucination guarantees.',
    impact: '98.9% KYC Accuracy',
    systems: ['Bloomberg API', 'FIS Core', 'Stripe Treasury'],
    turnaround: '3-Min Loan Pre-Qualification',
  },
  {
    slug: 'logistics',
    num: 'SEC-06',
    name: 'Logistics, Freight & Supply Chain',
    summary: 'We take over messy paper Bill of Lading parsing, conversational WhatsApp driver dispatch, dock scheduling, and dynamic warehouse inventory buffer optimization.',
    impact: '-32% Transit Latency',
    systems: ['Oracle WMS', 'FleetComplete', 'SAP TM'],
    turnaround: 'Sub-Second Driver Routing',
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-14 sm:py-24 lg:py-32 bg-white text-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Bold Takeover Header with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase text-[#63615A] font-bold mb-3 sm:mb-4">
            <span>UNIVERSAL DOMAIN TAKEOVER // ALL ENTERPRISE SECTORS</span>
          </div>

          <h2 className="font-extrabold text-2xl sm:text-4xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.12] mb-3 sm:mb-6">
            We take over complex operations across any industry.
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-[#5A5852] leading-relaxed font-normal max-w-3xl">
            Whether in luxury hospitality, clinical hospital networks, precision manufacturing foundries, or custom multi-tier enterprise domains. Clockin AI ingests your messy physical operational reality, eliminates human bottlenecks, and compounds your business valuation by 101×.
          </p>
        </motion.div>

        {/* Professional 6-Sector Architectural Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
          {industriesList.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-[#FAF8F5] hover:bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#EAE6DF] hover:border-[#0A0A0A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Top Sector Badge & Impact Pill */}
                <div className="flex items-center justify-between pb-5 border-b border-[#EAE6DF] mb-6">
                  <span className="text-[11px] font-mono font-bold text-[#7A7770] tracking-wider">
                    {item.num}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2DDD5] text-[10px] font-mono font-bold text-[#0A0A0A] shadow-2xs">
                    <TrendingUp className="w-3 h-3 text-[#0A0A0A]" />
                    <span>{item.impact}</span>
                  </span>
                </div>

                {/* Industry Headline */}
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight mb-3 group-hover:text-[#262626] transition-colors">
                  {item.name}
                </h3>

                {/* Integration Chip Pills */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {item.systems.map((sys, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white border border-[#E5E0D8] text-[10px] font-mono text-[#4A4843] font-medium"
                    >
                      {sys}
                    </span>
                  ))}
                </div>

                {/* Authoritative Takeover Description */}
                <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#7A7770]">
                  {item.turnaround}
                </span>

                <Link
                  href={`/industries/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#5A5852] transition-colors"
                >
                  <span>Inspect Architecture</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Width Universal Takeover Banner with Hover Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 border border-[#EAE6DF] relative overflow-hidden shadow-lg text-[#0A0A0A]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#6A6862] font-bold">
                <Cpu className="w-3.5 h-3.5 text-[#0A0A0A]" />
                <span>UNIVERSAL ADAPTIVE ENGINE // 100% SECTOR AGNOSTIC</span>
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight">
                Your Industry Isn&apos;t Listed? We Take Over Any Custom Enterprise Category.
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed max-w-2xl font-normal">
                If your business has operational workflows, human communication friction, and database ledgers, Clockin AI can take it over. Our applied engineering team audits your proprietary schemas, constructs deterministic guardrails, and executes production deployment in 14 to 21 days.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="https://wa.me/918848563824?text=Inquiry%20regarding%20custom%20industry%20takeover%20with%20Clockin%20AI."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
              >
                <span>Initiate Custom Takeover</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:info@clockinai.net?subject=Inquiry%20regarding%20Custom%20Industry%20Takeover%20-%20Clockin%20AI&body=Hello%20Clockin%20AI%20Team%2C%0A%0AWe%20would%20like%20to%20discuss%20custom%20AI%20solutions%20for%20our%20enterprise.%0A%0ACompany%20Name%3A%0AIndustry%2FSector%3A%0APrimary%20Operational%20Bottleneck%3A"
                className="btn-dark-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#0A0A0A]" />
                <span>Email Our Team (info@clockinai.net)</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
