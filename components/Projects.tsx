import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { getSiteSettings } from "@/lib/site-settings";
import type { FeaturedProjectKey } from "@/lib/site-controls";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type ProjectsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

const featuredProjects = [
  {
    key: "flowguard" as const,
    nameAr: "FlowGuard — منصة تحكم للأتمتة الذكية",
    nameEn: "FlowGuard — Agentic Automation Control Plane",
    statusAr: "مشروع رئيسي",
    statusEn: "Flagship Project",
    descriptionAr: "طبقة تحكم أمام n8n وAI Agents تضيف سياسات تنفيذ، موافقات بشرية، MCP execution محكوم، تتبع تكلفة، Retry/Replay، سجل تدقيق، ومرونة أعلى في التعامل مع side effects.",
    descriptionEn: "A control plane in front of n8n workflows and AI agents with deterministic policy evaluation, human approval gates, guarded MCP execution, retry/replay, cost accounting, PostgreSQL persistence, and auditability.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker", "n8n", "MCP", "CI/CD"],
    href: "https://github.com/ahmed0qaid/agentic-automation-control-plane",
  },
  {
    key: "durable-agent-runtime" as const,
    nameAr: "Durable Agent Runtime — تنفيذ متين وقابل للاستعادة",
    nameEn: "Durable Agent Runtime",
    statusAr: "Distributed Systems",
    statusEn: "Distributed Systems",
    descriptionAr: "نواة تنفيذ تعتمد PostgreSQL لوكلاء الذكاء الاصطناعي، تحفظ نقاط التقدم والعمليات ذات الآثار الجانبية وتستعيد العمل بأمان بعد الأعطال، مع worker leases وheartbeats وretry/backoff وحماية التزامن.",
    descriptionEn: "A Postgres-first durable execution core for AI agents that checkpoints expensive side effects and safely recovers after crashes, with worker leases, heartbeats, concurrency protection, cancellation, retries, and deterministic tests.",
    stack: ["Go", "PostgreSQL", "Durable Execution", "Worker Leases", "Retry", "Concurrency", "CI"],
    href: "https://github.com/ahmed0qaid/durable-agent-runtime",
  },
  {
    key: "mcp-policy-gateway" as const,
    nameAr: "MCP Policy Gateway — بوابة سياسات Zero-Trust",
    nameEn: "MCP Policy Gateway",
    statusAr: "Security + AI Infra",
    statusEn: "Security + AI Infra",
    descriptionAr: "بوابة إنفاذ سياسات بين AI agents وخوادم MCP، تتضمن هوية لكل agent، سياسات حسب الدور، approval tokens مرتبطة بالمدخلات، rate limiting، egress allowlists، schema pinning، circuit breakers وسجل تدقيق.",
    descriptionEn: "A policy-enforcement gateway between AI agents/MCP clients and real MCP servers with per-agent identity, role-aware policies, HMAC approvals, rate limiting, egress allowlists, schema pinning, circuit breakers, audit logs, tests, and CI.",
    stack: ["Python", "MCP", "Zero-Trust", "Policy Engine", "Rate Limiting", "Audit", "CI"],
    href: "https://github.com/ahmed0qaid/mcp-policy-gateway",
  },
  {
    key: "agenttrace-otel" as const,
    nameAr: "AgentTrace OTel — تتبع مسار تنفيذ AI Agents",
    nameEn: "AgentTrace OTel",
    statusAr: "Observability",
    statusEn: "Observability",
    descriptionAr: "مشروع مراقبة مبني على OpenTelemetry يركز على trajectory الذي يسلكه الوكيل، مع تتبع model/tool/handoff، المحاولات والأخطاء، metadata للاستخدام والتكلفة، استيراد تنفيذات n8n، وتتبع MCP ومقارنة المسارات.",
    descriptionEn: "OpenTelemetry-native trajectory tracing for AI agents, covering model/tool/handoff execution, retries and errors, usage and cost metadata, n8n execution imports, MCP tracing, and trajectory diffing.",
    stack: ["Python", "OpenTelemetry", "AI Agents", "LangGraph", "n8n", "MCP"],
    href: "https://github.com/ahmed0qaid/agenttrace-otel",
  },
  {
    key: "reporadar" as const,
    nameAr: "RepoRadar AI — خط بيانات لاكتشاف مستودعات GitHub الصاعدة",
    nameEn: "RepoRadar AI",
    statusAr: "Data + Automation",
    statusEn: "Data + Automation",
    descriptionAr: "خط ذكاء وأتمتة بدون بنية مدفوعة يجمع بيانات GitHub دوريًا، يحفظ snapshots تاريخية، يحسب trend/opportunity scores، يطابق المهارات في المتصفح، وينشر النتائج تلقائيًا عبر GitHub Actions وGitHub Pages.",
    descriptionEn: "A zero-paid-infrastructure intelligence pipeline that discovers rising GitHub repositories and contributor-friendly issues using scheduled collection, historical snapshots, trend/opportunity scoring, skill matching, validation, and automated static deployment.",
    stack: ["Python", "GitHub REST API", "GitHub Actions", "Data Pipelines", "GitHub Pages"],
    href: "https://github.com/ahmed0qaid/RepoRadar",
  },
];

const attendanceRepositories = [
  { labelAr: "Next.js مستقل", labelEn: "Next.js Standalone", href: "https://github.com/ahmed0qaid/employee-attendance-nextjs-standalone" },
  { labelAr: "Next.js + Supabase", labelEn: "Next.js + Supabase", href: "https://github.com/ahmed0qaid/employee-attendance-nextjs-supabase" },
  { labelAr: "Flutter + Supabase", labelEn: "Flutter + Supabase", href: "https://github.com/ahmed0qaid/employee-attendance-flutter-supabase" },
  { labelAr: "Laravel + Supabase", labelEn: "Laravel + Supabase", href: "https://github.com/ahmed0qaid/employee-attendance-laravel-supabase" },
];

