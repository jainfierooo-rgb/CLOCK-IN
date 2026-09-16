'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/slide-business-ai.jpg',
    tag: 'ENTERPRISE AUTONOMOUS INTELLIGENCE',
    titleLine1: 'We Provide AI Services.',
    titleLine2: 'Business Outcomes 101× More Worthy.',
    desc: 'Clockin AI takes enterprise operations from experimentation to measurable, production-grade outcomes across hospitality, healthcare, and industrial terrain.',
    primaryCta: 'Get Consultation',
    primaryLink: 'https://wa.me/919876543210?text=Inquiry%20regarding%20Clockin%20AI%20services.',
    secondaryCta: 'Explore Architecture',
    secondaryLink: '#flowchart',
  },
  {
    id: 2,
    image: '/slide-hospitality-clinical.jpg',
    tag: 'ZONED SECTORS // HOSPITALITY & HEALTHCARE',
    titleLine1: 'Luxury Resorts & Clinical Networks.',
    titleLine2: 'Zero-Wait Guest & Patient Operations.',
    desc: '24/7 intelligent concierges resolving villa bookings, spa schedules, and clinical intake triage directly synchronized with your PMS and EHR ledgers.',
    primaryCta: 'Explore Sectors',
    primaryLink: '#industries',
    secondaryCta: 'Deployment Blueprint',
    secondaryLink: '#process',
  },
  {
    id: 3,
    image: '/slide-manufacturing.jpg',
    tag: 'ZONED SECTORS // PRECISION MANUFACTURING',
    titleLine1: 'Precision Plants & Adaptable Enterprise.',
    titleLine2: 'Turnkey Go-Live in Under 21 Days.',
    desc: 'Conversational machinery SOP manuals, live sensor defect telemetry, and raw material buffer replenishment connected directly to your central ERP.',
    primaryCta: 'View Process Flowchart',
    primaryLink: '#process',
    secondaryCta: 'Request Plant Deployment',
    secondaryLink: '#reserve',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Slower, relaxed 8.5-second cinematic transition interval
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[current];

  return (
    <section className="relative w-full h-[620px] sm:h-[700px] lg:h-[760px] overflow-hidden bg-[#0A0A0A] text-white select-none">
      {/* Background Images with Gentle Ken Burns Drift & Slow Crossfade */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <motion.img
            key={`img-${activeSlide.id}`}
            src={activeSlide.image}
            alt={activeSlide.titleLine1}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 8.5, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
          />
          {/* High-Contrast Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content Layer */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 sm:px-12 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Animated Specification Pill */}
          <motion.div
            key={`tag-${activeSlide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-widest text-[#2DD4BF] uppercase font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse"></span>
            <span>{activeSlide.tag}</span>
          </motion.div>

          {/* Bold High-Impact Headlines */}
          <motion.div
            key={`title-${activeSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1.5"
          >
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              {activeSlide.titleLine1}
            </h1>
            <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#2DD4BF] tracking-tight leading-[1.1]">
              {activeSlide.titleLine2}
            </h2>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            key={`desc-${activeSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal"
          >
            {activeSlide.desc}
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            key={`cta-${activeSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
          >
            <a
              href={activeSlide.primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal-primary px-8 py-3.5 text-center text-sm font-semibold flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <span>{activeSlide.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={activeSlide.secondaryLink}
              className="btn-glass-hero px-7 py-3.5 text-center text-sm font-medium flex items-center justify-center gap-2"
            >
              <span>{activeSlide.secondaryCta}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Minimal Sleek Chevrons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
