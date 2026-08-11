"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

export default function GoogleOneTap() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "unauthenticated") return;

    // Load Google Identity Services script dynamically
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!window.google) return;

      // Initialize One Tap
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID || "",
        callback: async (response: { credential?: string }) => {
          if (response.credential) {
            await signIn("credentials", {
              credential: response.credential,
              redirect: true,
              callbackUrl: "/onboarding",
            });
          }
        },
      });

      // Display the prompt
      window.google.accounts.id.prompt();
    };

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://accounts.google.com/gsi/client"]'
      );
      if (existingScript) existingScript.remove();
    };
  }, [status]);

  return null; 
}


declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: Record<string, unknown>) => void;
          prompt: () => void;
        };
      };
    };
  }
}