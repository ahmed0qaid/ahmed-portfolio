import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { getSiteSettings } from "@/lib/site-settings";
import type { SkillGroupKey } from "@/lib/site-controls";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type SkillsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

const engineeringSkills = [
  { key: "backend-systems" as const, groupAr: "Backend & Systems", groupEn: "Backend & Systems", items: ["Python", "PHP", "Go", "C++20", "FastAPI", "Flask", "Laravel", "REST APIs", "SQLAlchemy"] },
  { key: "databases-data" as const, groupAr: "Databases & Data", groupEn: "Databases & Data", items: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "SQLite", "Supabase", "Prisma", "Data Modeling", "Migrations"] },
  { key: "cloud-infrastructure" as const, groupAr: "Cloud & Infrastructure", groupEn: "Cloud & Infrastructure", items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Redis", "Vercel", "Environment Config", "n8n"] },
  { key: "distributed-reliability" as const, groupAr: "Distributed Systems & Reliability", groupEn: "Distributed Systems & Reliability", items: ["Durable Execution", "Worker Leases", "Heartbeats", "Retry / Backoff", "Idempotency", "Concurrency", "Crash Recovery"] },
  { key: "ai-agent-infrastructure" as const, groupAr: "AI & Agent Infrastructure", groupEn: "AI & Agent Infrastructure", items: ["MCP", "AI Agents", "LLM Integrations", "Policy Engines", "Human Approvals", "OpenTelemetry", "Trajectory Tracing"] },
  { key: "web-mobile-product" as const, groupAr: "Web & Mobile Product Engineering", groupEn: "Web & Mobile Product Engineering", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Flutter", "Dart", "Responsive UI"] },
];

export async function Skills({ content, contentEn, layoutVariant }: SkillsProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;
  const { controls } = await getSiteSettings();
  const columnsClass = controls.skillsColumns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  const skillMap = new Map<SkillGroupKey, (typeof engineeringSkills)[number]>(engineeringSkills.map((item) => [item.key, item] as const));
  const orderedSkills = controls.skillGroupOrder.map((key) => skillMap.get(key)).filter(Boolean) as (typeof engineeringSkills)[number][];

  return (
    <section id="skills" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader {...content.skillsHeader} kickerEn={english.skillsHeader.kicker} titleEn={english.skillsHeader.title} subtitleEn={english.skillsHeader.subtitle} />
        <div className={`mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-10 ${columnsClass}`}>
          {orderedSkills.map((skill) => (
            <div key={skill.key} className="repo-card rounded-3xl p-5 sm:p-6">
              <h3 className="text-base font-black text-white sm:text-lg"><LocalizedText ar={skill.groupAr} en={skill.groupEn} /></h3>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {skill.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-200 sm:py-2 sm:text-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
