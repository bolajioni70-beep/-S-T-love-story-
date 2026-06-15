"use client";

import { useState } from "react";
import { couple } from "@/lib/data";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("Yes, I'll be there");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    setError("");

    const text = `Hello! RSVP for ${couple.groomNickname} & ${couple.brideNickname}'s wedding.

Name: ${name}
Attending: ${attending}
Number of Guests: ${guests}
Message: ${message || "N/A"}`;

    const link = `https://wa.me/${couple.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark to-wine" />
      <div className="relative z-10 max-w-md w-full text-center fade-in-section">
        <p className="font-script text-3xl md:text-5xl gold-text mb-2">RSVP</p>
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        <p className="text-ivory/80 mb-8">
          Kindly let us know if you&apos;ll be celebrating with us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {error && (
            <p role="alert" className="text-gold text-sm bg-wine-dark/60 border border-gold/40 p-3 rounded-xl">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm uppercase tracking-widest text-ivory/70 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border-2 border-gold/40 bg-wine-dark/40 px-4 py-3 text-ivory placeholder-ivory/40 focus:border-gold outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-widest text-ivory/70 mb-2">
              Will You Attend?
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full rounded-xl border-2 border-gold/40 bg-wine-dark/40 px-4 py-3 text-ivory outline-none focus:border-gold"
            >
              <option>Yes, I&apos;ll be there</option>
              <option>Sadly, I can&apos;t make it</option>
              <option>Still not sure</option>
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-widest text-ivory/70 mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-xl border-2 border-gold/40 bg-wine-dark/40 px-4 py-3 text-ivory focus:border-gold outline-none"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-widest text-ivory/70 mb-2">
              Well Wishes
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded-xl border-2 border-gold/40 bg-wine-dark/40 px-4 py-3 text-ivory placeholder-ivory/40 focus:border-gold outline-none"
              placeholder="Leave a message for the couple..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-wine font-display font-bold py-4 rounded-full hover:bg-gold-light transition-colors uppercase tracking-widest"
          >
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
