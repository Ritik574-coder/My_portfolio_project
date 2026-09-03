import { useEffect, useRef } from "react";
import type { CategoryId, WormholeOrigin } from "@/lib/view-types";

export type { WormholeOrigin };

type Phase = "enter" | "exit";

interface WormholeOverlayProps {
  phase: Phase;
  category: CategoryId;
  origin: WormholeOrigin | null;
  onComplete: () => void;
}

const LABELS: Record<CategoryId, string> = {
  projects: "ENGINEERED SYSTEMS",
  certificates: "CREDENTIAL GATE",
  skills: "SKILLS MATRIX",
};

const PACKETS = [
  "SELECT * FROM gold.fact_sales",
  "dbt run --select marts+",
  "COPY INTO bronze.raw_crm",
  "TRY_CONVERT(date, src)",
  "Airflow DAG: ingest→test",
  "SCD Type 2 snapshot",
  "Snowflake TASK stream",
  "Medallion: B → S → G",
  "SQLFluff lint --fix",
  "Athena query lakehouse",
  "dbt test --store-failures",
  "star.schema.dim_customer",
];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function WormholeOverlay({ phase, category, origin, onComplete }: WormholeOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const duration = prefersReducedMotion() ? 280 : phase === "enter" ? 2400 : 1600;
    const started = performance.now();
    let raf = 0;
    let finished = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const finish = () => {
      if (finished) return;
      finished = true;
      onCompleteRef.current();
    };

    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const easeIn = (t: number) => t * t * t;

    const render = (now: number) => {
      const elapsed = now - started;
      const raw = Math.min(1, elapsed / duration);
      const t = phase === "enter" ? easeInOut(raw) : easeIn(raw);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w * 0.5;
      const cy = h * 0.5;
      const maxR = Math.hypot(w, h) * 0.72;

      ctx.fillStyle = "#02040a";
      ctx.fillRect(0, 0, w, h);

      const tunnelSpeed = phase === "enter" ? t * 4.2 + 0.15 : (1 - t) * 3.4 + 0.1;
      const swirl = (phase === "enter" ? 1 : -1) * (elapsed / 1000) * (0.7 + t * 2.4);

      const vignette = ctx.createRadialGradient(cx, cy, maxR * 0.12, cx, cy, maxR);
      vignette.addColorStop(0, "rgba(0, 20, 32, 0.1)");
      vignette.addColorStop(0.55, "rgba(2, 6, 14, 0.55)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      const rings = 28;
      for (let i = 0; i < rings; i++) {
        const z = ((i / rings) + tunnelSpeed * 0.22) % 1;
        const depth = Math.pow(z, 1.35);
        const radius = 18 + depth * maxR;
        const alpha = (1 - depth) * (phase === "enter" ? Math.min(1, t * 1.6) : 1 - t);
        const twist = swirl + i * 0.18;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(twist * 0.18);
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 1.18, radius * 0.62, twist * 0.08, 0, Math.PI * 2);
        ctx.strokeStyle =
          i % 3 === 0
            ? `rgba(0, 245, 255, ${0.08 + alpha * 0.55})`
            : i % 3 === 1
              ? `rgba(0, 210, 180, ${0.06 + alpha * 0.4})`
              : `rgba(56, 189, 248, ${0.05 + alpha * 0.32})`;
        ctx.lineWidth = 1.2 + (1 - depth) * 2.4;
        ctx.stroke();

        if (i % 2 === 0) {
          const spokes = 12;
          for (let s = 0; s < spokes; s++) {
            const ang = (s / spokes) * Math.PI * 2 + twist;
            const inner = radius * 0.92;
            const outer = radius * 1.04;
            ctx.beginPath();
            ctx.moveTo(Math.cos(ang) * inner * 1.18, Math.sin(ang) * inner * 0.62);
            ctx.lineTo(Math.cos(ang) * outer * 1.18, Math.sin(ang) * outer * 0.62);
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      const coreR = 14 + (phase === "enter" ? t : 1 - t) * 46;
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3.2);
      core.addColorStop(0, "rgba(240, 253, 255, 0.95)");
      core.addColorStop(0.18, "rgba(0, 245, 255, 0.85)");
      core.addColorStop(0.42, "rgba(0, 210, 180, 0.35)");
      core.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 3.2, 0, Math.PI * 2);
      ctx.fill();

      const packetCount = 36;
      ctx.font = "11px 'IBM Plex Mono', monospace";
      ctx.textAlign = "left";
      for (let i = 0; i < packetCount; i++) {
        const seed = i * 17.13;
        const travel = (elapsed / 900 + seed) % 1;
        const depth = phase === "enter" ? travel : 1 - travel;
        const ang = seed + swirl * 0.6;
        const radius = 30 + Math.pow(depth, 1.2) * maxR * 0.92;
        const px = cx + Math.cos(ang) * radius * 1.15;
        const py = cy + Math.sin(ang) * radius * 0.58;
        const fade = (1 - depth) * (phase === "enter" ? Math.min(1, t * 1.8) : 1 - t);
        if (fade < 0.05) continue;
        ctx.globalAlpha = fade * 0.9;
        ctx.fillStyle = i % 2 === 0 ? "#00f5ff" : "#00d2b4";
        ctx.beginPath();
        ctx.arc(px, py, 1.4 + (1 - depth) * 2.2, 0, Math.PI * 2);
        ctx.fill();
        if (i % 3 === 0) {
          ctx.fillStyle = "rgba(203, 213, 225, 0.85)";
          ctx.fillText(PACKETS[i % PACKETS.length], px + 8, py + 3);
        }
      }
      ctx.globalAlpha = 1;

      if (origin && phase === "enter" && t < 0.72) {
        const cardT = Math.min(1, t / 0.72);
        const fromX = origin.x;
        const fromY = origin.y;
        const x = fromX + (cx - fromX) * cardT;
        const y = fromY + (cy - fromY) * cardT;
        const scale = 1 - cardT * 0.92;
        const alpha = 1 - cardT;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(cardT * 0.55);
        ctx.scale(scale, scale * (1 - cardT * 0.35));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "rgba(14, 23, 38, 0.92)";
        ctx.strokeStyle = "rgba(0, 245, 255, 0.7)";
        ctx.lineWidth = 2;
        const rw = origin.w;
        const rh = origin.h;
        roundRect(ctx, -rw / 2, -rh / 2, rw, rh, 18);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 1;
      }

      const labelAlpha = phase === "enter" ? Math.min(1, Math.max(0, (t - 0.35) * 2.4)) : 1 - t;
      ctx.globalAlpha = labelAlpha;
      ctx.fillStyle = "#00f5ff";
      ctx.font = "600 12px 'IBM Plex Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText("WORMHOLE LINK ESTABLISHED", cx, cy - coreR - 36);
      ctx.fillStyle = "#f0f4fc";
      ctx.font = "700 28px 'Space Grotesk', sans-serif";
      ctx.fillText(LABELS[category], cx, cy + coreR + 48);
      ctx.globalAlpha = 1;

      if (phase === "enter" && t > 0.82) {
        const flash = (t - 0.82) / 0.18;
        ctx.fillStyle = `rgba(224, 255, 255, ${flash * 0.55})`;
        ctx.fillRect(0, 0, w, h);
      }
      if (phase === "exit" && t < 0.18) {
        ctx.fillStyle = `rgba(0, 245, 255, ${((0.18 - t) / 0.18) * 0.35})`;
        ctx.fillRect(0, 0, w, h);
      }

      if (raw >= 1) {
        finish();
        return;
      }
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [phase, category, origin]);

  return (
    <div className="fixed inset-0 z-[70] bg-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
