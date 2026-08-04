"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingBadgeProps {
  text?: string;
}

export default function FloatingBadge({
  text = "AI-Powered Veterinary Intelligence",
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1], // Smooth, organic floating sine curve
      }}
      className="group mb-6 inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-blue-200/80 bg-blue-50/50 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 shadow-sm backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-blue-400 hover:bg-blue-100/80 hover:shadow-md hover:shadow-blue-500/10 transform-gpu"
    >
      {/* Sparkle Icon Logo */}
      <svg
        className="h-4 w-4 fill-current text-blue-600 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      <span className="tracking-tight">{text}</span>
    </motion.div>
  );
}