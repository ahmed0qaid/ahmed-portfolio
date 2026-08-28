import {
  ArrowLeft,
  BrainCircuit,
  Database,
  Download,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
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
    hero.highlightedTitle,
    "مطور باك اند",
    "مطور Full-Stack",
    "مطور تطبيقات Flutter",
    "مصمم قواعد بيانات",
    "مطور حلول ذكاء اصطناعي",
    "مطور أتمتة n8n",
  ];
  const enDynamicTitles = [
    english.hero.highlightedTitle,
    "Backend Developer",
    "Full-Stack Developer",
    "Flutter Developer",
    "Database Designer",
    "AI Solutions Developer",
    "n8n Automation Developer",
  ];
  const profileSubtitleAr = profile.titleAr
    .replace(/^مهندس برمجيات\s*[|،\-–—]*\s*/, "")
    .trim() || profile.titleAr;
  const profileSubtitleEn = (english.profile.titleEn || profile.titleEn)
    .replace(/^Software Engineer\s*[|,\-–—]*\s*/i, "")
    .trim() || (english.profile.titleEn || profile.titleEn);

  const focusIcons = [Server, Smartphone, Database, BrainCircuit, Workflow];

  return (
    <section id="home" className={`relative overflow-hidden ${isCompact ? "py-14 md:py-18" : "py-20 md:py-28"}`}>
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:36px_36px] opacity-40" />
      <div className={`container-shell grid items-center gap-12 ${isShowcase ? "xl:grid-cols-[0.85fr_1.15fr]" : "xl:grid-cols-[1.1fr_0.9fr]"}`}>
        <div className={isShowcase ? "order-2 xl:order-1" : ""}>
          <div className="repo-chip mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-100">
            <Sparkles className="h-4 w-4" />
            <LocalizedText ar={hero.badge} en={english.hero.badge} />
          </div>
          <h1 className="hero-main-title font-black text-white">
            <span className="hero-name-inline">
              <LocalizedText ar={profile.nameAr} en={english.profile.nameEn || profile.nameEn} />
            </span>
            <span className="hero-highlight-title mt-3 block gradient-text">
              <TypewriterTitle arTerms={arDynamicTitles} enTerms={enDynamicTitles} />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
            <LocalizedText ar={profileSubtitleAr} en={profileSubtitleEn} />
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            <LocalizedText ar={hero.description} en={english.hero.description} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          <div className={`github-device relative mx-auto w-full max-w-[520px] rounded-[2rem] p-4 sm:p-5 shadow-glow ${isShowcase ? "order-1 xl:order-2" : ""}`}>
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-cyanBrand/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-8 h-36 w-36 rounded-full bg-violetBrand/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.65rem] border border-white/[0.1] bg-[#0b0d12]/92 p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyanBrand/10 blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyanBrand/20 bg-cyanBrand/10 text-cyanBrand shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-wide text-cyanBrand">
                      <LocalizedText ar={hero.focusKicker} en={english.hero.focusKicker} />
                    </p>
                    <h2 className="mt-1.5 text-2xl font-black leading-tight text-white">
                      <LocalizedText ar={hero.focusTitle} en={english.hero.focusTitle} />
                    </h2>
                  </div>
                </div>

                <div className="mt-1 flex shrink-0 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanBrand opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyanBrand" />
                  </span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-400">Focus</span>
                </div>
              </div>

              <div className="relative mt-6 space-y-3">
                {hero.focusItems.map((item, index) => {
                  const Icon = focusIcons[index] ?? Sparkles;
                  return (
                    <div
                      key={`${item}-${index}`}
                      className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-white/[0.085] bg-gradient-to-l from-white/[0.045] to-white/[0.018] px-4 py-3.5 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/25 hover:bg-white/[0.055]"
                    >
                      <div aria-hidden="true" className="absolute inset-y-3 start-0 w-[2px] rounded-full bg-gradient-to-b from-cyanBrand to-violetBrand opacity-0 transition group-hover:opacity-100" />

                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.045] text-cyanBrand transition duration-300 group-hover:border-cyanBrand/20 group-hover:bg-cyanBrand/10">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-slate-200">
                        <LocalizedText ar={item} en={english.hero.focusItems[index] || item} />
                      </span>

                      <span dir="ltr" className="shrink-0 text-[0.65rem] font-black tracking-[0.12em] text-slate-600 transition group-hover:text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.065] pt-4 text-[0.7rem] font-semibold text-slate-500">
                <span><LocalizedText ar="تعلم مستمر · بناء عملي" en="Continuous learning · Practical building" /></span>
                <span className="h-1.5 w-1.5 rounded-full bg-violetBrand shadow-[0_0_14px_var(--accent-2)]" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
