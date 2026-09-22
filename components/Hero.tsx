'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/slide-business-ai.jpg',
    tag: 'CUSTOM AI ENGINEERING & AUTOMATION',
    titleLine1: 'We Provide AI Services.',
    titleLine2: 'Tailored For Real Business Results.',
    desc: 'Clockin AI builds and deploys practical AI systems for modern businesses across luxury hospitality, clinical networks, manufacturing, and retail.',
    primaryCta: 'Contact Our Team',
    primaryLink: 'https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20services.',
    secondaryCta: 'How It Works',
    secondaryLink: '/architecture',
  },
  {
    id: 2,
    image: '/slide-hospitality-clinical.jpg',
    tag: 'HOSPITALITY & CLINICAL AUTOMATION',
    titleLine1: 'Luxury Resorts & Healthcare Clinics.',
    titleLine2: 'Zero-Wait Customer Operations.',
    desc: '24/7 intelligent concierges resolving bookings, guest requests, and patient intake triage connected with your existing software.',
    primaryCta: 'Explore Industries',
    primaryLink: '#industries',
    secondaryCta: 'How It Works',
    secondaryLink: '/architecture',
  },
  {
    id: 3,
    image: '/slide-manufacturing.jpg',
    tag: 'MANUFACTURING & ENTERPRISE WORKFLOWS',
    titleLine1: 'Industrial Plants & Fast-Growing Brands.',
    titleLine2: 'Go Live in Under 21 Days.',
    desc: 'Automate repetitive workflows, customer inquiries, and data sync directly into your central business systems.',
    primaryCta: 'Explore Industries',
    primaryLink: '#industries',
    secondaryCta: 'Get Started',
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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-[#F5F2EC] text-[#0A0A0A] pt-8 sm:pt-16 pb-12 sm:pb-20 border-b border-[#EAE6DF] select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Hero Typography & Call-To-Action Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Specification Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2DDD5] text-[11px] font-mono tracking-widest text-[#5A5852] uppercase font-bold shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] animate-pulse"></span>
            <span>CUSTOM AI SERVICES // WORLDWIDE</span>
          </motion.div>

          {/* Master Bold Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1 sm:space-y-2"
          >
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl text-[#0A0A0A] tracking-tight leading-[1.12]">
              We Provide AI Services.
            </h1>
            <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl text-[#0A0A0A] tracking-tight leading-[1.12]">
              Built For <span className="underline decoration-[#0A0A0A]/20 underline-offset-8">Real Business Results</span>.
            </h2>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs sm:text-base lg:text-lg text-[#5A5852] leading-relaxed max-w-2xl mx-auto font-normal px-1 sm:px-0"
          >
            Our team builds and manages custom AI systems for businesses across luxury hospitality, clinical networks, manufacturing, and retail—turning manual bottlenecks into seamless automation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <a
              href="https://wa.me/918848563824?text=Inquiry%20regarding%20Clockin%20AI%20enterprise%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal-primary w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:partners@clockin.ai?subject=Inquiry%20regarding%20Clockin%20AI%20Services&body=Hello%20Clockin%20AI%20Team%2C%0A%0AWe%20would%20like%20to%20learn%20more%20about%20your%20custom%20AI%20engineering%20services.%0A%0ACompany%3A%0APhone%3A%0ARequirement%3A"
              className="btn-dark-primary w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>

            <Link
              href="/architecture"
              className="w-full sm:w-auto py-2 sm:py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1 text-[#5A5852] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            >
              <span>How It Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

        </div>

        {/* Cinematic Framed Showcase Viewport with Responsive Scaling */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-14 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-xl relative min-h-[300px] sm:min-h-[420px] lg:min-h-[500px] max-w-[1360px] mx-auto bg-[#0A0A0A] flex flex-col justify-end"
        >
          {/* Background Crossfading Images with Ken Burns Drift */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* In-Frame Context Overlay */}
          <div className="relative z-10 p-4 sm:p-8 lg:p-12 max-w-2xl text-white space-y-2">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#DED8CE] uppercase font-bold bg-black/60 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 inline-block shadow-sm">
              {activeSlide.tag}
            </span>
            <h3 className="font-extrabold text-base sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug drop-shadow-md">
              {activeSlide.titleLine1} <br className="hidden sm:inline" />
              <span className="text-neutral-200">{activeSlide.titleLine2}</span>
            </h3>
            <p className="text-[11px] sm:text-sm text-neutral-300 line-clamp-2 max-w-xl">
              {activeSlide.desc}
            </p>
          </div>

          {/* In-Frame Chevrons (Touch-friendly on all screen sizes) */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Sector Switcher Indicator Strip */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-white/20">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold transition-all duration-300 cursor-pointer ${
                  current === idx
                    ? 'bg-white text-black shadow-xs'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>

          {/* Mobile Slide Indicator Dots */}
          <div className="sm:hidden absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
