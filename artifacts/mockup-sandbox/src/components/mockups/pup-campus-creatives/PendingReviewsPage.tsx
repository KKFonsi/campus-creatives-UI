import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  Star, 
  Shield, 
  History, 
  Search, 
  Bell, 
  Filter, 
  ChevronDown, 
  X, 
  CheckSquare, 
  Square,
  AlertCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  MoreVertical,
  User,
  Calendar,
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ModeratorDesktopSidebar } from './_shared/ModeratorDesktopSidebar';
import './_group.css';

interface PendingReviewsPageProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReview?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

export default function PendingReviewsPage({
  onDashboard,
  onPending,
  onReview,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
  onEvents,
}: PendingReviewsPageProps = {}) {
  const [activeTab, setActiveTab] = useState('Pending Reviews');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleNav = (tab: string, callback?: () => void) => {
    setActiveTab(tab);
    callback?.();
  };

  const toggleSelect = (id: string) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === submissions.length) setSelectedItems([]);
    else setSelectedItems(submissions.map(s => s.id));
  };

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar
        onDashboard={onDashboard}
        onPending={onPending}
        onReports={onReports}
        onFeatured={onFeatured}
        onOfficialContent={onOfficialContent}
        onEvents={onEvents}
        onHistory={onHistory}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-[64px] bg-card-bg border-b border-border flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-[18px] font-bold text-primary-text">Pending Reviews</h2>
            <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[12px] font-bold rounded-full">24 Submissions</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-secondary-text hover:bg-secondary-surface rounded-full transition-colors">
              <Bell size={20} />
            </button>
            <div className="h-8 w-px bg-border mx-1"></div>
            <InitialsAvatar name="Maria Moderator" className="w-10 h-10 border border-border" textClassName="text-xs" />
          </div>
        </header>

        {/* Filter Bar */}
        <div className="bg-card-bg border-b border-border p-4 sticky top-0 z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
              <input 
                type="text" 
                placeholder="Search by title, creator, ref..." 
                className="w-full pl-10 pr-4 py-2 bg-secondary-surface border-none rounded-lg text-[14px] focus:ring-1 focus:ring-pup-maroon outline-none"
              />
            </div>
            <FilterDropdown label="College" />
            <FilterDropdown label="Category" />
            <FilterDropdown label="Content Type" />
            <FilterDropdown label="Sort: Oldest First" />
            <button className="px-4 py-2 bg-pup-maroon text-white text-[14px] font-bold rounded-lg hover:bg-deep-maroon transition-colors flex items-center gap-2">
              <Filter size={16} /> Filter
            </button>
          </div>

          <div className="flex items-center gap-2">
            <FilterChip label="All Colleges" />
            <FilterChip label="Digital Art" />
            <button className="text-[12px] text-secondary-text font-bold hover:text-pup-maroon ml-2">Clear All</button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-main-bg relative">
          {/* Table Headers */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-[11px] font-bold text-muted-text uppercase tracking-wider border-b border-border mb-2">
            <div className="col-span-1 flex items-center gap-4">
              <button onClick={toggleSelectAll}>
                {selectedItems.length === submissions.length ? <CheckSquare size={16} className="text-pup-maroon" /> : <Square size={16} />}
              </button>
              <span>Work</span>
            </div>
            <div className="col-span-3 ml-12">Submission Info</div>
            <div className="col-span-2">Tags / Type</div>
            <div className="col-span-2">Waiting / Reference</div>
            <div className="col-span-1 text-center">Audit</div>
            <div className="col-span-2 text-center">Priority</div>
            <div className="col-span-1"></div>
          </div>

          {/* Submissions List */}
          <div className="space-y-3">
            {submissions.map((item) => (
              <SubmissionRow 
                key={item.id} 
                item={item} 
                selected={selectedItems.includes(item.id)}
                onSelect={() => toggleSelect(item.id)}
                onReview={onReview}
              />
            ))}
          </div>

          {/* Empty State / Bottom Info */}
          <div className="mt-8 p-12 bg-white rounded-2xl border border-dashed border-border flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-secondary-surface rounded-full flex items-center justify-center text-muted-text mb-4">
              <ClipboardList size={32} />
            </div>
            <h3 className="text-lg font-bold text-primary-text mb-1">End of review queue</h3>
            <p className="text-secondary-text max-w-xs">You've seen all pending submissions for your current filters.</p>
          </div>

          {/* Bulk Action Bar */}
          {selectedItems.length > 0 && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 translate-l-[120px] bg-dark-surface text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-6 z-50 animate-in fade-in slide-in-from-bottom-4">
              <span className="text-[14px] font-bold border-r border-white/20 pr-6">{selectedItems.length} items selected</span>
              <div className="flex items-center gap-4">
                <button className="text-[13px] font-bold hover:text-pup-gold flex items-center gap-2">
                  <Flag size={16} /> Mark Priority
                </button>
                <button className="text-[13px] font-bold hover:text-pup-gold flex items-center gap-2">
                  <User size={16} /> Assign to Moderator
                </button>
              </div>
              <button onClick={() => setSelectedItems([])} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Subcomponents
function NavItem({ icon, label, badge, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between border-l-4 px-3 py-2.5 rounded-lg transition-all ${
        active 
          ? 'bg-white/10 border-pup-gold text-white' 
          : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-[14px] font-medium">{label}</span>
      </div>
      {badge && (
        <span className="px-1.5 py-0.5 bg-pup-maroon text-white text-[10px] font-bold rounded">
          {badge}
        </span>
      )}
    </button>
  );
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 bg-card-bg border border-border rounded-lg text-[13px] font-medium hover:border-pup-maroon transition-colors shadow-sm">
      {label} <ChevronDown size={14} className="text-muted-text" />
    </button>
  );
}

function FilterChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-soft-maroon border border-soft-maroon rounded-full text-[12px] font-bold text-pup-maroon">
      {label} <X size={12} className="cursor-pointer" />
    </div>
  );
}

