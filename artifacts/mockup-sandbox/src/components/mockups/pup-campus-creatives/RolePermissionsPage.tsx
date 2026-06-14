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
  CheckCircle,
  Minus,
  AlertTriangle,
  X,
  ShieldCheck,
  Lock,
  Info
} from 'lucide-react';
import './_group.css';

export default function RolePermissionsPage() {
  const [showEditModal, setShowEditModal] = useState(false);

  const permissions = [
    "View Public Content",
    "Submit Work",
    "Manage Own Portfolio",
    "Create Official Posts",
    "Create Events",
    "Review Submissions",
    "Manage Reports",
    "Feature Works",
    "Manage Users",
    "Manage Colleges",
    "Manage Categories",
    "View Analytics",
    "Manage Roles"
  ];

  const roles = [
    { name: "Guest", access: [true, false, false, false, false, false, false, false, false, false, false, false, false] },
    { name: "Student", access: [true, true, false, false, false, false, false, false, false, false, false, false, false] },
    { name: "Creator", access: [true, true, true, false, false, false, false, false, false, false, false, false, false] },
    { name: "College Rep", access: [true, "limited", true, true, "limited", false, false, false, false, false, false, "limited", false] },
    { name: "Moderator", access: [true, false, false, false, false, true, true, true, false, false, false, "limited", false] },
    { name: "Org Admin", access: [true, false, false, true, true, false, false, false, false, false, false, false, false] },
    { name: "System Admin", access: [true, true, true, true, true, true, true, true, true, true, true, true, true] }
  ];

  const renderStatus = (val: boolean | string) => {
    if (val === true) return <CheckCircle className="text-status-approved mx-auto" size={20} />;
    if (val === false) return <Minus className="text-muted-text/30 mx-auto" size={20} />;
    if (val === "limited") return (
      <div className="flex justify-center">
        <span className="px-2 py-0.5 bg-status-pending/10 text-status-pending text-[10px] font-bold uppercase rounded border border-status-pending/20">
          Limited*
        </span>
      </div>
    );
    return null;
  };

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
          <NavItem icon={<Activity size={20} />} label="Activity Log" />
          <NavItem icon={<Shield size={20} />} label="Roles" active />
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
          <h2 className="text-lg font-bold text-primary-text tracking-tight">Roles & Permissions</h2>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text group-focus-within:text-pup-maroon transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search permissions..." 
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
                <h1 className="text-3xl font-bold tracking-tight text-primary-text">Access Control</h1>
                <p className="text-secondary-text mt-1 text-lg">Define and manage the capabilities for each user role in the system.</p>
              </div>
              <button 
                onClick={() => setShowEditModal(true)}
                className="px-6 py-2.5 bg-pup-maroon text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20"
              >
                <Lock size={18} />
                Edit Role
              </button>
            </div>

            <div className="bg-status-pending/5 border border-status-pending/20 rounded-2xl p-4 flex gap-4">
              <AlertTriangle className="text-status-pending shrink-0" size={24} />
              <div>
                <h4 className="text-sm font-bold text-status-pending uppercase tracking-wide">Caution: Global Impact</h4>
                <p className="text-sm text-secondary-text mt-1">Role changes affect access across Campus Creatives. Changes take effect immediately for all users assigned to that role. Proceed with care when modifying permissions.</p>
              </div>
            </div>

            {/* Permission Matrix */}
            <div className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="bg-secondary-surface border-b border-border">
                      <th className="sticky left-0 bg-secondary-surface z-10 px-6 py-4 text-[11px] font-bold text-muted-text uppercase tracking-wider w-[240px] border-r border-border/50">Permission</th>
                      {roles.map((role) => (
                        <th key={role.name} className="px-6 py-4 text-[11px] font-bold text-primary-text uppercase tracking-wider text-center border-r border-border/50 last:border-0">
                          {role.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {permissions.map((perm, pIdx) => (
                      <tr key={perm} className="border-b border-border last:border-0 hover:bg-secondary-surface transition-colors">
                        <td className="sticky left-0 bg-card-bg group-hover:bg-secondary-surface z-10 px-6 py-4 text-sm font-bold text-primary-text border-r border-border/50">
                          {perm}
                        </td>
                        {roles.map((role, rIdx) => (
                          <td key={`${role.name}-${pIdx}`} className="px-6 py-4 text-center border-r border-border/50 last:border-0">
                            {renderStatus(role.access[pIdx])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-secondary-text italic px-4">
              <Info size={14} className="mt-0.5" />
              <span>*Limited access usually applies to specific colleges, sub-categories, or time-bound events only. Detailed scope is configured within the role's advanced settings.</span>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Role Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-surface/60 backdrop-blur-sm">
          <div className="bg-card-bg rounded-2xl w-full max-w-2xl shadow-2xl border border-border animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-pup-maroon/10 flex items-center justify-center text-pup-maroon">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-primary-text">Edit Role — Moderator</h3>
                    <p className="text-xs text-muted-text font-medium uppercase tracking-wider">Configure platform access</p>
                 </div>
              </div>
              <button 
                onClick={() => setShowEditModal(false)}
                className="p-2 hover:bg-secondary-surface rounded-full transition-colors"
              >
                <X size={20} className="text-secondary-text" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6">
               <div className="p-4 bg-status-rejected/5 border border-status-rejected/10 rounded-xl flex gap-3">
                  <AlertTriangle className="text-status-rejected shrink-0" size={20} />
                  <p className="text-xs text-secondary-text">Modifying core permissions for the <strong>Moderator</strong> role will affect 8 active users. High-risk permissions are marked with a lock icon.</p>
               </div>

               <div className="space-y-1.5 mb-6">
                  <label className="text-[11px] font-bold text-muted-text uppercase tracking-wider">Role Name</label>
                  <input 
                    type="text" 
                    defaultValue="Moderator"
                    disabled
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-main-bg text-secondary-text font-bold cursor-not-allowed"
                  />
               </div>

               <div className="space-y-4">
                  <label className="text-[11px] font-bold text-muted-text uppercase tracking-wider block border-b border-border pb-2">Permissions</label>
                  <div className="grid grid-cols-1 gap-3">
                     {permissions.map((perm, idx) => {
                       const isGranted = roles[4].access[idx] === true || roles[4].access[idx] === "limited";
                       return (
                        <div key={perm} className="flex items-center justify-between p-3 rounded-xl border border-border hover:bg-main-bg transition-colors">
                           <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isGranted ? 'bg-status-approved/10 text-status-approved' : 'bg-muted-text/10 text-muted-text'}`}>
                                 {isGranted ? <CheckCircle size={16} /> : <Minus size={16} />}
                              </div>
                              <span className="text-sm font-medium text-primary-text">{perm}</span>
                              {idx >= 8 && <Lock size={12} className="text-status-rejected" />}
                           </div>
                           <button className={`w-11 h-6 rounded-full relative transition-all ${isGranted ? 'bg-pup-maroon' : 'bg-border'}`}>
                              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isGranted ? 'right-1' : 'left-1'}`}></div>
                           </button>
                        </div>
                       );
                     })}
                  </div>
               </div>
            </div>

            <div className="p-6 border-t border-border flex gap-3 bg-secondary-surface/30">
              <button 
                onClick={() => setShowEditModal(false)}
                className="flex-1 py-3 border-2 border-border rounded-xl text-sm font-bold text-primary-text hover:bg-white transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowEditModal(false)}
                className="flex-1 py-3 bg-pup-maroon text-white rounded-xl text-sm font-bold hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20"
              >
                Save Role Changes
              </button>
            </div>
          </div>
        </div>
      )}
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
