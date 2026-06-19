import React, { useState } from "react";
import {
  Activity,
  Award,
  Building2,
  Calendar,
  ChevronRight,
  FileText,
  Flag,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Tag,
  UserCog,
  Users,
} from "lucide-react";
import type { AdminDestination } from "../../../app/admin/adminRoutes";
import "./_group.css";

interface SuperAdminPageProps {
  destination: AdminDestination;
  mode: "desktop" | "mobile";
  onNavigate: (destination: AdminDestination) => void;
}

const labels: Record<AdminDestination, string> = {
  dashboard: "Dashboard",
  users: "Users",
  userDetail: "User Detail",
  moderators: "Moderators",
  colleges: "Colleges",
  categories: "Categories",
  events: "Events",
  newEvent: "Create Event",
  recognition: "Recognition",
  analytics: "Analytics",
  activityLog: "Activity Log",
  roles: "Roles",
  reports: "Reports",
  featured: "Featured",
  settings: "Settings",
  auditLog: "Audit Log",
};

const icons: Record<AdminDestination, React.ComponentType<{ size?: number; className?: string }>> = {
  dashboard: LayoutDashboard,
  users: Users,
  userDetail: UserCog,
  moderators: ShieldCheck,
  colleges: Building2,
  categories: Tag,
  events: Calendar,
  newEvent: Plus,
  recognition: Award,
  analytics: Activity,
  activityLog: Activity,
  roles: Shield,
  reports: Flag,
  featured: Award,
  settings: Settings,
  auditLog: Activity,
};

const desktopNav: AdminDestination[] = [
  "dashboard",
  "users",
  "moderators",
  "colleges",
  "categories",
  "events",
  "recognition",
  "reports",
  "featured",
  "analytics",
  "activityLog",
  "roles",
  "settings",
  "auditLog",
];

const mobilePrimary: AdminDestination[] = ["dashboard", "users", "events", "reports"];
const mobileMore: AdminDestination[] = ["moderators", "colleges", "categories", "featured", "settings", "auditLog"];

