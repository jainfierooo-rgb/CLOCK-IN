import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustProofBar from '@/components/TrustProofBar';
import IndustriesSection from '@/components/IndustriesSection';
import LiveConciergeDemo from '@/components/LiveConciergeDemo';
import ProcessWorkflow from '@/components/ProcessWorkflow';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A] flex flex-col justify-between selection:bg-[#0A0A0A] selection:text-white">
      <Navbar />
      <Hero />
      <TrustProofBar />
      <IndustriesSection />
      <LiveConciergeDemo />
      <ProcessWorkflow />
      <FinalCta />
      <Footer />
    </main>
  );
}
