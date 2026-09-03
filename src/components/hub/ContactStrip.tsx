import { useState, type FormEvent } from "react";
import { ArrowUp, Check, Copy, Github, Linkedin, Mail, Send, X } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactStrip() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormStatus("success");
  };

  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-surface/80 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/15 text-cyan-300">
            <Mail className="size-4" />
          </div>
          <div>
            <div className="font-mono text-2xs uppercase tracking-wider text-muted">Direct channel</div>
            <button
              type="button"
              onClick={copyEmail}
              className="flex min-h-11 items-center gap-2 font-mono text-xs font-medium text-soft hover:text-cyan-300 sm:text-sm"
              title="Copy email address"
            >
              <span>{profile.email}</span>
              {copied ? (
                <span className="flex items-center gap-1 font-mono text-2xs text-teal-400">
                  <Check className="size-3" /> Copied
                </span>
              ) : (
                <Copy className="size-3 text-muted" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex size-11 items-center justify-center rounded-xl border border-line bg-fg/5 text-soft hover:border-cyan-400/40 hover:text-fg"
            aria-label="GitHub Profile"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex size-11 items-center justify-center rounded-xl border border-line bg-fg/5 text-soft hover:border-sky-400/40 hover:text-fg"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => {
              setFormStatus("idle");
              setModalOpen(true);
            }}
            className="flex min-h-11 items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/25"
          >
            <Send className="size-3.5" />
            Send Message
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 font-mono text-xs text-soft">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} RITIK KUMAR</span>
          <span className="text-muted">/</span>
          <span>DATA SYSTEMS PORTFOLIO</span>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex min-h-11 items-center gap-1.5 text-soft hover:text-cyan-400"
        >
          Back to top
          <ArrowUp className="size-3.5" />
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-line bg-surface p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-lg bg-fg/5 text-muted hover:text-fg"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>
            <div className="mb-1 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
              <Mail className="size-3.5" />
              Direct Inquiry
            </div>
            <h3 className="mb-4 text-xl font-bold text-fg">Get in Touch with Ritik</h3>
            {formStatus === "success" ? (
              <div className="space-y-3 p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                  <Check className="size-6" />
                </div>
                <h4 className="text-lg font-semibold text-fg">Message ready</h4>
                <p className="text-xs text-muted">Your mail client should open with the inquiry. Close this window when done.</p>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="mt-4 rounded-xl bg-fg/10 px-4 py-2 font-mono text-xs text-fg"
                >
                  Close window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <Field name="name" label="Your Name" placeholder="Recruiter or Hiring Manager" required />
                <Field name="email" type="email" label="Email Address" placeholder="name@company.com" required />
                <div>
                  <label className="mb-1 block font-mono text-xs text-muted">Role / Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="We have an opening for a Data Engineer / dbt / SQL Server specialist..."
                    className="w-full rounded-xl border border-line bg-fg/5 px-3 py-2 text-xs text-fg placeholder:text-muted focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 py-2.5 text-xs font-semibold text-bg"
                >
                  Compose inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block font-mono text-xs text-muted">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-fg/5 px-3 py-2 text-xs text-fg placeholder:text-muted focus:border-cyan-400 focus:outline-none"
      />
    </div>
  );
}
