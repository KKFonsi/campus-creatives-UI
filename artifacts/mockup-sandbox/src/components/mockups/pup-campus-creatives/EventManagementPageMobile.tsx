import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MoreHorizontal, 
  Plus,
  Search,
  ChevronRight,
  Building2,
  Clock,
  ArrowRight
} from 'lucide-react';
import './_group.css';

export default function EventManagementPageMobile() {
  const events = [
    { id: 'PUP-LIKHA-2026', title: 'PUP Likha 2026', organizer: 'PUP OSA', deadline: 'June 30', status: 'Open', entries: 89 },
    { id: 'PUP-SINTA-2026', title: 'Sinta Short Film Festival', organizer: 'CAL', deadline: 'July 15', status: 'Open', entries: 34 },
    { id: 'GUHIT-2026', title: 'Guhit Iskolar Digital Art', organizer: 'CCIS', deadline: 'June 25', status: 'Closing Soon', entries: 67 },
  ];

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter flex flex-col mx-auto border-x border-border shadow-2xl overflow-hidden">
      {/* Mobile Top Header */}
      <header className="h-14 bg-dark-surface flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="text-pup-gold tracking-tight font-bold text-sm">PUP: CREATIVES</div>
          <div className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-pup-gold text-dark-surface uppercase tracking-wider">Admin</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-pup-maroon border border-white/20 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            SA
          </div>
        </div>
      </header>

      {/* Search & Tabs */}
      <div className="p-4 space-y-4 bg-card-bg border-b border-border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="w-full pl-9 pr-4 py-2.5 bg-main-bg border border-border rounded-xl text-[13px] outline-none focus:border-pup-maroon transition-colors"
            />
          </div>
          <button className="p-2.5 bg-pup-maroon text-white rounded-xl shadow-md">
            <Plus size={20} />
          </button>
        </div>

        {/* Tabs - Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {['All', 'Open', 'Closing Soon', 'Upcoming', 'Ongoing', 'Completed'].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all border ${
                i === 0 
                  ? 'bg-pup-maroon text-white border-pup-maroon shadow-sm' 
                  : 'bg-white text-secondary-text border-border'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm active:scale-[0.98] transition-all">
            <div className="h-24 bg-gradient-to-br from-pup-maroon/10 to-pup-gold/10 flex items-center justify-center relative">
              <div className="absolute top-2 right-2">
                <StatusBadge status={event.status} />
              </div>
              <Calendar size={32} className="text-pup-maroon/20" />
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-[15px] leading-tight mb-1">{event.title}</h3>
              <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4">
                <div className="flex items-center gap-1.5 text-[11px] text-secondary-text">
                  <Building2 size={12} className="text-pup-maroon" />
                  <span>{event.organizer}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-secondary-text">
                  <Clock size={12} className="text-status-pending" />
                  <span>Ends {event.deadline}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-primary-text">{event.entries}</span>
                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Entries</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-1.5 border border-border rounded-lg text-[12px] font-bold text-secondary-text">Edit</button>
                  <button className="px-4 py-1.5 bg-pup-maroon text-white rounded-lg text-[12px] font-bold shadow-sm">View</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="h-16 bg-white border-t border-border flex items-center justify-around px-2 flex-shrink-0">
        <MobileNavItem icon={<LayoutDashboard size={20} />} label="Overview" />
        <MobileNavItem icon={<Users size={20} />} label="Users" />
        <MobileNavItem icon={<Calendar size={20} />} label="Events" active />
        <MobileNavItem icon={<MoreHorizontal size={20} />} label="More" />
      </nav>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Open': 'bg-status-approved text-white shadow-sm',
    'Closing Soon': 'bg-status-pending text-white shadow-sm',
    'Upcoming': 'bg-status-info text-white shadow-sm',
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
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
