import type { LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";
import { serviceIconMap } from "./icon-map";

type ServicesProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
};

export function Services({ content, contentEn, layoutVariant }: ServicesProps) {
  const isCompact = layoutVariant === "compact";
  const isShowcase = layoutVariant === "showcase";
  const english = contentEn;

  return (
    <section id="services" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell">
        <SectionHeader
          {...content.servicesHeader}
          kickerEn={english.servicesHeader.kicker}
          titleEn={english.servicesHeader.title}
          subtitleEn={english.servicesHeader.subtitle}
        />
        <div className={`mt-7 grid gap-4 sm:mt-8 sm:gap-5 lg:mt-10 md:grid-cols-2 ${isShowcase ? "xl:grid-cols-4" : "lg:grid-cols-3"}`}>
          {content.services.map((service, index) => {
            const Icon = serviceIconMap[service.icon] ?? serviceIconMap.server;
            const serviceEn = english.services[index];
            return (
              <article key={`${service.title}-${index}`} className="repo-card group rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyanBrand/40 sm:p-6">
                <div className="grid h-11 w-11 place-items-center rounded-[1.05rem] border border-white/10 bg-cyanBrand/10 text-cyanBrand transition group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-[1.15rem]">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500 sm:mt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyanBrand" />
                  <span><LocalizedText ar={`خدمة ${String(index + 1).padStart(2, "0")}`} en={`Service ${String(index + 1).padStart(2, "0")}`} /></span>
                </div>
                <h3 className="mt-2 text-lg font-black text-white sm:text-xl"><LocalizedText ar={service.title} en={serviceEn?.title || service.title} /></h3>
                <p className="mt-2.5 leading-7 text-slate-300/95 sm:mt-3 sm:leading-8"><LocalizedText ar={service.description} en={serviceEn?.description || service.description} /></p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
