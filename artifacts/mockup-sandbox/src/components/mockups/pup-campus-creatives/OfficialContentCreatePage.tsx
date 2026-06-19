import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  FilePlus2,
  Image as ImageIcon,
  Paperclip,
  Send,
  Shield,
  Save,
} from "lucide-react";
import { navigateTo } from "../../../app/demo";
import { moderatorRoutePaths } from "../../../app/moderator/moderatorRoutes";
import { ModeratorDesktopSidebar } from "./_shared/ModeratorDesktopSidebar";
import { ModeratorMobileBottomNav } from "./_shared/ModeratorMobileBottomNav";
import "./_group.css";

interface OfficialContentCreatePageProps {
  mode: "desktop" | "mobile";
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

type SubmitKind = "draft" | "publish" | null;

const inputClass =
  "w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon";
const labelClass = "mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text";

export function OfficialContentCreatePage({ mode, ...nav }: OfficialContentCreatePageProps) {
  const [result, setResult] = useState<SubmitKind>(null);

  const complete = (kind: Exclude<SubmitKind, null>) => {
    const label = kind === "draft" ? "Draft official content" : "Published official content";
    window.sessionStorage.setItem(
      "cc-official-content-created",
      JSON.stringify({
        id: "new",
        title: label,
        org: "Pending source",
        orgFull: "New source office",
        rep: "Authorized representative",
        type: "Official Announcement",
        status: kind === "draft" ? "Draft" : "Published",
        statusColor:
          kind === "draft"
            ? "text-secondary-text bg-secondary-surface border-border"
            : "text-status-approved bg-status-approved/10 border-status-approved/20",
        image: "/__mockup/images/event_1.jpg",
        excerpt: "New mock official content created during this prototype session.",
      }),
    );
    setResult(kind);
  };

  const form = (
    <div className={mode === "mobile" ? "space-y-4" : "space-y-6"}>
      <section className="rounded-2xl border border-border bg-card-bg p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-soft-maroon p-3 text-pup-maroon">
            <FilePlus2 size={22} />
          </div>
          <div>
            <h2 className="text-lg font-black text-primary-text">New Official Content</h2>
            <p className="mt-1 text-sm text-secondary-text">
              Blank mock form for university, college, or organization-authored posts.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card-bg p-5 shadow-sm lg:grid-cols-2">
        <Field label="Post title"><input className={inputClass} placeholder="Enter official post title" /></Field>
        <Field label="Content type">
          <select defaultValue="" className={inputClass}>
            <option value="" disabled>Select content type</option>
            <option>Official Announcement</option>
            <option>College Event</option>
            <option>Competition Result</option>
            <option>Recognition Post</option>
          </select>
        </Field>
        <Field label="Source office, college, or organization">
          <select defaultValue="" className={inputClass}>
            <option value="" disabled>Select source</option>
            <option>Office of Student Affairs</option>
            <option>CCIS College Office</option>
            <option>College of Arts and Letters</option>
            <option>Student Council</option>
          </select>
        </Field>
        <Field label="Authorized representative">
          <input className={inputClass} placeholder="Name of authorized representative" />
        </Field>
        <Field label="Target audience">
          <select defaultValue="" className={inputClass}>
            <option value="" disabled>Select audience</option>
            <option>All PUP Students</option>
            <option>College-specific</option>
            <option>Faculty and staff</option>
            <option>Public campus audience</option>
          </select>
        </Field>
        <Field label="Related event optional">
          <select defaultValue="" className={inputClass}>
            <option value="">No related event</option>
            <option>PUP Likha 2026</option>
            <option>Foundation Week</option>
            <option>CCIS Creatives Showcase</option>
          </select>
        </Field>
        <Field label="Publish date"><input type="date" className={inputClass} /></Field>
        <Field label="Expiration date"><input type="date" className={inputClass} /></Field>
        <Field label="Official label">
          <select defaultValue="" className={inputClass}>
            <option value="" disabled>Select label</option>
            <option>Official PUP Announcement</option>
            <option>Official College Post</option>
            <option>Verified Organization Post</option>
          </select>
        </Field>
        <Field label="Status">
          <select defaultValue="Draft" className={inputClass}>
            <option>Draft</option>
            <option>For Review</option>
            <option>Scheduled</option>
            <option>Published</option>
          </select>
        </Field>
      </section>

      <section className="rounded-2xl border border-border bg-card-bg p-5 shadow-sm space-y-4">
        <Field label="Short description">
          <textarea rows={3} className={inputClass} placeholder="Short excerpt for cards and previews" />
        </Field>
        <Field label="Full content or announcement">
          <textarea rows={mode === "mobile" ? 5 : 7} className={inputClass} placeholder="Write the full announcement content" />
        </Field>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <MockUpload icon={<ImageIcon size={24} />} title="Cover image or media" detail="Choose from local demo image placeholders" />
        <MockUpload icon={<Paperclip size={24} />} title="Additional assets" detail="Attach mock supporting graphics or PDFs" />
      </section>

      <section className="rounded-2xl border border-border bg-card-bg p-4 shadow-sm">
        <div className={mode === "mobile" ? "space-y-2" : "flex items-center justify-end gap-3"}>
          <button onClick={() => navigateTo(moderatorRoutePaths.officialContent)} className="w-full rounded-xl border border-border px-5 py-3 text-sm font-black text-secondary-text sm:w-auto">
            Cancel
          </button>
          <button onClick={() => complete("draft")} className="w-full rounded-xl border border-pup-maroon px-5 py-3 text-sm font-black text-pup-maroon sm:w-auto inline-flex items-center justify-center gap-2">
            <Save size={16} /> Save as Draft
          </button>
          <button onClick={() => complete("publish")} className="w-full rounded-xl bg-pup-maroon px-5 py-3 text-sm font-black text-white sm:w-auto inline-flex items-center justify-center gap-2">
            <Send size={16} /> Submit for Review
          </button>
        </div>
      </section>
    </div>
  );

  if (mode === "mobile") {
    return (
      <div className="mobile-app-screen w-[390px] h-[844px] bg-main-bg font-inter overflow-hidden relative flex flex-col">
        <header className="shrink-0 bg-dark-surface px-4 py-4 text-white">
          <button onClick={() => navigateTo(moderatorRoutePaths.officialContent)} className="mb-3 flex items-center gap-2 text-xs font-bold text-pup-gold">
            <ArrowLeft size={16} /> Official Content
          </button>
          <h1 className="text-xl font-black">Add Official Content</h1>
          <p className="text-xs text-white/60">Create a mock institutional post</p>
        </header>
        <main className="flex-1 min-h-0 overflow-y-auto p-4 pb-[92px]">{form}</main>
        <ModeratorMobileBottomNav active="More" {...nav} />
        <ResultSheet result={result} onClose={() => navigateTo(moderatorRoutePaths.officialContent)} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar {...nav} />
      <main className="flex-1 overflow-y-auto p-8">
        <button onClick={() => navigateTo(moderatorRoutePaths.officialContent)} className="mb-5 inline-flex items-center gap-2 text-sm font-black text-pup-maroon">
          <ArrowLeft size={18} /> Back to Official Content
        </button>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-primary-text">Add Official Content</h1>
            <p className="mt-1 text-sm text-secondary-text">Mock-only creation flow for verified campus announcements.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-pup-gold px-3 py-1 text-xs font-black uppercase text-pup-maroon">
            <Shield size={14} /> Official
          </span>
        </div>
        {form}
      </main>
      <ResultSheet result={result} onClose={() => navigateTo(moderatorRoutePaths.officialContent)} />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block min-w-0">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

function MockUpload({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-pup-maroon/30 bg-soft-maroon p-5 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-pup-maroon">{icon}</div>
      <h3 className="mt-3 text-sm font-black text-pup-maroon">{title}</h3>
      <p className="mt-1 text-xs text-secondary-text">{detail}</p>
    </div>
  );
}

function ResultSheet({ result, onClose }: { result: SubmitKind; onClose: () => void }) {
  if (!result) return null;
  return (
    <div className="fixed inset-0 z-[160] flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-6">
      <div className="w-full max-w-md rounded-t-3xl bg-card-bg p-6 shadow-2xl sm:rounded-3xl">
        <CheckCircle2 className="text-status-approved" size={34} />
        <h2 className="mt-3 text-xl font-black">{result === "draft" ? "Draft saved" : "Submitted for review"}</h2>
        <p className="mt-2 text-sm text-secondary-text">
          This mock official content item is represented in the list for the current browser session.
        </p>
        <button onClick={onClose} className="mt-5 w-full rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">
          Return to Official Content
        </button>
      </div>
    </div>
  );
}
