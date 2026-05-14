export type Language = "en" | "fa";

export interface ProjectItem {
  id: number;
  name: string;
  year: string;
  link?: string;
  role: string;
  stack: string[];
  impact: string;
  readMore: string;
  readLess: string;
  images: string[];
}

export interface VisualItem {
  id: number;
  title: string;
  tools: string;
  impact: string;
  images: string[];
  detailsBtn: string;
  closeBtn: string;
}

export const portfolioData = {
  en: {
    nav: {
      about: "Approach",
      experience: "Experience",
      projects: "Projects",
      visual: "Visual Works",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      role: "Brand · Full-Stack · AI Systems",
      title: "Unforgettable",
      ctaPrimary: "View Work",
      ctaSecondary: "Contact",
    },
    capabilities: {
      blocks: [
        {
          title: "Brand Identity",
          description:
            "Visual systems and brand strategy with editorial sensibility",
        },
        {
          title: "Product Design",
          description: "Cinematic digital experiences with emotional depth",
        },
        {
          title: "Development",
          description:
            "Frontend craft focused on motion, rhythm, and atmosphere",
        },
        {
          title: "AI Workflow",
          description:
            "Creative augmentation through AI-assisted ideation and systems",
        },
      ],
    },
    about: {
      title: "Approach",
      statement: "I engineer cinematic digital experiences where code, motion, and strategy converge. No noise. Just impact.",
      location:
        "Based in Iran • Available for selective international projects",
      coreFocus: [
        "Front-End Development",
        "Back-End Development",
        "UI/UX Design",
        "Brand Identity",
        "Graphic Design",
        "Visual Storytelling",
        "Cinematic & Artistic Photography",
        "AI-Assisted Creative Workflow",
      ],
    },
    experience: {
      title: "Experience",
      summary:
        "4+ years web. 10+ years visual.",
      items: [
        {
          id: 1,
          role: "Senior Designer & Developer",
          company: "AFS",
          date: "2024 — Present",
        },
        {
          id: 2,
          role: "Senior Designer & Developer",
          company: "Makhtoot",
          date: "2024",
        },
        {
          id: 3,
          role: "Frontend & UI/UX",
          company: "Rafed",
          date: "2022 — 2024",
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      items: [
        {
          id: 1,
          name: "AFSSOLAR & Custom Headless CMS",
          year: "2024",
          link: "https://afssolar.ir",
          role: "Full-Stack Engineer, Senior Designer & Architect",
          stack: [
            "React 19",
            "Express",
            "Drizzle ORM",
            "MariaDB",
            "Next.js",
            "Brand Identity",
          ],
          impact: "Solar CMS, enterprise security.",
          readMore: "View",
          readLess: "Close",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
            "/images/photo-1461749280684-dccba630e2f6.webp",
            "/images/photo-1555066931-4365d14bab8c.webp",
            "/images/photo-1633356122544-f134324a6cee.webp",
          ],
        },
        {
          id: 2,
          name: "Rafed Internal Systems",
          year: "2022 - 2024",
          role: "Frontend Developer & UI/UX Designer",
          stack: ["React", "UI/UX", "Component Thinking", "Internal Systems"],
          impact: "30% faster internal workflows.",
          readMore: "View",
          readLess: "Close",
          images: [
            "/images/photo-1551288049-bebda4e38f71.webp",
            "/images/photo-1547658719-da2b51169166.webp",
          ],
        },
        {
          id: 3,
          name: "Makhtoot",
          year: "2024",
          role: "Senior Designer & Web Developer",
          stack: [
            "Brand Identity",
            "Graphic Design",
            "UI/UX",
            "Web Development",
          ],
          impact: "Brand to web, 8 weeks.",
          readMore: "View",
          readLess: "Close",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1561070791-2526d30994b5.webp",
          ],
        },
      ],
    },
    skills: {
      title: "Expertise",
      categories: [
        {
          name: "Creative Development",
          items:
            "React, Next.js, TypeScript, Motion Design, Cinematic Interfaces",
          level: 90,
        },
        {
          name: "Product & Experience",
          items:
            "UI/UX Design, Visual Systems, Interaction Design, Digital Storytelling",
          level: 85,
        },
        {
          name: "Brand & Visual",
          items:
            "Brand Identity, Art Direction, Graphic Design, Visual Narrative",
          level: 95,
        },
        {
          name: "AI Creative Systems",
          items:
            "AI-Assisted Ideation, Prompt Engineering, Creative Automation, Visual Experimentation",
          level: 88,
        },
      ],
    },
    visual: {
      title: "Visual Works",
      items: [
        {
          id: 1,
          title: "Brand Identity / Graphic Design",
          tools: "Illustrator, Photoshop, Midjourney",
          impact: "Cohesive visual language.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp",
          ],
          detailsBtn: "View",
          closeBtn: "Close",
        },
        {
          id: 2,
          title: "Cinematic Photography",
          tools: "Lightroom, Professional Camera Gear",
          impact: "Atmospheric storytelling.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp",
          ],
          detailsBtn: "View",
          closeBtn: "Close",
        },
        {
          id: 3,
          title: "Visual Narrative / Art Direction",
          tools: "Figma, AI Tools, Video Editing",
          impact: "Unified touchpoints.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp",
          ],
          detailsBtn: "View",
          closeBtn: "Close",
        },
        {
          id: 4,
          title: "Interface Design / Digital Product",
          tools: "Figma, React, UI/UX Principles",
          impact: "Streamlined workflows.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
          ],
          detailsBtn: "View",
          closeBtn: "Close",
        },
      ],
    },
    process: {
      title: "How I Work",
      steps: [
        { id: 1, title: 'Discovery & Strategy', desc: 'Understanding your exact needs and drawing a clear roadmap.' },
        { id: 2, title: 'Design & Decoupage', desc: 'Creating visual identity and user interface with the highest standards.' },
        { id: 3, title: 'Development & Execution', desc: 'Flawless coding, final testing, and project delivery.' }
      ]
    },
    testimonials: {
      title: "Client & Collaborator Testimonials",
      stats: [
        { label: "Years Experience", value: "4+" },
        { label: "Projects Delivered", value: "20+" },
        { label: "Main Services", value: "Web & Brand" },
      ],
      items: [
        {
          id: 1,
          name: "Head of Digital",
          company: "AFS (Tehran)",
          role: "Client",
          text: "Sadegh combines deep technical frontend knowledge with an eagle eye for design. He elevated our entire digital presence and branded output.",
          result: "30% increase in user engagement.",
        },
        {
          id: 2,
          name: "Product Lead",
          company: "Rafed (Qom)",
          role: "Collaborator",
          text: "His ability to craft cohesive, reusable components while maintaining high-quality UX is remarkable. A true asset to any product team.",
          result: "Halved development time for new features.",
        },
      ],
    },
    contact: {
      title: "Let's work together",
      message:
        "Tell me what you're building. I'll reply within 24 hours with a clear timeline and next steps.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedin: "linkedin.com/in/mohammad-sadegh-shahid",
      github: "github.com/mohammadsadeghshahid",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline:
        "Every project on this site was built with the belief that restraint is more powerful than noise. If you share that belief, we should talk.",
      copyright: "© {year} Sadegh Shahid",
    },
  },
  fa: {
    nav: {
      about: "رویکرد",
      experience: "تجربیات",
      projects: "پروژه‌ها",
      visual: "آثار بصری",
      testimonials: "نظرات",
      contact: "تماس",
    },
    hero: {
      role: "برند · فول‌استک · هوش مصنوعی",
      title: "فراموش‌نشدنی",
      ctaPrimary: "مشاهده آثار",
      ctaSecondary: "تماس",
    },
    capabilities: {
      blocks: [
        {
          title: "هویت برند",
          description: "سیستم‌های بصری و استراتژی برند با حساسیت ادیتوریال",
        },
        {
          title: "طراحی محصول",
          description: "تجربه‌های دیجیتال سینمایی با عمق احساسی",
        },
        {
          title: "توسعه",
          description: "صنعت‌گری فرانت‌اند با تمرکز بر موشن، ریتم و اتمسفر",
        },
        {
          title: "سیستم‌های خلاقانه مبتنی بر هوش مصنوعی",
          description:
            "تقویت خلاقیت از طریق ایده‌پردازی و سیستم‌های مبتنی بر هوش مصنوعی",
        },
      ],
    },
    about: {
      title: "رویکرد",
      statement: "من تجربه‌های دیجیتال را مهندسی می‌کنم. جایی که کد، موشن و استراتژی به هم می‌رسند. بدون هیاهو، فقط تأثیر.",
      location: "مستقر در قم • آماده برای پروژه‌های منتخب دورکاری و هیبرید",
      coreFocus: [
        "توسعه سمت کاربر (Front-End)",
        "توسعه سمت سرور (Back-End)",
        "طراحی UI/UX",
        "هویت برند",
        "طراحی گرافیک",
        "روایت بصری",
        "عکاسی هنری و سینمایی",
        "جریان‌کار خلاقانه مبتنی بر هوش مصنوعی",
      ],
    },
    experience: {
      title: "تجربیات",
      summary: "4+ سال توسعه وب. 10+ سال جهت‌گیری بصری.",
      items: [
        {
          id: 1,
          role: "طراح و توسعه‌دهنده",
          company: "AFS",
          date: "۱۴۰۳ — اکنون",
        },
        {
          id: 2,
          role: "طراح و توسعه‌دهنده",
          company: "مخطوط",
          date: "۱۴۰۳",
        },
        {
          id: 3,
          role: "فرانت‌اند و UI/UX",
          company: "رافد",
          date: "۱۴۰۰ — ۱۴۰۲",
        },
      ],
    },
    projects: {
      title: "پروژه‌های منتخب",
      items: [
        {
          id: 1,
          name: "وب‌سایت AFSSOLAR و سیستم مدیریت محتوای اختصاصی",
          year: "۱۴۰۳",
          link: "https://afssolar.ir",
          role: "توسعه‌دهنده فول‌استک و طراح ارشد",
          stack: [
            "React 19",
            "Express",
            "Drizzle ORM",
            "MariaDB",
            "Next.js",
            "هویت برند",
          ],
          impact: "سیستم خورشیدی، امنیت سازمانی.",
          readMore: "مشاهده",
          readLess: "بستن",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
            "/images/photo-1461749280684-dccba630e2f6.webp",
            "/images/photo-1555066931-4365d14bab8c.webp",
            "/images/photo-1633356122544-f134324a6cee.webp",
          ],
        },
        {
          id: 2,
          name: "سیستم‌های داخلی رافد",
          year: "۱۴۰۰ - ۱۴۰۲",
          role: "توسعه‌دهنده سمت کاربر (Front-End) و طراح UI/UX",
          stack: ["React", "UI/UX", "مبتنی بر کامپوننت", "سیستم‌های داخلی"],
          impact: "۳۰٪ سریع‌تر، گردش کار داخلی.",
          readMore: "مشاهده",
          readLess: "بستن",
          images: [
            "/images/photo-1551288049-bebda4e38f71.webp",
            "/images/photo-1547658719-da2b51169166.webp",
          ],
        },
        {
          id: 3,
          name: "مخطوط",
          year: "۱۴۰۳",
          role: "طراح ارشد و توسعه‌دهنده وب",
          stack: ["هویت برند", "طراحی گرافیک", "UI/UX", "توسعه وب"],
          impact: "برند تا وب، ۸ هفته.",
          readMore: "مشاهده",
          readLess: "بستن",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1561070791-2526d30994b5.webp",
          ],
        },
      ],
    },
    skills: {
      title: "تخصص‌ها",
      categories: [
        {
          name: "توسعه خلاق",
          items: "React, Next.js, TypeScript, طراحی موشن، رابط‌های سینمایی",
          level: 90,
        },
        {
          name: "محصول و تجربه",
          items: "طراحی UI/UX، سیستم‌های بصری، طراحی تعامل، روایت دیجیتال",
          level: 85,
        },
        {
          name: "برند و بصری",
          items: "هویت برند، مدیریت هنری، طراحی گرافیک، روایت بصری",
          level: 95,
        },
        {
          name: "سیستم‌های خلاقانه مبتنی بر هوش مصنوعی",
          items:
            "ایده‌پردازی با کمک هوش مصنوعی، مهندسی پرامپت، اتوماسیون خلاق، آزمایش‌های بصری",
          level: 88,
        },
      ],
    },
    visual: {
      title: "آثار بصری",
      items: [
        {
          id: 1,
          title: "هویت برند / طراحی گرافیک",
          tools: "Illustrator, Photoshop, Midjourney",
          impact: "زبان بصری منسجم.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp",
          ],
          detailsBtn: "مشاهده",
          closeBtn: "بستن",
        },
        {
          id: 2,
          title: "عکاسی سینمایی",
          tools: "لایت‌روم، تجهیزات حرفه‌ای عکاسی",
          impact: "روایت جوی.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp",
          ],
          detailsBtn: "مشاهده",
          closeBtn: "بستن",
        },
        {
          id: 3,
          title: "روایت بصری / جهت‌گیری هنری",
          tools: "Figma, AI Tools, ویرایش ویدیو",
          impact: "نقاط تماس یکپارچه.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp",
          ],
          detailsBtn: "مشاهده",
          closeBtn: "بستن",
        },
        {
          id: 4,
          title: "طراحی رابط کاربری / محصول دیجیتال",
          tools: "Figma, React, اصول UI/UX",
          impact: "گردش کار ساده‌شده.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
          ],
          detailsBtn: "مشاهده",
          closeBtn: "بستن",
        },
      ],
    },
    process: {
      title: 'مسیر انجام کار',
      steps: [
        { id: 1, title: 'کشف و استراتژی', desc: 'فهمیدن دقیق نیاز شما و ترسیم نقشه راه.' },
        { id: 2, title: 'طراحی و دکوپاژ', desc: 'خلق هویت بصری و رابط کاربری با بالاترین استاندارد.' },
        { id: 3, title: 'توسعه و اجرا', desc: 'کدنویسی بی‌نقص، تست‌های نهایی و تحویل پروژه.' }
      ]
    },
    testimonials: {
      title: "نظرات همکاران و کارفرمایان",
      stats: [
        { label: "سال تجربه", value: "+۴" },
        { label: "پروژه موفق", value: "+۲۰" },
        { label: "خدمات اصلی", value: "وب و برند" },
      ],
      items: [
        {
          id: 1,
          name: "مدیر دیجیتال",
          company: "AFS (تهران)",
          role: "کارفرما",
          text: "صادق دانش عمیق فنی فرانت‌اند را با دیدگاهی دقیق در طراحی ترکیب می‌کند. او تمام حضور دیجیتال و خروجی برند ما را ارتقا داد.",
          result: "۳۰٪ افزایش در تعامل کاربران.",
        },
        {
          id: 2,
          name: "سرپرست محصول",
          company: "رافد (قم)",
          role: "همکار",
          text: "توانایی او در ساخت کامپوننت‌های منسجم و قابل استفاده مجدد و در عین حال حفظ تجربه کاربری با کیفیت بالا، قابل توجه است. یک مهره ارزشمند برای هر تیم محصول.",
          result: "کاهش ۵۰٪ زمان توسعه ویژگی‌های جدید.",
        },
      ],
    },
    contact: {
      title: "همکاری",
      message:
        "بگو چه می‌سازی. ظرف ۲۴ ساعت پاسخ می‌دهم با یک زمان‌بندی روشن و گام‌های بعدی.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedin: "linkedin.com/in/mohammad-sadegh-shahid",
      github: "github.com/mohammadsadeghshahid",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline:
        "هر پروژه‌ای در این سایت با این باور ساخته شده که خویشتن‌داری قدرتمندتر از هیاهو است. اگر شما هم به این باور دارید، باید با هم صحبت کنیم.",
      copyright: "© {year} sadegh shahid",
    },
  },
};
