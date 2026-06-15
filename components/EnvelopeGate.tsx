"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { couple } from "@/lib/data";

type GateState = "closed" | "opening" | "open";

export default function EnvelopeGate({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GateState>("closed");
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = state === "open" ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [state]);

  const handleOpen = () => {
    if (state !== "closed") return;
    setState("opening");

    // Create audio on user gesture — this is the fix for autoplay being blocked
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/song.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
    audioRef.current.play().then(() => setMusicPlaying(true)).catch(() => {});

    setTimeout(() => setState("open"), 2000);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.play();
      setMusicPlaying(true);
    }
  };

  return (
    <>
      {/* Page content always rendered underneath */}
      <div style={{ visibility: state === "open" ? "visible" : "hidden" }}>
        {children}
      </div>

      <AnimatePresence>
        {state !== "open" && (
          <motion.div
            key="envelope-gate"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ background: "linear-gradient(160deg, #1a0a10 0%, #3a0f1c 50%, #1a0a10 100%)" }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Subtle background texture */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center px-6 text-center">
              {/* Top script line */}
              <p className="font-script text-xl md:text-2xl text-gold/80 mb-3 tracking-wide">
                You are cordially invited
              </p>
              <p className="font-display text-xs uppercase tracking-[0.4em] text-ivory/40 mb-10">
                to the wedding of
              </p>

              {/* Envelope */}
              <button
                onClick={handleOpen}
                aria-label="Open invitation"
                className="relative focus:outline-none group"
                style={{ width: 300, height: 220, perspective: "1200px" }}
              >
                {/* Envelope body — cream/ivory */}
                <div
                  className="absolute inset-x-0 bottom-0 rounded-sm shadow-2xl"
                  style={{
                    height: "78%",
                    background: "linear-gradient(170deg, #f5ede0 0%, #ede0cb 100%)",
                    border: "1px solid #c9a84c",
                    zIndex: 2,
                  }}
                />

                {/* Bottom V fold */}
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: "40%",
                    background: "linear-gradient(170deg, #e8d5b5 0%, #dfc9a0 100%)",
                    clipPath: "polygon(0 100%, 100% 100%, 50% 0%)",
                    border: "1px solid #c9a84c",
                    zIndex: 3,
                  }}
                />

                {/* Side folds */}
                <div className="absolute inset-x-0 bottom-0" style={{ height: "78%", zIndex: 2, overflow: "hidden" }}>
                  <div style={{
                    position: "absolute", left: 0, top: 0, width: "50%", height: "100%",
                    background: "linear-gradient(135deg, #dfc9a0 0%, #e8d5b5 100%)",
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  }} />
                  <div style={{
                    position: "absolute", right: 0, top: 0, width: "50%", height: "100%",
                    background: "linear-gradient(225deg, #dfc9a0 0%, #e8d5b5 100%)",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                  }} />
                </div>

                {/* Flap — animates open */}
                <motion.div
                  className="absolute inset-x-0 top-0"
                  style={{
                    height: "55%",
                    background: "linear-gradient(170deg, #ede0cb 0%, #e0cdb5 100%)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    transformOrigin: "top center",
                    border: "1px solid #c9a84c",
                    zIndex: 5,
                  }}
                  animate={state === "opening" ? { rotateX: -160, opacity: 0 } : { rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Letter card rising out */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center px-4 rounded-sm shadow-lg"
                  style={{
                    bottom: "12%",
                    width: "76%",
                    height: "65%",
                    background: "#fffaf4",
                    border: "1px solid #d4af37",
                    zIndex: 1,
                  }}
                  animate={state === "opening" ? { y: -160, opacity: 1 } : { y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  <p className="font-script text-2xl text-wine leading-tight">
                    {couple.groomNickname} & {couple.brideNickname}
                  </p>
                  <div className="w-10 h-px bg-gold/50 my-2" />
                  <p className="font-display text-[9px] uppercase tracking-[0.25em] text-wine/50">
                    June 26 – 27, 2026
                  </p>
                </motion.div>

                {/* Wax seal SVG */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ bottom: "30%", zIndex: 6 }}
                  animate={state === "opening" ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="72" height="72" viewBox="0 0 72 72">
                    {/* Outer ring */}
                    <circle cx="36" cy="36" r="34" fill="#b8860b" />
                    <circle cx="36" cy="36" r="31" fill="#d4a017" />
                    <circle cx="36" cy="36" r="27" fill="#c8960c" />
                    {/* Inner face */}
                    <circle cx="36" cy="36" r="23" fill="#b8760a" />
                    {/* Decorative ring detail */}
                    <circle cx="36" cy="36" r="25" fill="none" stroke="#e8c44a" strokeWidth="0.8" strokeDasharray="3 2" />
                    {/* Monogram */}
                    <text x="36" y="41" textAnchor="middle" fontFamily="serif" fontSize="16" fill="#fff8e7" fontStyle="italic" fontWeight="bold">S&T</text>
                  </svg>
                </motion.div>
              </button>

              <motion.p
                className="mt-10 text-gold/60 text-xs uppercase tracking-[0.3em]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Tap the seal to open
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music toggle */}
      {state === "open" && (
        <button
          onClick={toggleMusic}
          aria-label={musicPlaying ? "Pause music" : "Play music"}
          className="fixed bottom-5 left-5 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-wine hover:scale-110 transition-transform"
          style={{ background: "linear-gradient(135deg, #d4af37, #f0d98c)" }}
        >
          {musicPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
