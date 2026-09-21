'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layers, Search, ArrowRight, ArrowUpRight, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Notification Banner in Warm Modern Style */}
      <div className="bg-[#FAF8F5] border-b border-[#EAE6DF] text-[#5A5852] text-[11px] sm:text-xs py-2 px-3 sm:px-4 text-center font-mono tracking-wide flex items-center justify-center gap-2">
        <span className="truncate max-w-[210px] sm:max-w-none">
          Custom AI Engineering &bull; Serving Key Industries
        </span>
        <Link href="/architecture" className="text-[#0A0A0A] font-bold underline inline-flex items-center gap-1 hover:opacity-80 shrink-0">
          <span>How It Works</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Main Warm White Frosted Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#EAE6DF] text-[#0A0A0A] transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
          
          {/* Left: Minimal Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[#0A0A0A] hover:opacity-85 transition-opacity shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] flex items-center justify-center text-white shadow-xs">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#0A0A0A]">
              CLOCKIN<span className="text-[#8A8780]">.AI</span>
            </span>
          </Link>

          {/* Center: Nav Links for Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono font-medium text-[#5A5852] uppercase tracking-wider">
            <Link href="/" className="hover:text-[#0A0A0A] transition-colors">
              Home
            </Link>
            <Link href="/#industries" className="hover:text-[#0A0A0A] transition-colors">
              Industries
            </Link>
            <Link href="/architecture" className="hover:text-[#0A0A0A] transition-colors">
              How It Works
            </Link>
            <Link href="/#demo" className="hover:text-[#0A0A0A] transition-colors">
              Live Demo
            </Link>
            <Link href="/#reserve" className="hover:text-[#0A0A0A] transition-colors">
              Get Started
            </Link>
          </nav>

          {/* Right: Search & Action Button for Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+918848563824"
              className="text-xs font-mono text-[#5A5852] hover:text-[#0A0A0A] transition-colors hidden lg:block"
            >
              +91 88485 63824
            </a>

            <a
              href="https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 btn-teal-primary text-xs font-semibold shadow-xs"
            >
              Contact us
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 btn-teal-primary text-[11px] font-semibold rounded-full"
            >
              Contact
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#0A0A0A] hover:bg-[#FAF8F5] rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Full-Width Responsive Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-b border-[#EAE6DF] bg-white/95 backdrop-blur-2xl px-6 py-6 space-y-5 overflow-hidden shadow-2xl"
            >
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col divide-y divide-[#EAE6DF] text-xs font-mono uppercase tracking-wider font-semibold">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#5A5852]"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-[#8A8780]" />
                </Link>

                <Link
                  href="/#industries"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#5A5852]"
                >
                  <span>Industries</span>
                  <ArrowRight className="w-4 h-4 text-[#8A8780]" />
                </Link>

                <Link
                  href="/architecture"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#5A5852]"
                >
                  <span>How It Works</span>
                  <ArrowRight className="w-4 h-4 text-[#8A8780]" />
                </Link>

                <Link
                  href="/#demo"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#5A5852]"
                >
                  <span>Live Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#8A8780]" />
                </Link>

                <Link
                  href="/#reserve"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#5A5852]"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 text-[#8A8780]" />
                </Link>
              </nav>

              {/* Mobile Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href="https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 btn-teal-primary text-xs font-bold uppercase tracking-wider block shadow-xs"
                >
                  <span>Dispatch on WhatsApp (+91 88485 63824)</span>
                </a>

                <a
                  href="mailto:partners@clockin.ai?subject=Inquiry%20regarding%20Clockin%20AI%20Services&body=Hello%20Clockin%20AI%20Team%2C%0A%0AWe%20would%20like%20to%20inquire%20about%20custom%20AI%20services.%0A%0ACompany%3A%0APhone%3A%0ARequirement%3A"
                  className="w-full text-center py-3 btn-dark-primary text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email partners@clockin.ai</span>
                </a>

                <div className="text-center text-[10px] font-mono text-[#7A7770] pt-1 uppercase">
                  WORLDWIDE // 24/7 OPERATIONS DESK
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
