"use client";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <aside className="w-64 bg-white border-r border-sky-100 flex flex-col p-4 space-y-4 select-none shrink-0 shadow-xs transition-all">
      <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 px-2">
        Menu
      </div>
      <nav className="space-y-1">
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm shadow-xs">
          <span>💬</span>
          <span>AI Chat Hub</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-sky-50 font-medium text-sm transition-colors">
          <span>🏡</span>
          <span>My Farms</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-sky-50 font-medium text-sm transition-colors">
          <span>🐄</span>
          <span>Herd Management</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-sky-50 font-medium text-sm transition-colors">
          <span>📊</span>
          <span>Analytics & Yield</span>
        </button>
      </nav>
    </aside>
  );
}