import React from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { Image as ImageIcon, Search, Calendar, Award } from 'lucide-react';
import './_group.css';

interface LandingMobileProps {
  onExplore?: () => void;
  onRegister?: () => void;
  onLogin?: () => void;
}

export function LandingMobile({ onExplore, onRegister, onLogin }: LandingMobileProps = {}) {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto pb-[68px]">
      <MobileHeader publicMode />
      
      {/* Hero Section */}
      <section className="px-4 pt-10 pb-12 text-center border-b border-border bg-warm-white">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-soft-maroon text-pup-maroon text-[12px] font-semibold mb-5">
          PUP Student Creative Community
        </div>
        <h1 className="text-[34px] leading-[1.15] font-bold text-primary-text tracking-tight mb-5">
          Where PUP creativity is <span className="text-pup-maroon">discovered</span>.
        </h1>
        <p className="text-[15px] text-secondary-text mb-8 leading-relaxed px-2">
          Build your campus creative portfolio, discover student talent, and join showcases.
        </p>
        <button
          type="button"
          onClick={onRegister}
          className="w-full py-3.5 bg-pup-maroon text-white font-medium rounded-xl hover:bg-deep-maroon transition-colors text-[16px] shadow-sm mb-4"
        >
          Explore Campus Creatives
        </button>
        <button
          type="button"
          onClick={onLogin}
          className="w-full py-3.5 bg-transparent border-2 border-border text-primary-text font-medium rounded-xl hover:border-pup-maroon hover:text-pup-maroon transition-colors text-[16px]"
        >
          Log In
        </button>
      </section>

      {/* Image Collage */}
      <div className="w-full h-[280px] overflow-hidden border-b border-border">
        <img src="/__mockup/images/hero-collage.jpg" alt="Collage" className="w-full h-full object-cover" />
      </div>

      {/* Benefits */}
      <section className="px-4 py-12 bg-secondary-surface border-b border-border flex flex-col gap-4">
        <div className="bg-card-bg p-5 rounded-[16px] shadow-sm border border-border flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center">
            <ImageIcon size={20} />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold mb-1">Build a Creative Portfolio</h3>
            <p className="text-[14px] text-secondary-text leading-relaxed">Organize your best work in one profile.</p>
          </div>
        </div>
        <div className="bg-card-bg p-5 rounded-[16px] shadow-sm border border-border flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-soft-maroon text-pup-maroon flex items-center justify-center">
            <Search size={20} />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold mb-1">Discover PUP Talent</h3>
            <p className="text-[14px] text-secondary-text leading-relaxed">Find collaborators across colleges.</p>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="px-4 py-12">
        <h2 className="text-[24px] font-bold tracking-tight mb-6">Featured Works</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="group">
            <div className="aspect-square rounded-[12px] overflow-hidden border border-border mb-3 bg-secondary-surface">
              <img src="/__mockup/images/thumbnail_1.jpg" alt="Work" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-[14px] font-semibold mb-0.5 line-clamp-1">Sta. Mesa After the Rain</h3>
            <div className="text-[12px] text-secondary-text mb-1">Bianca Reyes</div>
            <span className="text-[11px] px-1.5 py-0.5 bg-secondary-surface rounded text-primary-text">Photography</span>
          </div>
          <div className="group">
            <div className="aspect-square rounded-[12px] overflow-hidden border border-border mb-3 bg-secondary-surface relative">
              <img src="/__mockup/images/thumbnail_2.jpg" alt="Work" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-[14px] font-semibold mb-0.5 line-clamp-1">Sinta sa Riles</h3>
            <div className="text-[12px] text-secondary-text mb-1">Marco Villanueva</div>
            <span className="text-[11px] px-1.5 py-0.5 bg-secondary-surface rounded text-primary-text">Illustration</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-surface py-16 px-4 text-center relative border-t-4 border-pup-gold">
        <h2 className="text-[28px] font-bold text-warm-white mb-6 tracking-tight">Join the campus portfolio.</h2>
        <button
          type="button"
          onClick={onRegister}
          className="w-full py-4 bg-pup-gold text-dark-surface font-bold rounded-xl text-[16px]"
        >
          Create Account
        </button>
      </section>

      <MobileBottomNav guest />
    </div>
  );
}
