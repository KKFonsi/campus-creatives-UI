import React, { useState } from 'react';
import { Play, Volume2, Maximize2, Heart, Bookmark, MessageCircle, Share2, UserPlus, ChevronRight, X, Send } from 'lucide-react';
import { DesktopNav } from './_shared/DesktopNav';
import './_group.css';

export function SpotlightPage() {
  const [isAppreciated, setIsAppreciated] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="min-h-screen bg-main-bg font-inter text-primary-text">
      <DesktopNav authenticated={true} />
      
      <main className="max-w-[1200px] mx-auto px-8 py-10 flex gap-10">
        {/* Left: Vertical Media Player */}
        <div className="w-[480px] h-[720px] bg-dark-surface rounded-3xl overflow-hidden relative shadow-2xl border border-white/5 group">
          <img src="/__mockup/images/event_3.jpg" alt="Spotlight Content" className="w-full h-full object-cover opacity-80" />
          
          {/* Overlay Controls */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-b from-black/20 via-transparent to-black/60">
            <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-lg text-[12px] font-bold text-white uppercase tracking-wider">
                Spoken Word
              </div>
              <button className="text-white hover:scale-110 transition-transform"><X size={24} /></button>
            </div>
            
            <div className="flex flex-col items-center">
              <button className="w-20 h-20 rounded-full bg-pup-gold/90 flex items-center justify-center text-dark-surface hover:scale-110 transition-transform shadow-lg group-hover:opacity-100 opacity-60">
                <Play size={32} fill="currentColor" className="ml-1" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="w-[35%] h-full bg-pup-gold"></div>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <div className="flex items-center gap-4">
                  <Volume2 size={20} />
                  <span className="text-sm font-medium">0:42 / 2:15</span>
                </div>
                <Maximize2 size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info + Related */}
        <div className="flex-1 flex flex-col h-[720px]">
          <div className="bg-card-bg rounded-3xl p-8 border border-border shadow-sm mb-6 flex-1 overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="px-2.5 py-1 bg-soft-maroon text-pup-maroon text-[11px] font-black uppercase rounded-lg mb-3 inline-block tracking-wider">
                  Spotlight Series
                </span>
                <h1 className="text-4xl font-black tracking-tight mb-2">Tinig sa Lagoon</h1>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsAppreciated(!isAppreciated)}
                  className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl border transition-all ${isAppreciated ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' : 'bg-secondary-surface border-border text-secondary-text hover:border-pup-maroon'}`}
                >
                  <Heart size={22} fill={isAppreciated ? "currentColor" : "none"} />
                  <span className="text-[10px] font-bold mt-1">247</span>
                </button>
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl border transition-all ${isSaved ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' : 'bg-secondary-surface border-border text-secondary-text hover:border-pup-maroon'}`}
                >
                  <Bookmark size={22} fill={isSaved ? "currentColor" : "none"} />
                  <span className="text-[10px] font-bold mt-1">Save</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between bg-secondary-surface/50 p-4 rounded-2xl border border-border mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="Mika Santos" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-lg hover:text-pup-maroon cursor-pointer">Mika Santos</div>
                  <div className="text-[13px] text-secondary-text">College of Arts and Letters</div>
                </div>
              </div>
              <button 
                onClick={() => setIsFollowed(!isFollowed)}
                className={`h-10 px-6 rounded-xl font-bold text-sm transition-all ${isFollowed ? 'bg-border text-primary-text' : 'bg-pup-maroon text-white hover:bg-deep-maroon'}`}
              >
                {isFollowed ? 'Following' : 'Follow'}
              </button>
            </div>

            <p className="text-lg text-secondary-text leading-relaxed mb-8 italic border-l-4 border-pup-maroon pl-6">
              "A spoken word exploration of student life amidst the shifting shadows of the Lagoon. This piece captures the whispers of history and the loud dreams of the modern Iskolar."
            </p>

            <div className="flex gap-4 mb-10 pt-4 border-t border-border">
              <button className="flex-1 h-14 bg-dark-surface text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors">
                <Share2 size={20} /> Share
              </button>
              <button className="flex-1 h-14 bg-secondary-surface text-primary-text rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-border transition-colors">
                View Full Project <ChevronRight size={18} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Comments (4)</h3>
                <button className="text-pup-maroon font-bold text-sm">See all</button>
              </div>
              
              <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary-surface overflow-hidden shrink-0">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    className="w-full h-11 bg-secondary-surface border-none rounded-xl px-4 pr-12 text-[14px] focus:ring-2 focus:ring-pup-maroon/20 focus:outline-none"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-pup-maroon p-1.5 hover:bg-soft-maroon rounded-lg transition-colors">
                    <Send size={18} />
                  </button>
                </div>
              </div>

              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-surface overflow-hidden shrink-0">
                    <img src={`/__mockup/images/creator-portrait.jpg`} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[13px]">User Name</span>
                      <span className="text-[11px] text-muted-text">2h ago</span>
                    </div>
                    <p className="text-[14px] text-secondary-text">This is such a powerful piece! The lagoon setting really adds to the atmosphere. Great job!</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[180px]">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-pup-maroon uppercase tracking-wider text-xs">
              More Spotlights <ChevronRight size={14} />
            </h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="min-w-[200px] group cursor-pointer">
                  <div className="aspect-video rounded-xl overflow-hidden mb-2 relative border border-border">
                    <img src="/__mockup/images/event_1.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <h4 className="font-bold text-sm truncate group-hover:text-pup-maroon transition-colors">Spotlight Title {i}</h4>
                  <p className="text-[11px] text-muted-text">Creator Name</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
