import React from "react";
import { memo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface SpatialCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const SpatialCard = memo(({ children, className = "", intensity = 15 }: SpatialCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), { stiffness: 300, damping: 30 });
  const glowX = useSpring(useTransform(x, [0, 1], [-50, 50]), { stiffness: 300, damping: 30 });
  const glowY = useSpring(useTransform(y, [0, 1], [-50, 50]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); x.set(0.5); y.set(0.5); }}
      style={{
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {/* Dynamic sheen */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(201,168,76,0.08) 0%, transparent 60%)`
            : "none",
        }}
      />
      {children}
    </motion.div>
  );
});
