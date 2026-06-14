import React, { useState } from 'react';
import { Heart, Bookmark, MessageCircle, Share2, MoreVertical, X, ChevronDown } from 'lucide-react';
import './_group.css';

export function SpotlightPageMobile() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-[390px] h-[844px] bg-dark-surface font-inter overflow-hidden relative text-white">
      {/* Background Media Fill */}
      <img src="/__mockup/images/event_3.jpg" alt="Spotlight" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      
      {/* Top Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
            <X size={20} />
          </button>
          <span className="font-black text-lg uppercase tracking-tight shadow-sm">Spotlight</span>
        </div>
        <div className="px-3 py-1 bg-pup-gold text-dark-surface font-black text-[10px] uppercase rounded-full shadow-lg">
          Featured
        </div>
      </div>

      {/* Swipe Indicators */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
        <div className="w-1.5 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6 z-20">
        <div className="flex flex-col items-center gap-1">
          <button className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
            <Heart size={28} />
          </button>
          <span className="text-[12px] font-bold">247</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
            <Bookmark size={26} />
          </button>
          <span className="text-[12px] font-bold">Save</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
            <MessageCircle size={26} />
          </button>
          <span className="text-[12px] font-bold">14</span>
        </div>
        <button className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
          <Share2 size={26} />
        </button>
        <button className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
          <MoreVertical size={26} />
        </button>
      </div>

      {/* Bottom Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pup-gold shadow-lg">
              <img src="/__mockup/images/creator-portrait.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <button 
              onClick={() => setIsFollowed(!isFollowed)}
              className="absolute -bottom-1 -right-1 w-5 h-5 bg-pup-gold rounded-full flex items-center justify-center text-dark-surface border-2 border-black font-black text-sm"
            >
              {isFollowed ? '✓' : '+'}
            </button>
          </div>
          <div>
            <div className="font-black text-[15px] flex items-center gap-1.5">
              Mika Santos <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60">Follow</span>
            </div>
            <div className="text-[11px] text-white/60 uppercase tracking-widest font-bold">College of Arts and Letters</div>
          </div>
        </div>

        <div className="mb-6">
          <span className="px-2 py-0.5 bg-pup-maroon text-white text-[10px] font-black uppercase rounded mb-2 inline-block">Spoken Word</span>
          <h2 className="text-2xl font-black mb-1">Tinig sa Lagoon</h2>
          <div className={`text-[14px] text-white/80 leading-snug overflow-hidden transition-all ${isExpanded ? 'max-h-40' : 'max-h-12'}`}>
            "A spoken word exploration of student life amidst the shifting shadows of the Lagoon. This piece captures the whispers of history..."
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[12px] font-bold text-pup-gold mt-1"
          >
            {isExpanded ? 'Show less' : 'Read more...'}
          </button>
        </div>

        <button className="w-full h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wider active:bg-white/20 transition-colors">
          View Full Project <ChevronDown size={18} />
        </button>
      </div>

      {/* Media Progress */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <div className="w-[45%] h-full bg-pup-gold shadow-[0_0_8px_#FFB81C]"></div>
      </div>
    </div>
  );
}
