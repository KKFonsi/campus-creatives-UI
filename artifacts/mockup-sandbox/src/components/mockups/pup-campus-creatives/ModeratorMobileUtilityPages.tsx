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
  MapPin,
  Plus,
  Shield,
  Star,
  Tag,
  Users,
  XCircle,
} from "lucide-react";
import { ModeratorMobileBottomNav } from "./_shared/ModeratorMobileBottomNav";
import { OFFICIAL_CONTENT_SUBMISSIONS } from "./_shared/officialContentMockData";
import { navigateTo } from "../../../app/demo";
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
  onOfficialContentDetail?: () => void;
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
    <div className="mobile-app-screen w-[390px] h-[844px] bg-main-bg font-inter overflow-hidden relative flex flex-col">
      <header className="shrink-0 z-40 bg-dark-surface text-white px-4 py-4">
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
      <main className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 pb-[88px]">{children}</main>
      <ModeratorMobileBottomNav
        active={active}
        onDashboard={onDashboard}
        onPending={onPending}
        onReports={onReports}
        onFeatured={onFeatured}
        onOfficialContent={onOfficialContent}
        onHistory={onHistory}
        onEvents={onEvents}
      />
    </div>
  );
}

export function OfficialContentReviewPageMobile(props: ModeratorMobileProps = {}) {
  const items = OFFICIAL_CONTENT_SUBMISSIONS;

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
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-border bg-card-bg overflow-hidden min-w-0 shadow-sm">
            <div className="h-32 bg-secondary-surface overflow-hidden">
              <img src={item.image} alt={`${item.title} preview`} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-pup-gold px-2 py-1 text-[9px] font-black uppercase text-pup-maroon">
                  <Shield size={10} /> Official
                </span>
                <span className="rounded-full bg-secondary-surface px-2 py-1 text-[10px] font-black uppercase text-secondary-text">
                  {item.status}
                </span>
              </div>
              <h2 className="font-black text-sm leading-tight break-words">{item.title}</h2>
              <p className="mt-1 text-xs font-bold uppercase text-pup-maroon">{item.type}</p>
              <p className="mt-1 text-xs text-secondary-text">{item.orgFull}</p>
              <p className="mt-3 text-xs leading-relaxed text-secondary-text">{item.excerpt}</p>
              <button
                type="button"
                onClick={() => navigateTo(`/moderator/official-content/${item.id}`)}
                className="mt-4 w-full rounded-xl bg-pup-maroon py-3 text-xs font-black text-white"
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </section>
    </Shell>
  );
}

