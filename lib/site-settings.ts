import { prisma } from "@/lib/prisma";
import {
  defaultSiteContent,
  layoutVariants,
  languageVariants,
  normalizeSiteContent,
  themeVariants,
  type LayoutVariant,
  type SiteContent,
  type SiteLanguage,
  type ThemeVariant,
} from "@/lib/site-content";
import { englishSiteContent } from "@/lib/site-translations";
import {
  defaultSiteControlSettings,
  normalizeSiteControlSettings,
  type SiteControlSettings,
} from "@/lib/site-controls";

export type SiteSettings = {
  cvDownloadEnabled: boolean;
  whatsappButtonEnabled: boolean;
  themeVariant: ThemeVariant;
  layoutVariant: LayoutVariant;
  defaultLanguage: SiteLanguage;
  colorRotationEnabled: boolean;
  colorRotationIntervalSeconds: number;
  controls: SiteControlSettings;
  content: SiteContent;
  contentEn: SiteContent;
};

export const defaultSiteSettings: SiteSettings = {
  cvDownloadEnabled: true,
  whatsappButtonEnabled: true,
  themeVariant: "cyber",
  layoutVariant: "classic",
  defaultLanguage: "ar",
  colorRotationEnabled: false,
  colorRotationIntervalSeconds: 10,
  controls: defaultSiteControlSettings,
  content: defaultSiteContent,
  contentEn: englishSiteContent,
};

const SETTING_KEYS = {
  cvDownloadEnabled: "cvDownloadEnabled",
  whatsappButtonEnabled: "whatsappButtonEnabled",
  themeVariant: "themeVariant",
  layoutVariant: "layoutVariant",
  defaultLanguage: "defaultLanguage",
  colorRotationEnabled: "colorRotationEnabled",
  colorRotationIntervalSeconds: "colorRotationIntervalSeconds",
  siteControls: "siteControls",
  siteContent: "siteContent",
  siteContentEn: "siteContentEn",
} as const;

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value === "true") return true;
  if (value === "false") return false;
  return fallback;
}

function parseTheme(value: string | undefined): ThemeVariant {
  return themeVariants.includes(value as ThemeVariant) ? (value as ThemeVariant) : defaultSiteSettings.themeVariant;
}

function parseLayout(value: string | undefined): LayoutVariant {
  return layoutVariants.includes(value as LayoutVariant) ? (value as LayoutVariant) : defaultSiteSettings.layoutVariant;
}

function parseLanguage(value: string | undefined): SiteLanguage {
  return languageVariants.includes(value as SiteLanguage) ? (value as SiteLanguage) : defaultSiteSettings.defaultLanguage;
}

function parseRotationInterval(value: string | undefined): number {
  const parsed = Number(value);
  return parsed === 10 || parsed === 15 ? parsed : defaultSiteSettings.colorRotationIntervalSeconds;
}

function parseContent(value: string | undefined, fallback: SiteContent): SiteContent {
  if (!value) return fallback;
  try {
    return normalizeSiteContent(JSON.parse(value), fallback);
  } catch (error) {
    console.error("Failed to parse site content", error);
    return fallback;
  }
}

function parseControls(value: string | undefined): SiteControlSettings {
  if (!value) return defaultSiteControlSettings;
  try {
    return normalizeSiteControlSettings(JSON.parse(value));
  } catch (error) {
    console.error("Failed to parse site controls", error);
    return defaultSiteControlSettings;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const rows = (await prisma.siteSetting.findMany({
      where: { key: { in: Object.values(SETTING_KEYS) } },
    })) as Array<{ key: string; value: string }>;
    const map = new Map<string, string>(rows.map((row) => [row.key, row.value]));

    return {
      cvDownloadEnabled: parseBoolean(map.get(SETTING_KEYS.cvDownloadEnabled), defaultSiteSettings.cvDownloadEnabled),
      whatsappButtonEnabled: parseBoolean(map.get(SETTING_KEYS.whatsappButtonEnabled), defaultSiteSettings.whatsappButtonEnabled),
      themeVariant: parseTheme(map.get(SETTING_KEYS.themeVariant)),
      layoutVariant: parseLayout(map.get(SETTING_KEYS.layoutVariant)),
      defaultLanguage: parseLanguage(map.get(SETTING_KEYS.defaultLanguage)),
      colorRotationEnabled: parseBoolean(map.get(SETTING_KEYS.colorRotationEnabled), defaultSiteSettings.colorRotationEnabled),
      colorRotationIntervalSeconds: parseRotationInterval(map.get(SETTING_KEYS.colorRotationIntervalSeconds)),
      controls: parseControls(map.get(SETTING_KEYS.siteControls)),
      content: parseContent(map.get(SETTING_KEYS.siteContent), defaultSiteContent),
      contentEn: parseContent(map.get(SETTING_KEYS.siteContentEn), englishSiteContent),
    };
  } catch (error) {
    console.error("Failed to read site settings", error);
    return defaultSiteSettings;
  }
}

export async function updateSiteSettings(settings: Partial<SiteSettings>) {
  const writes = [];
  const upsert = (key: string, value: string) => prisma.siteSetting.upsert({
    where: { key }, update: { value }, create: { key, value },
  });

  if (typeof settings.cvDownloadEnabled === "boolean") writes.push(upsert(SETTING_KEYS.cvDownloadEnabled, String(settings.cvDownloadEnabled)));
  if (typeof settings.whatsappButtonEnabled === "boolean") writes.push(upsert(SETTING_KEYS.whatsappButtonEnabled, String(settings.whatsappButtonEnabled)));
  if (settings.themeVariant && themeVariants.includes(settings.themeVariant)) writes.push(upsert(SETTING_KEYS.themeVariant, settings.themeVariant));
  if (settings.layoutVariant && layoutVariants.includes(settings.layoutVariant)) writes.push(upsert(SETTING_KEYS.layoutVariant, settings.layoutVariant));
  if (settings.defaultLanguage && languageVariants.includes(settings.defaultLanguage)) writes.push(upsert(SETTING_KEYS.defaultLanguage, settings.defaultLanguage));
  if (typeof settings.colorRotationEnabled === "boolean") writes.push(upsert(SETTING_KEYS.colorRotationEnabled, String(settings.colorRotationEnabled)));
  if (typeof settings.colorRotationIntervalSeconds === "number" && [10, 15].includes(settings.colorRotationIntervalSeconds)) {
    writes.push(upsert(SETTING_KEYS.colorRotationIntervalSeconds, String(settings.colorRotationIntervalSeconds)));
  }
  if (settings.controls) writes.push(upsert(SETTING_KEYS.siteControls, JSON.stringify(normalizeSiteControlSettings(settings.controls))));
  if (settings.content) writes.push(upsert(SETTING_KEYS.siteContent, JSON.stringify(normalizeSiteContent(settings.content, defaultSiteContent))));
  if (settings.contentEn) writes.push(upsert(SETTING_KEYS.siteContentEn, JSON.stringify(normalizeSiteContent(settings.contentEn, englishSiteContent))));

  if (writes.length > 0) await prisma.$transaction(writes);
  return getSiteSettings();
}

export async function isCvDownloadEnabled() {
  const settings = await getSiteSettings();
  return settings.cvDownloadEnabled;
}
