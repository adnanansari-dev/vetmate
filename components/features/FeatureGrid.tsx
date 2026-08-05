import { featureList } from "./data";

export default function FeatureGrid() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
      {featureList.map((item: { title: string; subtitle: string; badgeBg: string; icon: React.ReactNode }, index: number) => (
        <div
          key={index}
          className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 cursor-default min-w-[210px]"
        >
          <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${item.badgeBg}`}>
            {item.icon}
          </div>
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 tracking-tight leading-tight">
              {item.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-tight mt-0.5">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}