import { useMemo, useState } from "react";
import { Award, ExternalLink, FileText, Search } from "lucide-react";
import { certifications, type Certification } from "@/data/portfolio";
import { OverlayShell } from "./OverlayShell";
import { PdfLightboxModal } from "./PdfLightboxModal";
import { cn } from "@/lib/utils";

interface CertificationsDetailViewProps {
  onBack: () => void;
}

const categories = ["All", "dbt", "SQL", "Python", "ETL", "Data Engineering", "Docker", "Spark", "Linux"];

export function CertificationsDetailView({ onBack }: CertificationsDetailViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const filteredCerts = useMemo(() => {
    return certifications.filter((c) => {
      const matchesCategory =
        selectedCategory === "All" ||
        c.category.toLowerCase() === selectedCategory.toLowerCase() ||
        c.skills.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase()));
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        c.name.toLowerCase().includes(query) ||
        c.issuer.toLowerCase().includes(query) ||
        c.skills.some((s) => s.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <OverlayShell
      title="Credentials Registry"
      countLabel={`(${filteredCerts.length})`}
      accent="teal"
      icon={<Award className="size-4 text-teal-400" />}
      onBack={onBack}
    >
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-teal-400">
            <span className="size-1.5 rounded-full bg-teal-400" />
            Auditable Qualifications
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">32 Verified Certifications</h1>
          <p className="max-w-2xl text-sm text-muted">
            Wheel or trackpad to scroll this registry. Click any certificate to inspect the verified PDF.
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
                  "min-h-11 rounded-xl border px-3 py-1.5 font-mono text-xs transition-colors",
                  selectedCategory === cat
                    ? "border-teal-400/50 bg-teal-500/20 text-teal-300"
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
              placeholder="Search credentials..."
              className="w-full rounded-xl border border-line bg-fg/5 py-2 pl-9 pr-4 font-mono text-xs text-fg placeholder:text-muted focus:border-teal-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert) => (
            <button
              key={cert.name}
              type="button"
              onClick={() => setActiveCert(cert)}
              className="flex flex-col justify-between rounded-2xl border border-line bg-surface/80 p-5 text-left shadow-xl transition-transform hover:-translate-y-1 hover:border-teal-400/40"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-teal-400/20 bg-teal-500/10 px-2.5 py-0.5 font-mono text-2xs text-teal-300">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-2xs text-muted">{cert.issueDate}</span>
                </div>
                <h3 className="line-clamp-2 text-base font-semibold text-fg">{cert.name}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-line bg-fg/5 px-2 py-0.5 font-mono text-2xs text-soft">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-teal-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <FileText className="size-3.5" />
                  View PDF Certificate
                </span>
                <ExternalLink className="size-3.5 opacity-60" />
              </div>
            </button>
          ))}
        </div>
      </main>
      <PdfLightboxModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </OverlayShell>
  );
}
