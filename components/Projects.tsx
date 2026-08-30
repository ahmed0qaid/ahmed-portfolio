import { ArrowUpLeft, GitBranch, Sparkles } from "lucide-react";
import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type ProjectsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

const attendanceRepositories = [
  {
    labelAr: "Next.js مستقل",
    labelEn: "Next.js Standalone",
    href: "https://github.com/ahmed2qaid/employee-attendance-nextjs-standalone",
  },
  {
    labelAr: "Next.js + Supabase",
    labelEn: "Next.js + Supabase",
    href: "https://github.com/ahmed2qaid/employee-attendance-nextjs-supabase",
  },
  {
    labelAr: "Flutter + Supabase",
    labelEn: "Flutter + Supabase",
    href: "https://github.com/ahmed2qaid/employee-attendance-flutter-supabase",
  },
  {
    labelAr: "Laravel + Supabase",
    labelEn: "Laravel + Supabase",
    href: "https://github.com/ahmed2qaid/employee-attendance-laravel-supabase",
  },
];

export function Projects({ content, contentEn, layoutVariant }: ProjectsProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;

  return (
    <section id="projects" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader
          {...content.projectsHeader}
          kickerEn={english.projectsHeader.kicker}
          titleEn={english.projectsHeader.title}
          subtitleEn={english.projectsHeader.subtitle}
        />

        <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5 lg:mt-10 md:grid-cols-2">
          {content.projects.map((project, index) => {
            const projectEn = english.projects[index];
            const projectName = `${project.name} ${projectEn?.name || ""}`;
            const projectStatus = `${project.status} ${projectEn?.status || ""}`;
            const isIcpcChallenge = projectName.includes("ICPC 2026");
            const isAttendanceSuite =
              projectName.includes("نظام إدارة دوام الموظفين") || projectName.includes("Employee Attendance");
            const isFeatured =
              isAttendanceSuite ||
              isIcpcChallenge ||
              projectStatus.includes("مميز") ||
              projectStatus.toLowerCase().includes("featured");

            return (
              <article
                key={`${project.name}-${index}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.45rem] border p-5 transition duration-300 sm:p-6 ${
                  isFeatured
                    ? "border-cyanBrand/25 bg-[linear-gradient(180deg,rgba(34,211,238,0.055),rgba(255,255,255,0.022))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_44px_rgba(0,0,0,0.14)] hover:-translate-y-1 hover:border-cyanBrand/40"
                    : "border-white/[0.09] bg-white/[0.025] hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.035]"
                }`}
              >
                {isFeatured ? (
                  <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
                ) : null}

                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2 text-[0.64rem] font-black uppercase tracking-[0.1em] text-slate-500">
                      <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                      <span className="h-px w-5 bg-white/10" />
                      {isFeatured ? (
                        <span className="inline-flex items-center gap-1 text-cyan-300/90">
                          <Sparkles className="h-3 w-3" />
                          <LocalizedText ar="عمل بارز" en="Selected work" />
                        </span>
                      ) : (
                        <span><LocalizedText ar="مشروع" en="Project" /></span>
                      )}
                    </div>

                    <h3 className={`font-black leading-7 text-white ${isFeatured ? "text-xl sm:text-[1.35rem]" : "text-lg sm:text-xl"}`}>
                      <LocalizedText ar={project.name} en={projectEn?.name || project.name} />
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[0.68rem] font-bold ${
                      isFeatured
                        ? "border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 bg-white/[0.035] text-slate-300"
                    }`}
                  >
                    <LocalizedText ar={project.status} en={projectEn?.status || project.status} />
                  </span>
                </div>

                <p
                  className={`relative mt-3 text-sm text-slate-300/90 sm:mt-4 sm:text-[0.95rem] ${
                    isAttendanceSuite ? "line-clamp-3 leading-7" : "leading-7"
                  }`}
                >
                  <LocalizedText ar={project.description} en={projectEn?.description || project.description} />
                </p>

                <div className="relative mt-4 flex flex-wrap gap-1.5 sm:mt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      dir="ltr"
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.67rem] font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {isAttendanceSuite ? (
                  <div className="relative mt-5 border-t border-white/[0.07] pt-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-cyanBrand" />
                        <p className="text-xs font-bold text-slate-100 sm:text-sm">
                          <LocalizedText ar="أربع معماريات لنفس منطق العمل" en="Four architectures, one business domain" />
                        </p>
                      </div>
                      <span dir="ltr" className="text-[0.62rem] font-black tracking-[0.08em] text-slate-500">4 REPOS</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {attendanceRepositories.map((repo) => (
                        <a
                          key={repo.href}
                          href={repo.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group/repo flex min-h-10 items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-2.5 py-2 text-[11px] font-bold leading-4 text-slate-200 transition hover:border-cyanBrand/25 hover:bg-cyanBrand/[0.07] hover:text-white sm:text-xs"
                        >
                          <span className="min-w-0 truncate">
                            <LocalizedText ar={repo.labelAr} en={repo.labelEn} />
                          </span>
                          <ArrowUpLeft className="h-3.5 w-3.5 shrink-0 text-slate-500 transition group-hover/repo:-translate-x-0.5 group-hover/repo:-translate-y-0.5 group-hover/repo:text-cyan-300 rtl-icon" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : isIcpcChallenge ? (
                  <div className="relative mt-auto flex flex-wrap gap-2.5 border-t border-white/[0.07] pt-5 sm:gap-3">
                    <a
                      href="https://github.com/ahmed2qaid/edge-cloud-collaborative-scheduling"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-xs font-bold text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.11]"
                    >
                      <LocalizedText ar="الكود على GitHub" en="GitHub Repository" />
                      <ArrowUpLeft className="h-3.5 w-3.5 rtl-icon" />
                    </a>
                    <a
                      href="https://codeforces.com/contest/2251/problem/A"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <LocalizedText ar="صفحة المسألة" en="Codeforces Problem" />
                      <ArrowUpLeft className="h-3.5 w-3.5 rtl-icon" />
                    </a>
                  </div>
                ) : (
                  <div className="relative mt-auto pt-5">
                    <div className="h-px bg-white/[0.055]" />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
