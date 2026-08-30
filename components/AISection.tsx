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

        <div className="relative mx-auto h-auto w-full max-w-[520px] self-start lg:mx-0">
          <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyanBrand/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-violetBrand/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-[18px] sm:p-5">
            <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent" />
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyanBrand/[0.07] blur-3xl" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyanBrand/20 bg-cyanBrand/10 text-cyanBrand shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-bold tracking-wide text-cyanBrand">
                    <LocalizedText ar={ai.kicker} en={english.kicker} />
                  </p>
                  <h3 className="mt-1 text-xl font-black leading-tight text-white sm:text-2xl">
                    <LocalizedText ar={ai.assistantTitle} en={english.assistantTitle} />
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                    <LocalizedText ar={ai.assistantSubtitle} en={english.assistantSubtitle} />
                  </p>
                </div>
              </div>

              <div className="mt-0.5 flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanBrand opacity-35" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyanBrand" />
                </span>
                <span className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate-500">Assistant</span>
              </div>
            </div>

            <div className="relative mt-4 space-y-2.5">
              {ai.processSteps.map((step, index) => (
                <div
                  key={`${step}-${index}`}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.028] px-3.5 py-3 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/20 hover:bg-white/[0.045]"
                >
                  <div aria-hidden="true" className="absolute inset-y-2.5 start-0 w-[2px] rounded-full bg-gradient-to-b from-cyanBrand to-violetBrand opacity-0 transition group-hover:opacity-100" />

                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.035] text-cyanBrand transition duration-300 group-hover:border-cyanBrand/20 group-hover:bg-cyanBrand/10">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <span className="min-w-0 flex-1 text-[0.78rem] font-semibold leading-5 text-slate-200 sm:text-sm">
                    <LocalizedText ar={step} en={english.processSteps[index] || step} />
                  </span>

                  <span dir="ltr" className="shrink-0 text-[0.58rem] font-black tracking-[0.1em] text-slate-600 transition group-hover:text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[0.62rem] font-semibold text-slate-500">
              <span><LocalizedText ar="جمع المتطلبات · تنظيم الطلب" en="Requirements intake · Structured brief" /></span>
              <span className="h-1.5 w-1.5 rounded-full bg-violetBrand shadow-[0_0_12px_var(--accent-2)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
