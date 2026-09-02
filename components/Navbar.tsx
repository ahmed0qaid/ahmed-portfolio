import { Github, Linkedin } from "lucide-react";
import type { SiteContent, SiteLanguage } from "@/lib/site-content";
import { getSiteSettings } from "@/lib/site-settings";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LocalizedText } from "./LocalizedText";

const navItems = [
  { key: "home", labelAr: "الرئيسية", labelEn: "Home", href: "#home" },
  { key: "about", labelAr: "نبذة", labelEn: "About", href: "#about" },
  { key: "services", labelAr: "الخدمات", labelEn: "Services", href: "#services" },
  { key: "projects", labelAr: "المشاريع", labelEn: "Projects", href: "#projects" },
  { key: "assistant", labelAr: "المساعد الذكي", labelEn: "AI Assistant", href: "#assistant" },
  { key: "contact", labelAr: "تواصل", labelEn: "Contact", href: "#contact" },
  { key: "dashboard", labelAr: "لوحة التحكم", labelEn: "Dashboard", href: "/dashboard" },
] as const;

type NavbarProps = {
  cvDownloadEnabled: boolean;
  content: SiteContent;
  contentEn: SiteContent;
  defaultLanguage: SiteLanguage;
};

export async function Navbar({ cvDownloadEnabled, content, contentEn, defaultLanguage }: NavbarProps) {
  const { profile, sections, hero } = content;
  const { controls } = await getSiteSettings();

  return (
    <header className={`${controls.navbarSticky ? "sticky top-0" : "relative"} z-40 border-b border-white/10 bg-[#0b0d12]/80 backdrop-blur-2xl`}>
      <nav className="container-shell navbar-shell flex h-16 items-center justify-between gap-3">
        <a href="#home" className="group flex min-w-0 shrink-0 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-[1.1rem] border border-white/10 bg-cyanBrand text-base font-black text-slate-950 shadow-glow transition group-hover:scale-105">
            {profile.logoText || "AQ"}
          </span>
          {controls.showNavbarName ? (
            <span className="hidden max-w-[230px] truncate text-sm font-bold text-white lg:block">
              <LocalizedText ar={profile.nameAr} en={contentEn.profile.nameEn || profile.nameEn} />
            </span>
          ) : null}
        </a>

        <div className="hidden shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 xl:flex">
          {navItems.map((item) => {
            if (item.key === "dashboard") {
              return <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-cyanBrand"><LocalizedText ar={item.labelAr} en={item.labelEn} /></a>;
            }
            if (item.key !== "home" && item.key !== "contact" && !(sections as Record<string, boolean>)[item.key]) return null;
            if (item.key === "contact" && !sections.contact) return null;
            return <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-cyanBrand"><LocalizedText ar={item.labelAr} en={item.labelEn} /></a>;
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {controls.showNavbarSocials ? (
            <div className="flex items-center gap-1.5 border-e border-white/10 pe-2" aria-label="Social profiles">
              <a href="https://github.com/ahmed0qaid" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="group grid h-9 w-9 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.035] text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyanBrand/35 hover:bg-cyanBrand/[0.09] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanBrand/60"><Github className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/in/ahmed-qaid-18171b3b4" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="group grid h-9 w-9 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.035] text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-400/[0.09] hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"><Linkedin className="h-4 w-4" /></a>
            </div>
          ) : null}

          <LanguageSwitcher defaultLanguage={defaultLanguage} />
          {cvDownloadEnabled ? (
            <a href={profile.cvUrl} className="btn-secondary py-2" target="_blank" rel="noreferrer"><LocalizedText ar={hero.cvCta || "تحميل CV"} en={contentEn.hero.cvCta || "Download CV"} /></a>
          ) : (
            <a href="#contact" className="btn-secondary py-2"><LocalizedText ar="تواصل" en="Contact" /></a>
          )}
        </div>
      </nav>
    </header>
  );
}
