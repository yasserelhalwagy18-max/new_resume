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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.items.map((item, index) => {
            const isLarge = index === 0; // First project is hero size
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer card-bg ${isLarge ? "md:col-span-2 md:aspect-[21/9]" : "aspect-[4/3]"}`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Year Stamp */}
                <div className="absolute top-4 start-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[10px] uppercase tracking-widest text-[#D4A017] font-medium border border-white/5">
                    {item.year}
                  </span>
                </div>

                {/* Hover Reveal — Arrow */}
                <div className="absolute top-4 end-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center text-black">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content Overlay — Visible on Hover */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)' }}>
                  <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 ${isFa ? "" : "tracking-tight"}`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-4 max-w-md line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
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

            {(() => {
              const selected = t.items.find((i) => i.id === selectedProject);
              if (!selected) return null;

              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/[0.08] rounded-3xl shadow-2xl flex flex-col"
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-20 p-2 bg-black/60 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/[0.1] transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* Full-bleed Image Gallery */}
                  <div className="w-full relative bg-black aspect-video md:aspect-[21/9]">
                    <div className="flex h-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
                      {selected.images.map((img, idx) => (
                        <div key={idx} className="w-full h-full flex-shrink-0 snap-start relative">
                          <img
                            src={img}
                            alt={`${selected.name} - ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Gallery indicators */}
                    {selected.images.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
                        {selected.images.map((_, idx) => (
                          <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Text Content Below */}
                  <div className="w-full p-8 md:p-10 flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest text-[#D4A017] mb-2 block">
                      {selected.year}
                    </span>
                    <h3 className={`text-3xl font-bold text-white mb-4 ${isFa ? "" : "tracking-tight"}`}>
                      {selected.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-6 leading-relaxed max-w-3xl">
                      {selected.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selected.stack.map((tech) => (
                        <span key={tech} className="tag tag-gold text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {selected.link && (
                      <a
                        href={selected.link}
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
              );
            })()}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});
