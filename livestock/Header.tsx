"use client";

interface HeaderProps {
  userName: string;
  userImage?: string;
  roleLabel: string;
  onToggleSidebar: () => void;
}

export default function Header({
  userName,
  userImage,
  roleLabel,
  onToggleSidebar,
}: HeaderProps) {
  return (
    <header className="h-20 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 px-6 flex items-center justify-between shrink-0 sticky top-0 z-50 transition-all duration-300 shadow-sm">
      {/* Left: Menu & Brand */}
      <div className="flex items-center space-x-5 w-1/3">
        <button
          onClick={onToggleSidebar}
          className="p-2.5 text-gray-400 hover:text-[#003366] hover:bg-sky-50 rounded-xl transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm transition-transform duration-500 group-hover:rotate-12 group-hover:shadow-md">
            <svg viewBox="0 0 128 128" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="128" height="128" fill="transparent" />
              <rect x="36" y="36" width="56" height="56" rx="16" transform="rotate(45 64 64)" fill="none" stroke="#003366" strokeWidth="8" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-[#003366] tracking-tight group-hover:text-sky-700 transition-colors">
              VetMate
            </span>
          </div>
        </div>
      </div>

      {/* Center: Interactive Search Bar */}
      <div className="hidden md:flex justify-center w-1/3">
        <div className="relative w-full max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-sky-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-md"
            placeholder="Search animals, insights, tools..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-xs font-semibold text-gray-400 bg-white px-2 py-1 rounded-md border border-gray-200 shadow-sm">
              Ctrl K
            </span>
          </div>
        </div>
      </div>

      {/* Right: Dynamic User Profile & Actions */}
      <div className="flex items-center justify-end space-x-6 w-1/3">
        {/* Animated Notification Badge */}
        <button className="relative p-2 text-gray-400 hover:text-[#003366] transition-all duration-300 hover:scale-110 cursor-pointer">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>

        <div className="h-8 w-px bg-gray-200"></div>

        {/* Dynamic Account Area */}
        <div className="flex items-center space-x-3 cursor-pointer group p-1.5 pr-4 bg-white hover:bg-sky-50 border border-transparent hover:border-sky-100 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="w-10 h-10 rounded-full bg-[#003366] border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-sm font-bold text-white group-hover:scale-105 transition-transform duration-300">
            {userImage ? (
              <img src={userImage} alt={userName} className="w-full h-full object-cover" />
            ) : (
              userName.charAt(0).toUpperCase()
            )}
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-sm font-bold text-[#003366] leading-none group-hover:text-sky-700 transition-colors">
              {userName}
            </span>
            <span className="text-[11px] font-semibold text-sky-500 mt-1 uppercase tracking-wide">
              {roleLabel}
            </span>
          </div>
          <svg className="w-4 h-4 text-gray-400 group-hover:text-sky-600 transition-colors ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
}