function FeaturedProjectCard({ project }: { project: (typeof featuredProjects)[number] }) {
  return (
    <article className="repo-card group flex h-full flex-col rounded-3xl border-cyanBrand/25 p-5 transition hover:-translate-y-1 hover:border-cyanBrand/55 sm:p-6">
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="repo-chip inline-flex max-w-full px-3 py-1 text-xs font-semibold text-cyan-100"><LocalizedText ar={project.statusAr} en={project.statusEn} /></span>
        </div>
        <h3 className="max-w-full break-words text-[1.05rem] font-black leading-[1.55] text-white sm:text-xl sm:leading-[1.5] lg:text-[1.28rem]"><LocalizedText ar={project.nameAr} en={project.nameEn} /></h3>
      </div>
      <p className="mt-3 leading-7 text-slate-300/95 sm:mt-4 sm:leading-8"><LocalizedText ar={project.descriptionAr} en={project.descriptionEn} /></p>
      <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-100">{tech}</span>)}</div>
      <div className="mt-auto pt-5 sm:pt-6"><a href={project.href} target="_blank" rel="noreferrer" className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"><LocalizedText ar="عرض المستودع على GitHub ↗" en="View repository on GitHub ↗" /></a></div>
    </article>
  );
}

export async function Projects({ content, contentEn, layoutVariant }: ProjectsProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;
  const { controls } = await getSiteSettings();
  const projectMap = new Map<FeaturedProjectKey, (typeof featuredProjects)[number]>(featuredProjects.map((project) => [project.key, project]));
  const orderedFeaturedProjects = controls.featuredProjectOrder.map((key) => projectMap.get(key)).filter(Boolean) as (typeof featuredProjects)[number][];
  const columnsClass = controls.projectsColumns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-2 xl:grid-cols-3";

  const additionalProjects = content.projects
    .map((project, index) => ({ project, projectEn: english.projects[index], index }))
    .filter(({ project, projectEn }) => {
      const name = `${project.name} ${projectEn?.name || ""}`;
      return !name.includes("FlowGuard") && !name.includes("أتمتة المحتوى باستخدام n8n") && !name.includes("n8n Content Automation");
    });

  return (
    <section id="projects" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader {...content.projectsHeader} kickerEn={english.projectsHeader.kicker} titleEn={english.projectsHeader.title} subtitleEn={english.projectsHeader.subtitle} />

        <div className={`mt-7 grid gap-4 sm:mt-8 sm:gap-5 lg:mt-10 ${columnsClass}`}>
          {orderedFeaturedProjects.map((project) => <FeaturedProjectCard key={project.href} project={project} />)}
        </div>

        {additionalProjects.length ? (
          <div className="mt-10 border-t border-white/[0.07] pt-8 sm:mt-12 sm:pt-10">
            <div className="mb-5 sm:mb-6">
              <p className="text-sm font-bold text-cyanBrand"><LocalizedText ar="مشاريع وخبرة إضافية" en="Additional Engineering Work" /></p>
              <h3 className="mt-1 text-xl font-black text-white sm:text-2xl"><LocalizedText ar="أعمال تطبيقية تدعم خبرتي" en="Additional applied engineering work" /></h3>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {additionalProjects.map(({ project, projectEn, index }) => {
                const projectName = `${project.name} ${projectEn?.name || ""}`;
                const isIcpcChallenge = projectName.includes("ICPC 2026");
                const isAttendanceSuite = projectName.includes("نظام إدارة دوام الموظفين") || projectName.includes("Employee Attendance");

                return (
                  <article key={`${project.name}-${index}`} className="repo-card group flex h-full flex-col rounded-3xl p-5 transition hover:-translate-y-1 hover:border-violetBrand/50 sm:p-6">
                    <div className="min-w-0">
                      <div className="mb-3 flex flex-wrap items-center gap-2"><span className="repo-chip inline-flex max-w-full px-3 py-1 text-xs font-semibold text-violet-100"><LocalizedText ar={project.status} en={projectEn?.status || project.status} /></span></div>
                      <h3 className="max-w-full break-words text-[1.05rem] font-black leading-[1.55] text-white sm:text-xl sm:leading-[1.5]"><LocalizedText ar={project.name} en={projectEn?.name || project.name} /></h3>
                    </div>
                    <p className={`mt-3 text-slate-300/95 sm:mt-4 ${isAttendanceSuite ? "line-clamp-3 leading-7" : "leading-7 sm:leading-8"}`}><LocalizedText ar={project.description} en={projectEn?.description || project.description} /></p>
                    <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-100">{tech}</span>)}</div>
                    {isAttendanceSuite ? (
                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {attendanceRepositories.map((repo) => <a key={repo.href} href={repo.href} target="_blank" rel="noreferrer" className="flex min-h-10 items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 text-[11px] font-bold leading-4 text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 sm:text-xs"><LocalizedText ar={repo.labelAr} en={repo.labelEn} /><span className="text-cyan-200">↗</span></a>)}
                      </div>
                    ) : isIcpcChallenge ? (
                      <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                        <a href="https://github.com/ahmed0qaid/edge-cloud-collaborative-scheduling" target="_blank" rel="noreferrer" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"><LocalizedText ar="GitHub Repository" en="GitHub Repository" /></a>
                        <a href="https://codeforces.com/contest/2251/problem/A" target="_blank" rel="noreferrer" className="rounded-xl border border-violet-300/30 bg-violet-300/10 px-4 py-2 text-sm font-bold text-violet-100 transition hover:bg-violet-300/20"><LocalizedText ar="صفحة المسألة" en="Codeforces Problem" /></a>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
