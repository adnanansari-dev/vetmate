export interface FarmerBenefit {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  shortDesc: string;
  icon: string;
  statValue: string;
  statLabel: string;
  popupDetails: {
    overview: string;
    highlights: string[];
  };
}

export const farmerBenefits: FarmerBenefit[] = [
  {
    id: "camera-health-scan",
    tag: "PHONE CAMERA AI",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "AI Visual Health Scan",
    shortDesc: "Point your phone camera at any animal. Advanced computer vision assesses body condition, gait, and early sickness indicators in seconds.",
    icon: "📱",
    statValue: "5 Seconds",
    statLabel: "Camera scan time to detect early illness indicators",
    popupDetails: {
      overview: "No extra equipment needed. VetMate's computer vision algorithms analyze video frames to detect subtle lameness, body weight changes, and facial stress cues automatically.",
      highlights: [
        "100% smartphone camera powered—zero hardware to buy or maintain",
        "Instant body condition scoring (BCS) and posture analysis",
        "Saves historic photo timelines for every animal in your herd"
      ]
    }
  },
  {
    id: "gps-pasture-pin",
    tag: "BUILT-IN PHONE GPS",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Smart Pasture Geo-Tagging",
    shortDesc: "Log herd locations effortlessly. The app drops accurate GPS pins whenever you scan animals during your daily farm walk.",
    icon: "📍",
    statValue: "0 Extra Cost",
    statLabel: "Uses your phone's built-in GPS location engine",
    popupDetails: {
      overview: "Simply tap or scan animals as you do your daily pasture rounds. The app tags exact coordinates to build an interactive grazing map without satellite collars.",
      highlights: [
        "Interactive pasture map with visual herd sighting history",
        "Offline GPS logging that syncs automatically when back in Wi-Fi range",
        "Share exact animal location pins directly with team members"
      ]
    }
  },
  {
    id: "acoustic-monitoring",
    tag: "AUDIO AI ANALYSIS",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Acoustic Symptom Detector",
    shortDesc: "Record 10 seconds of barn audio. AI filters ambient noise to flag coughing frequency, wheezing, and respiratory stress early.",
    icon: "🎙️",
    statValue: "94% Accuracy",
    statLabel: "Precision in detecting respiratory coughing patterns",
    popupDetails: {
      overview: "Place or hold your phone in the barn or shed. VetMate analyzes ambient audio waves to identify herd respiratory infections before they spread.",
      highlights: [
        "Detects hidden herd coughing spikes before physical symptoms show",
        "Works in high-noise environments using background noise suppression",
        "Generates simple sound analysis reports for your veterinarian"
      ]
    }
  },
  {
    id: "instant-tele-vet",
    tag: "DIRECT TELE-VET",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "1-Tap Vet Consultation",
    shortDesc: "Snap a photo of an issue and instantly share AI diagnostic notes with certified veterinarians for quick phone consultations.",
    icon: "🩺",
    statValue: "< 15 Min",
    statLabel: "Average response time for digital vet review",
    popupDetails: {
      overview: "Avoid unnecessary house-call fees. Send high-resolution photos, phone scan records, and AI notes straight to a large-animal vet.",
      highlights: [
        "Direct photo & video attachment with pre-filled AI symptom logs",
        "In-app video calling and digital prescription management",
        "Complete historical medical records stored right in your pocket"
      ]
    }
  }
];