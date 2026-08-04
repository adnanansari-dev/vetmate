"use client";

import HeroCanvas from "./HeroCanvas";
import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden min-h-[600px]">
      <HeroCanvas />
      <HeroContent />
      <HeroCard />
      <DashboardPreview />
    </div>
  );
}