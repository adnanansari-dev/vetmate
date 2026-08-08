"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Secure & Reliable",
    subtitle: "Enterprise-grade security",
    badgeBg: "bg-blue-100/80 text-blue-600",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Data-Driven Insights",
    subtitle: "AI that learns and improves",
    badgeBg: "bg-emerald-100/80 text-emerald-600",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Built for Everyone",
    subtitle: "Livestock Keepers, and vets",
    badgeBg: "bg-purple-100/80 text-purple-600",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function FloatingBadges() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
    >
      {features.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/70 border border-slate-200/80 shadow-xs backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 cursor-default"
        >
          {/* Rounded Square Icon Badge */}
          <div className={`p-2.5 rounded-xl flex items-center justify-center ${item.badgeBg}`}>
            {item.icon}
          </div>

          {/* Text Content */}
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 tracking-tight leading-tight">
              {item.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-tight mt-0.5">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}