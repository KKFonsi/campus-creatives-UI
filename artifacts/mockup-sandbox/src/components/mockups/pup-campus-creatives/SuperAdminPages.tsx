import React, { useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Award,
  BadgeCheck,
  Ban,
  CheckCircle2,
  ChevronRight,
  Eye,
  FileText,
  Flag,
  LayoutDashboard,
  MoreHorizontal,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Star,
  UserCog,
  Users,
  X,
} from "lucide-react";
import type { AdminDestination } from "../../../app/admin/adminRoutes";
import { InitialsAvatar } from "./_shared/InitialsAvatar";
import "./_group.css";

interface SuperAdminPageProps {
  destination: AdminDestination;
  mode: "desktop" | "mobile";
  onNavigate: (destination: AdminDestination) => void;
}

type UserStatus = "Active" | "Suspended" | "Pending";
type ModeratorStatus = "Active" | "Away" | "Inactive";
type ModalState =
  | { type: "user"; id: string }
  | { type: "user-confirm"; id: string; action: "Suspend" | "Restore" }
  | { type: "moderator-add" }
  | { type: "moderator-edit"; id: string }
  | { type: "moderator-deactivate"; id: string }
  | { type: "badge-add" }
  | { type: "badge-view"; id: string }
  | { type: "badge-edit"; id: string }
  | { type: "badge-archive"; id: string }
  | { type: "report"; id: string }
  | { type: "featured"; id: string; action: "Edit" | "Remove" | "Feature" }
  | { type: "audit"; id: string }
  | { type: "activity"; title: string; detail: string }
  | null;

const labels: Record<AdminDestination, string> = {
  dashboard: "Dashboard",
  users: "Users",
  userDetail: "User Detail",
  moderators: "Moderators",
  recognition: "Recognitions",
  reports: "Reports",
  featured: "Featured Content",
  settings: "Settings",
  auditLog: "Audit Log",
};

const icons: Record<AdminDestination, React.ComponentType<{ size?: number; className?: string }>> = {
  dashboard: LayoutDashboard,
  users: Users,
  userDetail: UserCog,
  moderators: ShieldCheck,
  recognition: Award,
  reports: Flag,
  featured: Star,
  settings: Settings,
  auditLog: Activity,
};

const desktopNav: AdminDestination[] = ["dashboard", "users", "moderators", "reports", "featured", "recognition", "settings", "auditLog"];
const mobilePrimary: AdminDestination[] = ["dashboard", "users", "reports", "recognition"];
const mobileMore: AdminDestination[] = ["moderators", "featured", "settings", "auditLog"];

const seedUsers = [
  ["u01", "Rafael Mendoza", "rmendoza@iskolarngbayan.pup.edu.ph", "CCIS", "BSIT", "Creator", "Active", "Jan 12, 2026", 28, 24, 3, 1, 4],
  ["u02", "Maria Santos", "msantos@iskolarngbayan.pup.edu.ph", "CAL", "ABELS", "Creator", "Active", "Jan 18, 2026", 19, 14, 2, 0, 5],
  ["u03", "Bianca Reyes", "breyes@iskolarngbayan.pup.edu.ph", "COC", "BA Journalism", "Creator", "Active", "Feb 2, 2026", 34, 29, 1, 0, 7],
  ["u04", "Carlo Dizon", "cdizon@iskolarngbayan.pup.edu.ph", "CE", "BSCE", "Creator", "Suspended", "Feb 5, 2026", 8, 5, 0, 3, 0],
  ["u05", "Lara Aquino", "laquino@iskolarngbayan.pup.edu.ph", "CADBE", "BS Architecture", "Creator", "Active", "Feb 9, 2026", 22, 18, 2, 0, 3],
  ["u06", "Jon Rivera", "jrivera@iskolarngbayan.pup.edu.ph", "CBA", "BSBA Marketing", "Viewer", "Active", "Feb 15, 2026", 3, 2, 0, 0, 1],
  ["u07", "Alyssa Cruz", "acruz@iskolarngbayan.pup.edu.ph", "CAF", "BSA", "Creator", "Pending", "Mar 1, 2026", 6, 2, 4, 0, 0],
  ["u08", "Miguel Torres", "mtorres@iskolarngbayan.pup.edu.ph", "CCIS", "BSCS", "Creator", "Active", "Mar 3, 2026", 31, 26, 1, 0, 6],
  ["u09", "Nina Ramos", "nramos@iskolarngbayan.pup.edu.ph", "CSSD", "BS Psychology", "Viewer", "Active", "Mar 5, 2026", 2, 1, 0, 0, 0],
  ["u10", "Paolo Garcia", "pgarcia@iskolarngbayan.pup.edu.ph", "COED", "BSEd English", "Creator", "Active", "Mar 10, 2026", 17, 12, 2, 1, 2],
  ["u11", "Jasmine Lim", "jlim@iskolarngbayan.pup.edu.ph", "CTHTM", "BS Tourism", "Creator", "Active", "Mar 15, 2026", 14, 10, 1, 0, 2],
  ["u12", "Andre Flores", "aflores@iskolarngbayan.pup.edu.ph", "CPSPA", "BPA", "Creator", "Suspended", "Mar 19, 2026", 5, 3, 0, 2, 0],
  ["u13", "Sam Mercado", "smercado@iskolarngbayan.pup.edu.ph", "CS", "BS Biology", "Viewer", "Active", "Apr 1, 2026", 4, 3, 0, 0, 1],
  ["u14", "Elena Valdez", "evaldez@iskolarngbayan.pup.edu.ph", "CAL", "BA Theater Arts", "Creator", "Active", "Apr 4, 2026", 26, 21, 2, 0, 4],
  ["u15", "Noel Bautista", "nbautista@iskolarngbayan.pup.edu.ph", "ITECH", "Diploma in ICT", "Creator", "Active", "Apr 7, 2026", 11, 8, 1, 0, 1],
  ["u16", "Trisha Manalo", "tmanalo@iskolarngbayan.pup.edu.ph", "CHK", "BPE", "Viewer", "Pending", "Apr 12, 2026", 1, 0, 1, 0, 0],
  ["u17", "Kevin Yu", "kyu@iskolarngbayan.pup.edu.ph", "GS", "MA Communication", "Creator", "Active", "Apr 18, 2026", 9, 7, 1, 0, 2],
  ["u18", "Ira Domingo", "idomingo@iskolarngbayan.pup.edu.ph", "CL", "Juris Doctor", "Viewer", "Active", "May 1, 2026", 0, 0, 0, 0, 0],
  ["u19", "Diane Ocampo", "docampo@iskolarngbayan.pup.edu.ph", "COC", "BA Broadcasting", "Creator", "Active", "May 8, 2026", 20, 16, 2, 0, 3],
  ["u20", "Mark Villanueva", "mvillanueva@iskolarngbayan.pup.edu.ph", "CE", "BSCpE", "Creator", "Active", "May 12, 2026", 13, 9, 2, 1, 1],
] as const;

