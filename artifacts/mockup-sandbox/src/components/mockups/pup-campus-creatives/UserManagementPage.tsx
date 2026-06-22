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
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import './_group.css';

export default function UserManagementPage() {
  const [activeTab, setActiveTab] = useState('All Users');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const toggleSelectUser = (id: number) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(uid => uid !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const users = [
    { id: 1, name: "Rafael Mendoza", email: "2022-00001@iskolar.pup.edu.ph", college: "CCIS", role: "Creator", status: "Active", works: 24, joined: "Mar 2022" },
    { id: 2, name: "Bianca Reyes", email: "2023-00045@iskolar.pup.edu.ph", college: "COC", role: "Creator", status: "Active", works: 18, joined: "Aug 2023" },
    { id: 3, name: "Maria Santos", email: "2021-00234@iskolar.pup.edu.ph", college: "CAL", role: "Creator", status: "Active", works: 31, joined: "Jan 2021" },
    { id: 4, name: "Carlos Lim", email: "moderator01@pup.edu.ph", college: "CCIS", role: "Moderator", status: "Active", works: "—", joined: "Sep 2024" },
    { id: 5, name: "Ana Cruz", email: "2022-00892@iskolar.pup.edu.ph", college: "CCIS", role: "Creator", status: "Active", works: 8, joined: "Mar 2022" },
    { id: 6, name: "Ben Santos", email: "2023-00178@iskolar.pup.edu.ph", college: "CAL", role: "Student", status: "Active", works: 0, joined: "Aug 2023" },
    { id: 7, name: "Lara Diaz", email: "2021-00567@iskolar.pup.edu.ph", college: "CADBE", role: "Creator", status: "Active", works: 15, joined: "Jan 2021" },
    { id: 8, name: "Juan Torres", email: "2020-00123@iskolar.pup.edu.ph", college: "CBA", role: "Creator", status: "Restricted", works: 5, joined: "Jun 2020" },
    { id: 9, name: "Eva Reyes", email: "2024-00045@iskolar.pup.edu.ph", college: "CE", role: "Student", status: "Pending", works: 0, joined: "Jan 2024" },
    { id: 10, name: "Marco Velasco", email: "2022-00634@iskolar.pup.edu.ph", college: "COC", role: "Creator", status: "Active", works: 12, joined: "Mar 2022" },
  ];

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
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" onClick={() => {}} />
          <NavItem icon={<Users size={18} />} label="Users" active={true} onClick={() => {}} />
          <NavItem icon={<Building2 size={18} />} label="Colleges" onClick={() => {}} />
          <NavItem icon={<Tag size={18} />} label="Categories" onClick={() => {}} />
          <NavItem icon={<Calendar size={18} />} label="Events" onClick={() => {}} />
          <NavItem icon={<Award size={18} />} label="Recognition" onClick={() => {}} />
          <NavItem icon={<Flag size={18} />} label="Reports" onClick={() => {}} />
          <NavItem icon={<BarChart3 size={18} />} label="Analytics" onClick={() => {}} />
          <NavItem icon={<Activity size={18} />} label="Activity Log" onClick={() => {}} />
          <NavItem icon={<Shield size={18} />} label="Roles" onClick={() => {}} />
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
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold tracking-tight">User Management</h1>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-sm text-secondary-text">1,284 total accounts</div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-secondary-text hover:bg-main-bg rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson-accent rounded-full border-2 border-card-bg"></span>
            </button>
            <div className="h-8 w-px bg-border mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pup-maroon flex items-center justify-center text-white font-bold text-xs border border-border shadow-sm">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-main-bg">
          <div className="max-w-[1200px] mx-auto space-y-6">
            
            {/* Tabs */}
            <div className="flex items-center border-b border-border gap-8">
              {['All Users (1,284)', 'Students (937)', 'Creators (347)', 'Moderators (8)', 'College Reps (16)', 'Admins (3)', 'Restricted (4)'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-semibold transition-all relative ${
                    activeTab === tab ? 'text-pup-maroon' : 'text-secondary-text hover:text-primary-text'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pup-maroon" />}
                </button>
              ))}
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
                <input 
                  type="text" 
                  placeholder="Search by name, email, or student number..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-card-bg border border-border rounded-xl text-sm focus:outline-none focus:border-pup-maroon transition-colors"
                />
              </div>
              <FilterSelect label="Role" options={['All Roles', 'Student', 'Creator', 'Moderator', 'Admin']} />
              <FilterSelect label="College" options={['All Colleges', 'CCIS', 'CAL', 'COC', 'CADBE', 'CBA']} />
              <FilterSelect label="Status" options={['All Status', 'Active', 'Restricted', 'Pending']} />
              <button className="px-4 py-2.5 bg-card-bg border border-border rounded-xl text-sm font-semibold text-primary-text hover:bg-secondary-surface transition-colors flex items-center gap-2">
                More Filters
              </button>
            </div>

            {/* Data Table */}
            <div className="bg-card-bg border border-border rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary-surface/30 text-secondary-text font-semibold">
                  <tr>
                    <th className="px-6 py-4 w-12">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-border text-pup-maroon focus:ring-pup-maroon/30 accent-pup-maroon"
                        onChange={(e) => {
                          if (e.target.checked) setSelectedUsers(users.map(u => u.id));
                          else setSelectedUsers([]);
                        }}
                        checked={selectedUsers.length === users.length}
                      />
                    </th>
                    <th className="px-6 py-4">User</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">College</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Works</th>
                    <th className="px-6 py-4">Joined</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-main-bg/50 transition-colors group">
                      <td className="px-6 py-4">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-border text-pup-maroon focus:ring-pup-maroon/30 accent-pup-maroon"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => toggleSelectUser(user.id)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary-surface flex items-center justify-center font-bold text-xs border border-border">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-semibold text-primary-text">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-secondary-text">{user.email}</td>
                      <td className="px-6 py-4 font-medium">{user.college}</td>
                      <td className="px-6 py-4">
                        <RoleBadge role={user.role} />
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="px-6 py-4 text-secondary-text">{user.works}</td>
                      <td className="px-6 py-4 text-secondary-text">{user.joined}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="px-3 py-1.5 text-[12px] font-bold text-pup-maroon hover:bg-soft-maroon rounded-lg transition-colors border border-transparent hover:border-pup-maroon/20">
                            View
                          </button>
                          <button className="p-1.5 text-muted-text hover:text-primary-text hover:bg-main-bg rounded-lg">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-border bg-secondary-surface/10 flex items-center justify-between">
                <div className="text-sm text-secondary-text">
                  Showing <span className="font-semibold text-primary-text">1–10</span> of <span className="font-semibold text-primary-text">1,284</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 border border-border rounded-lg text-muted-text disabled:opacity-50" disabled>
                    <ChevronLeft size={18} />
                  </button>
                  <button className="px-3 py-1 bg-pup-maroon text-white font-bold rounded-lg text-sm">1</button>
                  <button className="px-3 py-1 text-secondary-text font-semibold hover:bg-main-bg rounded-lg text-sm transition-colors">2</button>
                  <button className="px-3 py-1 text-secondary-text font-semibold hover:bg-main-bg rounded-lg text-sm transition-colors">3</button>
                  <span className="text-secondary-text">...</span>
                  <button className="px-3 py-1 text-secondary-text font-semibold hover:bg-main-bg rounded-lg text-sm transition-colors">129</button>
                  <button className="p-2 border border-border rounded-lg text-primary-text hover:bg-main-bg transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
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

function FilterSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <select defaultValue="" className="px-4 py-2.5 bg-card-bg border border-border rounded-xl text-sm font-medium focus:outline-none focus:border-pup-maroon transition-colors cursor-pointer min-w-[140px]">
      <option value="" disabled>{label}</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    'Creator': 'bg-soft-maroon text-pup-maroon border-pup-maroon/20',
    'Moderator': 'bg-soft-gold text-warm-gold border-pup-gold/30',
    'Admin': 'bg-crimson-accent/10 text-crimson-accent border-crimson-accent/20',
    'Student': 'bg-main-bg text-secondary-text border-border'
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${styles[role] || styles['Student']}`}>
      {role}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Active': 'bg-status-approved/10 text-status-approved',
    'Restricted': 'bg-status-rejected/10 text-status-rejected',
    'Pending': 'bg-status-pending/10 text-status-pending'
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${styles[status]}`}>
      {status}
    </span>
  );
}
