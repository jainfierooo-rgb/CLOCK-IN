'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle2, PhoneCall, MessageSquare, Mail } from 'lucide-react';

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
    <footer className="border-t border-[#1C1C1C] bg-[#0A0A0A] text-white pt-12 sm:pt-20 pb-10 sm:pb-14 transition-colors selection:bg-white selection:text-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Brand & Executive Briefing Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-16 border-b border-white/10 items-start">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white hover:opacity-90 transition-opacity">
                CLOCKIN<span className="text-neutral-400">.AI</span>
              </Link>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 font-bold">
                ENTERPRISE SYSTEM 2026
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed font-normal">
              Autonomous neural infrastructure for modern enterprise. Operating with real-time deterministic reliability to make legacy operations 101× more worthy.
            </p>
            <div className="text-[11px] font-mono text-neutral-300 uppercase tracking-widest pt-1 font-bold">
              WORLDWIDE // GLOBAL TECH &amp; OPERATIONS HUB
            </div>
          </div>

          {/* Executive Research Briefing Dispatch */}
          <div className="lg:col-span-6 lg:pl-10">
            <div className="max-w-md ml-auto space-y-3">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                Receive Quarterly Enterprise AI Architecture Briefings
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Curated technical dispatches on deterministic guardrails, real-time inference latency, and enterprise valuation multipliers.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-mono text-white bg-white/10 py-3 px-4 rounded-xl border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Subscribed. Technical briefings will be dispatched to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="corporate.email@company.com"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black hover:bg-neutral-200 px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-xl shadow-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* 5-Column Enterprise Directory with 100% Real Navigable Links */}
        <div className="py-10 sm:py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 border-b border-white/10">
          
          {/* Column 1: Sector Takeovers */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Sector Takeovers
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/industries/hospitality" className="hover:text-white transition-colors block">
                  Luxury Hospitality &amp; Resorts
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-white transition-colors block">
                  Hospitals &amp; Clinical Networks
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-white transition-colors block">
                  Precision Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="hover:text-white transition-colors block">
                  Retail &amp; Omnichannel Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/finance" className="hover:text-white transition-colors block">
                  Banking &amp; Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="hover:text-white transition-colors block">
                  Logistics &amp; Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-white font-semibold hover:underline block pt-1">
                  All Industry Takeovers &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Autonomous Engine */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Autonomous Engine
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/architecture#latency" className="hover:text-white transition-colors block">
                  Real-Time Ingestion Pipeline
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors block">
                  Deterministic Guardrail Gates
                </Link>
              </li>
              <li>
                <Link href="/architecture#latency" className="hover:text-white transition-colors block">
                  Atomic Database Webhooks
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors block">
                  21-Day Turnkey Blueprint
                </Link>
              </li>
              <li>
                <Link href="/#proof" className="hover:text-white transition-colors block">
                  101× Margin Telemetry
                </Link>
              </li>
              <li>
                <Link href="/#flowchart" className="hover:text-white transition-colors block">
                  Visual Flowchart Loop
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Native Integrations (Linked to Respective Sector Architectures) */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Native Integrations
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/industries/hospitality" className="hover:text-white transition-colors block">
                  Oracle Opera &amp; Cloudbeds PMS
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-white transition-colors block">
                  Epic Systems &amp; HL7 FHIR EHR
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-white transition-colors block">
                  Siemens &amp; SAP S/4HANA SCADA
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="hover:text-white transition-colors block">
                  Shopify Plus &amp; Salesforce
                </Link>
              </li>
              <li>
                <Link href="/industries/finance" className="hover:text-white transition-colors block">
                  Bloomberg API &amp; FIS Banking
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="hover:text-white transition-colors block">
                  Oracle WMS &amp; FleetComplete
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Security & Architecture */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Security &amp; Topology
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors block">
                  Zero-Data Retention Architecture
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors block">
                  HIPAA &amp; SOC 2 Aligned Design
                </Link>
              </li>
              <li>
                <Link href="/architecture#hardware" className="hover:text-white transition-colors block">
                  Sovereign Global Cloud VPC
                </Link>
              </li>
              <li>
                <Link href="/architecture#hardware" className="hover:text-white transition-colors block">
                  On-Premises Air-Gap Appliance
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors block">
                  Hallucination Kill-Switch
                </Link>
              </li>
              <li>
                <Link href="/architecture#hardware" className="hover:text-white transition-colors block">
                  Cryptographic Hardware Enclave
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Dispatch (Standardized to 8848563824) */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <div className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
              Direct Inquiries
            </div>
            <div className="text-xs text-neutral-400 space-y-3 leading-relaxed font-mono">
              <div className="space-y-2">
                <a
                  href="mailto:partners@clockin.ai?subject=Inquiry%20regarding%20Clockin%20AI%20Services&body=Hello%20Clockin%20AI%20Team%2C%0A%0AWe%20are%20interested%20in%20exploring%20custom%20AI%20services%20for%20our%20operations.%0A%0ACompany%3A%0APhone%3A%0ABrief%20Requirement%3A"
                  className="flex items-center gap-2 text-white font-semibold hover:text-neutral-300 transition-colors group cursor-pointer"
                  title="Send email to partners@clockin.ai"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white shrink-0" />
                  <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-white">partners@clockin.ai</span>
                </a>
                <a
                  href="mailto:support@clockin.ai?subject=Support%20Request%20-%20Clockin%20AI"
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group cursor-pointer"
                  title="Send email to support@clockin.ai"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0" />
                  <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-white">support@clockin.ai</span>
                </a>
              </div>

              <p className="text-neutral-300 pt-1">
                Global Hotline: <a href="tel:+918848563824" className="hover:text-white underline">+91 88485 63824</a><br />
                WhatsApp Direct: <a href="https://wa.me/918848563824" className="hover:text-white underline">+91 88485 63824</a>
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="mailto:partners@clockin.ai?subject=Direct%20Inquiry%20-%20Clockin%20AI"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-neutral-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20partnership."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-neutral-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp Direct Dispatch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Security / Architecture Badges Strip */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 text-[11px] font-mono text-neutral-400">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>ZERO DATA RETENTION ARCHITECTURE</span>
            </Link>
            <Link href="/security" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>HIPAA &amp; SOC 2 ALIGNED DESIGN</span>
            </Link>
            <Link href="/architecture#hardware" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>GLOBAL SOVEREIGN VPC DEPLOYMENT</span>
            </Link>
            <Link href="/architecture#latency" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>REAL-TIME SUB-SECOND INFERENCE</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"></span>
            <span className="text-white font-bold">WORLDWIDE CLUSTERS OPERATIONAL</span>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
          <div>&copy; 2026 Clockin AI. All rights reserved. Autonomous neural enterprise infrastructure.</div>
          <div className="flex flex-wrap gap-6 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Architecture
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Deployment
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security Principles
            </Link>
            <Link href="/architecture" className="hover:text-white transition-colors">
              System Architecture
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
