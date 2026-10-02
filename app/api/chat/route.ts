import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        text: "🚨 GEMINI_API_KEY is missing from your .env.local file!",
      });
    }

    const body = await req.json().catch(() => ({}));
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Direct REST API Call (Bypasses outdated/breaking SDKs)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;
    const googleRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    const data = await googleRes.json();

    if (!googleRes.ok) {
      const errorMsg = data?.error?.message || "Google API Error";
      console.error("Direct Google API Error:", data);
      return NextResponse.json({
        text: `🚨 GOOGLE API ERROR (${googleRes.status}): ${errorMsg}`,
      });
    }

    // Extract text from the REST response payload
    const responseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response text received.";

    return NextResponse.json({ text: responseText });
  } catch (error) {
    console.error("Server Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json({
      text: `Sorry, I ran into an issue connecting to Gemini: ${errorMessage}`,
    });
  }
}