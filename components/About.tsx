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
            ? "text-[1.05rem] sm:text-[1.18rem] lg:text-[1.25rem]"
            : "text-[1.35rem] sm:text-[1.5rem] lg:text-[1.6rem]"
        }`}
      >
        {value}
      </div>
    );
  }

  return (
    <div dir="ltr" className="flex flex-col items-center justify-center">
      <div className="text-[1.4rem] font-black leading-none tracking-[-0.04em] text-white sm:text-[1.55rem]">
        {parts[0]}
      </div>
      <div className="mt-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1 text-xs font-bold text-slate-300">
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

        <div className="relative mx-auto w-full max-w-[760px]">
          <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyanBrand/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-violetBrand/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-5 leading-8 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-[18px] sm:p-6 lg:p-7">
            <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyanBrand/[0.045] blur-3xl" />

            <div className="relative max-w-3xl">
              {about.paragraphs.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`} className="mt-4 first:mt-0 sm:mt-5">
                  <LocalizedText ar={paragraph} en={english.paragraphs[index] || paragraph} />
                </p>
              ))}
            </div>

            {about.stats.length ? (
              <div className="relative mt-6 border-t border-white/[0.06] pt-5 sm:mt-7 sm:pt-6">
                <div className={`grid gap-3 sm:gap-4 ${statsGridClass}`}>
                  {about.stats.map((stat, index) => (
                    <div
                      key={`${stat.value}-${stat.label}-${index}`}
                      className="group relative flex min-h-[98px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.028] px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/20 hover:bg-white/[0.045] sm:px-5"
                    >
                      <div aria-hidden="true" className="absolute inset-y-3 start-0 w-[2px] rounded-full bg-gradient-to-b from-cyanBrand to-violetBrand opacity-0 transition group-hover:opacity-100" />

                      <div className="relative flex min-h-[38px] w-full items-center justify-center px-2">
                        <StatValue value={stat.value} />
                      </div>

                      <div className="relative mt-2 max-w-[16rem] text-[0.76rem] font-semibold leading-5 text-slate-400">
                        <LocalizedText ar={stat.label} en={english.stats[index]?.label || stat.label} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
