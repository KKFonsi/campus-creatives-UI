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
  ArrowRight,
  Plus,
  Search,
  MoreVertical,
  Filter,
  Archive,
  Copy,
  Edit2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import './_group.css';

export default function EventManagementPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    { id: 'PUP-LIKHA-2026', title: 'PUP Likha 2026', organizer: 'PUP OSA', type: 'Showcase', deadline: 'June 30, 2026', status: 'Open', entries: 89, featured: 12 },
    { id: 'PUP-SINTA-2026', title: 'Sinta Short Film Festival', organizer: 'CAL', type: 'Film', deadline: 'July 15, 2026', status: 'Open', entries: 34, featured: 5 },
    { id: 'GUHIT-2026', title: 'Guhit Iskolar Digital Art', organizer: 'CCIS', type: 'Digital Art', deadline: 'June 25, 2026', status: 'Closing Soon', entries: 67, featured: 8 },
    { id: 'LENS-2026', title: 'Sta. Mesa Through the Lens', organizer: 'COC', type: 'Photography', deadline: 'July 31, 2026', status: 'Upcoming', entries: 0, featured: 0 },
    { id: 'SPOKEN-2026', title: 'PUP Spoken Word Night', organizer: 'CAL', type: 'Spoken Word', deadline: 'July 20, 2026', status: 'Upcoming', entries: 5, featured: 0 },
    { id: 'CTC-2026', title: 'Creative Tech Challenge 2026', organizer: 'CCIS', type: 'Multimedia', deadline: 'June 28, 2026', status: 'Closing Soon', entries: 45, featured: 6 },
    { id: 'COC-MEDIA-2026', title: 'COC Media Festival', organizer: 'COC', type: 'Film/Media', deadline: 'Aug 10, 2026', status: 'Open', entries: 12, featured: 0 },
    { id: 'FW-POSTER-2026', title: 'Foundation Week Poster-Making', organizer: 'VPSA', type: 'Visual Art', deadline: 'June 22, 2026', status: 'Closing Soon', entries: 23, featured: 3 },
    { id: 'TINIG-2026', title: 'Tinig ng PUP Music Showcase', organizer: 'CAL', type: 'Music', deadline: 'Sept 1, 2026', status: 'Upcoming', entries: 0, featured: 0 },
    { id: 'PDWEEK-2026', title: 'Polytechnic Design Week', organizer: 'CADBE', type: 'Design', deadline: 'Aug 20, 2026', status: 'Upcoming', entries: 0, featured: 0 },
    { id: 'FOLIO-2026', title: 'Iskolar Literary Folio Open Call', organizer: 'CAL', type: 'Writing', deadline: 'May 10, 2026', status: 'Completed', entries: 54, featured: 10 },
    { id: 'MURAL-2026', title: 'PUP Campus Mural Project', organizer: 'OSA', type: 'Visual Art', deadline: 'Apr 30, 2026', status: 'Ongoing', entries: 8, featured: 2 },
  ];

  const handleArchive = (event: any) => {
    setSelectedEvent(event);
    setShowArchiveModal(true);
  };

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
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <NavItem icon={<Users size={18} />} label="Users" />
          <NavItem icon={<Building2 size={18} />} label="Colleges" />
          <NavItem icon={<Tag size={18} />} label="Categories" />
          <NavItem icon={<Calendar size={18} />} label="Events" active />
          <NavItem icon={<Award size={18} />} label="Recognition" />
          <NavItem icon={<Flag size={18} />} label="Reports" />
          <NavItem icon={<BarChart3 size={18} />} label="Analytics" />
          <NavItem icon={<Activity size={18} />} label="Activity Log" />
          <NavItem icon={<Shield size={18} />} label="Roles" />
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
          <h1 className="text-xl font-bold tracking-tight">Events Management</h1>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
              <input 
                type="text" 
                placeholder="Search events..." 
                className="w-full pl-9 pr-4 py-2 bg-main-bg border border-border rounded-xl text-sm focus:outline-none focus:border-pup-maroon transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-pup-maroon text-white text-sm font-bold rounded-xl shadow-sm hover:bg-deep-maroon transition-all">
              <Plus size={18} />
              Create Event
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-main-bg">
          <div className="max-w-[1200px] mx-auto space-y-6">
            
            {/* Tabs */}
            <div className="flex items-center gap-2 bg-card-bg p-1 rounded-xl border border-border w-fit">
              {['All', 'Draft', 'Open', 'Closing Soon', 'Upcoming', 'Ongoing', 'Completed', 'Archived'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === tab 
                      ? 'bg-pup-maroon text-white shadow-sm' 
                      : 'text-secondary-text hover:bg-main-bg'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Event List */}
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="bg-card-bg border border-border rounded-xl p-4 flex items-center gap-6 shadow-sm hover:border-pup-maroon/30 transition-all group">
                  <div className="w-16 h-12 bg-secondary-surface rounded-lg overflow-hidden flex-shrink-0 border border-border">
                    <div className="w-full h-full bg-gradient-to-br from-pup-maroon/20 to-pup-gold/20 flex items-center justify-center">
                      <Calendar size={20} className="text-pup-maroon/40" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-bold text-sm truncate">{event.title}</h3>
                      <span className="text-[10px] font-mono text-muted-text uppercase">{event.id}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-secondary-text">
                      <span className="flex items-center gap-1"><Building2 size={12} /> {event.organizer}</span>
                      <span className="flex items-center gap-1"><Tag size={12} /> {event.type}</span>
                    </div>
                  </div>

                  <div className="w-32 text-center">
                    <div className="text-[10px] font-bold text-muted-text uppercase tracking-wider mb-1">Deadline</div>
                    <div className="text-[12px] font-semibold">{event.deadline}</div>
                  </div>

                  <div className="w-28 flex justify-center">
                    <StatusBadge status={event.status} />
                  </div>

                  <div className="w-32 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <div>
                        <div className="text-sm font-bold">{event.entries}</div>
                        <div className="text-[9px] font-bold text-muted-text uppercase">Entries</div>
                      </div>
                      <div className="w-px h-6 bg-border"></div>
                      <div>
                        <div className="text-sm font-bold text-pup-gold">{event.featured}</div>
                        <div className="text-[9px] font-bold text-muted-text uppercase">Featured</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button className="p-2 text-muted-text hover:text-pup-maroon hover:bg-soft-maroon rounded-lg transition-colors" title="Edit">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-muted-text hover:text-pup-maroon hover:bg-soft-maroon rounded-lg transition-colors" title="Duplicate">
                      <Copy size={16} />
                    </button>
                    <button 
                      onClick={() => handleArchive(event)}
                      className="p-2 text-muted-text hover:text-status-rejected hover:bg-status-rejected/10 rounded-lg transition-colors" title="Archive"
                    >
                      <Archive size={16} />
                    </button>
                    <button className="p-2 text-muted-text hover:text-primary-text hover:bg-main-bg rounded-lg transition-colors" title="View Public">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex items-center justify-between pt-4">
              <span className="text-sm text-secondary-text">Showing 12 events</span>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-border rounded-lg text-muted-text" disabled><ChevronLeft size={18} /></button>
                <button className="px-3 py-1 bg-pup-maroon text-white font-bold rounded-lg text-sm">1</button>
                <button className="p-2 border border-border rounded-lg text-primary-text"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Archive Modal */}
      {showArchiveModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-surface/60 backdrop-blur-sm p-4">
          <div className="bg-card-bg border border-border rounded-2xl shadow-2xl max-w-[400px] w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <div className="flex items-center gap-3 text-status-pending mb-4">
                <AlertTriangle size={24} />
                <h2 className="text-xl font-bold">Archive Event?</h2>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed">
                You are about to archive <span className="font-bold text-primary-text">{selectedEvent.title}</span>. 
                Archived events are no longer visible to students but their submissions remain in the platform records.
              </p>
            </div>
            <div className="bg-secondary-surface/30 p-4 px-6 flex items-center justify-end gap-3 border-t border-border">
              <button onClick={() => setShowArchiveModal(false)} className="px-4 py-2 text-sm font-bold text-secondary-text hover:text-primary-text">Cancel</button>
              <button className="px-6 py-2 bg-status-pending text-white text-sm font-bold rounded-xl shadow-md">Archive Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
      active 
        ? 'bg-white/10 text-white border-l-4 border-pup-gold' 
        : 'text-white/70 hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Open': 'bg-status-approved/10 text-status-approved',
    'Closing Soon': 'bg-status-pending/10 text-status-pending',
    'Upcoming': 'bg-status-info/10 text-status-info',
    'Ongoing': 'bg-soft-maroon text-pup-maroon border border-pup-maroon/20',
    'Completed': 'bg-secondary-surface text-secondary-text',
    'Draft': 'bg-main-bg text-muted-text border border-border border-dashed'
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  );
}