const initialUsers = seedUsers.map(([id, name, email, college, program, role, status, joined, submissions, approved, pending, reports, recognitions]) => ({
  id, name, email, college, program, role, status: status as UserStatus, joined, submissions, approved, pending, reports, recognitions,
  activity: [`Submitted ${submissions} works`, `${approved} approved portfolio items`, `${reports} reports received`],
  notes: reports ? "Monitor recent reports and review activity." : "No active admin notes.",
}));

const initialModerators = [
  ["m01", "Maria Moderator", "Digital Art", "24 reviews", 132, 18, 6, "Active", "June 18, 2026"],
  ["m02", "Leo Santos", "Reports", "11 reports", 96, 12, 9, "Active", "June 18, 2026"],
  ["m03", "Dana Reyes", "Official Content", "5 reviews", 61, 8, 4, "Away", "June 17, 2026"],
  ["m04", "Erin Cruz", "Photography", "18 reviews", 88, 10, 7, "Active", "June 17, 2026"],
  ["m05", "Miguel Tan", "Events", "9 events", 42, 5, 3, "Active", "June 16, 2026"],
  ["m06", "Nica Ramos", "Music and Performance", "13 reviews", 74, 11, 5, "Active", "June 16, 2026"],
  ["m07", "Jon Lim", "Copyright Review", "7 reports", 58, 4, 6, "Away", "June 14, 2026"],
  ["m08", "Grace Yu", "College Showcases", "15 reviews", 90, 9, 2, "Active", "June 18, 2026"],
  ["m09", "Paolo Ong", "Film", "8 reviews", 35, 3, 1, "Inactive", "June 10, 2026"],
  ["m10", "Ivy Santos", "Writing", "12 reviews", 66, 7, 2, "Active", "June 18, 2026"],
].map(([id, name, area, workload, approved, revisions, open, status, lastActive]) => ({
  id, name, email: `${String(name).toLowerCase().replace(/\s+/g, ".")}@pup.edu.ph`, area, workload, approved, revisions, open, status: status as ModeratorStatus, lastActive,
  contentTypes: "Works, Reports", permissions: "Review, Decide", workloadLimit: "30/week",
}));

const initialReports = Array.from({ length: 12 }, (_, index) => ({
  id: `CC-RPT-2026-${String(31 - index).padStart(4, "0")}`,
  target: ["Digital Sinta", "Abstract Forms", "Campus Frequencies", "Poster Draft"][index % 4],
  reason: ["Stolen work", "Inappropriate content", "Copyright concern", "Harassment"][index % 4],
  status: ["Escalated", "Open", "Under Review", "Resolved"][index % 4],
  priority: ["High", "Medium", "High", "Low"][index % 4],
  owner: ["Unassigned", "Maria", "Leo", "Dana"][index % 4],
}));

const initialFeatured = Array.from({ length: 8 }, (_, index) => ({
  id: `f${index + 1}`,
  title: ["Digital Sinta", "Sta. Mesa After Rain", "Tinig ng Bayan", "Polytechnic Dreams"][index % 4],
  area: ["Featured Works", "Featured Creators", "Official Content", "College Highlights"][index % 4],
  status: index % 3 === 0 ? "Queued" : "Active",
  owner: ["Moderator Team", "Super Admin", "OSA", "CAL"][index % 4],
}));

const initialBadges = [
  "Artwork of the Week", "Creator of the Month", "Campus Highlight", "Event Finalist", "Community Choice",
  "Emerging Creator", "Portfolio Excellence", "Photography Pick", "Official Recognition", "Innovation Badge",
].map((name, index) => ({
  id: `b${index + 1}`, name,
  category: ["Feature", "Achievement", "Event", "Recognition"][index % 4],
  description: `Recognition definition for ${name}.`,
  criteria: "Awarded by moderators or admins after review.",
  icon: ["Award", "Star", "BadgeCheck", "ShieldCheck"][index % 4],
  color: ["Maroon", "Gold", "Green", "Slate"][index % 4],
  visibility: index % 2 ? "Admin only" : "Public",
  status: index === 8 ? "Inactive" : "Active",
}));

