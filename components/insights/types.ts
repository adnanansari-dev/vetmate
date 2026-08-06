export type TabKey = "visual" | "acoustic" | "passport" | "pharmacy";

export interface InsightTab {
  id: TabKey;
  label: string;
  badge: string;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string; // Points to /images/... or /rec/...
  statLabel: string;
  statValue: string;
}