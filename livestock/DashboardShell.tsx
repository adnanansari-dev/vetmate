"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, Search, Bell, Grid, User, LogOut, Settings, 
  MessageSquare, Droplet, CalendarHeart, QrCode, ShieldPlus, Command 
} from "lucide-react";

interface DashboardShellProps {
  children: React.ReactNode;
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  };
}

export default function DashboardShell({ children, user }: DashboardShellProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();

  const currentUser = {
    name: user?.name || "Livestock Owner",
    email: user?.email || "owner@vetmate.com",
    image: user?.image || null,
    role: user?.role || "Livestock Keeper"
  };

  const userInitial = currentUser.name.charAt(0).toUpperCase();

  const navigation = [
    { name: "AI Chat Hub", href: "/livestock-dashboard", icon: MessageSquare },
    { name: "My Farm", href: "/livestock-dashboard/farm", icon: QrCode },
    { name: "Milk Yield Dashboard", href: "/livestock-dashboard/milk", icon: Droplet },
    { name: "Pregnancy & Delivery", href: "/livestock-dashboard/pregnancy", icon: CalendarHeart },
    { name: "Emergency & Vets", href: "/livestock-dashboard/vets", icon: ShieldPlus },
  ];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col p-4 pt-3 gap-4 relative overflow-hidden">
      
      {/* Background Ambient Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Bar */}
      <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-5 shadow-sm shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 dark:border-slate-800/60 dark:bg-slate-900/70">
        
        {/* Navigation Toggle & Branding */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-xl transition-all active:scale-95 dark:text-slate-300 dark:hover:bg-slate-800/60"
            aria-label="Toggle Navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/livestock-dashboard" className="flex items-center gap-3">
            <Image 
              src="/images/vetmate-icon.jpg" 
              alt="VetMate" 
              width={36} 
              height={36} 
              className="rounded-xl object-cover shadow-sm ring-1 ring-black/5" 
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold leading-tight tracking-tight">VetMate</span>
              <div className="flex items-center gap-1.5">
                <Image 
                  src="/images/livestock-icon.jpg" 
                  alt="Keeper" 
                  width={14} 
                  height={14} 
                  className="rounded-sm object-cover" 
                />
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Livestock Portal</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Global Search */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8 items-center">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              id="search-field"
              className="w-full h-11 rounded-xl border border-slate-200/80 bg-white/80 pl-11 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:focus:bg-slate-900"
              placeholder="Search animals, QR codes, or command AI..."
              type="search"
              name="search"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 bg-slate-100 text-xs font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800">
              <Command className="w-3 h-3" /> K
            </div>
          </div>
        </div>

        {/* Header Action Icons & User Dropdown */}
        <div className="flex items-center gap-2">
          <button type="button" className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-xl transition-all dark:text-slate-400 dark:hover:bg-slate-800/60">
            <Grid className="h-5 w-5" />
          </button>
          
          <button type="button" className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-xl transition-all relative dark:text-slate-400 dark:hover:bg-slate-800/60">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
          </button>

          <div className="relative ml-1">
            <button 
              onClick={() => setProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:ring-4 ring-slate-200/50 transition-all dark:ring-slate-800/50"
            >
              {currentUser.image ? (
                <Image 
                  src={currentUser.image} 
                  alt={currentUser.name} 
                  width={32} 
                  height={32} 
                  className="rounded-full object-cover border border-slate-200 dark:border-slate-700" 
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {userInitial}
                </div>
              )}
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 z-50 mt-3 w-60 rounded-2xl border border-white/60 bg-white/95 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/60 dark:bg-slate-900/95 dark:shadow-none py-2">
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{currentUser.name}</p>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{currentUser.email}</p>
                </div>
                <div className="p-1">
                  <Link href="/profile" className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100/80 rounded-xl dark:text-slate-300 dark:hover:bg-slate-800/60 transition-colors">
                    <User className="h-4 w-4 text-slate-400" /> Profile
                  </Link>
                  <Link href="/settings" className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100/80 rounded-xl dark:text-slate-300 dark:hover:bg-slate-800/60 transition-colors">
                    <Settings className="h-4 w-4 text-slate-400" /> Settings
                  </Link>
                  <button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50/80 rounded-xl dark:hover:bg-red-950/30 transition-colors mt-1">
                    <LogOut className="h-4 w-4" /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex flex-1 gap-4 overflow-hidden h-[calc(100vh-5.5rem)]">
        
        {/* Collapsible Sidebar */}
        <aside 
          className={`
            ${isSidebarOpen ? 'w-64 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-4 pointer-events-none'}
            transition-all duration-300 ease-in-out shrink-0 rounded-2xl border border-white/60 bg-white/70 shadow-sm shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/70 flex flex-col p-3 overflow-hidden
          `}
        >
          <nav className="flex flex-1 flex-col space-y-1.5 min-w-[232px]">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all ${
                    isActive 
                      ? "bg-slate-900 text-white shadow-sm dark:bg-blue-600 dark:text-white" 
                      : "text-slate-600 hover:bg-white/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Dynamic Content Region */}
        <main className="flex-1 rounded-2xl border border-white/60 bg-white/70 shadow-sm shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/70 p-6 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}