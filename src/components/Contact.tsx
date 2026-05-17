import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Contact = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].contact;
  const isFa = lang === "fa";

  return (
    <section id="contact" className="px-6 max-w-6xl mx-auto section-padding-lg relative">
      {/* Watermark */}
      <div
        className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`}
        aria-hidden="true"
      >
        {isFa ? "۰۶" : "06"}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — Title Only */}
        <div>
          <h2 className={`text-section-title font-bold text-[#F4F1EA] ${isFa ? "" : "tracking-tighter"}`}>
            {t.title}
          </h2>
        </div>

        {/* Right — 3 Geometric Touch Targets */}
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-12">
          {/* A. WhatsApp (Primary) */}
          <motion.a
            href={t.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 bg-[#D4A017] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(212,160,23,0.3)]">
              <Phone size={32} strokeWidth={1.5} className="text-[#0A0A0A]" />
            </div>
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
              {isFa ? "بگو سلام" : "Say hello"}
            </span>
          </motion.a>

          {/* B. Email (Secondary) */}
          <motion.a
            href={`mailto:${t.email}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#D4A017] group-hover:bg-[#D4A017]/5 group-hover:scale-105">
              <Mail size={32} strokeWidth={1.5} className="text-white/60 group-hover:text-[#D4A017] transition-colors" />
            </div>
            <span className="text-sm font-medium text-white/70 group-hover:text-[#D4A017] transition-colors">
              {isFa ? "نامه بفرست" : "Send a letter"}
            </span>
          </motion.a>

          {/* C. LinkedIn (Tertiary) */}
          <motion.a
            href={t.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 group"
          >
            <div
              className="w-28 h-28 md:w-32 md:h-32 bg-white/[0.05] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-4"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            >
              <Linkedin size={28} strokeWidth={1.5} className="text-[#C1666B]" />
            </div>
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
              {isFa ? "ارتباط حرفه‌ای" : "Connect"}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
});
