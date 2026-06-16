import React, { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Flag,
  History,
  Image as ImageIcon,
  Plus,
  Shield,
  Star,
  XCircle,
} from "lucide-react";
import { ModeratorMobileBottomNav } from "./_shared/ModeratorMobileBottomNav";
import "./_group.css";

interface ModeratorMobileProps {
  active?: "Official" | "History" | "Reports" | "More";
  onBack?: () => void;
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
  onNewEvent?: () => void;
}

function Shell({
  active = "More",
  children,
  title,
  subtitle,
  onDashboard,
  onPending,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
  onEvents,
  onNewEvent,
}: ModeratorMobileProps & {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-x-hidden overflow-y-auto pb-[88px]">
      <header className="sticky top-0 z-40 bg-dark-surface text-white px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-pup-gold">Moderator</p>
            <h1 className="text-lg font-black leading-tight truncate">{title}</h1>
            <p className="text-xs text-white/60 truncate">{subtitle}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-pup-maroon border border-white/20 flex items-center justify-center text-xs font-bold shrink-0">
            MM
          </div>
        </div>
      </header>
      <main className="p-4 space-y-4">{children}</main>
      <ModeratorMobileBottomNav
        active={active}
        onDashboard={onDashboard}
        onPending={onPending}
        onReports={onReports}
        onFeatured={onFeatured}
        onOfficialContent={onOfficialContent}
        onHistory={onHistory}
        onEvents={onEvents}
        onNewEvent={onNewEvent}
      />
    </div>
  );
}

export function OfficialContentReviewPageMobile(props: ModeratorMobileProps = {}) {
  const items = [
    ["OSA Creative Week Banner", "Announcement", "Ready to publish"],
    ["PUP Museum Feature", "Official story", "Needs alt text"],
    ["Foundation Week Winners", "Recognition post", "Scheduled"],
  ];

  return (
    <Shell {...props} active="Official" title="Official Content" subtitle="Review university-authored creative posts">
      <section className="grid grid-cols-2 gap-3">
        {[
          ["Pending", "5"],
          ["Scheduled", "8"],
          ["Published", "42"],
          ["Needs edits", "2"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-border bg-card-bg p-4 min-w-0">
            <p className="text-2xl font-black text-pup-maroon">{value}</p>
            <p className="text-[11px] font-bold uppercase tracking-wide text-secondary-text">{label}</p>
          </div>
        ))}
      </section>
      <section className="space-y-3">
        {items.map(([title, type, status]) => (
          <article key={title} className="rounded-2xl border border-border bg-card-bg p-4 min-w-0">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0">
                <Shield size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-sm leading-tight break-words">{title}</h2>
                <p className="text-xs text-secondary-text mt-1">{type}</p>
                <p className="mt-3 inline-flex rounded-full bg-secondary-surface px-2 py-1 text-[10px] font-bold uppercase text-secondary-text">
                  {status}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="rounded-xl border border-border py-2 text-xs font-bold">Request edits</button>
              <button className="rounded-xl bg-pup-maroon py-2 text-xs font-bold text-white">Approve</button>
            </div>
          </article>
        ))}
      </section>
    </Shell>
  );
}

