"use client";

import Shell from "@/livestock/Shell";

export default function LivestockDashboardPage() {
  // Mock data representing what you pull from onboarding/login
  const sessionData = {
    name: "Alex Mercer",
    role: "Livestock Keeper",
    image: "", // Add a URL here if you want to test the custom image
  };

  return (
    <Shell userData={sessionData}>
      <div className="flex-1 flex items-center justify-center p-6 w-full h-full">
        {/* Placeholder for HomeChat.tsx */}
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl max-w-2xl w-full text-center hover:-translate-y-1 transition-transform duration-500">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 text-[#003366] flex items-center justify-center mx-auto mb-6 shadow-sm border border-sky-100">
             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-[#003366] mb-3">AI Chat Hub Ready</h2>
          <p className="text-gray-500 mb-6">
            The shell layout is complete with animated hover states, dynamic user props, and your custom SVG logo.
          </p>
          <div className="flex justify-center gap-3">
             <span className="px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full border border-sky-200">Interactive</span>
             <span className="px-4 py-1.5 bg-[#003366] text-white text-sm font-semibold rounded-full shadow-md hover:bg-sky-800 transition-colors cursor-pointer">Start Setup</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}