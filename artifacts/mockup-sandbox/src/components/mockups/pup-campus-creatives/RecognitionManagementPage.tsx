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
  Star,
  Crown,
  Trophy,
  TrendingUp,
  Shield as ShieldIcon,
  MapPin,
  RefreshCw,
  Layers,
  Heart,
  Medal,
  Users as UsersIcon,
  Plus,
  X,
  Palette
} from 'lucide-react';
import './_group.css';

export default function RecognitionManagementPage() {
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [editingBadge, setEditingBadge] = useState<any>(null);

  const badges = [
    { name: "Artwork of the Week", icon: <Star />, color: "gold", desc: "Recognized as the most outstanding submission of the week.", criteria: "Moderator nomination", count: 42, active: true },
    { name: "Creator of the Month", icon: <Crown />, color: "gold", desc: "Awarded to creators with consistently high-quality works.", criteria: "Platform engagement + Quality", count: 12, active: true },
    { name: "Moderator's Pick", icon: <ShieldIcon />, color: "maroon", desc: "Personally selected by moderators for exceptional creativity.", criteria: "Direct moderator selection", count: 86, active: true },
    { name: "College Highlight", icon: <Building2 />, color: "gold", desc: "Top work representing their specific college.", criteria: "Best in college category", count: 156, active: true },
    { name: "Rising Creator", icon: <TrendingUp />, color: "gold", desc: "Awarded to creators with 3+ approved works in their first semester.", criteria: "3+ works in first semester", count: 245, active: true },
    { name: "Event Finalist", icon: <Trophy />, color: "maroon", desc: "Selected as a finalist in a major campus competition.", criteria: "Competition finalist", count: 64, active: true },
    { name: "Showcase Winner", icon: <Trophy />, color: "gold", desc: "First place winner in an official creative showcase.", criteria: "1st place in showcase", count: 18, active: true },
    { name: "Community Choice", icon: <Heart />, color: "maroon", desc: "Most appreciated work by students during an event.", criteria: "Highest appreciation count", count: 32, active: true },
    { name: "Best Event Entry", icon: <Medal />, color: "gold", desc: "Awarded for exceptional performance in specific event categories.", criteria: "Category winner", count: 54, active: true },
    { name: "Campus Highlight", icon: <MapPin />, color: "maroon", desc: "Works that best capture the PUP campus experience.", criteria: "Campus theme excellence", count: 29, active: true },
    { name: "Consistent Creator", icon: <RefreshCw />, color: "maroon", desc: "Maintained active submission status for two semesters.", criteria: "Long-term active status", count: 112, active: true },
    { name: "Multi-Talent Creator", icon: <Layers />, color: "gold", desc: "Approved works in 3 or more distinct creative categories.", criteria: "3+ categories explored", count: 47, active: true },
    { name: "Community Supporter", icon: <UsersIcon />, color: "maroon", desc: "Recognized for constructive feedback and support of others.", criteria: "Positive community engagement", count: 38, active: false }
  ];

  const handleEdit = (badge: any) => {
    setEditingBadge(badge);
    setShowBadgeModal(true);
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
          <NavItem icon={<Award size={20} />} label="Recognition" active />
          <NavItem icon={<Flag size={20} />} label="Reports" />
          <NavItem icon={<BarChart3 size={20} />} label="Analytics" />
          <NavItem icon={<Activity size={20} />} label="Activity Log" />
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
          <h2 className="text-lg font-bold text-primary-text tracking-tight">System Administration</h2>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text group-focus-within:text-pup-maroon transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search badges..." 
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
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary-text">Recognition and Badges</h1>
                <p className="text-secondary-text mt-1 text-lg">Manage how student contributions are acknowledged on Campus Creatives.</p>
              </div>
              <button 
                onClick={() => { setEditingBadge(null); setShowBadgeModal(true); }}
                className="px-6 py-2.5 bg-pup-maroon text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20"
              >
                <Plus size={18} />
                Add Badge
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-inner ${
                      badge.color === 'gold' ? 'bg-soft-gold text-warm-gold' : 'bg-soft-maroon text-pup-maroon'
                    }`}>
                      {React.cloneElement(badge.icon as React.ReactElement, { size: 32 } as any)}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-text group-hover:text-pup-maroon transition-colors">{badge.name}</h3>
                      <p className="text-[13px] text-secondary-text mt-1 line-clamp-2 leading-snug">{badge.desc}</p>
                    </div>
                    <div className="pt-2 w-full">
                      <div className="text-[11px] font-semibold text-muted-text uppercase tracking-wider mb-2">Criteria</div>
                      <div className="bg-main-bg border border-border rounded-lg py-1.5 px-3 text-[12px] text-secondary-text italic">
                        {badge.criteria}
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${badge.active ? 'bg-status-approved' : 'bg-muted-text'}`}></div>
                        <span className="text-[11px] font-bold text-secondary-text">{badge.active ? 'Active' : 'Inactive'}</span>
                      </div>
                      <div className="text-[12px] font-bold text-primary-text">
                        {badge.count} <span className="text-muted-text font-medium uppercase text-[10px]">Awarded</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleEdit(badge)}
                      className="absolute top-4 right-4 p-2 text-muted-text hover:text-pup-maroon hover:bg-pup-maroon/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Plus className="rotate-45" size={16} />
                      <span className="sr-only">Edit</span>
                      <Palette size={16} className="-rotate-45" />
                    </button>
                    <button 
                      onClick={() => handleEdit(badge)}
                      className="w-full py-2 border border-border rounded-lg text-xs font-bold text-primary-text hover:border-pup-maroon hover:text-pup-maroon transition-all"
                    >
                      Edit Badge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Edit/Add Modal */}
      {showBadgeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-surface/60 backdrop-blur-sm">
          <div className="bg-card-bg rounded-2xl w-full max-w-lg shadow-2xl border border-border animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h3 className="text-xl font-bold text-primary-text">
                {editingBadge ? `Edit Badge — ${editingBadge.name}` : 'Add New Badge'}
              </h3>
              <button 
                onClick={() => setShowBadgeModal(false)}
                className="p-2 hover:bg-secondary-surface rounded-full transition-colors"
              >
                <X size={20} className="text-secondary-text" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-primary-text">Badge Name</label>
                <input 
                  type="text" 
                  defaultValue={editingBadge?.name || ''}
                  placeholder="e.g. Rising Creator"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-primary-text">Description</label>
                <textarea 
                  rows={2}
                  defaultValue={editingBadge?.desc || ''}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-primary-text block">Icon</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[Trophy, Star, Award, TrendingUp, Crown, Medal].map((Icon, idx) => (
                      <button 
                        key={idx}
                        className={`p-3 border rounded-xl flex items-center justify-center transition-all ${
                          idx === 3 ? 'bg-pup-maroon/10 border-pup-maroon text-pup-maroon' : 'border-border text-secondary-text hover:bg-secondary-surface'
                        }`}
                      >
                        <Icon size={20} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-primary-text block">Color Theme</label>
                  <div className="flex gap-4">
                    <label className="flex flex-1 items-center gap-3 p-3 border border-border rounded-xl cursor-pointer hover:bg-secondary-surface transition-all">
                      <input type="radio" name="color" className="accent-pup-gold w-4 h-4" defaultChecked />
                      <div className="w-6 h-6 rounded-full bg-pup-gold shadow-sm"></div>
                      <span className="text-sm font-medium">Gold</span>
                    </label>
                    <label className="flex flex-1 items-center gap-3 p-3 border border-border rounded-xl cursor-pointer hover:bg-secondary-surface transition-all">
                      <input type="radio" name="color" className="accent-pup-maroon w-4 h-4" />
                      <div className="w-6 h-6 rounded-full bg-pup-maroon shadow-sm"></div>
                      <span className="text-sm font-medium">Maroon</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-primary-text">Award Criteria</label>
                <textarea 
                  rows={2}
                  defaultValue={editingBadge?.criteria || "Awarded to creators with 3+ approved works in their first semester"}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-primary-text">Display Priority</label>
                  <input type="number" defaultValue={10} className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-primary-text">Expiration Behavior</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon outline-none">
                    <option>Never</option>
                    <option>After 1 semester</option>
                    <option>After 1 year</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-main-bg rounded-xl border border-border">
                <div className="flex items-center gap-4">
                   <div className="text-sm font-semibold text-primary-text">Award Type:</div>
                   <label className="flex items-center gap-2 cursor-pointer">
                     <input type="radio" name="award-type" defaultChecked className="accent-pup-maroon" />
                     <span className="text-sm">Manual</span>
                   </label>
                   <label className="flex items-center gap-2 cursor-pointer">
                     <input type="radio" name="award-type" className="accent-pup-maroon" />
                     <span className="text-sm">Automatic</span>
                   </label>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-sm font-semibold">Active:</span>
                   <button className="w-12 h-6 bg-status-approved rounded-full relative transition-all">
                     <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                   </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-border flex gap-3">
              <button 
                onClick={() => setShowBadgeModal(false)}
                className="flex-1 py-3 border-2 border-border rounded-xl text-sm font-bold text-primary-text hover:bg-secondary-surface transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowBadgeModal(false)}
                className="flex-1 py-3 bg-pup-maroon text-white rounded-xl text-sm font-bold hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20"
              >
                Save Badge
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
