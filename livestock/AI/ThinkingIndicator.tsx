"use client";

import React from "react";
import Image from "next/image";

export default function ThinkingIndicator() {
  return (
    <div className="flex gap-3 justify-start items-center">
      <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm">
        <Image
          src="/images/vetmate-icon.jpg"
          alt="VetMate AI"
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 rounded-full px-4 py-2 shadow-sm flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></span>
        <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></span>
        <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce"></span>
      </div>
    </div>
  );
}