const initialAudit = Array.from({ length: 20 }, (_, index) => ({
  id: `a${index + 1}`,
  activity: ["User status changed", "Moderator assignment edited", "Report resolved", "Badge updated", "Settings saved"][index % 5],
  actor: ["Admin One", "System", "Maria Moderator", "Super Admin"][index % 4],
  type: ["Users", "Moderators", "Reports", "Recognitions", "Settings"][index % 5],
  date: `June ${18 - (index % 9)}, 2026`,
  detail: "Mock audit detail for demonstration and review.",
}));

export function SuperAdminPage({ destination, mode, onNavigate }: SuperAdminPageProps) {
  const [users, setUsers] = useState(initialUsers);
  const [moderators, setModerators] = useState(initialModerators);
  const [badges, setBadges] = useState(initialBadges);
  const [reports, setReports] = useState(initialReports);
  const [featured, setFeatured] = useState(initialFeatured);
  const [audit] = useState(initialAudit);
  const [modal, setModal] = useState<ModalState>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [saved, setSaved] = useState(false);
  const [alerts, setAlerts] = useState(["3 reports escalated", "2 moderators at high workload", "Email domain policy pending review", "Audit export queued"]);

  const mobile = mode === "mobile";
  const closeModal = () => setModal(null);

  useEffect(() => {
    if (!modal) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  const content = (
    <AdminContent
      destination={destination === "userDetail" ? "users" : destination}
      mobile={mobile}
      users={users}
      moderators={moderators}
      reports={reports}
      featured={featured}
      badges={badges}
      audit={audit}
      query={query}
      setQuery={setQuery}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
      onNavigate={onNavigate}
      setModal={setModal}
      alerts={alerts}
      setAlerts={setAlerts}
      saved={saved}
      setSaved={setSaved}
    />
  );

  if (mobile) {
    return (
      <div className="mobile-app-screen w-[390px] h-[844px] bg-main-bg font-inter overflow-hidden relative flex flex-col">
        <header className="shrink-0 z-40 bg-dark-surface px-4 py-4 text-white">
          <p className="text-[10px] font-black uppercase tracking-widest text-pup-gold">Super Admin</p>
          <h1 className="text-xl font-black leading-tight">{labels[destination]}</h1>
        </header>
        <main className="flex-1 min-h-0 overflow-y-auto pb-[86px]">{content}</main>
        <MobileAdminNav destination={destination} onNavigate={onNavigate} />
        <AdminModal modal={modal} setModal={setModal} mobile users={users} moderators={moderators} badges={badges} reports={reports} featured={featured} audit={audit} close={closeModal} setUsers={setUsers} setModerators={setModerators} setBadges={setBadges} setReports={setReports} setFeatured={setFeatured} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-main-bg font-inter text-primary-text">
      <aside className="w-[252px] bg-dark-surface text-white flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="p-6">
          <div className="text-pup-gold font-black text-xl leading-tight">Campus Creatives</div>
          <div className="mt-2 inline-flex rounded bg-pup-gold px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-dark-surface">Super Admin</div>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {desktopNav.map((item) => <NavButton key={item} item={item} active={destination === item || (destination === "userDetail" && item === "users")} onNavigate={onNavigate} />)}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card-bg px-8">
          <div>
            <h1 className="text-xl font-black">{labels[destination]}</h1>
            <p className="text-xs font-bold uppercase tracking-wide text-secondary-text">Platform control center</p>
          </div>
          <SearchBox query={query} setQuery={setQuery} />
        </header>
        {content}
      </main>
      <AdminModal modal={modal} setModal={setModal} users={users} moderators={moderators} badges={badges} reports={reports} featured={featured} audit={audit} close={closeModal} setUsers={setUsers} setModerators={setModerators} setBadges={setBadges} setReports={setReports} setFeatured={setFeatured} />
    </div>
  );
}

function AdminContent(props: {
  destination: AdminDestination;
  mobile: boolean;
  users: typeof initialUsers;
  moderators: typeof initialModerators;
  reports: typeof initialReports;
  featured: typeof initialFeatured;
  badges: typeof initialBadges;
  audit: typeof initialAudit;
  query: string;
  setQuery: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  onNavigate: (destination: AdminDestination) => void;
  setModal: (modal: ModalState) => void;
  alerts: string[];
  setAlerts: React.Dispatch<React.SetStateAction<string[]>>;
  saved: boolean;
  setSaved: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { destination, mobile } = props;
  const className = mobile ? "p-4 space-y-4" : "p-8 space-y-8";

  if (destination === "dashboard") return <Dashboard {...props} className={className} />;
  if (destination === "users") return <UsersSection {...props} className={className} />;
  if (destination === "moderators") return <ModeratorsSection {...props} className={className} />;
  if (destination === "reports") return <ReportsSection {...props} className={className} />;
  if (destination === "featured") return <FeaturedSection {...props} className={className} />;
  if (destination === "recognition") return <RecognitionSection {...props} className={className} />;
  if (destination === "settings") return <SettingsSection {...props} className={className} />;
  return <AuditSection {...props} className={className} />;
}

function Dashboard({ className, mobile, onNavigate, alerts, setAlerts, setModal, audit }: any) {
  const stats = [
    ["Users", "12,840", "users"],
    ["Moderators", "28", "moderators"],
    ["Reports", "16", "reports"],
    ["Recognitions", "10", "recognition"],
    ["Featured", "86", "featured"],
    ["Audit Entries", "20", "auditLog"],
  ];
  return (
    <div className={className}>
      <section className={mobile ? "grid grid-cols-2 gap-3" : "grid grid-cols-3 xl:grid-cols-6 gap-4"}>
        {stats.map(([label, value, destination]) => (
          <button key={label} onClick={() => onNavigate(destination)} className="rounded-2xl border border-border bg-card-bg p-4 text-left shadow-sm">
            <p className="text-2xl font-black text-pup-maroon">{value}</p>
            <p className="mt-1 text-[11px] font-black uppercase tracking-wide text-secondary-text">{label}</p>
          </button>
        ))}
      </section>
      <section className={mobile ? "space-y-4" : "grid grid-cols-2 gap-4"}>
        <Panel title="Recent Activity">
          {audit.slice(0, 8).map((entry: any) => (
            <button key={entry.id} onClick={() => setModal({ type: "activity", title: entry.activity, detail: entry.detail })} className="w-full rounded-xl bg-secondary-surface p-3 text-left text-sm font-bold">
              {entry.activity} <span className="text-secondary-text">by {entry.actor}</span>
            </button>
          ))}
        </Panel>
        <Panel title="System Alerts">
          {alerts.map((alert: string) => (
            <div key={alert} className="flex items-center gap-2 rounded-xl bg-secondary-surface p-3 text-sm">
              <AlertTriangle size={16} className="text-status-pending" />
              <span className="flex-1 font-bold">{alert}</span>
              <button onClick={() => setAlerts((items: string[]) => items.filter((item) => item !== alert))} className="text-pup-maroon"><X size={16} /></button>
            </div>
          ))}
        </Panel>
      </section>
    </div>
  );
}

function UsersSection({ className, mobile, users, query, setQuery, statusFilter, setStatusFilter, setModal }: any) {
  const filtered = users.filter((user: any) =>
    (statusFilter === "All" || user.status === statusFilter) &&
    `${user.name} ${user.email} ${user.college}`.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className={className}>
      <SectionHeader title="User Management" subtitle={`${users.length} sample users`} />
      <Filters query={query} setQuery={setQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter} options={["All", "Active", "Suspended", "Pending"]} mobile={mobile} />
      {mobile ? (
        <div className="space-y-3">{filtered.slice(0, 12).map((user: any) => <UserCard key={user.id} user={user} setModal={setModal} />)}</div>
      ) : (
        <DataTable columns={["User", "College", "Status", "Submissions", "Reports", "Actions"]}>
          {filtered.slice(0, 12).map((user: any) => <UserRow key={user.id} user={user} setModal={setModal} />)}
        </DataTable>
      )}
      <p className="text-xs font-bold text-secondary-text">Showing {Math.min(filtered.length, 12)} of {filtered.length}. Search/filter is local.</p>
    </div>
  );
}

function ModeratorsSection({ className, mobile, moderators, query, setQuery, statusFilter, setStatusFilter, setModal }: any) {
  const filtered = moderators.filter((mod: any) =>
    (statusFilter === "All" || mod.status === statusFilter) &&
    `${mod.name} ${mod.area}`.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className={className}>
      <SectionHeader title="Moderator Management" subtitle={`${moderators.length} assigned moderators`} action="Add Moderator" onAction={() => setModal({ type: "moderator-add" })} />
      <Filters query={query} setQuery={setQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter} options={["All", "Active", "Away", "Inactive"]} mobile={mobile} />
      <div className={mobile ? "space-y-3" : "grid grid-cols-2 xl:grid-cols-3 gap-4"}>
        {filtered.map((mod: any) => (
          <article key={mod.id} className="rounded-2xl border border-border bg-card-bg p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <InitialsAvatar name={mod.name} className="h-11 w-11" textClassName="text-xs" />
              <div className="min-w-0 flex-1">
                <h3 className="font-black truncate">{mod.name}</h3>
                <p className="text-xs text-secondary-text">{mod.area}</p>
              </div>
              <StatusChip status={mod.status} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <MiniStat label="Approved" value={mod.approved} />
              <MiniStat label="Revision" value={mod.revisions} />
              <MiniStat label="Open" value={mod.open} />
            </div>
            <p className="mt-3 text-xs text-secondary-text">Workload: {mod.workload} • Last active {mod.lastActive}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button onClick={() => setModal({ type: "moderator-edit", id: mod.id })} className="rounded-xl border border-border py-2 text-xs font-black text-pup-maroon">Edit Assignment</button>
              <button onClick={() => setModal({ type: "moderator-deactivate", id: mod.id })} className="rounded-xl border border-border py-2 text-xs font-black text-status-rejected">Deactivate</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ReportsSection({ className, mobile, reports, query, setQuery, statusFilter, setStatusFilter, setModal }: any) {
  const filtered = reports.filter((report: any) =>
    (statusFilter === "All" || report.status === statusFilter) &&
    `${report.id} ${report.target} ${report.reason}`.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className={className}>
      <SectionHeader title="Reports" subtitle={`${reports.length} moderation reports`} />
      <Filters query={query} setQuery={setQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter} options={["All", "Escalated", "Open", "Under Review", "Resolved"]} mobile={mobile} />
      <RecordGrid mobile={mobile}>{filtered.map((report: any) => <ReportCard key={report.id} report={report} setModal={setModal} />)}</RecordGrid>
    </div>
  );
}

function FeaturedSection({ className, mobile, featured, setModal }: any) {
  return (
    <div className={className}>
      <SectionHeader title="Featured Content" subtitle={`${featured.length} active or queued features`} action="Add Feature" onAction={() => setModal({ type: "featured", id: featured[0].id, action: "Feature" })} />
      <RecordGrid mobile={mobile}>{featured.map((item: any) => <FeatureCard key={item.id} item={item} setModal={setModal} />)}</RecordGrid>
    </div>
  );
}

function RecognitionSection({ className, mobile, badges, setModal }: any) {
  return (
    <div className={className}>
      <SectionHeader title="Recognitions" subtitle={`${badges.length} badge definitions`} action="Add Badge" onAction={() => setModal({ type: "badge-add" })} />
      <RecordGrid mobile={mobile}>{badges.map((badge: any) => <BadgeCard key={badge.id} badge={badge} setModal={setModal} />)}</RecordGrid>
    </div>
  );
}

function SettingsSection({ className, mobile, saved, setSaved }: any) {
  const [settings, setSettings] = useState({ name: "PUP: Campus Creatives", domain: "@iskolarngbayan.pup.edu.ph", visibility: "Public after approval", moderation: true, reports: true });
  return (
    <div className={className}>
      <SectionHeader title="Settings" subtitle="Local mock controls" />
      <section className="rounded-2xl border border-border bg-card-bg p-5 space-y-4">
        <Input label="Platform name" value={settings.name} onChange={(value) => setSettings({ ...settings, name: value })} />
        <Input label="Allowed email domain" value={settings.domain} onChange={(value) => setSettings({ ...settings, domain: value })} />
        <label className="block">
          <span className="mb-1 block text-[11px] font-black uppercase text-secondary-text">Default visibility</span>
          <select value={settings.visibility} onChange={(e) => setSettings({ ...settings, visibility: e.target.value })} className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm">
            <option>Public after approval</option><option>Private by default</option><option>College-only</option>
          </select>
        </label>
        {["moderation", "reports"].map((key) => (
          <label key={key} className="flex items-center justify-between rounded-xl bg-secondary-surface p-3 text-sm font-bold">
            Enable {key}
            <input type="checkbox" checked={(settings as any)[key]} onChange={(e) => setSettings({ ...settings, [key]: e.target.checked })} className="h-5 w-5 accent-pup-maroon" />
          </label>
        ))}
        <button onClick={() => { setSaved(true); window.setTimeout(() => setSaved(false), 1800); }} className="w-full rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">Save Settings</button>
        {saved && <p className="rounded-xl bg-status-approved/10 p-3 text-sm font-bold text-status-approved">Settings saved for this mock session.</p>}
      </section>
    </div>
  );
}

function AuditSection({ className, mobile, audit, query, setQuery, statusFilter, setStatusFilter, setModal }: any) {
  const filtered = audit.filter((entry: any) =>
    (statusFilter === "All" || entry.type === statusFilter) &&
    `${entry.activity} ${entry.actor} ${entry.type}`.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className={className}>
      <SectionHeader title="Audit Log" subtitle={`${audit.length} entries`} />
      <Filters query={query} setQuery={setQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter} options={["All", "Users", "Moderators", "Reports", "Recognitions", "Settings"]} mobile={mobile} />
      <RecordGrid mobile={mobile}>{filtered.map((entry: any) => <AuditCard key={entry.id} entry={entry} setModal={setModal} />)}</RecordGrid>
    </div>
  );
}

function AdminModal(props: any) {
  const { modal, close, mobile } = props;
  if (!modal) return null;
  const title = modalTitle(modal);
  return (
    <div className={`${mobile ? "absolute" : "fixed"} inset-0 z-[160] flex ${mobile ? "items-end" : "items-center justify-center"} bg-black/45`} onClick={close}>
      <div className={`${mobile ? "max-h-[78vh] w-[390px] rounded-t-3xl" : "max-h-[86vh] w-full max-w-3xl rounded-3xl"} overflow-y-auto bg-card-bg p-6 shadow-2xl`} onClick={(e) => e.stopPropagation()}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-xl font-black">{title}</h2>
          <button onClick={close} className="rounded-full bg-secondary-surface p-2"><X size={18} /></button>
        </div>
        <ModalBody {...props} />
      </div>
    </div>
  );
}

function ModalBody(props: any) {
  const { modal, close, users, moderators, badges, reports, featured, audit, setUsers, setModerators, setBadges, setReports, setFeatured } = props;
  if (modal.type === "user") {
    const user = users.find((item: any) => item.id === modal.id);
    return <UserDetail user={user} setModal={props.setModal} close={close} />;
  }
  if (modal.type === "user-confirm") {
    const user = users.find((item: any) => item.id === modal.id);
    return <Confirm text={`${modal.action} ${user.name}?`} detail={modal.action === "Suspend" ? "The user will lose publishing access until restored." : "The user will regain normal account access."} reason action={`Confirm ${modal.action}`} onCancel={close} onConfirm={() => { setUsers(users.map((item: any) => item.id === user.id ? { ...item, status: modal.action === "Suspend" ? "Suspended" : "Active" } : item)); close(); }} />;
  }
  if (modal.type === "moderator-add") return <ModeratorForm onCancel={close} onSubmit={(record: any) => { setModerators([{ ...record, id: `m${Date.now()}`, approved: 0, revisions: 0, open: 0, workload: "0 reviews", lastActive: "New" }, ...moderators]); close(); }} />;
  if (modal.type === "moderator-edit") {
    const mod = moderators.find((item: any) => item.id === modal.id);
    return <ModeratorForm moderator={mod} onCancel={close} onSubmit={(record: any) => { setModerators(moderators.map((item: any) => item.id === mod.id ? { ...item, ...record } : item)); close(); }} />;
  }
  if (modal.type === "moderator-deactivate") {
    const mod = moderators.find((item: any) => item.id === modal.id);
    return <Confirm text={`Deactivate ${mod.name}?`} detail={`Review access for ${mod.area} will be disabled.`} action="Confirm Deactivation" onCancel={close} onConfirm={() => { setModerators(moderators.map((item: any) => item.id === mod.id ? { ...item, status: "Inactive" } : item)); close(); }} />;
  }
  if (modal.type === "badge-add") return <BadgeForm onCancel={close} onSubmit={(badge: any) => { setBadges([{ ...badge, id: `b${Date.now()}` }, ...badges]); close(); }} />;
  if (modal.type === "badge-view" || modal.type === "badge-edit") {
    const badge = badges.find((item: any) => item.id === modal.id);
    return modal.type === "badge-view" ? <Details data={badge} /> : <BadgeForm badge={badge} onCancel={close} onSubmit={(next: any) => { setBadges(badges.map((item: any) => item.id === badge.id ? { ...item, ...next } : item)); close(); }} />;
  }
  if (modal.type === "badge-archive") {
    const badge = badges.find((item: any) => item.id === modal.id);
    return <Confirm text={`Archive ${badge.name}?`} detail="The badge definition will become inactive in this mock session." action="Archive Badge" onCancel={close} onConfirm={() => { setBadges(badges.map((item: any) => item.id === badge.id ? { ...item, status: "Inactive" } : item)); close(); }} />;
  }
  if (modal.type === "report") {
    const report = reports.find((item: any) => item.id === modal.id);
    return <ReportActions report={report} onCancel={close} onAction={(status: string) => { setReports(reports.map((item: any) => item.id === report.id ? { ...item, status } : item)); close(); }} />;
  }
  if (modal.type === "featured") {
    const item = featured.find((entry: any) => entry.id === modal.id);
    return <Confirm text={`${modal.action} ${item.title}?`} detail="This mock action updates local featured content state." action={modal.action} onCancel={close} onConfirm={() => { setFeatured(featured.map((entry: any) => entry.id === item.id ? { ...entry, status: modal.action === "Remove" ? "Removed" : "Active" } : entry)); close(); }} />;
  }
  if (modal.type === "audit") return <Details data={audit.find((item: any) => item.id === modal.id)} />;
  if (modal.type === "activity") return <Details data={{ Activity: modal.title, Detail: modal.detail }} />;
  return null;
}

function modalTitle(modal: Exclude<ModalState, null>) {
  if (modal.type.includes("user")) return "User Details";
  if (modal.type.includes("moderator")) return "Moderator Assignment";
  if (modal.type.includes("badge")) return "Recognition Badge";
  if (modal.type === "report") return "Report Actions";
  if (modal.type === "featured") return "Featured Content";
  return "Details";
}

function UserDetail({ user, setModal }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <InitialsAvatar name={user.name} className="h-16 w-16" textClassName="text-base" />
        <div><h3 className="text-xl font-black">{user.name}</h3><p className="text-sm text-secondary-text">{user.email}</p><StatusChip status={user.status} /></div>
      </div>
      <Details data={{ College: user.college, Program: user.program, Role: user.role, Joined: user.joined, "Total submissions": user.submissions, "Approved works": user.approved, "Pending works": user.pending, "Reports received": user.reports, Recognitions: user.recognitions, Notes: user.notes }} />
      <Panel title="Recent Activity">{user.activity.map((item: string) => <p key={item} className="rounded-xl bg-secondary-surface p-3 text-sm font-bold">{item}</p>)}</Panel>
      <button onClick={() => setModal({ type: "user-confirm", id: user.id, action: user.status === "Suspended" ? "Restore" : "Suspend" })} className={`w-full rounded-xl py-3 text-sm font-black text-white ${user.status === "Suspended" ? "bg-status-approved" : "bg-status-rejected"}`}>
        {user.status === "Suspended" ? "Restore User" : "Suspend User"}
      </button>
    </div>
  );
}

function ModeratorForm({ moderator, onCancel, onSubmit }: any) {
  const [form, setForm] = useState({ name: moderator?.name ?? "", email: moderator?.email ?? "", area: moderator?.area ?? "", contentTypes: moderator?.contentTypes ?? "Works, Reports", workloadLimit: moderator?.workloadLimit ?? "30/week", permissions: moderator?.permissions ?? "Review, Decide", startDate: "", status: moderator?.status ?? "Active" });
  return <FormShell form={form} setForm={setForm} fields={["name", "email", "area", "contentTypes", "workloadLimit", "permissions", "startDate", "status"]} onCancel={onCancel} onSubmit={onSubmit} submitLabel={moderator ? "Save Assignment" : "Add Moderator"} />;
}

function BadgeForm({ badge, onCancel, onSubmit }: any) {
  const [form, setForm] = useState({ name: badge?.name ?? "", category: badge?.category ?? "", description: badge?.description ?? "", criteria: badge?.criteria ?? "", icon: badge?.icon ?? "Award", color: badge?.color ?? "Maroon", visibility: badge?.visibility ?? "Public", status: badge?.status ?? "Active" });
  return <FormShell form={form} setForm={setForm} fields={["name", "category", "description", "criteria", "icon", "color", "visibility", "status"]} onCancel={onCancel} onSubmit={onSubmit} submitLabel={badge ? "Save Badge" : "Add Badge"} />;
}

function FormShell({ form, setForm, fields, onCancel, onSubmit, submitLabel }: any) {
  return (
    <div className="space-y-3">
      {fields.map((field: string) => (
        <Input key={field} label={field.replace(/([A-Z])/g, " $1")} value={form[field]} onChange={(value) => setForm({ ...form, [field]: value })} />
      ))}
      <div className="grid grid-cols-2 gap-2 pt-3">
        <button onClick={onCancel} className="rounded-xl border border-border py-3 font-black">Cancel</button>
        <button onClick={() => onSubmit(form)} className="rounded-xl bg-pup-maroon py-3 font-black text-white">{submitLabel}</button>
      </div>
    </div>
  );
}

function Confirm({ text, detail, action, reason, onCancel, onConfirm }: any) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-black">{text}</p>
      <p className="text-sm text-secondary-text">{detail}</p>
      {reason && <textarea rows={3} className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm" placeholder="Optional mock reason" />}
      <div className="grid grid-cols-2 gap-2">
        <button onClick={onCancel} className="rounded-xl border border-border py-3 font-black">Cancel</button>
        <button onClick={onConfirm} className="rounded-xl bg-pup-maroon py-3 font-black text-white">{action}</button>
      </div>
    </div>
  );
}

function ReportActions({ report, onCancel, onAction }: any) {
  return (
    <div className="space-y-4">
      <Details data={report} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {["Assigned", "Resolved", "Dismissed"].map((action) => <button key={action} onClick={() => onAction(action)} className="rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">{action}</button>)}
      </div>
      <button onClick={onCancel} className="w-full rounded-xl border border-border py-3 font-black">Cancel</button>
    </div>
  );
}

function NavButton({ item, active, onNavigate }: any) {
  const Icon = icons[item as AdminDestination];
  return <button onClick={() => onNavigate(item)} className={`w-full flex items-center gap-3 rounded-lg border-l-4 px-3 py-2.5 text-sm font-bold ${active ? "bg-white/10 text-white border-pup-gold" : "border-transparent text-white/65 hover:bg-white/5 hover:text-white"}`}><Icon size={18} />{labels[item as AdminDestination]}</button>;
}

function MobileAdminNav({ destination, onNavigate }: { destination: AdminDestination; onNavigate: (destination: AdminDestination) => void }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {showMore && <div className="absolute bottom-[72px] left-1/2 z-50 w-[366px] -translate-x-1/2 rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">{mobileMore.map((item) => <button key={item} onClick={() => { setShowMore(false); onNavigate(item); }} className="flex w-full items-center gap-3 border-b border-border px-4 py-3 text-left text-sm font-black last:border-0">{React.createElement(icons[item], { size: 18, className: "text-pup-maroon" })}{labels[item]}</button>)}</div>}
      <nav className="absolute bottom-0 left-0 z-40 flex h-[68px] w-full items-center justify-around border-t border-white/10 bg-dark-surface px-2">
        {mobilePrimary.map((item) => <button key={item} onClick={() => onNavigate(item)} className={`flex min-w-0 flex-1 flex-col items-center gap-1 text-[9px] font-black uppercase ${destination === item ? "text-pup-gold" : "text-white/60"}`}>{React.createElement(icons[item], { size: 20 })}<span>{labels[item]}</span></button>)}
        <button onClick={() => setShowMore((value) => !value)} className={`flex min-w-0 flex-1 flex-col items-center gap-1 text-[9px] font-black uppercase ${mobileMore.includes(destination) ? "text-pup-gold" : "text-white/60"}`}><MoreHorizontal size={20} /><span>More</span></button>
      </nav>
    </>
  );
}

function SectionHeader({ title, subtitle, action, onAction }: any) {
  return <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-black">{title}</h2><p className="mt-1 text-sm text-secondary-text">{subtitle}</p></div>{action && <button onClick={onAction} className="inline-flex items-center justify-center gap-2 rounded-xl bg-pup-maroon px-4 py-3 text-sm font-black text-white"><Plus size={18} />{action}</button>}</section>;
}

function SearchBox({ query, setQuery }: any) {
  return <div className="relative w-80"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" /><input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-full border border-border bg-secondary-surface py-2 pl-9 pr-4 text-sm" placeholder="Search admin records..." /></div>;
}

function Filters({ query, setQuery, statusFilter, setStatusFilter, options, mobile }: any) {
  return <section className={mobile ? "space-y-2" : "flex gap-3"}><input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-xl border border-border bg-card-bg px-4 py-3 text-sm" placeholder="Search..." /><select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="w-full rounded-xl border border-border bg-card-bg px-4 py-3 text-sm">{options.map((option: string) => <option key={option}>{option}</option>)}</select></section>;
}

function DataTable({ columns, children }: any) {
  return <section className="overflow-hidden rounded-2xl border border-border bg-card-bg"><table className="w-full text-left text-sm"><thead className="bg-secondary-surface text-xs font-black uppercase text-secondary-text"><tr>{columns.map((column: string) => <th key={column} className="px-5 py-3">{column}</th>)}</tr></thead><tbody>{children}</tbody></table></section>;
}

function UserRow({ user, setModal }: any) {
  return <tr className="border-t border-border"><td className="px-5 py-4"><div className="flex items-center gap-3"><InitialsAvatar name={user.name} className="h-9 w-9" textClassName="text-[10px]" /><div><p className="font-black">{user.name}</p><p className="text-xs text-secondary-text">{user.email}</p></div></div></td><td className="px-5 py-4">{user.college}<br /><span className="text-xs text-secondary-text">{user.program}</span></td><td className="px-5 py-4"><StatusChip status={user.status} /></td><td className="px-5 py-4">{user.submissions}</td><td className="px-5 py-4">{user.reports}</td><td className="px-5 py-4"><ActionButtons actions={[["View User", () => setModal({ type: "user", id: user.id })], [user.status === "Suspended" ? "Restore" : "Suspend", () => setModal({ type: "user-confirm", id: user.id, action: user.status === "Suspended" ? "Restore" : "Suspend" })]]} /></td></tr>;
}

function UserCard({ user, setModal }: any) {
  return <article className="rounded-2xl border border-border bg-card-bg p-4"><div className="flex items-center gap-3"><InitialsAvatar name={user.name} className="h-11 w-11" textClassName="text-xs" /><div className="min-w-0 flex-1"><h3 className="font-black truncate">{user.name}</h3><p className="truncate text-xs text-secondary-text">{user.email}</p></div><StatusChip status={user.status} /></div><div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs"><MiniStat label="Works" value={user.submissions} /><MiniStat label="Reports" value={user.reports} /><MiniStat label="Awards" value={user.recognitions} /></div><ActionButtons block actions={[["View User", () => setModal({ type: "user", id: user.id })], [user.status === "Suspended" ? "Restore" : "Suspend", () => setModal({ type: "user-confirm", id: user.id, action: user.status === "Suspended" ? "Restore" : "Suspend" })]]} /></article>;
}

function ReportCard({ report, setModal }: any) { return <RecordCard title={report.id} meta={`${report.target} • ${report.reason}`} chip={report.status} actions={[["View Report", () => setModal({ type: "report", id: report.id })], ["Assign/Resolve", () => setModal({ type: "report", id: report.id })]]} />; }
function FeatureCard({ item, setModal }: any) { return <RecordCard title={item.title} meta={`${item.area} • ${item.owner}`} chip={item.status} actions={[["Edit", () => setModal({ type: "featured", id: item.id, action: "Edit" })], ["Remove", () => setModal({ type: "featured", id: item.id, action: "Remove" })]]} />; }
function BadgeCard({ badge, setModal }: any) { return <RecordCard title={badge.name} meta={`${badge.category} • ${badge.visibility}`} chip={badge.status} icon={<BadgeCheck size={18} />} actions={[["View", () => setModal({ type: "badge-view", id: badge.id })], ["Edit", () => setModal({ type: "badge-edit", id: badge.id })], [badge.status === "Active" ? "Archive" : "Activate", () => setModal({ type: "badge-archive", id: badge.id })]]} />; }
function AuditCard({ entry, setModal }: any) { return <RecordCard title={entry.activity} meta={`${entry.actor} • ${entry.type} • ${entry.date}`} chip={entry.type} actions={[["View Details", () => setModal({ type: "audit", id: entry.id })]]} />; }

function RecordCard({ title, meta, chip, actions, icon }: any) {
  return <article className="rounded-2xl border border-border bg-card-bg p-4 shadow-sm"><div className="flex items-start gap-3"><div className="rounded-xl bg-soft-maroon p-2 text-pup-maroon">{icon ?? <FileText size={18} />}</div><div className="min-w-0 flex-1"><h3 className="font-black break-words">{title}</h3><p className="mt-1 text-xs text-secondary-text">{meta}</p></div><StatusChip status={chip} /></div><ActionButtons actions={actions} block /></article>;
}

function ActionButtons({ actions, block }: any) {
  return <div className={`mt-4 flex flex-wrap gap-2 ${block ? "" : "mt-0"}`}>{actions.map(([label, action]: any) => <button key={label} onClick={action} className="rounded-lg border border-border px-3 py-1.5 text-xs font-black text-pup-maroon">{label}</button>)}</div>;
}

function RecordGrid({ mobile, children }: any) { return <section className={mobile ? "space-y-3" : "grid grid-cols-2 xl:grid-cols-3 gap-4"}>{children}</section>; }
function Panel({ title, children }: any) { return <section className="rounded-2xl border border-border bg-card-bg p-5 space-y-3"><h2 className="font-black">{title}</h2>{children}</section>; }
function MiniStat({ label, value }: any) { return <div className="rounded-xl bg-secondary-surface p-2"><p className="font-black text-pup-maroon">{value}</p><p className="text-[9px] font-black uppercase text-secondary-text">{label}</p></div>; }
function StatusChip({ status }: { status: string }) { return <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-black uppercase ${status === "Active" || status === "Resolved" ? "bg-status-approved/10 text-status-approved" : status === "Suspended" || status === "Escalated" || status === "Inactive" || status === "Removed" ? "bg-status-rejected/10 text-status-rejected" : "bg-soft-gold text-warm-gold"}`}>{status}</span>; }
function Details({ data }: any) { return <div className="space-y-2">{Object.entries(data ?? {}).map(([key, value]) => <div key={key} className="flex justify-between gap-4 rounded-xl bg-secondary-surface p-3 text-sm"><span className="font-black uppercase text-secondary-text">{key}</span><span className="min-w-0 text-right font-bold break-words">{String(value)}</span></div>)}</div>; }
function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) { return <label className="block"><span className="mb-1 block text-[11px] font-black uppercase text-secondary-text">{label}</span><input value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-border bg-secondary-surface px-4 py-3 text-sm" /></label>; }
