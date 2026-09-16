'use client';

import { ArrowUpRight, Compass } from 'lucide-react';

const galleryCards = [
  {
    image: '/estate-gallery-1.jpg',
    tag: 'ZONE 01 // HOSPITALITY',
    title: 'Luxury Resorts & Private Villas',
    desc: 'Autonomous 24/7 guest concierges managing dining reservations, spa schedules, and room controls with zero latency.',
    spec: 'Turnkey PMS Sync',
  },
  {
    image: '/estate-gallery-2.jpg',
    tag: 'ZONE 02 // HEALTHCARE',
    title: 'Clinical Sanctuaries & Retreats',
    desc: 'Automated patient intake, EHR coordination, and direct doctor consultations eliminating front-desk queues.',
    spec: 'HIPAA Compliant',
  },
  {
    image: '/estate-gallery-3.jpg',
    tag: 'ZONE 03 // ENTERPRISE',
    title: 'Smart Facilities & Plant Grounds',
    desc: 'Natural language equipment SOP lookup, inventory telemetry, and automated supply-chain dispatch across campuses.',
    spec: 'Universal ERP Node',
  },
];

export default function EstateGallery() {
  return (
    <section id="architecture" className="bg-[#F7F4EE] text-[#1E352F] py-20 px-6 sm:px-10 transition-colors">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D6] border border-[#DDD6C8] text-[10px] font-mono tracking-widest uppercase text-[#2E4D45] font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C58B38]" />
            <span>ZONED ARCHITECTURAL ENVIRONMENTS</span>
          </div>

          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E352F] tracking-tight leading-tight mb-4">
            Harmonized with Physical &amp; Commercial Terrain
          </h2>

          <p className="text-xs sm:text-sm text-[#586E66] leading-relaxed font-normal">
            We engineer bespoke AI nodes configured specifically for the physical workflows of luxury estates, clinical campuses, and high-yield manufacturing plants.
          </p>
        </div>

        {/* 3 Large Photo Cards matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {galleryCards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E6DFD3] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6DFD3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#243E37]/90 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-[#3F675D]">
                    {card.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base sm:text-lg text-[#1E352F] leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#586E66] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Pill */}
              <div className="px-6 pb-6 pt-2 border-t border-[#F2ECE1] flex items-center justify-between">
                <span className="text-[10px] font-mono font-medium text-[#2E4D45] bg-[#EAE3D6] px-2.5 py-1 rounded border border-[#DDD6C8]">
                  {card.spec}
                </span>

                <a
                  href="#reserve"
                  className="text-xs font-semibold text-[#C58B38] group-hover:text-[#B87B2E] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Deploy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Dark Pine Green Button matching Image 1 */}
        <div className="text-center pt-2">
          <a
            href="https://wa.me/15551234567?text=Inquiry%20regarding%20Clockin%20AI%20estate%20deployments."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pine-dark inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow active:scale-95"
          >
            <span>Consult with an AI Architect</span>
            <ArrowUpRight className="w-4 h-4 text-[#C58B38]" />
          </a>
        </div>
      </div>
    </section>
  );
}
