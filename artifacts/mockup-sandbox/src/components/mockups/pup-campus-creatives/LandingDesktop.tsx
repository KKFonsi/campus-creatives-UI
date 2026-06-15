import React from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ArrowRight, Image as ImageIcon, Search, Calendar, Award } from 'lucide-react';
import './_group.css';

interface LandingDesktopProps {
  onExplore?: () => void;
  onRegister?: () => void;
  onLogin?: () => void;
}

export function LandingDesktop({ onExplore, onRegister, onLogin }: LandingDesktopProps = {}) {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto">
      <DesktopNav onLogin={onLogin} onRegister={onRegister} />
      
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-20 flex items-center justify-between gap-12">
        <div className="flex-1 max-w-[540px]">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-soft-maroon text-pup-maroon text-[13px] font-semibold mb-6">
            PUP Student Creative Community
          </div>
          <h1 className="text-[52px] leading-[1.1] font-bold text-primary-text tracking-tight mb-6">
            Where PUP creativity is <span className="text-pup-maroon">discovered</span>, organized, and recognized.
          </h1>
          <p className="text-lg text-secondary-text mb-8 leading-relaxed">
            Build your campus creative portfolio, discover student talent, join showcases, and share approved works beyond scattered social media posts.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onExplore}
              className="px-6 py-3.5 bg-pup-maroon text-white font-medium rounded-xl hover:bg-deep-maroon transition-colors text-base shadow-sm"
            >
              Explore Campus Creatives
            </button>
            <button
              type="button"
              onClick={onRegister}
              className="px-6 py-3.5 bg-transparent border-2 border-border text-primary-text font-medium rounded-xl hover:border-pup-maroon hover:text-pup-maroon transition-colors text-base"
            >
              Create Your Portfolio
            </button>
          </div>
          
          <div className="mt-12 flex gap-3">
            <div className="w-2 h-2 rounded-full bg-pup-gold"></div>
            <div className="w-8 h-2 rounded-full bg-pup-maroon"></div>
            <div className="w-2 h-2 rounded-full bg-border"></div>
          </div>
        </div>
        
        <div className="flex-1 relative h-[500px] rounded-2xl overflow-hidden shadow-sm border border-border">
          <img 
            src="/__mockup/images/hero-collage.jpg" 
            alt="PUP student creative works collage" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="bg-secondary-surface py-20 border-y border-border">
        <div className="w-full max-w-[1200px] mx-auto px-8 grid grid-cols-4 gap-6">
          <div className="bg-card-bg p-6 rounded-[16px] shadow-sm border border-border">
            <div className="w-12 h-12 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center mb-5">
              <ImageIcon size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Build a Creative Portfolio</h3>
            <p className="text-[15px] text-secondary-text leading-relaxed">Organize your best work in one professional campus profile.</p>
          </div>
          <div className="bg-card-bg p-6 rounded-[16px] shadow-sm border border-border">
            <div className="w-12 h-12 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center mb-5">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Discover PUP Talent</h3>
            <p className="text-[15px] text-secondary-text leading-relaxed">Find collaborators and view amazing works from other colleges.</p>
          </div>
          <div className="bg-card-bg p-6 rounded-[16px] shadow-sm border border-border">
            <div className="w-12 h-12 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center mb-5">
              <Calendar size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Join Events & Open Calls</h3>
            <p className="text-[15px] text-secondary-text leading-relaxed">Never miss a student exhibition, competition, or creative call.</p>
          </div>
          <div className="bg-card-bg p-6 rounded-[16px] shadow-sm border border-border">
            <div className="w-12 h-12 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center mb-5">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Gain Campus Recognition</h3>
            <p className="text-[15px] text-secondary-text leading-relaxed">Get your works officially recognized by moderators and peers.</p>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[36px] font-bold tracking-tight mb-2">Featured Student Works</h2>
            <p className="text-secondary-text text-lg">Curated highlights from across the campus.</p>
          </div>
          <a href="#" onClick={(event) => { event.preventDefault(); onExplore?.(); }} className="text-pup-maroon font-medium flex items-center gap-1.5 hover:underline">
            View all works <ArrowRight size={18} />
          </a>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-square rounded-[16px] overflow-hidden border border-border mb-4 bg-secondary-surface">
              <img src="/__mockup/images/thumbnail_1.jpg" alt="Sta. Mesa After the Rain" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-card-bg/90 backdrop-blur text-pup-maroon text-[12px] font-bold rounded flex items-center gap-1 shadow-sm">
                <Award size={12} /> Campus Highlight
              </div>
            </div>
            <h3 className="text-[17px] font-semibold mb-1 group-hover:text-pup-maroon transition-colors">Sta. Mesa After the Rain</h3>
            <div className="text-[14px] text-secondary-text mb-2">Bianca Reyes • COC</div>
            <div className="flex items-center justify-between text-[13px] font-medium">
              <span className="px-2 py-1 bg-secondary-surface rounded text-primary-text">Photography</span>
              <span className="text-muted-text">245 ♡</span>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-square rounded-[16px] overflow-hidden border border-border mb-4 bg-secondary-surface">
              <img src="/__mockup/images/thumbnail_2.jpg" alt="Sinta sa Riles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-[17px] font-semibold mb-1 group-hover:text-pup-maroon transition-colors">Sinta sa Riles</h3>
            <div className="text-[14px] text-secondary-text mb-2">Marco Villanueva • CAL</div>
            <div className="flex items-center justify-between text-[13px] font-medium">
              <span className="px-2 py-1 bg-secondary-surface rounded text-primary-text">Illustration</span>
              <span className="text-muted-text">182 ♡</span>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-square rounded-[16px] overflow-hidden border border-border mb-4 bg-secondary-surface">
              <img src="/__mockup/images/thumbnail_3.jpg" alt="Polytechnic Dreams" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-[17px] font-semibold mb-1 group-hover:text-pup-maroon transition-colors">Polytechnic Dreams</h3>
            <div className="text-[14px] text-secondary-text mb-2">Dana Cruz • CCIS</div>
            <div className="flex items-center justify-between text-[13px] font-medium">
              <span className="px-2 py-1 bg-secondary-surface rounded text-primary-text">Digital Art</span>
              <span className="text-muted-text">156 ♡</span>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-square rounded-[16px] overflow-hidden border border-border mb-4 bg-secondary-surface">
              <img src="/__mockup/images/thumbnail_4.jpg" alt="Tinig ng Bayan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-[17px] font-semibold mb-1 group-hover:text-pup-maroon transition-colors">Tinig ng Bayan</h3>
            <div className="text-[14px] text-secondary-text mb-2">Rafael Santos • CAL</div>
            <div className="flex items-center justify-between text-[13px] font-medium">
              <span className="px-2 py-1 bg-secondary-surface rounded text-primary-text">Spoken Word</span>
              <span className="text-muted-text">120 ♡</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Creator Panel */}
      <section className="w-full max-w-[1200px] mx-auto px-8 mb-24">
        <div className="bg-card-bg rounded-[20px] p-10 border border-border shadow-sm flex items-center gap-10">
          <div className="w-[280px] shrink-0">
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-5">
              <InitialsAvatar name="Elena Mercado" className="w-full h-full" textClassName="text-base" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Elena Mercado</h3>
            <p className="text-pup-maroon font-medium mb-3">College of Arts and Letters</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-soft-maroon text-pup-maroon text-[12px] font-medium rounded">Illustration</span>
              <span className="px-2 py-1 bg-soft-maroon text-pup-maroon text-[12px] font-medium rounded">Photography</span>
              <span className="px-2 py-1 bg-soft-maroon text-pup-maroon text-[12px] font-medium rounded">Film</span>
            </div>
            <p className="text-[15px] text-secondary-text mb-6">Exploring the intersection of Filipino identity and urban decay through mixed media and lens-based works.</p>
            <button
              type="button"
              onClick={onRegister}
              className="w-full py-2.5 border-2 border-border text-primary-text font-medium rounded-lg hover:border-pup-maroon hover:text-pup-maroon transition-colors text-[14px]"
            >
              View Portfolio
            </button>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary-surface border border-border">
              <img src="/__mockup/images/thumbnail_1.jpg" alt="Work 1" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="rounded-xl overflow-hidden bg-secondary-surface border border-border">
                <img src="/__mockup/images/thumbnail_2.jpg" alt="Work 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden bg-secondary-surface border border-border relative">
                <img src="/__mockup/images/thumbnail_3.jpg" alt="Work 3" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-dark-surface/60 flex items-center justify-center text-white font-medium hover:bg-dark-surface/80 transition-colors cursor-pointer">
                  +12 Works
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-dark-surface py-24 text-center px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pup-maroon via-pup-gold to-pup-maroon"></div>
        <div className="max-w-[700px] mx-auto relative z-10">
          <h2 className="text-[40px] font-bold text-warm-white mb-6 tracking-tight">Turn your creative work into a lasting campus portfolio.</h2>
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRegister}
              className="px-8 py-4 bg-pup-gold text-dark-surface font-bold rounded-xl hover:bg-warm-gold transition-colors text-[17px]"
            >
              Join Campus Creatives
            </button>
            <button
              type="button"
              onClick={onExplore}
              className="px-8 py-4 bg-transparent border border-white/20 text-warm-white font-medium rounded-xl hover:bg-white/10 transition-colors text-[17px]"
            >
              Browse Featured Works
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1010] text-white/70 py-12 px-8 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-white text-xl tracking-tight mb-4">
              <span className="font-bold font-inter">PUP:</span>
              <span className="font-medium font-inter">Campus Creatives</span>
            </div>
            <p className="text-[13px] max-w-[300px] text-white/50">
              A curated campus creative hub for the Polytechnic University of the Philippines.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[14px]">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" onClick={(event) => { event.preventDefault(); onExplore?.(); }} className="hover:text-white transition-colors">Explore</a>
            <a href="#" className="hover:text-white transition-colors">Galleries</a>
            <a href="#" className="hover:text-white transition-colors">Events</a>
            <a href="#" className="hover:text-white transition-colors">Community Guidelines</a>
            <a href="#" className="hover:text-white transition-colors">Help</a>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-white/10 flex justify-between items-center text-[12px] text-white/40">
          <p>© 2026 PUP Campus Creatives.</p>
          <p>Sample academic prototype content.</p>
        </div>
      </footer>
    </div>
  );
}
