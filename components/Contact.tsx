import { ExternalLink, Link as LinkIcon, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ContactItemContent, LayoutVariant, SiteContent } from "@/lib/site-content";
import { LocalizedText } from "./LocalizedText";
import { SectionHeader } from "./SectionHeader";
import { WhatsAppLink } from "./WhatsAppLink";

type ContactProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
  whatsappButtonEnabled: boolean;
};

const LINKEDIN_URL = "https://ye.linkedin.com/in/ahmed-qaid-18171b3b4";

export function buildWhatsAppUrl(number: string, message: string) {
  const digits = number.replace(/\D/g, "");
  if (!digits) return "#contact";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message || "Hello")}`;
}

const iconMap = {
  mail: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  location: MapPin,
  link: LinkIcon,
} as const;

function contactItemDefaults(content: SiteContent, contentEn: SiteContent, item: ContactItemContent) {
  const { profile, contact } = content;
  const english = contentEn;
  const whatsappUrlAr = buildWhatsAppUrl(profile.whatsappNumber || profile.phone, contact.whatsappMessage);
  const whatsappUrlEn = buildWhatsAppUrl(english.profile.whatsappNumber || profile.whatsappNumber || profile.phone, english.contact.whatsappMessage);

  if (item.id === "email") {
    return {
      labelAr: item.label || contact.emailLabel,
      labelEn: english.contact.items.find((entry) => entry.id === item.id)?.label || english.contact.emailLabel,
      valueAr: item.value || profile.email,
      valueEn: english.contact.items.find((entry) => entry.id === item.id)?.value || english.profile.email,
      hrefAr: item.href || `mailto:${profile.email}`,
      hrefEn: english.contact.items.find((entry) => entry.id === item.id)?.href || `mailto:${english.profile.email || profile.email}`,
    };
  }

  if (item.id === "phone") {
    return {
      labelAr: item.label || contact.phoneLabel,
      labelEn: english.contact.items.find((entry) => entry.id === item.id)?.label || english.contact.phoneLabel,
      valueAr: item.value || profile.phone,
      valueEn: english.contact.items.find((entry) => entry.id === item.id)?.value || english.profile.phone,
      hrefAr: item.href || `tel:${profile.phone}`,
      hrefEn: english.contact.items.find((entry) => entry.id === item.id)?.href || `tel:${english.profile.phone || profile.phone}`,
    };
  }

  if (item.id === "whatsapp") {
    return {
      labelAr: item.label || contact.whatsappLabel,
      labelEn: english.contact.items.find((entry) => entry.id === item.id)?.label || english.contact.whatsappLabel,
      valueAr: item.value || contact.whatsappCta,
      valueEn: english.contact.items.find((entry) => entry.id === item.id)?.value || english.contact.whatsappCta,
      hrefAr: item.href || whatsappUrlAr,
      hrefEn: english.contact.items.find((entry) => entry.id === item.id)?.href || whatsappUrlEn,
    };
  }

  if (item.id === "location") {
    return {
      labelAr: item.label || contact.locationLabel,
      labelEn: english.contact.items.find((entry) => entry.id === item.id)?.label || english.contact.locationLabel,
      valueAr: item.value || profile.location,
      valueEn: english.contact.items.find((entry) => entry.id === item.id)?.value || english.profile.location,
      hrefAr: item.href || "",
      hrefEn: english.contact.items.find((entry) => entry.id === item.id)?.href || "",
    };
  }

  const englishItem = english.contact.items.find((entry) => entry.id === item.id);
  return {
    labelAr: item.label,
    labelEn: englishItem?.label || item.label,
    valueAr: item.value,
    valueEn: englishItem?.value || item.value,
    hrefAr: item.href,
    hrefEn: englishItem?.href || item.href,
  };
}

function ContactCard({ content, contentEn, item }: { content: SiteContent; contentEn: SiteContent; item: ContactItemContent }) {
  const Icon = iconMap[item.icon] || LinkIcon;
  const resolved = contactItemDefaults(content, contentEn, item);
  const cardClass = item.highlighted
    ? "whatsapp-link rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3.5 text-emerald-50 transition hover:border-emerald-300/50 sm:p-4"
    : "repo-card rounded-2xl p-3.5 transition hover:border-cyanBrand/40 sm:p-4";
  const iconClass = item.highlighted ? "h-5 w-5 text-emerald-300" : "h-5 w-5 text-cyanBrand";
  const labelClass = item.highlighted ? "mt-2.5 text-sm text-emerald-200" : "mt-2.5 text-sm text-slate-400";

  const contentNode = (
    <>
      <Icon className={iconClass} />
      <p className={labelClass}><LocalizedText ar={resolved.labelAr} en={resolved.labelEn} /></p>
      <p className="mt-1 break-words text-sm font-semibold text-white"><LocalizedText ar={resolved.valueAr} en={resolved.valueEn} /></p>
    </>
  );

  if (resolved.hrefAr || resolved.hrefEn) {
    return (
      <WhatsAppLink hrefAr={resolved.hrefAr || "#contact"} hrefEn={resolved.hrefEn || resolved.hrefAr || "#contact"} className={cardClass} ariaLabel={resolved.valueAr || resolved.labelAr}>
        {contentNode}
      </WhatsAppLink>
    );
  }

  return <div className={cardClass}>{contentNode}</div>;
}

function LinkedInProfileCard() {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="group mt-3 flex items-center gap-3 rounded-2xl border border-[#0a66c2]/30 bg-[#0a66c2]/10 p-3.5 transition hover:-translate-y-0.5 hover:border-[#4da3f5]/60 hover:bg-[#0a66c2]/15 sm:mt-4 sm:gap-4 sm:p-4"
      aria-label="Ahmed Qaid LinkedIn profile"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0a66c2] text-white shadow-lg shadow-[#0a66c2]/20 sm:h-12 sm:w-12">
        <Linkedin className="h-6 w-6" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[#79b8f3]">LinkedIn</span>
        <span className="mt-1 block truncate text-sm font-bold text-white sm:text-base">Ahmed Qaid</span>
        <span className="mt-0.5 block text-xs text-slate-400 sm:text-sm">
          <LocalizedText ar="عرض الملف المهني والتواصل عبر لينكدإن" en="View my professional profile and connect on LinkedIn" />
        </span>
      </span>

      <ExternalLink className="h-5 w-5 shrink-0 text-[#79b8f3] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Contact({ content, contentEn, layoutVariant }: ContactProps) {
  const { contact } = content;
  const english = contentEn;
  const isCompact = layoutVariant === "compact";
  const visibleItems = contact.items.filter((item) => item.enabled);

  return (
    <section id="contact" className={isCompact ? "py-9 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-16"}>
      <div className="container-shell grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <SectionHeader
          kicker={contact.kicker}
          title={contact.title}
          subtitle={contact.subtitle}
          kickerEn={english.contact.kicker}
          titleEn={english.contact.title}
          subtitleEn={english.contact.subtitle}
        />

        <div className="mx-auto w-[90%] max-w-[600px] sm:w-[92%] md:w-[88%] lg:mx-0 lg:w-full lg:max-w-none">
          <div className="github-panel rounded-[1.75rem] p-3.5 sm:p-5 lg:p-6">
            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
              {visibleItems.map((item) => (
                <ContactCard key={item.id} content={content} contentEn={contentEn} item={item} />
              ))}
            </div>
            <LinkedInProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
