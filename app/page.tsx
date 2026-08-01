import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAFBFC]">
        <Hero />

        {/* Features */}
        <section
          id="features"
          className="mx-auto max-w-6xl px-6 py-28 text-center"
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Features
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Discover how VetMate helps farmers and veterinarians with
            AI-powered livestock healthcare.
          </p>
        </section>
      </main>
    </>
  );
}