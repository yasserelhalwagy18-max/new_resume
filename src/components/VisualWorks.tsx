import { memo, useRef } from "react";
import { motion, useInView } from "motion/react";
import { portfolioData, Language } from "../data";
import { useMediaQuery } from "../hooks/useMediaQuery";

const VisualWorkItem = memo(({ item, isFa, isTouch }: { item: any, isFa: boolean, isTouch: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-35% 0px -35% 0px" });

  // Apply active states either via touch intersection OR via standard group-hover on desktop
  const touchActiveStyles = isTouch && isInView
    ? { image: "scale-105 grayscale-0", overlay: "opacity-100", text: "translate-y-0 opacity-100" }
    : { image: "", overlay: "", text: "" };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111] focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:outline-none cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          // Assuming there's a modal or link logic to be added later, for now we just make it interactive.
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.images[0]}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-700 grayscale ${isTouch ? touchActiveStyles.image : "group-hover:scale-105 group-hover:grayscale-0"}`}
          loading="lazy"
          decoding="async"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 opacity-0 ${isTouch ? touchActiveStyles.overlay : "group-hover:opacity-100"}`} />
      </div>

      {/* Title */}
      <div className={`absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-500 ${isTouch ? touchActiveStyles.text : "group-hover:translate-y-0 group-hover:opacity-100"}`}>
        <span className="text-xs uppercase tracking-widest text-[#D4A017] font-medium block mb-1">
          {isFa ? "مشاهده" : "View"}
        </span>
        <h3 className={`text-lg font-bold text-white ${isFa ? "" : "tracking-tight"}`}>
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
});

export const VisualWorks = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].visual;
  const isFa = lang === "fa";
  const isTouch = useMediaQuery("(hover: none)");

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
          {t.items.map((item) => (
            <VisualWorkItem key={item.id} item={item} isFa={isFa} isTouch={isTouch} />
          ))}
        </div>
      </motion.div>
    </section>
  );
});
