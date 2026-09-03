import { ArrowDown, ArrowUpRight, Github, Linkedin, ShieldCheck, Terminal } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { useGitHubData } from "@/hooks/useGitHubData";

interface HeroProps {
  onScrollToCards: () => void;
}

export function Hero({ onScrollToCards }: HeroProps) {
  const { data: githubData } = useGitHubData();

  return (
    <section className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-between px-4 pb-8 pt-28 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-xs tracking-wide text-cyan-300">
          <Terminal className="size-3.5 text-cyan-400" />
          DATA SYSTEMS & AI/ML PLATFORMS
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-cyan-400" />
            Snowflake & SQL
          </span>
          <span className="hidden text-panel sm:inline">/</span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <span className="size-2 rounded-full bg-teal-400" />
            dbt Core CI/CD
          </span>
          <span className="hidden text-panel sm:inline">/</span>
          <span className="hidden items-center gap-1.5 md:flex">
            <span className="size-2 rounded-full bg-sky-400" />
            AI & Agentic Pipelines
          </span>
        </div>
      </div>

      <div className="my-auto grid grid-cols-1 items-center gap-8 py-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Engineering modern data &{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              AI pipelines at scale.
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-soft sm:text-lg">
            I'm <strong className="font-semibold text-fg">{profile.name}</strong>, a Data Engineer & AI/ML
            Specialist building Snowflake and SQL Server warehouses, dbt Core CI/CD transformations, Medallion
            architectures, and intelligent LLM workflows backed by real repository code.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-fg/5 px-4 py-2 font-mono text-xs text-soft transition-colors hover:border-cyan-400/40 hover:text-fg"
            >
              <Github className="size-4 text-cyan-400" />
              GitHub / Ritik574-coder
              <ArrowUpRight className="size-3.5 text-muted" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-fg/5 px-4 py-2 font-mono text-xs text-soft transition-colors hover:border-sky-400/40 hover:text-fg"
            >
              <Linkedin className="size-4 text-sky-400" />
              LinkedIn Profile
              <ArrowUpRight className="size-3.5 text-muted" />
            </a>
            <div className="hidden items-center gap-2 rounded-xl border border-teal-400/20 bg-teal-500/10 px-3.5 py-2 font-mono text-xs text-teal-300 sm:inline-flex">
              <ShieldCheck className="size-4 text-teal-400" />
              Verified 32 Certifications
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-4 lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-teal-500/20 to-sky-500/30 opacity-60 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-2xl">
              <img
                src={profile.portrait}
                alt="Ritik Kumar — Data Engineer & AI Specialist"
                width={320}
                height={380}
                className="h-auto w-60 rounded-xl object-cover contrast-105 transition-transform duration-500 group-hover:scale-105 sm:w-72 lg:w-64"
                loading="eager"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-line bg-surface/85 p-3 backdrop-blur-md">
                <div>
                  <div className="font-mono text-2xs uppercase tracking-wider text-cyan-400">Specialization</div>
                  <div className="text-xs font-semibold text-fg">Data & AI/ML Platforms</div>
                </div>
                <div className="flex items-center gap-1.5 rounded border border-emerald-400/30 bg-emerald-500/20 px-2 py-1 font-mono text-2xs text-emerald-300">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
        <div className="flex flex-wrap items-center gap-6 text-soft">
          <Stat value={githubData.profile.commits || "1,900+"} label="GitHub Commits" />
          <div className="hidden h-7 w-px bg-line sm:block" />
          <Stat
            value={githubData.profile.publicRepos ? `${githubData.profile.publicRepos}+` : "20+"}
            label="Public Repositories"
          />
          <div className="hidden h-7 w-px bg-line sm:block" />
          <Stat value={`${projects.length}+`} label="Engineered Projects" />
          <div className="hidden h-7 w-px bg-line sm:block" />
          <Stat value={String(githubData.profile.followers || "180+")} label="Followers" />
        </div>
        <button
          type="button"
          onClick={onScrollToCards}
          className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs text-cyan-400 hover:text-cyan-300"
        >
          Explore category cards
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-lg font-bold tabular-nums text-fg">{value}</span>
      <span className="font-mono text-2xs uppercase tracking-wider text-muted">{label}</span>
    </div>
  );
}
