'use client';

import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp({ phoneNumber }: { phoneNumber: string }) {
  const message = encodeURIComponent(
    'Inquiry regarding Clockin AI enterprise masterplan architecture and deployment.'
  );

  return (
    <aside aria-label="Direct Dispatch" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#0A0A0A] text-white rounded-full border border-white/20 shadow-2xl hover:bg-[#1A1A1A] hover:border-white/40 transition-all duration-300 group"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)] absolute -top-0.5 -right-0.5 animate-pulse"></span>
        </div>
        <span className="text-xs font-mono font-medium tracking-wider uppercase text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          WhatsApp Dispatch
        </span>
      </a>
    </aside>
  );
}
