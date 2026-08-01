import Image from "next/image";

type HeroCardProps = {
  image: string;
  title: string;
  badge: string;
  active: boolean;
  onClick: () => void;
};

export default function HeroCard({
  image,
  title,
  badge,
  active,
  onClick,
}: HeroCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={title}
      className={`group relative overflow-hidden rounded-[30px] cursor-pointer transition-all duration-500
        ${
          active
            ? "z-20 scale-105 ring-2 ring-[#2563EB] shadow-2xl"
            : "shadow-xl hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
        }
      `}
    >
      <Image
        src={image}
        alt={title}
        width={420}
        height={520}
        priority={active}
        className="h-[360px] w-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-7 left-6 right-6">
        <h3 className="text-3xl font-bold leading-tight text-white drop-shadow-lg">
          {title}
        </h3>
      </div>
    </button>
  );
}