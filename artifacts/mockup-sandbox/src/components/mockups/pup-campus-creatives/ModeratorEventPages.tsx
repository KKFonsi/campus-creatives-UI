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

export function ModeratorEventsPage(props: ModeratorEventProps = {}) {
  const events = [
    ["PUP Likha 2026", "Open", "PUP OSA", "89", "June 30, 2026"],
    ["Sinta Short Film Festival", "Draft", "CAL", "34", "July 15, 2026"],
    ["Guhit Iskolar Digital Art", "Closing Soon", "CCIS", "67", "June 25, 2026"],
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar {...props} />
      <main className="flex-1 overflow-y-auto p-8">
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
          {events.map(([title, status, organizer, submissions, deadline]) => (
            <article key={title} className="rounded-xl border border-border bg-card-bg p-5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0">
                <Calendar size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-primary-text truncate">{title}</h2>
                <p className="text-sm text-secondary-text">{organizer} • deadline {deadline}</p>
              </div>
              <span className="rounded-full bg-soft-gold px-3 py-1 text-xs font-bold uppercase text-warm-gold">{status}</span>
              <div className="w-24 text-right">
                <p className="text-lg font-black">{submissions}</p>
                <p className="text-[10px] font-bold uppercase text-muted-text">Submissions</p>
              </div>
              <button className="rounded-lg border border-border px-4 py-2 text-sm font-bold">Edit</button>
            </article>
          ))}
        </section>
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
        <section className="w-full max-w-[1320px] space-y-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 space-y-6">
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

            <aside className="col-span-4 space-y-6">
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
            </aside>
          </div>
          <div className="flex justify-end gap-3 border-t border-border pt-6">
            <button onClick={props.onEvents} className="rounded-xl border border-border px-5 py-3 text-sm font-bold text-secondary-text">Cancel</button>
            <button onClick={() => setConfirm("draft")} className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold">
              <Save size={18} /> Save as Draft
            </button>
            <button onClick={() => setConfirm("publish")} className="rounded-xl bg-pup-maroon px-7 py-3 text-sm font-bold text-white">Publish Event</button>
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
