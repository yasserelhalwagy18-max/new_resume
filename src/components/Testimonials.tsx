import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";

interface TestimonialStat {
  label: string;
  value: string;
}

interface TestimonialItem {
  id: number;
  name: string;
  company: string;
  role: string;
  text: string;
  result: string;
}

interface TestimonialsData {
  title: string;
  stats: TestimonialStat[];
  items: TestimonialItem[];
}

export const Testimonials = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].testimonials as unknown as TestimonialsData;
  const isFa = lang === "fa";

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  useEffect(() => {
    if (!t.items || t.items.length === 0) return;
    const interval = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % t.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.items]);

  const activeQuote = t.items[activeQuoteIndex];

  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden border-t border-white/10"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="hidden md:block absolute -top-8 -left-12 rtl:-left-auto rtl:-right-12 text-[clamp(10rem,20vw,18rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {isFa ? "۰۳" : "03"}
      </div>

      <div className="relative z-10 w-full">
        <div className="mb-24 flex items-center overflow-hidden whitespace-nowrap" aria-hidden="true" dir="ltr">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed as necessary
            }}
            className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
          >
            {/* We duplicate the stats to create an infinite scroll effect */}
            {[...t.stats, ...t.stats, ...t.stats, ...t.stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-[clamp(4rem,8vw,8rem)] font-light text-[#D6C7A8] leading-none tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xl md:text-2xl text-white/50 uppercase tracking-widest whitespace-nowrap font-light mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeQuote && (
              <motion.div
                key={activeQuote.id}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                <div className="flex gap-1 mb-8 opacity-20">
                  {/* Minimalistic visual waveform placeholder */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: ["8px", "24px", "8px"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                      className="w-1 bg-[#D6C7A8] rounded-full"
                    />
                  ))}
                </div>

                <h3 className={`text-2xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8 ${lang === "en" ? "tracking-tight" : "tracking-normal leading-relaxed"}`}>
                  "{activeQuote.text}"
                </h3>

                <div className="flex flex-col items-center gap-2">
                  <span className="text-[#D6C7A8] text-sm uppercase tracking-widest font-medium">
                    {activeQuote.name}
                  </span>
                  <span className="text-white/40 text-xs uppercase tracking-widest">
                    {activeQuote.role} &middot; {activeQuote.company}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});
