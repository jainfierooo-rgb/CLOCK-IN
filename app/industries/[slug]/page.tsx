import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { 
  Building2, 
  HeartPulse, 
  Factory, 
  ShoppingBag, 
  Landmark, 
  Truck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Layers, 
  FileText, 
  Server, 
  MessageSquare, 
  Calendar 
} from 'lucide-react';

interface SectorDetail {
  slug: string;
  code: string;
  name: string;
  icon: any;
  heroTag: string;
  headline: string;
  subheadline: string;
  metrics: { label: string; value: string; detail: string }[];
  bottlenecks: string[];
  transformation: string;
  features: { title: string; desc: string }[];
  flowchart: { step: string; title: string; desc: string; output: string }[];
  integrations: string[];
  compliance: string[];
}

const sectorData: Record<string, SectorDetail> = {
  hospitality: {
    slug: 'hospitality',
    code: 'SEC-01',
    name: 'Luxury Hospitality & Resorts',
    icon: Building2,
    heroTag: 'SECTOR 01 // HOSPITALITY & RESORTS',
    headline: 'Autonomous VIP Guest Intelligence for World-Class Resorts.',
    subheadline: '24/7 multilingual conversational intelligence on WhatsApp and web, seamlessly synchronized with your Property Management System (PMS) to eliminate front-desk delays and maximize guest spend.',
    metrics: [
      { label: 'Ancillary Revenue', value: '+34%', detail: 'On-property spa, dining, and experience bookings' },
      { label: 'Response Latency', value: '1.2s', detail: 'Instant WhatsApp resolution across 42 languages' },
      { label: 'Front Desk Load', value: '-82%', detail: 'Reduction in routine phone inquiries during check-in' },
      { label: 'Guest Satisfaction', value: '99.1%', detail: 'Verified post-stay sentiment score' },
    ],
    bottlenecks: [
      'Front-desk phone queues exceeding 30 minutes during peak arrival windows.',
      'Uncaptured dining and spa revenue due to delayed booking confirmation.',
      'Fragmented guest preference records isolated in siloed departmental databases.',
      'Staff turnover requiring continuous training on complex PMS software interfaces.',
    ],
    transformation: 'Clockin AI deploys a unified, deterministic concierge node that answers guest inquiries, confirms reservations, provisions digital room keys, and schedules housekeeping directly into your PMS ledger without human intervention.',
    features: [
      { title: 'Bi-Directional PMS Synchronization', desc: 'Direct atomic read/write synchronization with Oracle Opera, Cloudbeds, and Guestline ledgers with zero duplicate records.' },
      { title: 'Multilingual VIP WhatsApp Concierge', desc: 'Fluent in 42 languages, recognizing returning guests, loyalty tier statuses, and dietary preferences instantly.' },
      { title: 'Dynamic Yield Booking Engine', desc: 'Automatically proposes high-margin cabana, private dining, and excursion packages based on real-time property inventory.' },
      { title: 'Autonomous Housekeeping Dispatch', desc: 'Routes late checkout, extra amenity, and maintenance requests straight to on-duty staff hand-helds.' },
    ],
    flowchart: [
      { step: 'STAGE 01', title: 'Guest WhatsApp Ingestion', desc: 'Guest sends natural language inquiry regarding villa upgrades and pet policies.', output: 'Intent & Guest Profile Parsed' },
      { step: 'STAGE 02', title: 'Deterministic PMS Query', desc: 'Queries Opera PMS API for live villa inventory, rates, and guest loyalty tier.', output: 'Live Inventory Locked' },
      { step: 'STAGE 03', title: 'Autonomous Booking Write', desc: 'Executes atomic reservation write with payment tokenization and policy confirmation.', output: 'Confirmed Ledger Entry' },
      { step: 'STAGE 04', title: 'Instant Guest Dispatch', desc: 'Delivers WhatsApp itinerary card, digital key link, and concierge welcome in < 1.4s.', output: '101× Margin Compounded' },
    ],
    integrations: ['Oracle Opera Cloud', 'Cloudbeds', 'Guestline PMS', 'Amadeus Hospitality', 'SevenRooms', 'Infrasys POS', 'OpenTable Pro'],
    compliance: ['PCI-DSS Level 1 Payment Tokenization', 'GDPR International Guest Privacy', 'Zero-Retention Telemetry Enclave', '99.99% Availability SLA'],
  },
  healthcare: {
    slug: 'healthcare',
    code: 'SEC-02',
    name: 'Hospitals & Clinical Networks',
    icon: HeartPulse,
    heroTag: 'SECTOR 02 // HOSPITALS & HEALTHCARE',
    headline: 'Zero-Wait Clinical Triage & Automated Patient Intake.',
    subheadline: 'Cryptographically isolated, HIPAA-compliant intelligence agents handling 24/7 appointment scheduling, intake documentation, and post-discharge follow-up to eliminate physician and nurse administrative fatigue.',
    metrics: [
      { label: 'Patient No-Show Rate', value: '-45%', detail: 'Automated dynamic WhatsApp reminders & rescheduling' },
      { label: 'Scheduling Queue', value: '0 sec', detail: 'Instant multi-specialty physician consultation booking' },
      { label: 'Nurse Shift Relief', value: '2.8 hrs', detail: 'Administrative time saved per nurse shift' },
      { label: 'HIPAA Compliance', value: '100%', detail: 'Signed BAA with cryptographic zero-data storage' },
    ],
    bottlenecks: [
      'Call centers overwhelmed by appointment scheduling, leading to high patient abandonment rates.',
      'Costly appointment no-shows leaving expensive imaging and operating rooms idle.',
      'Physicians spending up to 3 hours per day on electronic health record (EHR) data entry.',
      'Strict regulatory penalties and severe liabilities surrounding patient health information (PHI).',
    ],
    transformation: 'Clockin AI provides an enterprise medical communications node that handles routine patient scheduling, pre-procedure fasting instructions, and lab result delivery within a verified HIPAA-compliant zero-retention boundary.',
    features: [
      { title: 'EHR Bi-Directional Roster Sync', desc: 'Direct interoperability with Epic Systems, Cerner, and HL7 FHIR protocols to inspect real-time physician calendars.' },
      { title: 'Intelligent Patient Triage Routing', desc: 'Classifies patient symptom inquiries into standard routing or instant emergency human clinical escalation.' },
      { title: 'Automated Intake & Form Parsing', desc: 'Collects insurance cards, medical history, and consent forms via mobile before the patient steps into the clinic.' },
      { title: 'Post-Op Follow-Up Automation', desc: 'Checks in with patients on day 1, 3, and 7 post-discharge, flagging anomalous pain scores to the clinical team.' },
    ],
    flowchart: [
      { step: 'STAGE 01', title: 'Patient Inbound Scheduling', desc: 'Patient requests specialist consultation via clinic portal or WhatsApp line.', output: 'Symptom & Insurance Extracted' },
      { step: 'STAGE 02', title: 'HL7 FHIR Calendar Check', desc: 'Verifies physician credentials, department availability, and clinic room allocations.', output: 'Slot Reserved in EHR' },
      { step: 'STAGE 03', title: 'Cryptographic PHI Sanitization', desc: 'Scans all patient data through on-premises HIPAA enclave to ensure zero cloud leakage.', output: 'BAA Ledger Audited' },
      { step: 'STAGE 04', title: 'Confirmed Clinical Booking', desc: 'Dispatches preparation instructions and directions to patient; alerts nurse station.', output: '45% No-Show Reduction' },
    ],
    integrations: ['Epic Systems EHR', 'Cerner Millennium', 'HL7 FHIR APIs', 'Athenahealth', 'Allscripts', 'Meditech Expanse', 'Twilio HIPAA Enclave'],
    compliance: ['HIPAA Business Associate Agreement (BAA)', 'SOC2 Type II Attested', 'HITRUST Certified Architecture', 'Zero PHI Cloud Storage'],
  },
  manufacturing: {
    slug: 'manufacturing',
    code: 'SEC-03',
    name: 'Precision Manufacturing & Plants',
    icon: Factory,
    heroTag: 'SECTOR 03 // PRECISION MANUFACTURING',
    headline: 'Edge Vision Defect Gates & Conversational Machinery SOPs.',
    subheadline: 'Sub-millisecond optical quality inspection running on factory edge computers paired with multimodal AI assistants that digest 1,000-page engineering manuals to assist plant technicians instantly.',
    metrics: [
      { label: 'Plant Machine Uptime', value: '99.4%', detail: 'Predictive maintenance and rapid fault code diagnosis' },
      { label: 'Inspection Velocity', value: '1,200/min', detail: 'Edge computer vision parts audited with zero lag' },
      { label: 'Scrap Rate Defect', value: '-91%', detail: 'Immediate line shutdown upon micro-defect detection' },
      { label: 'Turnkey Go-Live', value: '14 Days', detail: 'Rapid model training on existing engineering CAD & SOPs' },
    ],
    bottlenecks: [
      'Unplanned assembly line shutdowns costing up to $25,000 per idle hour.',
      'Experienced engineers retiring with decades of unwritten machinery tribal knowledge.',
      'Manual human optical inspection missing micro-fractures in high-speed manufacturing lines.',
      'Slow manual procurement causing replacement part inventory stockouts.',
    ],
    transformation: 'Clockin AI equips plant floors with conversational technician terminals connected to all machinery manuals, while edge neural vision cameras inspect every manufactured part at line speed, auto-triggering SAP maintenance work orders.',
    features: [
      { title: 'Conversational SOP Query Engine', desc: 'Technicians ask questions verbally or via ruggedized tablets to get instant diagnostic schematics for complex machines.' },
      { title: 'Edge Computer Vision Quality Gates', desc: 'High-speed cameras running localized neural models detecting scratches, cracks, and tolerance variances down to 0.05mm.' },
      { title: 'Automated SAP S/4HANA Reordering', desc: 'Tracks tool wear cycles and automatically drafts purchase requisitions when bearings or cutting tips near end-of-life.' },
      { title: 'Voice-Assisted Shift Handover Ledgers', desc: 'Captures operator shift observations via voice, structuring anomalies into shift reports automatically.' },
    ],
    flowchart: [
      { step: 'STAGE 01', title: 'Telemetry & Sensor Ingestion', desc: 'Gathers vibration, thermal, and edge camera optical feeds from production line.', output: 'Telemetry Stream Normalized' },
      { step: 'STAGE 02', title: 'Anomaly Neural Detection', desc: 'Identifies micro-fracture or thermal deviation against CAD baseline tolerance.', output: 'Defect Flagged at 0.05mm' },
      { step: 'STAGE 03', title: 'SOP Work Order Generation', desc: 'Extracts exact repair protocol from manual and drafts maintenance order in SAP.', output: 'Atomic SAP Maintenance PO' },
      { step: 'STAGE 04', title: 'Technician Terminal Dispatch', desc: 'Alerts floor lead on ruggedized mobile device with schematic and part bin number.', output: 'Zero-Downtime Maintained' },
    ],
    integrations: ['Siemens MindSphere', 'SAP S/4HANA Manufacturing', 'Rockwell Automation', 'SCADA & PLC Protocols', 'PTC ThingWorx', 'Oracle NetSuite'],
    compliance: ['Air-Gapped On-Premises Deployment', 'ISO 9001 Quality System Compatible', 'IEC 62443 Industrial Cybersecurity', 'Zero Internet Dependency Mode'],
  },
  retail: {
    slug: 'retail',
    code: 'SEC-04',
    name: 'Retail & Omnichannel Commerce',
    icon: ShoppingBag,
    heroTag: 'SECTOR 04 // RETAIL & COMMERCE',
    headline: 'High-Converting Conversational Concierges & Instant Returns.',
    subheadline: 'Dynamic commerce intelligence trained on your entire product catalog, inventory matrix, and customer lifetime value ledgers to convert browsing visitors into verified high-value transactions.',
    metrics: [
      { label: 'Cart Conversion', value: '+28%', detail: 'Personalized WhatsApp cart recovery and sizing guidance' },
      { label: 'Return Processing', value: '18 sec', detail: 'Instant automated return label generation' },
      { label: 'Support Deflection', value: '74%', detail: 'Tier-1 order tracking and returns handled autonomously' },
      { label: 'Average Order Value', value: '+19%', detail: 'Predictive complementary bundle recommendations' },
    ],
    bottlenecks: [
      'High shopping cart abandonment rates surpassing 70% across mobile devices.',
      'Support teams flooded with repetitive "Where is my order?" inquiries during sales spikes.',
      'Frustrating return experiences driving customers away to competitors.',
      'Generic on-site search failing to understand natural language intent.',
    ],
    transformation: 'Clockin AI turns conversational channels into 24/7 revenue-generating sales associates that assist customers with sizing, inventory checks, cross-sells, and instant one-tap returns.',
    features: [
      { title: 'Natural Language SKU Navigation', desc: 'Customers describe what they need in plain words; Clockin AI surfaces exact matching inventory with live stock counts.' },
      { title: 'WhatsApp Cart Recovery Concierge', desc: 'Re-engages abandoned shoppers with tailored incentives, answering objections before they drop off.' },
      { title: 'Automated 1-Click Returns & Exchanges', desc: 'Generates prepaid return barcodes and authorizes exchanges in under 20 seconds.' },
      { title: 'Predictive Customer Value Scoring', desc: 'Identifies high-LTV VIP shoppers and routes them to dedicated high-touch priority workflows.' },
    ],
    flowchart: [
      { step: 'STAGE 01', title: 'Customer Intent Discovery', desc: 'Customer asks for outfit recommendations for an outdoor summer wedding.', output: 'Attribute & Size Filters Set' },
      { step: 'STAGE 02', title: 'Catalog & Inventory Check', desc: 'Cross-references Shopify inventory matrix for in-stock sizing and fulfillment center.', output: 'Live SKU Matches Selected' },
      { step: 'STAGE 03', title: 'Payment Link Generation', desc: 'Dispatches secure prefilled Stripe checkout or WhatsApp Pay link.', output: 'Conversion Finalized' },
      { step: 'STAGE 04', title: 'Automated Logistics Notification', desc: 'Notifies warehouse WMS for immediate pick-and-pack; dispatches tracking to user.', output: '+28% Conversion Realized' },
    ],
    integrations: ['Shopify Plus', 'Salesforce Commerce Cloud', 'Oracle NetSuite', 'Gorgias', 'Klaviyo', 'Stripe Treasury', 'Recharge Payments'],
    compliance: ['PCI-DSS Level 1 Certified', 'GDPR & CCPA Compliant Data Handlers', 'Encrypted Tokenized Transactions', 'Sub-30ms Edge Routing'],
  },
  finance: {
    slug: 'finance',
    code: 'SEC-05',
    name: 'Banking & Financial Services',
    icon: Landmark,
    heroTag: 'SECTOR 05 // BANKING & FINANCE',
    headline: 'Deterministic KYC Extraction & Anti-Fraud Boundary Intelligence.',
    subheadline: 'Zero-hallucination mathematical verification models that parse complex financial statements, loan applications, and regulatory filings with 100% auditable certainty.',
    metrics: [
      { label: 'KYC Document Accuracy', value: '98.9%', detail: 'Automated verification against regulatory watchlists' },
      { label: 'Loan Pre-Qualification', value: '3 min', detail: 'Reduced from 4.5 days of manual back-and-forth' },
      { label: 'Hallucination Risk', value: '0.00%', detail: 'Deterministic mathematical boundary verification gates' },
      { label: 'Compliance Audit', value: 'Instant', detail: 'Immutable cryptographically signed decision ledgers' },
    ],
    bottlenecks: [
      'Weeks-long loan approval cycles due to manual verification of PDFs, tax returns, and balance sheets.',
      'Strict KYC/AML regulatory penalties for missed disclosures or fraud.',
      'High labor costs associated with tier-1 banking support queries.',
      'AI hallucination risks making standard LLMs unacceptable for regulated financial advice.',
    ],
    transformation: 'Clockin AI introduces a deterministic neural pipeline with hard mathematical guardrails that automatically processes loan files, validates applicant identities, and generates audit-ready compliance dossiers.',
    features: [
      { title: 'Deterministic Tax & Balance Sheet Parser', desc: 'Extracts tabular financial data from multi-page PDF tax filings with 99.8% precision.' },
      { title: 'Automated KYC & Anti-Fraud Screening', desc: 'Validates government IDs against global sanctions and PEP watchlists in real time.' },
      { title: 'Hallucination Kill-Switch Architecture', desc: 'Mathematically verifies all numeric calculations against underlying verified ledger databases.' },
      { title: 'Immutable Decision Audit Ledgers', desc: 'Every model deduction is cryptographically timestamped for instant regulatory examination.' },
    ],
    flowchart: [
      { step: 'STAGE 01', title: 'Loan Documentation Intake', desc: 'Applicant uploads multi-page tax filings, bank records, and government identity.', output: 'Encrypted Document Stream' },
      { step: 'STAGE 02', title: 'Deterministic OCR & Math Check', desc: 'Parses balance sheets; calculates debt-to-income and verified liquidity.', output: 'Structured Financial Matrix' },
      { step: 'STAGE 03', title: 'Regulatory Boundary Gate', desc: 'Executes KYC/AML sanctions screening and internal risk policy validation.', output: 'Zero-Fraud Attestation' },
      { step: 'STAGE 04', title: 'Underwriting Dossier Creation', desc: 'Drafts executive underwriting memorandum and delivers instant pre-approval.', output: '3-Minute Turnaround Achieved' },
    ],
    integrations: ['Bloomberg Terminal API', 'FIS Core Banking', 'Fiserv', 'Stripe Treasury', 'Plaid', 'Salesforce Financial Services Cloud', 'Alloy KYC'],
    compliance: ['SOC2 Type II Attested Ledgers', 'FINRA & SEC Recordkeeping Architecture', 'GLBA Financial Privacy Compliant', 'AES-256 Hardware Enclaves'],
  },
  logistics: {
    slug: 'logistics',
    code: 'SEC-06',
    name: 'Logistics, Freight & Supply Chain',
    icon: Truck,
    heroTag: 'SECTOR 06 // LOGISTICS & SUPPLY CHAIN',
    headline: 'Autonomous Bill of Lading Ingestion & Dynamic Driver Dispatch.',
    subheadline: 'Multi-modal document vision that digests messy paper shipping manifests in seconds, paired with conversational WhatsApp driver coordination that eliminates detention fees and transit delays.',
    metrics: [
      { label: 'Transit Latency', value: '-32%', detail: 'Dynamic route recalibration and rapid gate clearance' },
      { label: 'BOL Parsing Accuracy', value: '99.7%', detail: 'Multimodal extraction of handwritten shipping manifests' },
      { label: 'Detention Fee Savings', value: '-68%', detail: 'Automated appointment check-in and dock scheduling' },
      { label: 'Driver Communication', value: 'WhatsApp', detail: 'Zero app installs required for carrier coordination' },
    ],
    bottlenecks: [
      'Manual entry of paper bills of lading causing shipping yard choke points and clerical errors.',
      'Dispatchers spending hours calling drivers for status updates and location checks.',
      'Expensive detention fees incurred when trucks arrive at uncoordinated warehouse docks.',
      'Carrier invoices regularly containing rate discrepancies that slip past manual audits.',
    ],
    transformation: 'Clockin AI enables drivers to simply snap a photo of their Bill of Lading via WhatsApp; the system parses the manifest, schedules the dock door in the WMS, and coordinates gate access autonomously.',
    features: [
      { title: 'WhatsApp-Native Driver Coordination', desc: 'Drivers communicate via standard WhatsApp without downloading proprietary apps; automated updates log to TMS.' },
      { title: 'Instant Bill of Lading (BOL) Parser', desc: 'Extracts piece counts, weight, hazardous material codes, and consignee addresses in sub-2 seconds.' },
      { title: 'Dynamic Dock Scheduling Integration', desc: 'Reconciles live GPS telemetry with warehouse dock availability to minimize dwell times.' },
      { title: 'Automated Freight Invoice Audit', desc: 'Reconciles carrier invoices against agreed rate cards and delivery receipts, auto-flagging discrepancies.' },
    ],
    flowchart: [
      { step: 'STAGE 01', title: 'Driver Photo Dispatch', desc: 'Carrier snaps mobile photo of signed Bill of Lading at pickup terminal.', output: 'Image Stream Received' },
      { step: 'STAGE 02', title: 'Multimodal Manifest Extraction', desc: 'Extracts freight weights, seal numbers, and delivery appointment window.', output: 'Structured TMS Payload' },
      { step: 'STAGE 03', title: 'Warehouse Dock Lock', desc: 'Cross-references destination WMS dock door availability and locks appointment slot.', output: 'Dock Door #14 Assigned' },
      { step: 'STAGE 04', title: 'Automated Customer Alert', desc: 'Dispatches real-time arrival notice to consignee with digital proof-of-delivery.', output: '-32% Transit Latency Yield' },
    ],
    integrations: ['Oracle WMS', 'SAP Transportation Management', 'FleetComplete', 'project44', 'Descartes Systems', 'Samsara Telematics', 'McLeod Software'],
    compliance: ['DOT Regulatory Logging Compliant', 'C-TPAT Supply Chain Security Architecture', 'Zero-Retention Telemetry Enclave', '99.99% Global Edge SLA'],
  },
};

