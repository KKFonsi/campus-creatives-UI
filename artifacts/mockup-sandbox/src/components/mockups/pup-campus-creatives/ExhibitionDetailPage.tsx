import React from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { Award, Users, Calendar, BookOpen, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import './_group.css';

export function ExhibitionDetailPage() {
  const creators = [
    { name: "Elena Mercado", college: "CAL", avatar: "/__mockup/images/creator-portrait.jpg" },
    { name: "Bianca Reyes", college: "COC", avatar: "/__mockup/images/creator-portrait.jpg" },
    { name: "Rafael Mendoza", college: "CCIS", avatar: "/__mockup/images/creator-portrait.jpg" },
    { name: "Marco Villanueva", college: "CAL", avatar: "/__mockup/images/creator-portrait.jpg" },
    { name: "Dana Cruz", college: "CCIS", avatar: "/__mockup/images/creator-portrait.jpg" },
    { name: "Dave Cruz", college: "CE", avatar: "/__mockup/images/creator-portrait.jpg" }
  ];

  const featuredWorks = [
    { title: "Sta. Mesa After the Rain", creator: "Bianca Reyes", img: "/__mockup/images/thumbnail_1.jpg" },
    { title: "Sinta sa Riles", creator: "Marco Villanueva", img: "/__mockup/images/thumbnail_2.jpg" },
    { title: "Digital Sinta", creator: "Rafael Mendoza", img: "/__mockup/images/thumbnail_3.jpg" }
  ];

  const collection = [
    { title: "Voices Lagoon", creator: "E. Mercado", img: "/__mockup/images/thumbnail_3.jpg", cat: "Photography" },
    { title: "Campus Frequencies", creator: "L. Santos", img: "/__mockup/images/thumbnail_4.jpg", cat: "Digital Art" },
    { title: "Concrete Echoes", creator: "D. Cruz", img: "/__mockup/images/thumbnail_1.jpg", cat: "Visual Art" },
    { title: "Railway Sketches", creator: "A. Lim", img: "/__mockup/images/thumbnail_2.jpg", cat: "Illustration" },
    { title: "Polytechnic Dreams", creator: "D. Cruz", img: "/__mockup/images/thumbnail_3.jpg", cat: "Digital Art" },
    { title: "Tinig ng Bayan", creator: "R. Santos", img: "/__mockup/images/thumbnail_4.jpg", cat: "Spoken Word" },
    { title: "Pasig at Dusk", creator: "M. Torres", img: "/__mockup/images/thumbnail_1.jpg", cat: "Photography" },
    { title: "Modern Maria Clara", creator: "S. Lee", img: "/__mockup/images/thumbnail_2.jpg", cat: "Fashion" },
    { title: "Code & Color", creator: "J. Doe", img: "/__mockup/images/thumbnail_3.jpg", cat: "UI/UX" }
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto">
      <DesktopNav authenticated={true} active="Gallery" />

      {/* Hero Cover */}
      <section className="w-full max-w-[1200px] mx-auto px-8 pt-8 mb-12">
        <div className="relative h-[520px] rounded-[32px] overflow-hidden shadow-xl border border-border bg-dark-surface">
          <img 
            src="/__mockup/images/hero-collage.jpg" 
            alt="Sinta Exhibition Cover" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-16 w-full">
            <div className="inline-flex items-center px-3 py-1 bg-pup-gold text-dark-surface text-[12px] font-bold rounded-full uppercase tracking-widest mb-6">
              Featured Exhibition
            </div>
            <h1 className="text-[64px] font-bold text-white mb-4 leading-[1.1] tracking-tight">Sinta: Stories of the PUP Community</h1>
            <div className="flex items-center gap-3 text-white/60 mb-8">
              <span className="text-sm font-medium border border-white/20 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
                Sample academic prototype exhibition
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-white/40 text-[12px] font-bold uppercase tracking-wider mb-1">Date Range</div>
                <div className="text-white font-semibold flex items-center gap-2">
                  <Calendar size={16} className="text-pup-gold" /> May 1 – Jun 30, 2026
                </div>
              </div>
              <div>
                <div className="text-white/40 text-[12px] font-bold uppercase tracking-wider mb-1">Curator</div>
                <div className="text-white font-semibold flex items-center gap-2">
                  <Users size={16} className="text-pup-gold" /> Editorial Team
                </div>
              </div>
              <div>
                <div className="text-white/40 text-[12px] font-bold uppercase tracking-wider mb-1">Collection</div>
                <div className="text-white font-semibold flex items-center gap-2">
                  <BookOpen size={16} className="text-pup-gold" /> 28 Selected Works
                </div>
              </div>
              <div>
                <div className="text-white/40 text-[12px] font-bold uppercase tracking-wider mb-1">Category</div>
                <div className="text-white font-semibold">Multidisciplinary</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-20 grid grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-[32px] font-bold mb-6 tracking-tight">About the Exhibition</h2>
          <div className="space-y-4 text-secondary-text text-lg leading-relaxed">
            <p>
              "Sinta" is a curated exploration of the collective memory and daily experiences of the PUP community. It brings together works that reflect the grit, resilience, and unyielding creativity of students across all disciplines.
            </p>
            <p>
              From the bustling tracks of the PNR to the quiet corners of the lagoon, this collection serves as a visual and auditory narrative of what it means to be an Iskolar ng Bayan in the heart of Manila.
            </p>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-[24px] overflow-hidden border border-border bg-secondary-surface shadow-sm">
          <img src="/__mockup/images/event_1.jpg" alt="About Sinta" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Curator's Note */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-24">
        <div className="bg-soft-maroon border-l-[6px] border-pup-maroon p-10 rounded-r-[24px] relative">
          <Quote size={60} className="absolute top-4 right-10 text-pup-maroon/10" />
          <h3 className="text-[20px] font-bold text-pup-maroon mb-4 uppercase tracking-wider">Curator's Note</h3>
          <p className="text-xl italic text-primary-text leading-relaxed max-w-[900px] mb-6">
            "We wanted to capture the 'unfiltered' campus life. Not just the highlights, but the everyday moments that define our stay here. Every piece in this exhibition is a testament to how creativity thrives even in the most challenging environments."
          </p>
          <div className="font-bold text-primary-text">— Campus Creatives Editorial Team</div>
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-24">
        <h3 className="text-[24px] font-bold mb-8">Featured Pieces</h3>
        <div className="grid grid-cols-3 gap-8">
          {featuredWorks.map((work, i) => (
            <div key={i} className="group relative aspect-[16/10] rounded-[20px] overflow-hidden shadow-md cursor-pointer">
              <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-xl font-bold mb-1">{work.title}</h4>
                <p className="text-white/70 text-sm">by {work.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Participating Creators */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-24">
        <h3 className="text-[24px] font-bold mb-8">Participating Creators</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {creators.map((creator, i) => (
            <div key={i} className="flex-shrink-0 w-[180px] bg-card-bg border border-border rounded-[16px] p-4 text-center hover:border-pup-maroon transition-colors cursor-pointer group">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-2 border-border group-hover:border-pup-maroon transition-colors">
                <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
              </div>
              <h5 className="font-bold text-[15px] mb-0.5 group-hover:text-pup-maroon transition-colors">{creator.name}</h5>
              <p className="text-[12px] text-muted-text">{creator.college}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Collection */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-24">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[24px] font-bold">Complete Collection</h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-secondary-surface text-secondary-text rounded-full text-sm font-medium">All Works</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-12">
          {collection.map((work, i) => (
            <div key={i} className="group bg-card-bg border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-secondary-surface">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-[11px] font-bold text-pup-maroon bg-soft-maroon px-2 py-0.5 rounded uppercase w-fit mb-2">{work.cat}</div>
                <h4 className="font-bold group-hover:text-pup-maroon transition-colors mb-1">{work.title}</h4>
                <p className="text-[13px] text-secondary-text">by {work.creator}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-10 py-3 border-2 border-border font-bold rounded-xl hover:border-pup-maroon hover:text-pup-maroon transition-all">
            Load More Works
          </button>
        </div>
      </section>

      {/* Related Exhibitions */}
      <section className="w-full bg-secondary-surface py-20 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h3 className="text-[24px] font-bold mb-10">Related Exhibitions</h3>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Sta. Mesa in Frames", img: "/__mockup/images/college_1.jpg", works: 18 },
              { title: "Guhit ng Iskolar", img: "/__mockup/images/college_2.jpg", works: 24 },
              { title: "Polytechnic Perspectives", img: "/__mockup/images/college_3.jpg", works: 15 }
            ].map((ex, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-border bg-card-bg">
                  <img src={ex.img} alt={ex.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold mb-1 group-hover:text-pup-maroon transition-colors">{ex.title}</h4>
                <p className="text-[13px] text-muted-text font-medium">{ex.works} Works</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-dark-surface py-12 px-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-[13px]">© 2026 PUP Campus Creatives. Sample academic prototype exhibition content.</p>
      </footer>
    </div>
  );
}
