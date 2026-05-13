export type Language = "en" | "fa";

export interface ProjectItem {
  id: number;
  name: string;
  year: string;
  link?: string;
  role: string;
  stack: string[];
  impact: string;
  images: string[];
}

export interface VisualItem {
  id: number;
  title: string;
  tools: string;
  concept: string;
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
      role: "Brand Identity Designer · Full-Stack Developer · AI Creative Systems",
      title: "Most websites are forgettable.\nMine aren't.",
      description:
        "Digital experiences shot like cinema — where every transition earns trust and every detail converts attention into action.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Start a Project",
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
        "4+ years in Web & Product Development. 10+ years in Visual Direction & Brand Identity.",
      items: [
        {
          id: 1,
          role: "Senior Designer & Web Developer",
          company: "AFS (Tehran)",
          date: "Nov 2024 - Present",
          description:
            "Led a multidisciplinary workflow covering brand identity, graphic assets, complete UI/UX, and end-to-end website implementation, while also using AI tools for design enhancement, content production, product development, video creation, and teaser editing.",
        },
        {
          id: 2,
          role: "Senior Designer & Web Developer",
          company: "Makhtoot (Qom)",
          date: "Feb 2024 - Apr 2024",
          description:
            "Built the brand identity from concept to detailed execution, produced the required graphic assets, and then designed the UI/UX and fully developed the website with a brand-led approach.",
        },
        {
          id: 3,
          role: "Frontend Developer & UI/UX Designer",
          company: "Rafed (Qom)",
          date: "Jan 2022 - Mar 2024",
          description:
            "Designed UI/UX and developed frontend interfaces for the company and its internal systems, with a focus on usability, structured interfaces, and reusable product components.",
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
          impact: "+30% engagement and enterprise-grade security.",
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
          impact: "-30% task time across 5 internal platforms.",
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
          impact: "Brand and website launched in 8 weeks.",
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
          concept:
            "Creating a cohesive visual language from logos to marketing assets across physical and digital mediums.",
          impact:
            "Established strong, recognizable brand presences that accurately reflect company values.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp",
          ],
          detailsBtn: "View Details",
          closeBtn: "Close",
        },
        {
          id: 2,
          title: "Cinematic Photography",
          tools: "Lightroom, Professional Camera Gear",
          concept:
            "Capturing atmospheric and narrative-driven imagery to tell a visual story.",
          impact:
            "Enhanced visual storytelling for campaigns and personal art projects.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp",
          ],
          detailsBtn: "View Details",
          closeBtn: "Close",
        },
        {
          id: 3,
          title: "Visual Narrative / Art Direction",
          tools: "Figma, AI Tools, Video Editing",
          concept:
            "Guiding the creative vision for digital products and campaigns.",
          impact:
            "Delivered unified aesthetic experiences across all user touchpoints.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp",
          ],
          detailsBtn: "View Details",
          closeBtn: "Close",
        },
        {
          id: 4,
          title: "Interface Design / Digital Product",
          tools: "Figma, React, UI/UX Principles",
          concept:
            "Designing intuitive and accessible user interfaces with a focus on component architecture.",
          impact:
            "Improved user satisfaction and streamlined organizational workflows.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
          ],
          detailsBtn: "View Details",
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
          text: "He elevated our entire digital presence and branded output.",
        },
        {
          id: 2,
          name: "Product Lead",
          company: "Rafed (Qom)",
          role: "Collaborator",
          text: "A true asset to any product team.",
        },
      ],
    },
    humanMoment: {
      quote:
        "I once spent three hours adjusting the easing on a button hover. Nobody will notice. Everybody will feel it.",
      attribution: "",
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
      role: "طراح هویت برند · توسعه‌دهنده فول‌استک · سیستم‌های خلاقانه AI",
      title: "اغلب وب‌سایت‌ها فراموش‌شدنی‌اند.\nمن فراموش‌نشدنی می‌سازم.",
      description:
        "تجربه‌های دیجیتالی با دکوپاژ سینمایی — جایی که هر ترنزیشن اعتماد می‌سازد و هر جزئیات، توجه را به عمل تبدیل می‌کند.",
      ctaPrimary: "مشاهده پروژه‌ها",
      ctaSecondary: "شروع یک پروژه",
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
      summary: "۴+ سال توسعه وب و محصول. ۱۰+ سال جهت‌گیری بصری و هویت برند.",
      items: [
        {
          id: 1,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "AFS (تهران)",
          date: "آبان ۱۴۰۳ - اکنون",
          description:
            "هویت برند، گرافیک، طراحی و توسعه کامل وب‌سایت. استفاده از هوش مصنوعی برای بهبود طراحی، محتوا و تولید ویدیو.",
        },
        {
          id: 2,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "مخطوط (قم)",
          date: "بهمن ۱۴۰۲ - اردیبهشت ۱۴۰۳",
          description:
            "هویت برند از ایده تا اجرا. تولید گرافیک، طراحی UI/UX و توسعه وب‌سایت با رویکرد برندمحور.",
        },
        {
          id: 3,
          role: "توسعه‌دهنده سمت کاربر (Front-End) و طراح UI/UX",
          company: "رافد (قم)",
          date: "دی ۱۴۰۰ - اسفند ۱۴۰۲",
          description:
            "طراحی UI/UX و توسعه سمت کاربر برای سیستم‌های درون‌سازمانی. تمرکز بر تجربه کاربری و کامپوننت‌های قابل استفاده مجدد.",
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
          impact: "استقرار ۱۰۰٪ خودکار و امنیت در سطح سازمانی.",
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
          impact: "کاهش ۳۰ درصدی زمان وظایف در ۵ پلتفرم.",
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
          impact: "راه‌اندازی کامل برند و وب‌سایت در ۸ هفته.",
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
          concept:
            "ایجاد یک زبان بصری منسجم از لوگوها تا دارایی‌های بازاریابی.",
          impact: "تثبیت حضور قوی و قابل تشخیص برند از طریق کانال‌های مختلف.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن",
        },
        {
          id: 2,
          title: "عکاسی سینمایی",
          tools: "لایت‌روم، تجهیزات حرفه‌ای عکاسی",
          concept: "ثبت تصاویر جوی و داستان‌محور برای روایت یک داستان بصری.",
          impact: "ارتقاء روایت بصری برای کمپین‌ها و پروژه‌های هنری شخصی.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن",
        },
        {
          id: 3,
          title: "روایت بصری / جهت‌گیری هنری",
          tools: "Figma, AI Tools, ویرایش ویدیو",
          concept: "هدایت چشم‌انداز خلاقانه برای محصولات دیجیتال و کمپین‌ها.",
          impact: "ارائه تجربیات بصری یکپارچه در تمام نقاط تماس کاربر.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن",
        },
        {
          id: 4,
          title: "طراحی رابط کاربری / محصول دیجیتال",
          tools: "Figma, React, اصول UI/UX",
          concept:
            "طراحی رابط‌های کاربری بصری و در دسترس با تمرکز بر معماری کامپوننت.",
          impact: "بهبود رضایت کاربر و ساده‌سازی جریان‌های کاری سازمانی.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
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
          text: "او تمام حضور دیجیتال و خروجی برند ما را ارتقا داد.",
        },
        {
          id: 2,
          name: "سرپرست محصول",
          company: "رافد (قم)",
          role: "همکار",
          text: "یک مهره ارزشمند برای هر تیم محصول.",
        },
      ],
    },
    humanMoment: {
      quote:
        "یک بار سه ساعت را صرف تنظیم نرمیِ حرکتِ هاور یک دکمه کردم. هیچکس متوجه نخواهد شد. همه آن را حس خواهند کرد.",
      attribution: "",
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
