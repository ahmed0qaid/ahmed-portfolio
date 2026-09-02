import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-auth";
import { getSiteSettings, updateSiteSettings } from "@/lib/site-settings";
import { languageVariants, layoutVariants, normalizeSiteContent, themeVariants } from "@/lib/site-content";
import { englishSiteContent } from "@/lib/site-translations";
import { normalizeSiteControlSettings } from "@/lib/site-controls";
import {
  isAllowedOrigin,
  originForbiddenResponse,
  payloadTooLargeResponse,
  rateLimit,
  rateLimitResponse,
  readJsonBody,
} from "@/lib/security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const limited = rateLimit(request, { key: "settings-read", limit: 30, windowMs: 60_000 });
  if (!limited.allowed) return rateLimitResponse(limited.retryAfter);
  if (!isAuthorizedAdmin(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const settings = await getSiteSettings();
  return NextResponse.json({ settings }, { headers: { "Cache-Control": "no-store" } });
}

export async function PUT(request: NextRequest) {
  const limited = rateLimit(request, { key: "settings-write", limit: 20, windowMs: 60_000 });
  if (!limited.allowed) return rateLimitResponse(limited.retryAfter);
  if (!isAllowedOrigin(request)) return originForbiddenResponse();
  if (!isAuthorizedAdmin(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: unknown;
  try {
    body = await readJsonBody(request, 600_000);
  } catch (error) {
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") return payloadTooLargeResponse();
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  const input = body as Record<string, unknown>;
  const update: Parameters<typeof updateSiteSettings>[0] = {};

  if (typeof input.cvDownloadEnabled === "boolean") update.cvDownloadEnabled = input.cvDownloadEnabled;
  if (typeof input.whatsappButtonEnabled === "boolean") update.whatsappButtonEnabled = input.whatsappButtonEnabled;
  if (typeof input.themeVariant === "string" && themeVariants.includes(input.themeVariant as never)) update.themeVariant = input.themeVariant as never;
  if (typeof input.layoutVariant === "string" && layoutVariants.includes(input.layoutVariant as never)) update.layoutVariant = input.layoutVariant as never;
  if (typeof input.defaultLanguage === "string" && languageVariants.includes(input.defaultLanguage as never)) update.defaultLanguage = input.defaultLanguage as never;
  if (typeof input.colorRotationEnabled === "boolean") update.colorRotationEnabled = input.colorRotationEnabled;
  if (typeof input.colorRotationIntervalSeconds === "number") {
    update.colorRotationIntervalSeconds = [10, 15].includes(input.colorRotationIntervalSeconds) ? input.colorRotationIntervalSeconds : 10;
  }
  if (input.controls && typeof input.controls === "object") update.controls = normalizeSiteControlSettings(input.controls);
  if (input.content && typeof input.content === "object") update.content = normalizeSiteContent(input.content);
  if (input.contentEn && typeof input.contentEn === "object") update.contentEn = normalizeSiteContent(input.contentEn, englishSiteContent);

  const settings = await updateSiteSettings(update);
  return NextResponse.json({ settings }, { headers: { "Cache-Control": "no-store" } });
}
