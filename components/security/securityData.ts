export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string; // Type identifier for SVG rendering
}

export const securityFeatures: SecurityFeature[] = [
  {
    id: "protected-records",
    title: "Protected Health Records",
    description: "All medical histories and production data are stored with end-to-end encryption and role-based access for farm owners and veterinarians.",
    icon: "shield"
  },
  {
    id: "implementation-support",
    title: "Implementation Support",
    description: "Our specialists help you migrate legacy paper records into digital profiles, ensuring a smooth transition for your entire operation.",
    icon: "support"
  },
  {
    id: "data-sovereignty",
    title: "Data Sovereignty",
    description: "Maintain full control over your farm's information with secure cloud hosting and regional data residency that respects your privacy.",
    icon: "globe"
  }
];