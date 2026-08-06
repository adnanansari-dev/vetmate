"use client";

import Image from "next/image";
import { InsightTab } from "./types";

interface InsightsPreviewProps {
  current: InsightTab;
}

export default function InsightsPreview({ current }: InsightsPreviewProps) {
  return (
    <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden relative min-h-[300px] sm:min-h-[380px] flex items-center justify-center">
      {current.mediaType === "video" ? (
        <video
          src={current.mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        />
      ) : (
        <div className="relative w-full h-[300px] sm:h-[380px]">
          <Image
            src={current.mediaSrc}
            alt={current.title}
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}