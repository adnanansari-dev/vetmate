"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { featureSections, FeatureSection } from "./featureData";

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureSection | null>(null);

  // Close popup on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedFeature(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="features" className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-16 relative">
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

      {/* Title & Subtitle with Scroll Animation */}
      <AnimatedHeader />

      {/* Feature Blocks with Scroll Animation */}
      <div className="w-full flex flex-col gap-20 sm:gap-28 pt-8">
        {featureSections.map((feature, index) => (
          <AnimatedFeatureRow
            key={feature.id}
            feature={feature}
            isEven={index % 2 === 0}
            onSelectFeature={(selected) => setSelectedFeature(selected)}
          />
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Backdrop click handler */}
          <div className="absolute inset-0" onClick={() => setSelectedFeature(null)} />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border animate-badge-float ${selectedFeature.tagColor}`}>
                  {selectedFeature.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedFeature.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>{selectedFeature.popupDetails.overview}</p>

              {/* Key Highlights List */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Capabilities
                </h4>
                <ul className="space-y-2">
                  {selectedFeature.popupDetails.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metric Card */}
              <div className="flex items-center justify-between p-4 bg-blue-50/60 border border-blue-100 rounded-2xl">
                <span className="text-sm font-medium text-slate-700">
                  {selectedFeature.popupDetails.statLabel}
                </span>
                <span className="text-2xl font-black text-blue-600">
                  {selectedFeature.popupDetails.statValue}
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-6 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm transition-colors shadow-sm"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

{/* --- HELPER COMPONENTS FOR ANIMATIONS --- */}

function AnimatedHeader() {
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
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px"
      }
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
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
        Feature<span className="text-[#2563EB]">s</span>
      </h2>
      <p className="mt-4 text-base text-slate-600 max-w-xl leading-relaxed font-normal">
        Powerful tools for modern animal healthcare. Everything you need to monitor, diagnose, and manage your farm with the help of artificial intelligence.
      </p>
    </div>
  );
}

interface AnimatedFeatureRowProps {
  feature: FeatureSection;
  isEven: boolean;
  onSelectFeature: (feature: FeatureSection) => void;
}

function AnimatedFeatureRow({ feature, isEven, onSelectFeature }: AnimatedFeatureRowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 transition-all duration-1000 transform ${
        isEven ? "" : "lg:flex-row-reverse"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
    >
      {/* Text Side */}
      <div className="flex-1 text-left space-y-5">
        {/* Floating Badge */}
        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border animate-badge-float ${feature.tagColor}`}>
          {feature.tag}
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {feature.title}
        </h3>

        <p className="text-slate-600 text-base leading-relaxed">
          {feature.description}
        </p>

        {/* Styled Interactive Action Button (#0F172A) */}
        <div>
          <button
            onClick={() => onSelectFeature(feature)}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-slate-900/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
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

      {/* Clickable Image Frame with Next.js Image */}
      <div
        onClick={() => onSelectFeature(feature)}
        className="flex-1 w-full h-64 sm:h-80 bg-slate-100/90 border border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 font-medium shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
      >
        {/* Mock Window Top Bar */}
        <div className="absolute top-0 inset-x-0 h-9 px-4 bg-slate-200/50 border-b border-slate-200/80 flex items-center gap-2 z-20">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>

        {/* Feature Image */}
        {feature.image && (
          <div className="absolute inset-0 pt-9 w-full h-full">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}