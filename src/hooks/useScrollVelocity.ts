import { useScroll, useVelocity, useSpring, useTransform } from "motion/react";

export const useScrollVelocity = (clampValue: number = 2) => {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    stiffness: 150,
    damping: 15,
  });

  const skew = useTransform(smoothVelocity, (v) => {
    const skewVal = v * 0.0005;
    return Math.max(Math.min(skewVal, clampValue), -clampValue);
  });

  const filter = useTransform(smoothVelocity, (v) => {
    const absV = Math.abs(v);
    if (absV < 500) return "none";

    // Calculate intensity based on velocity (max at ~3000)
    const intensity = Math.min((absV - 500) / 2500, 1);

    // Chromatic aberration / RGB split effect
    const offset = intensity * 4; // max 4px offset
    return `drop-shadow(-${offset}px 0 0 rgba(255, 0, 0, ${intensity * 0.5})) drop-shadow(${offset}px 0 0 rgba(0, 255, 255, ${intensity * 0.5}))`;
  });

  return { skew, filter };
};
