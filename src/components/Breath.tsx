import React, { memo, useRef } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { Language } from "../data";

export const Breath = memo(({ lang }: { lang: Language }) => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });
  const opacity = useSpring(0, { stiffness: 30, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    // Calculate relative position (0 to 1)
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    mouseX.set(x - 0.5); // -0.5 to 0.5
    mouseY.set(y - 0.5);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
  };

  const translateX = useTransform(mouseX, [-0.5, 0.5], ["-5%", "5%"]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], ["-5%", "5%"]);

  // Also affect base grain opacity a bit
  const grainOpacity = useTransform(opacity, [0, 1], [0.03, 0.08]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[70vh] bg-[#08090A] relative flex items-center justify-center overflow-hidden w-full cursor-none"
      aria-hidden="true"
    >
      {/* Interactive Noise Layer */}
      <motion.div
        style={{
          opacity: grainOpacity,
          x: translateX,
          y: translateY
        }}
        className="absolute inset-[-10%] w-[120%] h-[120%] pointer-events-none mix-blend-overlay"
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </motion.div>

      {/* Subtle vignette/gradient to enhance depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#08090A_100%)] opacity-80 pointer-events-none" />

      <span className="sr-only">A moment of silence</span>
    </section>
  );
});
