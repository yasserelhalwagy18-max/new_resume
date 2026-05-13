import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";
import { Quote } from "lucide-react";
import { WordReveal } from "./WordReveal";

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
}

interface TestimonialsData {
  title: string;
  stats: TestimonialStat[];
  items: TestimonialItem[];
}

export const Testimonials = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].testimonials as unknown as TestimonialsData;
  const isFa = lang === "fa";

  return (
    <section
      id="testimonials"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-white/10 relative"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="hidden md:block absolute -top-8 -left-12 rtl:-left-auto rtl:-right-12 text-[clamp(10rem,20vw,18rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {isFa ? "۰۳" : "03"}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl md:text-6xl font-light mb-12 pb-7 ${isFa ? 'tracking-normal' : 'tracking-tighter'}`}
          >
            {t.title}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/5 rounded-2xl p-8 text-center"
              >
                <div className="text-section-title font-light text-amber-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col p-8 rounded-3xl bg-white/5 border border-white/5`}
            >
              <Quote
                className="text-amber-500/30 mb-6"
                size={40}
                aria-hidden="true"
              />
              <p
                className={`text-white/90 text-lg md:text-xl font-light mb-8 flex-grow italic ${lang === "en" ? "leading-relaxed" : "leading-[2.2] tracking-normal"}`}
              >
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-serif text-xl border border-white/20"
                  aria-hidden="true"
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-white/50 text-xs uppercase tracking-widest">
                    {item.role} &middot; {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
