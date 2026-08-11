"use client";

import { useState, useEffect } from "react";

interface WelcomeBannerProps {
  userName: string;
  userImage?: string;
}

export default function WelcomeBanner({ userName, userImage }: WelcomeBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide after 8 seconds for a clean experience
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative mx-6 mt-6 mb-2 p-5 bg-gradient-to-r from-[#003366] to-sky-800 rounded-2xl shadow-lg flex items-center justify-between overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-10 -mb-4 w-24 h-24 bg-sky-400/20 rounded-full blur-xl"></div>

      <div className="relative flex items-center space-x-4">
        <div className="w-14 h-14 rounded-full border-2 border-white/20 bg-white/10 p-1 shadow-inner">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden text-[#003366] font-bold text-xl">
             {userImage ? (
              <img src={userImage} alt={userName} className="w-full h-full object-cover" />
            ) : (
              userName.charAt(0).toUpperCase()
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Welcome back, {userName}!
            <span className="inline-block animate-bounce">✨</span>
          </h2>
          <p className="text-sky-100 text-sm mt-1">
            Your AI insights and herd diagnostics are ready for review.
          </p>
        </div>
      </div>

      <button 
        onClick={() => setIsVisible(false)}
        className="relative text-white/60 hover:text-white bg-white/5 hover:bg-white/20 p-2 rounded-full transition-all duration-200 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}