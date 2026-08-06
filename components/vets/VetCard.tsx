"use client";

import { useState, useEffect, useRef } from "react";
import { VetBenefit } from "./vetData";

interface VetCardProps {
  benefit: VetBenefit;
  delayIndex: number;
  onSelectBenefit: (benefit: VetBenefit) => void;
}

function getVetIcon(id: string) {
  switch (id) {
    case "qr-scan-diagnostics":
      return (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      );
    case "verified-sos-emergency":
      return (
        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "appointments-reports":
      return (
        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "pharmacy-inventory-delivery":
      return (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function VetCard({ benefit, delayIndex, onSelectBenefit }: VetCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delayIndex * 120}ms`
      }}
      className={`bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-700 flex flex-col justify-between space-y-6 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border animate-badge-float ${benefit.tagColor}`}>
            {benefit.tag}
          </span>
          <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
            {getVetIcon(benefit.id)}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {benefit.title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {benefit.shortDesc}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xl font-black text-[#2563EB]">{benefit.statValue}</p>
          <p className="text-xs text-slate-500 font-medium">{benefit.statLabel}</p>
        </div>

        <div>
          <button
            onClick={() => onSelectBenefit(benefit)}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-slate-900/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group shrink-0"
          >
            <span>Learn more</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}