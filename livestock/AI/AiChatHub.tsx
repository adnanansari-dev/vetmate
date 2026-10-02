"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Camera, Send, Mic, MicOff, AudioWaveform, 
  Loader2, HelpCircle 
} from "lucide-react";

import WelcomeHero from "./WelcomeHero";
import ChatMessageItem, { Message, Vet } from "./ChatMessageItem";
import ThinkingIndicator from "./ThinkingIndicator";

interface UserProfile {
  name?: string | null;
  image?: string | null;
}

export default function AiChatHub({ user }: { user?: UserProfile }) {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  const [isListeningAudio, setIsListeningAudio] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const registeredVets: Vet[] = [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || prompt;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setPrompt("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSend }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP status ${res.status}`);
      }

      const data = await res.json();

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: data.text || "Sorry, I could not process your request right now.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        vets: registeredVets,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Failed to fetch response:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "There was an error communicating with VetMate AI. Please check your backend endpoint `/api/chat` and verify your API keys.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditMessage = (id: string, newText: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, text: newText } : msg))
    );
  };

  return (
    <div className="h-full flex flex-col justify-between -m-6 p-6 overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800 shrink-0">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">VetMate AI</h2>
          <p className="text-xs text-slate-500">Smart Livestock Health & Farm Assistant</p>
        </div>

        {isLoading ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
            Working...
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Ready
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.length === 0 ? (
          <WelcomeHero onSelectTopic={(text) => handleSendMessage(text)} />
        ) : (
          messages.map((msg) => (
            <ChatMessageItem 
              key={msg.id} 
              message={msg} 
              user={user} 
              onEditMessage={handleEditMessage} 
            />
          ))
        )}

        {isLoading && <ThinkingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 shrink-0 space-y-2">
        {isListeningAudio && (
          <div className="p-2.5 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 rounded-xl flex items-center justify-between text-xs font-semibold border border-blue-200 dark:border-blue-800 animate-pulse">
            <span className="flex items-center gap-2">
              <AudioWaveform className="h-4 w-4" /> Listening for coughing or respiratory symptoms...
            </span>
            <button onClick={() => setIsListeningAudio(false)} className="hover:underline">
              Stop
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-2 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
          <button 
            title="Scan image with vision AI"
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <Camera className="h-5 w-5" />
          </button>

          <button 
            title="Listen for coughing or sound symptoms"
            onClick={() => setIsListeningAudio((prev) => !prev)}
            className={`p-2 rounded-xl transition-colors ${
              isListeningAudio 
                ? "text-red-600 bg-red-50 dark:bg-red-950/30" 
                : "text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-400 dark:hover:bg-slate-800"
            }`}
          >
            <AudioWaveform className="h-5 w-5" />
          </button>

          <button 
            title="Voice to text input"
            onClick={() => setIsRecordingVoice((prev) => !prev)}
            className={`p-2 rounded-xl transition-colors ${
              isRecordingVoice 
                ? "text-blue-600 bg-blue-100 dark:bg-blue-950/50" 
                : "text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-400 dark:hover:bg-slate-800"
            }`}
          >
            {isRecordingVoice ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>

          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder={isRecordingVoice ? "Listening to your voice..." : "Ask VetMate AI or command your farm..."}
            disabled={isLoading}
            className="flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400 px-2 dark:text-white disabled:opacity-50"
          />

          <button 
            onClick={() => handleSendMessage()}
            disabled={isLoading || !prompt.trim()}
            className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto text-xs pt-1">
          <span className="text-slate-400 font-semibold flex items-center gap-1 shrink-0">
            <HelpCircle className="h-3.5 w-3.5" /> Quick Search:
          </span>
          <button 
            onClick={() => handleSendMessage("How do I scan an animal image for illness?")}
            disabled={isLoading}
            className="shrink-0 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all disabled:opacity-50"
          >
            Image Diagnostics
          </button>
          <button 
            onClick={() => handleSendMessage("How does the sound and cough detector work?")}
            disabled={isLoading}
            className="shrink-0 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all disabled:opacity-50"
          >
            Audio & Cough Detection
          </button>
          <button 
            onClick={() => handleSendMessage("How can I contact registered veterinarians in an emergency?")}
            disabled={isLoading}
            className="shrink-0 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all disabled:opacity-50"
          >
            Emergency Vet Search
          </button>
        </div>
      </div>
    </div>
  );
}