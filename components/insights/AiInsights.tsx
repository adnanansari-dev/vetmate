"use client";

import { useState } from "react";
import { TabKey } from "./types";
import { INSIGHTS_TABS } from "./data";
import InsightsNav from "./InsightsNav";
import InsightsPreview from "./InsightsPreview";

export default function AiInsights() {
  const [activeTab, setActiveTab] = useState<TabKey>("visual");
  const current = INSIGHTS_TABS.find((t) => t.id === activeTab) || INSIGHTS_TABS[0];

  return (
    <section id="insights" className="w-full py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center flex flex-col items-center space-y-4">
        {/* Animated Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-sm backdrop-blur-sm animate-[float_3.5s_ease-in-out_infinite]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <span>CLINICAL AI ENGINE • MULTI-MODAL DIAGNOSTICS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Next-Gen <span className="text-[#2563EB]">AI Diagnostic</span> Insights
        </h2>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
          Combining computer vision, acoustic listening, and real-time inventory sync into a single powerful clinical window.
        </p>
      </div>

      {/* Nav Pills */}
      <InsightsNav
        tabs={INSIGHTS_TABS}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* App Window Frame */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] opacity-20 blur-xl group-hover:opacity-35 transition duration-700" />

        <div className="relative bg-[#0F172A] rounded-[28px] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Mac/Browser Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/90" />
              <span className="w-3 h-3 rounded-full bg-amber-500/90" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
              <span className="text-xs font-mono text-slate-400 ml-3 hidden sm:inline-block">
                vetmate.app / preview / {current.id}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {current.badge}
              </span>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6 text-white">
              <div className="space-y-2">
                <p className="text-xs font-bold text-blue-400 tracking-wider uppercase">Active Feature</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{current.title}</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{current.description}</p>

              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">{current.statLabel}</p>
                  <p className="text-lg font-black text-amber-400 mt-0.5">{current.statValue}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Media Preview */}
            <InsightsPreview current={current} />
          </div>
        </div>
      </div>
    </section>
  );
}