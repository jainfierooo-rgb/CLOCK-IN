'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Calendar, CheckCircle2, Mail } from 'lucide-react';

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
    <section id="reserve" className="py-14 sm:py-24 lg:py-32 bg-white text-[#0A0A0A] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 text-center"
      >
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase text-[#63615A] font-bold mb-4 sm:mb-6">
          <span>GET STARTED // DIRECT DISPATCH</span>
        </div>

        <h2 className="font-extrabold text-2xl sm:text-4xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.12] max-w-4xl mx-auto mb-4 sm:mb-6">
          Make your business <span className="text-[#0A0A0A] underline decoration-[#0A0A0A]/25 underline-offset-8">101 times</span> more worthy.
        </h2>

        <p className="text-xs sm:text-base lg:text-lg text-[#5A5852] max-w-2xl mx-auto leading-relaxed font-normal mb-8 sm:mb-12">
          From workflow audit to production deployment in 21 days. Deploy custom autonomous concierges, predictive yields, and deep ERP automation across your enterprise terrain.
        </p>

        {/* Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal-primary w-full sm:w-auto px-7 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:info@clockinai.net?subject=Inquiry%20regarding%20Clockin%20AI%20Solutions&body=Hello%20Clockin%20AI%20Team%2C%0A%0AWe%20would%20like%20to%20inquire%20about%20custom%20AI%20solutions.%0A%0ACompany%20Name%3A%0AContact%20Phone%3A%0ABusiness%20Need%3A"
            className="btn-dark-primary w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#0A0A0A]" />
            <span>Email info@clockinai.net</span>
          </motion.a>
        </div>

        {/* Minimal Single-Line Fast Callback */}
        <div className="max-w-md mx-auto pt-8 sm:pt-10 border-t border-[#EAE6DF]">
          <p className="text-[10px] sm:text-[11px] font-mono text-[#7A7770] uppercase tracking-wider font-semibold mb-3">
            Or request an engineering callback:
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#0A0A0A] bg-[#FAF8F5] py-3 px-4 rounded-xl border border-[#EAE6DF]">
              <CheckCircle2 className="w-4 h-4 text-[#0A0A0A]" />
              <span>Inquiry registered. An enterprise architect will respond within 2 hours.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Work email or WhatsApp number"
                className="flex-1 px-4 py-3 bg-[#FAF8F5] border border-[#DED8CE] rounded-xl text-xs text-[#0A0A0A] placeholder-[#8A8780] focus:outline-none focus:border-[#0A0A0A] font-sans"
              />
              <button
                type="submit"
                className="btn-teal-primary px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-xl flex items-center justify-center gap-1 cursor-pointer"
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
