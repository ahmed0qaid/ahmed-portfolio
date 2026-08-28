import { ExternalLink, Github, Trophy } from "lucide-react";
import { LocalizedText } from "./LocalizedText";

export function LatestAchievement() {
  return (
    <section id="achievement" className="py-16">
      <div className="container-shell">
        <div className="repo-card rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 flex items-center gap-2 text-cyan-200">
                <Trophy className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-bold tracking-wide">
                  <LocalizedText ar="مشاركة تقنية حديثة" en="Recent Engineering Challenge" />
                </span>
              </div>

              <h2 className="text-2xl font-black text-white md:text-3xl">
                <LocalizedText
                  ar="ICPC 2026 Online Challenge 1 powered by Huawei"
                  en="ICPC 2026 Online Challenge 1 powered by Huawei"
                />
              </h2>

              <p className="mt-4 leading-8 text-slate-300/95">
                <LocalizedText
                  ar="شاركت في تحدي Problem A: Edge–Cloud Collaborative Scheduling وطورت حلًا بلغة C++ بشكل تكراري، مع التركيز على خوارزميات الجدولة، التجميع الديناميكي، توزيع الموارد، وموازنة زمن الاستجابة مع الإنتاجية. المشاركة موثقة كمشارك دون ادعاء فوز أو ترتيب."
                  en="Participated in Problem A: Edge–Cloud Collaborative Scheduling and iteratively developed a C++ solution focused on scheduling algorithms, dynamic batching, resource allocation, and latency/throughput trade-offs. Listed factually as a participant, with no award or ranking claim."
                />
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "C++",
                  "Algorithms",
                  "Scheduling",
                  "Dynamic Batching",
                  "Edge/Cloud",
                  "Optimization",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex min-w-fit flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="https://github.com/ahmed2qaid/edge-cloud-collaborative-scheduling"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.1]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <LocalizedText ar="عرض الكود على GitHub" en="View Code on GitHub" />
              </a>

              <a
                href="https://codeforces.com/contest/2251/problem/A"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white transition hover:border-violet-300/50 hover:bg-white/[0.1]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <LocalizedText ar="صفحة المسألة" en="Problem Page" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
