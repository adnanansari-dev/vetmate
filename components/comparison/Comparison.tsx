"use client";

export default function Comparison() {
  return (
    <section id="comparison" className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
      {/* Keyframes for smooth infinite badge floating */}
      <style>{`
        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-badge-float {
          animation: badgeFloat 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center flex flex-col items-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-1 animate-badge-float">
          The VetMate Advantage
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          <span className="text-[#2563EB]">Intelligence</span> that understands the herd.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1 max-w-2xl">
          Generic tools record data points; VetMate&apos;s AI reasons over health history, symptoms, and environmental context to support your daily care decisions.
        </p>
      </div>

      {/* Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Legacy Software Card */}
        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 sm:p-10 flex flex-col space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
              <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Legacy Software
            </h3>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Traditional databases store records but leave the interpretation to you, often missing critical health trends until it is too late.
          </p>

          <hr className="border-slate-200/70" />

          <ul className="space-y-4 pt-2 mt-auto">
            <li className="flex items-center gap-3 text-slate-600 text-sm sm:text-base font-medium">
              <span className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0">
                -
              </span>
              Static record keeping
            </li>
            <li className="flex items-center gap-3 text-slate-600 text-sm sm:text-base font-medium">
              <span className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0">
                -
              </span>
              No proactive health alerts
            </li>
            <li className="flex items-center gap-3 text-slate-600 text-sm sm:text-base font-medium">
              <span className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0">
                -
              </span>
              Manual data silos
            </li>
          </ul>
        </div>

        {/* VetMate Card */}
        <div className="bg-[#F0F5FF]/80 border border-blue-100 rounded-3xl p-8 sm:p-10 flex flex-col space-y-6 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Logo Container matching the Navbar diamond mark */}
            <div className="w-11 h-11 rounded-2xl bg-blue-100/90 border border-blue-200/60 flex items-center justify-center text-[#2563EB] shadow-sm">
              <svg 
                className="w-6 h-6 rotate-45 stroke-[#2563EB]" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="5" y="5" width="14" height="14" rx="3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              VetMate
            </h3>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Integrated with your farm&apos;s history and veterinary standards to provide immediate health insights and first-aid guidance.
          </p>

          <hr className="border-blue-100" />

          <ul className="space-y-4 pt-2 mt-auto">
            <li className="flex items-center gap-3 text-slate-800 text-sm sm:text-base font-semibold">
              <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                ✓
              </span>
              Analyzes visual and voice data
            </li>
            <li className="flex items-center gap-3 text-slate-800 text-sm sm:text-base font-semibold">
              <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                ✓
              </span>
              Detects early health anomalies
            </li>
            <li className="flex items-center gap-3 text-slate-800 text-sm sm:text-base font-semibold">
              <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                ✓
              </span>
              Syncs with veterinary clinics
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}