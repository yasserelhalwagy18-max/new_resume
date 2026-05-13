import React, { useState, useRef, memo } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "motion/react";
import { portfolioData, Language } from "../data";

export const Contact = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].contact as any;
  const [isSplit, setIsSplit] = useState(false);

  // Magnetic effect logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mouseX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isSplit || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mouseX.set(x * 0.3); // Magnetic pull strength
    mouseY.set(y * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isEn = lang === "en";

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto relative min-h-[50vh] flex items-center justify-center">
      <motion.div
        animate={{
          scale: 1,
          opacity: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {!isSplit ? (
            <motion.button
              key="start-collab"
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsSplit(true)}
              style={{ x: mouseX, y: mouseY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative flex items-center justify-center w-full max-w-md py-8 rounded-full bg-[#D6C7A8] text-[#0A0A0A] font-medium hover:bg-[#E5D5B8] transition-colors overflow-hidden cursor-pointer shadow-lg"
            >
              <span className={`text-2xl md:text-4xl ${isEn ? 'tracking-tight' : 'tracking-normal'}`}>
                {isEn ? "Start Collaboration" : "شروع همکاری"}
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="split-links"
              initial={{ opacity: 0, width: "50%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              <motion.a
                initial={{ x: isEn ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
                href={t.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full sm:w-1/2 py-8 rounded-full bg-[#111111] border border-white/10 text-white hover:bg-white/5 hover:border-white/30 transition-all text-xl md:text-2xl group"
              >
                <span className="group-hover:scale-105 transition-transform duration-300 font-light">
                  WhatsApp
                </span>
              </motion.a>

              <motion.a
                initial={{ x: isEn ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.15 }}
                href={t.telegramUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full sm:w-1/2 py-8 rounded-full bg-[#111111] border border-white/10 text-white hover:bg-white/5 hover:border-white/30 transition-all text-xl md:text-2xl group"
              >
                <span className="group-hover:scale-105 transition-transform duration-300 font-light">
                  Telegram
                </span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});
