import { useState, useEffect, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Language, portfolioData } from "./data";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ArrowUp } from "lucide-react";

// Lazy loaded components for improved initial load performance
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const VisualWorks = lazy(() => import('./components/VisualWorks').then(m => ({ default: m.VisualWorks })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  const [lang, setLang] = useState<Language>("fa");

  useEffect(() => {
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  // GPU-accelerated scroll values for "Back to top" button
  const { scrollY } = useScroll();
  const topOpacity = useTransform(scrollY, [700, 800], [0, 1]);
  const topScale = useTransform(scrollY, [700, 800], [0.8, 1]);
  const pointerEvents = useTransform(scrollY, [700, 800], ["none", "auto"]);

  return (
    <div
      className="min-h-screen selection:bg-[#D4A017] selection:text-[#0A0A0A] bg-[#0A0A0A]"
      dir={lang === "fa" ? "rtl" : "ltr"}
      lang={lang}
    >
      <Header lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />
        <Suspense fallback={<div className="h-screen bg-[#0A0A0A]" />}>
          <About lang={lang} />
          <Projects lang={lang} />
          <VisualWorks lang={lang} />
          <Experience lang={lang} />
          <Testimonials lang={lang} />
          <Contact lang={lang} />
        </Suspense>
      </main>

      {/* Footer — Architectural & Quiet */}
      <footer className="relative w-full py-20 px-6 border-t border-white/[0.06] mt-24 overflow-hidden bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <p className={`text-sm font-light text-white/50 max-w-sm leading-relaxed ${lang === 'fa' ? 'leading-[2]' : ''}`}>
            {portfolioData[lang].footer.tagline}
          </p>
          <p className="text-xs text-white/30 font-light tracking-widest">
            {portfolioData[lang].footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </div>

        {/* Watermark */}
        <div
          className="absolute bottom-0 end-0 translate-y-1/3 text-[18vw] font-bold text-white/[0.015] leading-none pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          {lang === 'fa' ? 'پایان' : 'END'}
        </div>
      </footer>

      {/* Back to top */}
      <motion.button
        style={{ opacity: topOpacity, scale: topScale, pointerEvents: pointerEvents as any }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 end-8 z-50 w-12 h-12 rounded-full border border-white/[0.12] bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-[#D4A017]/50 hover:bg-[#D4A017]/10 transition-all group"
        aria-label="Back to top"
      >
        <ArrowUp size={18} className="text-white/40 group-hover:text-[#D4A017] transition-colors" />
      </motion.button>
    </div>
  );
}
