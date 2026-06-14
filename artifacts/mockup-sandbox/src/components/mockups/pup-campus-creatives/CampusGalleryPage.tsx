import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { ArrowRight, ImageIcon, Users, BookOpen, Award, ExternalLink } from 'lucide-react';
import './_group.css';

export function CampusGalleryPage() {
  const [activeMonth, setActiveMonth] = useState('Jun 2026');

  const exhibitions = [
    { title: "Sta. Mesa in Frames", college: "COC", category: "Photography", works: 18, date: "May 15 - Jun 15, 2026", img: "/__mockup/images/college_1.jpg" },
    { title: "Guhit ng Iskolar", college: "CAL + CADBE", category: "Visual Art", works: 24, date: "Jun 1 - Jun 30, 2026", img: "/__mockup/images/college_2.jpg" },
    { title: "Polytechnic Perspectives", college: "CE + CCIS", category: "Digital Art", works: 15, date: "Jun 10 - Jul 10, 2026", img: "/__mockup/images/college_3.jpg" }
  ];

  const colleges = [
    { name: "COC", fullName: "College of Communication", works: 145, img: "/__mockup/images/college_1.jpg" },
    { name: "CCIS", fullName: "College of Computer and Information Sciences", works: 82, img: "/__mockup/images/college_2.jpg" },
    { name: "CAL", fullName: "College of Arts and Letters", works: 120, img: "/__mockup/images/college_3.jpg" },
    { name: "CADBE", fullName: "College of Architecture, Design and the Built Environment", works: 94, img: "/__mockup/images/college_4.jpg" }
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto">
      <DesktopNav authenticated={true} active="Gallery" />

      {/* Page Header */}
      <header className="w-full max-w-[1200px] mx-auto px-8 pt-12 pb-10">
        <h1 className="text-[40px] font-bold tracking-tight mb-3">PUP Campus Gallery</h1>
        <p className="text-lg text-secondary-text max-w-[700px]">
          Curated exhibitions celebrating the creative voices, stories, and talents of the PUP community.
        </p>
      </header>

      {/* Featured Exhibition */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-16">
        <div className="relative h-[480px] rounded-[24px] overflow-hidden group shadow-md border border-border">
          <img 
            src="/__mockup/images/hero-collage.jpg" 
            alt="Sinta: Stories of the PUP Community" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-12 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-pup-gold text-dark-surface text-[12px] font-bold rounded-full uppercase tracking-wider">Featured Exhibition</span>
              <span className="text-white/60 text-sm">Sample academic prototype exhibition</span>
            </div>
            <h2 className="text-[48px] font-bold text-white mb-4 leading-tight tracking-tight">Sinta: Stories of the PUP Community</h2>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-pup-gold" />
                <span className="text-sm font-medium">Curator: Campus Creatives Editorial Team</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-pup-gold" />
                <span className="text-sm font-medium">28 Selected Works</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Running: May 1 – June 30, 2026</span>
              </div>
            </div>
            <p className="text-white/80 text-lg max-w-[600px] mb-8 line-clamp-2">
              Theme: Identity, daily life, and creative expression among Iskolar ng Bayan. Exploring the soul of Sinta.
            </p>
            <button className="px-8 py-3.5 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-all flex items-center gap-2 group/btn shadow-lg">
              View Exhibition <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Current Exhibitions */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-20">
        <h3 className="text-[24px] font-bold mb-8">Current Exhibitions</h3>
        <div className="grid grid-cols-3 gap-8">
          {exhibitions.map((ex, i) => (
            <div key={i} className="bg-card-bg rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-[16/10] overflow-hidden bg-secondary-surface">
                <img src={ex.img} alt={ex.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[12px] font-bold text-pup-maroon bg-soft-maroon px-2 py-0.5 rounded uppercase">{ex.college}</span>
                  <span className="text-[12px] text-muted-text font-medium">{ex.works} Works</span>
                </div>
                <h4 className="text-[20px] font-bold mb-2 group-hover:text-pup-maroon transition-colors line-clamp-1">{ex.title}</h4>
                <p className="text-secondary-text text-[14px] mb-4 line-clamp-2">Theme: {ex.category} exploration within the campus landscape.</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-[13px] text-secondary-text">{ex.date}</span>
                  <button className="text-pup-maroon font-bold text-[14px] flex items-center gap-1 hover:underline">
                    View Gallery <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Gallery */}
      <section className="w-full bg-secondary-surface border-y border-border py-16 mb-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[24px] font-bold">Monthly Gallery Highlights</h3>
            <span className="text-secondary-text text-sm">Archived selections by month</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026'].map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`flex-shrink-0 w-[160px] aspect-[4/3] rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 font-bold ${
                  activeMonth === month 
                  ? 'border-pup-maroon bg-card-bg text-pup-maroon shadow-md' 
                  : 'border-border bg-card-bg/50 text-secondary-text hover:border-pup-maroon/30'
                }`}
              >
                <span className="text-[14px]">{month.split(' ')[0]}</span>
                <span className="text-[18px]">{month.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* College Galleries */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-20">
        <h3 className="text-[24px] font-bold mb-8">College Galleries</h3>
        <div className="grid grid-cols-4 gap-6">
          {colleges.map((college, i) => (
            <div key={i} className="bg-card-bg rounded-xl border border-border p-4 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-secondary-surface">
                <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-[18px] font-bold mb-1 text-center">{college.name}</h4>
              <p className="text-[12px] text-muted-text text-center line-clamp-1">{college.fullName}</p>
              <div className="mt-3 text-center">
                <span className="text-[13px] font-semibold text-pup-maroon bg-soft-maroon px-3 py-1 rounded-full">{college.works} works</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Moderator's Picks */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[24px] font-bold">Moderator's Picks</h3>
          <button className="text-pup-maroon font-semibold hover:underline">See all picks</button>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {[
            { title: "Sinta sa Riles", creator: "Marco Villanueva", img: "/__mockup/images/thumbnail_2.jpg" },
            { title: "Campus Frequencies", creator: "Liza Santos", img: "/__mockup/images/thumbnail_3.jpg" },
            { title: "Concrete and Creativity", creator: "Dave Cruz", img: "/__mockup/images/thumbnail_4.jpg" },
            { title: "Digital Sinta", creator: "Miguel Torres", img: "/__mockup/images/thumbnail_1.jpg" }
          ].map((work, i) => (
            <div key={i} className="flex-shrink-0 w-[240px] group">
              <div className="aspect-square rounded-xl overflow-hidden border border-border mb-3 bg-secondary-surface">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h5 className="font-bold text-[15px] mb-0.5 group-hover:text-pup-maroon transition-colors line-clamp-1">{work.title}</h5>
              <p className="text-[13px] text-secondary-text">{work.creator}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awarded Works */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-24">
        <h3 className="text-[24px] font-bold mb-8 flex items-center gap-2">
          Awarded Works <Award size={24} className="text-pup-gold fill-pup-gold" />
        </h3>
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: "Voices from the Lagoon", creator: "Elena Mercado", badge: "Editor's Choice", img: "/__mockup/images/thumbnail_3.jpg" },
            { title: "Sta. Mesa After the Rain", creator: "Bianca Reyes", badge: "Campus Highlight", img: "/__mockup/images/thumbnail_1.jpg" },
            { title: "Polytechnic Dreams", creator: "Dana Cruz", badge: "Best in Digital Art", img: "/__mockup/images/thumbnail_2.jpg" }
          ].map((work, i) => (
            <div key={i} className="group relative bg-card-bg rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-pup-gold/90 backdrop-blur text-dark-surface text-[12px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <Award size={14} /> {work.badge}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-[18px] font-bold mb-1 group-hover:text-pup-maroon transition-colors">{work.title}</h4>
                <p className="text-[14px] text-secondary-text mb-4">by {work.creator}</p>
                <button className="w-full py-2 bg-secondary-surface text-primary-text font-medium rounded-lg hover:bg-border transition-colors text-[13px]">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archived Exhibitions */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-24 pb-20">
        <h3 className="text-[20px] font-bold mb-6">Archived Exhibitions</h3>
        <div className="space-y-3">
          {[
            { title: "PUP Likha 2025 Retrospective", year: 2025, works: 42 },
            { title: "Digital Horizons", year: 2025, works: 15 },
            { title: "Manila Student Life 2024", year: 2024, works: 30 },
            { title: "Concrete Echoes", year: 2024, works: 12 }
          ].map((archive, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-card-bg border border-border rounded-xl hover:bg-secondary-surface transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-soft-maroon text-pup-maroon flex items-center justify-center font-bold text-xs">
                  {archive.year}
                </div>
                <div>
                  <h5 className="font-semibold group-hover:text-pup-maroon transition-colors">{archive.title}</h5>
                  <p className="text-[12px] text-muted-text">{archive.works} Works archived</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-border group-hover:text-pup-maroon transition-colors" />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-dark-surface text-white/50 py-12 px-8 border-t border-white/10 text-center">
        <p className="text-sm">© 2026 PUP Campus Creatives. Sample academic prototype.</p>
      </footer>
    </div>
  );
}
