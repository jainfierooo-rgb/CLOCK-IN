'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layers, Search, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Notification Banner matching Uniphore */}
      <div className="bg-[#0D9488] text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="truncate max-w-[280px] sm:max-w-none">
          Clockin AI Deploys Autonomous Business Intelligence Across Enterprise Sectors
        </span>
        <Link href="/#flowchart" className="font-bold underline inline-flex items-center gap-1 hover:opacity-90 shrink-0">
          <span>Learn more</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Main Clean White Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
          
          {/* Left: Minimal Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[#0A0A0A] hover:opacity-85 transition-opacity shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] flex items-center justify-center text-white shadow-2xs">
              <Layers className="w-4 h-4 text-[#0D9488]" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#0A0A0A]">
              CLOCKIN<span className="text-[#0D9488]">.AI</span>
            </span>
          </Link>

          {/* Center: Nav Links for Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#262626] uppercase tracking-wider">
            <Link href="/#industries" className="hover:text-[#0D9488] transition-colors">
              Industries
            </Link>
            <Link href="/#flowchart" className="hover:text-[#0D9488] transition-colors">
              How It Works
            </Link>
            <Link href="/#reserve" className="hover:text-[#0D9488] transition-colors">
              Get Started
            </Link>
          </nav>

          {/* Right: Search & Action Button for Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              aria-label="Search"
              className="p-2 text-[#404040] hover:text-[#0A0A0A] transition-colors rounded-lg hover:bg-[#FAF8F5]"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919876543210?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 btn-teal-primary text-xs font-semibold shadow-sm hover:shadow"
            >
              Contact us
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="https://wa.me/919876543210?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 btn-teal-primary text-[11px] font-semibold rounded-lg"
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
              className="md:hidden border-b border-[#E5E0D8] bg-white px-6 py-6 space-y-5 overflow-hidden shadow-xl"
            >
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col divide-y divide-[#F2EFE9] text-sm font-bold uppercase tracking-wider text-[#0A0A0A]">
                <Link
                  href="/#industries"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#0D9488]"
                >
                  <span>Industries</span>
                  <ArrowRight className="w-4 h-4 text-[#888888]" />
                </Link>

                <Link
                  href="/#flowchart"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#0D9488]"
                >
                  <span>How It Works</span>
                  <ArrowRight className="w-4 h-4 text-[#888888]" />
                </Link>

                <Link
                  href="/#reserve"
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 flex items-center justify-between hover:text-[#0D9488]"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 text-[#888888]" />
                </Link>
              </nav>

              {/* Mobile Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href="https://wa.me/919876543210?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 btn-teal-primary text-xs font-bold uppercase tracking-wider block shadow-sm"
                >
                  <span>Dispatch on WhatsApp</span>
                </a>

                <div className="text-center text-[10px] font-mono text-[#888888] pt-1 uppercase">
                  BENGALURU, INDIA // 24/7 SRE NODE
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
