import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";

export const VisualWorks = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].visual;
  const isFa = lang === "fa";

  return (
    <section id="visual-works" className="px-6 max-w-7xl mx-auto section-padding relative">
      {/* Watermark */}
      <div
        className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`}
        aria-hidden="true"
      >
        {isFa ? "۰۳" : "03"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="mb-12 md:mb-16 flex items-end justify-between">
          <h2 className={`text-section-title font-bold text-[#F4F1EA] ${isFa ? "" : "tracking-tighter"}`}>
            {t.title}
          </h2>
          <div className="hidden md:block w-24 h-[2px] bg-white/[0.08]" />
        </div>

        {/* Masonry Grid — Images Only, Titles as Overlay */}
        <div className="masonry-grid">
          {t.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:[filter:grayscale(0%)_sepia(0.2)_saturate(1.2)]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title — Appears on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs uppercase tracking-widest text-[#D4A017] font-medium block mb-1">
                  {isFa ? "مشاهده" : "View"}
                </span>
                <h3 className={`text-lg text-white ${isFa ? "font-black" : "font-bold tracking-tight"}`}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
