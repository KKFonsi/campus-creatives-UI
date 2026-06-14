import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Tag, 
  Calendar, 
  Award, 
  Flag, 
  BarChart3, 
  Activity, 
  Shield, 
  Search, 
  Bell, 
  ChevronRight,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw,
  Plus,
  History,
  ShieldCheck,
  MoreVertical
} from 'lucide-react';
import './_group.css';

export default function ActivityLogPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const activities = [
    { id: 1, date: "June 14, 2026", time: "9:21 AM", user: "Maria Moderator", role: "Moderator", action: "Approved", type: "Submission", record: "Campus Frequencies", change: "Pending → Approved", color: "text-status-approved" },
    { id: 2, date: "June 14, 2026", time: "9:00 AM", user: "System Admin", role: "Admin", action: "Published", type: "Event", record: "PUP Likha 2026", change: "Draft → Published", color: "text-status-approved" },
    { id: 3, date: "June 13, 2026", time: "4:12 PM", user: "Carlos Moderator", role: "Moderator", action: "Rejected", type: "Submission", record: "Abstract Forms 3", change: "Pending → Rejected", color: "text-status-rejected" },
    { id: 4, date: "June 13, 2026", time: "3:30 PM", user: "System Admin", role: "Admin", action: "Created", type: "Badge", record: "Rising Creator", change: "—", color: "text-pup-maroon" },
    { id: 5, date: "June 13, 2026", time: "2:00 PM", user: "System Admin", role: "Admin", action: "Updated", type: "College", record: "CCIS", change: "Description updated", color: "text-secondary-text" },
    { id: 6, date: "June 13, 2026", time: "11:00 AM", user: "Carlos Moderator", role: "Moderator", action: "Resolved", type: "Report", record: "CC-RPT-0019", change: "Open → Resolved", color: "text-teal-600" },
    { id: 7, date: "June 12, 2026", time: "4:50 PM", user: "System Admin", role: "Admin", action: "Disabled", type: "Category", record: "Fashion and Cosplay", change: "Active → Disabled", color: "text-status-pending" },
    { id: 8, date: "June 12, 2026", time: "3:15 PM", user: "System Admin", role: "Admin", action: "Role Changed", type: "User", record: "Juan Torres", change: "Creator → Restricted", color: "text-orange-600" },
    { id: 9, date: "June 12, 2026", time: "1:20 PM", user: "Maria Moderator", role: "Moderator", action: "Featured", type: "Submission", record: "Digital Sinta", change: "Approved → Featured", color: "text-pup-gold" },
    { id: 10, date: "June 11, 2026", time: "10:45 AM", user: "System Admin", role: "Admin", action: "Restricted", type: "User", record: "Marco Velasco", change: "Active → Restricted", color: "text-orange-600" },
    { id: 11, date: "June 11, 2026", time: "9:30 AM", user: "Carlos Moderator", role: "Moderator", action: "Resolved", type: "Report", record: "CC-RPT-0015", change: "Under Review → Resolved", color: "text-teal-600" },
    { id: 12, date: "June 10, 2026", time: "4:15 PM", user: "System Admin", role: "Admin", action: "Updated", type: "Event", record: "Sinta Film Fest", change: "Deadline extended", color: "text-secondary-text" },
    { id: 13, date: "June 10, 2026", time: "2:10 PM", user: "Maria Moderator", role: "Moderator", action: "Revision Requested", type: "Submission", record: "Railway Sketches", change: "Pending → Needs Revision", color: "text-status-needs-revision" },
    { id: 14, date: "June 10, 2026", time: "11:00 AM", user: "System Admin", role: "Admin", action: "Published", type: "Announcement", record: "Maintenance Notice", change: "Scheduled → Published", color: "text-status-approved" },
    { id: 15, date: "June 09, 2026", time: "5:00 PM", user: "System Admin", role: "Admin", action: "Updated", type: "Permission", record: "Moderator Role", change: "Reports permission updated", color: "text-secondary-text" },
    { id: 16, date: "June 09, 2026", time: "2:30 PM", user: "Carlos Moderator", role: "Moderator", action: "Approved", type: "Submission", record: "Tinig ng Bayan", change: "Pending → Approved", color: "text-status-approved" },
    { id: 17, date: "June 09, 2026", time: "10:15 AM", user: "System Admin", role: "Admin", action: "Created", type: "Category", record: "Generative Art", change: "—", color: "text-pup-maroon" },
    { id: 18, date: "June 08, 2026", time: "3:45 PM", user: "Maria Moderator", role: "Moderator", action: "Escalated", type: "Report", record: "CC-RPT-0012", change: "Open → Escalated", color: "text-crimson-accent" },
    { id: 19, date: "June 08, 2026", time: "1:00 PM", user: "System Admin", role: "Admin", action: "Updated", type: "College", record: "CAL", change: "Representative updated", color: "text-secondary-text" },
    { id: 20, date: "June 08, 2026", time: "9:20 AM", user: "System Admin", role: "Admin", action: "Resolved", type: "System", record: "Backup Job", change: "Completed successfully", color: "text-status-approved" }
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      {/* Admin Sidebar */}
      <aside className="w-[240px] bg-dark-surface text-white flex flex-col shrink-0">
        <div className="p-6">
          <div className="text-pup-gold text-xl tracking-tight mb-1">
            <span className="font-bold">PUP:</span>
            <span className="font-medium"> Campus Creatives</span>
          </div>
          <div className="inline-block px-2 py-0.5 bg-pup-gold/20 rounded text-[10px] font-bold text-pup-gold tracking-wider">
            ADMIN
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem icon={<Users size={20} />} label="Users" />
          <NavItem icon={<Building2 size={20} />} label="Colleges" />
          <NavItem icon={<Tag size={20} />} label="Categories" />
          <NavItem icon={<Calendar size={20} />} label="Events" />
          <NavItem icon={<Award size={20} />} label="Recognition" />
          <NavItem icon={<Flag size={20} />} label="Reports" />
          <NavItem icon={<BarChart3 size={20} />} label="Analytics" />
          <NavItem icon={<Activity size={20} />} label="Activity Log" active />
          <NavItem icon={<Shield size={20} />} label="Roles" />
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <span>Switch to Student View</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card-bg border-b border-border flex items-center justify-between px-6 shrink-0">
          <h2 className="text-lg font-bold text-primary-text tracking-tight">System Activity Log</h2>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text group-focus-within:text-pup-maroon transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search log entries..." 
                className="pl-10 pr-4 py-2 bg-main-bg border border-border rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 transition-all"
              />
            </div>
            <button className="p-2 text-secondary-text hover:bg-secondary-surface rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pup-maroon rounded-full border-2 border-card-bg"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <div className="text-right">
                <div className="text-sm font-bold text-primary-text">Admin One</div>
                <div className="text-[11px] text-muted-text font-medium uppercase tracking-wider">System Admin</div>
              </div>
              <div className="w-9 h-9 bg-pup-maroon rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-sm">
                A1
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-main-bg">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary-text">Security & Audit Log</h1>
                <p className="text-secondary-text mt-1 text-lg">A full record of administrative and moderator actions across the platform.</p>
              </div>
              <button disabled className="px-5 py-2 border-2 border-border rounded-xl text-sm font-bold text-muted-text flex items-center gap-2 cursor-not-allowed">
                <Download size={18} />
                Export (Phase 5)
              </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-card-bg border border-border rounded-2xl p-4 shadow-sm flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm font-bold text-primary-text pr-2 border-r border-border mr-2">
                <Filter size={18} className="text-pup-maroon" />
                Filters
              </div>
              <select className="px-4 py-2 bg-main-bg border border-border rounded-lg text-xs font-bold focus:outline-none focus:ring-2 focus:ring-pup-maroon/20">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Moderator</option>
                <option>System</option>
              </select>
              <select className="px-4 py-2 bg-main-bg border border-border rounded-lg text-xs font-bold focus:outline-none focus:ring-2 focus:ring-pup-maroon/20">
                <option>All Action Types</option>
                <option>Create</option>
                <option>Update</option>
                <option>Delete</option>
                <option>Status Change</option>
                <option>Role Change</option>
              </select>
              <select className="px-4 py-2 bg-main-bg border border-border rounded-lg text-xs font-bold focus:outline-none focus:ring-2 focus:ring-pup-maroon/20">
                <option>All Record Types</option>
                <option>Submission</option>
                <option>User</option>
                <option>Event</option>
                <option>College</option>
                <option>Category</option>
                <option>Report</option>
              </select>
              <div className="flex items-center gap-2 px-4 py-2 bg-main-bg border border-border rounded-lg text-xs font-bold text-secondary-text">
                <Calendar size={14} />
                June 08, 2026 - June 14, 2026
              </div>
              <button className="text-xs font-bold text-pup-maroon hover:underline ml-auto">Clear Filters</button>
            </div>

            {/* Log Table */}
            <div className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary-surface/50 border-b border-border">
                    <th className="px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider">Date / Time</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider">Action</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider">Record Type</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider">Record Name</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider text-right">View</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((item) => (
                    <React.Fragment key={item.id}>
                      <tr 
                        className={`border-b border-border last:border-0 hover:bg-secondary-surface transition-colors cursor-pointer ${expandedId === item.id ? 'bg-secondary-surface' : ''}`}
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      >
                        <td className="px-6 py-4">
                          <div className="text-sm font-bold text-primary-text">{item.time}</div>
                          <div className="text-[11px] text-muted-text">{item.date}</div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-primary-text">
                          {item.user}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            item.role === 'Admin' ? 'bg-crimson-accent/10 text-crimson-accent' : 
                            item.role === 'Moderator' ? 'bg-status-pending/10 text-status-pending' : 
                            'bg-muted-text/10 text-muted-text'
                          }`}>
                            {item.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-bold ${item.color}`}>
                            {item.action}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-secondary-text">
                          {item.type}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-primary-text">
                          {item.record}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 text-muted-text hover:text-pup-maroon transition-colors">
                            <Eye size={18} />
                          </button>
                        </td>
                      </tr>
                      {expandedId === item.id && (
                        <tr className="bg-main-bg/50 border-b border-border">
                          <td colSpan={7} className="px-6 py-6">
                            <div className="grid grid-cols-3 gap-8">
                               <div>
                                  <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider mb-2">Change details</div>
                                  <div className="text-sm font-medium text-primary-text bg-card-bg border border-border rounded-xl p-3">
                                     {item.change}
                                  </div>
                               </div>
                               <div>
                                  <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider mb-2">Metadata</div>
                                  <div className="space-y-1 text-xs text-secondary-text">
                                     <div>IP Address: 192.168.1.10{item.id}</div>
                                     <div>User Agent: Chrome 125.0.0.0 (Macintosh)</div>
                                     <div>Request ID: CC-REQ-{(1000 + item.id)}</div>
                                  </div>
                               </div>
                               <div className="flex flex-col justify-end items-end gap-3">
                                  <button className="px-4 py-2 bg-pup-maroon text-white rounded-lg text-xs font-bold hover:bg-deep-maroon transition-all">
                                    View Related Record
                                  </button>
                                  <button className="px-4 py-2 border border-border rounded-lg text-xs font-bold text-primary-text hover:bg-secondary-surface transition-all">
                                    View User Activity
                                  </button>
                               </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 bg-card-bg border border-border rounded-2xl shadow-sm">
              <div className="text-sm text-secondary-text">
                Showing <span className="font-bold text-primary-text">1-20</span> of <span className="font-bold text-primary-text">245</span> entries
              </div>
              <div className="flex items-center gap-2">
                <button disabled className="p-2 border border-border rounded-lg text-muted-text bg-secondary-surface cursor-not-allowed">
                  <ChevronRight size={18} className="rotate-180" />
                </button>
                <div className="flex items-center gap-1">
                   <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-pup-maroon text-white text-sm font-bold shadow-md shadow-pup-maroon/20">1</button>
                   <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary-surface text-sm font-bold text-secondary-text">2</button>
                   <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary-surface text-sm font-bold text-secondary-text">3</button>
                   <span className="px-2 text-muted-text">...</span>
                   <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary-surface text-sm font-bold text-secondary-text">12</button>
                </div>
                <button className="p-2 border border-border rounded-lg text-primary-text hover:bg-secondary-surface transition-all">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div 
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
        active 
          ? 'bg-white/10 text-white' 
          : 'text-white/60 hover:text-white hover:bg-white/5'
      }`}
    >
      <span className={active ? 'text-pup-gold' : ''}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
