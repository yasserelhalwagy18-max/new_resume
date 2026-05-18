import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // 0 = static, 1 = moves with scroll, -0.5 = slower (depth)
  className?: string;
  zIndex?: number;
  key?: React.Key;
}

export const ParallaxLayer = ({ children, speed = 0, className = "", zIndex = 0 }: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale, zIndex }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};
