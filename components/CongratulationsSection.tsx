"use client";

import { useState } from "react";
import { couple } from "@/lib/data";

type Message = { name: string; text: string };

export default function CongratulationsSection() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { name: "Aunty Funke", text: "God really did it! May your home be filled with laughter and love always. 🙏❤️" },
    { name: "Dami & Segun", text: "From hostel charging points to forever — we've always known this was meant to be!" },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !text.trim()) return;
    setMessages((prev) => [{ name, text }, ...prev]);
    setName("");
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine to-wine-dark" />
      <div className="relative z-10 max-w-lg w-full text-center fade-in-section">

        <p className="font-script text-3xl md:text-5xl gold-text mb-2">Well Wishes</p>
        <div className="w-24 h-px bg-gold mx-auto mb-4" />
        <p className="text-ivory/70 text-sm mb-10">
          Leave a message for {couple.groomNickname} & {couple.brideNickname}
        </p>

        {/* Input */}
        <div className="space-y-3 mb-10 text-left">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-gold/40 bg-wine-dark/40 px-4 py-3 text-ivory placeholder-ivory/40 focus:border-gold outline-none text-sm"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Write your congratulations..."
            className="w-full rounded-xl border border-gold/40 bg-wine-dark/40 px-4 py-3 text-ivory placeholder-ivory/40 focus:border-gold outline-none text-sm resize-none"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-full font-display font-bold text-wine text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #A8841F 0%, #F0D98C 50%, #A8841F 100%)" }}
          >
            {submitted ? "Sent with love ♡" : "Send Message"}
          </button>
        </div>

        {/* Messages */}
        <div className="space-y-4 text-left max-h-[400px] overflow-y-auto pr-1">
          {messages.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl px-5 py-4"
              style={{ background: "rgba(255,248,240,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <p className="text-gold font-display font-semibold text-sm mb-1">{m.name}</p>
              <p className="text-ivory/80 text-sm leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
