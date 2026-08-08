"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] text-slate-400 py-16 px-6 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-[#2563EB]">
              <svg 
                className="w-5 h-5 rotate-45 stroke-blue-400" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="5" y="5" width="14" height="14" rx="3" />
              </svg>
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              VetMate
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Next-generation AI-powered livestock health and farm management platform designed for modern operators.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Platform</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#comparison" className="hover:text-white transition-colors">Comparison</a></li>
            <li><a href="#farmer" className="hover:text-white transition-colors">For Livestock Keepers</a></li>
            <li><a href="#vets" className="hover:text-white transition-colors">For Vets</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#security" className="hover:text-white transition-colors">Security & Trust</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><Link href="/support" className="hover:text-white transition-colors">Support Center</Link></li>
          </ul>
        </div>

        {/* Legal / Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/compliance" className="hover:text-white transition-colors">Data Compliance</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} VetMate AI. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All Systems Operational
          </span>
        </div>
      </div>
    </footer>
  );
}