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
  const isLong = value.length > 12;

  if (parts.length === 1) {
    return (
      <div
        dir="ltr"
        className={`max-w-full text-balance font-black leading-[1.08] tracking-[-0.035em] text-white ${
          isLong
            ? "text-[1.15rem] sm:text-[1.28rem] lg:text-[1.35rem]"
            : "text-[1.45rem] sm:text-[1.6rem] lg:text-[1.7rem]"
        }`}
      >
        {value}
      </div>
    );
  }

  return (
    <div dir="ltr" className="flex flex-col items-center justify-center">
      <div className="text-[1.55rem] font-black leading-none tracking-[-0.04em] text-white sm:text-[1.7rem]">
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
      ? "mx-auto max-w-sm grid-cols-1"
      : about.stats.length === 2
        ? "mx-auto max-w-[34rem] grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-3";

  return (
    <section id="about" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell grid items-start gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <SectionHeader
          kicker={about.kicker}
          title={about.title}
          subtitle={about.subtitle}
          kickerEn={english.kicker}
          titleEn={english.title}
          subtitleEn={english.subtitle}
        />

        <div className="card-border overflow-hidden rounded-[2rem] bg-white/[0.012] p-5 leading-8 text-slate-300 sm:p-6 lg:p-7">
          <div className="max-w-3xl">
            {about.paragraphs.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`} className="mt-4 first:mt-0 sm:mt-5">
                <LocalizedText ar={paragraph} en={english.paragraphs[index] || paragraph} />
              </p>
            ))}
          </div>

          {about.stats.length ? (
            <div className="mt-6 border-t border-white/[0.07] pt-5 sm:mt-7 sm:pt-6">
              <div className={`grid gap-3 sm:gap-4 ${statsGridClass}`}>
                {about.stats.map((stat, index) => (
                  <div
                    key={`${stat.value}-${stat.label}-${index}`}
                    className="group relative flex min-h-[104px] flex-col items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] px-4 py-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_16px_38px_rgba(0,0,0,0.18)] sm:px-5"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -top-12 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-cyan-300/[0.045] blur-2xl transition group-hover:bg-cyan-300/[0.08]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(103,232,249,0.55)]"
                    />

                    <div className="relative flex min-h-[40px] w-full items-center justify-center px-2">
                      <StatValue value={stat.value} />
                    </div>

                    <div className="relative mt-2 max-w-[16rem] text-[0.78rem] font-semibold leading-5 text-slate-400">
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
