import React, { useState } from "react";
import {
  Calendar,
  ClipboardList,
  Flag,
  History,
  LayoutDashboard,
  Plus,
  Save,
  Shield,
  Star,
} from "lucide-react";
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
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              active === label
                ? "bg-white/10 border-l-4 border-pup-gold text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
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
      <Sidebar {...props} active="Events" />
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
  const fields = [
    ["Event title", "PUP Likha 2027: Student Creative Showcase"],
    ["Event category", "Showcase"],
    ["Organizer", "PUP Office of Student Affairs"],
    ["Start date", "2027-06-01"],
    ["End date", "2027-07-15"],
    ["Submission deadline", "2027-06-30"],
    ["Venue or online location", "PUP Main Building and online gallery"],
    ["Eligibility", "All enrolled PUP students"],
    ["Event status", "Draft"],
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <Sidebar {...props} active="Events" />
      <main className="flex-1 overflow-y-auto p-8">
        <button onClick={props.onEvents} className="mb-5 text-sm font-bold text-pup-maroon hover:underline">Back to Events</button>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Add Event</h1>
          <p className="mt-2 text-secondary-text">Mock-only event creation form for moderator demos.</p>
        </header>
        <section className="max-w-5xl rounded-2xl border border-border bg-card-bg p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-5">
            {fields.map(([label, value]) => (
              <label key={label} className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">{label}</span>
                <input defaultValue={value} className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
              </label>
            ))}
            <label className="col-span-2 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Description</span>
              <textarea rows={4} defaultValue="The annual flagship creative showcase for student works from across PUP." className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
            </label>
            <label className="col-span-2 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Rules and guidelines</span>
              <textarea rows={4} defaultValue="Submit original work only. Accepted works must follow Campus Creatives guidelines and include ownership confirmations." className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon" />
            </label>
            <div className="col-span-2">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-secondary-text">Accepted creative categories</span>
              <div className="flex flex-wrap gap-2">
                {["Visual Art", "Digital Art", "Photography", "Music", "Film", "Spoken Word"].map((category) => (
                  <span key={category} className="rounded-full bg-soft-maroon px-3 py-1 text-sm font-bold text-pup-maroon">{category}</span>
                ))}
              </div>
            </div>
            <div className="col-span-2 rounded-2xl border border-dashed border-pup-maroon/30 bg-soft-maroon p-8 text-center">
              <Calendar className="mx-auto text-pup-maroon" size={32} />
              <p className="mt-2 text-sm font-bold text-pup-maroon">Cover image mock selection</p>
            </div>
          </div>
          <div className="mt-8 flex justify-end gap-3 border-t border-border pt-6">
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