export function generateStaticParams() {
  return Object.keys(sectorData).map((slug) => ({ slug }));
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = sectorData[slug];

  if (!sector) {
    notFound();
  }

  const Icon = sector.icon;

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] flex flex-col justify-between selection:bg-[#CCFBF1] selection:text-[#0F766E]">
      <Navbar />

      <main className="flex-1">
        
        {/* Breadcrumbs & Sector Hero Header */}
        <section className="border-b border-[#E5E0D8] bg-[#FAF8F5] pt-10 pb-16">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#888888] mb-8">
              <Link href="/" className="hover:text-[#0D9488] transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <Link href="/#industries" className="hover:text-[#0D9488] transition-colors">
                Industries
              </Link>
              <span>/</span>
              <span className="text-[#0A0A0A] font-bold">{sector.name}</span>
            </div>

            {/* Main Sector Hero */}
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E0D8] text-[11px] font-mono tracking-widest text-[#0D9488] uppercase font-bold">
                <Icon className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{sector.heroTag}</span>
              </div>

              <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.15]">
                {sector.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-3xl font-normal">
                {sector.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href={`https://wa.me/919876543210?text=Inquiry%20regarding%20Clockin%20AI%20deployment%20for%20${encodeURIComponent(sector.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal-primary px-8 py-3.5 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dispatch on WhatsApp</span>
                </a>

                <a
                  href="#consultation"
                  className="btn-dark-primary px-7 py-3.5 text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Sector Blueprint</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Quantified Metrics Ribbon */}
        <section className="border-b border-[#E5E0D8] bg-white py-12">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sector.metrics.map((m, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8]">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0D9488] tracking-tight mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1 font-mono">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-[#666666] leading-relaxed">
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Bottlenecks vs Clockin AI Transformation */}
        <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-10 border-b border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Legacy Bottlenecks */}
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#888888] font-bold bg-white px-3 py-1 rounded-md border border-[#E5E0D8] inline-block">
                THE OPERATIONAL BOTTLENECK
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight">
                Where Legacy Enterprise Systems Fail
              </h2>
              <ul className="space-y-4">
                {sector.bottlenecks.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#555555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Clockin AI Transformation */}
            <div className="p-8 rounded-3xl bg-white border border-[#99F6E4] shadow-sm space-y-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#0D9488] font-bold bg-[#CCFBF1] px-3 py-1 rounded-md inline-block">
                THE CLOCKIN AI SOLUTION
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight">
                Autonomous, Deterministic Execution
              </h2>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {sector.transformation}
              </p>
              <div className="pt-2">
                <a
                  href="#flowchart"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D9488] hover:text-[#0F766E] uppercase tracking-wider font-mono"
                >
                  <span>Inspect Tailored Flowchart Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Sector Algorithmic Flowchart */}
        <section id="flowchart" className="py-20 bg-[#FAF8F5] border-b border-[#E5E0D8]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#0D9488] font-bold bg-white border border-[#E5E0D8] px-3.5 py-1 rounded-full inline-block mb-3">
                SECTOR ARCHITECTURE // FLOWCHART
              </span>
              <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                {sector.name} Pipeline Flowchart
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] mt-2">
                Deterministic sub-second pipeline moving from raw client request to atomic ERP execution.
              </p>
            </div>

            {/* 4 Flowchart Pipeline Cards with Connectors */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {sector.flowchart.map((fc, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-3 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-[#FAF8F5] text-[#0D9488] px-2 py-0.5 rounded border border-[#E5E0D8]">
                      {fc.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#888888]">NODE 0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#0A0A0A] leading-snug">
                    {fc.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {fc.desc}
                  </p>
                  <div className="pt-3 border-t border-[#F2EFE9] flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#888888]">Output:</span>
                    <span className="font-bold text-[#0D9488]">{fc.output}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Feature Specifications */}
        <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-10 border-b border-[#E5E0D8]">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#0D9488] font-bold bg-[#FAF8F5] border border-[#E5E0D8] px-3.5 py-1 rounded-full inline-block mb-3">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
              Enterprise Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sector.features.map((feat, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-white border border-[#E5E0D8] space-y-2">
                <div className="flex items-center gap-2 text-[#0D9488] font-mono text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>SPEC 0{idx + 1}</span>
                </div>
                <h3 className="font-bold text-base text-[#0A0A0A]">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Native Systems Interoperability */}
        <section className="py-16 bg-[#FAF8F5] border-b border-[#E5E0D8]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#0D9488] font-bold bg-white px-3 py-1 rounded-full border border-[#E5E0D8] inline-block mb-2">
                SYSTEM INTEROPERABILITY
              </span>
              <h2 className="font-extrabold text-2xl text-[#0A0A0A] tracking-tight">
                Direct Pre-Built Connectors
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
              {sector.integrations.map((sys, idx) => (
                <div key={idx} className="px-4 py-2.5 rounded-xl bg-white border border-[#E5E0D8] text-xs font-mono font-semibold text-[#0A0A0A] shadow-sm flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>{sys}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-[#666666]">
              {sector.compliance.map((c, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation / Booking Section */}
        <section id="consultation" className="py-20 max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E5E0D8] shadow-sm text-center max-w-3xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#0D9488] font-bold bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E5E0D8] inline-block mb-4">
              DEPLOYMENT INQUIRY // {sector.code}
            </span>

            <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight mb-4">
              Deploy Clockin AI for {sector.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xl mx-auto mb-8">
              Speak directly with an AI systems architect specializing in {sector.name.toLowerCase()} infrastructure. We deliver an operational boundary audit in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/919876543210?text=Direct%20inquiry%20regarding%20Clockin%20AI%20architecture%20for%20${encodeURIComponent(sector.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal-primary w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Sector Lead on WhatsApp</span>
              </a>

              <Link
                href="/#industries"
                className="btn-dark-primary w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Sectors</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber="919876543210" />
    </div>
  );
}
