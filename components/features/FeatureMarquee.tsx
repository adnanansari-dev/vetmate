import { featureList } from "./data";

export default function FeatureMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8 bg-slate-50 border-y border-slate-200/50">
      {/* Side gradient overlays for a smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      {/* Main scrolling wrapper */}
      <div className="flex overflow-hidden select-none group">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]">
          {featureList.map((item, index) => (
            <div
              key={`track1-${index}`}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-slate-200/60 min-w-[220px] transition-transform duration-300 hover:scale-105 cursor-default"
            >
              <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${item.badgeBg}`}>
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2 (Exact duplicate for gapless infinite loop) */}
        <div 
          className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {featureList.map((item, index) => (
            <div
              key={`track2-${index}`}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-slate-200/60 min-w-[220px] transition-transform duration-300 hover:scale-105 cursor-default"
            >
              <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${item.badgeBg}`}>
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}