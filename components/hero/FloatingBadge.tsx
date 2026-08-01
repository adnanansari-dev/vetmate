type FloatingBadgeProps = {
  icon: string;
  text: string;
  className?: string;
};

export default function FloatingBadge({
  icon,
  text,
  className = "",
}: FloatingBadgeProps) {
  return (
    <div
      className={`
        absolute
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/60
        bg-white/80
        px-4
        py-2
        shadow-xl
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        ${className}
      `}
    >
      <span className="text-lg">{icon}</span>

      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}