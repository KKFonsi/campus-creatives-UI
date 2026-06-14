import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  Bookmark, 
  MoreVertical, 
  Plus, 
  Share2, 
  FolderPlus, 
  ExternalLink,
  Trash2,
  Heart,
  Grid,
  ChevronRight
} from 'lucide-react';
import './_group.css';

export function SavedWorksPage() {
  const [activeCollection, setActiveCollection] = useState('All Saved');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const collections = [
    { name: "All Saved", count: 18 },
    { name: "Inspiration", count: 6 },
    { name: "Campus Photography", count: 4 },
    { name: "UI/UX References", count: 5 },
    { name: "Event Entries", count: 3 },
    { name: "Spoken Word", count: 2 },
    { name: "Watch Later", count: 4 },
  ];

  const savedWorks = [
    { title: "Sta. Mesa After the Rain", creator: "Bianca Reyes", college: "COC", cat: "Photography", img: "/__mockup/images/thumbnail_1.jpg", likes: 245 },
    { title: "Tinig sa Lagoon", creator: "Mika Santos", college: "CAL", cat: "Spoken Word", img: "/__mockup/images/thumbnail_2.jpg", likes: 182 },
    { title: "Sinta sa Riles", creator: "Marco Villanueva", college: "CAL", cat: "Illustration", img: "/__mockup/images/thumbnail_4.jpg", likes: 156 },
    { title: "Manila Student Life", creator: "Elena Mercado", college: "COC", cat: "Photography", img: "/__mockup/images/event_1.jpg", likes: 120 },
    { title: "Engineering in Motion", creator: "Carlos D.", college: "CE", cat: "Digital Art", img: "/__mockup/images/event_2.jpg", likes: 98 },
    { title: "Pasig at Dusk", creator: "Julia P.", college: "CAL", cat: "Photography", img: "/__mockup/images/event_3.jpg", likes: 87 },
    { title: "Voices from the Lagoon", creator: "Sam T.", college: "CAL", cat: "Spoken Word", img: "/__mockup/images/thumbnail_3.jpg", likes: 76 },
    { title: "Railway Sketches", creator: "Rafael M.", college: "CADBE", cat: "Visual Art", img: "/__mockup/images/thumbnail_2.jpg", likes: 65 },
    { title: "Digital Sinta", creator: "Rafael Mendoza", college: "CCIS", cat: "Digital Art", img: "/__mockup/images/thumbnail_3.jpg", likes: 54 },
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter">
      <DesktopNav authenticated={true} active="Gallery" />
      
      <main className="max-w-[1200px] mx-auto px-8 py-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">Saved Works</h1>
            <p className="text-secondary-text">Keep creative works you want to revisit, study, or support.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
                <input 
                  type="text" 
                  placeholder="Search saved works..." 
                  className="pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 w-[240px]"
                />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-sm font-medium hover:bg-secondary-surface transition-colors">
                <Filter size={16} />
                Category
                <ChevronDown size={14} />
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-sm font-medium hover:bg-secondary-surface transition-colors">
                Sort: Recently Saved
                <ChevronDown size={14} />
             </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="w-[220px] shrink-0">
            <div className="space-y-1">
              {collections.map((col) => (
                <button 
                  key={col.name}
                  onClick={() => setActiveCollection(col.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeCollection === col.name ? 'bg-soft-maroon text-pup-maroon' : 'text-secondary-text hover:bg-secondary-surface'}`}
                >
                  <span className="flex items-center gap-3">
                    <Grid size={16} className={activeCollection === col.name ? 'text-pup-maroon' : 'text-muted-text'} />
                    {col.name}
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full ${activeCollection === col.name ? 'bg-pup-maroon text-white' : 'bg-secondary-surface text-muted-text'}`}>
                    {col.count}
                  </span>
                </button>
              ))}
              <button 
                onClick={() => setShowCreateModal(true)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-pup-maroon hover:bg-soft-maroon transition-colors mt-4"
              >
                <Plus size={18} />
                Create Collection
              </button>
            </div>
          </aside>

          {/* Grid Area */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6">
              {savedWorks.map((work, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden bg-secondary-surface">
                    <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-3 right-3 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="p-2 bg-white/90 backdrop-blur rounded-full text-pup-maroon shadow-sm hover:bg-white transition-colors">
                        <Share2 size={16} />
                      </button>
                      <button className="p-2 bg-white/90 backdrop-blur rounded-full text-pup-maroon shadow-sm hover:bg-white transition-colors">
                        <FolderPlus size={16} />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3">
                       <div className="w-8 h-8 rounded-full bg-pup-gold text-dark-surface flex items-center justify-center shadow-md">
                          <Bookmark size={16} fill="currentColor" />
                       </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                       <span className="px-2 py-1 bg-dark-surface/60 backdrop-blur text-white text-[10px] font-bold rounded">
                          {work.cat}
                       </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                       <div>
                          <h3 className="font-bold text-primary-text mb-1 group-hover:text-pup-maroon transition-colors line-clamp-1">{work.title}</h3>
                          <div className="flex items-center gap-2">
                             <div className="w-5 h-5 rounded-full bg-secondary-surface border border-border overflow-hidden shrink-0">
                                <img src="/__mockup/images/creator-portrait.jpg" className="w-full h-full object-cover" />
                             </div>
                             <span className="text-[12px] text-secondary-text font-medium line-clamp-1">
                               {work.creator} • {work.college}
                             </span>
                          </div>
                       </div>
                       <div className="relative group/menu">
                          <button className="p-1 hover:bg-secondary-surface rounded transition-colors text-muted-text">
                             <MoreVertical size={18} />
                          </button>
                          {/* Hover Menu */}
                          <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-xl border border-border py-2 opacity-0 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto transition-all z-20">
                             <button className="w-full text-left px-4 py-2 text-xs font-bold text-primary-text hover:bg-secondary-surface flex items-center gap-2">
                                <ExternalLink size={14} /> Open Work
                             </button>
                             <button className="w-full text-left px-4 py-2 text-xs font-bold text-primary-text hover:bg-secondary-surface flex items-center gap-2">
                                <FolderPlus size={14} /> Add to Collection
                             </button>
                             <button className="w-full text-left px-4 py-2 text-xs font-bold text-status-rejected hover:bg-status-rejected/5 flex items-center gap-2">
                                <Trash2 size={14} /> Remove from Saved
                             </button>
                          </div>
                       </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                       <div className="flex items-center gap-1.5 text-xs text-muted-text">
                          <Heart size={14} className="text-status-rejected" />
                          {work.likes}
                       </div>
                       <button className="text-[11px] font-bold text-pup-maroon hover:underline flex items-center gap-1">
                         View Details <ChevronRight size={10} />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Empty state / placeholder card */}
              <div className="border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-secondary-surface/20">
                 <div className="w-12 h-12 rounded-full bg-border/50 text-muted-text flex items-center justify-center mb-4">
                    <Bookmark size={24} />
                 </div>
                 <p className="text-sm font-bold text-muted-text mb-1">Save more works</p>
                 <p className="text-[11px] text-muted-text leading-relaxed">Save works from the gallery to find them here easily.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Create Collection Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm"
            onClick={() => setShowCreateModal(false)}
          ></div>
          <div className="bg-white w-full max-w-[400px] rounded-2xl border border-border shadow-2xl relative z-10 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">New Collection</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-muted-text uppercase mb-2 block tracking-wider">Collection Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Design Inspiration" 
                    className="w-full bg-secondary-surface/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pup-maroon/20"
                    autoFocus
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-3 px-4 rounded-xl border border-border font-bold text-primary-text hover:bg-secondary-surface transition-colors text-sm"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 py-3 px-4 rounded-xl bg-pup-maroon text-white font-bold hover:bg-deep-maroon transition-colors shadow-sm text-sm"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
