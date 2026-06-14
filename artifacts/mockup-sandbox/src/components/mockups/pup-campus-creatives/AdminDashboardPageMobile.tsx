import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MoreHorizontal, 
  Bell,
  Palette,
  CheckCircle,
  ClipboardList,
  Flag,
  Building2,
  Tag,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import './_group.css';

export default function AdminDashboardPageMobile() {
  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter flex flex-col mx-auto border-x border-border shadow-2xl overflow-hidden">
      {/* Mobile Top Header */}
      <header className="h-14 bg-dark-surface flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="text-pup-gold tracking-tight">
            <span className="font-bold text-sm">PUP:</span>
            <span className="font-medium text-xs ml-1">CREATIVES</span>
          </div>
          <div className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-pup-gold text-dark-surface uppercase">
            Admin
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative text-white/80">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-crimson-accent rounded-full border border-dark-surface"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-pup-maroon border border-white/20 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            SA
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-primary-text">System Overview</h1>
          <p className="text-[13px] text-secondary-text mt-0.5">Academic Year 2026-2027</p>
        </div>

        {/* 2x4 Stat Grid */}
        <div className="grid grid-cols-2 gap-3">
          <CompactStatCard title="Total Users" value="1,284" icon={<Users size={16} />} color="text-status-info" bg="bg-status-info/10" />
          <CompactStatCard title="Active Creators" value="347" icon={<Palette size={16} />} color="text-pup-maroon" bg="bg-soft-maroon" />
          <CompactStatCard title="Approved" value="892" icon={<CheckCircle size={16} />} color="text-status-approved" bg="bg-status-approved/10" />
          <CompactStatCard title="Pending" value="24" icon={<ClipboardList size={16} />} color="text-status-pending" bg="bg-status-pending/10" />
          <CompactStatCard title="Events" value="6" icon={<Calendar size={16} />} color="text-warm-gold" bg="bg-soft-gold" />
          <CompactStatCard title="Reports" value="4" icon={<Flag size={16} />} color="text-status-rejected" bg="bg-status-rejected/10" />
          <CompactStatCard title="Colleges" value="16" icon={<Building2 size={16} />} color="text-pup-maroon" bg="bg-soft-maroon" />
          <CompactStatCard title="Categories" value="16" icon={<Tag size={16} />} color="text-pup-maroon" bg="bg-soft-maroon" />
        </div>

        {/* System Alert Card */}
        <div className="bg-status-pending/10 border border-status-pending/20 rounded-xl p-3 flex gap-3">
          <AlertTriangle size={18} className="text-status-pending shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="text-[13px] font-bold text-status-pending">System Alert</div>
            <p className="text-[12px] text-secondary-text mt-0.5 leading-snug">
              5 events closing in 7 days — Review submission deadlines and moderator assignments.
            </p>
            <button className="text-[11px] font-bold text-status-pending mt-2 uppercase tracking-wider">Review Events</button>
          </div>
        </div>

        {/* Activity Sections */}
        <div className="space-y-4">
          <SectionLink title="Top Colleges" value="CCIS, CAL, COC" />
          <SectionLink title="User Growth" value="+12% this month" />
          <SectionLink title="Recent Actions" value="Event published, Role update..." />
          <SectionLink title="Active Events" value="Likha 2026, Film Fest..." />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="h-16 bg-white border-t border-border flex items-center justify-around px-2 flex-shrink-0">
        <MobileNavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
        <MobileNavItem icon={<Users size={20} />} label="Users" />
        <MobileNavItem icon={<Calendar size={20} />} label="Events" />
        <MobileNavItem icon={<MoreHorizontal size={20} />} label="More" />
      </nav>
    </div>
  );
}

function CompactStatCard({ title, value, icon, color, bg }: { title: string, value: string, icon: React.ReactNode, color: string, bg: string }) {
  return (
    <div className="bg-card-bg border border-border p-3 rounded-xl shadow-sm">
      <div className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center mb-2`}>
        {icon}
      </div>
      <div className="text-lg font-bold tracking-tight">{value}</div>
      <div className="text-[11px] font-medium text-secondary-text mt-0.5">{title}</div>
    </div>
  );
}

function SectionLink({ title, value }: { title: string, value: string }) {
  return (
    <button className="w-full bg-card-bg border border-border rounded-xl p-4 flex items-center justify-between shadow-sm hover:border-pup-maroon/30 transition-colors group">
      <div className="text-left">
        <div className="text-[13px] font-bold text-primary-text">{title}</div>
        <div className="text-[12px] text-secondary-text mt-0.5">{value}</div>
      </div>
      <ChevronRight size={18} className="text-muted-text group-hover:text-pup-maroon transition-colors" />
    </button>
  );
}

function MobileNavItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-1 min-w-[64px] ${active ? 'text-pup-maroon' : 'text-muted-text'}`}>
      <div className={`${active ? 'bg-soft-maroon p-1.5 rounded-lg' : ''}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-tighter ${active ? 'text-pup-maroon' : 'text-muted-text'}`}>
        {label}
      </span>
    </button>
  );
}
