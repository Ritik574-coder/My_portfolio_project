import { useState, type ReactNode } from "react";
import { ArrowRight, Award, Cpu, Layers } from "lucide-react";
import { projects, certifications, skills } from "@/data/portfolio";
import type { CategoryId } from "@/lib/view-types";
import { cn } from "@/lib/utils";

interface CategoryCardsProps {
  onSelectCategory: (category: CategoryId, origin: DOMRect) => void;
}

export function CategoryCards({ onSelectCategory }: CategoryCardsProps) {
  const [hovered, setHovered] = useState<CategoryId | null>(null);

  return (
    <section id="category-cards" className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            Interactive Categories
          </div>
          <span className="hidden font-mono text-xs text-muted sm:inline-block">
            Click a card — it drops into the data wormhole
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">Explore Portfolio Dimensions</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CategoryCard
          id="projects"
          setHovered={setHovered}
          onSelect={onSelectCategory}
          icon={<Layers className="size-5" />}
          iconWrap="bg-cyan-500/15 border-cyan-400/30 text-cyan-300"
          hoverBorder="hover:border-cyan-400/50"
          badge={`${projects.length} Systems`}
          badgeTone="bg-cyan-500/10 border-cyan-400/20 text-cyan-300"
          title="Engineered Projects"
          titleHover="group-hover:text-cyan-300"
          copy="End-to-end data systems: SQL Server warehouses, dbt Core CI/CD pipelines, and Medallion models."
          footer="Explore all projects"
          footerHint="Filter & case studies"
          footerTone="text-cyan-400 group-hover:text-cyan-300"
        >
          <div className="space-y-2">
            {projects.slice(0, 3).map((p, idx) => (
              <div
                key={p.id}
                className="rounded-lg border border-line bg-surface/90 p-2.5 shadow transition-transform"
                style={hovered === "projects" ? { transform: `translateX(${idx * 6}px)` } : undefined}
              >
                <div className="flex items-center justify-between text-2xs font-semibold text-fg">
                  <span className="max-w-44 truncate">{p.title}</span>
                  <span className="font-mono text-2xs text-cyan-400">{p.technologies[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </CategoryCard>

        <CategoryCard
          id="certificates"
          setHovered={setHovered}
          onSelect={onSelectCategory}
          icon={<Award className="size-5" />}
          iconWrap="bg-teal-500/15 border-teal-400/30 text-teal-300"
          hoverBorder="hover:border-teal-400/50"
          badge={`${certifications.length} Credentials`}
          badgeTone="bg-teal-500/10 border-teal-400/20 text-teal-300"
          title="Verified Certifications"
          titleHover="group-hover:text-teal-300"
          copy="32 backed certificates from DataCamp, Astronomer, and LinkedIn with in-browser PDF previews."
          footer="Verify 32 certificates"
          footerHint="PDF lightbox"
          footerTone="text-teal-400 group-hover:text-teal-300"
        >
          <div className="grid grid-cols-2 gap-2">
            {[
              ["DataCamp", "Advanced dbt", "bg-teal-400"],
              ["Astronomer", "Airflow Foundations", "bg-cyan-400"],
              ["LinkedIn", "SQL Engineering", "bg-sky-400"],
              ["Docker / Linux", "Foundations", "bg-amber-400"],
            ].map(([org, item, dot]) => (
              <div key={org} className="flex items-center gap-2 rounded-lg border border-line bg-surface/90 p-2">
                <span className={cn("size-2 rounded-full", dot)} />
                <div>
                  <div className="text-2xs font-bold text-fg">{org}</div>
                  <div className="font-mono text-2xs text-teal-300">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </CategoryCard>

        <CategoryCard
          id="skills"
          setHovered={setHovered}
          onSelect={onSelectCategory}
          icon={<Cpu className="size-5" />}
          iconWrap="bg-sky-500/15 border-sky-400/30 text-sky-300"
          hoverBorder="hover:border-sky-400/50"
          badge={`${skills.length}+ Technologies`}
          badgeTone="bg-sky-500/10 border-sky-400/20 text-sky-300"
          title="Skills & Architecture"
          titleHover="group-hover:text-sky-300"
          copy="Categorized evidence matrix: Data Engineering, Analytics Engineering, Data Platform, and BI."
          footer="Inspect tech matrix"
          footerHint="Evidence-based"
          footerTone="text-sky-400 group-hover:text-sky-300"
        >
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {["SQL Server", "dbt Core", "Docker", "Python", "CI/CD", "Medallion", "Power BI", "Tableau", "PySpark"].map(
              (name, idx) => (
                <span
                  key={name}
                  className="rounded-md border border-cyan-500/30 bg-surface/80 px-2.5 py-1 font-mono text-2xs font-medium text-cyan-300 transition-transform"
                  style={{
                    transform: hovered === "skills" ? "scale(1.05)" : undefined,
                    transitionDelay: `${idx * 25}ms`,
                  }}
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </CategoryCard>
      </div>
    </section>
  );
}

function CategoryCard({
  id,
  setHovered,
  onSelect,
  icon,
  iconWrap,
  hoverBorder,
  badge,
  badgeTone,
  title,
  titleHover,
  copy,
  footer,
  footerHint,
  footerTone,
  children,
}: {
  id: CategoryId;
  setHovered: (id: CategoryId | null) => void;
  onSelect: (category: CategoryId, origin: DOMRect) => void;
  icon: ReactNode;
  iconWrap: string;
  hoverBorder: string;
  badge: string;
  badgeTone: string;
  title: string;
  titleHover: string;
  copy: string;
  footer: string;
  footerHint: string;
  footerTone: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onSelect(id, e.currentTarget.getBoundingClientRect())}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group relative flex min-h-96 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5",
        hoverBorder,
      )}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div
            className={cn(
              "flex size-11 items-center justify-center rounded-xl border transition-transform group-hover:scale-110",
              iconWrap,
            )}
          >
            {icon}
          </div>
          <span className={cn("rounded-full border px-2.5 py-1 font-mono text-xs font-semibold", badgeTone)}>
            {badge}
          </span>
        </div>
        <h3 className={cn("text-xl font-bold text-fg transition-colors", titleHover)}>{title}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-soft">{copy}</p>
        <div className="relative mt-5 h-36 overflow-hidden rounded-xl border border-line bg-bg/60 p-3">{children}</div>
      </div>
      <div className={cn("mt-4 flex items-center justify-between border-t border-line pt-4 font-mono text-xs", footerTone)}>
        <span className="flex items-center gap-1.5 font-semibold uppercase">
          {footer}
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
        </span>
        <span className="text-2xs text-muted">{footerHint}</span>
      </div>
    </button>
  );
}
