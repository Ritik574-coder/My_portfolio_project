import { useMemo, useState } from "react";
import { ExternalLink, Github, Layers, Search, Sparkles } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { OverlayShell } from "./OverlayShell";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { cn } from "@/lib/utils";

interface ProjectsDetailViewProps {
  onBack: () => void;
}

const categories = [
  "All",
  "Data Engineering",
  "AI & ML Engineering",
  "Data Platform",
  "Business Intelligence",
  "Learning",
];

export function ProjectsDetailView({ onBack }: ProjectsDetailViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query)) ||
        p.solution.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <OverlayShell
      title="Projects Gallery"
      countLabel={`(${filteredProjects.length})`}
      accent="cyan"
      icon={<Layers className="size-4 text-cyan-400" />}
      onBack={onBack}
    >
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            Production Architecture & Engineering
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">Engineered Systems & BI Products</h1>
          <p className="max-w-2xl text-sm text-muted">
            Wheel, trackpad, or touch anywhere in this view to scroll. Detailed breakdown of warehouses, dbt Core
            transformations, Medallion pipelines, and decision-ready dashboards.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "min-h-11 rounded-xl border px-3.5 py-1.5 font-mono text-xs transition-colors",
                  selectedCategory === cat
                    ? "border-cyan-400/50 bg-cyan-500/20 text-cyan-300"
                    : "border-line bg-fg/5 text-muted hover:text-fg",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative min-w-60">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or keyword..."
              className="w-full rounded-xl border border-line bg-fg/5 py-2 pl-9 pr-4 font-mono text-xs text-fg placeholder:text-muted focus:border-cyan-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="flex flex-col justify-between rounded-2xl border border-line bg-surface/80 p-5 shadow-xl transition-transform hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-2xs text-cyan-300">
                    {p.category}
                  </span>
                  <div className="text-xs text-amber-400">
                    {"★".repeat(Math.floor(p.complexity))}
                    {p.complexity % 1 !== 0 ? "½" : ""}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-fg">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted">{p.solution}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-md border border-line bg-fg/5 px-2 py-0.5 font-mono text-2xs text-soft">
                      {tech}
                    </span>
                  ))}
                  {p.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 font-mono text-2xs text-muted">+{p.technologies.length - 4}</span>
                  )}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-2 border-t border-line pt-4">
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(p)}
                  className="flex min-h-11 items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-3 py-1.5 font-mono text-xs font-medium text-cyan-300"
                >
                  <Sparkles className="size-3.5" />
                  Case Study
                </button>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-mono text-xs text-muted hover:text-fg"
                >
                  <Github className="size-3.5" />
                  Repo
                  <ExternalLink className="size-3 text-muted" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <ProjectCaseStudyModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
    </OverlayShell>
  );
}
