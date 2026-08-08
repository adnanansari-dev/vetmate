"use client";

import { useState, useEffect, useRef } from "react";
import { farmerBenefits, FarmerBenefit } from "./farmerData"; 
import FarmerCard from "./FarmerCard";
import FarmerModal from "./FarmerModal";

export default function Farmers() {
  const [selectedBenefit, setSelectedBenefit] = useState<FarmerBenefit | null>(null);

  return (
    <section 
      id="livestock-keepers" 
      className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-16 relative scroll-mt-24"
    >
      {/* Floating Keyframe styles */}
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
      <AnimatedFarmerHeader />

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {farmerBenefits.map((benefit: FarmerBenefit, index: number) => (
          <FarmerCard
            key={benefit.id}
            benefit={benefit}
            delayIndex={index}
            onSelectBenefit={(selected: FarmerBenefit) => setSelectedBenefit(selected)}
          />
        ))}
      </div>

      {/* Modal Popup */}
      {selectedBenefit && (
        <FarmerModal
          benefit={selectedBenefit}
          onClose={() => setSelectedBenefit(null)}
        />
      )}
    </section>
  );
}

function AnimatedFarmerHeader() {
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>Field-Ready AI • Right in Your Pocket</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
        Built for <span className="text-[#2563EB]">Livestock Keepers</span>
      </h2>
      <p className="mt-4 text-base text-slate-600 max-w-xl leading-relaxed font-normal">
        Turn your smartphone camera and microphone into a full livestock health scanner. Zero sensors to install, zero extra hardware costs.
      </p>
    </div>
  );
}