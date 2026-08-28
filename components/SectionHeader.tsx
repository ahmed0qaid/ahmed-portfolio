import { LocalizedText } from "./LocalizedText";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  kickerEn?: string;
  titleEn?: string;
  subtitleEn?: string;
};

export function SectionHeader({ kicker, title, subtitle, kickerEn, titleEn, subtitleEn }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker"><LocalizedText ar={kicker} en={kickerEn} /></p>
      <h2 className="section-title !mt-2.5 sm:!mt-3"><LocalizedText ar={title} en={titleEn} /></h2>
      {subtitle ? <p className="section-subtitle !mt-3 sm:!mt-4"><LocalizedText ar={subtitle} en={subtitleEn} /></p> : null}
    </div>
  );
}
