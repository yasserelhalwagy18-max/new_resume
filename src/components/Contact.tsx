import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import { Send, CheckCircle2, Mail, Phone, Linkedin, Github } from "lucide-react";

export const Contact = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const isFa = lang === "fa";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="px-6 max-w-6xl mx-auto section-padding-lg relative">
      {/* Watermark */}
      <div
        className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`}
        aria-hidden="true"
      >
        {isFa ? "۰۶" : "06"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        {/* Left — Text & Links */}
        <div>
          <h2 className={`text-section-title font-bold text-[#F4F1EA] mb-6 ${isFa ? "" : "tracking-tighter"}`}>
            {t.title}
          </h2>
          <p className="text-lg text-white/60 font-light mb-12 max-w-md">
            {t.message}
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${t.email}`}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] hover:border-[#D4A017]/30 hover:bg-[#D4A017]/5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017]">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-xs text-white/40 block mb-0.5">
                  {isFa ? "ایمیل" : "Email"}
                </span>
                <span className="text-sm text-white/80 font-mono" dir="ltr">
                  {t.email}
                </span>
              </div>
            </a>

            <a
              href={t.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] hover:border-[#2A9D8F]/30 hover:bg-[#2A9D8F]/5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/10 flex items-center justify-center text-[#2A9D8F]">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-xs text-white/40 block mb-0.5">
                  {isFa ? "واتساپ" : "WhatsApp"}
                </span>
                <span className="text-sm text-white/80 font-mono" dir="ltr">
                  {t.phone}
                </span>
              </div>
            </a>

            <div className="flex gap-3 mt-4">
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#D4A017] hover:border-[#D4A017]/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={t.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#D4A017] hover:border-[#D4A017]/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right — Form (3 fields only) */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#D4A017] p-4 rounded-xl flex items-center gap-3"
              >
                <CheckCircle2 size={20} />
                <span className="text-sm font-medium">
                  {isFa ? "پیام شما ارسال شد." : "Message sent successfully."}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <input
              type="text"
              placeholder={isFa ? "نام" : "Name"}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#D4A017]/40 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-colors text-sm"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder={isFa ? "ایمیل" : "Email"}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#D4A017]/40 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-colors text-sm ${!isFa ? "" : "text-right"}`}
              dir="ltr"
              required
            />
          </div>

          <div>
            <textarea
              placeholder={isFa ? "پیام" : "Message"}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#D4A017]/40 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-colors resize-none text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="btn-primary w-full md:w-auto self-start"
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                {isFa ? "در حال ارسال..." : "Sending..."}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {isFa ? "ارسال پیام" : "Send Message"}
                <Send size={16} />
              </span>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
});
