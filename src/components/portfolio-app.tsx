import { useCallback, useEffect, useState } from "react";
import { DataCanvas } from "@/components/hub/DataCanvas";
import { Navbar } from "@/components/hub/Navbar";
import { Hero } from "@/components/hub/Hero";
import { MicroAbout } from "@/components/hub/MicroAbout";
import { CategoryCards } from "@/components/hub/CategoryCards";
import { ContactStrip } from "@/components/hub/ContactStrip";
import { ProjectsDetailView } from "@/components/details/ProjectsDetailView";
import { CertificationsDetailView } from "@/components/details/CertificationsDetailView";
import { SkillsDetailView } from "@/components/details/SkillsDetailView";
import { WormholeOverlay } from "@/components/wormhole/WormholeOverlay";
import type { CategoryId, WormholeOrigin } from "@/lib/view-types";

type WormholeState = {
  phase: "enter" | "exit";
  category: CategoryId;
  origin: WormholeOrigin | null;
} | null;

function rectToOrigin(rect?: DOMRect | null): WormholeOrigin | null {
  if (!rect) return null;
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, w: rect.width, h: rect.height };
}

function parseHash(): CategoryId | null {
  const hash = window.location.hash.replace("#", "");
  if (hash === "projects" || hash === "certificates" || hash === "skills") return hash;
  return null;
}

export function PortfolioApp() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [wormhole, setWormhole] = useState<WormholeState>(null);

  useEffect(() => {
    const apply = () => {
      const next = parseHash();
      setActiveCategory(next);
      if (!next) setWormhole(null);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const handleOpenCategory = useCallback((category: CategoryId, origin?: DOMRect) => {
    setActiveCategory(category);
    setWormhole({ phase: "enter", category, origin: rectToOrigin(origin) });
    if (window.location.hash.replace("#", "") !== category) {
      window.location.hash = category;
    }
  }, []);

  const handleCloseCategory = useCallback(() => {
    if (!activeCategory) return;
    setWormhole({
      phase: "exit",
      category: activeCategory,
      origin: { x: window.innerWidth / 2, y: window.innerHeight / 2, w: 220, h: 280 },
    });
  }, [activeCategory]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCategory && !wormhole) {
        handleCloseCategory();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeCategory, wormhole, handleCloseCategory]);

  const handleWormholeComplete = useCallback(() => {
    if (wormhole?.phase === "exit") {
      setActiveCategory(null);
      window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    setWormhole(null);
  }, [wormhole]);

  const scrollToCards = () => {
    document.getElementById("category-cards")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-svh bg-bg text-fg">
      <DataCanvas paused={Boolean(activeCategory || wormhole)} />
      <Navbar onOpenCategory={handleOpenCategory} activeCategory={activeCategory} />

      <main className="relative z-10 flex flex-col">
        <Hero onScrollToCards={scrollToCards} />
        <MicroAbout />
        <CategoryCards onSelectCategory={handleOpenCategory} />
        <ContactStrip />
      </main>

      {activeCategory === "projects" && <ProjectsDetailView onBack={handleCloseCategory} />}
      {activeCategory === "certificates" && <CertificationsDetailView onBack={handleCloseCategory} />}
      {activeCategory === "skills" && <SkillsDetailView onBack={handleCloseCategory} />}

      {wormhole && (
        <WormholeOverlay
          phase={wormhole.phase}
          category={wormhole.category}
          origin={wormhole.origin}
          onComplete={handleWormholeComplete}
        />
      )}
    </div>
  );
}
