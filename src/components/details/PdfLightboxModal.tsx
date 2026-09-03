import { Award, Download, ExternalLink, ShieldCheck, X } from "lucide-react";
import { type Certification, certificateUrl } from "@/data/portfolio";

interface PdfLightboxModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export function PdfLightboxModal({ cert, onClose }: PdfLightboxModalProps) {
  if (!cert) return null;
  const pdfUrl = certificateUrl(cert.file);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 p-3 backdrop-blur-xl sm:p-6">
      <div className="relative flex h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg border border-teal-400/30 bg-teal-500/20 text-teal-300">
              <Award className="size-4" />
            </div>
            <div>
              <h3 className="max-w-md truncate text-sm font-semibold text-fg sm:text-base">{cert.name}</h3>
              <div className="flex items-center gap-2 font-mono text-xs text-muted">
                <span className="text-teal-400">{cert.issuer}</span>
                <span>•</span>
                <span>{cert.issueDate}</span>
                <span>•</span>
                <span>{cert.category}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download={cert.file}
              className="hidden min-h-11 items-center gap-1.5 rounded-xl border border-line bg-fg/5 px-3 py-1.5 font-mono text-xs text-soft sm:inline-flex"
            >
              <Download className="size-3.5" />
              Download
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-teal-400/30 bg-teal-500/20 px-3 py-1.5 font-mono text-xs text-teal-300"
            >
              <ExternalLink className="size-3.5" />
              <span className="hidden sm:inline">Fullscreen</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 flex size-11 items-center justify-center rounded-xl bg-fg/5 text-muted hover:text-fg"
              aria-label="Close certificate"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 bg-bg/60">
          <iframe src={pdfUrl} title={cert.name} className="size-full border-0" loading="lazy" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-5 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <ShieldCheck className="size-3.5 text-teal-400" />
            <span className="font-mono text-xs text-muted">Verified competencies:</span>
            {cert.skills.map((skill) => (
              <span key={skill} className="rounded border border-line bg-fg/5 px-2 py-0.5 font-mono text-2xs text-soft">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
