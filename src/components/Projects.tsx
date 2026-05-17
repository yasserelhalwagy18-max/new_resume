import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

export const Projects = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].projects;
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const isFa = lang === "fa";

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-6 max-w-7xl mx-auto section-padding-lg relative">
      {/* Watermark */}
      <div
        className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`}
        aria-hidden="true"
      >
        {isFa ? "۰۲" : "02"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className={`text-section-title font-bold text-[#F4F1EA] ${isFa ? "" : "tracking-tighter"}`}>
            {t.title}
          </h2>
          <p className="text-sm text-white/50 max-w-xs">
            {isFa
              ? "مطالعات منتخب در توسعه خلاق و طراحی مبتنی بر AI."
              : "Selected case studies in creative development and AI-driven design."}
          </p>
        </div>

        {/* Asymmetric Grid — Visual First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.items.map((item, index) => {
            const isLarge = index === 0; // First project is hero size
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer card-bg focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:outline-none ${isLarge ? "md:col-span-2 md:aspect-[21/9]" : "aspect-[4/3]"}`}
                onClick={() => setSelectedProject(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(item.id);
                  }
                }}
              >
                {/* Image — Full Bleed */}
                <div className="absolute inset-0">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover img-grayscale"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                {/* Content Overlay — Minimal */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)' }}>
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">
                      {item.year}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-[#D4A017] hover:bg-white/20 transition-all"
                        aria-label="Visit site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 ${isFa ? "" : "tracking-tight"}`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/70 mb-4 max-w-md line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-white/40 uppercase tracking-widest">
                        {item.stack.length} {isFa ? "تکنولوژی" : "technologies"}
                      </span>
                      <span className="w-8 h-[1px] bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Hover Reveal — Arrow */}
                <div className="absolute top-6 end-6 md:top-10 md:end-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center text-black">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Lightbox Modal — Image First, Text Second */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {t.items.find((i) => i.id === selectedProject) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/[0.08] rounded-3xl shadow-2xl flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/[0.1] transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Image Side — 60% */}
                <div className="w-full md:w-3/5 aspect-video md:aspect-auto md:min-h-[500px] relative bg-black">
                  <img
                    src={t.items.find((i) => i.id === selectedProject)!.images[0]}
                    alt={t.items.find((i) => i.id === selectedProject)!.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Side — 40%, minimal */}
                <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-widest text-[#D4A017] mb-4 block">
                    {t.items.find((i) => i.id === selectedProject)!.year}
                  </span>
                  <h3 className={`text-3xl font-bold text-white mb-4 ${isFa ? "" : "tracking-tight"}`}>
                    {t.items.find((i) => i.id === selectedProject)!.name}
                  </h3>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    {t.items.find((i) => i.id === selectedProject)!.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {t.items.find((i) => i.id === selectedProject)!.stack.map((tech) => (
                      <span key={tech} className="tag tag-gold text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {t.items.find((i) => i.id === selectedProject)!.link && (
                    <a
                      href={t.items.find((i) => i.id === selectedProject)!.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-fit text-sm"
                    >
                      {isFa ? "مشاهده وب‌سایت" : "View Live Site"}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});
