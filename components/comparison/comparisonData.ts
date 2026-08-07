export interface ComparisonItem {
  feature: string;
  traditional: boolean;
  traditionalNote: string;
  vetMate: boolean;
  vetMateNote: string;
}

export const comparisonData: ComparisonItem[] = [
  {
    feature: "Zero Hardware Required",
    traditional: false,
    traditionalNote: "Requires expensive ear tags & collars",
    vetMate: true,
    vetMateNote: "100% software — works with your smartphone",
  },
  {
    feature: "AI Photo Disease Scan",
    traditional: false,
    traditionalNote: "Manual diagnosis after symptoms worsen",
    vetMate: true,
    vetMateNote: "Snap a photo for instant illness analysis",
  },
  {
    feature: "Setup Cost & Time",
    traditional: false,
    traditionalNote: "High hardware costs & days of setup",
    vetMate: true,
    vetMateNote: "Zero hardware costs & instant account setup",
  },
  {
    feature: "Smart Dosage Calculator",
    traditional: false,
    traditionalNote: "Manual pen-and-paper dosage math",
    vetMate: true,
    vetMateNote: "Automated weight-based dosage & safety timers",
  },
  {
    feature: "24/7 AI Clinical Assistant",
    traditional: false,
    traditionalNote: "Wait for vet callbacks or clinic hours",
    vetMate: true,
    vetMateNote: "Instant guidance & protocol suggestions anytime",
  },
];