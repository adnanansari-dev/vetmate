"use client";

import { useState } from "react";
import { faqList } from "./faqData";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqList[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-24 px-6 lg:px-12 max-w-4xl mx-auto space-y-12">
      {/* Badge float animation */}
      <style>{`
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-badge-float {
          animation: badgeFloat 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Header */}
      <div className="text-center flex flex-col items-center space-y-3">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-1 animate-badge-float">
          Got Questions?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked <span className="text-[#2563EB]">Questions</span>
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
          Everything you need to know about setting up and using VetMate on your farm.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {faqList.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-blue-50/40 border-blue-200 shadow-sm"
                  : "bg-white border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#2563EB] text-white rotate-180"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-blue-100/60 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}