export function ModerationHistoryPageMobile(props: ModeratorMobileProps = {}) {
  const records = [
    ["Approved", "Digital Sinta", "June 16, 2026, 10:12 AM"],
    ["Requested revision", "Railway Sketches", "June 15, 2026, 4:45 PM"],
    ["Dismissed report", "Campus Frequencies", "June 15, 2026, 2:20 PM"],
  ];

  return (
    <Shell {...props} active="History" title="Moderation History" subtitle="Recent decisions and audit notes">
      <section className="space-y-3">
        {records.map(([action, title, date]) => (
          <article key={`${action}-${title}`} className="rounded-2xl border border-border bg-card-bg p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-soft-gold text-warm-gold flex items-center justify-center shrink-0">
                <History size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-black break-words">{action}</h2>
                <p className="text-sm text-primary-text break-words">{title}</p>
                <p className="mt-1 text-xs text-secondary-text">{date}</p>
                <p className="mt-3 rounded-xl bg-secondary-surface p-3 text-xs leading-relaxed text-secondary-text">
                  Mock audit note recorded for prototype review traceability.
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Shell>
  );
}

export function ModeratorEventsPageMobile(props: ModeratorMobileProps = {}) {
  const events = [
    ["PUP Likha 2026", "Open", "89 submissions"],
    ["Sinta Short Film Festival", "Draft", "34 submissions"],
    ["Guhit Iskolar", "Closing soon", "67 submissions"],
  ];

  return (
    <Shell {...props} active="More" title="Events" subtitle="Manage moderator-created events">
      <button
        type="button"
        onClick={props.onNewEvent}
        className="w-full rounded-2xl bg-pup-maroon py-3 text-sm font-black text-white flex items-center justify-center gap-2"
      >
        <Plus size={18} /> Add Event
      </button>
      {events.map(([title, status, count]) => (
        <article key={title} className="rounded-2xl border border-border bg-card-bg p-4">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0">
              <Calendar size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-sm break-words">{title}</h2>
              <p className="text-xs text-secondary-text mt-1">{count}</p>
              <span className="mt-3 inline-flex rounded-full bg-soft-gold px-2 py-1 text-[10px] font-black uppercase text-warm-gold">
                {status}
              </span>
            </div>
          </div>
        </article>
      ))}
    </Shell>
  );
}

export function ModeratorEventFormPageMobile(props: ModeratorMobileProps = {}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const fields = [
    "Event title",
    "Event category",
    "Organizer",
    "Start date",
    "End date",
    "Submission deadline",
    "Venue or online location",
    "Eligibility",
  ];

  return (
    <Shell {...props} active="More" title="Add Event" subtitle="Create a mock event listing">
      <button type="button" onClick={props.onEvents} className="flex items-center gap-2 text-xs font-bold text-pup-maroon">
        <ArrowLeft size={16} /> Events
      </button>
      <section className="rounded-2xl border border-border bg-card-bg p-4 space-y-4">
        {fields.map((field) => (
          <label key={field} className="block min-w-0">
            <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">{field}</span>
            <input className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" defaultValue={field === "Event title" ? "PUP Likha 2027" : ""} />
          </label>
        ))}
        <label className="block">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Description</span>
          <textarea className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" rows={4} defaultValue="Annual creative showcase for PUP student creators." />
        </label>
        <div>
          <span className="mb-2 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Accepted creative categories</span>
          <div className="flex flex-wrap gap-2">
            {["Visual Art", "Digital Art", "Photography", "Music", "Film"].map((category) => (
              <span key={category} className="rounded-full bg-soft-maroon px-3 py-1 text-xs font-bold text-pup-maroon">{category}</span>
            ))}
          </div>
        </div>
        <label className="block">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Rules and guidelines</span>
          <textarea className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" rows={4} defaultValue="Original work only. Follow Campus Creatives community guidelines." />
        </label>
        <div className="rounded-2xl border border-dashed border-pup-maroon/30 bg-soft-maroon p-4 text-center">
          <ImageIcon className="mx-auto text-pup-maroon" />
          <p className="mt-2 text-xs font-bold text-pup-maroon">Cover image mock selection</p>
        </div>
      </section>
      <section className="space-y-2 rounded-2xl border border-border bg-card-bg p-3">
        <button className="w-full rounded-xl border border-border py-3 text-sm font-black">Save as Draft</button>
        <button onClick={() => setShowConfirm(true)} className="w-full rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">Publish Event</button>
      </section>
      {showConfirm && (
        <div className="fixed inset-0 z-[80] flex items-end bg-black/40">
          <div className="w-[390px] rounded-t-3xl bg-card-bg p-6">
            <CheckCircle2 className="text-status-approved" size={32} />
            <h2 className="mt-3 text-xl font-black">Publish event?</h2>
            <p className="mt-2 text-sm text-secondary-text">This mock action will keep the event in local prototype state only.</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button onClick={() => setShowConfirm(false)} className="rounded-xl border border-border py-3 font-bold">Cancel</button>
              <button onClick={() => setShowConfirm(false)} className="rounded-xl bg-pup-maroon py-3 font-bold text-white">Publish</button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

export function ReportDetailPageMobile(props: ModeratorMobileProps = {}) {
  const [confirm, setConfirm] = useState<string | null>(null);
  return (
    <Shell {...props} active="Reports" title="Report Detail" subtitle="CC-RPT-2026-0031">
      <button type="button" onClick={props.onReports} className="flex items-center gap-2 text-xs font-bold text-pup-maroon">
        <ArrowLeft size={16} /> Reports
      </button>
      <section className="rounded-2xl border border-border bg-card-bg overflow-hidden">
        <div className="aspect-video bg-secondary-surface">
          <img src="/__mockup/images/thumbnail_1.jpg" alt="Reported work preview" className="h-full w-full object-cover" />
        </div>
        <div className="p-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-status-rejected/10 px-2 py-1 text-[10px] font-black uppercase text-status-rejected">High</span>
            <span className="rounded-full bg-soft-maroon px-2 py-1 text-[10px] font-black uppercase text-pup-maroon">Work report</span>
          </div>
          <h2 className="text-lg font-black break-words">Digital Sinta</h2>
          <p className="text-sm leading-relaxed text-secondary-text">Reported for suspected stolen work. The reporter says the poster composition closely resembles a 2024 campaign reference.</p>
        </div>
      </section>
      <section className="rounded-2xl border border-border bg-card-bg p-4 space-y-3">
        {[
          ["Report ID", "CC-RPT-2026-0031"],
          ["Reporter", "Anonymous user"],
          ["Reported creator", "Rafael Mendoza"],
          ["Date submitted", "June 11, 2026"],
          ["Current status", "Open"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-3 border-b border-border pb-2 last:border-0">
            <span className="text-xs font-bold uppercase text-secondary-text">{label}</span>
            <span className="min-w-0 text-right text-xs font-black break-words">{value}</span>
          </div>
        ))}
      </section>
      <section className="rounded-2xl border border-border bg-card-bg p-4">
        <h2 className="font-black flex items-center gap-2"><FileText size={18} className="text-pup-maroon" /> Previous notes</h2>
        <p className="mt-3 text-sm leading-relaxed text-secondary-text">No previous moderation action. Copyright comparison requires moderator decision.</p>
      </section>
      <section className="rounded-2xl border border-border bg-card-bg p-3 space-y-2">
        {["Dismiss Report", "Remove Content", "Warn Creator", "Escalate to Super Admin"].map((action) => (
          <button
            key={action}
            onClick={() => setConfirm(action)}
            className={`w-full rounded-xl py-3 text-sm font-black ${action === "Remove Content" ? "bg-status-rejected text-white" : action === "Escalate to Super Admin" ? "bg-pup-maroon text-white" : "border border-border text-primary-text"}`}
          >
            {action}
          </button>
        ))}
      </section>
      {confirm && (
        <div className="fixed inset-0 z-[80] flex items-end bg-black/40">
          <div className="w-[390px] rounded-t-3xl bg-card-bg p-6">
            {confirm === "Remove Content" ? <XCircle className="text-status-rejected" size={32} /> : <Flag className="text-pup-maroon" size={32} />}
            <h2 className="mt-3 text-xl font-black">{confirm}?</h2>
            <p className="mt-2 text-sm text-secondary-text">This is a mock confirmation dialog for the prototype.</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button onClick={() => setConfirm(null)} className="rounded-xl border border-border py-3 font-bold">Cancel</button>
              <button onClick={() => setConfirm(null)} className="rounded-xl bg-pup-maroon py-3 font-bold text-white">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
