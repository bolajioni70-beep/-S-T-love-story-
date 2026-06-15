"use client";

import { useState } from "react";
import { gift } from "@/lib/data";

export default function GiftSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(gift.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine to-wine-dark" />
      <div className="relative z-10 max-w-md w-full text-center fade-in-section">
        <p className="font-script text-3xl md:text-5xl gold-text mb-6">A Gift of Love</p>
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        <p className="font-body text-base md:text-lg text-ivory/90 leading-relaxed mb-8">
          {gift.note}
        </p>

        <div className="border-2 border-gold rounded-2xl p-6 bg-wine-dark/50">
          <p className="text-ivory/70 text-sm uppercase tracking-widest mb-1">Bank</p>
          <p className="text-ivory font-semibold mb-4">{gift.bank}</p>

          <p className="text-ivory/70 text-sm uppercase tracking-widest mb-1">Account Number</p>
          <button
            onClick={handleCopy}
            className="text-2xl font-display font-bold text-gold mb-4 tracking-widest hover:opacity-80 transition-opacity"
          >
            {gift.accountNumber}
          </button>
          {copied && <p className="text-xs text-gold mb-2">Copied!</p>}

          <p className="text-ivory/70 text-sm uppercase tracking-widest mb-1">Account Name</p>
          <p className="text-ivory font-semibold">{gift.accountName}</p>
        </div>
      </div>
    </section>
  );
}
