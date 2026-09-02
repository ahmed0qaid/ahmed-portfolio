"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, LayoutGrid, Loader2, Save, Settings2 } from "lucide-react";
import type { SiteSettings } from "@/lib/site-settings";
import {
  defaultSiteControlSettings,
  featuredProjectKeys,
  sectionKeys,
  type FeaturedProjectKey,
  type SectionKey,
  type SiteControlSettings,
} from "@/lib/site-controls";

const sectionLabels: Record<SectionKey, string> = {
  about: "نبذة عني",
  services: "مجالات العمل",
  skills: "المهارات",
  projects: "المشاريع",
  assistant: "المساعد الذكي",
  contact: "التواصل",
};

const projectLabels: Record<FeaturedProjectKey, string> = {
  flowguard: "FlowGuard",
  "durable-agent-runtime": "Durable Agent Runtime",
  "mcp-policy-gateway": "MCP Policy Gateway",
  "agenttrace-otel": "AgentTrace OTel",
  reporadar: "RepoRadar AI",
};

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <button type="button" onClick={() => onChange(!checked)} className={`flex items-center justify-between rounded-2xl border p-4 text-right transition ${checked ? "border-cyanBrand/40 bg-cyanBrand/10" : "border-white/10 bg-white/[0.03]"}`}>
      <span className="font-bold text-slate-100">{label}</span>
      <span className={`h-6 w-11 rounded-full p-1 ${checked ? "bg-cyanBrand" : "bg-slate-700"}`}>
        <span className={`block h-4 w-4 rounded-full bg-white transition ${checked ? "-translate-x-5" : ""}`} />
      </span>
    </button>
  );
}

function moveItem<T>(items: T[], index: number, direction: -1 | 1) {
  const target = index + direction;
  if (target < 0 || target >= items.length) return items;
  const next = [...items];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

export function DashboardSiteSetupPanel({ adminToken }: { adminToken: string }) {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/settings", { headers: { "x-admin-token": adminToken }, cache: "no-store" });
      if (!res.ok) throw new Error("تعذر تحميل إعدادات التهيئة.");
      const data = await res.json();
      setSettings({ ...data.settings, controls: data.settings.controls || defaultSiteControlSettings });
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "تعذر تحميل الإعدادات.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [adminToken]);

  function updateControls(patch: Partial<SiteControlSettings>) {
    setSettings((current) => current ? { ...current, controls: { ...current.controls, ...patch } } : current);
  }

  async function save() {
    if (!settings) return;
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
        body: JSON.stringify({ controls: settings.controls }),
      });
      if (!res.ok) throw new Error("تعذر حفظ إعدادات التهيئة.");
      const data = await res.json();
      setSettings(data.settings);
      setMessage("تم حفظ إعدادات التهيئة والترتيب.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "تعذر حفظ الإعدادات.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="card-border rounded-[2rem] p-6"><Loader2 className="h-5 w-5 animate-spin text-cyanBrand" /></div>;
  if (!settings) return null;
  const controls = settings.controls;

  return (
    <section className="card-border rounded-[2rem] p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-kicker">Site Setup</p>
          <h2 className="mt-2 text-2xl font-black text-white">تهيئة الموقع وترتيبه</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">تحكم في ترتيب الأقسام والبطاقات، عدد الأعمدة، الشريط العلوي، وروابطه، وطريقة فتح المساعد الذكي.</p>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyanBrand/10 text-cyanBrand"><Settings2 className="h-6 w-6" /></div>
      </div>

      <div className="mt-7 grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
          <h3 className="flex items-center gap-2 font-black text-white"><LayoutGrid className="h-4 w-4 text-cyanBrand" /> ترتيب أقسام الصفحة</h3>
          <div className="mt-4 space-y-2">
            {controls.sectionOrder.map((key, index) => (
              <div key={key} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <span className="font-bold text-slate-200">{index + 1}. {sectionLabels[key]}</span>
                <div className="flex gap-1">
                  <button onClick={() => updateControls({ sectionOrder: moveItem(controls.sectionOrder, index, -1) })} disabled={index === 0} className="rounded-xl border border-white/10 p-2 text-slate-300 disabled:opacity-30"><ArrowUp className="h-4 w-4" /></button>
                  <button onClick={() => updateControls({ sectionOrder: moveItem(controls.sectionOrder, index, 1) })} disabled={index === controls.sectionOrder.length - 1} className="rounded-xl border border-white/10 p-2 text-slate-300 disabled:opacity-30"><ArrowDown className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
          <h3 className="font-black text-white">ترتيب المشاريع الرئيسية</h3>
          <div className="mt-4 space-y-2">
            {controls.featuredProjectOrder.map((key, index) => (
              <div key={key} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <span className="font-bold text-slate-200">{index + 1}. {projectLabels[key]}</span>
                <div className="flex gap-1">
                  <button onClick={() => updateControls({ featuredProjectOrder: moveItem(controls.featuredProjectOrder, index, -1) })} disabled={index === 0} className="rounded-xl border border-white/10 p-2 text-slate-300 disabled:opacity-30"><ArrowUp className="h-4 w-4" /></button>
                  <button onClick={() => updateControls({ featuredProjectOrder: moveItem(controls.featuredProjectOrder, index, 1) })} disabled={index === controls.featuredProjectOrder.length - 1} className="rounded-xl border border-white/10 p-2 text-slate-300 disabled:opacity-30"><ArrowDown className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Toggle label="تثبيت الشريط العلوي" checked={controls.navbarSticky} onChange={(value) => updateControls({ navbarSticky: value })} />
        <Toggle label="إظهار الاسم في الشريط" checked={controls.showNavbarName} onChange={(value) => updateControls({ showNavbarName: value })} />
        <Toggle label="إظهار GitHub وLinkedIn في الشريط" checked={controls.showNavbarSocials} onChange={(value) => updateControls({ showNavbarSocials: value })} />
        <Toggle label="فتح المساعد الذكي تلقائيًا" checked={controls.chatDefaultOpen} onChange={(value) => updateControls({ chatDefaultOpen: value })} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <label className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><span className="mb-2 block text-sm font-bold text-slate-200">أعمدة المشاريع</span><select value={controls.projectsColumns} onChange={(e) => updateControls({ projectsColumns: Number(e.target.value) as 2 | 3 })} className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-3"><option value={2}>عمودان</option><option value={3}>3 أعمدة</option></select></label>
        <label className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><span className="mb-2 block text-sm font-bold text-slate-200">أعمدة مجالات العمل</span><select value={controls.servicesColumns} onChange={(e) => updateControls({ servicesColumns: Number(e.target.value) as 2 | 3 | 4 })} className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-3"><option value={2}>عمودان</option><option value={3}>3 أعمدة</option><option value={4}>4 أعمدة</option></select></label>
        <label className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><span className="mb-2 block text-sm font-bold text-slate-200">أعمدة المهارات</span><select value={controls.skillsColumns} onChange={(e) => updateControls({ skillsColumns: Number(e.target.value) as 2 | 3 })} className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-3"><option value={2}>عمودان</option><option value={3}>3 أعمدة</option></select></label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button onClick={save} disabled={saving} className="btn-primary gap-2 disabled:opacity-50">{saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />} حفظ التهيئة</button>
        <button onClick={() => updateControls(defaultSiteControlSettings)} className="btn-secondary">استعادة الترتيب الافتراضي</button>
        {message ? <span className="text-sm text-slate-300">{message}</span> : null}
      </div>
    </section>
  );
}
