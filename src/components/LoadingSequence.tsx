import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

interface LoadingSequenceProps {
  onComplete: () => void;
}

export const LoadingSequence = ({ onComplete }: LoadingSequenceProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400); // Allow exit animation to finish
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onComplete();
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#08090A] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Logo with drawing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Logo isDrawing={true} className="w-20 h-20 mb-10" />
            </motion.div>

            {/* Name reveal — letter by letter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-sm font-light tracking-[0.3em] text-white/60 uppercase">
                Sadegh Shahid
              </span>

              {/* Progress line */}
              <div className="w-32 h-[1px] bg-white/10 rounded-full overflow-hidden mt-4">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent origin-left"
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
