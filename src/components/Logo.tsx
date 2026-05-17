import { motion } from "motion/react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <motion.a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="relative flex items-center justify-center cursor-pointer select-none group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Sadegh Shahid"
      >
        {/* Geometric S — Saul Bass inspired, not literal */}
        <motion.path
          d="M8 12C8 8 12 6 16 6C22 6 24 10 24 14C24 20 16 20 16 26C16 30 20 32 24 32C28 32 30 30 32 28"
          stroke="#D4A017"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {/* Dot accent */}
        <motion.circle
          cx="8"
          cy="28"
          r="3"
          fill="#2A9D8F"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />
      </svg>
    </motion.a>
  );
};
