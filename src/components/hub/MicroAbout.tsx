import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/portfolio";

export function MicroAbout() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8 md:flex-row md:items-center">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            Engineering Discipline
          </div>
          <p className="text-lg font-medium leading-snug text-fg sm:text-xl">{about.summary}</p>
          <p className="text-sm leading-relaxed text-muted">{about.journey}</p>
        </div>
        <div className="grid w-full shrink-0 grid-cols-2 gap-2.5 font-mono text-xs md:w-auto">
          {[
            ["Medallion Layers", "text-cyan-400"],
            ["Defensive T-SQL", "text-teal-400"],
            ["dbt Automated CI/CD", "text-sky-400"],
            ["Star Schema Marts", "text-amber-400"],
          ].map(([label, tone]) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-line bg-fg/5 px-3 py-2 text-soft"
            >
              <CheckCircle2 className={`size-3.5 ${tone}`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
