import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VetMate",
  description:
    "AI-powered livestock healthcare platform for livestock keepers and veterinarians.",
  icons: {
    icon: "/images/main-logo.png",
    shortcut: "/images/main-logo.png",
    apple: "/images/main-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}