function SubmissionRow({ item, selected, onSelect, onReview }: any) {
  return (
    <div className={`grid grid-cols-12 gap-4 px-6 py-4 bg-card-bg border rounded-xl shadow-sm hover:border-pup-maroon transition-all items-center ${selected ? 'border-pup-maroon ring-1 ring-pup-maroon' : 'border-border'}`}>
      <div className="col-span-1 flex items-center gap-4">
        <button onClick={onSelect} className="shrink-0">
          {selected ? <CheckSquare size={18} className="text-pup-maroon fill-soft-maroon" /> : <Square size={18} className="text-muted-text" />}
        </button>
        <div className="w-[64px] h-[52px] rounded-lg bg-secondary-surface shrink-0 overflow-hidden border border-border/50">
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="col-span-3 ml-12">
        <h4 className="text-[14px] font-bold text-primary-text mb-0.5 line-clamp-1">{item.title}</h4>
        <div className="text-[12px] text-secondary-text truncate">{item.creator}</div>
        <div className="text-[11px] text-muted-text mt-1">{item.college} • {item.program}</div>
      </div>

      <div className="col-span-2 flex flex-wrap gap-1.5">
        <span className="px-2 py-0.5 bg-secondary-surface text-secondary-text text-[10px] font-bold rounded border border-border/50 uppercase">{item.category}</span>
        <span className="px-2 py-0.5 bg-secondary-surface text-secondary-text text-[10px] font-bold rounded border border-border/50 uppercase">{item.type}</span>
      </div>

      <div className="col-span-2">
        <div className="flex items-center gap-1.5 text-[12px] font-bold text-primary-text mb-1">
          <Clock size={14} className={item.waitingUrgent ? 'text-status-pending' : 'text-muted-text'} />
          <span className={item.waitingUrgent ? 'text-status-pending' : ''}>{item.waiting} waiting</span>
        </div>
        <div className="text-[11px] text-muted-text font-mono uppercase tracking-tighter">{item.ref}</div>
        <div className="text-[10px] text-muted-text mt-0.5">{item.date}</div>
      </div>

      <div className="col-span-1 flex items-center justify-center gap-3">
        <div className="group relative">
          <div className={`w-2.5 h-2.5 rounded-full ${item.ownership ? 'bg-status-approved' : 'bg-status-rejected'}`}></div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-dark-surface text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            Ownership {item.ownership ? 'Verified' : 'Concern'}
          </div>
        </div>
        <div className="group relative">
          <div className={`w-2.5 h-2.5 rounded-full ${item.accessibility ? 'bg-status-approved' : 'bg-status-pending'}`}></div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-dark-surface text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            Accessibility {item.accessibility ? 'Complete' : 'Missing'}
          </div>
        </div>
      </div>

      <div className="col-span-2 flex justify-center">
        <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider border ${getPriorityStyles(item.priority)}`}>
          {item.priority}
        </span>
      </div>

      <div className="col-span-1 flex justify-end">
        <button onClick={onReview} className="px-4 py-1.5 bg-pup-maroon text-white text-[12px] font-bold rounded-lg hover:bg-deep-maroon transition-all shadow-sm">
          Review
        </button>
      </div>
    </div>
  );
}

function getPriorityStyles(priority: string) {
  switch (priority) {
    case 'Copyright Concern': return 'bg-red-50 text-crimson-accent border-crimson-accent/20';
    case 'Reported': return 'bg-red-50 text-status-rejected border-status-rejected/20';
    case 'Event Deadline': return 'bg-orange-50 text-status-needs-revision border-status-needs-revision/20';
    case 'Time Sensitive': return 'bg-amber-50 text-status-pending border-status-pending/20';
    default: return 'bg-secondary-surface text-muted-text border-border';
  }
}

const submissions = [
  { id: '1', title: 'Digital Sinta', creator: 'Rafael Mendoza', college: 'CCIS', program: 'BSIT', category: 'Digital Art', type: 'Artwork', ref: 'CC-WORK-2026-0148', date: 'June 12', waiting: '2 days', waitingUrgent: false, ownership: true, accessibility: false, priority: 'Standard', thumbnail: '/__mockup/images/thumbnail_1.jpg' },
  { id: '2', title: 'Railway Sketches', creator: 'Rafael Mendoza', college: 'CCIS', program: 'BSIT', category: 'Visual Art', type: 'Artwork', ref: 'CC-WORK-2026-0119', date: 'June 8', waiting: '6 days', waitingUrgent: true, ownership: false, accessibility: false, priority: 'Copyright Concern', thumbnail: '/__mockup/images/thumbnail_2.jpg' },
  { id: '3', title: 'Sta. Mesa After Rain', creator: 'Bianca Reyes', college: 'COC', program: 'Broadcast', category: 'Photography', type: 'Artwork', ref: 'CC-WORK-2026-0102', date: 'June 5', waiting: '9 days', waitingUrgent: true, ownership: true, accessibility: true, priority: 'Event Deadline', thumbnail: '/__mockup/images/thumbnail_3.jpg' },
  { id: '4', title: 'Tinig ng Bayan', creator: 'Maria Santos', college: 'CAL', program: 'Music', category: 'Music', type: 'Artwork', ref: 'CC-WORK-2026-0098', date: 'June 7', waiting: '7 days', waitingUrgent: true, ownership: true, accessibility: true, priority: 'Standard', thumbnail: '/__mockup/images/thumbnail_4.jpg' },
  { id: '5', title: 'Lakas ng Sining', creator: 'Carlo Reyes', college: 'CADBE', program: 'Architecture', category: 'Visual Art', type: 'Artwork', ref: 'CC-WORK-2026-0125', date: 'June 10', waiting: '4 days', waitingUrgent: true, ownership: true, accessibility: false, priority: 'Time Sensitive', thumbnail: '/__mockup/images/thumbnail_1.jpg' },
  { id: '6', title: 'Polytechnic Pulse', creator: 'Ana Cruz', college: 'CCIS', program: 'CS', category: 'Graphic Design', type: 'Artwork', ref: 'CC-WORK-2026-0133', date: 'June 11', waiting: '3 days', waitingUrgent: false, ownership: true, accessibility: true, priority: 'Standard', thumbnail: '/__mockup/images/thumbnail_2.jpg' },
  { id: '7', title: 'Kommuting', creator: 'Ben Santos', college: 'CAL', program: 'Film', category: 'Film and Video', type: 'Film', ref: 'CC-WORK-2026-0111', date: 'June 6', waiting: '8 days', waitingUrgent: true, ownership: false, accessibility: true, priority: 'Reported', thumbnail: '/__mockup/images/thumbnail_3.jpg' },
  { id: '8', title: 'Fiber and Form', creator: 'Lara Diaz', college: 'CADBE', program: 'Fine Arts', category: 'Crafts', type: 'Artwork', ref: 'CC-WORK-2026-0089', date: 'June 4', waiting: '10 days', waitingUrgent: true, ownership: true, accessibility: true, priority: 'Standard', thumbnail: '/__mockup/images/thumbnail_4.jpg' },
];
