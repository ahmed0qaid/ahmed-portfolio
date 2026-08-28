import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type SkillsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

export function Skills({ content, contentEn, layoutVariant }: SkillsProps) {
  const isCompact = layoutVariant === "compact";
  const english = contentEn;

  return (
    <section id="skills" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader
          {...content.skillsHeader}
          kickerEn={english.skillsHeader.kicker}
          titleEn={english.skillsHeader.title}
          subtitleEn={english.skillsHeader.subtitle}
        />
        <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {content.skills.map((skill, index) => {
            const skillEn = english.skills[index];
            return (
              <div key={`${skill.group}-${index}`} className="repo-card rounded-3xl p-5 sm:p-6">
                <h3 className="text-base font-black text-white sm:text-lg"><LocalizedText ar={skill.group} en={skillEn?.group || skill.group} /></h3>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  {skill.items.map((item, itemIndex) => (
                    <span key={`${item}-${itemIndex}`} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-200 sm:py-2 sm:text-sm">
                      <LocalizedText ar={item} en={skillEn?.items[itemIndex] || item} />
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
