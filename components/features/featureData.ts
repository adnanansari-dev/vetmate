export interface FeatureSection {
  id: string;
  tag: string;
  title: string;
  description: string;
  tagColor: string;
  popupDetails: {
    overview: string;
    highlights: string[];
    statLabel: string;
    statValue: string;
  };
}

export const featureSections: FeatureSection[] = [
  {
    id: "ai-health",
    tag: "AI DIAGNOSTICS",
    title: "AI Health Analysis",
    description: "Detect health issues before they become serious. Advanced machine learning algorithms analyze vital signs and early indicators to keep your herd healthy.",
    tagColor: "text-blue-600 bg-blue-50 border-blue-200",
    popupDetails: {
      overview: "Our proprietary AI models monitor thermal imaging, movement patterns, and feeding behavior to detect early pathology up to 48 hours before physical symptoms manifest.",
      highlights: [
        "Continuous automated health scoring",
        "Early fever & respiratory illness detection",
        "Integration with wearable livestock sensors"
      ],
      statLabel: "Early Detection Rate",
      statValue: "98.4%"
    }
  },
  {
    id: "smart-dashboard",
    tag: "CENTRAL MANAGEMENT",
    title: "Smart Farm Dashboard",
    description: "Monitor every animal, alert, and farm metric in one place. Get a single source of truth for your entire livestock operations.",
    tagColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
    popupDetails: {
      overview: "Consolidate all animal records, herd health histories, and environmental sensor readings into a unified, customizable command center.",
      highlights: [
        "Real-time herd counts & group filtering",
        "Customizable alert threshold settings",
        "Exportable compliance & veterinary logs"
      ],
      statLabel: "Time Saved / Day",
      statValue: "2.5 hrs"
    }
  },
  {
    id: "live-monitoring",
    tag: "REAL-TIME TELEMETRY",
    title: "Live Health Monitoring",
    description: "Track vital health data and receive instant alerts. Immediate notifications enable rapid response before critical conditions develop.",
    tagColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    popupDetails: {
      overview: "Stream live telemetry directly to your phone or desktop. Set automated triggers so farm staff are instantly notified of emergency events.",
      highlights: [
        "Instant SMS & Push Notifications",
        "24/7 continuous vital sign tracking",
        "Multi-user staff dispatch queue"
      ],
      statLabel: "Response Speed",
      statValue: "< 2 mins"
    }
  },
  {
    id: "vaccination-treatment",
    tag: "SCHEDULE MANAGEMENT",
    title: "Vaccination & Treatment",
    description: "Never miss a vaccine or medication schedule again. Digital logs and automated tracking ensure complete clinical compliance.",
    tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    popupDetails: {
      overview: "Automate complex dosing calendars, withdrawal period tracking, and veterinarian treatment plans across thousands of individual animals.",
      highlights: [
        "Automated dosage calculation based on weight",
        "Withdrawal period safety countdowns",
        "Direct vet record sync and sign-offs"
      ],
      statLabel: "Compliance Score",
      statValue: "100%"
    }
  },
  {
    id: "farm-analytics",
    tag: "PRODUCTIVITY INSIGHTS",
    title: "Farm Performance Analytics",
    description: "Measure productivity, growth, and overall herd performance. Benchmark your metrics against regional data to optimize operational yield.",
    tagColor: "text-purple-600 bg-purple-50 border-purple-200",
    popupDetails: {
      overview: "Transform daily operational data into actionable profitability strategies. Compare feed-conversion ratios and growth trends effortlessly.",
      highlights: [
        "Weight gain trajectory projection",
        "Regional health and yield benchmarking",
        "Feed efficiency optimization charts"
      ],
      statLabel: "Average Yield Growth",
      statValue: "+18%"
    }
  },
  {
    id: "disease-prediction",
    tag: "PREDICTIVE INTELLIGENCE",
    title: "AI Disease Prediction",
    description: "Predict potential outbreaks using AI and historical farm data. Proactive risk forecasting helps safeguard your animals from widespread risk.",
    tagColor: "text-rose-600 bg-rose-50 border-rose-200",
    popupDetails: {
      overview: "Analyze hyper-local weather shifts, regional outbreak reports, and historical herd records to forecast contagion risks before they spread.",
      highlights: [
        "Outbreak risk heatmaps",
        "Biosecurity quarantine protocol generator",
        "Automated veterinary alert sharing"
      ],
      statLabel: "Outbreak Reduction",
      statValue: "85%"
    }
  }
];