export function OfficialContentDetailPageMobile(props: ModeratorMobileProps = {}) {
  const pathId = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "1";
  const item =
    OFFICIAL_CONTENT_SUBMISSIONS.find((entry) => String(entry.id) === pathId) ??
    OFFICIAL_CONTENT_SUBMISSIONS[0];

  return (
    <Shell {...props} active="Official" title="Official Content" subtitle={`Item #${item.id}`}>
      <button type="button" onClick={props.onOfficialContent} className="flex items-center gap-2 text-xs font-bold text-pup-maroon">
        <ArrowLeft size={16} /> Official Content
      </button>
      <section className="overflow-hidden rounded-2xl border border-border bg-card-bg shadow-sm">
        <img src={item.image} alt={`${item.title} preview`} className="h-40 w-full object-cover" />
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-pup-gold px-3 py-1 text-[10px] font-black uppercase text-pup-maroon">Official</span>
            <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase ${item.statusColor}`}>{item.status}</span>
          </div>
          <h2 className="mt-3 text-xl font-black leading-tight">{item.title}</h2>
          <p className="mt-1 text-xs font-black uppercase text-pup-maroon">{item.type}</p>
          <p className="mt-3 text-sm leading-relaxed text-secondary-text">{item.description}</p>
        </div>
      </section>
      <section className="space-y-2 rounded-2xl border border-border bg-secondary-surface p-4 text-xs">
        {[
          ["Source", item.orgFull],
          ["Representative", item.rep],
          ["Target audience", item.audience],
          ["Publish date", item.publishDate],
          ["Expiration date", item.expirationDate],
          ["Current status", item.status],
          ["Official-label preview", item.labelPreview],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-3 border-b border-border pb-2 last:border-0 last:pb-0">
            <span className="font-black uppercase text-secondary-text">{label}</span>
            <span className="min-w-0 text-right font-bold text-primary-text">{value}</span>
          </div>
        ))}
      </section>
      <section className="space-y-2 rounded-2xl border border-border bg-card-bg p-3">
        {["Approve Post", "Request Revision", "Reject Submission", "Schedule Publication", "Mark as Campus Highlight"].map((action) => (
          <button
            key={action}
            onClick={props.onOfficialContent}
            className={`w-full rounded-xl py-3 text-sm font-black ${
              action === "Approve Post"
                ? "bg-status-approved text-white"
                : action === "Reject Submission"
                ? "bg-status-rejected text-white"
                : action === "Schedule Publication" || action === "Mark as Campus Highlight"
                ? "bg-pup-maroon text-white"
                : "border border-border text-primary-text"
            }`}
          >
            {action}
          </button>
        ))}
      </section>
    </Shell>
  );
}

export function ModerationHistoryPageMobile(props: ModeratorMobileProps = {}) {
  const records = [
    ["Approved", "Digital Sinta", "Rafael Mendoza", "CCIS", "June 16, 2026, 10:12 AM", "Approved for public display"],
    ["Requested revision", "Railway Sketches", "Rafael Mendoza", "CCIS", "June 15, 2026, 4:45 PM", "Ownership details need clarification"],
    ["Dismissed report", "Campus Frequencies", "Bianca Reyes", "COC", "June 15, 2026, 2:20 PM", "Report did not require action"],
  ];

  return (
    <Shell {...props} active="History" title="Moderation History" subtitle="Recent decisions and audit notes">
      <section className="space-y-3">
        {records.map(([action, title, creator, college, date, note]) => (
          <article key={`${action}-${title}`} className="rounded-2xl border border-border bg-card-bg p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-soft-gold text-warm-gold flex items-center justify-center shrink-0">
                <History size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-sm font-black break-words">{action}</h2>
                  <span className="rounded-full bg-secondary-surface px-2 py-0.5 text-[9px] font-black uppercase text-secondary-text">{college}</span>
                </div>
                <p className="mt-1 text-sm font-bold text-primary-text break-words">{title}</p>
                <p className="text-xs text-secondary-text">{creator}</p>
                <p className="mt-1 text-xs text-secondary-text">{date}</p>
                <p className="mt-3 rounded-xl bg-secondary-surface p-3 text-xs leading-relaxed text-secondary-text">
                  {note}
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
    ["PUP Likha 2026", "Open", "PUP OSA", "89 submissions", "June 30, 2026", "/__mockup/images/event_1.jpg"],
    ["Sinta Short Film Festival", "Draft", "CAL", "34 submissions", "July 15, 2026", "/__mockup/images/event_2.jpg"],
    ["Guhit Iskolar", "Closing soon", "CCIS", "67 submissions", "June 25, 2026", "/__mockup/images/event_3.jpg"],
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
      {events.map(([title, status, organizer, count, deadline, image]) => (
        <article key={title} className="rounded-2xl border border-border bg-card-bg overflow-hidden shadow-sm">
          <div className="h-28 bg-secondary-surface overflow-hidden">
            <img src={image} alt={`${title} event preview`} className="h-full w-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="font-black text-sm break-words">{title}</h2>
                <p className="mt-1 text-xs text-secondary-text">{organizer} • {count}</p>
              </div>
              <span className="shrink-0 rounded-full bg-soft-gold px-2 py-1 text-[10px] font-black uppercase text-warm-gold">{status}</span>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-secondary-surface p-3 text-xs">
              <span className="font-bold text-secondary-text">Deadline</span>
              <span className="font-black text-primary-text">{deadline}</span>
            </div>
            <button className="mt-3 w-full rounded-xl border border-border py-2 text-xs font-black text-pup-maroon">Edit event</button>
          </div>
        </article>
      ))}
    </Shell>
  );
}

export function ModeratorEventFormPageMobile(props: ModeratorMobileProps = {}) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Shell {...props} active="More" title="Add Event" subtitle="Create a mock event listing">
      <button type="button" onClick={props.onEvents} className="flex items-center gap-2 text-xs font-bold text-pup-maroon">
        <ArrowLeft size={16} /> Events
      </button>
      <section className="rounded-2xl border border-border bg-card-bg p-4 space-y-4 shadow-sm">
        <div className="rounded-2xl bg-soft-maroon p-4">
          <p className="text-xs font-black uppercase text-pup-maroon">New event setup</p>
          <p className="mt-1 text-xs leading-relaxed text-secondary-text">Start blank, then add eligibility, deadlines, and creative requirements for the prototype.</p>
        </div>
        <label className="block min-w-0">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Event title</span>
          <input className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" placeholder="Enter event title" />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="block min-w-0">
            <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Category</span>
            <select defaultValue="" className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon">
              <option value="" disabled>Select</option>
              <option>Competition</option>
              <option>Open Call</option>
              <option>Showcase</option>
            </select>
          </label>
          <label className="block min-w-0">
            <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Status</span>
            <select defaultValue="Draft" className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon">
              <option>Draft</option>
              <option>Open</option>
              <option>Scheduled</option>
            </select>
          </label>
        </div>
        <label className="block min-w-0">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Organizer</span>
          <input className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" placeholder="Office, college, or organization" />
        </label>
        <div className="grid grid-cols-1 gap-3">
          {["Start date", "End date", "Submission deadline"].map((field) => (
            <label key={field} className="block min-w-0">
              <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">{field}</span>
              <input type="date" className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" />
            </label>
          ))}
        </div>
        <label className="block min-w-0">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Venue or online location</span>
          <input className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" placeholder="Venue, room, or online link" />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Eligibility</span>
          <textarea className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" rows={3} placeholder="Eligible colleges, programs, or teams" />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Description</span>
          <textarea className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" rows={4} placeholder="Describe the event purpose and audience" />
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
          <textarea className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-3 py-3 text-sm outline-none focus:border-pup-maroon" rows={4} placeholder="Originality, ownership, file, and judging notes" />
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
        <div className="absolute inset-0 z-[120] flex items-end bg-black/40">
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
          <div className="rounded-xl bg-secondary-surface p-3 text-sm">
            <p><span className="font-black text-primary-text">Reason:</span> Stolen Work</p>
            <p className="mt-1"><span className="font-black text-primary-text">Comment:</span> Resembles a 2024 campaign reference.</p>
          </div>
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
        <p className="mt-3 text-sm leading-relaxed text-secondary-text">User report note: The poster composition resembles a 2024 campaign reference and may need copyright comparison.</p>
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
        <div className="absolute inset-0 z-[120] flex items-end bg-black/40">
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
