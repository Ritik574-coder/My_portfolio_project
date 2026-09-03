import { CheckCircle2, ExternalLink, Github, Layers, ShieldCheck, Workflow, X } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/85 p-4 backdrop-blur-xl sm:p-6">
      <div
        data-nested-scroll
        className="overlay-scroll relative max-h-[90vh] w-full max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-xl bg-fg/5 text-muted hover:text-fg"
          aria-label="Close case study"
        >
          <X className="size-5" />
        </button>

        <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
          <Layers className="size-4" />
          {project.category} · Case Study
        </div>
        <h2 className="mb-2 text-2xl font-bold text-fg sm:text-3xl">{project.title}</h2>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-soft">
            <span>Engineering Complexity:</span>
            <span className="text-amber-400">
              {"★".repeat(Math.floor(project.complexity))}
              {project.complexity % 1 !== 0 ? "½" : ""}
            </span>
            <span className="text-muted">({project.complexity} / 5)</span>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-3.5 py-1.5 font-mono text-xs font-medium text-cyan-300"
          >
            <Github className="size-3.5" />
            Inspect Repository
            <ExternalLink className="size-3 text-cyan-400" />
          </a>
        </div>

        <div className="space-y-6">
          <Block tone="text-amber-400" title="The Problem Statement">
            {project.businessProblem}
          </Block>
          <Block tone="text-cyan-400" title="The Engineered Solution">
            {project.solution}
          </Block>

          <div>
            <h4 className="mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-teal-400">
              <Workflow className="size-3.5" />
              Architecture Highlights & Flow
            </h4>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {project.architecture.map((layer) => (
                <div key={layer} className="flex items-start gap-2.5 rounded-xl border border-line bg-fg/5 p-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-400" />
                  <span className="font-mono text-xs text-soft">{layer}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-sky-400">
              <ShieldCheck className="size-3.5" />
              Verification & Achievements
            </h4>
            <div className="space-y-2">
              {project.achievements.map((ach) => (
                <div key={ach} className="flex items-center gap-2.5 rounded-xl border border-line bg-fg/5 p-3">
                  <span className="size-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span className="text-xs text-soft">{ach}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4">
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-cyan-300">
              Recruiter & Hiring Team Takeaway
            </div>
            <p className="text-xs font-medium leading-relaxed text-soft sm:text-sm">{project.recruiterValue}</p>
          </div>

          <div>
            <div className="mb-2 font-mono text-2xs uppercase tracking-wider text-muted">Technologies Used</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-lg border border-line bg-bg px-2.5 py-1 font-mono text-xs text-soft">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ tone, title, children }: { tone: string; title: string; children: string }) {
  return (
    <div className="rounded-xl border border-line bg-fg/[0.03] p-4">
      <div className={`mb-1 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider ${tone}`}>
        <span className="size-1.5 rounded-full bg-current" />
        {title}
      </div>
      <p className="text-sm leading-relaxed text-soft">{children}</p>
    </div>
  );
}
