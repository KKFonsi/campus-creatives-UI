import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { Award, Heart, Bookmark, Share, Search, Filter } from 'lucide-react';
import { navigateTo } from '../../../app/demo';
import { CREATIVE_CATEGORY_LABELS, normalizeCreativeCategory } from '../../../app/data/creativeCategories';
import { routePaths } from '../../../app/routes';
import './_group.css';

export function StudentHomeDesktop() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleSave = (id: string) => setSaved(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto">
      <DesktopNav authenticated={true} />
      
      {/* Greeting Header */}
      <section className="w-full max-w-[1200px] mx-auto px-8 pt-12 pb-8 flex items-center justify-between border-b border-border">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight mb-1">Good day, Andrea.</h1>
          <p className="text-[16px] text-secondary-text">Discover new student works, creative opportunities, and campus highlights.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigateTo(routePaths.student.profile)} className="px-5 py-2.5 bg-transparent border-2 border-border text-primary-text font-medium rounded-[10px] hover:border-pup-maroon hover:text-pup-maroon transition-colors text-[14px]">
            View My Portfolio
          </button>
        </div>
      </section>

      {/* Featured Work of the Week */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-10">
        <h2 className="text-[20px] font-bold mb-5 flex items-center gap-2">
          Featured Work of the Week <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[11px] rounded-full uppercase tracking-wider">Curated</span>
        </h2>
        
        <div className="bg-card-bg rounded-[20px] overflow-hidden border border-border shadow-sm flex h-[400px]">
          <div className="w-[60%] h-full bg-secondary-surface relative">
            <img src="/__mockup/images/thumbnail_1.jpg" alt="Sta. Mesa After the Rain" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-card-bg/90 backdrop-blur text-pup-maroon text-[13px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
              <Award size={14} /> Campus Highlight
            </div>
          </div>
          <div className="w-[40%] p-8 flex flex-col justify-center">
            <h3 className="text-[28px] font-bold mb-2 tracking-tight">Sta. Mesa After the Rain</h3>
            <div className="flex items-center gap-3 mb-6">
              <InitialsAvatar name="Bianca Reyes" className="w-8 h-8 border border-border" textClassName="text-[11px]" />
              <div>
                <div className="text-[14px] font-semibold text-primary-text leading-tight">Bianca Reyes</div>
                <div className="text-[13px] text-secondary-text leading-tight">COC • Photography</div>
              </div>
            </div>
            <p className="text-[15px] text-secondary-text leading-relaxed mb-8 flex-1">
              "A reflection of the daily commute of thousands of Iskolar ng Bayan. The reflection in the puddles outside the main building captures the resilience and quiet beauty of our campus after a heavy downpour."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleLike('featured')}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${liked['featured'] ? 'border-pup-maroon bg-soft-maroon text-pup-maroon' : 'border-border bg-card-bg hover:bg-secondary-surface'}`}
                >
                  <Heart size={18} fill={liked['featured'] ? 'currentColor' : 'none'} />
                </button>
                <button 
                  onClick={() => toggleSave('featured')}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${saved['featured'] ? 'border-pup-maroon bg-soft-maroon text-pup-maroon' : 'border-border bg-card-bg hover:bg-secondary-surface'}`}
                >
                  <Bookmark size={18} fill={saved['featured'] ? 'currentColor' : 'none'} />
                </button>
              </div>
              <button onClick={() => navigateTo('/student/work/sta-mesa-after-the-rain')} className="px-5 py-2 border-2 border-border font-medium rounded-lg hover:border-pup-maroon hover:text-pup-maroon transition-colors text-[14px]">
                View Full Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Approved Works */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] font-bold">Latest Submissions</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-[13px] font-medium hover:bg-secondary-surface transition-colors">
              <Filter size={14} /> Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {/* Work Cards */}
          {[
            { id: '1', title: 'Sinta sa Riles', creator: 'Marco Villanueva', college: 'CAL', cat: 'Illustration', likes: 182, img: '/__mockup/images/thumbnail_2.jpg' },
            { id: '2', title: 'Campus Frequencies', creator: 'Liza Santos', college: 'COC', cat: 'Digital Art', likes: 95, img: '/__mockup/images/thumbnail_3.jpg' },
            { id: '3', title: 'Concrete and Creativity', creator: 'Dave Cruz', college: 'CE', cat: 'Photography', likes: 210, img: '/__mockup/images/thumbnail_4.jpg' },
            { id: '4', title: 'Digital Sinta', creator: 'Miguel Torres', college: 'CCIS', cat: normalizeCreativeCategory('UI/UX'), likes: 144, img: '/__mockup/images/thumbnail_1.jpg' }
          ].map(work => (
            <div key={work.id} className="group bg-card-bg rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] bg-secondary-surface overflow-hidden">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button 
                  onClick={() => toggleLike(work.id)}
                  className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur bg-card-bg/80 border border-white/20 transition-colors ${liked[work.id] ? 'text-pup-maroon' : 'text-primary-text hover:text-pup-maroon'}`}
                >
                  <Heart size={16} fill={liked[work.id] ? 'currentColor' : 'none'} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-[16px] font-semibold mb-1 line-clamp-1 group-hover:text-pup-maroon transition-colors cursor-pointer">{work.title}</h3>
                <div className="text-[13px] text-secondary-text mb-3">{work.creator} • {work.college}</div>
                <div className="flex items-center justify-between text-[12px] font-medium">
                  <span className="px-2 py-0.5 bg-main-bg border border-border rounded">{work.cat}</span>
                  <span className="text-muted-text flex items-center gap-1"><Heart size={12} className={liked[work.id] ? "fill-pup-maroon text-pup-maroon" : ""} /> {work.likes + (liked[work.id] ? 1 : 0)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories & Active Events */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-[20px] font-bold mb-5">Browse by Category</h2>
          <div className="flex flex-wrap gap-2.5">
            {CREATIVE_CATEGORY_LABELS.map(cat => (
              <button key={cat} className="px-4 py-2 bg-card-bg border border-border rounded-lg text-[14px] font-medium hover:border-pup-maroon hover:text-pup-maroon transition-colors shadow-sm">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="text-[20px] font-bold mb-5 flex items-center justify-between">
            Active Events <a href="#" className="text-[13px] text-pup-maroon font-medium hover:underline">View All</a>
          </h2>
          <div className="space-y-4">
            <div className="bg-card-bg p-4 rounded-xl border border-border shadow-sm flex gap-4">
              <div className="w-16 h-16 shrink-0 rounded-lg bg-secondary-surface overflow-hidden">
                <img src="/__mockup/images/event_1.jpg" alt="Event" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="inline-block px-1.5 py-0.5 bg-soft-gold text-warm-gold text-[10px] font-bold rounded uppercase mb-1">Open Call</div>
                <h4 className="text-[14px] font-semibold leading-tight mb-1">PUP Likha 2026</h4>
                <div className="text-[12px] text-secondary-text">Closes in 3 days</div>
              </div>
            </div>
            <div className="bg-card-bg p-4 rounded-xl border border-border shadow-sm flex gap-4">
              <div className="w-16 h-16 shrink-0 rounded-lg bg-secondary-surface overflow-hidden">
                <img src="/__mockup/images/event_2.jpg" alt="Event" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="inline-block px-1.5 py-0.5 bg-main-bg border border-border text-secondary-text text-[10px] font-bold rounded uppercase mb-1">Exhibition</div>
                <h4 className="text-[14px] font-semibold leading-tight mb-1">Sta. Mesa Through the Lens</h4>
                <div className="text-[12px] text-secondary-text">Next Friday</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="pb-20"></div>
    </div>
  );
}
