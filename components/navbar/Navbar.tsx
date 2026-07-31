export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#0F3D5E]">
          REON
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-gray-700">
          <li>
            <a href="#features" className="transition hover:text-[#0F3D5E]">
              Features
            </a>
          </li>

          <li>
            <a href="#ai-insights" className="transition hover:text-[#0F3D5E]">
              AI Insights
            </a>
          </li>

          <li>
            <a href="#how-it-works" className="transition hover:text-[#0F3D5E]">
              How It Works
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="rounded-full bg-[#0F3D5E] px-5 py-2 font-medium text-white transition hover:bg-[#12486d]">
          Get Started
        </button>
      </div>
    </nav>
  );
}