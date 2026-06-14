import React, { useState } from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { Award, Users, BookOpen, Calendar, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import './_group.css';

export function ExhibitionDetailPageMobile() {
  const [expandNote, setExpandNote] = useState(false);

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-[80px]">
      <MobileHeader />

      {/* Hero Cover */}
      <section className="relative w-full h-[460px] overflow-hidden bg-dark-surface">
        <img 
          src="/__mockup/images/hero-collage.jpg" 
          alt="Sinta" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <span className="inline-block px-2 py-0.5 bg-pup-gold text-dark-surface text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">Featured Exhibition</span>
          <h1 className="text-[32px] font-bold text-white mb-2 leading-tight">Sinta: Stories of the PUP Community</h1>
          <p className="text-white/60 text-[11px] font-medium border border-white/20 px-2 py-0.5 rounded w-fit bg-white/5 backdrop-blur-sm">
            Sample academic prototype exhibition
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="px-4 py-6 bg-card-bg border-b border-border">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex justify-center mb-1"><BookOpen size={18} className="text-pup-maroon" /></div>
            <div className="text-[14px] font-bold">28</div>
            <div className="text-[10px] text-muted-text uppercase font-bold">Works</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="flex justify-center mb-1"><Users size={18} className="text-pup-maroon" /></div>
            <div className="text-[14px] font-bold">14</div>
            <div className="text-[10px] text-muted-text uppercase font-bold">Creators</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-1"><Calendar size={18} className="text-pup-maroon" /></div>
            <div className="text-[14px] font-bold">Jun 30</div>
            <div className="text-[10px] text-muted-text uppercase font-bold">End Date</div>
          </div>
        </div>
      </section>

      {/* Curator Note Expandable */}
      <section className="px-4 py-6 border-b border-border">
        <button 
          onClick={() => setExpandNote(!expandNote)}
          className="w-full flex items-center justify-between mb-4"
        >
          <h3 className="text-[16px] font-bold uppercase tracking-wider text-pup-maroon">Curator's Note</h3>
          {expandNote ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`relative transition-all duration-300 overflow-hidden ${expandNote ? 'max-h-[500px]' : 'max-h-[80px]'}`}>
          <Quote size={40} className="absolute top-0 right-0 text-pup-maroon/5" />
          <p className="text-secondary-text text-[14px] leading-relaxed italic">
            "We wanted to capture the 'unfiltered' campus life. Not just the highlights, but the everyday moments that define our stay here. Every piece in this exhibition is a testament to how creativity thrives even in the most challenging environments."
          </p>
          {!expandNote && <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-main-bg to-transparent"></div>}
        </div>
        {expandNote && <div className="mt-4 font-bold text-[13px]">— Campus Creatives Editorial Team</div>}
      </section>

      {/* Featured Pieces (Stacked) */}
      <section className="px-4 py-8 border-b border-border">
        <h3 className="text-[18px] font-bold mb-6">Featured Pieces</h3>
        <div className="space-y-6">
          {[
            { title: "Sta. Mesa After the Rain", creator: "Bianca Reyes", img: "/__mockup/images/thumbnail_1.jpg" },
            { title: "Sinta sa Riles", creator: "Marco Villanueva", img: "/__mockup/images/thumbnail_2.jpg" }
          ].map((work, i) => (
            <div key={i} className="bg-card-bg rounded-2xl overflow-hidden shadow-sm border border-border">
              <div className="aspect-[16/9] bg-secondary-surface">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[16px] mb-1">{work.title}</h4>
                <p className="text-[12px] text-secondary-text">by {work.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creators (Horizontal Scroll) */}
      <section className="py-8 border-b border-border">
        <h3 className="px-4 text-[18px] font-bold mb-4">The Creators</h3>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-[120px] text-center">
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 border border-border bg-secondary-surface">
                <img src="/__mockup/images/creator-portrait.jpg" alt="Creator" className="w-full h-full object-cover" />
              </div>
              <h5 className="font-bold text-[12px] line-clamp-1">Creator Name</h5>
              <p className="text-[10px] text-muted-text">College</p>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Collection (2-column) */}
      <section className="px-4 py-8">
        <h3 className="text-[18px] font-bold mb-6">Complete Collection</h3>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card-bg rounded-xl overflow-hidden border border-border">
              <div className="aspect-square bg-secondary-surface">
                <img src={`/__mockup/images/thumbnail_${(i % 4) + 1}.jpg`} alt="Work" className="w-full h-full object-cover" />
              </div>
              <div className="p-2.5">
                <h4 className="font-bold text-[12px] line-clamp-1">Work Title</h4>
                <p className="text-[10px] text-secondary-text">by Creator</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-3 border-2 border-border font-bold rounded-xl text-[14px]">
          Load More Works
        </button>
      </section>

      {/* Related (Horizontal) */}
      <section className="py-8 bg-secondary-surface border-t border-border">
        <h3 className="px-4 text-[18px] font-bold mb-4">Related Exhibitions</h3>
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-shrink-0 w-[200px]">
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-2 border border-border bg-card-bg">
                <img src={`/__mockup/images/college_${i}.jpg`} alt="Exhibition" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-[13px] line-clamp-1">Exhibition Title</h4>
              <p className="text-[11px] text-muted-text">24 Works</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-4 py-8 text-center text-muted-text text-[10px]">
        © 2026 PUP Campus Creatives. Sample prototype content.
      </div>

      <MobileBottomNav />
    </div>
  );
}
