import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Filter, 
  ChevronRight, 
  X, 
  Clock, 
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import './_group.css';

export default function PendingReviewsPageMobile() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto flex flex-col relative">
      {/* Mobile Top Header */}
      <header className="h-[56px] bg-dark-surface flex items-center justify-between px-4 shrink-0 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="text-pup-gold font-bold text-lg tracking-tight">Campus Creatives</div>
          <div className="px-1.5 py-0.5 bg-pup-gold text-dark-surface text-[8px] font-extrabold rounded uppercase tracking-wider">MODERATOR</div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative text-white/80">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-crimson-accent rounded-full border border-dark-surface"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 overflow-hidden">
            <img src="/__mockup/images/creator-portrait.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Search & Filter Row */}
      <div className="p-4 bg-card-bg border-b border-border space-y-3">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
            <input 
              type="text" 
              placeholder="Search submissions..." 
              className="w-full pl-9 pr-4 py-2 bg-secondary-surface border-none rounded-lg text-[13px] outline-none"
            />
          </div>
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-1.5 px-3 py-2 border border-border rounded-lg text-[13px] font-bold text-primary-text active:bg-secondary-surface transition-colors"
          >
            <Filter size={16} /> Filter
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-primary-text">24 Submissions</span>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-soft-maroon text-pup-maroon text-[11px] font-bold rounded-lg border border-soft-maroon/20">
            Digital Art <X size={12} />
          </div>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 p-4 space-y-3 pb-24">
        {submissions.map((item) => (
          <MobileSubmissionCard key={item.id} item={item} />
        ))}
      </div>

      {/* Filter Bottom Sheet */}
      {showFilters && (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end">
          <div className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm" onClick={() => setShowFilters(false)}></div>
          <div className="relative bg-card-bg w-full rounded-t-[24px] p-6 space-y-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary-text">Filter Submissions</h3>
              <button onClick={() => setShowFilters(false)} className="p-1 hover:bg-secondary-surface rounded-full">
                <X size={24} className="text-secondary-text" />
              </button>
            </div>
            
            <div className="space-y-4">
              <FilterSection label="College" placeholder="All Colleges" />
              <FilterSection label="Category" placeholder="Digital Art" />
              <FilterSection label="Sort By" placeholder="Oldest First" />
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 py-3 text-[14px] font-bold text-secondary-text bg-secondary-surface rounded-xl">Reset</button>
              <button onClick={() => setShowFilters(false)} className="flex-1 py-3 text-[14px] font-bold text-white bg-pup-maroon rounded-xl">Apply Filters</button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <nav className="w-[390px] h-[68px] bg-warm-white border-t border-border fixed bottom-0 z-50 flex items-center justify-around pb-safe">
        <NavButton icon={<LayoutDashboard size={22} />} label="Dashboard" />
        <NavButton icon={<ClipboardList size={22} />} label="Reviews" active />
        <NavButton icon={<Flag size={22} />} label="Reports" />
        <NavButton icon={<MoreHorizontal size={22} />} label="More" />
      </nav>
    </div>
  );
}

function MobileSubmissionCard({ item }: any) {
  return (
    <div className="bg-card-bg p-3 rounded-xl border border-border shadow-sm flex items-center gap-3 active:border-pup-maroon transition-colors">
      <div className="w-[60px] h-[48px] rounded-lg bg-secondary-surface shrink-0 overflow-hidden border border-border/50">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold text-primary-text truncate leading-tight">{item.title}</h4>
        <div className="text-[11px] text-secondary-text truncate mt-0.5">{item.creator}</div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="px-1.5 py-0.5 bg-secondary-surface text-secondary-text text-[9px] font-bold rounded uppercase border border-border/50">{item.college}</span>
          <span className={`text-[9px] font-bold uppercase tracking-wider ${getPriorityColor(item.priority)}`}>{item.priority}</span>
        </div>
      </div>
      <div className="text-right shrink-0 px-1">
        <div className={`text-[10px] font-bold ${item.waitingUrgent ? 'text-status-pending' : 'text-muted-text'} flex items-center justify-end gap-1 mb-1`}>
          <Clock size={10} /> {item.waiting}
        </div>
        <button className="px-3 py-1.5 bg-pup-maroon text-white text-[11px] font-bold rounded-lg shadow-sm">
          Review
        </button>
      </div>
    </div>
  );
}

function FilterSection({ label, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[12px] font-bold text-muted-text uppercase tracking-wider">{label}</label>
      <button className="w-full flex items-center justify-between px-4 py-3 bg-secondary-surface rounded-xl text-[14px] text-primary-text font-medium text-left">
        {placeholder}
        <ChevronDown size={18} className="text-muted-text" />
      </button>
    </div>
  );
}

function NavButton({ icon, label, active }: any) {
  return (
    <button className={`flex flex-col items-center justify-center gap-1 min-w-[64px] ${active ? 'text-pup-maroon' : 'text-secondary-text'}`}>
      <div className={active ? 'stroke-[2.5px]' : ''}>{icon}</div>
      <span className="text-[10px] font-bold">{label}</span>
    </button>
  );
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'Copyright Concern': return 'text-crimson-accent';
    case 'Reported': return 'text-status-rejected';
    case 'Event Deadline': return 'text-status-needs-revision';
    case 'Time Sensitive': return 'text-status-pending';
    default: return 'text-muted-text';
  }
}

const submissions = [
  { id: '1', title: 'Digital Sinta', creator: 'Rafael Mendoza', college: 'CCIS', priority: 'Standard', waiting: '2d', waitingUrgent: false, thumbnail: '/__mockup/images/thumbnail_1.jpg' },
  { id: '2', title: 'Railway Sketches', creator: 'Rafael Mendoza', college: 'CCIS', priority: 'Copyright Concern', waiting: '6d', waitingUrgent: true, thumbnail: '/__mockup/images/thumbnail_2.jpg' },
  { id: '3', title: 'Sta. Mesa After Rain', creator: 'Bianca Reyes', college: 'COC', priority: 'Event Deadline', waiting: '9d', waitingUrgent: true, thumbnail: '/__mockup/images/thumbnail_3.jpg' },
  { id: '4', title: 'Tinig ng Bayan', creator: 'Maria Santos', college: 'CAL', priority: 'Standard', waiting: '7d', waitingUrgent: true, thumbnail: '/__mockup/images/thumbnail_4.jpg' },
  { id: '5', title: 'Lakas ng Sining', creator: 'Carlo Reyes', college: 'CADBE', priority: 'Time Sensitive', waiting: '4d', waitingUrgent: true, thumbnail: '/__mockup/images/thumbnail_1.jpg' },
];
