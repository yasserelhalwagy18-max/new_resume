import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;
  const isFa = lang === "fa";

  return (
    <section
      id="about"
      className="px-6 max-w-6xl mx-auto section-padding relative"
    >
      {/* Watermark */}
      <div
        className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-0`}
        aria-hidden="true"
      >
        {isFa ? "۰۱" : "01"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        {/* Left Column — Title + Portrait Mark */}
        <div className="lg:col-span-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-section-title font-bold text-[#F4F1EA] mb-4 ${isFa ? "" : "tracking-tighter"}`}
          >
            {t.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-12 h-[2px] bg-[#D4A017] origin-left rtl:origin-right"
          />

          {/* Geometric Portrait Mark — Saul Bass Soul */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 w-24 h-24 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center overflow-hidden"
          >
            <span className="text-3xl font-bold text-[#D4A017]" style={{ fontFamily: '"Playfair Display", ui-serif, serif' }}>S</span>
          </motion.div>
        </div>

        {/* Right Column — Content */}
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-lg md:text-xl text-white/80 font-light leading-relaxed ${isFa ? "leading-[2] mb-12 prose-persian" : "mb-12 max-w-2xl"}`}
          >
            {t.paragraph}
          </motion.p>

          {/* Capabilities — Tag Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-[11px] uppercase tracking-widest text-white/40 block mb-4">
              {isFa ? "توانایی‌ها" : "Capabilities"}
            </span>
            <div className="flex flex-wrap gap-2">
              {t.capabilities.map((cap, i) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="tag tag-gold"
                >
                  {cap}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-6 border-t border-white/[0.06] text-xs text-white/40 font-light tracking-widest"
          >
            {t.location}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
});
