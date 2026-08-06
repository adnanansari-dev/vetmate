import { InsightTab } from "./types";

export const INSIGHTS_TABS: InsightTab[] = [
  {
    id: "visual",
    label: "Computer Vision",
    badge: "CAM SCAN",
    title: "Gait & Body Condition Assessment",
    description: "Detects lameness, lesion severity, and Body Condition Score (BCS) in real-time using standard mobile camera footage.",
    mediaType: "image",
    mediaSrc: "/images/visual-scan.png", // Place file at: public/images/visual-scan.png
    statLabel: "Gait Symmetry",
    statValue: "72% (Mild Lameness)",
  },
  {
    id: "acoustic",
    label: "Acoustic Audio",
    badge: "BARN MIC",
    title: "Respiratory Distress & Cough Detection",
    description: "Monitors ambient audio 24/7 to log coughing spikes, wheezing patterns, and early Bovine Respiratory Disease indicators.",
    mediaType: "video",
    mediaSrc: "/rec/acoustic-scan.mp4", // Place file at: public/rec/acoustic-scan.mp4
    statLabel: "24h Cough Spikes",
    statValue: "18 (High Risk)",
  },
  {
    id: "passport",
    label: "QR Passport",
    badge: "INSTANT EHR",
    title: "Lifetime Medical History at a Glance",
    description: "Scans animal ear-tags to load verified electronic health records, past vaccination boosters, and antibiotic history.",
    mediaType: "image",
    mediaSrc: "/images/qr-passport.png", // Place file at: public/images/qr-passport.png
    statLabel: "EHR Status",
    statValue: "100% Verified",
  },
  {
    id: "pharmacy",
    label: "Pharmacy Sync",
    badge: "LIVE INVENTORY",
    title: "Automated Local Medicine Matching",
    description: "Cross-checks required prescriptions with nearest connected pharmacies via auto-synced Google Sheets & ERP databases.",
    mediaType: "image",
    mediaSrc: "/images/pharmacy-sync.png", // Place file at: public/images/pharmacy-sync.png
    statLabel: "Nearest Stock",
    statValue: "3.2 km • 42 Units",
  },
];