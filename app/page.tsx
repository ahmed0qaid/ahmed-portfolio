import { About } from "@/components/About";
import { AIChatWidget } from "@/components/AIChatWidget";
import { AISection } from "@/components/AISection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
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
      "عمل هندسي ضمن ICPC 2026 Online Challenge 1 powered by Huawei على مسألة Edge–Cloud Collaborative Scheduling، مع تطوير وتحسين حل C++ يغطي التجميع الديناميكي، تخصيص الموارد، موازنة زمن الاستجابة ومعدل الإنتاج، والجدولة المراعية لـ SLO.",
  };

  const challengeEn = {
    name: "ICPC 2026 Huawei Challenge — Edge–Cloud Collaborative Scheduling",
    status: "Participant",
    stack: ["C++20", "Algorithms", "Scheduling", "Optimization", "Edge/Cloud"],
    description:
      "Engineering work for ICPC 2026 Online Challenge 1 powered by Huawei on Edge–Cloud Collaborative Scheduling, with an iterative C++ solution covering dynamic batching, resource allocation, latency/throughput trade-offs, and SLO-aware scheduling.",
  };

  const attendanceAr = {
    name: "نظام إدارة دوام الموظفين — متعدد المعماريات",
    status: "مشروع تطبيقي",
    stack: ["Next.js", "Flutter", "Laravel", "Supabase", "PostgreSQL", "Business Logic"],
    description:
      "نظام أعمال لإدارة الحضور والورديات وقواعد التأخير والانصراف والغياب والسجلات المعلقة، مع تنفيذ نفس منطق العمل بعدة معماريات مستقلة للمقارنة بين تطبيقات الويب والموبايل والباك اند.",
  };

  const attendanceEn = {
    name: "Employee Attendance Management — Multi-Architecture Suite",
    status: "Applied Project",
    stack: ["Next.js", "Flutter", "Laravel", "Supabase", "PostgreSQL", "Business Logic"],
    description:
      "A business workflow system for attendance, rotating shifts, lateness, early departure, absences, pending records, and overtime, implemented across multiple independent architectures to compare web, mobile, and backend approaches.",
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
        "أركز على بناء أنظمة قابلة للاختبار والنشر والمراقبة والاستعادة: من REST APIs وقواعد البيانات إلى التنفيذ المتين، الأتمتة المحكومة بالسياسات، المراقبة، وMCP/AI infrastructure.",
      focusKicker: "التركيز الهندسي",
      focusTitle: "Backend · Cloud · Platform",
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
      title: "هوية هندسية واضحة",
      subtitle:
        "تركيزي المهني هو Backend & Cloud Software Engineering، مع امتداد إلى Platform Engineering والأنظمة الموزعة والأتمتة والبنية التحتية للذكاء الاصطناعي.",
      paragraphs: [
        "أبني أنظمة برمجية عملية تبدأ من المتطلبات وتنتهي بتطبيق قابل للنشر والصيانة. خبرتي تشمل REST APIs، SQL وقواعد البيانات العلائقية، PostgreSQL، Laravel وFastAPI، Docker وCI/CD، إضافة إلى تطوير ودعم أنظمة أعمال حقيقية وتحسينها بشكل مستمر.",
        "المشاريع الأحدث في GitHub تركز على هندسة الأنظمة أكثر من مجرد واجهات التطبيقات: تنفيذ متين وقابل للاستعادة، سياسات وموافقات للأتمتة، MCP gateways، تتبع التنفيذ باستخدام OpenTelemetry، وتكاملات AI Agents. هدفي هو بناء برمجيات structured, testable, deployable, observable, resilient وآمنة عند التعامل مع side effects.",
      ],
      stats: [
        { value: "Backend + Cloud", label: "التركيز الأساسي" },
        { value: "Platform + Distributed", label: "هندسة الأنظمة والمنصات" },
        { value: "Automation + AI Infra", label: "الأتمتة والبنية التحتية للذكاء الاصطناعي" },
      ],
    },
    servicesHeader: {
      ...content.servicesHeader,
      kicker: "القدرات",
      title: "ما الذي أبنيه؟",
      subtitle:
        "حلول Backend وCloud وPlatform تشمل APIs وقواعد البيانات والأتمتة والتكاملات والمراقبة والبنية التحتية لتطبيقات الذكاء الاصطناعي.",
    },
    skillsHeader: {
      ...content.skillsHeader,
      kicker: "المهارات",
      title: "القدرات التقنية",
      subtitle:
        "تقنيات أستخدمها لبناء أنظمة خلفية وسحابية قابلة للاختبار والنشر والمراقبة والاستعادة، وليس مجرد واجهات تطبيقات.",
    },
    projectsHeader: {
      ...content.projectsHeader,
      kicker: "GitHub Engineering",
      title: "مشاريع هندسية مختارة",
      subtitle:
        "المشاريع الأقوى التي تعكس هويتي الحالية في Backend وCloud وDistributed Systems وAutomation وAI Infrastructure، مع روابط مباشرة إلى المستودعات.",
    },
    projects: projectsAr,
    contact: {
      ...content.contact,
      kicker: "تواصل",
      title: "لنتحدث عن فرصة أو مشروع هندسي",
      subtitle: "يمكنك الوصول إلى GitHub وLinkedIn أو التواصل مباشرة لمناقشة وظيفة، تعاون، أو مشروع تقني.",
    },
    footer: {
      ...content.footer,
      text: "© 2026 أحمد شوقي محمد قائد · Backend & Cloud Software Engineering Portfolio.",
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
        "I focus on systems that are testable, deployable, observable, and recoverable: from REST APIs and databases to durable execution, policy-controlled automation, observability, and MCP/AI infrastructure.",
      focusKicker: "ENGINEERING FOCUS",
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
      title: "A Clear Engineering Identity",
      subtitle:
        "My primary focus is Backend & Cloud Software Engineering, extending into platform engineering, distributed systems, automation, and AI infrastructure.",
      paragraphs: [
        "I build practical software systems from requirements through deployment and maintenance. My experience spans REST APIs, SQL and relational data modeling, PostgreSQL, Laravel and FastAPI, Docker and CI/CD, together with hands-on delivery and support of real business systems.",
        "My newer GitHub work focuses on systems engineering rather than only application UI: durable and recoverable execution, policy-controlled automation, MCP gateways, OpenTelemetry-based tracing, and AI-agent integrations. I aim to build software that is structured, testable, deployable, observable, resilient, and safe around side effects.",
      ],
      stats: [
        { value: "Backend + Cloud", label: "Primary Focus" },
        { value: "Platform + Distributed", label: "Systems & Platform Engineering" },
        { value: "Automation + AI Infra", label: "Automation & AI Infrastructure" },
      ],
    },
    servicesHeader: {
      ...contentEn.servicesHeader,
      kicker: "Capabilities",
      title: "What I Build",
      subtitle:
        "Backend, cloud, and platform solutions spanning APIs, databases, automation, integrations, observability, and AI infrastructure.",
    },
    skillsHeader: {
      ...contentEn.skillsHeader,
      kicker: "Skills",
      title: "Engineering Capabilities",
      subtitle:
        "Technologies I use to build backend and cloud systems that are testable, deployable, observable, and recoverable—not just application interfaces.",
    },
    projectsHeader: {
      ...contentEn.projectsHeader,
      kicker: "GitHub Engineering",
      title: "Selected Engineering Projects",
      subtitle:
        "The strongest projects reflecting my current identity across backend, cloud, distributed systems, automation, and AI infrastructure, with direct repository links.",
    },
    projects: projectsEn,
    contact: {
      ...contentEn.contact,
      kicker: "Contact",
      title: "Let's Discuss an Engineering Opportunity",
      subtitle: "Explore GitHub and LinkedIn or contact me directly about a role, collaboration, or technical project.",
    },
    footer: {
      ...contentEn.footer,
      text: "© 2026 AHMED SHAWQI MOHAMMED QAID · Backend & Cloud Software Engineering Portfolio.",
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
      {portfolioContent.sections.about ? <About content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} /> : null}
      {portfolioContent.sections.services ? <Services content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} /> : null}
      {portfolioContent.sections.skills ? <Skills content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} /> : null}
      {portfolioContent.sections.projects ? <Projects content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} /> : null}
      {portfolioContent.sections.assistant ? <AISection content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} /> : null}
      {portfolioContent.sections.contact ? <Contact content={portfolioContent} contentEn={portfolioContentEn} layoutVariant={layoutVariant} whatsappButtonEnabled={settings.whatsappButtonEnabled} /> : null}
      <Footer content={portfolioContent} contentEn={portfolioContentEn} />
      {settings.whatsappButtonEnabled ? <WhatsAppButton content={portfolioContent} contentEn={portfolioContentEn} /> : null}
      <MobileBottomNav content={portfolioContent} />
      {portfolioContent.sections.chatWidget ? <AIChatWidget greeting={portfolioContent.ai.chatGreeting} greetingEn={portfolioContentEn.ai.chatGreeting} /> : null}
    </SiteShell>
  );
}