export function SuperAdminPage({ destination, mode, onNavigate }: SuperAdminPageProps) {
  if (mode === "mobile") {
    return <MobileAdmin destination={destination} onNavigate={onNavigate} />;
  }

  return (
    <div className="flex min-h-screen bg-main-bg font-inter text-primary-text">
      <aside className="w-[252px] bg-dark-surface text-white flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="p-6">
          <div className="text-pup-gold font-black text-xl leading-tight">Campus Creatives</div>
          <div className="mt-2 inline-flex rounded bg-pup-gold px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-dark-surface">Super Admin</div>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {desktopNav.map((item) => {
            const Icon = icons[item];
            return (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors ${
                  destination === item || (destination === "newEvent" && item === "events")
                    ? "bg-white/10 text-white border-l-4 border-pup-gold"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {labels[item]}
              </button>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card-bg px-8">
          <div>
            <h1 className="text-xl font-black">{labels[destination]}</h1>
            <p className="text-xs font-bold uppercase tracking-wide text-secondary-text">Platform control center</p>
          </div>
          <div className="relative w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input className="w-full rounded-full border border-border bg-secondary-surface py-2 pl-9 pr-4 text-sm" placeholder="Search admin records..." />
          </div>
        </header>
        <AdminContent destination={destination} onNavigate={onNavigate} />
      </main>
    </div>
  );
}

function MobileAdmin({ destination, onNavigate }: Omit<SuperAdminPageProps, "mode">) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mobile-app-screen w-[390px] h-[844px] bg-main-bg font-inter overflow-hidden relative flex flex-col">
      <header className="shrink-0 z-40 bg-dark-surface px-4 py-4 text-white">
        <p className="text-[10px] font-black uppercase tracking-widest text-pup-gold">Super Admin</p>
        <h1 className="text-xl font-black leading-tight">{labels[destination]}</h1>
      </header>
      <main className="flex-1 min-h-0 overflow-y-auto pb-[86px]">
        <AdminContent destination={destination} onNavigate={onNavigate} mobile />
      </main>
      {showMore && (
        <div className="absolute bottom-[72px] left-1/2 z-50 w-[366px] -translate-x-1/2 rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
          {mobileMore.map((item) => {
            const Icon = icons[item];
            return (
              <button key={item} onClick={() => { setShowMore(false); onNavigate(item); }} className="flex w-full items-center gap-3 border-b border-border px-4 py-3 text-left text-sm font-black last:border-0">
                <Icon size={18} className="text-pup-maroon" /> {labels[item]}
              </button>
            );
          })}
        </div>
      )}
      <nav className="absolute bottom-0 left-0 z-40 flex h-[68px] w-full items-center justify-around border-t border-white/10 bg-dark-surface px-2">
        {mobilePrimary.map((item) => {
          const Icon = icons[item];
          return (
            <button key={item} onClick={() => onNavigate(item)} className={`flex min-w-0 flex-1 flex-col items-center gap-1 text-[9px] font-black uppercase ${destination === item ? "text-pup-gold" : "text-white/60"}`}>
              <Icon size={20} />
              <span>{labels[item]}</span>
            </button>
          );
        })}
        <button onClick={() => setShowMore((value) => !value)} className={`flex min-w-0 flex-1 flex-col items-center gap-1 text-[9px] font-black uppercase ${mobileMore.includes(destination) ? "text-pup-gold" : "text-white/60"}`}>
          <MoreHorizontal size={20} />
          <span>More</span>
        </button>
      </nav>
    </div>
  );
}

function AdminContent({
  destination,
  onNavigate,
  mobile = false,
}: {
  destination: AdminDestination;
  onNavigate: (destination: AdminDestination) => void;
  mobile?: boolean;
}) {
  const className = mobile ? "p-4 space-y-4" : "p-8 space-y-8";

  if (destination === "dashboard") {
    return (
      <div className={className}>
        <section className={mobile ? "grid grid-cols-2 gap-3" : "grid grid-cols-4 gap-4"}>
          {[
            ["Total users", "12,840"],
            ["Active student creators", "4,392"],
            ["Moderators", "28"],
            ["Pending reports", "16"],
            ["Active events", "9"],
            ["Approved works", "2,148"],
            ["Featured works", "86"],
            ["Colleges represented", "16"],
          ].map(([label, value]) => <Stat key={label} label={label} value={value} />)}
        </section>
        <TwoPanels
          leftTitle="Recent Activity"
          rightTitle="System Alerts"
          left={["Moderator approved Digital Sinta", "Admin archived outdated category", "Event PUP Likha 2026 published"]}
          right={["3 reports escalated", "2 moderators at high workload", "Email domain policy pending review"]}
        />
      </div>
    );
  }

  if (destination === "newEvent") {
    return <EventForm className={className} onNavigate={onNavigate} />;
  }

  const pageMap: Record<Exclude<AdminDestination, "newEvent">, { actions: string[]; columns: string[]; rows: string[][]; cta?: string }> = {
    dashboard: { actions: [], columns: [], rows: [] },
    users: {
      actions: ["View user", "Suspend", "Restore", "Change role"],
      columns: ["Name", "Role", "Status", "College"],
      rows: [["Rafael Mendoza", "Student", "Active", "CCIS"], ["Maria Santos", "Student", "Active", "CAL"], ["Ana Cruz", "Moderator", "Active", "COC"]],
    },
    userDetail: {
      actions: ["Change role", "Restrict account", "View submissions"],
      columns: ["Record", "Value", "Status", "Scope"],
      rows: [["Rafael Mendoza", "Creator", "Active", "CCIS"], ["Approved works", "24", "Visible", "Portfolio"], ["Reports received", "0", "Clear", "Safety"]],
    },
    moderators: {
      cta: "Add Moderator",
      actions: ["Edit assignment", "Deactivate"],
      columns: ["Moderator", "Assigned area", "Workload", "Status"],
      rows: [["Maria Moderator", "Digital Art", "24 reviews", "Active"], ["Leo Santos", "Reports", "11 reports", "Active"], ["Dana Reyes", "Official Content", "5 reviews", "Away"]],
    },
    colleges: {
      actions: ["Edit details", "Enable showcase"],
      columns: ["College", "Abbreviation", "Creators", "Works"],
      rows: [["College of Computer and Information Sciences", "CCIS", "428", "612"], ["College of Communication", "COC", "392", "540"], ["College of Arts and Letters", "CAL", "318", "421"]],
    },
    categories: {
      cta: "Add Category",
      actions: ["Edit category", "Archive category"],
      columns: ["Category", "Status", "Usage count", "Featured"],
      rows: [["Digital Art", "Active", "642", "Yes"], ["Photography", "Active", "524", "Yes"], ["Film", "Active", "205", "No"]],
    },
    events: {
      cta: "Create Event",
      actions: ["Edit event", "Archive event", "View counts"],
      columns: ["Event", "Status", "Submissions", "Organizer"],
      rows: [["PUP Likha 2026", "Open", "89", "PUP OSA"], ["Guhit Iskolar", "Closing soon", "67", "CCIS"], ["Sinta Short Film Festival", "Draft", "34", "CAL"]],
    },
    recognition: {
      cta: "Add Badge",
      actions: ["Edit badge", "Disable badge"],
      columns: ["Badge", "Awarding type", "Awarded", "Status"],
      rows: [["Artwork of the Week", "Manual", "18", "Active"], ["Creator of the Month", "Manual", "8", "Active"], ["Campus Highlight", "Manual", "12", "Active"]],
    },
    analytics: {
      actions: ["View detail"],
      columns: ["Metric", "Current value", "Trend", "Period"],
      rows: [["Approved works", "2,148", "+12%", "Semester"], ["Active creators", "4,392", "+8%", "Semester"], ["Event participation", "836", "+16%", "Academic year"]],
    },
    activityLog: {
      actions: ["Inspect record"],
      columns: ["Activity", "Actor", "Type", "Date"],
      rows: [["User role changed", "Admin One", "Users", "June 18"], ["Event published", "Lara Rep", "Events", "June 17"], ["Badge created", "Admin One", "Recognition", "June 15"]],
    },
    roles: {
      actions: ["Edit role"],
      columns: ["Role", "Access level", "Users", "Risk note"],
      rows: [["Student", "Limited", "12,203", "Can submit work"], ["Moderator", "Review access", "28", "Can decide submissions"], ["System Admin", "Full access", "4", "Requires approval"]],
    },
    reports: {
      actions: ["Assign to Moderator", "Resolve", "Dismiss", "Remove content", "Suspend user"],
      columns: ["Report", "Status", "Priority", "Owner"],
      rows: [["CC-RPT-2026-0031", "Escalated", "High", "Unassigned"], ["CC-RPT-2026-0028", "Open", "High", "Maria"], ["CC-RPT-2026-0026", "Under Review", "Medium", "Leo"]],
    },
    featured: {
      actions: ["Inspect", "Feature", "Unfeature"],
      columns: ["Area", "Current items", "Queue", "Owner"],
      rows: [["Featured works", "18", "7", "Moderator Team"], ["Featured creators", "8", "3", "Super Admin"], ["Official content", "12", "4", "OSA"]],
    },
    settings: {
      actions: ["Save setting", "Reset"],
      columns: ["Setting", "Value", "Status", "Owner"],
      rows: [["Platform name", "PUP: Campus Creatives", "Active", "Admin"], ["Allowed email domain", "@iskolarngbayan.pup.edu.ph", "Active", "Admin"], ["Default visibility", "Public after approval", "Active", "Admin"]],
    },
    auditLog: {
      actions: ["Inspect record"],
      columns: ["Activity", "Actor", "Type", "Date"],
      rows: [["Moderator decision", "Maria", "Approval", "June 16"], ["Report resolution", "Leo", "Report", "June 15"], ["Event publication", "Admin One", "Event", "June 14"]],
    },
  };

  const page = pageMap[destination];

  return (
    <div className={className}>
      <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-black text-primary-text">{labels[destination]}</h2>
          <p className="mt-1 text-sm text-secondary-text">Mock-only tools and records for Super Admin review.</p>
        </div>
        {page.cta && (
          <button onClick={() => destination === "events" ? onNavigate("newEvent") : undefined} className="inline-flex items-center justify-center gap-2 rounded-xl bg-pup-maroon px-4 py-3 text-sm font-black text-white">
            <Plus size={18} /> {page.cta}
          </button>
        )}
      </section>
      {["users", "reports", "settings"].includes(destination) && (
        <section className={mobile ? "space-y-2" : "flex gap-3"}>
          <input className="w-full min-w-0 rounded-xl border border-border bg-card-bg px-4 py-3 text-sm" placeholder="Search..." />
          <select className="w-full rounded-xl border border-border bg-card-bg px-4 py-3 text-sm"><option>Role filter</option><option>Student</option><option>Moderator</option></select>
          <select className="w-full rounded-xl border border-border bg-card-bg px-4 py-3 text-sm"><option>Status filter</option><option>Active</option><option>Suspended</option></select>
        </section>
      )}
      <section className={mobile ? "space-y-3" : "rounded-2xl border border-border bg-card-bg overflow-hidden"}>
        {mobile ? (
          page.rows.map((row) => <MobileRecord key={row.join("-")} columns={page.columns} row={row} actions={page.actions} />)
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary-surface text-xs font-black uppercase text-secondary-text">
              <tr>{page.columns.map((column) => <th key={column} className="px-5 py-3">{column}</th>)}<th className="px-5 py-3">Actions</th></tr>
            </thead>
            <tbody>
              {page.rows.map((row) => (
                <tr key={row.join("-")} className="border-t border-border">
                  {row.map((cell) => <td key={cell} className="px-5 py-4 font-medium">{cell}</td>)}
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-2">
                      {page.actions.slice(0, 3).map((action) => <button key={action} className="rounded-lg border border-border px-3 py-1.5 text-xs font-black text-pup-maroon">{action}</button>)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card-bg p-4 shadow-sm">
      <p className="text-2xl font-black text-pup-maroon">{value}</p>
      <p className="mt-1 text-[11px] font-black uppercase tracking-wide text-secondary-text">{label}</p>
    </div>
  );
}

function TwoPanels({ leftTitle, rightTitle, left, right }: { leftTitle: string; rightTitle: string; left: string[]; right: string[] }) {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {[[leftTitle, left], [rightTitle, right]].map(([title, items]) => (
        <div key={title as string} className="rounded-2xl border border-border bg-card-bg p-5">
          <h2 className="font-black">{title as string}</h2>
          <div className="mt-4 space-y-3">
            {(items as string[]).map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-secondary-surface p-3 text-sm">
                <FileText size={16} className="text-pup-maroon" />
                <span className="min-w-0 break-words">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function MobileRecord({ columns, row, actions }: { columns: string[]; row: string[]; actions: string[] }) {
  return (
    <article className="rounded-2xl border border-border bg-card-bg p-4">
      <h3 className="font-black break-words">{row[0]}</h3>
      <div className="mt-3 space-y-2">
        {row.slice(1).map((cell, index) => (
          <div key={`${columns[index + 1]}-${cell}`} className="flex justify-between gap-3 text-xs">
            <span className="font-black uppercase text-secondary-text">{columns[index + 1]}</span>
            <span className="min-w-0 text-right font-bold break-words">{cell}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 flex items-center gap-1 text-xs font-black text-pup-maroon">
        {actions[0] ?? "View"} <ChevronRight size={14} />
      </button>
    </article>
  );
}

function EventForm({ className, onNavigate }: { className: string; onNavigate: (destination: AdminDestination) => void }) {
  return (
    <div className={className}>
      <button onClick={() => onNavigate("events")} className="text-sm font-black text-pup-maroon">Back to Events</button>
      <section className="rounded-2xl border border-border bg-card-bg p-5 space-y-4">
        {[
          "Event title",
          "Event category",
          "Organizer",
          "Start date",
          "End date",
          "Submission deadline",
          "Venue or online location",
          "Eligibility",
          "Cover image mock selection",
          "Event status",
        ].map((field) => (
          <label key={field} className="block">
            <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">{field}</span>
            <input className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm" defaultValue={field === "Event title" ? "PUP Likha 2027" : ""} />
          </label>
        ))}
        <label className="block">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Description</span>
          <textarea rows={4} className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm" defaultValue="Annual creative showcase for PUP student creators." />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Rules and guidelines</span>
          <textarea rows={4} className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm" defaultValue="Original works only. Submissions must follow platform policy." />
        </label>
        <div>
          <span className="mb-2 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Accepted creative categories</span>
          <div className="flex flex-wrap gap-2">
            {["Visual Art", "Digital Art", "Photography", "Music", "Film"].map((category) => <span key={category} className="rounded-full bg-soft-maroon px-3 py-1 text-xs font-black text-pup-maroon">{category}</span>)}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button className="rounded-xl border border-border py-3 text-sm font-black">Save as Draft</button>
          <button className="rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">Publish Event</button>
        </div>
      </section>
    </div>
  );
}
