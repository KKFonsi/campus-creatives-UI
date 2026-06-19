import React, { useState } from 'react';
import { 
  MoreVertical, 
  Star, 
  X, 
  Plus, 
  ChevronRight, 
  EyeOff, 
  Archive,
  Search,
  LayoutGrid,
  Filter,
  Check
} from 'lucide-react';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { navigateTo } from '../../../app/demo';
import './_group.css';

const INITIAL_FEATURED = [
  { id: 1, title: 'Digital Sinta', category: 'Digital Art', thumbnail: '/__mockup/images/thumbnail_1.jpg' },
  { id: 2, title: 'Polytechnic Dreams', category: 'Graphic Design', thumbnail: '/__mockup/images/thumbnail_2.jpg' },
  { id: 3, title: 'Campus Frequencies', category: 'Music', thumbnail: '/__mockup/images/thumbnail_3.jpg' },
  { id: 4, title: 'Pasig at Dusk', category: 'Photography', thumbnail: '/__mockup/images/thumbnail_4.jpg' },
];

const ALL_WORKS = [
  { id: 1, title: 'Digital Sinta', category: 'Digital Art', status: 'Featured', thumbnail: '/__mockup/images/thumbnail_1.jpg' },
  { id: 2, title: 'Polytechnic Dreams', category: 'Graphic Design', status: 'Featured', thumbnail: '/__mockup/images/thumbnail_2.jpg' },
  { id: 3, title: 'Campus Frequencies', category: 'Music', status: 'Approved', thumbnail: '/__mockup/images/thumbnail_3.jpg' },
  { id: 4, title: 'Pasig at Dusk', category: 'Photography', status: 'Approved', thumbnail: '/__mockup/images/thumbnail_4.jpg' },
  { id: 5, title: 'Commuter\'s Canvas', category: 'Art', status: 'Approved', thumbnail: '/__mockup/images/college_1.jpg' },
  { id: 6, title: 'Tinig ng Bayan', category: 'Art', status: 'Hidden', thumbnail: '/__mockup/images/college_2.jpg' },
];

