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
    stack: ["C++17", "Algorithms", "Scheduling", "Optimization", "Edge/Cloud"],
    description:
      "شاركت في ICPC 2026 Online Challenge 1 powered by Huawei وطورت حلاً بلغة C++ للمسألة A: Edge–Cloud Collaborative Scheduling، مع تحسينات متتابعة شملت التجميع الديناميكي، تخصيص الموارد، موازنة زمن الاستجابة ومعدل الإنتاج، والجدولة المراعية لـ SLO.",
  };

  const challengeEn = {
    name: "ICPC 2026 Huawei Challenge — Edge–Cloud Collaborative Scheduling",
    status: "Participant",
    stack: ["C++17", "Algorithms", "Scheduling", "Optimization", "Edge/Cloud"],
    description:
      "Participated in ICPC 2026 Online Challenge 1 powered by Huawei and developed an iterative C++ solution for Problem A: Edge–Cloud Collaborative Scheduling, exploring dynamic batching, resource allocation, latency/throughput trade-offs, SLO-aware scheduling, and model-predictive scheduling strategies.",
  };

  const attendanceAr = {
    name: "نظام إدارة دوام الموظفين — متعدد المعماريات",
    status: "مشروع مميز",
    stack: ["Next.js", "Flutter", "Laravel", "Supabase", "PostgreSQL", "Responsive UI"],
    description:
      "نظام متكامل لحساب وإدارة دوام الموظفين يدعم وردية واحدة أو ورديتين متناوبتين أسبوعيًا، الحضور والانصراف، التأخير، الانصراف المبكر، الغياب، السجلات المعلقة، والوقت الإضافي بعد نهاية الوردية. تم تنفيذ نفس منطق العمل بأربع معماريات مستقلة للمقارنة بين تقنيات الويب والموبايل والباك اند.",
  };

  const attendanceEn = {
    name: "Employee Attendance Management — Multi-Architecture Suite",
    status: "Featured Project",
    stack: ["Next.js", "Flutter", "Laravel", "Supabase", "PostgreSQL", "Responsive UI"],
    description:
      "A complete employee attendance and shift management system supporting single or weekly rotating shifts, check-in/out tracking, lateness, early departure, absences, pending records, and overtime after the scheduled shift. The same business logic is implemented in four independent architectures to compare modern web, mobile, and backend stacks.",
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
      logoText: "AQ",
    },
    about: {
      ...content.about,
      kicker: "نبذة",
      title: "نبذة مهنية مختصرة",
      subtitle: "تركيزي المهني يجمع بين هندسة البرمجيات، الباك اند، قواعد البيانات، والذكاء الاصطناعي وتطبيقات النماذج اللغوية الكبيرة.",
      paragraphs: [
        "تقني معلومات ومهندس برمجيات مبتدئ، لدي خبرة عملية في بناء ودعم تطبيقات أعمال حقيقية. طورت نظام إدارة داخليًا وموقعًا خاصًا بشركة تعمل في المجال الصناعي، وعملت عمليًا على SQL وقواعد البيانات العلائقية وواجهات REST APIs والمصادقة وتصحيح الأخطاء والتحسين المستمر للخصائص.",
        "كما طورت وحسّنت بشكل تكراري حلًا بلغة C++ لتحدي Edge–Cloud Collaborative Scheduling ضمن ICPC 2026 Online Challenge 1 powered by Huawei، مما عزز مهاراتي في الخوارزميات والجدولة وموازنة الأداء والتفكير في الأنظمة. أركز مهنيًا على Backend Development والذكاء الاصطناعي، مع اهتمام خاص بتطبيقات LLMs ودمجها مع الأنظمة والخدمات الخلفية وبناء حلول عملية مدعومة بالذكاء الاصطناعي.",
      ],
      stats: [
        { value: "IT", label: "تقنية معلومات" },
        { value: "Backend + AI", label: "المجال الرئيسي" },
        { value: "95.76% | 3.83/4.00", label: "المعدل التراكمي | GPA" },
      ],
    },
    servicesHeader: {
      ...content.servicesHeader,
      kicker: "الخدمات",
      title: "الخدمات التقنية",
      subtitle: "تطوير حلول عملية تشمل الباك اند، تطبيقات الويب والموبايل، قواعد البيانات، والأتمتة.",
    },
    skillsHeader: {
      ...content.skillsHeader,
      kicker: "المهارات",
      title: "المهارات التقنية",
      subtitle: "تقنيات وأدوات أستخدمها في تطوير الأنظمة والتطبيقات وبناء الحلول البرمجية.",
    },
    projectsHeader: {
      ...content.projectsHeader,
      kicker: "المشاريع",
      title: "مشاريع مختارة",
      subtitle: "مشاريع مختارة توضح الفكرة، التقنيات المستخدمة، وطبيعة العمل التقني في كل مشروع.",
    },
    projects: projectsAr,
    contact: {
      ...content.contact,
      kicker: "تواصل",
      title: "ابدأ طلبك الآن",
      subtitle: "اختر وسيلة التواصل المناسبة وشارك تفاصيل طلبك أو مشروعك.",
    },
    footer: {
      ...content.footer,
      text: "© 2026 أحمد شوقي محمد قائد. معرض أعمال برمجي ونظام استقبال طلبات ذكي.",
    },
  };

  const portfolioContentEn = {
    ...contentEn,
    profile: {
      ...contentEn.profile,
      nameAr: "AHMED SHAWQI MOHAMMED QAID",
      nameEn: "AHMED SHAWQI MOHAMMED QAID",
      logoText: "AQ",
    },
    about: {
      ...contentEn.about,
      kicker: "About",
      title: "Professional Summary",
      subtitle: "My current focus combines software engineering, backend development, databases, AI, and practical LLM applications.",
      paragraphs: [
        "Information Technology specialist and entry-level software engineer with hands-on experience building and supporting real-world business applications. Developed an internal management system and company website for a manufacturing business, with practical work in SQL, relational databases, REST APIs, authentication, debugging, and iterative feature enhancement.",
        "Also developed and iteratively optimized a C++ edge-cloud scheduling solution for ICPC 2026 Online Challenge 1 powered by Huawei, strengthening skills in algorithms, scheduling, performance trade-offs, and systems thinking. Professionally focused on backend engineering and artificial intelligence, with a particular interest in LLM applications, integrating AI capabilities into backend systems, and building practical AI-powered services.",
      ],
      stats: [
        { value: "IT", label: "Information Technology" },
        { value: "Backend + AI", label: "Primary Focus" },
        { value: "95.76% | 3.83/4.00", label: "Cumulative Average | GPA Equivalent" },
      ],
    },
    servicesHeader: {
      ...contentEn.servicesHeader,
      kicker: "Services",
      title: "Technical Services",
      subtitle: "Practical solutions across backend development, web and mobile applications, databases, and automation.",
    },
    skillsHeader: {
      ...contentEn.skillsHeader,
      kicker: "Skills",
      title: "Technical Skills",
      subtitle: "Technologies and tools I use to build applications, systems, and practical software solutions.",
    },
    projectsHeader: {
      ...contentEn.projectsHeader,
      kicker: "Projects",
      title: "Selected Projects",
      subtitle: "Selected projects highlighting the idea, technologies used, and the technical work involved in each project.",
    },
    projects: projectsEn,
    contact: {
      ...contentEn.contact,
      kicker: "Contact",
      title: "Start Your Request Now",
      subtitle: "Choose the contact method that works best for you and share the details of your request or project.",
    },
    footer: {
      ...contentEn.footer,
      text: "© 2026 AHMED SHAWQI MOHAMMED QAID. Software engineering portfolio and AI-assisted client intake system.",
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
