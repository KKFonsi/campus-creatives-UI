import React, { useState } from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  X, 
  Heart, 
  Bookmark, 
  Award,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import './_group.css';

interface ExplorePageMobileProps {
  guest?: boolean;
  onSearch?: () => void;
  onSearchResults?: () => void;
  onWorkDetail?: () => void;
}

export function ExplorePageMobile({ guest = false, onSearch, onSearchResults, onWorkDetail }: ExplorePageMobileProps = {}) {
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Visual Art', 'Photography', 'Digital Art', 'Music', 'Film', 'Spoken Word', 'Dance'];

  const works = [
    { id: 1, title: 'Sta. Mesa After the Rain', creator: 'Bianca Reyes', college: 'COC', category: 'Photography', highlight: 'Campus Highlight', image: '/__mockup/images/thumbnail_1.jpg', appreciates: 245 },
    { id: 2, title: 'Sinta sa Riles', creator: 'Marco Villanueva', college: 'COC', category: 'Photography', image: '/__mockup/images/thumbnail_2.jpg', appreciates: 182 },
    { id: 3, title: 'Digital Sinta', creator: 'Rafael Mendoza', college: 'CCIS', category: 'Digital Art', highlight: 'CCIS Highlight', image: '/__mockup/images/thumbnail_3.jpg', appreciates: 156 },
    { id: 4, title: 'Railway Sketches', creator: 'Elena Mercado', college: 'CADBE', category: 'Visual Art', image: '/__mockup/images/thumbnail_4.jpg', appreciates: 142 },
    { id: 5, title: 'Campus Frequencies', creator: 'Joven Bautista', college: 'COC', category: 'Music', image: '/__mockup/images/event_1.jpg', appreciates: 98 },
    { id: 6, title: 'Polytechnic Dreams', creator: 'Dana Cruz', college: 'CCIS', category: 'Graphic Design', image: '/__mockup/images/thumbnail_3.jpg', appreciates: 120 },
  ];

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-[80px] relative">
      <MobileHeader publicMode={guest} />

      {/* Sticky Search & Filter Header */}
      <div className="sticky top-[60px] z-30 bg-main-bg/95 backdrop-blur px-4 py-3 border-b border-border shadow-sm">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" />
            <input 
              type="text" 
              placeholder="Search works..." 
              onFocus={onSearch}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onSearchResults?.();
                }
              }}
              className="w-full h-10 pl-10 pr-4 bg-white border border-border rounded-full text-sm outline-none focus:border-pup-maroon transition-colors"
            />
          </div>
          <button 
            onClick={() => setShowFilters(true)}
            className="w-10 h-10 shrink-0 bg-white border border-border rounded-full flex items-center justify-center text-primary-text relative"
          >
            <SlidersHorizontal size={18} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-pup-maroon text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-main-bg">
              2
            </span>
          </button>
        </div>

        {/* Horizontal Categories */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 mt-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors ${
                activeCategory === cat 
                  ? 'bg-pup-maroon text-white' 
                  : 'bg-white border border-border text-secondary-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Recommended for You</h2>
          <span className="text-[12px] text-muted-text">12 works</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-2 gap-3">
          {works.map((work) => (
            <button
              key={work.id}
              type="button"
              onClick={onWorkDetail}
              className="bg-card-bg rounded-xl border border-border overflow-hidden flex flex-col shadow-sm text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20"
            >
              <div className="relative aspect-square">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                {work.highlight && (
                  <div className="absolute top-2 left-2 bg-pup-gold/90 backdrop-blur-sm p-1 rounded shadow-sm">
                    <Award size={12} className="text-dark-maroon" />
                  </div>
                )}
                <span className="absolute top-2 right-2 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-text" aria-hidden="true">
                  <Bookmark size={14} />
                </span>
              </div>
              <div className="p-3 flex-1 flex flex-col">
                <h3 className="text-[13px] font-bold leading-tight mb-1 line-clamp-1">{work.title}</h3>
                <p className="text-[11px] text-secondary-text mb-2 truncate">{work.creator}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] px-1.5 py-0.5 bg-soft-maroon text-pup-maroon font-bold rounded">{work.college}</span>
                  <div className="flex items-center gap-0.5 text-[11px] text-muted-text">
                    <Heart size={10} className="fill-current" />
                    {work.appreciates}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button className="w-full mt-8 py-3 bg-white border border-border text-primary-text font-bold rounded-xl text-sm">
          Load More
        </button>
      </main>

      {/* Filter Bottom Sheet (Mockup Overlay) */}
      {showFilters && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex flex-col justify-end">
          <div className="bg-white rounded-t-[32px] w-full max-h-[85%] overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <button className="text-sm font-medium text-muted-text" onClick={() => setShowFilters(false)}>Cancel</button>
              <h3 className="font-bold">Filters</h3>
              <button className="text-sm font-bold text-pup-maroon">Reset</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div className="space-y-4">
                <h4 className="font-bold text-lg">College</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['COC', 'CCIS', 'CAL', 'CADBE', 'CE', 'CAF'].map(c => (
                    <button key={c} className={`py-2 rounded-lg border text-sm font-medium ${c === 'COC' ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' : 'border-border'}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg">Sort By</h4>
                <div className="space-y-1">
                  {['Recently Approved', 'Most Appreciated', 'Featured', 'Most Saved'].map(s => (
                    <button key={s} className="flex items-center justify-between w-full py-3 border-b border-border last:border-0">
                      <span className={`text-[15px] ${s === 'Recently Approved' ? 'font-bold text-pup-maroon' : 'text-primary-text'}`}>{s}</span>
                      {s === 'Recently Approved' && <div className="w-2 h-2 rounded-full bg-pup-maroon" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border bg-warm-white">
              <button 
                className="w-full py-4 bg-pup-maroon text-white font-bold rounded-2xl shadow-lg"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters (12 Works)
              </button>
            </div>
          </div>
        </div>
      )}

      <MobileBottomNav guest={guest} />
    </div>
  );
}
