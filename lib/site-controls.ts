export const sectionKeys = ["about", "services", "skills", "projects", "assistant", "contact"] as const;
export type SectionKey = (typeof sectionKeys)[number];

export const featuredProjectKeys = [
  "flowguard",
  "durable-agent-runtime",
  "mcp-policy-gateway",
  "agenttrace-otel",
  "reporadar",
] as const;
export type FeaturedProjectKey = (typeof featuredProjectKeys)[number];

export type SiteControlSettings = {
  sectionOrder: SectionKey[];
  featuredProjectOrder: FeaturedProjectKey[];
  navbarSticky: boolean;
  showNavbarName: boolean;
  showNavbarSocials: boolean;
  chatDefaultOpen: boolean;
  projectsColumns: 2 | 3;
  servicesColumns: 2 | 3 | 4;
  skillsColumns: 2 | 3;
};

export const defaultSiteControlSettings: SiteControlSettings = {
  sectionOrder: ["about", "services", "skills", "projects", "assistant", "contact"],
  featuredProjectOrder: [
    "flowguard",
    "durable-agent-runtime",
    "mcp-policy-gateway",
    "agenttrace-otel",
    "reporadar",
  ],
  navbarSticky: true,
  showNavbarName: true,
  showNavbarSocials: true,
  chatDefaultOpen: true,
  projectsColumns: 3,
  servicesColumns: 3,
  skillsColumns: 3,
};

function normalizeOrder<T extends string>(value: unknown, allowed: readonly T[], fallback: T[]): T[] {
  if (!Array.isArray(value)) return fallback;
  const safe = value.filter((item): item is T => typeof item === "string" && allowed.includes(item as T));
  const unique = Array.from(new Set(safe));
  for (const item of allowed) {
    if (!unique.includes(item)) unique.push(item);
  }
  return unique;
}

export function normalizeSiteControlSettings(value: unknown): SiteControlSettings {
  if (!value || typeof value !== "object") return defaultSiteControlSettings;
  const input = value as Partial<SiteControlSettings>;

  return {
    sectionOrder: normalizeOrder(input.sectionOrder, sectionKeys, defaultSiteControlSettings.sectionOrder),
    featuredProjectOrder: normalizeOrder(
      input.featuredProjectOrder,
      featuredProjectKeys,
      defaultSiteControlSettings.featuredProjectOrder,
    ),
    navbarSticky: typeof input.navbarSticky === "boolean" ? input.navbarSticky : true,
    showNavbarName: typeof input.showNavbarName === "boolean" ? input.showNavbarName : true,
    showNavbarSocials: typeof input.showNavbarSocials === "boolean" ? input.showNavbarSocials : true,
    chatDefaultOpen: typeof input.chatDefaultOpen === "boolean" ? input.chatDefaultOpen : true,
    projectsColumns: input.projectsColumns === 2 ? 2 : 3,
    servicesColumns: input.servicesColumns === 2 || input.servicesColumns === 4 ? input.servicesColumns : 3,
    skillsColumns: input.skillsColumns === 2 ? 2 : 3,
  };
}
