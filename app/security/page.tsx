import Link from 'next/link';
import { ShieldCheck, Lock, Terminal, Cpu, CheckCircle2, ArrowLeft, ArrowRight, Server, PhoneCall, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SecurityPage() {
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
            <span>Zero-Trust Enterprise Security Architecture</span>
          </div>

          <h1 className="font-extrabold text-3xl sm:text-5xl tracking-tight text-[#0A0A0A]">
            Security Principles &amp; Cryptographic Architecture
          </h1>

          <p className="text-sm font-mono text-[#7A7770]">
            SOC 2 Type II Aligned &bull; Cryptographic Hardware Enclave &bull; Zero Data Retention
          </p>
        </div>

        {/* Security Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-extrabold text-lg text-[#0A0A0A] tracking-tight">
              Cryptographic Hardware Enclaves
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
              All neural model inference executes within confidential hardware environments (AMD SEV-SNP / Intel SGX / NVIDIA H100 Confidential Computing). Even with root hypervisor access, memory contents cannot be inspected or exfiltrated.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-extrabold text-lg text-[#0A0A0A] tracking-tight">
              Deterministic Hallucination Kill-Switch
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
              Unlike generic generative AI, Clockin AI wraps every model output in a mathematical validator. Tokens must adhere to strict, pre-compiled JSON schemas matching client PMS/EHR rate structures and policies before transmission.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center">
              <Server className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-extrabold text-lg text-[#0A0A0A] tracking-tight">
              Sovereign Cloud &amp; On-Premises Air-Gap
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
              Choose between secure cloud-native API deployment or an optional on-premises private appliance for physical air-gapped facilities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-extrabold text-lg text-[#0A0A0A] tracking-tight">
              Mutual TLS &amp; Zero-Trust Mesh
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
              Every API call and webhook is authenticated via mutual TLS (mTLS) with short-lived rotated certificates. Zero cleartext transmission across any public or private network route.
            </p>
          </div>

        </div>

        {/* Detailed Guardrail Explanation */}
        <section className="space-y-4">
          <h2 className="font-extrabold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
            How the Deterministic Hallucination Kill-Switch Operates
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5852] leading-relaxed">
            In mission-critical enterprise workflows—such as hotel room folio charges, hospital patient appointment intake, or automotive factory part sorting—an AI model hallucinating is unacceptable. Clockin AI employs a three-layer fail-safe architecture:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl border border-[#EAE6DF] bg-white flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0A0A0A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm text-[#0A0A0A]">Layer 1: Pre-Inference Boundary Constraints</strong>
                <p className="text-xs text-[#5A5852] mt-0.5">
                  Input requests are sanitized and bounded against current business rules (e.g. room inventory locks, clinic doctor hours, factory shift schedules).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#EAE6DF] bg-white flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0A0A0A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm text-[#0A0A0A]">Layer 2: Token-Level Mathematical Regex Gates</strong>
                <p className="text-xs text-[#5A5852] mt-0.5">
                  If the model emits an unauthorized rate, invalid medicine name, or malformed SKU, the stream is aborted instantly before rendering.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#EAE6DF] bg-white flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0A0A0A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm text-[#0A0A0A]">Layer 3: Two-Phase Commit Ledger Verification</strong>
                <p className="text-xs text-[#5A5852] mt-0.5">
                  Database writes to Oracle Opera, Epic Systems, or SAP S/4HANA execute with ACID atomicity. If any constraint fails, the transaction rolls back cleanly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiries / Direct Dispatch */}
        <section className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-4">
          <h2 className="font-mono font-bold text-sm text-[#0A0A0A] uppercase tracking-wider">
            Security &amp; Vulnerability Reporting
          </h2>
          <p className="text-xs text-[#5A5852] leading-relaxed">
            Security researchers, enterprise auditors, and partners may contact our direct Cyber Defense desk worldwide:
          </p>
          <div className="text-xs font-mono text-[#0A0A0A] space-y-1">
            <div>Clockin AI Security &amp; Tech Desk</div>
            <div>Worldwide Tech &amp; Operations Hub</div>
            <div>Hotline: <a href="tel:+918848563824" className="font-bold underline">+91 88485 63824</a></div>
            <div>WhatsApp: <a href="https://wa.me/918848563824" className="font-bold underline">+91 88485 63824</a></div>
            <div>Email: <a href="mailto:partners@clockin.ai?subject=Security%20Inquiry%20-%20Clockin%20AI" className="font-bold underline hover:text-[#5A5852]">partners@clockin.ai</a></div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
