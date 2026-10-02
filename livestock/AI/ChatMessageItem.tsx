"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Stethoscope, MapPin, ArrowRight, Pencil, Copy, Check } from "lucide-react";

export interface Vet {
  id: string;
  name: string;
  distance: string;
  clinic: string;
}

export interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  vets?: Vet[];
}

interface UserProfile {
  name?: string | null;
  image?: string | null;
}

interface ChatMessageItemProps {
  message: Message;
  user?: UserProfile;
  onEditMessage?: (id: string, newText: string) => void;
}

export default function ChatMessageItem({ message, user, onEditMessage }: ChatMessageItemProps) {
  const isAi = message.sender === "ai";
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(message.text);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveEdit = () => {
    if (onEditMessage && editText.trim()) {
      onEditMessage(message.id, editText);
    }
    setIsEditing(false);
  };

  return (
    <div className={`flex gap-3 items-end group ${isAi ? "justify-start" : "justify-end"}`}>
      {isAi && (
        <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm self-start">
          <Image
            src="/images/vetmate-icon.jpg"
            alt="VetMate AI"
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* AI Message */}
      {isAi ? (
        <div className="max-w-2xl rounded-2xl px-4 py-3 text-sm shadow-sm bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/60 dark:border-slate-700/60">
          <div className="whitespace-pre-wrap leading-relaxed">{message.text}</div>

          {message.vets && (
            <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 mb-2 text-xs font-bold text-slate-900 dark:text-white">
                <Stethoscope className="h-4 w-4 text-blue-600" />
                Registered Veterinarians Nearby
              </div>

              {message.vets.length === 0 ? (
                <div className="p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl text-xs text-slate-500 border border-slate-200/60 dark:border-slate-800">
                  No registered veterinarians connected in your area yet. Once vets join the portal, emergency requests will route directly to them.
                </div>
              ) : (
                message.vets.map((vet) => (
                  <div key={vet.id} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div>
                      <p className="text-sm font-semibold">{vet.name}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {vet.distance} ({vet.clinic})
                      </p>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                      Connect <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          <span className="block text-[10px] mt-1.5 text-right text-slate-400">
            {message.timestamp}
          </span>
        </div>
      ) : (
        /* User Message */
        <div className="flex items-center gap-2 relative">
          {/* Hover Menu: Timestamp, Copy, Pencil Edit */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-500 dark:text-slate-400 shadow-sm">
            <span>{message.timestamp}</span>
            <button
              onClick={handleCopy}
              title="Copy message"
              className="p-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              title="Edit prompt"
              className="p-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Pencil className="h-3 w-3" />
            </button>
          </div>

          {/* User Bubble */}
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
                className="bg-white dark:bg-slate-800 border border-blue-500 rounded-full px-4 py-2 text-sm text-slate-900 dark:text-white focus:outline-none"
                autoFocus
              />
              <button
                onClick={handleSaveEdit}
                className="text-xs font-semibold text-blue-600 hover:underline px-2"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-xs text-slate-400 hover:underline"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="bg-[#1e40af] text-white rounded-full px-5 py-2.5 text-sm font-medium shadow-sm">
              {message.text}
            </div>
          )}
        </div>
      )}

      {!isAi && (
        <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm self-end bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          ) : (
            user?.name?.charAt(0).toUpperCase() || "U"
          )}
        </div>
      )}
    </div>
  );
}