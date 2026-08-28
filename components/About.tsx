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
        className="text-[1.65rem] font-black leading-tight tracking-[-0.03em] text-white sm:text-2xl lg:text-[1.75rem]"
      >
        {value}
      </div>
    );
  }

  return (
    <div dir="ltr" className="flex flex-col items-center justify-center">
      <div className="text-[1.9rem] font-black leading-none tracking-[-0.04em] text-white sm:text-[2rem]">
        {parts[0]}
      </div>
      <div className="mt-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-sm font-extrabold tracking-[-0.02em] text-slate-200">
        {parts.slice(1).join(" · ")}
      </div>
    </div>
  );
}

export function About({ content, contentEn, layoutVariant }: AboutProps) {
  const about = content.about;
  const english = contentEn.about;
  const isCompact = layoutVariant === "compact";

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
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {about.stats.map((stat, index) => (
                  <div
                    key={`${stat.value}-${stat.label}-${index}`}
                    className="group relative flex min-h-[152px] flex-col items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/[0.09] bg-white/[0.025] px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.045]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70 transition group-hover:opacity-100"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-white/[0.035] blur-2xl transition group-hover:bg-white/[0.06]"
                    />

                    <div className="relative flex min-h-[62px] items-center justify-center">
                      <StatValue value={stat.value} />
                    </div>

                    <div className="relative mt-3 max-w-[15rem] text-sm font-medium leading-6 text-slate-400">
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
