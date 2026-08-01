import HeroGallery from "./HeroGallery";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-36 text-center">
      <h1 className="max-w-6xl text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-gray-900 md:text-6xl lg:text-7xl">
        Smarter Livestock Care.
        <br />
        Powered by{" "}
        <span className="text-[#2563EB]">
          AI.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
        VetMate helps farmers and veterinarians detect diseases early,
        manage livestock health records, and make better decisions with
        intelligent AI-powered insights.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-full bg-[#0F3D5E] px-8 py-4 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#12486D] hover:shadow-xl">
          Get Started
        </button>

        <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-medium text-gray-900 transition duration-300 hover:border-[#0F3D5E] hover:text-[#0F3D5E]">
          Learn More
        </button>
      </div>

      <HeroGallery />
    </section>
  );
}