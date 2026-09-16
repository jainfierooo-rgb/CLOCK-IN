import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustProofBar from '@/components/TrustProofBar';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessWorkflow from '@/components/ProcessWorkflow';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A] flex flex-col justify-between selection:bg-[#CCFBF1] selection:text-[#0F766E]">
      <Navbar />
      <Hero />
      <TrustProofBar />
      <IndustriesSection />
      <ProcessWorkflow />
      <FinalCta />
      <Footer />
    </main>
  );
}
