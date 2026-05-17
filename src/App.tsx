import { useScroll, useSpring, motion, MotionConfig } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { VisualWorks } from "./components/VisualWorks";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { DirectionProvider, useDirection } from "./components/providers/DirectionProvider";
import { NoiseOverlay } from "./components/atmosphere/NoiseOverlay";
import { VignetteOverlay } from "./components/atmosphere/VignetteOverlay";

function AppContent() {
  const { locale, direction } = useDirection();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="min-h-screen selection:bg-[#D6C7A8] selection:text-[#0A0A0A] bg-[#08090A]"
      dir={direction}
      lang={locale}
    >
      <VignetteOverlay />
      <NoiseOverlay />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-[#D6C7A8] focus:text-[#0A0A0A] focus:rounded-lg"
      >
        {locale === "fa" ? "پرش به محتوا" : "Skip to content"}
      </a>

      {/* Progress Bar — Visible but refined */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] bg-[#D6C7A8] z-[60] accent-glow ${locale === "fa" ? "origin-right" : "origin-left"}`}
        style={{ scaleX }}
        aria-label="Reading progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
      />

      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <VisualWorks />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <DirectionProvider>
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </DirectionProvider>
  );
}
