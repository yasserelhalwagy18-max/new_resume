import React, { memo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { portfolioData, Language } from "../data";
import { ArrowUpRight, ArrowUpLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { WordReveal } from "./WordReveal";
import { useScrollVelocity } from "../hooks/useScrollVelocity";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export const Projects = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].projects;
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isFa = lang === "fa";
  const prefersReduced = usePrefersReducedMotion();
  const scrollSkew = useScrollVelocity(prefersReduced ? 0 : 2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = (newDirection: number, length: number) => {
    setDirection(newDirection);
    setCurrentImageIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) return length - 1;
      if (next >= length) return 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
      // Focus the first element in the modal
      setTimeout(() => {
        const firstButton = modalRef.current?.querySelector('button');
        firstButton?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="px-6 max-w-7xl mx-auto section-mezzo relative"
    >
      <div
        className="hidden md:block absolute -top-8 -left-12 rtl:-left-auto rtl:-right-12 text-[clamp(10rem,20vw,18rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {isFa ? "۰۲" : "02"}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4 }}
        className="relative z-10"
      >
        {/* Section Header - Editorial Style */}
        <div className="mb-28 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`text-[clamp(2.2rem, 5vw, 3.5rem)] font-light text-[#F3F1EB] mb-6 ${isFa ? 'tracking-normal' : 'tracking-tight'}`}
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/60 text-[15px] leading-relaxed max-w-[420px]"
          >
            {lang === "en"
              ? "Selected case studies in creative development and AI-driven design."
              : "مطالعات موردی منتخب در توسعه خلاق و طراحی مبتنی بر هوش مصنوعی."}
          </motion.p>
        </div>

        {/* Projects Grid - More Breathing Room */}
        <div style={{ skewY: scrollSkew }} className="group/board columns-1 md:columns-2 gap-6 space-y-6">
          {t.items.map((item, index) => {
            const isLast = index === t.items.length - 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                className={`group relative overflow-hidden flex flex-col rounded-3xl card-bg border border-white/[0.08] transition-all duration-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500/30 break-inside-avoid group-hover/board:opacity-50 hover:!opacity-100`}
                onClick={() => {
                  setSelectedProject(item.id);
                  setCurrentImageIndex(0);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(item.id);
                    setCurrentImageIndex(0);
                  }
                }}
                aria-label={`${lang === "en" ? "View details for" : "مشاهده جزئیات"} ${item.name}`}
              >
                {/* Curtain Reveal Mask */}
                <motion.div
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[#08090A] z-20 origin-top pointer-events-none"
                />

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  {item.images && item.images.length > 0 && (
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  )}

                  {/* Custom Cursor Overlay / Centered 'View' Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                    <span className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full text-white text-sm uppercase tracking-widest border border-white/10 shadow-xl">
                      {lang === "en" ? "View" : "مشاهده"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black"
              aria-hidden="true"
            />

            {t.items.find((i) => i.id === selectedProject) &&
              (() => {
                const item = t.items.find((i) => i.id === selectedProject)!;
                return (
                  <motion.div
                    ref={modalRef}
                    role="dialog"
                    aria-modal="true"
                    initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.98, y: 20 }}
                    animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
                    exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.98, y: 20 }}
                    transition={isMobile
                      ? { type: "spring", stiffness: 300, damping: 30 }
                      : { type: "spring", stiffness: 400, damping: 25 }
                    }
                    className="absolute inset-0 w-full h-full flex flex-col z-10"
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 rtl:left-6 rtl:right-auto z-20 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md border border-white/[0.08] transition-colors"
                      aria-label="Close dialog"
                    >
                      <X size={24} />
                    </button>

                    {/* Image Carousel */}
                    {item.images && item.images.length > 0 && (
                      <div className="w-full h-full relative group/carousel overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                          <motion.img
                            key={currentImageIndex}
                            src={item.images[currentImageIndex]}
                            alt={`${item.name} screenshot ${currentImageIndex + 1}`}
                            onError={(e) => {
                              e.currentTarget.src = '/fallback-image.jpg';
                            }}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              x: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              },
                              opacity: { duration: 0.2 },
                            }}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                              e.stopPropagation();
                              const swipe = Math.abs(offset.x) * velocity.x;
                              if (swipe < -10000 || offset.x < -50) {
                                paginate(1, item.images!.length);
                              } else if (swipe > 10000 || offset.x > 50) {
                                paginate(-1, item.images!.length);
                              }
                            }}
                          />
                        </AnimatePresence>

                        {item.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                paginate(-1, item.images!.length);
                              }}
                              className="absolute start-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 z-20"
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={24} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                paginate(1, item.images!.length);
                              }}
                              className="absolute end-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 z-20"
                              aria-label="Next image"
                            >
                              <ChevronRight size={24} />
                            </button>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                              {item.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setDirection(
                                      idx > currentImageIndex ? 1 : -1,
                                    );
                                    setCurrentImageIndex(idx);
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-amber-500 w-6" : "bg-white/40 hover:bg-white/60"}`}
                                  aria-label={`Go to slide ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Bottom Floating Info */}
                    <div className="absolute bottom-0 inset-x-0 p-8 pt-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-md z-30 pointer-events-none border-t border-white/10 mix-blend-overlay">
                      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pointer-events-auto mix-blend-normal">
                        <div>
                          <h3 className="text-4xl md:text-5xl font-light mb-2 text-[#F3F1EB]">
                            {item.name}
                          </h3>
                          <p className="text-amber-500 text-sm uppercase tracking-widest mt-2">
                            {item.role} &middot; {item.year}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 rtl:justify-start">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              dir="ltr"
                              className="px-4 py-2 text-xs md:text-sm border border-white/20 rounded-xl text-white/80 bg-white/5 backdrop-blur-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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
