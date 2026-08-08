import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FeatureMarquee from "@/components/features/FeatureMarquee";
import Features from "@/components/features/Features";
import Comparison from "@/components/comparison/Comparison";
import AiInsights from "@/components/insights/AiInsights";
import Farmers from "@/components/farmers/Farmer";
import Vets from "@/components/vets/Vets";
import HowItWorks from "@/components/how it works/HowItWorks";
import Security from "@/components/security/Security";
import Faq from "@/components/faq/Faq";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-[200vh] bg-slate-50 relative selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <section className="relative w-full">
        <Hero />
      </section>

      <FeatureMarquee />
      <Features />
      <Comparison />
      <AiInsights />
      <Farmers />
      <Vets />
      <HowItWorks />
      <Security />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}