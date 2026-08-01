"use client";

import { useState } from "react";
import HeroCard from "./HeroCard";
import FloatingBadge from "./FloatingBadge";

const cards = [
  {
    title: "Animal Health",
    image: "/images/animal-health.jpg",
    badge: "AI Health Scan",
    metrics: [
      { label: "Health Score", value: "98%" },
      { label: "Disease Risk", value: "Low" },
      { label: "Body Condition", value: "Healthy" },
      { label: "Last Scan", value: "Today • 8:42 AM" },
    ],
  },
  {
    title: "Poultry Monitoring",
    image: "/images/poultry-monitoring.jpg",
    badge: "Flock Monitoring",
    metrics: [
      { label: "Flock Size", value: "850" },
      { label: "Vaccinated", value: "812" },
      { label: "Need Attention", value: "18" },
      { label: "Disease Risk", value: "Low" },
    ],
  },
  {
    title: "Farm Dashboard",
    image: "/images/farm-dashboard.jpg",
    badge: "Farm Overview",
    metrics: [
      { label: "Total Animals", value: "247" },
      { label: "Healthy", value: "238" },
      { label: "Need Attention", value: "7" },
      { label: "Critical", value: "2" },
      { label: "Vaccinations Due", value: "15" },
      { label: "Today's Alerts", value: "4" },
    ],
  },
  {
    title: "Vet Workspace",
    image: "/images/vet-workspace.jpg",
    badge: "Clinical Tools",
    metrics: [
      { label: "Pending Cases", value: "12" },
      { label: "AI Reports Ready", value: "8" },
      { label: "Appointments", value: "5" },
      { label: "Critical Alerts", value: "1" },
    ],
  },
];

export default function HeroGallery() {
  const [selectedCard, setSelectedCard] = useState(0);

  const selected = cards[selectedCard];

  const layout = [
    {
      rotate: "-rotate-3",
      translate: "-translate-y-10",
      scale: "scale-110",
      margin: "",
    },
    {
      rotate: "rotate-2",
      translate: "translate-y-6",
      scale: "scale-95",
      margin: "-ml-6",
    },
    {
      rotate: "-rotate-2",
      translate: "-translate-y-3",
      scale: "scale-100",
      margin: "-ml-6",
    },
    {
      rotate: "rotate-3",
      translate: "translate-y-8",
      scale: "scale-95",
      margin: "-ml-6",
    },
  ];

  return (
    <section className="mx-auto mt-24 w-full max-w-[1750px] px-10">

      {/* Gallery */}

      <div className="relative mx-auto h-[520px] max-w-[1550px]">

        <FloatingBadge
          icon="🩺"
          text="AI Health Scan"
          className="left-[10%] top-2"
        />

        <FloatingBadge
          icon="🐔"
          text="Live Monitoring"
          className="left-[30%] bottom-4"
        />

        <FloatingBadge
          icon="📊"
          text="Farm Overview"
          className="right-[12%] top-6"
        />

        <FloatingBadge
          icon="📋"
          text="Clinical Tools"
          className="right-[28%] bottom-2"
        />

        <div className="flex h-full items-center justify-center">

          {cards.map((card, index) => {

            const style = layout[index];

            return (

              <div
                key={card.title}
                className={`
                  relative
                  ${style.margin}
                  ${style.rotate}
                  ${style.translate}
                  ${style.scale}
                  transition-all
                  duration-500
                  ${
                    selectedCard === index
                      ? "z-30 scale-110"
                      : "z-10 hover:z-20 hover:-translate-y-4"
                  }
                `}
              >

                <HeroCard
                  image={card.image}
                  title={card.title}
                  badge={card.badge}
                  active={selectedCard === index}
                  onClick={() => setSelectedCard(index)}
                />

              </div>

            );

          })}

        </div>

      </div>

      {/* Dashboard */}

      <div className="mx-auto mt-24 max-w-6xl rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              {selected.title}
            </h2>

            <p className="mt-2 text-lg text-gray-500">
              Explore AI-powered insights for this module.
            </p>

          </div>

          <span className="rounded-full bg-[#EAF2FF] px-6 py-3 font-semibold text-[#2563EB]">
            {selected.badge}
          </span>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {selected.metrics.map((metric) => (

            <div
              key={metric.label}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <p className="text-sm text-gray-500">
                {metric.label}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                {metric.value}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}