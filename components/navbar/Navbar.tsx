"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Features", "#features"],
    ["Livestock Keepers", "#livestock-keepers"], // Fixed section ID to match Farmers.tsx
    ["Veterinarians", "#vets"],
    ["AI Insights", "#insights"],
    ["How It Works", "#how-it-works"],
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-center px-0 pt-0 transition-all duration-500 ease-in-out pointer-events-none">
      <div
        className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "max-w-5xl mt-4 mx-6 rounded-2xl border border-gray-200/80 bg-white/80 px-8 py-3 shadow-lg backdrop-blur-md"
            : "max-w-7xl mt-0 mx-auto rounded-none border-b border-transparent bg-white/0 px-8 py-5 shadow-none backdrop-blur-none"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-5 w-5 rotate-45 rounded-sm border-2 border-[#0F3D5E]" />
          <h1 className="text-xl font-bold tracking-tight text-[#0F3D5E]">
            VetMate
          </h1>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-gray-700">
          {navLinks.map(([title, href]) => (
            <li key={title}>
              <a
                href={href}
                onClick={(e) => handleSmoothScroll(e, href)}
                className="group relative inline-block transition-colors duration-300 hover:text-[#0F3D5E]"
              >
                {title}
                <span className="absolute left-0 -bottom-2 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#2563EB] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href="/auth">
          <button className="rounded-full bg-[#0F3D5E] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#12486D] cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}