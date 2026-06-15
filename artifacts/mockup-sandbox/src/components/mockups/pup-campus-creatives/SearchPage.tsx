import React from 'react';
import { Search, X, Clock, ArrowRight, User, Image as ImageIcon, Calendar, GraduationCap, Grid3X3 } from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import './_group.css';

interface SearchPageProps {
  onBack?: () => void;
  onResult?: () => void;
  onSeeAll?: () => void;
  onCollege?: () => void;
  onCreator?: () => void;
}

export function SearchPage({ onBack, onResult, onSeeAll, onCollege, onCreator }: SearchPageProps = {}) {
  return (
    <div className="fixed inset-0 bg-main-bg/95 backdrop-blur-md z-[100] flex flex-col items-center pt-20 overflow-y-auto">
      <div className="w-full max-w-[800px] px-8">
        {/* Search Header */}
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-pup-maroon" size={28} />
          <input 
            type="text" 
            autoFocus
            defaultValue="sta. mesa photography"
            className="w-full h-20 pl-16 pr-16 bg-white border-2 border-border rounded-3xl text-2xl font-medium focus:outline-none focus:border-pup-maroon shadow-xl transition-all"
          />
          <button
            type="button"
            onClick={onBack}
            aria-label="Close search"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-secondary-surface rounded-full text-muted-text hover:text-primary-text"
          >
            <X size={24} />
          </button>
        </div>

        {/* Suggested Categories */}
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-widest text-muted-text mb-4">Suggested Categories</h3>
          <div className="flex flex-wrap gap-2">
            {['Photography', 'Digital Art', 'Spoken Word', 'Film', 'Music', 'Dance', 'Visual Art', 'UI/UX'].map(cat => (
              <button key={cat} className="px-5 py-2.5 bg-white border border-border rounded-xl text-[14px] font-bold hover:border-pup-maroon hover:text-pup-maroon transition-all shadow-sm">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grouped */}
        <div className="grid grid-cols-1 gap-12 pb-20">
          {/* Works */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2"><ImageIcon size={20} className="text-pup-maroon" /> Works (12)</h3>
              <button type="button" onClick={onSeeAll} className="text-pup-maroon font-bold text-sm flex items-center gap-1 hover:underline">See all <ArrowRight size={14} /></button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <button key={i} type="button" onClick={onResult} className="w-full flex items-center gap-4 p-3 bg-white border border-border rounded-2xl hover:shadow-md transition-shadow text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-secondary-surface">
                    <img src={`/__mockup/images/thumbnail_${i}.jpg`} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">Sta. Mesa After the Rain {i > 1 ? `#${i}` : ''}</h4>
                    <div className="text-[13px] text-secondary-text">Bianca Reyes • COC</div>
                    <div className="mt-1">
                      <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[10px] font-black uppercase rounded">Photography</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-2 gap-8">
            {/* Creators */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2"><User size={20} className="text-pup-maroon" /> Creators (8)</h3>
                <button type="button" onClick={onCreator} className="text-pup-maroon font-bold text-sm">See all</button>
              </div>
              <div className="space-y-3">
                {[1, 2].map(i => (
                  <button key={i} type="button" onClick={onCreator} className="w-full flex items-center gap-3 p-3 bg-white border border-border rounded-2xl hover:border-pup-maroon transition-colors text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20">
                    <InitialsAvatar name={`Creator ${i + 1}`} className="w-12 h-12 border border-border" textClassName="text-sm" />
                    <div>
                      <div className="font-bold text-sm">Creative Name {i}</div>
                      <div className="text-[11px] text-secondary-text">College of Communication</div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Other Groups */}
            <div className="space-y-8">
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-muted-text mb-4">Events & Colleges</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white border border-border rounded-2xl cursor-pointer hover:border-pup-maroon">
                    <div className="w-10 h-10 rounded-xl bg-pup-gold flex items-center justify-center text-dark-maroon"><Calendar size={20} /></div>
                    <div className="font-bold text-sm">PUP Likha 2026</div>
                  </div>
                  <button type="button" onClick={onCollege} className="w-full flex items-center gap-3 p-3 bg-white border border-border rounded-2xl hover:border-pup-maroon text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20">
                    <div className="w-10 h-10 rounded-xl bg-pup-maroon text-white flex items-center justify-center font-black text-xs">COC</div>
                    <div className="font-bold text-sm">College of Communication</div>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Searches Overlay */}
      <div className="absolute left-8 top-32 w-64 hidden xl:block">
        <h3 className="text-xs font-black uppercase tracking-widest text-muted-text mb-4 flex items-center gap-2">
          <Clock size={14} /> Recent
        </h3>
        <div className="space-y-2">
          {['Photography', 'Rafael Mendoza', 'Digital Sinta', 'CCIS Showcase', 'Landscape'].map(item => (
            <div key={item} className="flex items-center justify-between group">
              <span className="text-[14px] text-secondary-text group-hover:text-pup-maroon cursor-pointer">{item}</span>
              <button className="text-muted-text opacity-0 group-hover:opacity-100 hover:text-red-500"><X size={14} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SearchPageMobile({ onBack, onResult, onSeeAll }: SearchPageProps = {}) {
  return (
    <div className="w-[390px] min-h-screen bg-white font-inter flex flex-col z-[100] relative">
      <div className="px-5 pt-8 pb-4 bg-white border-b border-border sticky top-0">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} aria-label="Back to Explore" className="w-10 h-10 flex items-center justify-center text-primary-text"><ArrowRight className="rotate-180" size={24} /></button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-pup-maroon" size={18} />
            <input 
              type="text" 
              autoFocus
              defaultValue="sta. mesa"
              className="w-full h-11 pl-10 pr-10 bg-secondary-surface rounded-xl text-[15px] border-none focus:ring-2 focus:ring-pup-maroon/20 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text"><X size={16} /></button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        <section className="mb-8">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-muted-text mb-4">Recent Searches</h3>
          <div className="space-y-4">
            {['photography', 'ccis', 'digital sinta'].map(item => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-secondary-text">
                  <Clock size={18} />
                  <span className="text-[15px]">{item}</span>
                </div>
                <X size={16} className="text-muted-text" />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-muted-text mb-4">Suggested</h3>
          <div className="flex flex-wrap gap-2">
            {['Photography', 'Digital Art', 'Design', 'Film', 'Music'].map(cat => (
              <span key={cat} className="px-4 py-2 bg-secondary-surface rounded-full text-[13px] font-bold">{cat}</span>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[16px]">Results for "sta. mesa"</h3>
            <span className="text-[12px] text-muted-text">18 found</span>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <button key={i} type="button" onClick={onResult} className="w-full flex items-center gap-4 text-left rounded-xl focus:outline-none focus:ring-4 focus:ring-pup-maroon/20">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-secondary-surface border border-border">
                  <img src={`/__mockup/images/thumbnail_${(i % 4) + 1}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[14px]">Sta. Mesa Result {i}</h4>
                  <div className="text-[11px] text-secondary-text">Photography • College of Communication</div>
                </div>
              </button>
            ))}
          </div>
          <button type="button" onClick={onSeeAll} className="w-full py-3 mt-6 text-pup-maroon font-black text-sm uppercase tracking-wider">See all results →</button>
        </section>
      </div>
    </div>
  );
}
