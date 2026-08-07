export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FaqItem[] = [
  {
    id: "hardware",
    question: "Do I need to buy extra hardware or ear tags?",
    answer: "No extra hardware is required. VetMate is 100% software-based. You can log symptoms, analyze photos, track herd records, and receive AI diagnostics using your smartphone or computer.",
  },
  {
    id: "accuracy",
    question: "How accurate is the AI image diagnostics?",
    answer: "Our clinical AI models achieve over 98% accuracy in identifying early symptoms and pathology patterns, cross-referencing your herd's health history with established veterinary standards.",
  },
  {
    id: "vet-sharing",
    question: "Can I share my farm records directly with my veterinarian?",
    answer: "Yes! You can instantly export treatment logs, generate health summary reports, or grant direct read-only access to your preferred vet clinic.",
  },
  {
    id: "offline",
    question: "What if I have poor internet connectivity on my farm?",
    answer: "VetMate features offline-first data logging. You can scan images and enter records without cell service, and everything will automatically sync as soon as you reconnect to internet.",
  },
  {
    id: "security",
    question: "Is my farm and livestock data kept private?",
    answer: "Absolutely. All health records and production statistics are fully encrypted with end-to-end security. Your data is strictly yours and will never be shared without your explicit consent.",
  },
];