export type Language = "en" | "fa";

export interface ProjectItem {
  id: number;
  name: string;
  year: string;
  link?: string;
  role: string;
  stack: string[];
  description: string;
  images: string[];
}

export interface VisualItem {
  id: number;
  title: string;
  images: string[];
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export const portfolioData = {
  en: {
    nav: {
      work: "Work",
      about: "Studio",
      contact: "Contact",
    },
    hero: {
      role: "Brand Identity · Full-Stack · AI Systems",
      title: "Design that\nrefuses to forget.",
      description: "Digital experiences built like cinema — where every frame earns attention.",
      ctaPrimary: "View Selected Work",
      ctaSecondary: "Begin a Project",
    },
    about: {
      title: "Studio",
      paragraph: "I chase the moment a user forgets the screen exists. That happens when photography, motion, and code stop competing and start conspiring. Restraint is confidence. Precision separates being seen from being remembered.",
      capabilities: ["Brand Identity", "Product Design", "Front-End Craft", "AI Creative Systems", "Cinematic Photography", "Visual Narrative"],
      location: "Based in Iran · Available worldwide",
    },
    humanMoment: {
      quote: "I don't build interfaces. I build the moment you forget you're looking at a screen.",
    },
    services: {
      title: "Services",
      items: [
        { title: "Brand Identity Systems", desc: "From strategy to visual system — logos, typography, color architecture, and brand guidelines that scale across every touchpoint." },
        { title: "Full-Stack Product Build", desc: "React/Next.js frontends, Node.js backends, database design, and deployment. Zero to production with obsessive precision." },
        { title: "AI Creative Automation", desc: "Local GPU pipelines, LLM integrations, and generative workflows that turn static content into cinematic motion." },
      ],
    },
    experience: {
      title: "Path",
      summary: "4+ years shipping web products. 10+ years shaping visual identities.",
      items: [
        {
          id: 1,
          role: "Senior Designer & Web Developer",
          company: "AFS (Tehran)",
          date: "2024 — Present",
          description: "End-to-end brand identity, UI/UX, and full-stack web implementation.",
        },
        {
          id: 2,
          role: "AI Systems Architect",
          company: "AFS (Tehran)",
          date: "2024",
          description: "Built local GPU automation pipeline that transforms book chapters into cinematic AI-generated images and motion videos.",
        },
        {
          id: 3,
          role: "Full-Stack Developer & Product Designer",
          company: "Sangin (Independent)",
          date: "2023 — 2024",
          description: "Designed and built complete ERP-grade CRM system for iron manufacturing from zero to production.",
        },
        {
          id: 4,
          role: "Senior Designer & Web Developer",
          company: "Makhtoot (Qom)",
          date: "2024",
          description: "Zero-to-launch brand system and responsive web platform in 8 weeks.",
        },
        {
          id: 5,
          role: "Frontend Developer & UI/UX Designer",
          company: "Rafed (Qom)",
          date: "2022 — 2024",
          description: "Component library and internal system redesign across 5+ platforms.",
        },
      ],
    },
    projects: {
      title: "Selected Work",
      items: [
        {
          id: 1,
          name: "AFSSOLAR",
          year: "2024",
          link: "https://afssolar.ir",
          role: "Full-Stack · Brand · CMS Architecture",
          stack: ["React 19", "Next.js", "Express", "Drizzle", "MariaDB"],
          description: "Custom headless CMS and corporate web presence for Iran's leading solar energy supplier. Near-perfect Lighthouse scores. Enterprise-grade security.",
          images: [
            "/images/AFS_1.webp",
            "/images/AFS_2.webp",
            "/images/AFS_3.webp",
          ],
        },
        {
          id: 2,
          name: "Rafed Systems",
          year: "2022 — 2024",
          role: "Frontend · UI/UX · Design Systems",
          stack: ["React", "Component Library", "Data Visualization"],
          description: "Unified internal tools and component architecture. Reduced task completion time by 30%.",
          images: [
            "/images/Rafed_1.webp",
            "/images/Rafed_2.webp",
          ],
        },
        {
          id: 3,
          name: "Makhtoot",
          year: "2024",
          role: "Brand · UI/UX · Web",
          stack: ["Brand Identity", "Figma", "React"],
          description: "Complete brand-to-website pipeline launched in 8 weeks. Concept to market-ready identity.",
          images: [
            "/images/Makhtoot_1.webp",
            "/images/Makhtoot_2.webp",
          ],
        },
        {
          id: 4,
          name: "AI Book Visualizer",
          year: "2024",
          role: "AI Systems · Automation · Local GPU Pipeline",
          stack: ["Python", "Stable Diffusion", "ComfyUI", "LLM", "Local GPU"],
          description: "End-to-end AI automation pipeline that reads book chapters, generates cinematic prompts via LLM, creates images through Stable Diffusion, and renders motion videos — all running locally on GPU without cloud dependencies.",
          images: [
            "/images/AIBook_1.webp",
            "/images/AIBook_2.webp",
          ],
        },
        {
          id: 5,
          name: "Sangin CRM",
          year: "2023 — 2024",
          link: "#",
          role: "Full-Stack · ERP Architecture · Product Design",
          stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
          description: "Complete ERP-grade CRM system for an iron manufacturing company. Inventory management, supply chain tracking, customer relations, financial reporting, and real-time analytics dashboard — designed from zero to production.",
          images: [
            "/images/Sangin_1.webp",
            "/images/Sangin_2.webp",
            "/images/Sangin_3.webp",
          ],
        },
      ],
    },
    visual: {
      title: "Visual Archive",
      items: [
        { id: 1, title: "Brand Identity", images: ["/images/Visual_Brand_1.webp", "/images/Visual_Brand_2.webp"] },
        { id: 2, title: "Cinematic Photography", images: ["/images/Visual_Photo_1.webp", "/images/Visual_Photo_2.webp"] },
        { id: 3, title: "Art Direction", images: ["/images/Visual_Art_1.webp", "/images/Visual_Art_2.webp"] },
        { id: 4, title: "Interface Design", images: ["/images/Visual_UI_1.webp", "/images/Visual_UI_2.webp"] },
      ],
    },
    testimonials: {
      title: "Voices",
      items: [
        {
          id: 1,
          name: "Head of Digital, AFS",
          text: "Sadegh shipped AFSSOLAR's custom CMS in 6 weeks with Lighthouse scores near 95. Our previous agency quoted 4 months. He elevated our entire digital presence.",
        },
        {
          id: 2,
          name: "Product Lead, Rafed",
          text: "The component library didn't just reduce task time by 30%. It made our internal tools feel premium. The team actually enjoys using them now.",
        },
        {
          id: 3,
          name: "Founder, Makhtoot",
          text: "From zero to market-ready brand and website in 8 weeks. Sadegh understood our audience faster than we did, and the result speaks for itself.",
        },
        {
          id: 4,
          name: "Operations Director, Sangin",
          text: "The CRM exposed supply chain bottlenecks we didn't know we had. It's not just software — it's a lens into our own business.",
        },
      ],
    },
    contact: {
      title: "Let's build something",
      message: "Tell me what you're making. I'll reply within 24 hours.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline: "Restraint is more powerful than noise.",
      copyright: "© {year} Sadegh Shahid",
    },
  },
  fa: {
    nav: {
      work: "آثار",
      about: "استودیو",
      contact: "تماس",
    },
    hero: {
      role: "هویت برند · فول‌استک · سیستم‌های AI",
      title: "طراحی که\nفراموش نمی‌شود.",
      description: "تجربه‌های دیجیتال با دکوپاژ سینمایی — جایی که هر فریم، توجه را می‌خرد.",
      ctaPrimary: "مشاهده آثار",
      ctaSecondary: "شروع پروژه",
    },
    about: {
      title: "استودیو",
      paragraph: "من به لحظه‌ای معتادم که کاربر فراموش می‌کند به یک صفحه خیره است. وقتی عکاسی، موشن و کد دست از جنگ برمی‌دارند و با هم روایت می‌کنند. خویشتن‌داری، اعتمادبه‌نفس است. دقت، مرز بین دیده شدن و به یاد ماندن.",
      capabilities: ["هویت برند", "طراحی محصول", "توسعه فرانت‌اند", "سیستم‌های خلاقانه AI", "عکاسی سینمایی", "روایت بصری"],
      location: "قم، ایران · آماده برای پروژه‌های دورکاری",
    },
    humanMoment: {
      quote: "من رابط نمی‌سازم. لحظه‌ای می‌سازم که فراموش کنی به یک صفحه خیره‌ای.",
    },
    services: {
      title: "خدمات",
      items: [
        { title: "سیستم‌های هویت بصری", desc: "از استراتژی تا سیستم بصری — لوگو، تایپوگرافی، معماری رنگ و راهنمای برند که در هر نقطه تماس مقیاس‌پذیر باشد." },
        { title: "توسعه فول‌استک محصول", desc: "فرانت‌اند React/Next.js، بک‌اند Node.js، طراحی دیتابیس و دیپلوی. از صفر تا پروداکشن با دقت وسواسی." },
        { title: "اتوماسیون خلاقانه AI", desc: "پایپ‌لاین GPU محلی، یکپارچه‌سازی LLM و گردش کارهای جنریتیو که محتوای استاتیک را به سینما تبدیل می‌کند." },
      ],
    },
    experience: {
      title: "مسیر",
      summary: "۴+ سال توسعه وب و محصول. ۱۰+ سال شکل‌دهی هویت بصری.",
      items: [
        {
          id: 1,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "AFS (تهران)",
          date: "۱۴۰۳ — اکنون",
          description: "هویت برند، UI/UX و پیاده‌سازی فول‌استک وب‌سایت.",
        },
        {
          id: 2,
          role: "معمار سیستم‌های AI",
          company: "AFS (تهران)",
          date: "۱۴۰۳",
          description: "ساخت پایپ‌لاین اتوماسیون GPU محلی که فصل‌های کتاب را به تصاویر و ویدیوهای سینمایی AI تبدیل می‌کند.",
        },
        {
          id: 3,
          role: "توسعه‌دهنده فول‌استک و طراح محصول",
          company: "سنگین (مستقل)",
          date: "۱۴۰۲ — ۱۴۰۳",
          description: "طراحی و پیاده‌سازی سیستم CRM در سطح ERP برای تولیدی آهن. از صفر تا پروداکشن.",
        },
        {
          id: 4,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "مخطوط (قم)",
          date: "۱۴۰۳",
          description: "سیستم برند و پلتفرم وب، از صفر تا راه‌اندازی در ۸ هفته.",
        },
        {
          id: 5,
          role: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
          company: "رافد (قم)",
          date: "۱۴۰۰ — ۱۴۰۲",
          description: "کتابخانه کامپوننت و بازطراحی سیستم‌های درون‌سازمانی.",
        },
      ],
    },
    projects: {
      title: "آثار منتخب",
      items: [
        {
          id: 1,
          name: "AFSSOLAR",
          year: "۱۴۰۳",
          link: "https://afssolar.ir",
          role: "فول‌استک · برند · معماری CMS",
          stack: ["React 19", "Next.js", "Express", "Drizzle", "MariaDB"],
          description: "CMS Headless اختصاصی و حضور دیجیتال شرکتی برای بزرگ‌ترین تأمین‌کننده انرژی خورشیدی ایران. امتیاز عالی Lighthouse. امنیت سازمانی.",
          images: [
            "/images/AFS_1.webp",
            "/images/AFS_2.webp",
            "/images/AFS_3.webp",
          ],
        },
        {
          id: 2,
          name: "سیستم‌های رافد",
          year: "۱۴۰۰ — ۱۴۰۲",
          role: "فرانت‌اند · UI/UX · سیستم طراحی",
          stack: ["React", "کامپوننت", "بصری‌سازی داده"],
          description: "یکپارچه‌سازی ابزارهای درون‌سازمانی و معماری کامپوننت. کاهش ۳۰٪ زمان انجام وظایف.",
          images: [
            "/images/Rafed_1.webp",
            "/images/Rafed_2.webp",
          ],
        },
        {
          id: 3,
          name: "مخطوط",
          year: "۱۴۰۳",
          role: "برند · UI/UX · وب",
          stack: ["هویت برند", "Figma", "React"],
          description: "خط کامل برند تا وب‌سایت در ۸ هفته. از ایده تا هویت آماده بازار.",
          images: [
            "/images/Makhtoot_1.webp",
            "/images/Makhtoot_2.webp",
          ],
        },
        {
          id: 4,
          name: "ویژوالایزر کتاب AI",
          year: "۱۴۰۳",
          role: "سیستم‌های AI · اتوماسیون · پایپ‌لاین GPU محلی",
          stack: ["Python", "Stable Diffusion", "ComfyUI", "LLM", "GPU محلی"],
          description: "پایپ‌لاین اتوماسیون end-to-end که فصل‌های کتاب را می‌خواند، پرامپت‌های سینمایی تولید می‌کند، تصویر می‌سازد و ویدیو رندر می‌دهد — همه روی GPU محلی بدون وابستگی به ابر.",
          images: [
            "/images/AIBook_1.webp",
            "/images/AIBook_2.webp",
          ],
        },
        {
          id: 5,
          name: "سنگین CRM",
          year: "۱۴۰۲ — ۱۴۰۳",
          link: "#",
          role: "فول‌استک · معماری ERP · طراحی محصول",
          stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
          description: "سیستم CRM در سطح ERP برای یک شرکت تولیدی آهن. مدیریت موجودی، ردیابی زنجیره تأمین، روابط مشتری، گزارش‌دهی مالی و داشبورد تحلیل بلادرنگ — از صفر تا پروداکشن.",
          images: [
            "/images/Sangin_1.webp",
            "/images/Sangin_2.webp",
            "/images/Sangin_3.webp",
          ],
        },
      ],
    },
    visual: {
      title: "آرشیو بصری",
      items: [
        { id: 1, title: "هویت برند", images: ["/images/Visual_Brand_1.webp", "/images/Visual_Brand_2.webp"] },
        { id: 2, title: "عکاسی سینمایی", images: ["/images/Visual_Photo_1.webp", "/images/Visual_Photo_2.webp"] },
        { id: 3, title: "جهت‌گیری هنری", images: ["/images/Visual_Art_1.webp", "/images/Visual_Art_2.webp"] },
        { id: 4, title: "طراحی رابط", images: ["/images/Visual_UI_1.webp", "/images/Visual_UI_2.webp"] },
      ],
    },
    testimonials: {
      title: "نقل‌قول‌ها",
      items: [
        {
          id: 1,
          name: "مدیر دیجیتال، AFS",
          text: "صادق CMS اختصاصی AFSSOLAR را در ۶ هفته با امتیاز Lighthouse نزدیک به ۹۵ تحویل داد. آژانس قبلی ۴ ماه تخمین زده بود. او تمام حضور دیجیتال ما را ارتقا داد.",
        },
        {
          id: 2,
          name: "سرپرست محصول، رافد",
          text: "کتابخانه کامپوننت نه تنها زمان وظایف را ۳۰٪ کاهش داد، بلکه ابزارهای درون‌سازمانی‌مان را لوکس کرد. تیم حالا واقعاً از کار با آن لذت می‌برد.",
        },
        {
          id: 3,
          name: "مؤسس، مخطوط",
          text: "از صفر تا برند و وب‌سایت آماده بازار در ۸ هفته. صادق مخاطب ما را سریع‌تر از خودمان درک کرد و نتیجه خودش حرف می‌زند.",
        },
        {
          id: 4,
          name: "مدیر عملیات، سنگین",
          text: "سیستم CRM گلوگاه‌های زنجیره تأمین را نشان داد که ما از وجودشان خبر نداشتیم. این فقط نرم‌افزار نیست — یک ذره‌بین به کسب‌وکار خودمان است.",
        },
      ],
    },
    contact: {
      title: "بیایید بسازیم",
      message: "بگویید چه می‌سازید. ظرف ۲۴ ساعت پاسخ می‌دهم.",
      email: "m110s11061@gmail.com",
      phone: "+۹۸ ۹۳۶ ۹۹۱ ۳۲۲۸",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline: "خویشتن‌داری قدرتمندتر از هیاهو است.",
      copyright: "© {year} صادق شاهد",
    },
  },
};
