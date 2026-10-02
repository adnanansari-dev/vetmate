"use client";

import React from "react";
import { Sparkles, Camera, AudioWaveform, ShieldAlert } from "lucide-react";

interface WelcomeHeroProps {
  onSelectTopic: (promptText: string) => void;
}

export default function WelcomeHero({ onSelectTopic }: WelcomeHeroProps) {
  const suggestions = [
    {
      title: "Image Diagnostics",
      description: "Analyze animal skin lesions, eyes, or physical symptoms",
      icon: Camera,
      prompt: "How do I scan an animal image for illness using Vision AI?",
    },
    {
      title: "Audio & Cough Detection",
      description: "Listen for coughing, wheezing, or respiratory issues",
      icon: AudioWaveform,
      prompt: "How does the sound and cough detector work?",
    },
    {
      title: "Emergency Vet Search",
      description: "Connect instantly with nearby registered veterinarians",
      icon: ShieldAlert,
      prompt: "How can I contact registered veterinarians in an emergency?",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto space-y-6 my-auto">
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 ring-4 ring-blue-500/10">
        <Sparkles className="h-7 w-7" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Welcome to VetMate
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Welcome to VetMate—your smart companion for animal health and farm care.
          Get instant, vet-reviewed guidance for livestock, connect with trusted
          veterinarians, and make confident decisions for your animals—anytime, anywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4">
        {suggestions.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.title}
              onClick={() => onSelectTopic(item.prompt)}
              className="flex flex-col items-start text-left p-3.5 rounded-xl border border-slate-200/80 bg-white/60 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:hover:border-blue-500/50 group"
            >
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 group-hover:scale-110 transition-transform mb-2">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                {item.title}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}