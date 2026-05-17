import { memo, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { portfolioData, Language } from "../data";

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isFa = lang === "fa";

  const titleLines = useMemo(() => t.title.split("\n").slice(0, 2), [t.title]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: import("react").MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const gatekeeperX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const gatekeeperY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);
  const gatekeeperRotate = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const witnessX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const witnessY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  return (
    <section
      className="min-h-screen flex items-end pb-16 md:pb-24 pt-[80px] px-6 relative overflow-hidden bg-[#0A0A0A] cursor-none"
      style={{ minHeight: "100dvh", paddingBottom: 'calc(env(safe-area-inset-bottom) + 4rem)' }}
      onMouseMove={handleMouseMove}
    >
      {/* The Gatekeeper: Amber Parallelogram */}
      <motion.div
        className="absolute top-[12%] end-[8%] md:end-[12%] w-[100px] h-[100px] md:w-[160px] md:h-[160px] opacity-80 pointer-events-none z-[1]"
        style={{ x: gatekeeperX, y: gatekeeperY }}
      >
        <motion.div
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)", rotate: gatekeeperRotate }}
          className="w-full h-full bg-[#D4A017]"
        />
      </motion.div>

      {/* The Witness: Teal Circle Fragment */}
      <motion.div
        className="absolute bottom-[25%] start-[8%] md:start-[12%] w-[60px] h-[60px] md:w-[100px] md:h-[100px] pointer-events-none z-[1]"
        style={{ x: witnessX, y: witnessY }}
      >
        <motion.div
          className="w-full h-full rounded-full border-[3px] border-[#2A9D8F]"
          style={{ opacity: 0.6 }}
        />
      </motion.div>

      {/* The Cut: Rose Diagonal Stripe */}
      <div className="absolute top-[45%] start-[5%] md:start-[8%] w-[2px] h-[100px] bg-[#C1666B] opacity-30 rotate-45 pointer-events-none z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Title */}
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

        {/* CTA */}
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
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0A0A0A] z-20 pointer-events-none" />
    </section>
  );
});
