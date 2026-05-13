import { useState, useEffect, memo, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";
import { ArrowDownRight, ArrowDownLeft } from "lucide-react";
import { portfolioData, Language } from "../data";
import { CinematicParticles } from "./CinematicParticles";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { heavySpring } from "../utils/physics";

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isFa = lang === "fa";
  const prefersReduced = usePrefersReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 50, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax shifts
  const layer2X = useTransform(springX, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 20}%`);
  const layer2Y = useTransform(springY, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 20}%`);
  const layer3X = useTransform(springX, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 15}%`);
  const layer3Y = useTransform(springY, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 15}%`);
  const layer1X = useTransform(springX, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 8}%`);
  const layer1Y = useTransform(springY, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 8}%`);
  const layer4X = useTransform(springX, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 5}%`);
  const layer4Y = useTransform(springY, (v) => prefersReduced ? "0%" : `${(v - 0.5) * 5}%`);

  const springXPercent = useTransform(springX, (v) => v * 100);
  const springYPercent = useTransform(springY, (v) => v * 100);
  const maskImage = useMotionTemplate`radial-gradient(600px circle at ${springXPercent}% ${springYPercent}%, black 0%, transparent 100%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleLines = useMemo(() => t.title.split("\n"), [t.title]);
  const firstLineWords = titleLines[0].split(" ");
  const firstTwoWords = firstLineWords.slice(0, 2).join(" ");
  const remainingFirstLine = firstLineWords.slice(2).join(" ");

  return (
    <section className="min-h-screen flex items-center pt-[72px] px-6 relative overflow-hidden section-forte bg-[#08090A]" style={{ minHeight: '100dvh' }}>
      {/* Layer 4: Dust Field (Canvas) */}
      <motion.div
        style={{ x: layer4X, y: layer4Y, WebkitMaskImage: maskImage, maskImage }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      >
        <CinematicParticles
          centerX={0.2}
          centerY={0.5}
          mouseX={mouseX}
          mouseY={mouseY}
          isRTL={isFa}
        />
      </motion.div>

      {/* Hero Visual Composition Container (Left-third focus) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute inset-0 z-[2] pointer-events-none hidden lg:block"
        style={{ WebkitMaskImage: maskImage, maskImage }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">

          {/* Layer 1: God Rays */}
          <motion.div
            style={{ x: layer1X, y: layer1Y }}
            animate={prefersReduced ? {} : { rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 hidden md:flex items-center justify-center opacity-[0.08] mix-blend-screen will-change-transform"
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 0deg, #D6C7A8 45deg, transparent 90deg, #f59e0b 135deg, transparent 180deg, #D6C7A8 225deg, transparent 270deg, #f59e0b 315deg, transparent 360deg)",
                maskImage: "radial-gradient(circle, black 20%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 70%)"
              }}
            />
          </motion.div>

          {/* Layer 2: Primary Glass Lens */}
          <motion.div
            style={{ x: layer2X, y: layer2Y }}
            animate={prefersReduced ? {} : { rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <div className="relative w-[420px] h-[420px] rounded-full border border-[#D6C7A8]/15 backdrop-blur-[40px] saturate-[180%] shadow-[inset_0_0_80px_rgba(214,199,168,0.08)] overflow-hidden">
              {/* Texture Layer to make blur visible */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/[0.03] to-transparent pointer-events-none" />

              {/* Chromatic Aberration Pseudo-element */}
              <div className="absolute -inset-[1px] hidden md:block rounded-full mix-blend-screen opacity-50">
                <div className="absolute inset-0 rounded-full border-l-2 border-red-500/20 -translate-x-[2px]" />
                <div className="absolute inset-0 rounded-full border-r-2 border-cyan-500/20 translate-x-[2px]" />
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Secondary Lens */}
          <motion.div
            style={{ x: layer3X, y: layer3Y }}
            animate={prefersReduced ? {} : { rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <div className="w-[280px] h-[280px] rounded-full border border-[#D6C7A8]/08 bg-white/[0.01]" />
          </motion.div>

          {/* Lens Reflection (Center Dot) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500/20 rounded-full blur-[2px]" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-6">
        {/* Centered Text Container */}
        <div className="flex flex-col items-center text-center w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heavySpring, delay: 0.2 }}
            className={`text-[12px] md:text-xs text-amber-500/70 uppercase tracking-widest mb-8 block ${isFa ? "tracking-normal" : ""}`}
          >
            {t.role}
          </motion.span>

          <h1
            className={`text-[clamp(4rem,10vw,8rem)] leading-[1] text-[#F3F1EB] pb-6`}
            dir={isFa ? "rtl" : "ltr"}
          >
            <span className="sr-only">{t.title}</span>
            <div className="flex flex-col" aria-hidden="true">
              {titleLines.map((line, index) => (
                <span key={index} className={`inline-block overflow-hidden ${isFa && index > 0 ? "-mt-4 md:-mt-8" : ""}`}>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...heavySpring, delay: 0.4 + (index * 0.2) }}
                    className="inline-block"
                  >
                  {index === 0 && !isFa ? (
                    <>
                      <span className="font-thin">{firstTwoWords} </span>
                      <span className="font-light">{remainingFirstLine}</span>
                    </>
                  ) : (
                    <span className={isFa ? "font-normal" : "font-light"}>{line}</span>
                  )}
                  </motion.span>
                </span>
              ))}
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...heavySpring, delay: 0.8 }}
            className="flex justify-center w-full"
          >
            <a href="#projects" className="btn-primary group">
              {t.ctaPrimary}
              {isFa ? (
                <ArrowDownLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-hover:translate-y-px" />
              ) : (
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-px" />
              )}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero to About Bridge Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#08090A] z-20 pointer-events-none" />
    </section>
  );
});
