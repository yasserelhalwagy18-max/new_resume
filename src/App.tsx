import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language, portfolioData } from "./data";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { VisualWorks } from "./components/VisualWorks";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { TransitionMoment } from "./components/TransitionMoment";
import { HumanMoment } from "./components/HumanMoment";
import { LoadingSequence } from "./components/LoadingSequence";
import { CustomCursor } from "./components/CustomCursor";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<Language>("fa");
  const [showTop, setShowTop] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen selection:bg-[#D4A017] selection:text-[#0A0A0A] bg-[#0A0A0A]"
      dir={lang === "fa" ? "rtl" : "ltr"}
      lang={lang}
    >
      {!loaded && <LoadingSequence onComplete={() => setLoaded(true)} />}

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CustomCursor />
            <Header lang={lang} setLang={setLang} />

            <main>
              <Hero lang={lang} />
              <Projects lang={lang} />
              <HumanMoment lang={lang} />
              <VisualWorks lang={lang} />
              <About lang={lang} />
              <Services lang={lang} />
              <TransitionMoment lang={lang} />
              <Experience lang={lang} />
              <Testimonials lang={lang} />
              <Contact lang={lang} />
            </main>

            {/* Footer */}
            <footer className="relative w-full py-20 px-6 border-t border-white/[0.06] mt-24 overflow-hidden bg-[#0A0A0A]">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
                <p className={`text-sm font-light text-white/50 max-w-sm leading-relaxed ${lang === "fa" ? "leading-[2]" : ""}`}>
                  {portfolioData[lang].footer.tagline}
                </p>
                <p className="text-xs text-white/30 font-light tracking-widest">
                  {portfolioData[lang].footer.copyright.replace("{year}", String(new Date().getFullYear()))}
                </p>
              </div>
              <div
                className="absolute bottom-0 end-0 translate-y-1/3 text-[18vw] font-bold text-white/[0.015] leading-none pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                {lang === "fa" ? "پایان" : "END"}
              </div>
            </footer>

            {/* Back to top */}
            <AnimatePresence>
              {showTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-8 end-8 z-50 w-12 h-12 rounded-full border border-white/[0.12] bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-[#D4A017]/50 hover:bg-[#D4A017]/10 transition-all group"
                  aria-label="Back to top"
                >
                  <ArrowUp size={18} className="text-white/40 group-hover:text-[#D4A017] transition-colors" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
