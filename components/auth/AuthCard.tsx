"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { signIn } from "next-auth/react";

export default function AuthCard() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const mode = isSignUp ? "signup" : "login";

  const content = {
    title: { login: "Welcome back", signup: "Create your account" },
    subtitle: {
      login: "Enter your details to access your dashboard",
      signup: "Start managing your operations intelligently"
    },
    button: { login: "Sign In", signup: "Create Account" },
    toggle: {
      login: { text: "Don't have an account yet?", link: "Sign Up" },
      signup: { text: "Already have an account?", link: "Sign In" }
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (email) params.set("email", email);
    if (name) params.set("name", name);

    router.push(`/onboarding?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 relative z-10 space-y-8 transform-gpu"
    >
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        aria-label="Go back to homepage"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>

      {/* Brand Header */}
      <div className="text-center space-y-2 pt-2">
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-400/20 flex items-center justify-center text-[#2563EB] group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 rotate-45 stroke-blue-600" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="5" width="14" height="14" rx="3" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold text-[#0F172A] tracking-tight">VetMate</span>
        </Link>
        <h1 className="text-xl font-bold text-slate-900 pt-2">{content.title[mode]}</h1>
        <p className="text-sm text-slate-500">{content.subtitle[mode]}</p>
      </div>

      {/* Google Button - Auth.js v5 style */}
      <button
        type="button"
        onClick={() => signIn("google", { redirectTo: "/onboarding" })}
        className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all shadow-sm hover:shadow cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.95H1.2v3.15C3.21 21.35 7.3 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.25c-.25-.72-.38-1.49-.38-2.25s.13-1.53.38-2.25V6.6H1.2C.43 8.15 0 9.89 0 12s.43 3.85 1.2 5.4l4.08-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.3 0 3.21 2.65 1.2 6.6l4.08 3.15c.95-2.84 3.6-4.95 6.72-4.95z"/>
        </svg>
        <span>Continue with Google</span>
      </button>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-slate-100" />
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Or</span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      {/* Animated Form Container */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.form
          key={mode}
          onSubmit={handleEmailSubmit}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="space-y-4"
        >
          {isSignUp && (
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                required
                placeholder="xyz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 text-sm transition-colors bg-slate-50/50"
              />
            </div>
          )}

          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 text-sm transition-colors bg-slate-50/50"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-900 text-sm transition-colors bg-slate-50/50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            {content.button[mode]}
          </button>
        </motion.form>
      </AnimatePresence>

      {/* Toggle Mode */}
      <div className="text-center text-sm text-slate-500">
        {content.toggle[mode].text}{" "}
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="font-bold text-[#2563EB] hover:underline focus:outline-none cursor-pointer"
        >
          {content.toggle[mode].link}
        </button>
      </div>

    </motion.div>
  );
}