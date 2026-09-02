import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { getSiteSettings } from "@/lib/site-settings";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";
import { serviceIconMap } from "./icon-map";

type ServicesProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

const engineeringCapabilities = [
  {
    icon: "server" as const,
    titleAr: "Backend Engineering & APIs",
    titleEn: "Backend Engineering & APIs",
    descriptionAr: "تصميم وبناء REST APIs ومنطق الأعمال والمصادقة والتكاملات باستخدام Python وFastAPI وLaravel وSQL، مع التركيز على الوضوح والاختبار وقابلية الصيانة.",
    descriptionEn: "Designing REST APIs, business logic, authentication, and service integrations with Python, FastAPI, Laravel, and SQL, with emphasis on clarity, testing, and maintainability.",
  },
  {
    icon: "code" as const,
    titleAr: "Cloud & Platform Engineering",
    titleEn: "Cloud & Platform Engineering",
    descriptionAr: "بناء تطبيقات وخدمات قابلة للنشر باستخدام Docker وDocker Compose وGitHub Actions وCI/CD وإدارة الإعدادات والبيئات بصورة قابلة لإعادة الإنتاج.",
    descriptionEn: "Building deployable services with Docker, Docker Compose, GitHub Actions, CI/CD, and reproducible environment and configuration management.",
  },
  {
    icon: "database" as const,
    titleAr: "Databases & Data Modeling",
    titleEn: "Databases & Data Modeling",
    descriptionAr: "تصميم نماذج بيانات علائقية، migrations، queries وتدفقات تخزين باستخدام PostgreSQL وMySQL وSQL Server وSQLite وSupabase وPrisma.",
    descriptionEn: "Relational data modeling, migrations, queries, and persistence workflows with PostgreSQL, MySQL, SQL Server, SQLite, Supabase, and Prisma.",
  },
  {
    icon: "workflow" as const,
    titleAr: "Distributed & Durable Systems",
    titleEn: "Distributed & Durable Systems",
    descriptionAr: "تصميم أنماط تنفيذ متينة تشمل checkpoints وworker leases وheartbeats وretry/backoff وidempotency وحماية التزامن والاستعادة بعد الأعطال.",
    descriptionEn: "Designing durable execution patterns with checkpoints, worker leases, heartbeats, retry/backoff, idempotency, concurrency protection, and crash recovery.",
  },
  {
    icon: "bot" as const,
    titleAr: "Automation & AI Infrastructure",
    titleEn: "Automation & AI Infrastructure",
    descriptionAr: "بناء طبقات تحكم للأتمتة وAI Agents تشمل MCP، policy engines، approvals، safe side effects، تكاملات LLM وn8n ومسارات تنفيذ قابلة للتدقيق.",
    descriptionEn: "Building automation and AI-agent infrastructure with MCP, policy engines, approvals, safe side effects, LLM integrations, n8n, and auditable execution paths.",
  },
  {
    icon: "smartphone" as const,
    titleAr: "Observability & Reliability",
    titleEn: "Observability & Reliability",
    descriptionAr: "إضافة tracing ومؤشرات التنفيذ والأخطاء والتكلفة باستخدام OpenTelemetry، مع تصميم أنظمة قابلة للمراقبة والتحليل والتعافي بدل الاعتماد على السلوك غير المرئي.",
    descriptionEn: "Adding tracing, execution signals, error and cost metadata with OpenTelemetry, and designing systems that are observable, diagnosable, and recoverable.",
  },
];

export async function Services({ content, contentEn, layoutVariant }: ServicesProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;
  const { controls } = await getSiteSettings();
  const columnsClass = controls.servicesColumns === 4
    ? "xl:grid-cols-4"
    : controls.servicesColumns === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-3";

  return (
    <section id="services" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader
          {...content.servicesHeader}
          kickerEn={english.servicesHeader.kicker}
          titleEn={english.servicesHeader.title}
          subtitleEn={english.servicesHeader.subtitle}
        />
        <div className={`mt-7 grid gap-4 sm:mt-8 sm:gap-5 lg:mt-10 md:grid-cols-2 ${columnsClass}`}>
          {engineeringCapabilities.map((service, index) => {
            const Icon = serviceIconMap[service.icon] ?? serviceIconMap.server;
            return (
              <article key={service.titleEn} className="repo-card group rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyanBrand/40 sm:p-6">
                <div className="grid h-11 w-11 place-items-center rounded-[1.05rem] border border-white/10 bg-cyanBrand/10 text-cyanBrand transition group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-[1.15rem]">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500 sm:mt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyanBrand" />
                  <span><LocalizedText ar={`قدرة ${String(index + 1).padStart(2, "0")}`} en={`Capability ${String(index + 1).padStart(2, "0")}`} /></span>
                </div>
                <h3 className="mt-2 text-lg font-black text-white sm:text-xl"><LocalizedText ar={service.titleAr} en={service.titleEn} /></h3>
                <p className="mt-2.5 leading-7 text-slate-300/95 sm:mt-3 sm:leading-8"><LocalizedText ar={service.descriptionAr} en={service.descriptionEn} /></p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
