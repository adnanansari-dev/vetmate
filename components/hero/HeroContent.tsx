"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingBadge from "./FloatingBadge";
import FloatingBadges from "./FloatingBadges";

export default function HeroContent() {
  return (
    <section className="relative z-10 w-full pt-36 pb-12 px-6 flex flex-col items-center text-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <FloatingBadge text="AI-Powered Veterinary Intelligence" />

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-5xl sm:text-6xl md:text-[64px] font-extrabold tracking-tight text-[#0A1828] leading-[1.12] transform-gpu"
        >
          Smarter Livestock Care. <br />
          Powered by <span className="text-[#2563EB]">AI.</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed font-normal transform-gpu"
        >
          VetMate helps Livestock Keepers and veterinarians detect diseases early,
          manage livestock health records, and make better decisions with
          intelligent AI-powered insights.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Link href="/auth">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-full bg-[#0F3D5E] px-8 py-3.5 text-sm font-semibold text-white shadow-md cursor-pointer transform-gpu transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#134A72] hover:shadow-lg hover:shadow-blue-900/20"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
              <span className="relative z-10">Get Started</span>
            </motion.div>
          </Link>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-slate-300 bg-white/80 px-8 py-3.5 text-sm font-medium text-slate-800 shadow-xs backdrop-blur-xs cursor-pointer transform-gpu transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Badges placed right below the buttons! */}
        <div className="mt-12 w-full flex justify-center">
          <FloatingBadges />
        </div>

      </div>
    </section>
  );
}