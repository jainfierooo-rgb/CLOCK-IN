'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';

export default function FinalCta() {
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact) return;
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Executive Inquirer',
          email: contact,
          industry: 'Enterprise General',
          message: 'Requested Clockin AI 21-Day Blueprint Consultation',
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section id="reserve" className="py-28 sm:py-36 bg-white text-[#0A0A0A] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1200px] mx-auto px-6 sm:px-12 text-center"
      >
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] font-mono tracking-widest uppercase text-[#0D9488] font-bold mb-6">
          <span>GET STARTED // DIRECT DISPATCH</span>
        </div>

        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
          Make your business <span className="text-[#0D9488]">101 times</span> more worthy.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed font-normal mb-12">
          From workflow audit to production deployment in 21 days. Deploy custom autonomous concierges, predictive yields, and deep ERP automation across your enterprise terrain.
        </p>

        {/* Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/919876543210?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal-primary w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
            className="btn-dark-primary w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book 10-Min Briefing</span>
          </motion.a>
        </div>

        {/* Minimal Single-Line Fast Callback */}
        <div className="max-w-md mx-auto pt-10 border-t border-[#E5E0D8]">
          <p className="text-[11px] font-mono text-[#888888] uppercase tracking-wider font-semibold mb-3">
            Or request an engineering callback:
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#0D9488] bg-[#FAF8F5] py-3 px-4 rounded-xl border border-[#99F6E4]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Inquiry registered. An enterprise architect will respond within 2 hours.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Work email or WhatsApp number"
                className="flex-1 px-4 py-3 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs text-[#0A0A0A] placeholder-[#888888] focus:outline-none focus:border-[#0D9488] font-sans"
              />
              <button
                type="submit"
                className="btn-teal-primary px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-xl flex items-center gap-1"
              >
                <span>Dispatch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </motion.div>
    </section>
  );
}
