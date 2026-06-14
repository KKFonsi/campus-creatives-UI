import React from 'react';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { Star, Heart, Bookmark, ChevronRight } from 'lucide-react';
import './_group.css';

export function CollegeShowcasePageMobile() {
  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-24">
      {/* Compact Maroon Header */}
      <section className="bg-pup-maroon text-white px-5 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl font-black border border-white/20">
            CCIS
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">College of Computer and Information Sciences</h1>
            <div className="flex gap-1 mt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">PUP Sta. Mesa</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {[
            { label: 'Creators', count: '380' },
            { label: 'Works', count: '1.2k' },
            { label: 'Featured', count: '42' }
          ].map((stat, i) => (
            <div key={i} className="flex-1 bg-white/10 backdrop-blur px-4 py-3 rounded-xl border border-white/10 text-center min-w-[100px]">
              <div className="text-lg font-bold">{stat.count}</div>
              <div className="text-[9px] text-white/50 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="py-6">
        {/* Full-width Featured Work */}
        <section className="px-5 mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-black uppercase tracking-widest text-pup-maroon flex items-center gap-1.5">
              <Star size={14} fill="currentColor" /> Featured Work
            </h2>
            <button className="text-[12px] font-bold text-muted-text flex items-center">See all <ChevronRight size={14} /></button>
          </div>
          <div className="bg-card-bg rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="aspect-video relative">
              <img src="/__mockup/images/event_2.jpg" alt="Digital Sinta" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Digital Sinta</h3>
              <p className="text-[13px] text-secondary-text line-clamp-2 mb-4 leading-relaxed">
                An interactive web-based data visualization project exploring the historical architectural evolution of the campus.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-secondary-surface border border-border">
                    <img src="/__mockup/images/creator-portrait.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[12px] font-bold">Rafael Mendoza</span>
                </div>
                <div className="flex gap-4 text-muted-text">
                  <Heart size={18} />
                  <Bookmark size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Scroll */}
        <section className="mb-10">
          <div className="px-5 flex justify-between items-center mb-4">
            <h2 className="text-[15px] font-bold">Featured Creators</h2>
            <button className="text-[13px] font-bold text-pup-maroon">View all</button>
          </div>
          <div className="flex overflow-x-auto px-5 gap-4 no-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[140px] bg-card-bg p-3 rounded-2xl border border-border">
                <div className="aspect-square rounded-xl overflow-hidden mb-3">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-[13px] mb-0.5 truncate">Student Name</h4>
                <p className="text-[11px] text-muted-text mb-2">BSCS Student</p>
                <button className="w-full py-1.5 bg-secondary-surface text-[11px] font-bold rounded-lg uppercase tracking-tight">Profile</button>
              </div>
            ))}
          </div>
        </section>

        {/* Category Chips */}
        <section className="px-5 mb-10 overflow-x-auto flex gap-2 no-scrollbar">
          {['All', 'UI/UX', 'Digital Art', 'Multimedia', 'Dev'].map((cat, i) => (
            <span key={cat} className={`px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap ${i === 1 ? 'bg-pup-maroon text-white' : 'bg-secondary-surface text-secondary-text border border-border'}`}>
              {cat}
            </span>
          ))}
        </section>

        {/* 2-Column Work Grid */}
        <section className="px-5 mb-10">
          <h2 className="text-[15px] font-bold mb-4">Recent Submissions</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden border border-border mb-2 bg-secondary-surface">
                  <img src={`/__mockup/images/thumbnail_${(i % 4) + 1}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[13px] font-bold truncate">Project Title {i}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] text-muted-text">User Name</span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-muted-text">
                    <Heart size={10} /> 42
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 mt-6 bg-card-bg border-2 border-border text-[14px] font-bold rounded-xl text-primary-text">
            Load More Works
          </button>
        </section>

        {/* Events & Announcements */}
        <section className="px-5 mb-6 space-y-4">
          <div className="bg-soft-maroon p-4 rounded-2xl border border-pup-maroon/10">
            <div className="text-[10px] font-bold text-pup-maroon uppercase mb-1">Upcoming Event</div>
            <h3 className="font-bold text-[14px] mb-1">Creative Tech Challenge 2026</h3>
            <p className="text-[12px] text-secondary-text leading-snug">Registration opens June 15 for all programs.</p>
          </div>
          <div className="bg-secondary-surface p-4 rounded-2xl border border-border">
            <div className="text-[10px] font-bold text-secondary-text uppercase mb-1">Announcement</div>
            <h3 className="font-bold text-[14px] mb-1">Submission Guidelines Update</h3>
            <p className="text-[12px] text-secondary-text leading-snug">Review the new file format requirements for 2026.</p>
          </div>
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}
