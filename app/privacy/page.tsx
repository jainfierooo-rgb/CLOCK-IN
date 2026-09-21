import Link from 'next/link';
import { ShieldCheck, Lock, CheckCircle2, ArrowLeft, PhoneCall, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A]" />
            <span>Enterprise Privacy Framework &bull; DPDP &amp; HIPAA Compliant</span>
          </div>

          <h1 className="font-extrabold text-3xl sm:text-5xl tracking-tight text-[#0A0A0A]">
            Privacy &amp; Data Governance Architecture
          </h1>

          <p className="text-sm font-mono text-[#7A7770]">
            Effective Date: January 1, 2026 // Worldwide Operations &amp; Data Governance
          </p>
        </div>

        {/* Executive Summary Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-sm text-[#0A0A0A] font-mono uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#0A0A0A]" />
            <span>Zero-Data Retention Architecture Commitment</span>
          </div>
          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
            Clockin AI does not store, log, harvest, or monetize client enterprise data. Guest reservation details, patient health records, and industrial factory telemetry reside solely in volatile RAM during the real-time inference loop. Once the atomic write is committed to your own PMS, EHR, or ERP ledger, the memory buffer is cryptographically zeroed out.
          </p>
        </div>

        {/* Section 1: Data Ingestion & Ephemeral Processing */}
        <section className="space-y-4">
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
            1. Ephemeral Volatile Ingestion
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
            When customer conversations or machine telemetries pass through Clockin AI, our neural nodes enforce strict tokenization:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#5A5852] font-sans pl-4 list-disc">
            <li><strong>Automated PII Redaction:</strong> Credit card numbers, Aadhaar/PAN identifiers, and patient national IDs are sanitized before any neural reasoning occurs.</li>
            <li><strong>RAM-Only Computation:</strong> No disk writes occur on Clockin AI nodes during conversational processing.</li>
            <li><strong>Cryptographic Wiping:</strong> Residual tensor caches are purged within 100 milliseconds of transaction completion.</li>
          </ul>
        </section>

        {/* Section 2: Statutory Compliance */}
        <section className="space-y-4">
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
            2. Regulatory &amp; Statutory Alignment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-[#EAE6DF] bg-white space-y-2">
              <div className="font-mono text-xs font-bold text-[#0A0A0A]">GDPR &amp; DPDP Global Standards</div>
              <p className="text-xs text-[#5A5852] leading-relaxed">
                Full compliance with international data privacy mandates including GDPR and the DPDP Act. Workloads are deployed in client-designated sovereign data regions worldwide.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-[#EAE6DF] bg-white space-y-2">
              <div className="font-mono text-xs font-bold text-[#0A0A0A]">HIPAA &amp; HL7 FHIR (Clinical)</div>
              <p className="text-xs text-[#5A5852] leading-relaxed">
                Hospital and clinic deployments execute Business Associate Agreements (BAA) with end-to-end TLS 1.3 and zero PHI persistent persistence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: On-Premises Air-Gap Option */}
        <section className="space-y-4">
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
            3. Air-Gapped Physical Isolation
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
            For organizations operating in defense, critical healthcare, or intellectual property-sensitive manufacturing, Clockin AI provides an on-premises hardware enclave appliance. This appliance runs with physical network isolation (air-gap) with zero outbound internet traffic.
          </p>
        </section>

        {/* Section 4: Data Protection Officer & Contact */}
        <section className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-4">
          <h2 className="font-mono font-bold text-sm text-[#0A0A0A] uppercase tracking-wider">
            4. Data Protection Inquiries &amp; Grievance Redressal
          </h2>
          <p className="text-xs text-[#5A5852] leading-relaxed">
            For data protection audits, security questionnaire requests, or compliance inquiries, please contact our Data Governance Officer:
          </p>
          <div className="text-xs font-mono text-[#0A0A0A] space-y-1">
            <div>Office of Data Governance // Clockin AI</div>
            <div>Worldwide Tech &amp; Operations Hub</div>
            <div>Direct Telephone: <a href="tel:+918848563824" className="font-bold underline">+91 88485 63824</a></div>
            <div>Direct WhatsApp: <a href="https://wa.me/918848563824" className="font-bold underline">+91 88485 63824</a></div>
            <div>Email: <a href="mailto:partners@clockin.ai?subject=Privacy%20Inquiry%20-%20Clockin%20AI" className="font-bold underline hover:text-[#5A5852]">partners@clockin.ai</a></div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
