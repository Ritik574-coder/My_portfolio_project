import { useEffect, useRef, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface OverlayShellProps {
  title: string;
  countLabel: string;
  accent: "cyan" | "teal" | "sky";
  icon: ReactNode;
  onBack: () => void;
  children: ReactNode;
}

const accentMap = {
  cyan: {
    chip: "text-cyan-300 border-cyan-400/40 hover:border-cyan-300/70",
    count: "text-cyan-300",
  },
  teal: {
    chip: "text-teal-300 border-teal-400/40 hover:border-teal-300/70",
    count: "text-teal-300",
  },
  sky: {
    chip: "text-sky-300 border-sky-400/40 hover:border-sky-300/70",
    count: "text-sky-300",
  },
};

export function OverlayShell({ title, countLabel, accent, icon, onBack, children }: OverlayShellProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tones = accentMap[accent];

  useEffect(() => {
    document.documentElement.classList.add("overlay-open");
    const el = scrollRef.current;
    el?.focus({ preventScroll: true });
    if (el) el.scrollTop = 0;

    const onWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement | null;
      const nested = target?.closest("[data-nested-scroll]") as HTMLElement | null;
      if (nested && nested.scrollHeight > nested.clientHeight) return;
      if (!el) return;
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;
      event.preventDefault();
      el.scrollTop = Math.max(0, Math.min(max, el.scrollTop + event.deltaY));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      document.documentElement.classList.remove("overlay-open");
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-bg/95 text-fg"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-line bg-surface/90 px-4 py-4 backdrop-blur-xl sm:px-8">
        <button
          type="button"
          onClick={onBack}
          className={cn(
            "group flex min-h-11 items-center gap-2.5 rounded-xl border bg-fg/5 px-4 py-2 font-mono text-xs transition-colors",
            tones.chip,
          )}
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to hub</span>
        </button>
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          {icon}
          <span className="hidden sm:inline">{title}</span>
          <span className={cn("font-semibold", tones.count)}>{countLabel}</span>
        </div>
      </header>

      <div
        ref={scrollRef}
        tabIndex={-1}
        data-overlay-scroll
        className="overlay-scroll min-h-0 flex-1 outline-none"
      >
        {children}
      </div>
    </div>
  );
}
