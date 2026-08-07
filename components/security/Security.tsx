"use client";

import { securityFeatures } from "./securityData";

export default function Security() {
  return (
    <section id="security" className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
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
          Trust & Compliance
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Secure data <span className="text-[#2563EB]">management.</span> <br className="hidden sm:inline" />
          Rooted in reliability.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1 max-w-2xl">
          VetMate provides a stable, secure environment for managing livestock health records and veterinary workflows across any device.
        </p>
      </div>

      {/* 3-Card Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {securityFeatures.map((item) => (
          <div
            key={item.id}
            className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 sm:p-10 flex flex-col space-y-5 hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 border border-blue-200/60 flex items-center justify-center text-[#2563EB] shadow-sm">
              {item.icon === "shield" && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )}
              {item.icon === "support" && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
              {item.icon === "globe" && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m6 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              )}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}