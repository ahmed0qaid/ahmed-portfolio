import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type ProjectsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

export function Projects({ content, contentEn, layoutVariant }: ProjectsProps) {
  const isCompact = layoutVariant === "compact";
  const isShowcase = layoutVariant === "showcase";
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
        <div className={`mt-7 grid gap-4 sm:mt-8 sm:gap-5 lg:mt-10 ${isShowcase ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {content.projects.map((project, index) => {
            const projectEn = english.projects[index];
            const projectName = `${project.name} ${projectEn?.name || ""}`;
            const isIcpcChallenge = projectName.includes("ICPC 2026");

            return (
              <article key={`${project.name}-${index}`} className="repo-card group rounded-3xl p-5 transition hover:-translate-y-1 hover:border-violetBrand/50 sm:p-6">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 className="text-lg font-black leading-7 text-white sm:text-xl"><LocalizedText ar={project.name} en={projectEn?.name || project.name} /></h3>
                  <span className="repo-chip shrink-0 px-3 py-1 text-xs font-semibold text-violet-100">
                    <LocalizedText ar={project.status} en={projectEn?.status || project.status} />
                  </span>
                </div>
                <p className="mt-3 leading-7 text-slate-300/95 sm:mt-4 sm:leading-8"><LocalizedText ar={project.description} en={projectEn?.description || project.description} /></p>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {isIcpcChallenge ? (
                  <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                    <a
                      href="https://github.com/ahmed2qaid/edge-cloud-collaborative-scheduling"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
                    >
                      <LocalizedText ar="الكود على GitHub" en="GitHub Repository" />
                    </a>
                    <a
                      href="https://codeforces.com/contest/2251/problem/A"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-violet-300/30 bg-violet-300/10 px-4 py-2 text-sm font-bold text-violet-100 transition hover:bg-violet-300/20"
                    >
                      <LocalizedText ar="صفحة المسألة" en="Codeforces Problem" />
                    </a>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
