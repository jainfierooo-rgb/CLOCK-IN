import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CLOCKIN AI — We Provide AI Services | 101x More Valuable',
  description:
    'We provide full-spectrum AI services from bottom to top. Turnkey architecture deployed across hospitals, luxury resorts, manufacturing plants, and adaptable commercial sectors.',
  openGraph: {
    title: 'CLOCKIN AI — Turnkey AI Services',
    description: 'We make your business 101 times more worthy through custom autonomous intelligence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased bg-white text-[#0A0A0A]">
        {children}
        <FloatingWhatsApp phoneNumber="918848563824" />
      </body>
    </html>
  );
}
