import React, { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Copy,
  FileText,
  MoreVertical,
  RefreshCw,
  Share2,
} from "lucide-react";
import { MobileHeader } from "./_shared/MobileHeader";
import { MobileBottomNav } from "./_shared/MobileBottomNav";
import "./_group.css";

interface MobileSubmissionProps {
  onBack?: () => void;
  onRevise?: () => void;
  onDone?: () => void;
  onMySubmissions?: () => void;
  onSubmissionDetail?: () => void;
}

function DetailShell({
  children,
  onBack,
  title,
  subtitle,
}: MobileSubmissionProps & {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-x-hidden overflow-y-auto pb-[92px]">
      <MobileHeader />
      <header className="bg-card-bg border-b border-border px-4 py-3">
        <button onClick={onBack} className="mb-3 flex items-center gap-2 text-xs font-black text-pup-maroon">
          <ArrowLeft size={16} /> My Submissions
        </button>
        <h1 className="text-xl font-black leading-tight break-words">{title}</h1>
        <p className="mt-1 text-xs text-secondary-text break-words">{subtitle}</p>
      </header>
      <main className="space-y-4 p-4">{children}</main>
      <MobileBottomNav />
    </div>
  );
}

function WorkPreview() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="rounded-2xl border border-border bg-card-bg overflow-hidden">
      <div className="aspect-video bg-secondary-surface">
        <img src="/__mockup/images/thumbnail_3.jpg" alt="Digital Sinta preview" className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-xl font-black leading-tight break-words">Digital Sinta</h2>
            <div className="mt-2 flex items-center gap-2">
              <code className="min-w-0 rounded-lg bg-secondary-surface px-2 py-1 text-[11px] text-secondary-text break-all">
                CC-WORK-2026-0148
              </code>
              <button
                type="button"
                onClick={() => {
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1200);
                }}
                className="shrink-0 rounded-lg border border-border p-2"
                aria-label="Copy reference"
              >
                {copied ? <CheckCircle2 size={16} className="text-status-approved" /> : <Copy size={16} />}
              </button>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <button className="rounded-lg border border-border p-2" aria-label="Share"><Share2 size={18} /></button>
            <button className="rounded-lg border border-border p-2" aria-label="More actions"><MoreVertical size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoSections() {
  return (
    <>
      <section className="rounded-2xl border border-border bg-card-bg p-4">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-secondary-text">
          <FileText size={18} className="text-pup-maroon" /> Description
        </h2>
        <p className="text-sm leading-relaxed text-secondary-text break-words">
          A multimedia poster series inspired by student life, commuter culture, and PUP campus identity.
        </p>
        <h3 className="mt-4 text-xs font-black uppercase tracking-wide text-muted-text">Artist Statement</h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary-text break-words">
          Digital Sinta is a visual exploration of the daily rhythmic chaos within and around the PUP Sta. Mesa campus. It celebrates student resilience, shared commutes, and creative identity.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-3">
        {[
          ["Classification", "Artwork • Digital Art • Campus life"],
          ["Ownership", "Original work, collaborator permissions confirmed"],
          ["Visibility", "Public portfolio after approval, comments enabled"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-border bg-card-bg p-4">
            <p className="text-[11px] font-black uppercase tracking-wide text-muted-text">{label}</p>
            <p className="mt-1 text-sm font-bold leading-relaxed text-primary-text break-words">{value}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export function SubmissionDetailPageMobile({ onBack }: MobileSubmissionProps = {}) {
  const [showWithdraw, setShowWithdraw] = useState(false);
  return (
    <DetailShell onBack={onBack} title="Submission Detail" subtitle="Review status and submission information">
      <WorkPreview />
      <section className="rounded-2xl border border-status-pending/20 bg-status-pending/10 p-4 text-status-pending">
        <div className="flex items-center gap-3">
          <Clock size={22} className="shrink-0" />
          <div>
            <p className="font-black">Pending Review</p>
            <p className="text-xs opacity-80">Submitted June 14, 2026</p>
          </div>
        </div>
      </section>
      <InfoSections />
      <section className="rounded-2xl border border-border bg-card-bg p-3 space-y-2">
        <button onClick={() => setShowWithdraw(true)} className="w-full rounded-xl border border-status-rejected py-3 text-sm font-black text-status-rejected">
          Withdraw Submission
        </button>
        <button className="w-full rounded-xl border border-border py-3 text-sm font-black">Copy Reference</button>
      </section>
      {showWithdraw && (
        <div className="fixed inset-0 z-[80] flex items-end bg-black/40">
          <div className="w-[390px] rounded-t-3xl bg-card-bg p-6">
            <AlertCircle className="text-status-rejected" size={32} />
            <h2 className="mt-3 text-xl font-black">Withdraw submission?</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary-text">This mock action returns Digital Sinta to drafts.</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button onClick={() => setShowWithdraw(false)} className="rounded-xl border border-border py-3 font-bold">Cancel</button>
              <button onClick={() => setShowWithdraw(false)} className="rounded-xl bg-status-rejected py-3 font-bold text-white">Withdraw</button>
            </div>
          </div>
        </div>
      )}
    </DetailShell>
  );
}

export function NeedsRevisionPageMobile({ onBack, onRevise }: MobileSubmissionProps = {}) {
  return (
    <DetailShell onBack={onBack} title="Needs Revision" subtitle="Moderator requested updates before approval">
      <WorkPreview />
      <section className="rounded-2xl border border-status-needs-revision/20 bg-status-needs-revision/10 p-4">
        <div className="flex gap-3">
          <RefreshCw size={22} className="shrink-0 text-status-needs-revision" />
          <div className="min-w-0">
            <p className="font-black text-status-needs-revision">Revision requested</p>
            <p className="mt-1 text-sm leading-relaxed text-secondary-text break-words">
              Add complete alt text, clarify source references, and expand the artist statement.
            </p>
          </div>
        </div>
      </section>
      <InfoSections />
      <button onClick={onRevise} className="w-full rounded-2xl bg-pup-maroon py-4 text-sm font-black text-white">Revise Submission</button>
    </DetailShell>
  );
}

export function ReviseSubmissionPageMobile({ onBack, onDone }: MobileSubmissionProps = {}) {
  return (
    <DetailShell onBack={onBack} title="Revise Submission" subtitle="Update the requested fields">
      <section className="rounded-2xl border border-border bg-card-bg p-4 space-y-4">
        {["Work title", "Short description", "Artist statement", "Alt text", "Ownership notes"].map((field) => (
          <label key={field} className="block min-w-0">
            <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">{field}</span>
            {field.includes("description") || field.includes("statement") || field.includes("notes") ? (
              <textarea rows={4} className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface p-3 text-sm outline-none focus:border-pup-maroon" defaultValue={field === "Artist statement" ? "Digital Sinta explores campus commuter culture through bold visual systems." : ""} />
            ) : (
              <input className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface p-3 text-sm outline-none focus:border-pup-maroon" defaultValue={field === "Work title" ? "Digital Sinta" : ""} />
            )}
          </label>
        ))}
      </section>
      <div className="grid grid-cols-1 gap-2 rounded-2xl border border-border bg-card-bg p-3">
        <button className="rounded-xl border border-border py-3 text-sm font-black">Save Draft</button>
        <button onClick={onDone} className="rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">Resubmit for Review</button>
      </div>
    </DetailShell>
  );
}

export function SubmissionConfirmationPageMobile({ onMySubmissions, onSubmissionDetail }: MobileSubmissionProps = {}) {
  return (
    <DetailShell title="Submitted" subtitle="Your work is now in the moderation queue">
      <section className="rounded-3xl border border-status-approved/20 bg-card-bg p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-status-approved/10 text-status-approved">
          <CheckCircle2 size={34} />
        </div>
        <h2 className="mt-4 text-xl font-black">Digital Sinta was submitted</h2>
        <p className="mt-2 text-sm leading-relaxed text-secondary-text">Reference CC-WORK-2026-0148 is pending moderator review.</p>
      </section>
      <div className="space-y-2">
        <button onClick={onSubmissionDetail} className="w-full rounded-2xl bg-pup-maroon py-4 text-sm font-black text-white">
          View Submission
        </button>
        <button onClick={onMySubmissions} className="w-full rounded-2xl border border-border bg-card-bg py-4 text-sm font-black">
          View My Submissions
        </button>
      </div>
    </DetailShell>
  );
}
