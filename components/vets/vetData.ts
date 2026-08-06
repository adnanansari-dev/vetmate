export interface VetBenefit {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  shortDesc: string;
  statValue: string;
  statLabel: string;
  popupDetails: {
    overview: string;
    highlights: string[];
  };
}

export const vetBenefits: VetBenefit[] = [
  {
    id: "qr-scan-diagnostics",
    tag: "INSTANT ANIMAL QR SCAN",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "1-Tap QR Health History",
    shortDesc: "Scan any animal's unique QR code to immediately reveal lifetime medical history, AI-identified symptoms, and historical diagnostic reports.",
    statValue: "1 Scan",
    statLabel: "Instant access to complete AI health records & history",
    popupDetails: {
      overview: "Eliminate manual patient lookup. Point your camera at an animal's unique QR code to immediately load full AI visual scans, acoustic logs, and previous treatments.",
      highlights: [
        "Instant breakdown of AI-identified illness risk factors",
        "Chronological medical records and vaccination logs",
        "Seamless patient sharing across mobile and desktop devices"
      ]
    }
  },
  {
    id: "verified-sos-emergency",
    tag: "VERIFIED VET NETWORK",
    tagColor: "bg-red-50 text-red-700 border-red-200",
    title: "Credentialed Onboarding & SOS",
    shortDesc: "Strict license verification ensures only certified practitioners join. Receive priority real-time emergency SOS alerts from local farms.",
    statValue: "100% Verified",
    statLabel: "Strict license & credential verification required",
    popupDetails: {
      overview: "Maintain high clinical standards. Every veterinarian undergoes license verification before accepting appointments or receiving local high-priority emergency calls.",
      highlights: [
        "Government/board license verification process",
        "Real-time emergency SOS push notifications with farm GPS coordinates",
        "Custom availability toggles for on-call emergency shifts"
      ]
    }
  },
  {
    id: "appointments-reports",
    tag: "CLINICAL WORKFLOW",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "Smart Bookings & Pre-Intake",
    shortDesc: "Manage consult schedules effortlessly. Every appointment arrives pre-loaded with AI intake notes and video observations from the farmer.",
    statValue: "< 3 Mins",
    statLabel: "Average pre-consultation review time",
    popupDetails: {
      overview: "Review structured case notes before stepping onto the farm or joining a video call. Farmers' pre-scanned media is automatically converted into clinical summaries.",
      highlights: [
        "Automated calendar syncing for field and tele-health visits",
        "Pre-analyzed video clips highlighting movement or skin issues",
        "One-click SOAP note charting and digital export"
      ]
    }
  },
  {
    id: "pharmacy-inventory-delivery",
    tag: "STOCK & PHARMACY LINK",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Medicine Stock & Pharmacy Network",
    shortDesc: "Monitor clinic inventory, dispatch digital prescriptions directly to nearby pharmacies, and track real-time medicine delivery alerts.",
    statValue: "Local Sync",
    statLabel: "Direct connection with nearest accredited pharmacies",
    popupDetails: {
      overview: "Keep your clinic supplied and streamline prescriptions. Locate nearest pharmacies with required inventory and track delivery statuses directly to the farm.",
      highlights: [
        "Real-time clinic medicine inventory and low-stock alerts",
        "1-tap digital e-prescription dispatch to local pharmacies",
        "Live delivery status tracking for urgent medical supplies"
      ]
    }
  }
];