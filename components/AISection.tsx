import { Bot, CheckCircle2 } from "lucide-react";
import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";

type AISectionProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

export function AISection({ content, contentEn, layoutVariant }: AISectionProps) {
  const ai = content.ai;
  const english = contentEn.ai;
  const isCompact = layoutVariant === "compact";

  return (
    <section id="assistant" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell grid gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
        <div>
          <SectionHeader
            kicker={ai.kicker}
            title={ai.title}
            subtitle={ai.subtitle}
            kickerEn={english.kicker}
            titleEn={english.title}
            subtitleEn={english.subtitle}
          />
          <div className="mt-5 flex gap-3 sm:mt-6 lg:mt-7">
            <a href="#chat" className="btn-primary">
              <LocalizedText ar={ai.primaryCta} en={english.primaryCta} />
            </a>
          </div>
        </div>

        <div className="mx-auto w-[88%] max-w-[560px] sm:w-[92%] md:w-[88%] lg:mx-0 lg:w-full lg:max-w-none">
          <div className="github-panel relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5 lg:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyanBrand/[0.055] blur-3xl"
            />

            <div className="relative flex items-center gap-3.5 border-b border-white/[0.065] pb-3.5 sm:pb-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyanBrand/20 bg-cyanBrand/10 text-cyanBrand shadow-[0_8px_24px_rgba(0,0,0,0.16)] sm:h-12 sm:w-12 sm:rounded-[1.1rem]">
                <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-black text-white sm:text-base">
                  <LocalizedText ar={ai.assistantTitle} en={english.assistantTitle} />
                </h3>
                <p className="mt-0.5 text-xs leading-5 text-slate-400 sm:text-sm">
                  <LocalizedText ar={ai.assistantSubtitle} en={english.assistantSubtitle} />
                </p>
              </div>
            </div>

            <div className="relative mt-3.5 space-y-2 sm:mt-4 sm:space-y-2.5">
              {ai.processSteps.map((step, index) => (
                <div
                  key={`${step}-${index}`}
                  className="group relative flex items-start gap-3 overflow-hidden rounded-xl border border-white/[0.075] bg-white/[0.026] px-3.5 py-2.5 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/20 hover:bg-white/[0.045] sm:px-4 sm:py-3.5"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-2.5 start-0 w-[2px] rounded-full bg-gradient-to-b from-cyanBrand to-violetBrand opacity-0 transition group-hover:opacity-100"
                  />

                  <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-cyanBrand/15 bg-cyanBrand/[0.07] text-cyanBrand">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <p className="min-w-0 flex-1 text-[0.78rem] leading-6 text-slate-300 sm:text-sm">
                    <span className="font-black text-white">{index + 1}. </span>
                    <LocalizedText ar={step} en={english.processSteps[index] || step} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
