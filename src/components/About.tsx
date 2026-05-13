
import { memo, useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "motion/react";
import { portfolioData, Language } from "../data";
import { WordReveal } from "./WordReveal";

const TiltCard = ({ children, className = "" }: { children: import("react").ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: import("react").MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 2 }}
      className={`relative rounded-2xl bg-white/[0.02] border border-white/[0.08] p-8 overflow-hidden group ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

const Node1 = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-32 h-32"
        whileHover={{ scale: 1.1, rotate: 15 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 2 }}
      >
        <motion.circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="2" strokeDasharray="10 5"
            animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
        <motion.rect x="35" y="35" width="30" height="30" fill="#f59e0b" rx="4"
            whileHover={{ scale: 0.8, rotate: -45 }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 2 }}/>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-amber-500 text-xs font-mono font-bold mix-blend-difference">Aa</span>
      </div>
    </div>
  );
};

const Node2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const codeString = `import { eq } from 'drizzle-orm';\nimport { users } from './schema';\n\nconst getUser = async (id: number) => {\n  return await db.select()\n    .from(users)\n    .where(eq(users.id, id));\n};`;

  const charCount = useTransform(scrollYProgress, [0, 1], [0, codeString.length]);
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    const unsubscribe = charCount.on("change", (latest) => {
      setDisplayedCode(codeString.slice(0, Math.round(latest)));
    });
    return unsubscribe;
  }, [charCount, codeString]);

  return (
    <div ref={containerRef} className="h-full bg-[#0a0a0a] rounded-lg p-4 font-mono text-xs text-white/70 overflow-hidden relative border border-white/[0.05]">
      <div className="flex gap-1.5 mb-3" dir="ltr">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed" dir="ltr">
        {displayedCode}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-3.5 bg-amber-500 ml-1 align-middle"
        />
      </pre>
    </div>
  );
};

const Node3 = () => {
  return (
    <div className="h-full relative overflow-hidden rounded-xl bg-white/[0.02]">
      {/* Wireframe Grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px bg-white/[0.05]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="bg-[#08090A] flex items-center justify-center">
            <span className="text-[8px] text-white/20 font-mono">0{i.toString(16)}</span>
          </div>
        ))}
      </div>

      {/* High-fidelity Image Reveal */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/photo-1507238691740-187a5b1d37b8.webp')" }}
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        whileHover={{ clipPath: "circle(150% at 50% 50%)" }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 2 }}
      />
    </div>
  );
};

const Node4 = () => {
  const [isAligned, setIsAligned] = useState(false);

  const particles = Array.from({ length: 25 });

  return (
    <div
      className="h-full relative overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsAligned(true)}
      onMouseLeave={() => setIsAligned(false)}
      onClick={() => setIsAligned(!isAligned)}
    >
      <div className="relative w-32 h-32">
        {particles.map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          const targetX = (col - 2) * 20;
          const targetY = (row - 2) * 20;

          const randomX = (Math.random() - 0.5) * 200;
          const randomY = (Math.random() - 0.5) * 200;

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 w-2 h-2 bg-white/40 rounded-sm"
              initial={{ x: randomX, y: randomY, rotate: Math.random() * 360, opacity: 0.2 }}
              animate={{
                x: isAligned ? targetX : randomX,
                y: isAligned ? targetY : randomY,
                rotate: isAligned ? 0 : Math.random() * 360,
                scale: isAligned ? 1 : Math.random() * 1.5 + 0.5,
                opacity: isAligned ? 1 : 0.4,
                backgroundColor: isAligned ? "rgba(245, 158, 11, 0.8)" : "rgba(255, 255, 255, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 2 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;
  const poeticQuote = portfolioData[lang].humanMoment.quote;
  const isFa = lang === "fa";

  return (
    <section
      id="about"
      className="px-6 max-w-5xl mx-auto border-t border-white/[0.08] section-mezzo relative mt-[-4rem] z-30"
    >
      <div
        className="hidden md:block absolute -top-8 -left-12 rtl:-left-auto rtl:-right-12 text-[clamp(10rem,20vw,18rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {isFa ? "۰۱" : "01"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl relative z-10"
      >
        <WordReveal
          text={t.title}
          className={`text-5xl md:text-6xl font-light mb-16 text-[#F3F1EB] ${isFa ? 'tracking-normal' : 'tracking-tight'}`}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 font-light italic mb-16 max-w-2xl"
        >
          "{poeticQuote}"
        </motion.p>

        {/* 2x2 Interactive Proof Surfaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          <TiltCard className="h-64 md:h-80">
            <Node1 />
          </TiltCard>

          <TiltCard className="h-64 md:h-80">
            <Node2 />
          </TiltCard>

          <TiltCard className="h-64 md:h-80">
            <Node3 />
          </TiltCard>

          <TiltCard className="h-64 md:h-80">
            <Node4 />
          </TiltCard>
        </div>

        {/* Signature Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-8 border-t border-white/[0.08] text-xs tracking-widest text-white/60"
        >
          {t.location}
        </motion.div>
      </motion.div>
    </section>
  );
});
