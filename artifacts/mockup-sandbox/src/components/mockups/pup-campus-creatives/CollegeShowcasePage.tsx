import React from 'react';
import { Award, Zap, Star, LayoutGrid, Palette, Camera, Film, Music, Type, Cpu, Share2, Bookmark, Heart, MoreHorizontal, Bell, Info } from 'lucide-react';
import { DesktopNav } from './_shared/DesktopNav';
import './_group.css';

export function CollegeShowcasePage() {
  return (
    <div className="min-h-screen bg-main-bg font-inter text-primary-text pb-20">
      <DesktopNav authenticated={true} />
      
      {/* College Header */}
      <section className="w-full bg-gradient-to-br from-pup-maroon to-dark-maroon text-white py-16">
        <div className="max-w-[1200px] mx-auto px-8 flex items-center gap-12">
          <div className="w-40 h-40 rounded-[32px] bg-white/10 backdrop-blur-md flex items-center justify-center text-7xl font-bold border border-white/20 shadow-2xl">
            CCIS
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">College of Computer and Information Sciences</h1>
            <p className="text-xl text-white/80 max-w-[800px] mb-8 leading-relaxed">
              Advancing human-centric computing and creative technology solutions through rigorous research and innovative digital expression.
            </p>
            <div className="flex gap-6">
              {[
                { label: 'Total Creators', count: '380' },
                { label: 'Approved Works', count: '1.2k' },
                { label: 'Featured Works', count: '42' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur px-6 py-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold mb-0.5">{stat.count}</div>
                  <div className="text-[12px] text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Featured College Work */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-6 text-pup-maroon font-bold uppercase tracking-wider text-sm">
            <Star size={16} fill="currentColor" /> Featured CCIS Work
          </div>
          <div className="bg-card-bg rounded-[24px] overflow-hidden border border-border shadow-sm flex h-[480px]">
            <div className="w-[60%] relative group">
              <img src="/__mockup/images/event_2.jpg" alt="Digital Sinta" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="w-[40%] p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-surface border border-border">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="Rafael Mendoza" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold">Rafael Mendoza</div>
                  <div className="text-[13px] text-secondary-text">BS Computer Science • 4th Year</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Digital Sinta</h2>
              <p className="text-secondary-text mb-8 leading-relaxed">
                An interactive web-based data visualization project exploring the historical architectural evolution of the PUP Sta. Mesa campus through 3D procedural modeling.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-3 py-1 bg-soft-maroon text-pup-maroon text-[12px] font-bold rounded-lg uppercase">Digital Art</span>
                <span className="px-3 py-1 bg-secondary-surface text-secondary-text text-[12px] font-bold rounded-lg uppercase">Creative Tech</span>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <button className="flex-1 h-12 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors">
                  View Project
                </button>
                <button className="w-12 h-12 flex items-center justify-center border-2 border-border rounded-xl text-primary-text hover:border-pup-maroon hover:text-pup-maroon transition-colors">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Creators */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-1">Featured Creators</h2>
              <p className="text-secondary-text">Top CCIS students pushing technical and creative boundaries.</p>
            </div>
            <button className="text-pup-maroon font-bold hover:underline">View all creators</button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card-bg rounded-2xl p-5 border border-border group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold text-pup-maroon shadow-sm uppercase">Rising Creator</div>
                </div>
                <h3 className="font-bold text-lg mb-0.5 group-hover:text-pup-maroon transition-colors">Creator Name</h3>
                <p className="text-[13px] text-muted-text mb-3">BS Information Technology</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-1.5 py-0.5 bg-secondary-surface text-secondary-text text-[10px] font-bold rounded uppercase">UI/UX</span>
                  <span className="px-1.5 py-0.5 bg-secondary-surface text-secondary-text text-[10px] font-bold rounded uppercase">Design</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-4 border-t border-border">
                  <div className="aspect-square bg-secondary-surface rounded-md overflow-hidden">
                    <img src="/__mockup/images/thumbnail_1.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-secondary-surface rounded-md overflow-hidden">
                    <img src="/__mockup/images/thumbnail_2.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-secondary-surface rounded-md overflow-hidden">
                    <img src="/__mockup/images/thumbnail_3.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creative Categories */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Creative Categories</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'UI/UX', count: 24, icon: <LayoutGrid size={18} /> },
              { label: 'Digital Art', count: 18, icon: <Palette size={18} /> },
              { label: 'Multimedia', count: 12, icon: <Star size={18} /> },
              { label: 'Film and Video', count: 8, icon: <Film size={18} /> },
              { label: 'Photography', count: 15, icon: <Camera size={18} /> },
              { label: 'Graphic Design', count: 11, icon: <Star size={18} /> },
              { label: 'Creative Technology', count: 6, icon: <Cpu size={18} /> },
            ].map((cat) => (
              <button key={cat.label} className="flex items-center gap-2.5 px-5 py-3 bg-card-bg border border-border rounded-xl hover:border-pup-maroon hover:text-pup-maroon transition-colors group">
                <span className="text-muted-text group-hover:text-pup-maroon">{cat.icon}</span>
                <span className="font-bold text-[15px]">{cat.label}</span>
                <span className="text-[13px] text-muted-text font-medium">{cat.count}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Works */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Recent Approved Works</h2>
            <button className="text-pup-maroon font-bold hover:underline">See all works</button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mb-4 bg-secondary-surface">
                  <img src={`/__mockup/images/thumbnail_${(i % 4) + 1}.jpg`} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="px-6 py-2 bg-white text-pup-maroon font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Project</button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-[17px] mb-1">Work Title {i}</h3>
                    <div className="text-[13px] text-secondary-text">Creator Name • BSIT</div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-text">
                    <span className="flex items-center gap-1 text-[13px] font-medium"><Heart size={14} /> 128</span>
                    <button className="hover:text-pup-maroon"><Bookmark size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recognized Students */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Recognized Students</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { badge: 'College Highlight', color: 'bg-pup-gold text-dark-maroon' },
              { badge: 'Rising Creator', color: 'bg-pup-maroon text-white' },
              { badge: 'Event Winner', color: 'bg-pup-gold text-dark-maroon' },
              { badge: 'Moderator\'s Pick', color: 'bg-pup-maroon text-white' }
            ].map((r, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-2xl border border-border flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-border">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase mb-3 ${r.color}`}>
                  {r.badge}
                </div>
                <h4 className="font-bold mb-1">Student Name</h4>
                <p className="text-[12px] text-muted-text mb-4">Awarded May 2026</p>
                <button className="text-[13px] font-bold text-pup-maroon hover:underline">View Recognition</button>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-12">
          {/* College Events */}
          <section>
            <h2 className="text-2xl font-bold mb-6">College Events</h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-card-bg p-5 rounded-2xl border border-border flex gap-4 hover:border-pup-maroon transition-colors cursor-pointer group">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img src="/__mockup/images/event_1.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[10px] font-bold rounded w-fit mb-2 uppercase">Design Challenge</div>
                    <h3 className="font-bold mb-1 group-hover:text-pup-maroon transition-colors">CCIS Creative Tech Challenge 2026</h3>
                    <p className="text-[13px] text-secondary-text line-clamp-2">Annual showcase of technology-driven creative projects from all CCIS programs.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Official Announcements */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Official Announcements</h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-secondary-surface p-5 rounded-2xl border border-border border-l-4 border-l-pup-maroon relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Info size={40} />
                  </div>
                  <div className="text-[11px] font-bold text-pup-maroon uppercase tracking-wider mb-2">Announcement • May 24, 2026</div>
                  <h3 className="font-bold mb-2">Submission Guidelines Update</h3>
                  <p className="text-[13px] text-secondary-text">New requirements for technical documentation in Creative Technology submissions.</p>
                  <button className="mt-4 text-[13px] font-bold hover:underline">Read full memo →</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
