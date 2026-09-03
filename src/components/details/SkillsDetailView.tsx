import { useState } from "react";
import { Cpu, Workflow } from "lucide-react";
import { skills } from "@/data/portfolio";
import { OverlayShell } from "./OverlayShell";
import { cn } from "@/lib/utils";

interface SkillsDetailViewProps {
  onBack: () => void;
}

const groups = ["All", "Data Engineering", "Analytics Engineering", "Data Platform", "BI & Analytics"];

export function SkillsDetailView({ onBack }: SkillsDetailViewProps) {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const filteredSkills = skills.filter((s) => selectedGroup === "All" || s.group === selectedGroup);

  return (
    <OverlayShell
      title="Skills Matrix"
      countLabel={`(${skills.length}+)`}
      accent="sky"
      icon={<Cpu className="size-4 text-sky-400" />}
      onBack={onBack}
    >
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-400">
            <span className="size-1.5 rounded-full bg-sky-400" />
            Evidence-Based Core Competencies
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">Technical Stack & Data Architecture</h1>
          <p className="max-w-2xl text-sm text-muted">
            Wheel or trackpad to move through the matrix. Every skill is backed by repository artifacts.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-line bg-surface/90 p-6 shadow-2xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Workflow className="size-4 text-cyan-400" />
              <h3 className="text-base font-bold text-fg">Production Pipeline Pattern (Medallion Architecture)</h3>
            </div>
            <span className="font-mono text-2xs text-muted">Standardized across warehouses</span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Layer
              index="01 / BRONZE LAYER"
              tag="Raw Ingestion"
              title="Auditability & History"
              copy="Raw CSV and CRM/ERP ingestion into immutable tables with source metadata timestamps and load tracking."
              tone="text-amber-400"
            />
            <Layer
              index="02 / SILVER LAYER"
              tag="Conformed & Cleaned"
              title="Defensive Cleansing"
              copy="Standardization with TRY_CONVERT, CASE logic, phone/email cleansing, accepted value validation, and deduplication."
              tone="text-soft"
            />
            <Layer
              index="03 / GOLD LAYER"
              tag="Business Marts"
              title="Star Schema Delivery"
              copy="Fact tables, dimensions, SCD Type 2 history snapshots, and analytical views ready for Power BI, Superset, and Tableau."
              tone="text-warn"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setSelectedGroup(g)}
              className={cn(
                "min-h-11 rounded-xl border px-3.5 py-1.5 font-mono text-xs transition-colors",
                selectedGroup === g
                  ? "border-sky-400/50 bg-sky-500/20 text-sky-300"
                  : "border-line bg-fg/5 text-muted hover:text-fg",
              )}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredSkills.map((skill) => (
            <article key={skill.name} className="flex flex-col justify-between rounded-2xl border border-line bg-surface/80 p-5 shadow-xl hover:border-sky-400/40">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-0.5 font-mono text-2xs text-sky-300">
                    {skill.group}
                  </span>
                  <span className="font-mono text-xs font-semibold text-cyan-400">{skill.level}% Depth</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-fg">{skill.name}</h3>
                <div className="my-3 h-1.5 w-full overflow-hidden rounded-full bg-fg/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="rounded-xl border border-line bg-fg/[0.02] p-3 font-mono text-xs leading-relaxed text-soft">
                  <span className="mb-1 block text-2xs uppercase tracking-wider text-muted">Repository Evidence:</span>
                  {skill.evidence}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </OverlayShell>
  );
}

function Layer({
  index,
  tag,
  title,
  copy,
  tone,
}: {
  index: string;
  tag: string;
  title: string;
  copy: string;
  tone: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-fg/[0.03] p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className={cn("font-mono text-xs font-bold", tone)}>{index}</span>
        <span className="font-mono text-2xs text-muted">{tag}</span>
      </div>
      <h4 className="mb-1 text-sm font-semibold text-fg">{title}</h4>
      <p className="text-xs leading-relaxed text-muted">{copy}</p>
    </div>
  );
}
