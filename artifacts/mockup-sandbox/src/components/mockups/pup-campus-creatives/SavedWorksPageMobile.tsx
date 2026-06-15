import React, { useState } from 'react';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { 
  Search, 
  Filter, 
  Bookmark, 
  Plus, 
  MoreHorizontal,
  FolderPlus,
  Share2,
  Trash2,
  ExternalLink,
  Heart
} from 'lucide-react';
import './_group.css';

interface SavedWorksPageMobileProps {
  onBack?: () => void;
  onWorkDetail?: () => void;
}

export function SavedWorksPageMobile({ onBack, onWorkDetail }: SavedWorksPageMobileProps = {}) {
  const [activeCollection, setActiveCollection] = useState('All Saved');
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const collections = [
    { name: "All Saved", count: 18 },
    { name: "Inspiration", count: 6 },
    { name: "Photography", count: 4 },
    { name: "UI/UX", count: 5 },
    { name: "Event Entries", count: 3 },
    { name: "Spoken Word", count: 2 },
  ];

  const savedWorks = [
    { title: "Sta. Mesa After the Rain", creator: "Bianca Reyes", cat: "Photography", img: "/__mockup/images/thumbnail_1.jpg", likes: 245 },
    { title: "Tinig sa Lagoon", creator: "Mika Santos", cat: "Spoken Word", img: "/__mockup/images/thumbnail_2.jpg", likes: 182 },
    { title: "Sinta sa Riles", creator: "Marco V.", cat: "Illustration", img: "/__mockup/images/thumbnail_4.jpg", likes: 156 },
    { title: "Manila Student Life", creator: "Elena M.", cat: "Photography", img: "/__mockup/images/event_1.jpg", likes: 120 },
    { title: "Engineering in Motion", creator: "Carlos D.", cat: "Digital Art", img: "/__mockup/images/event_2.jpg", likes: 98 },
    { title: "Pasig at Dusk", creator: "Julia P.", cat: "Photography", img: "/__mockup/images/event_3.jpg", likes: 87 },
  ];

  const handleLongPress = (work: any) => {
    setSelectedWork(work);
    setShowActionSheet(true);
  };

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-[80px]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-warm-white border-b border-border px-4 py-4">
        {onBack && (
          <button onClick={onBack} className="mb-2 text-[12px] font-bold text-pup-maroon">
            Creator Profile
          </button>
        )}
        <h1 className="text-xl font-bold text-primary-text">Saved Works</h1>
      </header>

      {/* Collection Chips */}
      <div className="bg-warm-white border-b border-border py-4">
        <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar">
          {collections.map((col) => (
            <button
              key={col.name}
              onClick={() => setActiveCollection(col.name)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all border ${activeCollection === col.name ? 'bg-pup-maroon border-pup-maroon text-white shadow-sm' : 'bg-white border-border text-secondary-text'}`}
            >
              {col.name} ({col.count})
            </button>
          ))}
          <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold bg-white border border-border text-pup-maroon flex items-center gap-1">
             <Plus size={14} /> New
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-4 py-4 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
          <input 
            type="text" 
            placeholder="Search saved..." 
            className="w-full pl-10 pr-4 py-2 bg-secondary-surface/50 border border-border rounded-xl text-sm focus:outline-none"
          />
        </div>
        <button className="p-2 bg-white border border-border rounded-xl text-secondary-text">
          <Filter size={18} />
        </button>
      </div>

      {/* Work Grid */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {savedWorks.map((work, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm active:scale-[0.98] transition-transform"
              onClick={() => handleLongPress(work)}
            >
              <div className="aspect-square relative overflow-hidden bg-secondary-surface">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 rounded-full bg-pup-gold text-dark-surface flex items-center justify-center shadow-sm">
                    <Bookmark size={12} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2">
                   <span className="px-1.5 py-0.5 bg-dark-surface/60 backdrop-blur text-white text-[9px] font-bold rounded">
                      {work.cat}
                   </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-bold text-primary-text mb-1 line-clamp-1">{work.title}</h3>
                <div className="flex items-center justify-between">
                   <span className="text-[10px] text-muted-text line-clamp-1">{work.creator}</span>
                   <div className="flex items-center gap-0.5 text-[9px] text-muted-text font-bold">
                      <Heart size={10} className="text-status-rejected" />
                      {work.likes}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileBottomNav />

      {/* Action Sheet */}
      {showActionSheet && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div 
            className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm"
            onClick={() => setShowActionSheet(false)}
          ></div>
          <div className="bg-white w-full rounded-t-[24px] relative z-10 animate-in slide-in-from-bottom-full duration-300 pb-safe">
            {/* Drag Handle */}
            <div className="w-12 h-1.5 bg-border rounded-full mx-auto my-3"></div>
            
            <div className="px-6 pt-2 pb-8">
               {selectedWork && (
                 <div className="flex items-center gap-4 mb-8 p-3 rounded-2xl bg-secondary-surface/30">
                   <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border">
                      <img src={selectedWork.img} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <h3 className="font-bold text-primary-text">{selectedWork.title}</h3>
                     <p className="text-xs text-secondary-text">{selectedWork.creator} • {selectedWork.cat}</p>
                   </div>
                 </div>
               )}

               <div className="space-y-1">
                 <button
                    onClick={() => {
                      setShowActionSheet(false);
                      onWorkDetail?.();
                    }}
                    className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-primary-text font-bold text-sm hover:bg-secondary-surface transition-colors"
                 >
                    <ExternalLink size={20} className="text-pup-maroon" />
                    Open Work Details
                 </button>
                 <button className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-primary-text font-bold text-sm hover:bg-secondary-surface transition-colors">
                    <FolderPlus size={20} className="text-pup-maroon" />
                    Add to Collection
                 </button>
                 <button className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-primary-text font-bold text-sm hover:bg-secondary-surface transition-colors">
                    <Share2 size={20} className="text-pup-maroon" />
                    Share with Others
                 </button>
                 <button className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-status-rejected font-bold text-sm hover:bg-status-rejected/5 transition-colors">
                    <Trash2 size={20} />
                    Remove from Saved
                 </button>
                 <button 
                  onClick={() => setShowActionSheet(false)}
                  className="w-full mt-4 py-4 rounded-xl bg-secondary-surface text-primary-text font-bold text-sm"
                 >
                    Cancel
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
