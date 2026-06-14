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
  Palette,
  CheckCircle,
  ClipboardList,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import './_group.css';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex min-h-screen bg-main-bg font-inter text-primary-text">
      {/* Admin Sidebar */}
      <aside className="w-[240px] bg-dark-surface text-white flex flex-col flex-shrink-0">
        <div className="p-6">
          <div className="text-pup-gold text-xl tracking-tight mb-1">
            <span className="font-bold">PUP:</span>
            <span className="font-medium ml-1 text-sm uppercase tracking-wider text-pup-gold/80">Campus Creatives</span>
          </div>
          <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-pup-gold text-dark-surface mt-2 uppercase">
            Admin
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <NavItem icon={<Users size={18} />} label="Users" active={activeTab === 'Users'} onClick={() => setActiveTab('Users')} />
          <NavItem icon={<Building2 size={18} />} label="Colleges" active={activeTab === 'Colleges'} onClick={() => setActiveTab('Colleges')} />
          <NavItem icon={<Tag size={18} />} label="Categories" active={activeTab === 'Categories'} onClick={() => setActiveTab('Categories')} />
          <NavItem icon={<Calendar size={18} />} label="Events" active={activeTab === 'Events'} onClick={() => setActiveTab('Events')} />
          <NavItem icon={<Award size={18} />} label="Recognition" active={activeTab === 'Recognition'} onClick={() => setActiveTab('Recognition')} />
          <NavItem icon={<Flag size={18} />} label="Reports" active={activeTab === 'Reports'} onClick={() => setActiveTab('Reports')} />
          <NavItem icon={<BarChart3 size={18} />} label="Analytics" active={activeTab === 'Analytics'} onClick={() => setActiveTab('Analytics')} />
          <NavItem icon={<Activity size={18} />} label="Activity Log" active={activeTab === 'Activity Log'} onClick={() => setActiveTab('Activity Log')} />
          <NavItem icon={<Shield size={18} />} label="Roles" active={activeTab === 'Roles'} onClick={() => setActiveTab('Roles')} />
        </nav>

        <div className="p-4 border-t border-white/10 mt-auto">
          <a href="#" className="flex items-center text-sm text-pup-gold hover:text-white transition-colors">
            <span>Switch to Student View</span>
            <ArrowRight size={14} className="ml-2" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card-bg border-b border-border flex items-center justify-between px-6 flex-shrink-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
            <input 
              type="text" 
              placeholder="Search platform records..." 
              className="w-full pl-10 pr-4 py-2 bg-main-bg border border-border rounded-lg text-sm focus:outline-none focus:border-pup-maroon transition-colors"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-secondary-text hover:bg-main-bg rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson-accent rounded-full border-2 border-card-bg"></span>
            </button>
            <div className="h-8 w-px bg-border mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-semibold">System Admin</div>
                <div className="text-[11px] text-secondary-text">Main Office</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-pup-maroon flex items-center justify-center text-white font-bold border-2 border-border shadow-sm">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-main-bg">
          <div className="max-w-[1200px] mx-auto space-y-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-primary-text">System Administration</h1>
              <p className="text-secondary-text mt-1">Manage platform records, academic units, events, users, recognition, and system-wide activity.</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-4 gap-4">
              <StatCard title="Total Users" value="1,284" icon={<Users size={20} />} color="text-status-info" bg="bg-status-info/10" />
              <StatCard title="Active Creators" value="347" icon={<Palette size={20} />} color="text-pup-maroon" bg="bg-soft-maroon" />
              <StatCard title="Approved Works" value="892" icon={<CheckCircle size={20} />} color="text-status-approved" bg="bg-status-approved/10" />
              <StatCard title="Pending Reviews" value="24" icon={<ClipboardList size={20} />} color="text-status-pending" bg="bg-status-pending/10" />
              <StatCard title="Open Events" value="6" icon={<Calendar size={20} />} color="text-warm-gold" bg="bg-soft-gold" />
              <StatCard title="Reports" value="4" icon={<Flag size={20} />} color="text-status-rejected" bg="bg-status-rejected/10" />
              <StatCard title="Colleges" value="16" icon={<Building2 size={20} />} color="text-pup-maroon" bg="bg-soft-maroon" />
              <StatCard title="Categories" value="16" icon={<Tag size={20} />} color="text-pup-maroon" bg="bg-soft-maroon" />
            </div>

            {/* Alert Section */}
            <div className="bg-status-pending/10 border border-status-pending/30 rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-status-pending">
                <AlertTriangle size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-status-pending">System Alert</div>
                <div className="text-sm text-secondary-text">5 events closing in 7 days — Review submission deadlines and moderator assignments.</div>
              </div>
              <button className="text-sm font-medium text-status-pending hover:underline">View Events</button>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column: Creative Works by Category */}
              <div className="bg-card-bg border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold">Creative Works by Category</h3>
                  <button className="text-xs text-pup-maroon font-semibold hover:underline">Full Analytics</button>
                </div>
                <div className="space-y-4">
                  <CategoryBar label="Digital Art" count={142} total={142} />
                  <CategoryBar label="Photography" count={128} total={142} />
                  <CategoryBar label="Visual Art" count={89} total={142} />
                  <CategoryBar label="Graphic Design" count={76} total={142} />
                  <CategoryBar label="Music" count={58} total={142} />
                  <CategoryBar label="Film" count={45} total={142} />
                  <CategoryBar label="Animation" count={34} total={142} />
                  <CategoryBar label="Crafts" count={28} total={142} />
                </div>
              </div>

              {/* Right Column: Activity by College */}
              <div className="bg-card-bg border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold">Activity by College</h3>
                  <button className="text-xs text-pup-maroon font-semibold hover:underline">Manage Colleges</button>
                </div>
                <div className="space-y-4">
                  <CollegeRow rank={1} name="CCIS" count="234 works" />
                  <CollegeRow rank={2} name="CAL" count="187 works" />
                  <CollegeRow rank={3} name="COC" count="156 works" />
                  <CollegeRow rank={4} name="CADBE" count="134 works" />
                  <CollegeRow rank={5} name="CBA" count="89 works" />
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-bold mb-4">User Growth</h3>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold tracking-tight">347</div>
                      <div className="text-sm text-secondary-text">Active creators</div>
                      <div className="text-[12px] text-status-approved font-medium mt-1">+12% from last month</div>
                    </div>
                    {/* CSS Sparkline */}
                    <div className="flex items-end gap-1 h-12">
                      {[15, 25, 20, 35, 30, 45, 40, 55, 50, 65, 60, 80].map((h, i) => (
                        <div key={i} className="w-2 bg-pup-maroon/20 rounded-t-sm" style={{ height: `${h}%` }}>
                          {i === 11 && <div className="w-full h-full bg-pup-maroon rounded-t-sm" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-text mt-4">89 new accounts this month. Platform reach expanded to 4 additional programs.</p>
                </div>
              </div>
            </div>

            {/* Bottom Section: Recent Actions */}
            <div className="bg-card-bg border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold">Recent Administrative Actions</h3>
                <button className="text-xs text-pup-maroon font-semibold hover:underline">View Activity Log</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-secondary-text font-medium">
                      <th className="pb-3 pr-4">Date</th>
                      <th className="pb-3 pr-4">Role</th>
                      <th className="pb-3 pr-4">Action</th>
                      <th className="pb-3 pr-4">Record</th>
                      <th className="pb-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <ActionRow date="June 14" role="Admin" action="Event published" record="PUP Likha 2026" />
                    <ActionRow date="June 13" role="Admin" action="Badge created" record="Rising Creator" />
                    <ActionRow date="June 13" role="Admin" action="Role update" record="User: Juan Torres" />
                    <ActionRow date="June 12" role="Admin" action="Category disabled" record="Fashion and Cosplay" />
                    <ActionRow date="June 12" role="Admin" action="System update" record="Security patch v2.4" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Event Participation */}
            <div className="grid grid-cols-3 gap-4">
              <EventMiniCard title="PUP Likha 2026" entries={89} status="Open" />
              <EventMiniCard title="Guhit Iskolar" entries={67} status="Closing Soon" color="text-status-pending" />
              <EventMiniCard title="Sinta Film Fest" entries={34} status="Open" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
        active 
          ? 'bg-white/10 text-white border-l-4 border-pup-gold' 
          : 'text-white/70 hover:bg-white/5 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({ title, value, icon, color, bg }: { title: string, value: string, icon: React.ReactNode, color: string, bg: string }) {
  return (
    <div className="bg-card-bg border border-border p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2 rounded-lg ${bg} ${color}`}>
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold tracking-tight">{value}</div>
      <div className="text-xs font-medium text-secondary-text mt-0.5">{title}</div>
    </div>
  );
}

function CategoryBar({ label, count, total }: { label: string, count: number, total: number }) {
  const width = (count / total) * 100;
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="font-medium text-primary-text">{label}</span>
        <span className="text-secondary-text font-bold">{count}</span>
      </div>
      <div className="h-2 w-full bg-secondary-surface rounded-full overflow-hidden">
        <div 
          className="h-full bg-pup-maroon rounded-full transition-all duration-1000" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function CollegeRow({ rank, name, count }: { rank: number, name: string, count: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded bg-main-bg border border-border flex items-center justify-center text-[10px] font-bold text-muted-text">
        {rank}
      </div>
      <div className="flex-1 text-sm font-semibold">{name}</div>
      <div className="text-[12px] text-secondary-text">{count}</div>
    </div>
  );
}

function ActionRow({ date, role, action, record }: { date: string, role: string, action: string, record: string }) {
  return (
    <tr>
      <td className="py-3 text-[13px] text-muted-text">{date}</td>
      <td className="py-3">
        <span className="px-2 py-0.5 bg-crimson-accent/10 text-crimson-accent text-[11px] font-bold rounded uppercase">
          {role}
        </span>
      </td>
      <td className="py-3 text-[13px] font-medium">{action}</td>
      <td className="py-3 text-[13px] text-secondary-text">{record}</td>
      <td className="py-3 text-right">
        <button className="text-xs text-pup-maroon hover:underline font-semibold">Details</button>
      </td>
    </tr>
  );
}

function EventMiniCard({ title, entries, status, color = 'text-status-approved' }: { title: string, entries: number, status: string, color?: string }) {
  return (
    <div className="bg-card-bg border border-border p-4 rounded-xl shadow-sm flex items-center justify-between">
      <div>
        <div className="text-sm font-bold truncate max-w-[140px]">{title}</div>
        <div className={`text-[11px] font-semibold ${color} mt-0.5`}>{status}</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold">{entries}</div>
        <div className="text-[10px] text-muted-text uppercase tracking-wider font-bold">Entries</div>
      </div>
    </div>
  );
}
