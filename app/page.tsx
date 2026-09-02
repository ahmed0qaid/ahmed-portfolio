import { ConfigurableAIChat } from "@/components/ConfigurableAIChat";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ManagedSections } from "@/components/ManagedSections";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getSiteSettings } from "@/lib/site-settings";

export const dynamic = "force-dynamic";

export default async function Home() {
  const settings = await getSiteSettings();
  const { content, contentEn, themeVariant, layoutVariant } = settings;

  const challengeAr = {
    name: "تحدي ICPC 2026 لهواوي — الجدولة التعاونية بين الحافة والسحابة",
    status: "مشارك",
    stack: ["C++20", "Algorithms", "Scheduling", "Optimization", "Edge/Cloud"],
    description:
      "شاركت في ICPC 2026 Online Challenge 1 powered by Huawei وعملت على مسألة Edge–Cloud Collaborative Scheduling، وطورت حلًا بلغة C++ شمل التجميع الديناميكي، تخصيص الموارد، موازنة زمن الاستجابة ومعدل الإنتاج، والجدولة المراعية لـ SLO.",
  };

  const challengeEn = {
    name: "ICPC 2026 Huawei Challenge — Edge–Cloud Collaborative Scheduling",
    status: "Participant",
    stack: ["C++20", "Algorithms", "Scheduling", "Optimization", "Edge/Cloud"],
    description:
      "Participated in ICPC 2026 Online Challenge 1 powered by Huawei and worked on Edge–Cloud Collaborative Scheduling, developing an iterative C++ solution covering dynamic batching, resource allocation, latency/throughput trade-offs, and SLO-aware scheduling.",
  };

  const attendanceAr = {
    name: "نظام إدارة دوام الموظفين — متعدد المعماريات",
    status: "مشروع تطبيقي",
    stack: ["Next.js", "Flutter", "Laravel", "Supabase", "PostgreSQL", "Business Logic"],
    description:
      "طورت نظامًا لإدارة الحضور والورديات وقواعد التأخير والانصراف والغياب والسجلات المعلقة، ونفذت منطق العمل نفسه بعدة معماريات مستقلة باستخدام تقنيات ويب وموبايل وباك اند مختلفة.",
  };

  const attendanceEn = {
    name: "Employee Attendance Management — Multi-Architecture Suite",
    status: "Applied Project",
    stack: ["Next.js", "Flutter", "Laravel", "Supabase", "PostgreSQL", "Business Logic"],
    description:
      "Built a business workflow system for attendance, rotating shifts, lateness, early departure, absences, pending records, and overtime, implementing the same business logic across multiple web, mobile, and backend architectures.",
  };

  const projectsWithChallengeAr = content.projects.some((project) => project.name.includes("ICPC 2026"))
    ? content.projects
    : [...content.projects, challengeAr];

  const projectsWithChallengeEn = contentEn.projects.some((project) => project.name.includes("ICPC 2026"))
    ? contentEn.projects
    : [...contentEn.projects, challengeEn];

  const projectsAr = projectsWithChallengeAr.some((project) => project.name.includes("نظام إدارة دوام الموظفين"))
    ? projectsWithChallengeAr
    : [...projectsWithChallengeAr, attendanceAr];

  const projectsEn = projectsWithChallengeEn.some((project) => project.name.includes("Employee Attendance"))
    ? projectsWithChallengeEn
    : [...projectsWithChallengeEn, attendanceEn];

  const portfolioContent = {
    ...content,
    profile: {
      ...content.profile,
      nameAr: "أحمد شوقي محمد قائد",
      nameEn: "AHMED SHAWQI MOHAMMED QAID",
      titleAr: "مهندس برمجيات متخصص في Backend وCloud، أبني أنظمة خلفية موثوقة، APIs، قواعد بيانات، منصات أتمتة وبنية تحتية لتطبيقات الذكاء الاصطناعي.",
      titleEn: "Backend & Cloud Software Engineer building reliable backend systems, APIs, databases, automation platforms, distributed runtimes, and AI infrastructure.",
      logoText: "AQ",
    },
    hero: {
      ...content.hero,
      badge: "Backend · Cloud · Platform · AI Infrastructure",
      highlightedTitle: "مهندس Backend & Cloud",
      description:
        "أبني أنظمة خلفية وسحابية موثوقة، من REST APIs وقواعد البيانات إلى التنفيذ المتين، الأتمتة المحكومة بالسياسات، المراقبة، وبنية MCP وAI Agents.",
      focusKicker: "تركيزي الحالي",
      focusTitle: "باك إند · سحابة · منصات",
      focusItems: [
        "هندسة الباك اند وواجهات REST APIs",
        "هندسة السحابة والمنصات وقواعد البيانات",
        "الأنظمة الموزعة والتنفيذ المتين والاستعادة",
        "الأتمتة وMCP والسياسات والموافقات",
        "المراقبة وOpenTelemetry وبنية AI Agents",
      ],
    },
    about: {
      ...content.about,
      kicker: "نبذة",
      title: "نبذة عني",
      subtitle:
        "أركز على Backend & Cloud Software Engineering، مع اهتمام بهندسة المنصات والأنظمة الموزعة والأتمتة والبنية التحتية للذكاء الاصطناعي.",
      paragraphs: [
        "أبني أنظمة برمجية تبدأ من فهم المتطلبات وتنتهي بتطبيق قابل للنشر والصيانة. أعمل على REST APIs، SQL وقواعد البيانات العلائقية، PostgreSQL، Laravel وFastAPI، Docker وCI/CD، ولدي خبرة عملية في تطوير ودعم أنظمة أعمال وتحسينها بشكل مستمر.",
        "في مشاريعي أعمل على التنفيذ المتين والقابل للاستعادة، الأتمتة المحكومة بالسياسات والموافقات، MCP gateways، تتبع التنفيذ باستخدام OpenTelemetry، وتكاملات AI Agents. أهتم بأن يكون الكود منظمًا، قابلًا للاختبار والنشر والمراقبة، ويتعامل مع الأعطال والعمليات الخارجية بصورة آمنة.",
      ],
      stats: [
        { value: "Backend + Cloud", label: "التركيز الأساسي" },
        { value: "Platform + Distributed", label: "الأنظمة والمنصات" },
        { value: "Automation + AI Infra", label: "الأتمتة وبنية الذكاء الاصطناعي" },
      ],
    },
    servicesHeader: {
      ...content.servicesHeader,
      kicker: "مجالات العمل",
      title: "ما أعمل عليه",
      subtitle:
        "Backend وCloud وPlatform Engineering، مع APIs وقواعد البيانات والأتمتة والتكاملات والمراقبة وبنية تطبيقات الذكاء الاصطناعي.",
    },
    skillsHeader: {
      ...content.skillsHeader,
      kicker: "المهارات",
      title: "التقنيات التي أستخدمها",
      subtitle:
        "مجموعة التقنيات والأدوات التي أعتمد عليها في بناء الأنظمة الخلفية والسحابية والمنصات والأتمتة.",
    },
    projectsHeader: {
      ...content.projectsHeader,
      kicker: "المشاريع",
      title: "مشاريع مختارة",
      subtitle:
        "نماذج من عملي في Backend وCloud والأنظمة الموزعة والأتمتة والبنية التحتية للذكاء الاصطناعي.",
    },
    projects: projectsAr,
    contact: {
      ...content.contact,
      kicker: "تواصل",
      title: "لنتواصل",
      subtitle: "للفرص المهنية أو التعاون أو مناقشة مشروع تقني، يمكنك التواصل معي مباشرة أو زيارة GitHub وLinkedIn.",
    },
    footer: {
      ...content.footer,
      text: "© 2026 أحمد شوقي محمد قائد · Backend & Cloud Software Engineer.",
    },
  };

  const portfolioContentEn = {
    ...contentEn,
    profile: {
      ...contentEn.profile,
      nameAr: "AHMED SHAWQI MOHAMMED QAID",
      nameEn: "AHMED SHAWQI MOHAMMED QAID",
      titleAr: "Backend & Cloud Software Engineer",
      titleEn: "Backend & Cloud Software Engineer building reliable backend systems, APIs, databases, automation platforms, distributed runtimes, and AI infrastructure.",
      logoText: "AQ",
    },
    hero: {
      ...contentEn.hero,
      badge: "Backend · Cloud · Platform · AI Infrastructure",
      highlightedTitle: "Backend & Cloud Engineer",
      description:
        "I build reliable backend and cloud systems, from REST APIs and databases to durable execution, policy-controlled automation, observability, and MCP/AI-agent infrastructure.",
      focusKicker: "CURRENT FOCUS",
      focusTitle: "Backend · Cloud · Platform",
      focusItems: [
        "Backend engineering and REST APIs",
        "Cloud, platform engineering, and databases",
        "Distributed systems, durable execution, and recovery",
        "Automation, MCP, policy, and approvals",
        "Observability, OpenTelemetry, and AI-agent infrastructure",
      ],
    },
    about: {
      ...contentEn.about,
      kicker: "About",
      title: "About Me",
      subtitle:
        "I focus on Backend & Cloud Software Engineering, with interests in platform engineering, distributed systems, automation, and AI infrastructure.",
      paragraphs: [
        "I build software systems from requirements through deployment and maintenance. I work with REST APIs, SQL and relational data modeling, PostgreSQL, Laravel and FastAPI, Docker and CI/CD, with hands-on experience developing, supporting, and continuously improving real business systems.",
        "My projects include durable and recoverable execution, policy-controlled automation and approvals, MCP gateways, OpenTelemetry-based tracing, and AI-agent integrations. I care about software that is structured, testable, deployable, observable, resilient, and safe around external side effects.",
      ],
      stats: [
        { value: "Backend + Cloud", label: "Primary Focus" },
        { value: "Platform + Distributed", label: "Systems & Platforms" },
        { value: "Automation + AI Infra", label: "Automation & AI Infrastructure" },
      ],
    },
    servicesHeader: {
      ...contentEn.servicesHeader,
      kicker: "Work Areas",
      title: "What I Work On",
      subtitle:
        "Backend, cloud, and platform engineering across APIs, databases, automation, integrations, observability, and AI infrastructure.",
    },
    skillsHeader: {
      ...contentEn.skillsHeader,
      kicker: "Skills",
      title: "Technologies I Use",
      subtitle:
        "The technologies and tools I use across backend systems, cloud platforms, distributed systems, automation, and AI infrastructure.",
    },
    projectsHeader: {
      ...contentEn.projectsHeader,
      kicker: "Projects",
      title: "Selected Projects",
      subtitle:
        "A selection of my work across backend, cloud, distributed systems, automation, and AI infrastructure.",
    },
    projects: projectsEn,
    contact: {
      ...contentEn.contact,
      kicker: "Contact",
      title: "Get in Touch",
      subtitle: "For professional opportunities, collaboration, or a technical project, contact me directly or visit my GitHub and LinkedIn.",
    },
    footer: {
      ...contentEn.footer,
      text: "© 2026 AHMED SHAWQI MOHAMMED QAID · Backend & Cloud Software Engineer.",
    },
  };

  return (
    <SiteShell
      initialThemeVariant={themeVariant}
      layoutVariant={layoutVariant}
      defaultLanguage={settings.defaultLanguage}
      colorRotationEnabled={settings.colorRotationEnabled}
      colorRotationIntervalSeconds={settings.colorRotationIntervalSeconds}
    >
      <Navbar cvDownloadEnabled={settings.cvDownloadEnabled} content={portfolioContent} contentEn={portfolioContentEn} defaultLanguage={settings.defaultLanguage} />
      <Hero cvDownloadEnabled={settings.cvDownloadEnabled} content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} />
      <ManagedSections
        content={portfolioContent}
        contentEn={portfolioContentEn}
        layoutVariant={layoutVariant}
        sectionOrder={settings.controls.sectionOrder}
        whatsappButtonEnabled={settings.whatsappButtonEnabled}
      />
      <Footer content={portfolioContent} contentEn={portfolioContentEn} />
      {settings.whatsappButtonEnabled ? <WhatsAppButton content={portfolioContent} contentEn={portfolioContentEn} /> : null}
      <MobileBottomNav content={portfolioContent} />
      {portfolioContent.sections.chatWidget ? (
        <ConfigurableAIChat
          greeting={portfolioContent.ai.chatGreeting}
          greetingEn={portfolioContentEn.ai.chatGreeting}
          defaultOpen={settings.controls.chatDefaultOpen}
        />
      ) : null}
    </SiteShell>
  );
}
