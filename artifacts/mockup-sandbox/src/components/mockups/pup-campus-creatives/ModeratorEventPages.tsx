import React, { useState } from "react";
import {
  Calendar,
  ClipboardList,
  FileText,
  Flag,
  History,
  Image as ImageIcon,
  LayoutDashboard,
  MapPin,
  Plus,
  Save,
  Shield,
  Star,
  Tag,
  Users,
  X,
} from "lucide-react";
import { ModeratorDesktopSidebar } from "./_shared/ModeratorDesktopSidebar";
import "./_group.css";

interface ModeratorEventProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
  onNewEvent?: () => void;
}

function Sidebar({
  active,
  onDashboard,
  onPending,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
  onEvents,
}: ModeratorEventProps & { active: string }) {
  const items = [
    ["Dashboard", LayoutDashboard, onDashboard],
    ["Pending Reviews", ClipboardList, onPending],
    ["Reports", Flag, onReports],
    ["Featured Works", Star, onFeatured],
    ["Official Content", Shield, onOfficialContent],
    ["Events", Calendar, onEvents],
    ["Moderation History", History, onHistory],
  ] as const;

  return (
    <aside className="w-[240px] bg-dark-surface text-white flex flex-col shrink-0 sticky top-0 h-screen">
      <div className="p-6">
        <div className="text-pup-gold font-bold text-xl tracking-tight mb-1">Campus Creatives</div>
        <div className="inline-block px-2 py-0.5 bg-pup-gold text-dark-surface text-[10px] font-bold rounded uppercase tracking-wider">MODERATOR</div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map(([label, Icon, onClick]) => (
          <button
            key={label}
            type="button"
            onClick={onClick}
            className={`w-full flex items-center gap-3 border-l-4 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              active === label
                ? "bg-white/10 border-pup-gold text-white"
                : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

type ModeratorEventItem = {
  id: number;
  title: string;
  status: string;
  organizer: string;
  submissions: string;
  deadline: string;
  startDate: string;
  endDate: string;
  venue: string;
  description: string;
};

type EventFormState = Pick<ModeratorEventItem, "title" | "status" | "organizer" | "deadline" | "startDate" | "endDate" | "venue" | "description">;

const initialModeratorEvents: ModeratorEventItem[] = [
  {
    id: 1,
    title: "PUP Likha 2026",
    status: "Open",
    organizer: "PUP OSA",
    submissions: "89",
    deadline: "2026-06-30",
    startDate: "2026-07-05",
    endDate: "2026-07-12",
    venue: "PUP Main Library Gallery",
    description: "University-wide creative showcase for student visual, digital, and performance works.",
  },
  {
    id: 2,
    title: "Sinta Short Film Festival",
    status: "Draft",
    organizer: "CAL",
    submissions: "34",
    deadline: "2026-07-15",
    startDate: "2026-08-01",
    endDate: "2026-08-03",
    venue: "Claro M. Recto Hall",
    description: "Short film festival for student productions and campus narratives.",
  },
  {
    id: 3,
    title: "Guhit Iskolar Digital Art",
    status: "Closing Soon",
    organizer: "CCIS",
    submissions: "67",
    deadline: "2026-06-25",
    startDate: "2026-06-28",
    endDate: "2026-07-02",
    venue: "Online gallery",
    description: "Digital illustration call for PUP artists exploring identity, learning, and service.",
  },
];

const toEventForm = (event: ModeratorEventItem): EventFormState => ({
  title: event.title,
  status: event.status,
  organizer: event.organizer,
  deadline: event.deadline,
  startDate: event.startDate,
  endDate: event.endDate,
  venue: event.venue,
  description: event.description,
});

export function ModeratorEventsPage(props: ModeratorEventProps = {}) {
  const [events, setEvents] = useState(initialModeratorEvents);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<EventFormState>(toEventForm(initialModeratorEvents[0]));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);

  const selectedEvent = events.find((event) => event.id === editingId) ?? null;
  const dirty = selectedEvent ? JSON.stringify(editForm) !== JSON.stringify(toEventForm(selectedEvent)) : false;

  const openEdit = (event: ModeratorEventItem) => {
    setEditingId(event.id);
    setEditForm(toEventForm(event));
    setErrors({});
    setShowDiscard(false);
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!editForm.title.trim()) nextErrors.title = "Event title is required.";
    if (!editForm.organizer.trim()) nextErrors.organizer = "Organizer is required.";
    if (!editForm.deadline) nextErrors.deadline = "Submission deadline is required.";
    if (!editForm.startDate) nextErrors.startDate = "Start date is required.";
    if (!editForm.endDate) nextErrors.endDate = "End date is required.";
    if (!editForm.venue.trim()) nextErrors.venue = "Venue or online location is required.";
    if (!editForm.description.trim()) nextErrors.description = "Description is required.";
    if (editForm.startDate && editForm.endDate && editForm.endDate < editForm.startDate) {
      nextErrors.endDate = "End date must be after the start date.";
    }
    if (editForm.deadline && editForm.endDate && editForm.deadline > editForm.endDate) {
      nextErrors.deadline = "Deadline must be before the event ends.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const closeEdit = () => {
    setEditingId(null);
    setShowDiscard(false);
    setSaving(false);
  };

  const requestClose = () => {
    if (dirty) {
      setShowDiscard(true);
      return;
    }
    closeEdit();
  };

  const saveEvent = () => {
    if (!selectedEvent || !validate()) return;
    setSaving(true);
    window.setTimeout(() => {
      setEvents((current) => current.map((event) => (event.id === selectedEvent.id ? { ...event, ...editForm } : event)));
      closeEdit();
    }, 350);
  };

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar {...props} />
      <main className="min-w-0 flex-1 overflow-y-auto p-8">
        <header className="mb-8 flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-primary-text">Event Management</h1>
            <p className="mt-2 text-secondary-text">Create and manage mock creative calls for Campus Creatives.</p>
          </div>
          <button onClick={props.onNewEvent} className="inline-flex items-center gap-2 rounded-xl bg-pup-maroon px-5 py-3 text-sm font-bold text-white">
            <Plus size={18} /> Add Event
          </button>
        </header>
        <section className="grid grid-cols-4 gap-4 mb-8">
          {[
            ["Active events", "6"],
            ["Drafts", "3"],
            ["Submissions", "235"],
            ["Closing soon", "2"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-border bg-card-bg p-5 shadow-sm">
              <p className="text-2xl font-black text-pup-maroon">{value}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-secondary-text">{label}</p>
            </div>
          ))}
        </section>
        <section className="space-y-3">
          {events.map((event) => {
            const organizer = event.organizer;
            const deadline = event.deadline;
            return (
            <article key={event.id} className="rounded-xl border border-border bg-card-bg p-5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0">
                <Calendar size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-primary-text truncate">{event.title}</h2>
                <p className="text-sm text-secondary-text">{organizer} • deadline {deadline}</p>
              </div>
              <span className="rounded-full bg-soft-gold px-3 py-1 text-xs font-bold uppercase text-warm-gold">{event.status}</span>
              <div className="w-24 text-right">
                <p className="text-lg font-black">{event.submissions}</p>
                <p className="text-[10px] font-bold uppercase text-muted-text">Submissions</p>
              </div>
              <button
                type="button"
                onClick={() => openEdit(event)}
                className="rounded-lg border border-border px-4 py-2 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-pup-maroon hover:bg-soft-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pup-maroon/30 active:translate-y-0"
              >
                Edit
              </button>
            </article>
            );
          })}
        </section>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
            <div className="w-full max-w-3xl rounded-2xl bg-card-bg shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-border p-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-pup-maroon">Edit event</p>
                  <h2 className="text-2xl font-black text-primary-text">{selectedEvent.title}</h2>
                  <p className="mt-1 text-sm text-secondary-text">Changes stay in this prototype list only.</p>
                </div>
                <button
                  type="button"
                  onClick={requestClose}
                  className="rounded-full border border-border p-2 text-secondary-text transition-all hover:bg-secondary-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pup-maroon/30 active:scale-95"
                  aria-label="Close edit event modal"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="max-h-[62vh] overflow-y-auto p-6">
                <EventEditFields form={editForm} setForm={setEditForm} errors={errors} setErrors={setErrors} />
              </div>
              <div className="flex justify-end gap-3 border-t border-border p-6">
                <button
                  type="button"
                  onClick={requestClose}
                  className="rounded-xl border border-border px-5 py-3 text-sm font-bold text-secondary-text transition-all hover:bg-secondary-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pup-maroon/30 active:scale-[0.98]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveEvent}
                  disabled={saving}
                  className="rounded-xl bg-pup-maroon px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pup-maroon/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}
        {showDiscard && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-6">
            <div className="w-full max-w-md rounded-2xl bg-card-bg p-6 shadow-2xl">
              <h2 className="text-xl font-black text-primary-text">Discard event edits?</h2>
              <p className="mt-2 text-sm text-secondary-text">Unsaved changes to {selectedEvent?.title ?? "this event"} will be lost.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setShowDiscard(false)}
                  className="rounded-xl border border-border py-3 font-bold transition-all hover:bg-secondary-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pup-maroon/30 active:scale-[0.98]"
                >
                  Keep Editing
                </button>
                <button
                  type="button"
                  onClick={closeEdit}
                  className="rounded-xl bg-status-rejected py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-status-rejected/30 active:translate-y-0"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export function ModeratorEventFormPage(props: ModeratorEventProps = {}) {
  const [confirm, setConfirm] = useState<string | null>(null);
  const categories = ["Visual Art", "Digital Art", "Photography", "Music", "Film", "Spoken Word"];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar {...props} />
      <main className="flex-1 overflow-y-auto p-8">
        <button onClick={props.onEvents} className="mb-5 text-sm font-bold text-pup-maroon hover:underline">Back to Events</button>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Add Event</h1>
          <p className="mt-2 text-secondary-text">Mock-only event creation form for moderator demos.</p>
        </header>
        <section className="w-full">
          <div className="grid w-full grid-cols-[minmax(0,2fr)_minmax(340px,1fr)] items-start gap-8">
            <div className="min-w-0 space-y-6">
              <FormCard icon={<FileText size={18} />} title="Basic Information" helper="Start with a clear event identity. Fields are intentionally blank for a new mock event.">
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Event title">
                    <input placeholder="Enter event title" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </Field>
                  <Field label="Event category">
                    <select defaultValue="" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon">
                      <option value="" disabled>Select category</option>
                      <option>Competition</option>
                      <option>Open Call</option>
                      <option>Showcase</option>
                      <option>Workshop</option>
                    </select>
                  </Field>
                  <Field label="Organizer">
                    <input placeholder="Office, college, or organization" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </Field>
                  <Field label="Event status">
                    <select defaultValue="Draft" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon">
                      <option>Draft</option>
                      <option>Open</option>
                      <option>Scheduled</option>
                    </select>
                  </Field>
                  <label className="col-span-2 block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Description</span>
                    <textarea rows={4} placeholder="Describe the event purpose, audience, and creative direction." className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </label>
                </div>
              </FormCard>

              <FormCard icon={<Calendar size={18} />} title="Dates and Location" helper="Use date-style inputs for review and publication planning.">
                <div className="grid grid-cols-3 gap-5">
                  {["Start date", "End date", "Submission deadline"].map((label) => (
                    <Field key={label} label={label}>
                      <input type="date" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                    </Field>
                  ))}
                  <Field label="Venue">
                    <input placeholder="On-campus venue" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </Field>
                  <Field label="Online location">
                    <input placeholder="Online gallery or meeting link" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </Field>
                  <Field label="Contact information">
                    <input placeholder="Email or office contact" className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </Field>
                </div>
              </FormCard>

              <FormCard icon={<Users size={18} />} title="Eligibility and Requirements" helper="Show mock criteria clearly without adding backend validation.">
                <div className="space-y-5">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Eligibility</span>
                    <textarea rows={3} placeholder="Who may join? Include colleges, programs, year level, or team rules." className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </label>
                  <div>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Accepted creative categories</span>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button key={category} type="button" className="rounded-full border border-pup-maroon/20 bg-soft-maroon px-3 py-1.5 text-xs font-bold text-pup-maroon">
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Rules and guidelines</span>
                    <textarea rows={5} placeholder="Add originality, ownership, file, and community guideline requirements." className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
                  </label>
                </div>
              </FormCard>
            </div>

            <aside className="min-w-0 space-y-6">
              <FormCard icon={<ImageIcon size={18} />} title="Cover and Media" helper="Presentation preview only.">
                <div className="rounded-2xl border border-dashed border-pup-maroon/30 bg-soft-maroon p-6 text-center">
                  <ImageIcon className="mx-auto text-pup-maroon" size={34} />
                  <p className="mt-2 text-sm font-bold text-pup-maroon">Add cover image</p>
                  <p className="mt-1 text-xs text-secondary-text">Use a campus, event, or artwork preview.</p>
                </div>
              </FormCard>
              <FormCard icon={<Tag size={18} />} title="Publication Preview" helper="Review how the event will read before publishing.">
                <div className="rounded-2xl border border-border bg-secondary-surface p-4 space-y-3">
                  <span className="inline-flex rounded-full bg-soft-gold px-3 py-1 text-[10px] font-black uppercase text-warm-gold">Draft</span>
                  <h2 className="text-lg font-black text-primary-text">Untitled Event</h2>
                  <p className="text-sm text-secondary-text">Add event details to build the preview card.</p>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-bold uppercase text-secondary-text">
                    <span className="flex items-center gap-1"><Calendar size={12} /> Date unset</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> Venue unset</span>
                  </div>
                </div>
              </FormCard>
              <section className="rounded-2xl border border-border bg-card-bg p-6 shadow-sm">
                <div className="mb-4">
                  <h2 className="font-black text-primary-text">Event Actions</h2>
                  <p className="text-sm text-secondary-text">Save the event draft or publish it for the mock demo.</p>
                </div>
                <div className="space-y-3">
                  <button onClick={() => setConfirm("publish")} className="cc-primary-action w-full rounded-xl bg-pup-maroon px-5 py-3 text-sm font-bold text-white">Publish Event</button>
                  <button onClick={() => setConfirm("draft")} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold text-primary-text">
                    <Save size={18} /> Save as Draft
                  </button>
                  <button onClick={props.onEvents} className="w-full rounded-xl px-5 py-3 text-sm font-bold text-secondary-text hover:bg-secondary-surface">Cancel</button>
                </div>
              </section>
            </aside>
          </div>
        </section>
        {confirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-2xl bg-card-bg p-6 shadow-2xl">
              <h2 className="text-xl font-black">{confirm === "publish" ? "Publish event?" : "Save draft?"}</h2>
              <p className="mt-2 text-sm text-secondary-text">This prototype keeps the event in mock local state only.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setConfirm(null)} className="flex-1 rounded-xl border border-border py-3 font-bold">Cancel</button>
                <button onClick={() => setConfirm(null)} className="flex-1 rounded-xl bg-pup-maroon py-3 font-bold text-white">Confirm</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function EventEditFields({
  form,
  setForm,
  errors,
  setErrors,
}: {
  form: EventFormState;
  setForm: React.Dispatch<React.SetStateAction<EventFormState>>;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) {
  const update = (field: keyof EventFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const inputClass = (field: keyof EventFormState) =>
    `w-full rounded-xl border bg-secondary-surface px-4 py-3 text-sm outline-none transition-all focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 ${
      errors[field] ? "border-status-rejected" : "border-border"
    }`;

  return (
    <div className="grid grid-cols-2 gap-5">
      <EditField label="Event title" error={errors.title}>
        <input value={form.title} onChange={(event) => update("title", event.target.value)} className={inputClass("title")} />
      </EditField>
      <EditField label="Status" error={errors.status}>
        <select value={form.status} onChange={(event) => update("status", event.target.value)} className={inputClass("status")}>
          <option>Draft</option>
          <option>Open</option>
          <option>Closing Soon</option>
          <option>Scheduled</option>
        </select>
      </EditField>
      <EditField label="Organizer" error={errors.organizer}>
        <input value={form.organizer} onChange={(event) => update("organizer", event.target.value)} className={inputClass("organizer")} />
      </EditField>
      <EditField label="Venue or online location" error={errors.venue}>
        <input value={form.venue} onChange={(event) => update("venue", event.target.value)} className={inputClass("venue")} />
      </EditField>
      <EditField label="Start date" error={errors.startDate}>
        <input type="date" value={form.startDate} onChange={(event) => update("startDate", event.target.value)} className={inputClass("startDate")} />
      </EditField>
      <EditField label="End date" error={errors.endDate}>
        <input type="date" value={form.endDate} onChange={(event) => update("endDate", event.target.value)} className={inputClass("endDate")} />
      </EditField>
      <EditField label="Submission deadline" error={errors.deadline}>
        <input type="date" value={form.deadline} onChange={(event) => update("deadline", event.target.value)} className={inputClass("deadline")} />
      </EditField>
      <label className="col-span-2 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Description</span>
        <textarea value={form.description} onChange={(event) => update("description", event.target.value)} rows={4} className={inputClass("description")} />
        {errors.description && <p className="mt-1 text-xs font-bold text-status-rejected">{errors.description}</p>}
      </label>
    </div>
  );
}

function EditField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">{label}</span>
      {children}
      {error && <p className="mt-1 text-xs font-bold text-status-rejected">{error}</p>}
    </label>
  );
}

function FormCard({ icon, title, helper, children }: { icon: React.ReactNode; title: string; helper: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card-bg p-6 shadow-sm">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-soft-maroon text-pup-maroon">{icon}</div>
        <div>
          <h2 className="font-black text-primary-text">{title}</h2>
          <p className="text-sm text-secondary-text">{helper}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">{label}</span>
      {children}
    </label>
  );
}
