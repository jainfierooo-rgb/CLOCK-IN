'use client';

import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp({ phoneNumber }: { phoneNumber: string }) {
  const message = encodeURIComponent(
    'Inquiry regarding Clockin AI enterprise masterplan architecture and deployment.'
  );

  return (
    <aside aria-label="Direct WhatsApp Dispatch" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center gap-2 w-11 h-11 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 bg-[#0A0A0A] text-white rounded-full border border-white/20 shadow-xl hover:bg-[#1A1A1A] hover:border-white/40 active:scale-95 transition-all duration-300 group"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-4 h-4 sm:w-4 sm:h-4 text-white shrink-0" />
          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)] absolute -top-0.5 -right-0.5 animate-pulse"></span>
        </div>
        <span className="text-xs font-mono font-medium tracking-wider uppercase text-white hidden sm:inline-block whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
