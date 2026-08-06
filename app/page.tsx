import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FeatureMarquee from "@/components/features/FeatureMarquee";
import Features from "@/components/features/Features";
import AiInsights from "@/components/insights/AiInsights";
import Farmers from "@/components/farmers/Farmers";
import Vets from "@/components/vets/Vets";

export default function Home() {
  return (
    <main className="min-h-[200vh] bg-slate-50 relative selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <section className="relative w-full">
        <Hero />
      </section>

      <FeatureMarquee />
      <Features />
      <AiInsights />
      <Farmers />
      <Vets />
    </main>
  );
}