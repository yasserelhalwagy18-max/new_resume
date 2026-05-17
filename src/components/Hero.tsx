import { memo, useMemo } from "react";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { portfolioData, Language } from "../data";

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isFa = lang === "fa";

  const titleLines = useMemo(() => t.title.split("\n"), [t.title]);

  return (
    <section
      className="min-h-screen flex items-end pb-16 padding-bottom: calc(env(safe-area-inset-bottom) + 4rem) md:pb-24 pt-[80px] px-6 relative overflow-hidden bg-[#0A0A0A]"
      style={{ minHeight: "100dvh" }}
    >
      {/* Playful Geometric Accent — Saul Bass Energy */}
      <div className="absolute top-[12%] end-[8%] md:end-[12%] w-[100px] h-[100px] md:w-[160px] md:h-[160px] opacity-80 pointer-events-none z-[1]">
        <motion.div
          initial={{ rotate: 15, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-[#D4A017]"
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
        />
      </div>

      {/* Secondary Geometric — Teal Circle Fragment */}
      <div className="absolute bottom-[25%] start-[8%] md:start-[12%] w-[60px] h-[60px] md:w-[100px] md:h-[100px] pointer-events-none z-[1]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full rounded-full border-[3px] border-[#2A9D8F]"
        />
      </div>

      {/* Rose Diagonal Stripe */}
      <div className="absolute top-[45%] start-[5%] md:start-[8%] w-[2px] h-[100px] md:h-[160px] bg-[#C1666B] opacity-30 rotate-45 pointer-events-none z-[1]" />

      {/* Main Content — Bottom-Anchored for Drama */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Role Tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-block text-[11px] md:text-xs text-[#D4A017] uppercase tracking-widest mb-6 md:mb-8 font-medium"
        >
          {t.role}
        </motion.span>

        {/* Title — Massive, Tight, Unignorable */}
        <h1
          className={`text-hero-display text-[#F4F1EA] mb-8 md:mb-10 ${isFa ? "leading-[1.15] font-bold" : "leading-[0.95] font-light tracking-tighter"}`}
          dir={isFa ? "rtl" : "ltr"}
        >
          <span className="sr-only">{t.title.replace("\n", " ")}</span>
          <div className="flex flex-col" aria-hidden="true">
            {titleLines.map((line, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: "110%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.5 + index * 0.15,
                  }}
                  className="inline-block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </div>
        </h1>

        {/* Description — One Line Only */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className={`text-white/60 max-w-lg mb-10 md:mb-12 ${isFa ? "text-base leading-[2]" : "text-body-lg"}`}
        >
          {t.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary group">
            {t.ctaPrimary}
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
          <a href="#contact" className="btn-ghost">
            {t.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0A0A0A] z-20 pointer-events-none" />
    </section>
  );
});
