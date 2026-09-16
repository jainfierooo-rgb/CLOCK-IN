'use client';

import { Check, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    badge: 'Quick Launch',
    price: '$1,450',
    frequency: 'one-time setup + $199/month',
    desc: 'Best for boutique resorts or private clinics looking to automate guest inquiries.',
    features: [
      'Website & WhatsApp AI Concierge',
      'Instant lead notifications to WhatsApp / Email',
      'Knowledge base ingestion up to 250 pages',
      'Monthly performance & inquiry report',
      'Continuous hosting, updates & email support',
    ],
    highlighted: false,
  },
  {
    name: 'Growth Suite',
    badge: 'Most Popular',
    price: '$3,800',
    frequency: 'one-time setup + $499/month',
    desc: 'Comprehensive operational automation for busy properties and multi-doctor clinics.',
    features: [
      'Everything in Starter',
      'Plain-English CRM & Reservation Dashboard',
      'Review & sentiment radar across Google & OTAs',
      'Automated document extraction (invoices/records)',
      'Multi-agent WhatsApp routing & human handoff',
      'Priority 4-hour support SLA',
    ],
    highlighted: true,
  },
  {
    name: 'Custom Enterprise',
    badge: 'Tailored Scope',
    price: '$7,500+',
    frequency: 'custom quote based on nodes',
    desc: 'Bespoke AI architectures, field telemetry sensors, and proprietary database loops.',
    features: [
      'Everything in Growth Suite',
      'Predictive room pricing & crop yield forecasting',
      'Natural-language voice reception & dispatch',
      'IoT sensor & machine telemetry ingestion',
      'Custom on-prem or private cloud hosting',
      'Dedicated technical engineer on Slack',
    ],
    highlighted: false,
  },
];

export default function PricingMatrix() {
  return (
    <section id="pricing" className="py-20 max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
      <div className="text-center max-w-xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-wider text-sageGreen">
          Transparent Pricing
        </span>
        <h2 className="headline-font font-bold text-3xl sm:text-4xl text-warmText mt-1">
          Simple, predictable packages
        </h2>
        <p className="text-warmMuted text-xs mt-2">
          Fixed delivery schedule. No hidden costs. Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all relative ${
              tier.highlighted
                ? 'bg-[#FAFBF7] border-2 border-sageGreen shadow-warm sm:-translate-y-1'
                : 'bg-white border border-warmBorder shadow-sm'
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3.5 right-8 bg-sageGreen text-white text-[10px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {tier.badge}
              </span>
            )}

            <div>
              <h3 className="headline-font font-bold text-xl text-warmText">
                {tier.name}
              </h3>
              <p className="text-xs text-warmMuted mt-1.5 min-h-[34px]">
                {tier.desc}
              </p>

              <div className="my-6 pb-6 border-b border-warmBorder">
                <div className="headline-font font-extrabold text-3xl sm:text-4xl text-warmText">
                  {tier.price}
                </div>
                <div className="text-xs text-warmMuted mt-1 font-medium">
                  {tier.frequency}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-warmText">
                    <Check className="w-4 h-4 text-sageGreen flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className={`w-full py-3.5 rounded-full text-center text-xs font-semibold tracking-wide uppercase transition-all ${
                tier.highlighted
                  ? 'bg-sageGreen text-white hover:bg-sageHover shadow-sm'
                  : 'bg-warmCard text-warmText hover:bg-sageGreen hover:text-white border border-warmBorder'
              }`}
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
