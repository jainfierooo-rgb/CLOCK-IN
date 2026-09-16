'use client';

import {
  MessageSquare,
  BarChart3,
  FileCheck2,
  PhoneCall,
  Sparkles,
  TrendingUp,
  Mail,
  Layers,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    icon: MessageSquare,
    title: 'AI Chat & Concierge',
    desc: 'Friendly WhatsApp and website assistant that answers guest queries, checks availability, and books reservations 24/7.',
    tag: 'WhatsApp + Web',
  },
  {
    icon: BarChart3,
    title: 'Plain-English Dashboards',
    desc: 'Ask your CRM, spreadsheets, or farm IoT sensors questions in natural language and get instant, easy-to-understand summaries.',
    tag: 'No SQL Needed',
  },
  {
    icon: FileCheck2,
    title: 'Document & SOP Automation',
    desc: 'Automatically extract data from messy invoices, clinical records, and machine inspection logs into your system.',
    tag: 'Zero Manual Data Entry',
  },
  {
    icon: PhoneCall,
    title: 'Voice Reception & Dispatch',
    desc: 'Natural conversational voice AI that answers front desk phone calls, handles booking changes, and alerts staff.',
    tag: 'Natural Speaking Voice',
  },
  {
    icon: Sparkles,
    title: 'Review & Guest Sentiment',
    desc: 'Monitors customer feedback across Google and booking portals, highlighting operational patterns and drafting polite responses.',
    tag: 'Reputation Care',
  },
  {
    icon: TrendingUp,
    title: 'Smart Pricing & Yield AI',
    desc: 'Predictive seasonal room pricing, crop yield forecasts, and automated reorder alerts for materials.',
    tag: 'Boost Margin',
  },
  {
    icon: Mail,
    title: 'Automated Guest Updates',
    desc: 'Personalized arrival instructions, pre-checkin preference forms, and weather updates sent smoothly via WhatsApp.',
    tag: 'Seamless Communication',
  },
  {
    icon: Layers,
    title: 'Custom Workflow Sync',
    desc: 'Connects your existing WhatsApp, PMS, ERP, Google Drive, and billing tools without replacing what already works.',
    tag: 'Plug-and-Play',
  },
];

export default function ProductsGrid() {
  return (
    <section id="solutions" className="py-20 max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-warmBorder pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sageGreen">
            Simple Solutions
          </span>
          <h2 className="headline-font font-bold text-3xl sm:text-4xl text-warmText mt-1">
            Everything your team needs to run smoothly
          </h2>
        </div>
        <p className="text-warmMuted text-xs font-medium mt-3 sm:mt-0">
          Modular setup • Activate only what your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-7 rounded-2xl bg-white border border-warmBorder hover:border-sageBorder hover:shadow-warm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-sageLight flex items-center justify-center text-sageGreen group-hover:bg-sageGreen group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-warmCard text-warmMuted border border-warmBorder">
                    {item.tag}
                  </span>
                </div>

                <h3 className="headline-font font-bold text-lg text-warmText mb-2">
                  {item.title}
                </h3>
                <p className="text-warmMuted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <Link
                href="#contact"
                className="text-xs font-semibold text-sageGreen flex items-center gap-1.5 mt-6 group-hover:translate-x-1 transition-transform"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
