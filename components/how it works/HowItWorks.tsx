"use client";

import Image from "next/image";
import { stepsData } from "./howItWorksData";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
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

      {/* Header */}
      <div className="text-center flex flex-col items-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 animate-badge-float">
          Simple Process
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          How It <span className="text-[#2563EB]">Works</span>
        </h2>
        <p className="mt-4 text-base text-slate-600 max-w-xl leading-relaxed">
          Get started with AI-powered farm management in four simple steps.
        </p>
      </div>

      {/* Grid Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {stepsData.map((item) => (
          <div
            key={item.step}
            className="relative flex flex-col bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
          >
            {/* Step Number Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-black text-lg mb-6 shadow-md">
              {item.step}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
              {item.description}
            </p>

            {/* Step Image Preview */}
            {item.image && (
              <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mt-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}