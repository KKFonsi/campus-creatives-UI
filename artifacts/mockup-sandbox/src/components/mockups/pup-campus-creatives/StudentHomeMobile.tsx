import React, { useState } from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { Award, Heart, Bookmark, Search } from 'lucide-react';
import { navigateTo } from '../../../app/demo';
import { CREATIVE_CATEGORY_LABELS } from '../../../app/data/creativeCategories';
import { routePaths } from '../../../app/routes';
import './_group.css';

export function StudentHomeMobile() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [visibleSubmissionCount, setVisibleSubmissionCount] = useState(4);
  
  const toggleLike = (id: string) => setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  const latestSubmissions = [
    { id: '1', title: 'Sinta sa Riles', creator: 'M. Villanueva', img: '/__mockup/images/thumbnail_2.jpg' },
    { id: '2', title: 'Campus Freq.', creator: 'L. Santos', img: '/__mockup/images/thumbnail_3.jpg' },
    { id: '3', title: 'Concrete Life', creator: 'D. Cruz', img: '/__mockup/images/thumbnail_4.jpg' },
    { id: '4', title: 'Digital Sinta', creator: 'M. Torres', img: '/__mockup/images/thumbnail_1.jpg' },
    { id: '5', title: 'Pasig at Dusk', creator: 'S. Lim', img: '/__mockup/images/college_1.jpg' },
    { id: '6', title: 'Tinig ng Bayan', creator: 'R. Santos', img: '/__mockup/images/thumbnail_4.jpg' },
    { id: '7', title: 'Polytechnic Dreams', creator: 'D. Cruz', img: '/__mockup/images/thumbnail_3.jpg' },
    { id: '8', title: 'Railway Sketches', creator: 'E. Mercado', img: '/__mockup/images/thumbnail_2.jpg' },
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto pb-[68px]">
      <MobileHeader />
      
      {/* Search & Greeting */}
      <div className="px-4 py-4 bg-warm-white border-b border-border">
        <h1 className="text-[20px] font-bold tracking-tight mb-1">Good day, Andrea.</h1>
        <p className="text-[13px] text-secondary-text mb-4">Discover new student works.</p>
        
        <button
          type="button"
          onClick={() => navigateTo(routePaths.student.search)}
          className="w-full bg-secondary-surface rounded-lg px-3 py-2 border border-border flex items-center gap-2 text-left"
        >
          <Search size={16} className="text-secondary-text" />
          <span className="text-[14px] text-muted-text">Search creatives, works, or colleges...</span>
        </button>
      </div>

      {/* Featured Work */}
      <section className="px-4 py-6">
        <h2 className="text-[16px] font-bold mb-3 flex items-center gap-2">
          Featured Work <span className="px-1.5 py-0.5 bg-soft-maroon text-pup-maroon text-[9px] rounded uppercase font-bold">Highlight</span>
        </h2>
        
        <div className="bg-card-bg rounded-[14px] overflow-hidden border border-border shadow-sm">
          <div className="aspect-[4/3] bg-secondary-surface relative">
            <img src="/__mockup/images/thumbnail_1.jpg" alt="Featured" className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 px-2 py-1 bg-card-bg/90 backdrop-blur text-pup-maroon text-[11px] font-bold rounded flex items-center gap-1 shadow-sm">
              <Award size={12} /> Highlight
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-[18px] font-bold mb-1 leading-tight">Sta. Mesa After the Rain</h3>
            <div className="text-[13px] text-secondary-text mb-3">Bianca Reyes • COC</div>
            <p className="text-[13px] text-primary-text line-clamp-2 mb-4">
              "A reflection of the daily commute of thousands of Iskolar ng Bayan..."
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button onClick={() => toggleLike('feat')} className={`w-8 h-8 rounded-full border flex items-center justify-center ${liked['feat'] ? 'border-pup-maroon bg-soft-maroon text-pup-maroon' : 'border-border bg-card-bg'}`}>
                  <Heart size={14} fill={liked['feat'] ? 'currentColor' : 'none'} />
                </button>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-card-bg">
                  <Bookmark size={14} />
                </button>
              </div>
              <button onClick={() => navigateTo('/student/work/sta-mesa-after-the-rain')} className="px-3 py-1.5 bg-pup-maroon text-white font-medium rounded-md text-[12px]">
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Horizontal */}
      <section className="py-2 mb-4">
        <div className="flex gap-2 overflow-x-auto px-4 pb-2 snap-x no-scrollbar">
          {CREATIVE_CATEGORY_LABELS.slice(0, 8).map((cat, i) => (
            <div key={cat} className={`snap-start shrink-0 px-3 py-1.5 rounded-full text-[13px] font-medium border ${i === 0 ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' : 'bg-card-bg border-border text-primary-text'}`}>
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 pb-8">
        <h2 className="text-[16px] font-bold mb-3">Latest Submissions</h2>
        <div className="grid grid-cols-2 gap-3">
          {latestSubmissions.slice(0, visibleSubmissionCount).map(work => (
            <button key={work.id} type="button" onClick={() => navigateTo(`/student/work/${work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`)} className="bg-card-bg rounded-[10px] border border-border overflow-hidden text-left">
              <div className="aspect-square bg-secondary-surface relative">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
                <button onClick={(event) => { event.stopPropagation(); toggleLike(work.id); }} className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-card-bg/80 flex items-center justify-center">
                  <Heart size={12} className={liked[work.id] ? "fill-pup-maroon text-pup-maroon" : "text-primary-text"} />
                </button>
              </div>
              <div className="p-2.5">
                <h3 className="text-[13px] font-semibold mb-0.5 line-clamp-1">{work.title}</h3>
                <div className="text-[11px] text-secondary-text">{work.creator}</div>
              </div>
            </button>
          ))}
        </div>
        {visibleSubmissionCount < latestSubmissions.length && (
          <button
            type="button"
            onClick={() => setVisibleSubmissionCount((count) => Math.min(count + 4, latestSubmissions.length))}
            className="mt-5 w-full rounded-xl border border-pup-maroon bg-card-bg py-3 text-[13px] font-black text-pup-maroon"
          >
            Load More
          </button>
        )}
      </section>

      <MobileBottomNav />
    </div>
  );
}
