"use client";

import { InsightTab, TabKey } from "./types";

interface InsightsNavProps {
  tabs: InsightTab[];
  activeTab: TabKey;
  onSelectTab: (id: TabKey) => void;
}

export default function InsightsNav({ tabs, activeTab, onSelectTab }: InsightsNavProps) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex p-1.5 bg-slate-200/60 backdrop-blur-md rounded-2xl border border-slate-300/50 gap-1 overflow-x-auto max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-white text-slate-900 shadow-md ring-1 ring-slate-900/5"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}