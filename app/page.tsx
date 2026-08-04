import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] text-slate-900 selection:bg-blue-100">
      <Navbar />
      <Hero />
    </main>
  );
}