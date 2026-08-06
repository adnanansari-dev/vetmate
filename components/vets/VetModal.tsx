"use client";

import { useEffect } from "react";
import { VetBenefit } from "./vetData";

interface VetModalProps {
  benefit: VetBenefit;
  onClose: () => void;
}

export default function VetModal({ benefit, onClose }: VetModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border animate-badge-float ${benefit.tagColor}`}>
              {benefit.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {benefit.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>{benefit.popupDetails.overview}</p>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Veterinary Capabilities
            </h4>
            <ul className="space-y-2">
              {benefit.popupDetails.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50/60 border border-blue-100 rounded-2xl">
            <span className="text-sm font-medium text-slate-700">
              {benefit.statLabel}
            </span>
            <span className="text-2xl font-black text-blue-600">
              {benefit.statValue}
            </span>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm transition-colors shadow-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}