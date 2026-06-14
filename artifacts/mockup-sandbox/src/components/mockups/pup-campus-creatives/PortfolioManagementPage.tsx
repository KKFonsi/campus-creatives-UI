import React, { useState } from 'react';
import { 
  MoreVertical, 
  ExternalLink, 
  Star, 
  GripVertical, 
  X, 
  Search, 
  Filter, 
  ChevronDown, 
  EyeOff, 
  Archive, 
  Trash2, 
  AlertCircle,
  Clock,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { DesktopNav } from './_shared/DesktopNav';
import './_group.css';

const FEATURED_LIMIT = 4;

const INITIAL_FEATURED = [
  { id: 1, title: 'Digital Sinta', category: 'Digital Art', thumbnail: '/__mockup/images/thumbnail_1.jpg' },
  { id: 2, title: 'Polytechnic Dreams', category: 'Graphic Design', thumbnail: '/__mockup/images/thumbnail_2.jpg' },
];

const ALL_WORKS = [
  { id: 1, title: 'Digital Sinta', category: 'Digital Art', date: 'Mar 15, 2026', status: 'Featured', recognition: 'Best of CCIS', thumbnail: '/__mockup/images/thumbnail_1.jpg', event: 'PUP Likha 2026' },
  { id: 2, title: 'Polytechnic Dreams', category: 'Graphic Design', date: 'Apr 5, 2026', status: 'Featured', thumbnail: '/__mockup/images/thumbnail_2.jpg' },
  { id: 3, title: 'Campus Frequencies', category: 'Music', date: 'May 28, 2026', status: 'Approved', thumbnail: '/__mockup/images/thumbnail_3.jpg' },
  { id: 4, title: 'Pasig at Dusk', category: 'Photography', date: 'Mar 20, 2026', status: 'Approved', thumbnail: '/__mockup/images/thumbnail_4.jpg' },
  { id: 5, title: 'Commuter\'s Canvas', category: 'Approved', date: 'Feb 12, 2026', status: 'Approved', thumbnail: '/__mockup/images/college_1.jpg' },
  { id: 6, title: 'Tinig ng Bayan', category: 'Approved', date: 'Jan 30, 2026', status: 'Hidden', thumbnail: '/__mockup/images/college_2.jpg' },
  { id: 7, title: 'Railway Sketches', category: 'Visual Art', date: 'May 10, 2026', status: 'Needs Revision', thumbnail: '/__mockup/images/college_3.jpg' },
  { id: 8, title: 'Concrete and Creativity', category: 'Visual Art', date: 'June 12, 2026', status: 'Draft', thumbnail: '/__mockup/images/college_4.jpg' },
];

export default function PortfolioManagementPage() {
  const [showArchiveModal, setShowArchiveModal] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('All');

  const statusColors: Record<string, string> = {
    'Featured': 'bg-pup-gold text-deep-maroon',
    'Approved': 'bg-status-approved/10 text-status-approved',
    'Hidden': 'bg-gray-100 text-gray-500',
    'Needs Revision': 'bg-status-needs-revision/10 text-status-needs-revision',
    'Draft': 'bg-gray-100 text-gray-400',
  };

  return (
    <div className="min-h-screen bg-main-bg font-inter pb-20">
      <DesktopNav authenticated={true} active="Profile" />

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary-text mb-2">Manage Portfolio</h1>
            <p className="text-secondary-text max-w-2xl">
              Arrange your approved works, select featured pieces, and control what appears on your public creator profile.
            </p>
          </div>
          <button className="flex items-center gap-2 text-pup-maroon font-semibold hover:underline">
            Preview Public Profile <ExternalLink size={18} />
          </button>
        </div>

        {/* Visibility Summary */}
        <div className="bg-white rounded-xl border border-border p-6 mb-10 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-status-approved rounded-full"></div>
              <span className="font-medium text-primary-text">Your profile is Public</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-text">24</span>
              <span className="text-xs text-muted-text uppercase tracking-wider font-semibold">Approved Works</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-pup-gold">6</span>
              <span className="text-xs text-muted-text uppercase tracking-wider font-semibold">Featured</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-text">18</span>
              <span className="text-xs text-muted-text uppercase tracking-wider font-semibold">Visible in Portfolio</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-soft-maroon text-pup-maroon rounded-lg font-medium hover:bg-pup-maroon hover:text-white transition-colors">
            Profile Settings
          </button>
        </div>

        {/* Section 1: Featured Works */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-primary-text">Featured Works</h2>
              <span className="px-2 py-0.5 bg-soft-gold text-warm-gold text-xs font-bold rounded uppercase">Up to 4 works</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            {INITIAL_FEATURED.map((work) => (
              <div key={work.id} className="bg-white rounded-xl border border-border overflow-hidden relative group">
                <div className="aspect-[4/3] relative">
                  <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-pup-gold text-deep-maroon text-[10px] font-bold rounded flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> FEATURED
                  </div>
                  <button className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={14} />
                  </button>
                </div>
                <div className="p-3 flex items-center gap-3">
                  <div className="cursor-grab active:cursor-grabbing text-muted-text">
                    <GripVertical size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-primary-text truncate">{work.title}</h3>
                    <p className="text-xs text-secondary-text">{work.category}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Limit Warning Placeholder */}
            <div className="col-span-2 bg-soft-gold/50 border border-dashed border-warm-gold/30 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <Star className="text-warm-gold mb-2" size={24} />
              <p className="text-sm font-medium text-warm-gold">You've reached the 4-work limit</p>
              <p className="text-xs text-secondary-text mt-1">Remove a featured work to add another.</p>
            </div>
          </div>
        </section>

        {/* Section 2: All Approved Works */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary-text">All Approved Works</h2>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
                <input 
                  type="text" 
                  placeholder="Search works..." 
                  className="pl-10 pr-4 py-2 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pup-maroon w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium text-secondary-text hover:bg-secondary-surface transition-colors">
                <Filter size={16} /> Filter by Category <ChevronDown size={14} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium text-secondary-text hover:bg-secondary-surface transition-colors">
                Sort: Recently Added <ChevronDown size={14} />
              </button>
              <div className="flex items-center gap-2 ml-4">
                <input type="checkbox" id="selectAll" className="w-4 h-4 accent-pup-maroon rounded" />
                <label htmlFor="selectAll" className="text-sm font-medium text-secondary-text">Select All</label>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {ALL_WORKS.filter(w => w.status !== 'Hidden').map((work) => (
              <div 
                key={work.id} 
                className={`bg-white rounded-xl border border-border p-3 flex items-center gap-4 hover:shadow-sm transition-shadow group ${work.status === 'Draft' ? 'opacity-60' : ''}`}
              >
                <div className="cursor-grab active:cursor-grabbing text-muted-text">
                  <GripVertical size={20} />
                </div>
                
                <div className="w-20 h-16 rounded overflow-hidden flex-shrink-0">
                  <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-primary-text truncate">{work.title}</h3>
                    <span className="text-[10px] text-muted-text px-1.5 py-0.5 bg-secondary-surface rounded uppercase font-semibold">
                      {work.category}
                    </span>
                    {work.recognition && (
                      <span className="text-[10px] text-warm-gold px-1.5 py-0.5 bg-soft-gold rounded uppercase font-bold flex items-center gap-0.5">
                        <Star size={8} fill="currentColor" /> {work.recognition}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-secondary-text">
                    <span className="flex items-center gap-1"><Clock size={12} /> Approved {work.date}</span>
                    {work.event && <span className="flex items-center gap-1 text-pup-maroon font-medium"><Star size={12} /> {work.event}</span>}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${statusColors[work.status]}`}>
                    {work.status}
                  </span>
                  
                  {work.status === 'Hidden' && <EyeOff size={16} className="text-muted-text" />}
                  
                  <div className="relative group/menu">
                    <button className="p-2 text-secondary-text hover:bg-secondary-surface rounded-lg">
                      <MoreVertical size={20} />
                    </button>
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-border rounded-xl shadow-xl py-2 z-10 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all">
                      <button className="w-full text-left px-4 py-2 text-sm text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors flex items-center gap-2">
                        <Star size={16} /> Set as Featured
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors flex items-center gap-2">
                        <EyeOff size={16} /> Hide from Profile
                      </button>
                      <button 
                        onClick={() => setShowArchiveModal(work.title)}
                        className="w-full text-left px-4 py-2 text-sm text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors flex items-center gap-2"
                      >
                        <Archive size={16} /> Archive Work
                      </button>
                      <div className="h-px bg-border my-1"></div>
                      <button className="w-full text-left px-4 py-2 text-sm text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors flex items-center gap-2">
                        <ExternalLink size={16} /> Open Work
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Hidden Works */}
        <section className="mb-6">
          <button className="w-full flex items-center justify-between p-4 bg-secondary-surface border border-border rounded-xl hover:bg-border/30 transition-colors">
            <div className="flex items-center gap-3">
              <EyeOff size={20} className="text-secondary-text" />
              <span className="font-bold text-primary-text">Hidden Works</span>
              <span className="bg-white px-2 py-0.5 rounded text-xs font-bold text-secondary-text">1</span>
            </div>
            <ChevronDown size={20} className="text-secondary-text" />
          </button>
        </section>

        {/* Section 4: Archived Works */}
        <section className="mb-12">
          <button className="w-full flex items-center justify-between p-4 bg-secondary-surface border border-border rounded-xl hover:bg-border/30 transition-colors">
            <div className="flex items-center gap-3">
              <Archive size={20} className="text-secondary-text" />
              <span className="font-bold text-primary-text">Archived Works</span>
              <span className="bg-white px-2 py-0.5 rounded text-xs font-bold text-secondary-text">0</span>
            </div>
            <ChevronDown size={20} className="text-secondary-text" />
          </button>
        </section>
      </main>

      {/* Archive Modal */}
      {showArchiveModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <div className="w-16 h-16 bg-red-50 text-status-rejected rounded-full flex items-center justify-center mb-6 mx-auto">
              <Archive size={32} />
            </div>
            <h3 className="text-2xl font-bold text-center text-primary-text mb-2">Archive '{showArchiveModal}'?</h3>
            <p className="text-center text-secondary-text mb-8 px-4">
              This will remove the work from your public profile and all collections. You can restore it later from the Archived section.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setShowArchiveModal(null)}
                className="py-3 px-6 bg-secondary-surface text-primary-text font-bold rounded-xl hover:bg-border transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowArchiveModal(null)}
                className="py-3 px-6 bg-status-rejected text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Archive size={18} /> Archive
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
