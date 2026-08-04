"use client";

import { motion } from "framer-motion";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Soft Top Ambient Gradient (Spread Wide across the top) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-[100%] bg-gradient-to-b from-blue-200/40 via-sky-100/25 to-transparent blur-[120px] transform-gpu" />

      {/* Subtle Floating Light Accent */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-300/15 blur-[140px] transform-gpu"
      />

      {/* Ultra-Fine Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white_10%,transparent_80%)]"
        style={{
          backgroundImage: `radial-gradient(#0F3D5E 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}