export default function PortfolioManagementPageMobile() {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [bulkMode, setBulkMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const openWork = (title: string) => navigateTo(`/student/work/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`);

  const toggleSelect = (id: number) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-[140px]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-warm-white border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-primary-text">Manage Portfolio</h1>
        <button className="text-pup-maroon text-sm font-semibold">Preview Profile</button>
      </header>

      {/* Portfolio Summary */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-2xl border border-border p-5 grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary-text">24</span>
            <span className="text-[10px] text-muted-text uppercase font-bold">Approved</span>
          </div>
          <div className="flex flex-col border-x border-border">
            <span className="text-xl font-bold text-pup-gold">6</span>
            <span className="text-[10px] text-muted-text uppercase font-bold">Featured</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary-text">18</span>
            <span className="text-[10px] text-muted-text uppercase font-bold">Visible</span>
          </div>
        </div>
      </div>

      {/* Featured Works - Horizontal Scroll */}
      <section className="mb-8">
        <div className="px-4 flex items-center justify-between mb-4">
          <h2 className="font-bold text-primary-text">Featured Works (4)</h2>
          <span className="text-[10px] text-warm-gold font-bold bg-soft-gold px-2 py-0.5 rounded uppercase tracking-wider">Limit Reached</span>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-4 pb-2 no-scrollbar">
          {INITIAL_FEATURED.map((work) => (
            <div key={work.id} className="w-[140px] flex-shrink-0 bg-white rounded-xl border border-border overflow-hidden relative">
              <div className="aspect-square relative">
                <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover" />
                <button className="absolute top-1.5 right-1.5 p-1 bg-black/50 text-white rounded-full">
                  <X size={12} />
                </button>
              </div>
              <div className="p-2">
                <h3 className="text-xs font-bold text-primary-text truncate">{work.title}</h3>
                <p className="text-[10px] text-secondary-text truncate">{work.category}</p>
              </div>
            </div>
          ))}
          <div className="w-32 flex-shrink-0 bg-secondary-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center text-muted-text">
            <Plus size={24} />
            <span className="text-[10px] font-bold mt-1">Add New</span>
          </div>
        </div>
      </section>

      {/* All Works - Grid */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-primary-text">All Approved Works</h2>
          <button 
            onClick={() => setBulkMode(!bulkMode)}
            className="text-xs font-bold text-pup-maroon bg-soft-maroon px-3 py-1.5 rounded-lg"
          >
            {bulkMode ? 'Cancel Selection' : 'Bulk Select'}
          </button>
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
          <button className="px-4 py-2 bg-pup-maroon text-white rounded-full text-xs font-bold flex-shrink-0">All (24)</button>
          <button className="px-4 py-2 bg-white border border-border text-secondary-text rounded-full text-xs font-medium flex-shrink-0">Digital Art</button>
          <button className="px-4 py-2 bg-white border border-border text-secondary-text rounded-full text-xs font-medium flex-shrink-0">Graphic Design</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {ALL_WORKS.map((work) => (
            <div 
              key={work.id} 
              className={`bg-white rounded-xl border border-border overflow-hidden relative group ${bulkMode && selectedIds.includes(work.id) ? 'ring-2 ring-pup-maroon border-transparent' : ''}`}
              onClick={() => bulkMode ? toggleSelect(work.id) : openWork(work.title)}
            >
              <div className="aspect-[4/3] relative">
                <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover" />
                
                {bulkMode ? (
                  <div className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center ${selectedIds.includes(work.id) ? 'bg-pup-maroon' : 'bg-black/20'}`}>
                    {selectedIds.includes(work.id) && <Check size={12} className="text-white stroke-[3px]" />}
                  </div>
                ) : (
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedWork(work.title); }}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-lg"
                  >
                    <MoreVertical size={16} />
                  </button>
                )}

                <div className="absolute bottom-2 left-2">
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${work.status === 'Featured' ? 'bg-pup-gold text-deep-maroon' : 'bg-white/90 text-primary-text'}`}>
                    {work.status}
                  </span>
                </div>
              </div>
              <div className="p-2.5">
                <h3 className="text-xs font-bold text-primary-text truncate mb-0.5">{work.title}</h3>
                <p className="text-[10px] text-secondary-text truncate">{work.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Sheet */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-end backdrop-blur-sm" onClick={() => setSelectedWork(null)}>
          <div className="w-full bg-white rounded-t-[32px] p-6 pb-12 animate-in slide-in-from-bottom duration-300" onClick={e => e.stopPropagation()}>
            <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6"></div>
            <h3 className="text-lg font-bold text-primary-text mb-1">{selectedWork}</h3>
            <p className="text-sm text-secondary-text mb-6">Choose an action for this work</p>
            
            <div className="space-y-2">
              <button className="w-full p-4 flex items-center gap-4 bg-secondary-surface rounded-2xl font-bold text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors">
                <Star size={20} /> Set as Featured
              </button>
              <button className="w-full p-4 flex items-center gap-4 bg-secondary-surface rounded-2xl font-bold text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors">
                <EyeOff size={20} /> Hide from Profile
              </button>
              <button className="w-full p-4 flex items-center gap-4 bg-secondary-surface rounded-2xl font-bold text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors">
                <Archive size={20} /> Archive Work
              </button>
              <button onClick={() => { openWork(selectedWork); setSelectedWork(null); }} className="w-full p-4 flex items-center gap-4 bg-secondary-surface rounded-2xl font-bold text-primary-text hover:bg-soft-maroon hover:text-pup-maroon transition-colors">
                <LayoutGrid size={20} /> Open Work
              </button>
              <button 
                onClick={() => setSelectedWork(null)}
                className="w-full p-4 mt-2 font-bold text-secondary-text text-center hover:text-primary-text"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {bulkMode && selectedIds.length > 0 && (
        <div className="fixed bottom-[84px] left-4 right-4 bg-pup-maroon text-white p-4 rounded-2xl shadow-xl flex items-center justify-between z-40 animate-in slide-in-from-bottom-4">
          <span className="font-bold">{selectedIds.length} works selected</span>
          <div className="flex gap-2">
            <button className="p-2 bg-white/20 rounded-lg"><EyeOff size={18} /></button>
            <button className="p-2 bg-white/20 rounded-lg"><Archive size={18} /></button>
          </div>
        </div>
      )}

      <MobileBottomNav />
    </div>
  );
}
