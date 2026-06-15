"use client";

import { useState, useEffect } from "react";
import { countdownTarget } from "@/lib/data";

function getTimeLeft() {
  const target = new Date(countdownTarget).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-wine via-wine-dark to-wine" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center fade-in-section">
        <p className="font-script text-3xl md:text-4xl gold-text mb-3">Counting down to</p>
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-10 uppercase tracking-wide">
          Our Forever
        </h2>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-xl border-2 border-gold bg-wine-dark/60 shadow-lg"
            >
              <span className="font-display text-2xl md:text-4xl font-bold text-gold">
                {unit.value}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-ivory/70 mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
