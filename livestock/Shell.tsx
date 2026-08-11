"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import WelcomeBanner from "./WelcomeBanner";

interface ShellProps {
  children: React.ReactNode;
  // Simulating data passed from your auth state
  userData: {
    name: string;
    role: string;
    image?: string;
  };
}

export default function Shell({ children, userData }: ShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-50 overflow-hidden font-sans text-gray-900 select-none">
      <Header
        userName={userData.name}
        roleLabel={userData.role}
        userImage={userData.image}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 flex flex-col bg-[#F8FAFC] overflow-y-auto relative">
          <WelcomeBanner userName={userData.name} userImage={userData.image} />
          {children}
        </main>
      </div>
    </div>
  );
}