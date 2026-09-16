'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-[#1F2422] bg-[#070908] text-white pt-20 pb-14 transition-colors selection:bg-[#2DD4BF] selection:text-[#070908]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Top Brand & Executive Briefing Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-start">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                CLOCKIN<span className="text-[#2DD4BF]">.AI</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#2DD4BF] bg-white/5 px-3 py-1 rounded-full border border-white/10 font-bold">
                ENTERPRISE SYSTEM 2026
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-lg leading-relaxed font-normal">
              We provide full-spectrum AI services from bottom to top. Transforming legacy enterprise workflows into autonomous, deterministic engines that make businesses 101× more worthy.
            </p>
            <div className="text-[11px] font-mono text-[#2DD4BF] uppercase tracking-widest pt-1 font-bold">
              BENGALURU, INDIA // HEADQUARTERS &amp; R&amp;D LAB
            </div>
          </div>

          {/* Executive Research Briefing Dispatch */}
          <div className="lg:col-span-6 lg:pl-10">
            <div className="max-w-md ml-auto space-y-3">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                Receive Quarterly Enterprise AI Architecture Briefings
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Curated technical dispatches on deterministic guardrails, sub-25ms inference latency, and enterprise valuation multipliers.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF] bg-white/5 py-3 px-4 rounded-xl border border-[#2DD4BF]/40">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Subscribed. Technical briefings will be dispatched to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="corporate.email@company.com"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-[#6B7280] focus:outline-none focus:border-[#2DD4BF] font-sans"
                  />
                  <button
                    type="submit"
                    className="btn-teal-primary px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-xl shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Professional 5-Column Enterprise Directory */}
        <div className="py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-white/10">
          
          {/* Column 1: Sector Takeovers */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Sector Takeovers
            </div>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/industries/hospitality" className="hover:text-[#2DD4BF] transition-colors block">
                  Luxury Hospitality &amp; Resorts
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-[#2DD4BF] transition-colors block">
                  Hospitals &amp; Clinical Networks
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-[#2DD4BF] transition-colors block">
                  Precision Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="hover:text-[#2DD4BF] transition-colors block">
                  Retail &amp; Omnichannel Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/finance" className="hover:text-[#2DD4BF] transition-colors block">
                  Banking &amp; Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="hover:text-[#2DD4BF] transition-colors block">
                  Logistics &amp; Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-[#2DD4BF] font-semibold hover:underline block pt-1">
                  Custom Industry Takeover &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Autonomous Engine */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Autonomous Engine
            </div>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/#flowchart" className="hover:text-[#2DD4BF] transition-colors block">
                  Multi-Modal Ingestion Pipeline
                </Link>
              </li>
              <li>
                <Link href="/#flowchart" className="hover:text-[#2DD4BF] transition-colors block">
                  Deterministic Guardrail Gates
                </Link>
              </li>
              <li>
                <Link href="/#flowchart" className="hover:text-[#2DD4BF] transition-colors block">
                  Sub-25ms Atomic Webhooks
                </Link>
              </li>
              <li>
                <Link href="/#flowchart" className="hover:text-[#2DD4BF] transition-colors block">
                  21-Day Turnkey Blueprint
                </Link>
              </li>
              <li>
                <Link href="/#flowchart" className="hover:text-[#2DD4BF] transition-colors block">
                  101× Margin Telemetry
                </Link>
              </li>
              <li>
                <Link href="/#flowchart" className="hover:text-[#2DD4BF] transition-colors block">
                  Model Drift Radar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Native Integrations */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Native Integrations
            </div>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Oracle Opera &amp; Cloudbeds PMS</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Epic Systems &amp; HL7 FHIR EHR</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Siemens &amp; SAP S/4HANA SCADA</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Shopify Plus &amp; Salesforce</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Bloomberg API &amp; FIS Banking</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Oracle WMS &amp; FleetComplete</span></li>
            </ul>
          </div>

          {/* Column 4: Security & Architecture (Realistic & Honest) */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Security &amp; Architecture
            </div>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Zero-Data Retention Architecture</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">HIPAA &amp; SOC 2 Ready Design</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Sovereign Indian Cloud / Private VPC</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">On-Premises Air-Gap Deployment</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Deterministic Hallucination Kill-Switch</span></li>
              <li><span className="hover:text-[#2DD4BF] cursor-pointer transition-colors block">Cryptographic Hardware Enclave</span></li>
            </ul>
          </div>

          {/* Column 5: Direct Dispatch (India Focus) */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Direct Inquiries
            </div>
            <div className="text-xs text-[#9CA3AF] space-y-2.5 leading-relaxed font-mono">
              <p className="text-white font-semibold">
                partners@clockin.ai<br />
                support@clockin.ai
              </p>
              <p className="text-[#9CA3AF]">
                Bengaluru Hub: +91 80 4567 8900<br />
                WhatsApp Direct: +91 98765 43210
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20partnership."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2DD4BF] hover:text-[#5EEAD4] transition-colors"
                >
                  <span>WhatsApp Direct Dispatch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Security / Architecture Badges Strip */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 text-[11px] font-mono text-[#9CA3AF]">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              ZERO DATA RETENTION ARCHITECTURE
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              HIPAA &amp; SOC 2 ALIGNED DESIGN
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              SOVEREIGN INDIAN VPC DEPLOYMENT
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              22MS SUB-SECOND INFERENCE
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#2DD4BF]">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
            <span className="text-white font-bold">INDIA PRIMARY CLUSTER OPERATIONAL</span>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] font-mono gap-4">
          <div>&copy; 2026 Clockin AI. All rights reserved. Deterministic enterprise AI architecture.</div>
          <div className="flex flex-wrap gap-6 text-xs">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Architecture</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Deployment</span>
            <span className="hover:text-white cursor-pointer transition-colors">Security Principles</span>
            <span className="hover:text-white cursor-pointer transition-colors">System Status</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
