export interface WorkStep {
  step: string; // e.g., "01"
  title: string;
  description: string;
  image?: string; // Path to image in /image/ or /rec/
}

export const stepsData: WorkStep[] = [
  {
    step: "01",
    title: "Connect Your Farm Data",
    description: "Sync smart ear tags, thermal cameras, or import your animal logs into the dashboard in just a few clicks.",
    image: "/image/step-setup.png"
  },
  {
    step: "02",
    title: "AI Analyzes Health 24/7",
    description: "Machine learning models process real-time telemetry, feeding behaviors, and movement patterns continuously.",
    image: "/rec/step-ai.png"
  },
  {
    step: "03",
    title: "Receive Instant Alerts",
    description: "Get smart notifications on mobile or desktop whenever abnormal temperature or behavior is flagged.",
    image: "/image/step-alert.png"
  },
  {
    step: "04",
    title: "Treat & Optimize Yield",
    description: "Apply suggested clinical treatments, log dosages, and review long-term farm analytics to maximize growth.",
    image: "/rec/step-action.png"
  }
];