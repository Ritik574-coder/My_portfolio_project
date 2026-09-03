import { useState, type ReactNode } from "react";
import { Award, Cpu, Database, Download, Layers, Menu, X } from "lucide-react";
import { profile, projects, certifications, skills } from "@/data/portfolio";
import type { CategoryId } from "@/lib/view-types";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenCategory: (category: CategoryId, origin?: DOMRect) => void;
  activeCategory: CategoryId | null;
}

export function Navbar({ onOpenCategory, activeCategory }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto group flex items-center gap-3 rounded-full border border-line bg-surface/80 px-3.5 py-2 backdrop-blur-xl transition-colors hover:border-cyan-400/40"
        >
          <span className="flex size-7 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/20 text-cyan-300">
            <Database className="size-3.5" />
          </span>
          <span className="flex flex-col text-left">
            <span className="text-xs font-semibold tracking-wider text-fg">RITIK KUMAR</span>
            <span className="font-mono text-2xs tracking-tight text-cyan-400">DATA PLATFORM</span>
          </span>
        </button>

        <nav className="pointer-events-auto hidden items-center gap-1 rounded-full border border-line bg-surface/75 p-1.5 shadow-lg backdrop-blur-xl md:flex">
          <NavChip
            active={activeCategory === "projects"}
            icon={<Layers className="size-3.5 text-cyan-400" />}
            label="Projects"
            count={String(projects.length)}
            onClick={(rect) => onOpenCategory("projects", rect)}
          />
          <NavChip
            active={activeCategory === "certificates"}
            icon={<Award className="size-3.5 text-teal-400" />}
            label="Certifications"
            count={String(certifications.length)}
            onClick={(rect) => onOpenCategory("certificates", rect)}
          />
          <NavChip
            active={activeCategory === "skills"}
            icon={<Cpu className="size-3.5 text-sky-400" />}
            label="Skills Matrix"
            count={`${skills.length}+`}
            onClick={(rect) => onOpenCategory("skills", rect)}
          />
        </nav>

        <div className="pointer-events-auto flex items-center gap-2.5">
          <div className="hidden items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-2xs text-soft lg:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open for Data Roles
          </div>
          <a
            href={profile.resumeUrl}
            download="Ritik-Kumar-Data-Engineer-Resume.pdf"
            className="flex min-h-11 items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3.5 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:border-cyan-400/60 hover:bg-cyan-500/25"
          >
            <Download className="size-3.5" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-11 items-center justify-center rounded-full border border-line bg-surface/80 text-soft md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="pointer-events-auto mx-auto mt-3 flex max-w-sm flex-col gap-2 rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          {(
            [
              ["projects", "Projects Gallery", String(projects.length), Layers],
              ["certificates", `${certifications.length} Certifications`, String(certifications.length), Award],
              ["skills", "Skills Matrix", `${skills.length}+`, Cpu],
            ] as const
          ).map(([id, label, count, Icon]) => (
            <button
              key={id}
              type="button"
              onClick={(e) => {
                onOpenCategory(id, e.currentTarget.getBoundingClientRect());
                setMobileOpen(false);
              }}
              className="flex min-h-11 items-center justify-between rounded-xl bg-fg/5 px-4 py-3 text-sm font-medium text-soft"
            >
              <span className="flex items-center gap-3">
                <Icon className="size-4 text-cyan-400" />
                {label}
              </span>
              <span className="font-mono text-xs text-cyan-300">{count}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function NavChip({
  active,
  icon,
  label,
  count,
  onClick,
}: {
  active: boolean;
  icon: ReactNode;
  label: string;
  count: string;
  onClick: (rect: DOMRect) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onClick(e.currentTarget.getBoundingClientRect())}
      className={cn(
        "flex min-h-11 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border border-cyan-400/40 bg-cyan-500/20 text-cyan-300"
          : "text-soft hover:bg-fg/5 hover:text-fg",
      )}
    >
      {icon}
      <span>{label}</span>
      <span className="rounded border border-line bg-fg/5 px-1.5 font-mono text-2xs text-cyan-300">{count}</span>
    </button>
  );
}
