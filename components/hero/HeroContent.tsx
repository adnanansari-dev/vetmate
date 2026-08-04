"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingBadge from "./FloatingBadge";
import FloatingBadges from "./FloatingBadges";

export default function HeroContent() {
  const [isShifted, setIsShifted] = useState(false);
  const isCooldownRef = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isCooldownRef.current) return;

      if (e.deltaY > 15) {
        setIsShifted(true);
        triggerCooldown();
      } else if (e.deltaY < -15) {
        setIsShifted(false);
        triggerCooldown();
      }
    };

    const triggerCooldown = () => {
      isCooldownRef.current = true;
      setTimeout(() => {
        isCooldownRef.current = false;
      }, 600);
    };

    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isCooldownRef.current) return;
      const endY = e.touches[0].clientY;
      const diff = startY - endY;

      if (diff > 25) {
        setIsShifted(true);
        triggerCooldown();
      } else if (diff < -25) {
        setIsShifted(false);
        triggerCooldown();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-24 pb-8 px-6 lg:px-12">
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center h-full">

        {/* Hero Content Block */}
        <motion.div
          animate={{
            x: isShifted ? "-24%" : "0%",
            scale: isShifted ? 0.88 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl flex flex-col items-center text-center z-10"
        >
          {/* Top Badge */}
          <div className="w-full flex justify-center">
            <FloatingBadge text="AI-Powered Veterinary Intelligence" />
          </div>

          {/* Headline */}
          <h1 className="w-full text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight text-[#0A1828] leading-[1.12] mt-3">
            Smarter Livestock Care. <br />
            Powered by <span className="text-[#2563EB]">AI.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base text-slate-600 max-w-xl leading-relaxed font-normal">
            VetMate helps farmers and veterinarians detect diseases early,
            manage livestock health records, and make better decisions with
            intelligent AI-powered insights.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-full bg-[#0F3D5E] px-8 py-3.5 text-sm font-semibold text-white shadow-md cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#134A72] hover:shadow-lg hover:shadow-blue-900/20"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
              <span className="relative z-10">Get Started</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-slate-300 bg-white/80 px-8 py-3.5 text-sm font-medium text-slate-800 shadow-xs backdrop-blur-xs cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
            >
              Learn More
            </motion.button>
          </div>

          {/* 3 Bottom Badges */}
          <div className="mt-8 w-full flex justify-center">
            <FloatingBadges />
          </div>
        </motion.div>

        {/* Right Side Showcase Grid */}
        <motion.div
          animate={{
            opacity: isShifted ? 1 : 0,
            scale: isShifted ? 1 : 0.85,
            x: isShifted ? "0%" : "20%",
            pointerEvents: isShifted ? "auto" : "none",
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[52%] h-[500px] hidden lg:block z-0"
        >
          <div className="relative w-full h-full">
            
            {/* 1. Animal Health (Cow) - shifted right so it doesn't overlap text */}
            <div className="absolute top-0 right-[240px] w-[240px] h-[180px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 z-40">
              <Image
                src="/images/animal-health.jpg"
                alt="Animal Health"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 2. Live Monitoring */}
            <div className="absolute top-8 right-12 w-[220px] h-[160px] rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 z-30">
              <Image
                src="/images/poultry-monitoring.jpg"
                alt="Live Monitoring"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Live Monitoring
              </div>
            </div>

            {/* 3. Farm Dashboard */}
            <div className="absolute bottom-16 right-[220px] w-[230px] h-[170px] rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 z-20">
              <Image
                src="/images/farm-dashboard.jpg"
                alt="Farm Dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Farm Dashboard
              </div>
            </div>

            {/* 4. Clinical Tools */}
            <div className="absolute bottom-2 right-4 w-[240px] h-[190px] rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 z-10">
              <Image
                src="/images/vet-workspace.jpg"
                alt="Clinical Tools"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Clinical Tools
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}