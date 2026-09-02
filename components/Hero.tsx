import {
  ArrowLeft,
  BrainCircuit,
  CloudCog,
  Database,
  Download,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { TypewriterTitle } from "./TypewriterTitle";

type HeroProps = {
  cvDownloadEnabled: boolean;
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

export function Hero({ cvDownloadEnabled, content, contentEn, layoutVariant }: HeroProps) {
  const { profile, hero } = content;
  const english = contentEn;
  const isCompact = layoutVariant === "compact";
  const isShowcase = layoutVariant === "showcase";
  const arDynamicTitles = [
    "مهندس أنظمة باك إند",
    "مهندس أنظمة سحابية",
    "مهندس منصات برمجية",
    "مهندس أنظمة موزعة",
    "مهندس بنية تحتية للأتمتة",
    "مهندس بنية تحتية للذكاء الاصطناعي",
  ];
  const enDynamicTitles = [
    "Backend & Cloud Software Engineer",
    "Backend Engineer",
    "Cloud Engineer",
    "Platform Engineer",
    "Distributed Systems Engineer",
    "Automation Infrastructure Engineer",
    "AI Infrastructure Engineer",
  ];
  const profileSubtitleAr = profile.titleAr;
  const profileSubtitleEn = english.profile.titleEn || profile.titleEn;

  const focusIcons = [Server, CloudCog, Database, ShieldCheck, Network];

  return (
    <section id="home" className={`relative overflow-hidden ${isCompact ? "py-10 sm:py-12 lg:py-14" : "py-12 sm:py-14 lg:py-20"}`}>
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:36px_36px] opacity-40" />
      <div className={`container-shell grid items-center gap-8 sm:gap-10 xl:gap-12 ${isShowcase ? "xl:grid-cols-[0.85fr_1.15fr]" : "xl:grid-cols-[1.1fr_0.9fr]"}`}>
        <div className={isShowcase ? "order-2 xl:order-1" : ""}>
          <div className="repo-chip mb-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-100 sm:mb-6">
            <Sparkles className="h-4 w-4" />
            <LocalizedText ar={hero.badge} en={english.hero.badge} />
          </div>
          <h1 className="hero-main-title font-black text-white">
            <span className="hero-name-inline">
              <LocalizedText ar={profile.nameAr} en={english.profile.nameEn || profile.nameEn} />
            </span>
            <span className="hero-highlight-title mt-2.5 block gradient-text sm:mt-3">
              <TypewriterTitle arTerms={arDynamicTitles} enTerms={enDynamicTitles} />
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:mt-6 sm:text-lg sm:leading-9">
            <LocalizedText ar={profileSubtitleAr} en={profileSubtitleEn} />
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            <LocalizedText ar={hero.description} en={english.hero.description} />
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <a href="#projects" className="btn-primary gap-2">
              <LocalizedText ar={hero.primaryCta} en={english.hero.primaryCta} /> <ArrowLeft className="h-4 w-4 rtl-icon" />
            </a>
            {content.sections.assistant ? (
              <a href="#assistant" className="btn-secondary gap-2">
                <LocalizedText ar={hero.secondaryCta} en={english.hero.secondaryCta} />
              </a>
            ) : null}
            {cvDownloadEnabled ? (
              <a href={profile.cvUrl} className="btn-secondary gap-2" target="_blank" rel="noreferrer">
                <Download className="h-4 w-4" /> <LocalizedText ar={hero.cvCta} en={english.hero.cvCta} />
              </a>
            ) : null}
          </div>
        </div>

        {!isCompact ? (
          <div className={`relative mx-auto h-auto w-full max-w-[520px] self-start xl:self-center ${isShowcase ? "order-1 xl:order-2" : ""}`}>
            <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyanBrand/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-violetBrand/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-[18px] sm:p-5">
              <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent" />
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyanBrand/[0.07] blur-3xl" />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyanBrand/20 bg-cyanBrand/10 text-cyanBrand shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-bold tracking-wide text-cyanBrand">
                      <LocalizedText ar={hero.focusKicker} en={english.hero.focusKicker} />
                    </p>
                    <h2 className="mt-1 text-xl font-black leading-tight text-white sm:text-2xl">
                      <LocalizedText ar={hero.focusTitle} en={english.hero.focusTitle} />
                    </h2>
                  </div>
                </div>

                <div className="mt-0.5 flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanBrand opacity-35" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyanBrand" />
                  </span>
                  <span className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate-500">Engineering</span>
                </div>
              </div>

              <div className="relative mt-4 space-y-2.5">
                {hero.focusItems.map((item, index) => {
                  const Icon = focusIcons[index] ?? Sparkles;
                  return (
                    <div
                      key={`${item}-${index}`}
                      className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.028] px-3.5 py-3 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/20 hover:bg-white/[0.045]"
                    >
                      <div aria-hidden="true" className="absolute inset-y-2.5 start-0 w-[2px] rounded-full bg-gradient-to-b from-cyanBrand to-violetBrand opacity-0 transition group-hover:opacity-100" />

                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.035] text-cyanBrand transition duration-300 group-hover:border-cyanBrand/20 group-hover:bg-cyanBrand/10">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="min-w-0 flex-1 text-[0.78rem] font-semibold leading-5 text-slate-200 sm:text-sm">
                        <LocalizedText ar={item} en={english.hero.focusItems[index] || item} />
                      </span>

                      <span dir="ltr" className="shrink-0 text-[0.58rem] font-black tracking-[0.1em] text-slate-600 transition group-hover:text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[0.62rem] font-semibold text-slate-500">
                <span><LocalizedText ar="موثوق · قابل للنشر · قابل للمراقبة · قابل للاستعادة" en="Reliable · Deployable · Observable · Recoverable" /></span>
                <span className="h-1.5 w-1.5 rounded-full bg-violetBrand shadow-[0_0_12px_var(--accent-2)]" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
