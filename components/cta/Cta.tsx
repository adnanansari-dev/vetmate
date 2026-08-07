"use client";

import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Soft Blue Card Container with Grid Background */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#C3D9FF] py-20 px-6 sm:px-12 text-center flex flex-col items-center justify-center space-y-6 border border-blue-200/50 shadow-sm">
        
        {/* Decorative Grid Mesh Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1E40AF 1px, transparent 1px)`,
            backgroundSize: `24px 24px`
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
            Bring modern intelligence to your livestock operations.
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium max-w-xl mx-auto leading-relaxed">
            Centralize your health records and vaccination schedules within a single, secure platform designed for the field.
          </p>
        </div>

        {/* Single "Get Started" Action Button */}
        <div className="relative z-10 pt-2">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Started</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}