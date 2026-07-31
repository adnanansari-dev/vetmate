export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 z-50 w-full px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-gray-200 bg-white/80 px-8 py-3 shadow-lg backdrop-blur-md">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rotate-45 rounded-sm border-2 border-[#0F3D5E]" />

          <h1 className="text-xl font-bold tracking-tight text-[#0F3D5E]">
            VetMate
          </h1>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-10 text-[15px] font-medium text-gray-700">

          {[
            ["Features", "#features"],
            ["Farmers", "#farmers"],
            ["Veterinarians", "#veterinarians"],
            ["AI Insights", "#ai-insights"],
            ["How It Works", "#how-it-works"],
          ].map(([title, href]) => (
            <li key={title}>
              <a
                href={href}
                className="group relative inline-block transition-colors duration-300 hover:text-[#0F3D5E]"
              >
                {title}

                <span className="absolute left-0 -bottom-2 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#2563EB] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </a>
            </li>
          ))}
        </ul>

        <button className="rounded-full bg-[#0F3D5E] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#12486D]">
          Get Started
        </button>
      </div>
    </nav>
  );
}