import { useState, type ChangeEvent, type ReactNode } from "react";
import {
  ArrowLeft,
  AlertTriangle,
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
type OfficialContentForm = {
  title: string;
  type: string;
  source: string;
  representative: string;
  audience: string;
  relatedEvent: string;
  publishDate: string;
  expirationDate: string;
  label: string;
  status: string;
  shortDescription: string;
  fullContent: string;
};

const inputClass =
  "w-full min-h-11 min-w-0 rounded-xl border border-border bg-secondary-surface px-4 py-3 text-base outline-none focus:border-pup-maroon";
const labelClass = "mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text";

const emptyOfficialContentForm: OfficialContentForm = {
  title: "",
  type: "",
  source: "",
  representative: "",
  audience: "",
  relatedEvent: "",
  publishDate: "",
  expirationDate: "",
  label: "",
  status: "Draft",
  shortDescription: "",
  fullContent: "",
};

export function OfficialContentCreatePage({ mode, ...nav }: OfficialContentCreatePageProps) {
  const [result, setResult] = useState<SubmitKind>(null);
  const [formState, setFormState] = useState<OfficialContentForm>(emptyOfficialContentForm);
  const [errors, setErrors] = useState<Partial<Record<keyof OfficialContentForm, string>>>({});
  const [processing, setProcessing] = useState<SubmitKind>(null);
  const [confirmCancel, setConfirmCancel] = useState(false);
  const dirty = JSON.stringify(formState) !== JSON.stringify(emptyOfficialContentForm);

  const complete = (kind: Exclude<SubmitKind, null>) => {
    if (!validate(kind)) return;
    setProcessing(kind);
    window.setTimeout(() => {
      const label = formState.title || (kind === "draft" ? "Draft official content" : "Published official content");
      window.sessionStorage.setItem(
        "cc-official-content-created",
        JSON.stringify({
          id: "new",
          title: label,
          org: formState.source || "Pending source",
          orgFull: formState.source || "New source office",
          rep: formState.representative || "Authorized representative",
          type: formState.type || "Official Announcement",
          status: kind === "draft" ? "Draft" : "Published",
          statusColor:
            kind === "draft"
              ? "text-secondary-text bg-secondary-surface border-border"
              : "text-status-approved bg-status-approved/10 border-status-approved/20",
          image: "/__mockup/images/event_1.jpg",
          excerpt: formState.shortDescription || "New mock official content created during this prototype session.",
        }),
      );
      setProcessing(null);
      setResult(kind);
    }, 550);
  };

  const updateField = (field: keyof OfficialContentForm, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = (kind: Exclude<SubmitKind, null>) => {
    const nextErrors: Partial<Record<keyof OfficialContentForm, string>> = {};
    if (!formState.title.trim()) nextErrors.title = "Title is required.";
    if (!formState.type) nextErrors.type = "Select a content type.";
    if (!formState.source) nextErrors.source = "Select a source office.";
    if (!formState.representative.trim()) nextErrors.representative = "Representative is required.";
    if (kind === "publish") {
      if (!formState.audience) nextErrors.audience = "Select an audience.";
      if (!formState.label) nextErrors.label = "Select an official label.";
      if (!formState.shortDescription.trim()) nextErrors.shortDescription = "Short description is required.";
      if (!formState.fullContent.trim()) nextErrors.fullContent = "Full content is required.";
    }
    if (formState.publishDate && formState.expirationDate && formState.expirationDate < formState.publishDate) {
      nextErrors.expirationDate = "Expiration must be after publication.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const requestCancel = () => {
    if (dirty) {
      setConfirmCancel(true);
      return;
    }
    navigateTo(moderatorRoutePaths.officialContent);
  };

  const leavePage = () => navigateTo(moderatorRoutePaths.officialContent);

  const fieldProps = (field: keyof OfficialContentForm) => ({
    value: formState[field],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => updateField(field, event.target.value),
    "aria-invalid": Boolean(errors[field]),
  });

  const controlClass = (field: keyof OfficialContentForm) =>
    `${inputClass} ${errors[field] ? "border-status-rejected ring-2 ring-status-rejected/20" : ""}`;

  const actions = (
    <>
      <button onClick={requestCancel} disabled={Boolean(processing)} className="min-h-11 w-full rounded-xl border border-border px-5 py-3 text-sm font-black text-secondary-text sm:w-auto">
        Cancel
      </button>
      <button onClick={() => complete("draft")} disabled={Boolean(processing)} className="min-h-11 w-full rounded-xl border border-pup-maroon px-5 py-3 text-sm font-black text-pup-maroon sm:w-auto inline-flex items-center justify-center gap-2">
        <Save size={16} /> {processing === "draft" ? "Saving..." : "Save Draft"}
      </button>
      <button onClick={() => complete("publish")} disabled={Boolean(processing)} className="cc-primary-action min-h-11 w-full rounded-xl bg-pup-maroon px-5 py-3 text-sm font-black text-white sm:w-auto inline-flex items-center justify-center gap-2">
        <Send size={16} /> {processing === "publish" ? "Submitting..." : "Submit for Review"}
      </button>
    </>
  );

  const selectOptions = {
    type: ["Official Announcement", "College Event", "Competition Result", "Recognition Post"],
    source: ["Office of Student Affairs", "CCIS College Office", "College of Arts and Letters", "Student Council"],
    audience: ["All PUP Students", "College-specific", "Faculty and staff", "Public campus audience"],
    relatedEvent: ["PUP Likha 2026", "Foundation Week", "CCIS Creatives Showcase"],
    label: ["Official PUP Announcement", "Official College Post", "Verified Organization Post"],
    status: ["Draft", "For Review", "Scheduled", "Published"],
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

      <FormSection title="Basic information" mobile={mode === "mobile"}>
        <Field label="Post title" error={errors.title}><input className={controlClass("title")} placeholder="Enter official post title" {...fieldProps("title")} /></Field>
        <SelectField label="Content type" field="type" options={selectOptions.type} value={formState.type} error={errors.type} updateField={updateField} controlClass={controlClass("type")} />
        <SelectField label="Source office, college, or organization" field="source" options={selectOptions.source} value={formState.source} error={errors.source} updateField={updateField} controlClass={controlClass("source")} />
        <Field label="Authorized representative" error={errors.representative}>
          <input className={controlClass("representative")} placeholder="Name of authorized representative" {...fieldProps("representative")} />
        </Field>
      </FormSection>

      <FormSection title="Content" mobile={mode === "mobile"}>
        <Field label="Short description" error={errors.shortDescription}>
          <textarea rows={3} className={controlClass("shortDescription")} placeholder="Short excerpt for cards and previews" {...fieldProps("shortDescription")} />
        </Field>
        <Field label="Full content or announcement" error={errors.fullContent}>
          <textarea rows={mode === "mobile" ? 5 : 7} className={controlClass("fullContent")} placeholder="Write the full announcement content" {...fieldProps("fullContent")} />
        </Field>
        <SelectField label="Target audience" field="audience" options={selectOptions.audience} value={formState.audience} error={errors.audience} updateField={updateField} controlClass={controlClass("audience")} />
        <SelectField label="Official label" field="label" options={selectOptions.label} value={formState.label} error={errors.label} updateField={updateField} controlClass={controlClass("label")} />
      </FormSection>

      <FormSection title="Schedule" mobile={mode === "mobile"}>
        <Field label="Publish date"><input type="date" className={controlClass("publishDate")} {...fieldProps("publishDate")} /></Field>
        <Field label="Expiration date" error={errors.expirationDate}><input type="date" className={controlClass("expirationDate")} {...fieldProps("expirationDate")} /></Field>
        <SelectField label="Status" field="status" options={selectOptions.status} value={formState.status} updateField={updateField} controlClass={controlClass("status")} />
        <SelectField label="Related event optional" field="relatedEvent" options={selectOptions.relatedEvent} value={formState.relatedEvent} updateField={updateField} controlClass={controlClass("relatedEvent")} optional />
      </FormSection>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <MockUpload icon={<ImageIcon size={24} />} title="Cover image or media" detail="Choose from local demo image placeholders" />
        <MockUpload icon={<Paperclip size={24} />} title="Additional assets" detail="Attach mock supporting graphics or PDFs" />
      </section>

      {mode !== "mobile" && (
        <section className="rounded-2xl border border-border bg-card-bg p-4 shadow-sm">
          <div className="flex items-center justify-end gap-3">{actions}</div>
        </section>
      )}
    </div>
  );

  if (mode === "mobile") {
    return (
      <div className="mobile-app-screen w-[390px] h-[844px] bg-main-bg font-inter overflow-hidden relative flex flex-col">
        <header className="shrink-0 bg-dark-surface px-4 py-4 text-white">
          <button onClick={requestCancel} className="mb-3 flex min-h-11 items-center gap-2 text-xs font-bold text-pup-gold">
            <ArrowLeft size={16} /> Official Content
          </button>
          <h1 className="text-xl font-black">Add Official Content</h1>
          <p className="text-xs text-white/60">Create a mock institutional post</p>
        </header>
        <main className="flex-1 min-h-0 overflow-y-auto p-4 pb-[168px]">{form}</main>
        <section className="cc-mobile-above-nav absolute left-0 right-0 z-40 border-t border-border bg-card-bg p-3 shadow-[0_-6px_18px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-1 gap-2">{actions}</div>
        </section>
        <ModeratorMobileBottomNav active="More" {...nav} />
        <ResultSheet result={result} onClose={leavePage} mobile />
        {confirmCancel && <CancelSheet onStay={() => setConfirmCancel(false)} onLeave={leavePage} mobile />}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar {...nav} />
      <main className="flex-1 overflow-y-auto p-8">
        <Breadcrumb items={[["Moderator", moderatorRoutePaths.dashboard], ["Official Content", moderatorRoutePaths.officialContent]]} current="Add Official Content" />
        <button onClick={requestCancel} className="mb-5 inline-flex items-center gap-2 text-sm font-black text-pup-maroon">
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
      <ResultSheet result={result} onClose={leavePage} />
      {confirmCancel && <CancelSheet onStay={() => setConfirmCancel(false)} onLeave={leavePage} />}
    </div>
  );
}

function Breadcrumb({ items, current }: { items: Array<[string, string]>; current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-bold text-secondary-text">
      {items.map(([label, path]) => (
        <span key={path} className="flex items-center gap-2">
          <button type="button" onClick={() => navigateTo(path)} className="rounded-md text-pup-maroon hover:underline focus-visible:outline-none">
            {label}
          </button>
          <span aria-hidden="true">/</span>
        </span>
      ))}
      <span aria-current="page" className="text-primary-text">{current}</span>
    </nav>
  );
}

function FormSection({ title, mobile, children }: { title: string; mobile: boolean; children: ReactNode }) {
  return (
    <section className={`rounded-2xl border border-border bg-card-bg p-5 shadow-sm ${mobile ? "space-y-4" : "grid grid-cols-1 gap-4 lg:grid-cols-2"}`}>
      <div className={mobile ? "" : "lg:col-span-2"}>
        <h2 className="text-base font-black text-primary-text">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block min-w-0">
      <span className={labelClass}>{label}</span>
      {children}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-xs font-bold text-status-rejected">
          <AlertTriangle size={13} /> {error}
        </span>
      )}
    </label>
  );
}

function SelectField({
  label,
  field,
  options,
  value,
  error,
  updateField,
  controlClass,
  optional,
}: {
  label: string;
  field: keyof OfficialContentForm;
  options: string[];
  value: string;
  error?: string;
  updateField: (field: keyof OfficialContentForm, value: string) => void;
  controlClass: string;
  optional?: boolean;
}) {
  return (
    <Field label={label} error={error}>
      <select value={value} onChange={(event) => updateField(field, event.target.value)} className={controlClass} aria-invalid={Boolean(error)}>
        <option value="">{optional ? "None selected" : "Select"}</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </Field>
  );
}

function MockUpload({ icon, title, detail }: { icon: ReactNode; title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-pup-maroon/30 bg-soft-maroon p-5 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-pup-maroon">{icon}</div>
      <h3 className="mt-3 text-sm font-black text-pup-maroon">{title}</h3>
      <p className="mt-1 text-xs text-secondary-text">{detail}</p>
    </div>
  );
}

function ResultSheet({ result, onClose, mobile = false }: { result: SubmitKind; onClose: () => void; mobile?: boolean }) {
  if (!result) return null;
  return (
    <div className={`${mobile ? "absolute" : "fixed"} inset-0 z-[160] flex items-end justify-center bg-black/45 p-0 ${mobile ? "" : "sm:items-center sm:p-6"}`}>
      <div className={`w-full max-w-md bg-card-bg p-6 shadow-2xl ${mobile ? "cc-mobile-above-nav absolute left-0 right-0 rounded-t-3xl" : "rounded-t-3xl sm:rounded-3xl"}`}>
        <CheckCircle2 className="text-status-approved" size={34} />
        <h2 className="mt-3 text-xl font-black">{result === "draft" ? "Draft saved" : "Submitted for review"}</h2>
        <p className="mt-2 text-sm text-secondary-text">
          This mock official content item is represented in the list for the current browser session.
        </p>
        <button onClick={onClose} className="cc-primary-action mt-5 min-h-11 w-full rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">
          Return to Official Content
        </button>
      </div>
    </div>
  );
}

function CancelSheet({ onStay, onLeave, mobile = false }: { onStay: () => void; onLeave: () => void; mobile?: boolean }) {
  return (
    <div className={`${mobile ? "absolute" : "fixed"} inset-0 z-[170] flex ${mobile ? "items-end" : "items-center"} justify-center bg-black/45 p-0 ${mobile ? "" : "p-6"}`}>
      <div className="absolute inset-0" onClick={onStay} />
      <div className={`${mobile ? "cc-mobile-above-nav absolute left-0 right-0 rounded-t-3xl" : "relative w-full max-w-md rounded-3xl"} bg-card-bg p-6 shadow-2xl`}>
        <AlertTriangle className="text-status-pending" size={32} />
        <h2 className="mt-3 text-lg font-black text-primary-text">Discard official content?</h2>
        <p className="mt-2 text-sm leading-relaxed text-secondary-text">Unsaved changes in this mock post will be lost.</p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button type="button" onClick={onStay} className="cc-control min-h-11 rounded-xl border border-border py-3 text-sm font-black">Stay</button>
          <button type="button" onClick={onLeave} className="cc-danger-action min-h-11 rounded-xl bg-status-rejected py-3 text-sm font-black text-white">Discard</button>
        </div>
      </div>
    </div>
  );
}
