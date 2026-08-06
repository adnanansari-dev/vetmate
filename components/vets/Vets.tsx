"use client";

import { useState, useEffect, useRef } from "react";
import { vetBenefits, VetBenefit } from "./vetData";
import VetCard from "./VetCard";
import VetModal from "./VetModal";

export default function Vets() {
  const [selectedBenefit, setSelectedBenefit] = useState<VetBenefit | null>(null);

  return (
    <section id="vets" className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-16 relative">
      <AnimatedVetHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {vetBenefits.map((benefit, index) => (
          <VetCard
            key={benefit.id}
            benefit={benefit}
            delayIndex={index}
            onSelectBenefit={(selected) => setSelectedBenefit(selected)}
          />
        ))}
      </div>

      {selectedBenefit && (
        <VetModal
          benefit={selectedBenefit}
          onClose={() => setSelectedBenefit(null)}
        />
      )}
    </section>
  );
}

function AnimatedVetHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headerRef}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      className={`text-center flex flex-col items-center transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
      }`}
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-4 animate-badge-float">
        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Verified Veterinary Network • Instant QR Diagnostics</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
        Built for <span className="text-[#2563EB]">Veterinarians</span>
      </h2>
      <p className="mt-4 text-base text-slate-600 max-w-xl leading-relaxed font-normal">
        Empowering certified practitioners with instant QR patient scans, automated pre-intake reports, emergency SOS dispatch, and direct pharmacy integration.
      </p>
    </div>
  );
}