import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type AboutProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

function StatValue({ value }: { value: string }) {
  const parts = value.split("|").map((part) => part.trim()).filter(Boolean);

  if (parts.length === 1) {
    return (
      <div
        dir="ltr"
        className="max-w-full text-balance text-[1.45rem] font-black leading-tight tracking-[-0.035em] text-white sm:text-[1.6rem] lg:text-[1.7rem]"
      >
        {value}
      </div>
    );
  }

  return (
    <div dir="ltr" className="flex flex-col items-center justify-center">
      <div className="text-[1.7rem] font-black leading-none tracking-[-0.04em] text-white sm:text-[1.85rem]">
        {parts[0]}
      </div>
      <div className="mt-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-slate-200">
        {parts.slice(1).join(" · ")}
      </div>
    </div>
  );
}

export function About({ content, contentEn, layoutVariant }: AboutProps) {
  const about = content.about;
  const english = contentEn.about;
  const isCompact = layoutVariant === "compact";

  const statsGridClass =
    about.stats.length === 1
      ? "grid-cols-1"
      : about.stats.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-3";

  return (
    <section id="about" className={isCompact ? "py-12" : "py-20"}>
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          kicker={about.kicker}
          title={about.title}
          subtitle={about.subtitle}
          kickerEn={english.kicker}
          titleEn={english.title}
          subtitleEn={english.subtitle}
        />

        <div className="card-border overflow-hidden rounded-[2rem] bg-white/[0.012] p-6 leading-8 text-slate-300 sm:p-7">
          <div className="max-w-3xl">
            {about.paragraphs.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`} className="mt-5 first:mt-0">
                <LocalizedText ar={paragraph} en={english.paragraphs[index] || paragraph} />
              </p>
            ))}
          </div>

          {about.stats.length ? (
            <div className="mt-8 border-t border-white/[0.07] pt-6">
              <div className={`grid gap-4 ${statsGridClass}`}>
                {about.stats.map((stat, index) => (
                  <div
                    key={`${stat.value}-${stat.label}-${index}`}
                    className="group relative flex min-h-[124px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.1] bg-gradient-to-b from-white/[0.045] to-white/[0.018] px-5 py-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.055]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent opacity-80"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -top-10 left-1/2 h-24 w-28 -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-2xl transition group-hover:bg-cyan-300/[0.07]"
                    />

                    <div className="relative flex min-h-[48px] w-full items-center justify-center px-2">
                      <StatValue value={stat.value} />
                    </div>

                    <div className="relative mt-2.5 max-w-[17rem] text-[0.82rem] font-semibold leading-5 text-slate-400">
                      <LocalizedText ar={stat.label} en={english.stats[index]?.label || stat.label} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
