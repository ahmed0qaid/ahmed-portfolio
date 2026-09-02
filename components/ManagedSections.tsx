import { About } from "@/components/About";
import { AISection } from "@/components/AISection";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import type { SiteContent, LayoutVariant } from "@/lib/site-content";
import type { SectionKey } from "@/lib/site-controls";

type ManagedSectionsProps = {
  content: SiteContent;
  contentEn: SiteContent;
  layoutVariant: LayoutVariant;
  sectionOrder: SectionKey[];
  whatsappButtonEnabled: boolean;
};

export function ManagedSections({ content, contentEn, layoutVariant, sectionOrder, whatsappButtonEnabled }: ManagedSectionsProps) {
  const sectionMap: Record<SectionKey, React.ReactNode> = {
    about: content.sections.about ? <About content={content} contentEn={contentEn} layoutVariant={layoutVariant} /> : null,
    services: content.sections.services ? <Services content={content} contentEn={contentEn} layoutVariant={layoutVariant} /> : null,
    skills: content.sections.skills ? <Skills content={content} contentEn={contentEn} layoutVariant={layoutVariant} /> : null,
    projects: content.sections.projects ? <Projects content={content} contentEn={contentEn} layoutVariant={layoutVariant} /> : null,
    assistant: content.sections.assistant ? <AISection content={content} contentEn={contentEn} layoutVariant={layoutVariant} /> : null,
    contact: content.sections.contact ? <Contact content={content} contentEn={contentEn} layoutVariant={layoutVariant} whatsappButtonEnabled={whatsappButtonEnabled} /> : null,
  };

  return <>{sectionOrder.map((key) => <div key={key}>{sectionMap[key]}</div>)}</>;
}
