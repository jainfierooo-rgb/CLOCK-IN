'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Server, 
  HardDrive, 
  Cloud, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  PhoneCall,
  MessageSquare,
  Building2, 
  Stethoscope, 
  Factory, 
  ShoppingBag, 
  CreditCard, 
  Truck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ArchitecturePage() {
  const [selectedDomain, setSelectedDomain] = useState<string>('hospitality');

  const domainTakeovers = [
    {
      id: 'hospitality',
      acronym: 'PMS',
      title: 'Property Management Systems',
      sector: 'Luxury Hospitality & Resorts',
      icon: Building2,
      integrations: ['Oracle Opera Cloud (OXI / OHIP)', 'Cloudbeds API', 'Agilysys', 'Infor HMS'],
      whatIsIt: 'A PMS is the operational heartbeat of a hotel or resort. It tracks room availability, guest folios, housekeeping status, restaurant seating, and spa reservations.',
      howClockinTakesOver: 'Clockin AI connects directly via bi-directional webhooks to the PMS. When a guest messages on WhatsApp or calls the hotel line, the AI checks live room availability, confirms rate codes, charges folios, and writes the booking into Opera within 22 milliseconds with zero staff intervention.',
      atomicWrites: ['Room Folio Ledger', 'Housekeeping Priority Queue', 'Spa / Dining Reservation Schedule', 'VIP Dietary Preference Profile']
    },
    {
      id: 'healthcare',
      acronym: 'EHR / EMR',
      title: 'Electronic Health Records',
      sector: 'Hospitals & Clinical Networks',
      icon: Stethoscope,
      integrations: ['Epic Systems (App Orchard)', 'Cerner / Oracle Health', 'HL7 FHIR v4 API', 'Athenahealth'],
      whatIsIt: 'An EHR (or EMR) is the legal clinical database containing medical histories, vitals, lab reports, doctor schedules, and clinical treatment plans.',
      howClockinTakesOver: 'Clockin AI executes patient clinical intake triage via voice or secure portal, maps patient symptoms against clinical severity protocols, and directly books slots into doctor EHR calendars. All transactions run with Ephemeral Volatile Memory—zero patient health information (PHI) is ever retained on Clockin servers.',
      atomicWrites: ['Doctor OPD Calendar', 'Patient Clinical Triage Chart', 'Insurance Eligibility Verification', 'Automated Post-Discharge Medication Audit']
    },
    {
      id: 'manufacturing',
      acronym: 'MES / SCADA',
      title: 'Manufacturing Execution Systems & SCADA',
      sector: 'Precision Plants & Industrial Terrain',
      icon: Factory,
      integrations: ['Siemens MindSphere & Simatic', 'SAP S/4HANA Plant Maintenance', 'Rockwell Automation SCADA', 'Allen-Bradley PLCs'],
      whatIsIt: 'An MES tracks and documents the transformation of raw materials into finished goods on the factory floor, monitoring machine cycle times, line throughput, and quality scrap rates.',
      howClockinTakesOver: 'Clockin AI ingests high-speed optical vision streams (1,200 parts/minute) to identify hairline surface defects in under 18ms. When a threshold error is detected, the AI writes a pneumatic reject signal to the PLC and triggers an automatic SAP work order for line maintenance.',
      atomicWrites: ['PLC Pneumatic Reject Gate', 'SAP S/4HANA Work Order', 'Shift Scrap Defect Telemetry', 'Automatic Component Buffer Restock Trigger']
    },
    {
      id: 'retail',
      acronym: 'ERP / OMS',
      title: 'Enterprise Resource Planning & Order Management',
      sector: 'Omnichannel Retail & Global Brands',
      icon: ShoppingBag,
      integrations: ['Shopify Plus API', 'Salesforce Commerce Cloud', 'SAP ERP & NetSuite', 'Zendesk / Gorgias'],
      whatIsIt: 'ERP and OMS systems coordinate inventory allocation across multiple physical warehouses, track order shipping status, and process refunds and returns.',
      howClockinTakesOver: 'Clockin AI handles high-volume customer inquiries via WhatsApp, web chat, and voice. It verifies payment gateways, creates split-shipment return labels, and issues instant inventory holds with sub-second resolution.',
      atomicWrites: ['Inventory Reservation Ledger', 'FedEx / Blue Dart Return Waybill', 'Multi-Warehouse Allocation Matrix', 'VIP Loyalty Tier Credit']
    },
    {
      id: 'finance',
      acronym: 'CORE BANKING',
      title: 'Core Banking Engines & Financial Messaging',
      sector: 'Banking & Financial Institutions',
      icon: CreditCard,
      integrations: ['FIS & Fiserv Core Banking', 'Bloomberg B-PIPE Data Feed', 'SWIFT MT/ISO 20022', 'Finacle API'],
      whatIsIt: 'Core banking systems maintain general ledgers, account balances, loan underwriting criteria, and compliance anti-money laundering (AML) controls.',
      howClockinTakesOver: 'Clockin AI pre-qualifies lending applications, parses structured and unstructured financial statements in real time, and runs live transaction dispute triage with deterministic regulatory guardrails.',
      atomicWrites: ['Underwriting Risk Scorecard', 'Dispute Investigation Dossier', 'ISO 20022 Audit Trail', 'Instant KYC Identity Ledger']
    },
    {
      id: 'logistics',
      acronym: 'WMS / TMS',
      title: 'Warehouse & Transport Management Systems',
      sector: 'Logistics & Global Supply Chain',
      icon: Truck,
      integrations: ['Oracle WMS Cloud', 'Manhattan Associates', 'FleetComplete GPS Telematics', 'SAP Transportation'],
      whatIsIt: 'WMS and TMS platforms schedule dock doors, manage bin pallet picking, track carrier GPS coordinates, and compute freight route economics.',
      howClockinTakesOver: 'Clockin AI automatically parses paper Bills of Lading via multi-modal camera, assigns drivers to loading bays dynamically, and recalculates delayed route ETAs with automated customer alerts.',
      atomicWrites: ['Dock Bay Slot Allocation', 'Carrier Dispatch Manifest', 'Cross-Dock Transit Ledger', 'Cold-Chain Temperature Alert Log']
    }
  ];

  const activeDomainData = domainTakeovers.find((d) => d.id === selectedDomain) || domainTakeovers[0];

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A] flex flex-col justify-between selection:bg-[#0A0A0A] selection:text-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="pt-16 pb-20 bg-[#FAF8F5] border-b border-[#EAE6DF] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE6DF] text-[11px] font-mono tracking-widest uppercase text-[#5A5852] font-bold shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#0A0A0A]" />
              <span>Technical Architectural Blueprint &bull; Version 2026.4</span>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-6xl tracking-tight text-[#0A0A0A] leading-[1.08]">
              Autonomous Neural Infrastructure. <br />
              <span className="text-[#5A5852]">Real-Time Autonomous Enterprise AI.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A5852] leading-relaxed max-w-3xl">
              An engineering-grade breakdown of how Clockin AI operates at sub-second deterministic velocity, connects directly to existing PMS, EHR, and ERP ledgers, and eliminates hallucination risk across enterprise operations.
            </p>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-[#EAE6DF] shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-[#7A7770] font-bold">End-to-End Latency</div>
                <div className="text-2xl font-mono font-extrabold text-[#0A0A0A] mt-1">&lt; 1s</div>
                <div className="text-[11px] text-[#5A5852] mt-0.5">Real-Time Execution</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#EAE6DF] shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-[#7A7770] font-bold">Hardware Footprint</div>
                <div className="text-2xl font-mono font-extrabold text-[#0A0A0A] mt-1">Zero Required</div>
                <div className="text-[11px] text-[#5A5852] mt-0.5">100% Cloud or Air-Gap</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#EAE6DF] shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-[#7A7770] font-bold">Data Retention</div>
                <div className="text-2xl font-mono font-extrabold text-[#0A0A0A] mt-1">Zero-RAM</div>
                <div className="text-[11px] text-[#5A5852] mt-0.5">DPDP &amp; HIPAA Compliant</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#EAE6DF] shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-[#7A7770] font-bold">Deployment SLA</div>
                <div className="text-2xl font-mono font-extrabold text-[#0A0A0A] mt-1">21 Days</div>
                <div className="text-[11px] text-[#5A5852] mt-0.5">Turnkey Go-Live</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* How Our Team Delivers AI Services Across Industries */}
      <section id="services" className="py-24 border-b border-[#EAE6DF] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[10px] font-mono tracking-widest uppercase text-[#5A5852] font-bold">
                <Zap className="w-3 h-3 text-[#0A0A0A]" />
                <span>Our Implementation Process</span>
              </div>

              <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                How Our Team Delivers AI Services For Your Business
              </h2>

              <p className="text-sm sm:text-base text-[#5A5852] leading-relaxed">
                We are a hands-on AI engineering team. We do not sell generic chatbot templates—we work directly with your team to design, build, and deploy custom AI solutions tailored to your operational workflows across any industry.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A0A0A]">Workflow &amp; Friction Audit</h4>
                    <p className="text-xs text-[#5A5852] mt-0.5 leading-relaxed">
                      We study your existing communication channels, customer questions, and manual administrative bottlenecks to identify where AI creates the highest value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A0A0A]">Custom AI Agent Architecture</h4>
                    <p className="text-xs text-[#5A5852] mt-0.5 leading-relaxed">
                      We configure intelligent domain agents equipped with your business rate sheets, FAQs, catalog data, and operational guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A0A0A]">Direct Software Integration</h4>
                    <p className="text-xs text-[#5A5852] mt-0.5 leading-relaxed">
                      We connect the AI directly to your existing systems (WhatsApp, PMS, EHR, ERP, or CRM). Bookings, appointments, and inquiries update your database automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                    04
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A0A0A]">Turnkey Launch &amp; Dedicated Support</h4>
                    <p className="text-xs text-[#5A5852] mt-0.5 leading-relaxed">
                      We take your AI live in 14–21 business days, monitor operations, and provide seamless human staff fallback whenever complex edge cases arise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables Overview Box */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DF]">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                    End-to-End AI Deliverables
                  </span>
                  <span className="text-[11px] font-mono text-[#7A7770]">All-Inclusive Managed Setup</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[#EAE6DF] space-y-2">
                    <div className="text-xs font-mono font-bold uppercase text-[#0A0A0A]">24/7 Voice &amp; WhatsApp AI</div>
                    <p className="text-xs text-[#5A5852] leading-relaxed">
                      Autonomous conversational concierges that answer calls and WhatsApp messages instantly, day and night.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#EAE6DF] space-y-2">
                    <div className="text-xs font-mono font-bold uppercase text-[#0A0A0A]">Direct System Sync</div>
                    <p className="text-xs text-[#5A5852] leading-relaxed">
                      Auto-commits reservations, patient appointments, and orders directly into your existing software ledgers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#EAE6DF] space-y-2">
                    <div className="text-xs font-mono font-bold uppercase text-[#0A0A0A]">Zero-Footprint Cloud Setup</div>
                    <p className="text-xs text-[#5A5852] leading-relaxed">
                      No hardware to buy or maintain. Everything connects securely via cloud APIs and webhooks.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#EAE6DF] space-y-2">
                    <div className="text-xs font-mono font-bold uppercase text-[#0A0A0A]">Human Staff Fallback</div>
                    <p className="text-xs text-[#5A5852] leading-relaxed">
                      Smart routing to your front desk or support team when an escalation is needed, with full context.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                  <div className="text-[#5A5852]">
                    Ready to discuss your business requirements?
                  </div>
                  <a
                    href="https://wa.me/918848563824?text=Hello%2C%20I%20would%20like%20to%20discuss%20custom%20AI%20services%20for%20our%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal-primary px-5 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider"
                  >
                    Chat With Our Team
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Deep-Dive 2: Domain Takeovers — PMS vs EHR vs MES */}
      <section id="domains" className="py-24 border-b border-[#EAE6DF] bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] text-[10px] font-mono tracking-widest uppercase text-[#5A5852] font-bold shadow-2xs">
              <Database className="w-3 h-3 text-[#0A0A0A]" />
              <span>Domain Takeover Engine</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight">
              What domains does Clockin AI take over?
            </h2>

            <p className="text-sm sm:text-base text-[#5A5852] leading-relaxed">
              Enterprises run on industry-specific systems of record. Clockin AI does not replace your core software—it acts as an autonomous neural intelligence layer that sits directly on top of them, eliminating manual administrative friction.
            </p>
          </div>

          {/* Clarification Box: PMS vs EHR vs MES */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] flex items-center justify-center text-white">
                <HelpCircle className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-[#0A0A0A] tracking-tight">
                Systems of Record Architecture: PMS, EHR, and MES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-2">
                <div className="text-xs font-mono font-bold text-[#0A0A0A] uppercase tracking-wider">
                  1. PMS (Property Management System)
                </div>
                <div className="text-xs font-semibold text-[#5A5852]">
                  Used in: Luxury Hotels, Resorts, Luxury Villas
                </div>
                <p className="text-xs text-[#5A5852] leading-relaxed">
                  The central brain of a hospitality property (e.g. <strong>Oracle Opera, Cloudbeds</strong>). Tracks room reservations, guest folios, amenities, rates, and housekeeping.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-2">
                <div className="text-xs font-mono font-bold text-[#0A0A0A] uppercase tracking-wider">
                  2. EHR / EMR (Electronic Health Record)
                </div>
                <div className="text-xs font-semibold text-[#5A5852]">
                  Used in: Hospitals, Clinics, Specialty Networks
                </div>
                <p className="text-xs text-[#5A5852] leading-relaxed">
                  The clinical software managing patient charts, medical records, OPD appointments, and doctor schedules (e.g. <strong>Epic Systems, Cerner</strong>).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-2">
                <div className="text-xs font-mono font-bold text-[#0A0A0A] uppercase tracking-wider">
                  3. MES / SCADA (Manufacturing Execution)
                </div>
                <div className="text-xs font-semibold text-[#5A5852]">
                  Used in: Factories, Precision Engineering Plants
                </div>
                <p className="text-xs text-[#5A5852] leading-relaxed">
                  The factory-floor system that monitors production assembly, cycle times, scrap yield, and machine PLC sensors (e.g. <strong>Siemens, SAP S/4HANA</strong>).
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Domain Selector Tabs */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-[#EAE6DF] pb-4">
              {domainTakeovers.map((domain) => {
                const IconComponent = domain.icon;
                const isActive = domain.id === selectedDomain;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomain(domain.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#0A0A0A] text-white shadow-xs'
                        : 'bg-white text-[#5A5852] hover:text-[#0A0A0A] border border-[#EAE6DF]'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{domain.sector.split('&')[0].trim()} ({domain.acronym})</span>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Detailed Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EAE6DF] shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-xs font-mono font-bold text-[#0A0A0A]">
                      {activeDomainData.acronym}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7A7770]">
                      {activeDomainData.sector}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight">
                    {activeDomainData.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-[#5A5852] leading-relaxed">
                    <p><strong>What it is:</strong> {activeDomainData.whatIsIt}</p>
                    <p><strong>How Clockin AI takes over:</strong> {activeDomainData.howClockinTakesOver}</p>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                      Certified Native System Connectors:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeDomainData.integrations.map((conn, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#EAE6DF] text-xs font-mono text-[#0A0A0A]">
                          {conn}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#FAF8F5] rounded-xl p-6 border border-[#EAE6DF] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
                      Real-Time Atomic Writes Executed
                    </span>
                    <span className="text-[10px] font-mono text-[#0A0A0A] bg-white px-2 py-0.5 rounded border border-[#EAE6DF]">
                      ZERO HUMAN OVERHEAD
                    </span>
                  </div>

                  <p className="text-xs text-[#5A5852] leading-relaxed">
                    Clockin AI doesn&apos;t just generate conversational text. It issues structured, ACID-compliant database mutations directly into your underlying ledger:
                  </p>

                  <div className="space-y-2.5">
                    {activeDomainData.atomicWrites.map((write, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-[#EAE6DF] text-xs font-mono">
                        <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                        <span className="text-[#0A0A0A] font-semibold">{write}</span>
                        <span className="ml-auto text-[10px] text-[#7A7770]">COMMITTED</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/industries/${activeDomainData.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A0A0A] hover:underline"
                    >
                      <span>Read comprehensive {activeDomainData.sector} takeover study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deep-Dive 3: Hardware Question: Does this mean we have hardware inside our company? */}
      <section id="hardware" className="py-24 border-b border-[#EAE6DF] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[10px] font-mono tracking-widest uppercase text-[#5A5852] font-bold">
              <HardDrive className="w-3 h-3 text-[#0A0A0A]" />
              <span>Deployment Topology</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight">
              Deployment Topology: Sovereign Cloud VPC &amp; On-Premises
            </h2>

            <p className="text-base text-[#5A5852] leading-relaxed">
              Clockin AI is designed with zero mandatory on-site physical hardware. Operations run cloud-native with an optional dedicated hardware appliance for air-gapped facilities:
            </p>
          </div>

          {/* Deployment Model Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Model 1: Fully-Managed Sovereign Cloud VPC (Default) */}
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#EAE6DF] shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-white">
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#EAE6DF] text-[10px] font-mono font-bold text-[#0A0A0A] uppercase tracking-wider">
                    RECOMMENDED (95% OF CLIENTS)
                  </span>
                </div>

                <h3 className="font-extrabold text-2xl text-[#0A0A0A] tracking-tight">
                  Option A: Zero-Footprint Cloud-Native Integration
                </h3>

                <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
                  Clockin AI operates seamlessly in the cloud. Zero on-site physical hardware required. Connects directly via secure, TLS 1.3 encrypted REST and GraphQL APIs to your existing software.
                </p>

                <div className="space-y-2.5 pt-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>Zero on-site physical hardware footprint</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>Connects via TLS 1.3 encrypted REST/GraphQL webhooks</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>24/7 autonomous health monitoring &amp; automatic scaling</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>Turnkey go-live in under 21 business days</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAE6DF] text-xs text-[#7A7770] font-mono">
                Ideal for: Luxury Hotels, Healthcare Clinics, E-Commerce, and Financial Institutions.
              </div>
            </div>

            {/* Model 2: On-Premises Cryptographic Hardware Enclave */}
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#EAE6DF] shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE6DF] flex items-center justify-center text-[#0A0A0A]">
                    <Server className="w-5 h-5 text-[#0A0A0A]" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#EAE6DF] text-[10px] font-mono font-bold text-[#5A5852] uppercase tracking-wider">
                    OPTIONAL AIR-GAP APPLIANCE
                  </span>
                </div>

                <h3 className="font-extrabold text-2xl text-[#0A0A0A] tracking-tight">
                  Option B: On-Premises Neural Hardware Enclave
                </h3>

                <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
                  For high-security defense networks, remote industrial plants with unstable internet, or zero-trust hospital vaults, Clockin AI provisions a dedicated, physical 1U/2U server rack appliance.
                </p>

                <div className="space-y-2.5 pt-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>Runs 100% offline with zero external internet connectivity</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>Hardware cryptographic enclave (TPM 2.0 &amp; memory encryption)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>Direct low-latency gigabit connection to local PLCs and SCADA</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0A0A0A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>Zero data packets ever escape the physical perimeter of your facility</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAE6DF] text-xs text-[#7A7770] font-mono">
                Ideal for: Remote Heavy Industrial Plants, Defense Contractors, and Sensitive Pathology Labs.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Security & Hallucination Prevention */}
      <section id="security" className="py-24 border-b border-[#EAE6DF] bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] text-[10px] font-mono tracking-widest uppercase text-[#5A5852] font-bold shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A]" />
                <span>Deterministic Safety Boundary</span>
              </div>

              <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                Zero Hallucination. Zero Data Retention.
              </h2>

              <p className="text-sm sm:text-base text-[#5A5852] leading-relaxed">
                Standard AI chatbots can invent fake prices, hallucinate non-existent hotel policies, or give inaccurate medical guidance. Clockin AI prevents this through <strong className="text-[#0A0A0A]">Deterministic Mathematical Guardrails</strong>.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 text-xs font-mono">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A0A0A]">Strict Schema Regular Expression Gates</h4>
                    <p className="text-xs text-[#5A5852] mt-0.5 leading-relaxed">
                      Every token emitted by the model is validated against your live database schema. If an unapproved rate code or conflicting medicine dosage is generated, the transaction is killed instantly before hitting the user.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 text-xs font-mono">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A0A0A]">Ephemeral RAM Processing (Zero Data Leak)</h4>
                    <p className="text-xs text-[#5A5852] mt-0.5 leading-relaxed">
                      Guest personal data, phone numbers, and clinical symptoms only exist in volatile RAM during the real-time inference cycle. Once committed to your PMS or EHR, memory is flushed immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 text-xs font-mono">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A0A0A]">Seamless Human Escalation Circuit</h4>
                    <p className="text-xs text-[#5A5852] mt-0.5 leading-relaxed">
                      If operational confidence drops below 99.4%, the system automatically patches the call or chat to your on-duty front desk manager or duty doctor with a complete context dossier.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-[#EAE6DF] shadow-xs font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF]">
                <span className="text-[#0A0A0A] font-bold">GUARDRAIL INTERCEPTION LOG (SIMULATED)</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  SYSTEM SHIELD ACTIVE
                </span>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE6DF] space-y-1">
                <div className="text-[10px] text-[#7A7770]">TIMESTAMP: 2026-09-18T14:22:04.102Z</div>
                <div className="text-[#0A0A0A]">INPUT: &quot;Can I get the Presidential Suite for $50 tonight?&quot;</div>
                <div className="text-[#A82A2A] font-bold mt-1">RATE VIOLATION DETECTED: Floor price is $850.</div>
                <div className="text-emerald-700 font-bold">ACTION: Guardrail engaged in 3.1ms. Refusal with standard published rate.</div>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE6DF] space-y-1">
                <div className="text-[10px] text-[#7A7770]">TIMESTAMP: 2026-09-18T14:22:04.124Z</div>
                <div className="text-[#0A0A0A]">PMS STATUS: Verified with Oracle Opera OHIP. 0 Folio Tampering.</div>
                <div className="text-[#0A0A0A] font-bold">OUTCOME: Atomic ledger write verified. 0 Hallucination.</div>
              </div>

              <div className="pt-2 text-[11px] text-[#7A7770]">
                All transactions are auditable via cryptographic SHA-256 telemetry.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Direct Contact & Deployment Dispatch */}
      <section className="py-20 bg-white border-b border-[#EAE6DF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 text-center max-w-3xl space-y-6">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
            Ready to inspect our architecture for your enterprise?
          </h2>

          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed max-w-xl mx-auto">
            Speak directly with an AI systems architect from our Kerala Tech Hub. We deliver an operational feasibility and schema audit in under 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20architecture%20and%20deployment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal-primary w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Dispatch on WhatsApp (+91 88485 63824)</span>
            </a>

            <a
              href="tel:+918848563824"
              className="btn-dark-primary w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#0A0A0A]" />
              <span>Call Lead Architect</span>
            </a>
          </div>

          <div className="text-xs font-mono text-[#7A7770] pt-4">
            KERALA, INDIA // DIRECT ARCHITECTURE HOTLINE: +91 88485 63824
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
