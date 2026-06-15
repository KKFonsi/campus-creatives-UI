import React, { useState } from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { 
  Heart, 
  Bookmark, 
  MessageCircle, 
  Share2, 
  Flag, 
  ChevronRight, 
  Award,
  Calendar,
  UserPlus,
  Check,
  MoreVertical,
  ArrowLeft
} from 'lucide-react';
import { CommentsPanelMobile } from './CommentsPanel';
import { ReportModalMobile } from './ReportModal';
import { ShareModalMobile } from './ShareModal';
import './_group.css';

interface WorkDetailPageMobileProps {
  onBack?: () => void;
  onCreatorProfile?: () => void;
}

export function WorkDetailPageMobile({ onBack, onCreatorProfile }: WorkDetailPageMobileProps = {}) {
  const [activeImg, setActiveImg] = useState(0);
  const [isAppreciated, setIsAppreciated] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const images = [
    '/__mockup/images/thumbnail_1.jpg',
    '/__mockup/images/college_1.jpg',
    '/__mockup/images/college_2.jpg',
  ];

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-[100px] relative">
      {/* Custom Header */}
      <div className="sticky top-0 z-50 bg-main-bg/95 backdrop-blur-md px-4 h-[60px] border-b border-border flex items-center justify-between">
        <button type="button" onClick={onBack} className="p-2 -ml-2 text-primary-text" aria-label="Back to Explore">
          <ArrowLeft size={24} />
        </button>
        <span className="font-bold text-sm truncate px-4">Work Detail</span>
        <div className="relative">
          <button className="p-2 -mr-2 text-primary-text" onClick={() => setShowMenu(!showMenu)}>
            <MoreVertical size={24} />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
              <button
                onClick={() => {
                  setShowMenu(false);
                  setShowReport(true);
                }}
                className="w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 text-status-rejected font-medium"
              >
                <Flag size={16} /> Report Work
              </button>
            </div>
          )}
        </div>
      </div>

      <main>
        {/* Media Slider */}
        <div className="relative w-full aspect-[4/5] bg-black">
          <img src={images[activeImg]} alt="Work" className="w-full h-full object-contain" />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${activeImg === i ? 'bg-white w-4' : 'bg-white/40'}`} 
              />
            ))}
          </div>
          
          <div className="absolute top-4 left-4">
            <div className="px-2 py-1 bg-pup-gold text-dark-maroon text-[10px] font-bold rounded flex items-center gap-1 shadow-lg">
              <Award size={10} /> CAMPUS HIGHLIGHT
            </div>
          </div>
        </div>

        <div className="px-5 py-6">
          {/* Creator Row */}
          <div className="flex items-center gap-3 mb-6">
            <InitialsAvatar name="Bianca Reyes" className="w-10 h-10 border border-border" textClassName="text-sm" />
            <button type="button" onClick={onCreatorProfile} className="flex-1 text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20 rounded-lg">
              <h4 className="text-[14px] font-bold leading-none mb-1">Bianca Reyes</h4>
              <span className="text-[11px] px-1.5 py-0.5 bg-soft-maroon text-pup-maroon font-bold rounded">COC</span>
            </button>
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${isFollowing ? 'bg-secondary-surface text-primary-text' : 'bg-pup-maroon text-white'}`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>

          <h1 className="text-2xl font-black mb-2">Sta. Mesa After the Rain</h1>
          <div className="flex items-center gap-2 mb-6 text-[11px] font-bold text-muted-text uppercase tracking-wider">
            <span>Photography</span>
            <span>•</span>
            <span>May 12, 2026</span>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between py-4 border-y border-border mb-6">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsAppreciated(!isAppreciated)}
                className={`flex flex-col items-center gap-1 transition-colors ${isAppreciated ? 'text-pup-maroon' : 'text-secondary-text'}`}
              >
                <Heart size={24} className={isAppreciated ? 'fill-current' : ''} />
                <span className="text-[10px] font-bold">245</span>
              </button>
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`flex flex-col items-center gap-1 transition-colors ${isSaved ? 'text-warm-gold' : 'text-secondary-text'}`}
              >
                <Bookmark size={24} className={isSaved ? 'fill-current' : ''} />
                <span className="text-[10px] font-bold">Save</span>
              </button>
              <button onClick={() => setShowComments(true)} className="flex flex-col items-center gap-1 text-secondary-text">
                <MessageCircle size={24} />
                <span className="text-[10px] font-bold">14</span>
              </button>
            </div>
            <button onClick={() => setShowShare(true)} className="p-3 bg-secondary-surface rounded-full text-secondary-text" aria-label="Share work">
              <Share2 size={20} />
            </button>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-sm font-bold mb-2">Artist Statement</h3>
            <p className={`text-[14px] text-secondary-text leading-relaxed ${showFullDesc ? '' : 'line-clamp-3'}`}>
              "Sta. Mesa After the Rain" is a photographic series that explores the fleeting moments of serenity within the chaotic landscape of PUP Main Campus. This particular shot captures the Main Building's reflection on the rain-slicked pavement near the lagoon, moments after a heavy downpour.
            </p>
            <button 
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="text-pup-maroon text-sm font-bold mt-2"
            >
              {showFullDesc ? 'Show less' : 'Read more'}
            </button>
          </div>

          {/* Tags */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-10">
            {['#campus', '#photography', '#sta-mesa', '#rain', '#documentary', '#pup'].map(tag => (
              <span key={tag} className="whitespace-nowrap px-3 py-1.5 bg-card-bg border border-border rounded-lg text-xs font-medium text-secondary-text">
                {tag}
              </span>
            ))}
          </div>

          {/* Comments Preview */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Comments (14)</h3>
              <button onClick={() => setShowComments(true)} className="text-xs font-bold text-pup-maroon">View all</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <InitialsAvatar name="Ana dela Cruz" className="w-8 h-8 border border-border" textClassName="text-[11px]" />
                <div className="bg-secondary-surface/50 p-3 rounded-2xl flex-1">
                  <p className="text-[13px] font-bold mb-0.5">Ana dela Cruz</p>
                  <p className="text-[13px] text-secondary-text">This perfectly captures the mood of Sta. Mesa!</p>
                </div>
              </div>
            </div>
            <button onClick={() => setShowComments(true)} className="w-full mt-4 py-3 bg-white border border-border rounded-xl text-xs font-bold text-muted-text">
              Add a comment...
            </button>
          </div>

          {/* Related Works Grid */}
          <div>
            <h3 className="font-black mb-4">Related Works</h3>
            <div className="grid grid-cols-2 gap-3">
              {[2, 3, 4, 1].map(i => (
                <div key={i} className="bg-card-bg rounded-xl border border-border overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img src={`/__mockup/images/thumbnail_${i}.jpg`} alt="Work" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2">
                    <h4 className="text-[12px] font-bold truncate">Campus Dreams</h4>
                    <p className="text-[10px] text-muted-text">Maria Santos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MobileBottomNav />
      {showComments && <CommentsPanelMobile onClose={() => setShowComments(false)} />}
      {showShare && <ShareModalMobile onClose={() => setShowShare(false)} />}
      {showReport && <ReportModalMobile isOpen={showReport} onClose={() => setShowReport(false)} />}
    </div>
  );
}
