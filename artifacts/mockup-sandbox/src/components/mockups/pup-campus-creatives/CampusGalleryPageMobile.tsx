import React from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { Award, ArrowRight, BookOpen, Users } from 'lucide-react';
import './_group.css';

export function CampusGalleryPageMobile() {
  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-[80px]">
      <MobileHeader />

      {/* Featured Exhibition Hero */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img 
          src="/__mockup/images/hero-collage.jpg" 
          alt="Sinta" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <span className="inline-block px-2 py-0.5 bg-pup-gold text-dark-surface text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">Featured</span>
          <h2 className="text-[28px] font-bold text-white mb-2 leading-tight">Sinta: Stories of the PUP Community</h2>
          <p className="text-white/70 text-[13px] mb-4 line-clamp-2">Theme: Identity, daily life, and creative expression among Iskolar ng Bayan.</p>
          <button className="px-5 py-2.5 bg-pup-maroon text-white font-bold rounded-lg text-[14px] flex items-center gap-2">
            View Exhibition <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Current Exhibitions (Horizontal Scroll) */}
      <section className="py-8">
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="text-[18px] font-bold">Current Exhibitions</h3>
          <button className="text-[13px] text-pup-maroon font-semibold">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {[
            { title: "Sta. Mesa in Frames", college: "COC", works: 18, img: "/__mockup/images/college_1.jpg" },
            { title: "Guhit ng Iskolar", college: "CAL", works: 24, img: "/__mockup/images/college_2.jpg" },
            { title: "Polytechnic Perspectives", college: "CCIS", works: 15, img: "/__mockup/images/college_3.jpg" }
          ].map((ex, i) => (
            <div key={i} className="flex-shrink-0 w-[240px] bg-card-bg rounded-xl border border-border overflow-hidden shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={ex.img} alt={ex.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-pup-maroon bg-soft-maroon px-1.5 py-0.5 rounded uppercase">{ex.college}</span>
                  <span className="text-[10px] text-muted-text">{ex.works} Works</span>
                </div>
                <h4 className="text-[15px] font-bold mb-3 line-clamp-1">{ex.title}</h4>
                <button className="w-full py-2 border border-border rounded-lg text-[12px] font-semibold text-primary-text hover:bg-secondary-surface">
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Highlights (Horizontal Chips) */}
      <section className="py-6 bg-secondary-surface border-y border-border">
        <div className="px-4 mb-3">
          <h3 className="text-[16px] font-bold">Monthly Highlights</h3>
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
            <button key={month} className={`flex-shrink-0 px-6 py-2 rounded-full border text-[13px] font-bold transition-all ${month === 'Jun' ? 'bg-pup-maroon border-pup-maroon text-white' : 'bg-card-bg border-border text-secondary-text'}`}>
              {month} 2026
            </button>
          ))}
        </div>
      </section>

      {/* College Galleries (2-column Grid) */}
      <section className="px-4 py-8">
        <h3 className="text-[18px] font-bold mb-4">College Galleries</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "COC", works: 145, img: "/__mockup/images/college_1.jpg" },
            { name: "CCIS", works: 82, img: "/__mockup/images/college_2.jpg" },
            { name: "CAL", works: 120, img: "/__mockup/images/college_3.jpg" },
            { name: "CADBE", works: 94, img: "/__mockup/images/college_4.jpg" }
          ].map((college, i) => (
            <div key={i} className="bg-card-bg rounded-xl border border-border p-3 flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-2">
                <img src={college.img} alt={college.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-[14px]">{college.name}</h4>
              <p className="text-[11px] text-pup-maroon font-semibold">{college.works} works</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moderator's Picks (Horizontal Strip) */}
      <section className="py-6 border-t border-border">
        <div className="px-4 mb-4">
          <h3 className="text-[18px] font-bold">Moderator's Picks</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {[
            { title: "Sinta sa Riles", creator: "M. Villanueva", img: "/__mockup/images/thumbnail_2.jpg" },
            { title: "Campus Frequencies", creator: "L. Santos", img: "/__mockup/images/thumbnail_3.jpg" },
            { title: "Concrete Echoes", creator: "D. Cruz", img: "/__mockup/images/thumbnail_4.jpg" }
          ].map((work, i) => (
            <div key={i} className="flex-shrink-0 w-[140px]">
              <div className="aspect-square rounded-xl overflow-hidden border border-border mb-2">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
              </div>
              <h5 className="font-bold text-[13px] line-clamp-1">{work.title}</h5>
              <p className="text-[11px] text-secondary-text">{work.creator}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awarded Works (2-column Grid) */}
      <section className="px-4 py-8 border-t border-border">
        <h3 className="text-[18px] font-bold mb-4 flex items-center gap-2">
          Awarded Works <Award size={18} className="text-pup-gold fill-pup-gold" />
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Voices Lagoon", creator: "E. Mercado", img: "/__mockup/images/thumbnail_3.jpg" },
            { title: "Sta. Mesa Rain", creator: "B. Reyes", img: "/__mockup/images/thumbnail_1.jpg" }
          ].map((work, i) => (
            <div key={i} className="bg-card-bg rounded-xl border border-border overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 p-1 bg-pup-gold/90 rounded shadow-sm">
                  <Award size={12} className="text-dark-surface" />
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-[13px] font-bold line-clamp-1">{work.title}</h4>
                <p className="text-[11px] text-secondary-text mb-2">{work.creator}</p>
                <button className="w-full py-1.5 bg-secondary-surface text-[11px] font-bold rounded">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-4 py-8 text-center border-t border-border text-muted-text text-[11px]">
        © 2026 PUP Campus Creatives. Sample prototype.
      </div>

      <MobileBottomNav />
    </div>
  );
}
