import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const DepthEnvironment = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const fogOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 0.2, 0.2, 0.6]);
  const lightX = useTransform(scrollYProgress, [0, 1], ["-10%", "110%"]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Atmospheric fog layers */}
      <motion.div
        style={{ opacity: fogOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"
      />

      {/* Slow drifting light shaft */}
      <motion.div
        style={{ x: lightX }}
        className="absolute top-0 w-[200px] h-full"
      >
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.03) 50%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Floating depth orbs */}
      <Orb delay={0} x="15%" y="20%" size={300} color="rgba(201,168,76,0.04)" />
      <Orb delay={2} x="75%" y="60%" size={400} color="rgba(46,107,102,0.03)" />
      <Orb delay={4} x="45%" y="80%" size={250} color="rgba(201,168,76,0.02)" />

      {/* Horizon line */}
      <div
        className="absolute bottom-[30%] left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.03) 50%, transparent 95%)",
        }}
      />
    </div>
  );
});

const Orb = ({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: number; color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute rounded-full"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: "blur(40px)",
    }}
  />
);
