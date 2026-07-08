import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./IntroAnimation.css";

// Blockbuster Cinematic Typographic Trailer Sequence
// Sequence:
// 0. "HII." on Pure White Screen (~1.2s)
// 1. "WE." on Pure Black Screen (~1.1s)
// 2. "ARE THE TEAM" (~1.3s)
// 3. CloudsCanopy Logo & Brand Reveal (~2.4s)
// 4. "READY TO SERVE YOU" (~1.4s)
// 5. "LET'S GO!" (~1.2s)
// 6. Heartwarming Question dead center (~4.5s)
// 7. Smooth transition to the homepage

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState("hii"); // "hii" -> "we" -> "team" -> "logo" -> "ready" -> "letsgo" -> "quote" -> "done"

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("we"), 1200),
      setTimeout(() => setStage("team"), 2300),
      setTimeout(() => setStage("logo"), 3600),
      setTimeout(() => setStage("ready"), 6000),
      setTimeout(() => setStage("letsgo"), 7400),
      setTimeout(() => {
        setStage("done");
        onComplete?.();
      }, 9600),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, [onComplete]);

  if (stage === "done") return null;

  // Generate floating cyber dust motes for luxury atmosphere
  const particles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 6 + 6,
    delay: Math.random() * 3,
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="intro-overlay"
        style={{
          backgroundColor: stage === "hii" ? "#ffffff" : "#000000",
          transition: "background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ambient Studio FX Layer on Pure Black (only shown after HII white screen) */}
        {stage !== "hii" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            {/* Breathing Ambient Spotlights */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "2s" }} />

            {/* Sweeping Laser Scan Line */}
            <div className="scan-beam" />

            {/* Floating Cyber Dust Motes */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-accent/40"
                style={{
                  width: p.size,
                  height: p.size,
                  left: p.left,
                  top: p.top,
                }}
                animate={{
                  y: [0, -60, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Center Screen Content */}
        <div className="intro-content">
          <AnimatePresence mode="wait">
            {/* Stage 0: HII (White Screen) */}
            {stage === "hii" && (
              <motion.div
                key="hii-stage"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center relative z-20"
              >
                <h1
                  className="font-heading font-black text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] tracking-tighter text-black drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                  style={{ fontFamily: '"Sora", sans-serif', color: "#000000" }}
                >
                  HII<span className="text-[#3b5d43] animate-pulse">.</span>
                </h1>
              </motion.div>
            )}

            {/* Stage 1: WE. */}
            {stage === "we" && (
              <motion.div
                key="we-stage"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center relative z-10"
              >
                <h1 className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  WE<span className="text-accent animate-pulse">.</span>
                </h1>
              </motion.div>
            )}

            {/* Stage 2: ARE THE TEAM */}
            {stage === "team" && (
              <motion.div
                key="team-stage"
                initial={{ opacity: 0, scale: 0.85, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center gap-5 relative z-10 px-6 text-center"
              >
                <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase drop-shadow-[0_0_35px_rgba(0,0,0,0.9)]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  ARE THE <span className="shimmer-text">TEAM</span>
                </h1>
                <div className="w-28 h-1 bg-accent rounded-full animate-pulse shadow-[0_0_15px_#6B8F71]" />
              </motion.div>
            )}

            {/* Stage 3: LOGO REVEAL */}
            {stage === "logo" && (
              <motion.div
                key="logo-stage"
                initial={{ opacity: 0, scale: 1.15, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="intro-logo"
              >
                {/* 3D Logo Reveal with Rotating Energy Rings */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 mb-4 relative flex items-center justify-center">
                  <div className="energy-ring" />
                  <div className="energy-ring-inner" />
                  <div className="absolute inset-0 bg-accent/40 blur-2xl rounded-full animate-pulse" />
                  <img src="/CloudsCanopy-logo.png" alt="CloudsCanopy" className="w-full h-full object-contain relative z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]" />
                </div>

                <h1 className="intro-logo-text shimmer-text">CloudsCanopy</h1>
                <p className="intro-logo-tag">Engineering Digital Solutions That Move Businesses Forward</p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.3em] font-semibold text-accent/80 shadow-glow-green/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  System Initializing
                </motion.div>
              </motion.div>
            )}

            {/* Stage 4: READY TO SERVE YOU */}
            {stage === "ready" && (
              <motion.div
                key="ready-stage"
                initial={{ opacity: 0, scale: 0.85, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center text-center px-6 relative z-10"
              >
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase mb-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  READY TO <span className="text-accent drop-shadow-[0_0_30px_rgba(107,143,113,0.8)]">SERVE YOU</span>
                </h1>
                <p className="text-text-secondary text-xs sm:text-sm font-mono uppercase tracking-[0.3em]">
                  [ Engineering Next-Gen Digital Products ]
                </p>
              </motion.div>
            )}

            {/* Stage 5: LET'S GO! */}
            {stage === "letsgo" && (
              <div key="letsgo-container" className="relative w-full h-full flex items-center justify-center">
                {/* White Flash Effect Layer */}
                <motion.div
                  key="flash-effect"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="fixed inset-0 bg-white z-[99] pointer-events-none"
                />
                
                {/* Text animation appearing extremely fast (like a flash of text) */}
                <motion.div
                  key="letsgo-stage"
                  initial={{ opacity: 0, scale: 0.4, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.4, filter: "blur(12px)" }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center relative z-10"
                >
                  <div className="absolute inset-0 bg-accent/35 blur-3xl rounded-full animate-ping pointer-events-none" />
                  <h1 className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter shimmer-text drop-shadow-[0_0_50px_rgba(107,143,113,0.9)]" style={{ fontFamily: '"Sora", sans-serif' }}>
                    LET'S GO!
                  </h1>
                </motion.div>
              </div>
            )}


          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
