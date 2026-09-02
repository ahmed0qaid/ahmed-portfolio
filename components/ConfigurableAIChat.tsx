"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { AIChatWidget } from "@/components/AIChatWidget";

export function ConfigurableAIChat({ greeting, greetingEn, defaultOpen }: { greeting: string; greetingEn: string; defaultOpen: boolean }) {
  const [activated, setActivated] = useState(defaultOpen);

  if (!activated) {
    return (
      <button
        id="chat"
        onClick={() => setActivated(true)}
        className="chat-widget fixed bottom-6 z-50 grid h-14 w-14 place-items-center rounded-[1.25rem] bg-cyanBrand text-slate-950 shadow-glow transition hover:-translate-y-1"
        aria-label="Open AI chat"
      >
        <Bot className="h-6 w-6" />
      </button>
    );
  }

  return <AIChatWidget greeting={greeting} greetingEn={greetingEn} />;
}
