import Link from 'next/link';
import { FileText, CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A] flex flex-col justify-between selection:bg-[#0A0A0A] selection:text-white">
      <Navbar />

      <div className="max-w-[1000px] mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#EAE6DF] pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#5A5852] hover:text-[#0A0A0A]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[10px] font-mono tracking-widest uppercase text-[#5A5852] font-bold">
            <FileText className="w-3.5 h-3.5 text-[#0A0A0A]" />
            <span>Master Enterprise Deployment Terms &bull; 2026 Edition</span>
          </div>

          <h1 className="font-extrabold text-3xl sm:text-5xl tracking-tight text-[#0A0A0A]">
            Terms of Deployment &amp; Service Level Agreement (SLA)
          </h1>

          <p className="text-sm font-mono text-[#7A7770]">
            Governed under International Enterprise Commercial Standards // Worldwide Operations
          </p>
        </div>

        {/* Core SLA Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] space-y-2">
            <div className="text-xs font-mono uppercase text-[#7A7770] font-bold">Go-Live Blueprint</div>
            <div className="text-2xl font-mono font-extrabold text-[#0A0A0A]">21 Calendar Days</div>
            <p className="text-xs text-[#5A5852]">Guaranteed production deployment from ontology ingestion to live ledger writes.</p>
          </div>
          <div className="p-6 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] space-y-2">
            <div className="text-xs font-mono uppercase text-[#7A7770] font-bold">Autonomous Uptime</div>
            <div className="text-2xl font-mono font-extrabold text-[#0A0A0A]">99.99% Uptime</div>
            <p className="text-xs text-[#5A5852]">Real-time sub-second response latency with active redundancy.</p>
          </div>
          <div className="p-6 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] space-y-2">
            <div className="text-xs font-mono uppercase text-[#7A7770] font-bold">Data Sovereignty</div>
            <div className="text-2xl font-mono font-extrabold text-[#0A0A0A]">100% Client Owned</div>
            <p className="text-xs text-[#5A5852]">Zero co-mingling of weights; domain models belong exclusively to client.</p>
          </div>
        </div>

        {/* Section 1: Scope of Service */}
        <section className="space-y-4">
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
            1. Scope of Deployment
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
            Clockin AI delivers autonomous neural infrastructure services connecting client communications (voice IVR, WhatsApp Business, visual cameras, IoT sensors) directly with enterprise systems of record (Oracle Opera, Epic Systems, SAP S/4HANA, Shopify Plus, etc.).
          </p>
        </section>

        {/* Section 2: Deterministic Guardrails & Fallback */}
        <section className="space-y-4">
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
            2. Deterministic Guardrails &amp; Human Fallback
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
            To eliminate commercial hallucination risks, Clockin AI embeds strict deterministic boundary gates. Any inquiry or transaction where model confidence drops below <strong>99.4%</strong> is routed immediately to human supervisory staff with a pre-assembled context payload.
          </p>
        </section>

        {/* Section 3: Intellectual Property & Data Ownership */}
        <section className="space-y-4">
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
            3. Intellectual Property Rights
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
            All enterprise data, operational SOPs, historical logs, and custom fine-tuned weights generated during the engagement remain the exclusive intellectual property of the client. Clockin AI does not train global foundation models on customer private operational data.
          </p>
        </section>

        {/* Section 4: Enterprise Inquiries */}
        <section className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-3 font-mono text-xs">
          <div className="font-bold text-[#0A0A0A] uppercase tracking-wider">
            Enterprise Legal Inquiries &amp; Master Service Agreements (MSA)
          </div>
          <p className="text-[#5A5852] leading-relaxed">
            Custom enterprise MSAs, on-premises air-gap hardware purchase orders, and bespoke SOC 2 audit packages can be requested via our enterprise engineering desk:
          </p>
          <div className="pt-2 text-[#0A0A0A] flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Direct Telephone: <a href="tel:+918848563824" className="font-bold underline">+91 88485 63824</a></span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span>WhatsApp: <a href="https://wa.me/918848563824" className="font-bold underline">+91 88485 63824</a></span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span>Email: <a href="mailto:info@clockinai.net?subject=Terms%20and%20SLA%20Inquiry%20-%20Clockin%20AI" className="font-bold underline">info@clockinai.net</a></span>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
