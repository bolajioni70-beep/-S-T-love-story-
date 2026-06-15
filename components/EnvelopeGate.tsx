"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { couple } from "@/lib/data";

type GateState = "closed" | "opening" | "open";

export default function EnvelopeGate({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GateState>("closed");
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (state !== "open") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [state]);

  const handleOpen = () => {
    if (state !== "closed") return;
    setState("opening");

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => {});
    }

    setTimeout(() => setState("open"), 1800);
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
      <audio ref={audioRef} src="/audio/song.mp3" loop preload="auto" />

      {children}

      <AnimatePresence>
        {state !== "open" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-wine"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -left-32 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center px-6 text-center">
              <p className="font-script text-2xl md:text-3xl text-gold mb-6">
                You are cordially invited
              </p>

              <button
                onClick={handleOpen}
                aria-label="Open invitation"
                className="relative w-[280px] h-[200px] sm:w-[340px] sm:h-[240px] focus:outline-none"
                style={{ perspective: "1200px" }}
              >
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-[8%] w-[85%] h-[80%] bg-ivory rounded-sm shadow-xl flex flex-col items-center justify-center px-4 border border-gold/40"
                  animate={
                    state === "opening"
                      ? { y: -180, scale: 1.05 }
                      : { y: 0, scale: 1 }
                  }
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  style={{ zIndex: 1 }}
                >
                  <p className="font-script text-3xl text-wine">
                    {couple.groomNickname} &amp; {couple.brideNickname}
                  </p>
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-wine/60 mt-2">
                    Tap to unveil our story
                  </p>
                </motion.div>

                <div
                  className="absolute inset-x-0 bottom-0 h-[75%] rounded-sm border-2 border-gold bg-gradient-to-b from-wine-light to-wine"
                  style={{ zIndex: 2 }}
                />

                <motion.div
                  className="absolute inset-x-0 top-0 h-[60%] border-2 border-gold bg-gradient-to-b from-wine to-wine-light"
                  style={{
                    zIndex: 3,
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    transformOrigin: "top center",
                  }}
                  animate={state === "opening" ? { rotateX: 180 } : { rotateX: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center shadow-lg border border-gold-dark"
                  style={{ zIndex: 4 }}
                  animate={
                    state === "opening"
                      ? { scale: 0, opacity: 0, rotate: 45 }
                      : { scale: 1, opacity: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <span className="font-script text-xl text-wine">S&amp;T</span>
                </motion.div>
              </button>

              <p className="mt-8 text-gold/80 text-sm uppercase tracking-[0.25em] animate-pulse">
                Tap the envelope to begin
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {state === "open" && (
        <button
          onClick={toggleMusic}
          aria-label={musicPlaying ? "Pause music" : "Play music"}
          className="fixed bottom-5 left-5 z-40 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg text-wine hover:scale-105 transition-transform"
        >
          {musicPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
