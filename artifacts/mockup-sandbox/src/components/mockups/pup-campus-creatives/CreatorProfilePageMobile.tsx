import React, { useState } from 'react';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ShareProfileModalMobile } from './ShareProfileModal';
import { navigateTo } from '../../../app/demo';
import { 
  Heart, 
  Share2, 
  MoreHorizontal, 
  Edit3, 
  Star,
  Award,
  ChevronRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './_group.css';

interface CreatorProfilePageMobileProps {
  onBack?: () => void;
  onEditProfile?: () => void;
  onPortfolio?: () => void;
  onSubmissions?: () => void;
  onSavedWorks?: () => void;
  onShareProfile?: () => void;
  onCloseShare?: () => void;
  initialShareOpen?: boolean;
}

export function CreatorProfilePageMobile({
  onBack,
  onEditProfile,
  onPortfolio,
  onSubmissions,
  onSavedWorks,
  onShareProfile,
  onCloseShare,
  initialShareOpen = false,
}: CreatorProfilePageMobileProps = {}) {
  const [activeTab, setActiveTab] = useState('Portfolio');
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [showShareProfile, setShowShareProfile] = useState(initialShareOpen);

  const portfolioWorks = [
    { id: 1, title: 'Digital Sinta', category: 'Digital Art', status: 'Featured', appreciation: 124, img: '/__mockup/images/thumbnail_1.jpg' },
    { id: 2, title: 'Campus Frequencies', category: 'Music', status: 'Approved', appreciation: 86, img: '/__mockup/images/thumbnail_2.jpg' },
    { id: 3, title: 'Railway Sketches', category: 'Visual Art', status: 'Needs Revision', appreciation: 0, img: '/__mockup/images/thumbnail_3.jpg' },
    { id: 4, title: 'Polytechnic Dreams', category: 'Graphic Design', status: 'Featured', appreciation: 210, img: '/__mockup/images/thumbnail_4.jpg' },
    { id: 5, title: 'Pasig at Dusk', category: 'Photography', status: 'Approved', appreciation: 54, img: '/__mockup/images/college_1.jpg' },
    { id: 6, title: 'Concrete and Creativity', category: 'Visual Art', status: 'Draft', appreciation: 0, img: '/__mockup/images/college_2.jpg' },
  ];

  const stats = [
    { label: 'Approved', value: '24' },
    { label: 'Featured', value: '6' },
    { label: 'Likes', value: '1.8k' },
    { label: 'Followers', value: '87' },
  ];

  const tabs = ['Portfolio', 'Featured', 'Recognitions', 'Events', 'About'];

  return (
    <div className="relative w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-24">
      {onBack && (
        <button type="button" onClick={onBack} className="mx-4 mt-4 text-pup-maroon font-bold text-[13px]">
          Explore
        </button>
      )}
      {/* Compact Cover */}
      <div className="w-full h-[160px] relative">
        <img 
          src="/__mockup/images/hero-collage.jpg" 
          alt="Campus Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Profile Section */}
      <div className="px-5 -mt-10 relative mb-6">
        <div className="flex flex-col items-center">
          <InitialsAvatar
            name="Rafael Mendoza"
            className="w-20 h-20 border-4 border-card-bg shadow-lg mb-3"
            textClassName="text-2xl"
          />
          <h1 className="text-xl font-bold mb-1">Rafael Mendoza</h1>
          <div className="flex flex-col items-center gap-1 mb-2 text-center">
            <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[10px] font-bold rounded-md">College of Computer and Information Sciences</span>
            <p className="text-secondary-text text-[12px] px-4">Bachelor of Science in Information Technology</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-status-approved" />
            <span className="text-[11px] text-status-approved font-medium">Available for Collab</span>
          </div>
          
          {/* Scrollable Chips */}
          <div className="w-full overflow-x-auto flex gap-2 no-scrollbar mb-4 px-2">
            {['UI/UX', 'Digital Art', 'Multimedia', 'Photography', 'Visual Design'].map(field => (
              <span key={field} className="whitespace-nowrap px-3 py-1 bg-secondary-surface border border-border rounded-full text-[10px] font-medium">
                {field}
              </span>
            ))}
          </div>

          {/* Bio */}
          <div className="w-full mb-6">
            <p className={`text-secondary-text text-sm leading-relaxed text-center ${!isBioExpanded && 'line-clamp-2'}`}>
              Passionate about blending technology with visual storytelling. I focus on creating digital experiences that resonate with the student community and celebrate our unique campus culture.
            </p>
            <button 
              onClick={() => setIsBioExpanded(!isBioExpanded)}
              className="w-full flex justify-center mt-1 text-pup-maroon"
            >
              {isBioExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* Stats */}
          <div className="w-full grid grid-cols-4 border-y border-border py-4 mb-6">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-sm font-bold text-pup-maroon">{stat.value}</div>
                <div className="text-[10px] text-muted-text uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="w-full flex gap-2">
            <button onClick={onEditProfile} className="flex-1 py-2.5 border border-border rounded-lg font-bold text-[13px] hover:border-pup-maroon hover:text-pup-maroon transition-colors flex items-center justify-center gap-2">
              <Edit3 size={16} /> Edit Profile
            </button>
            <button
              onClick={() => {
                if (onShareProfile) {
                  onShareProfile();
                  return;
                }
                setShowShareProfile(true);
              }}
              className="w-12 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary-surface transition-colors"
            >
              <Share2 size={18} />
            </button>
          </div>
          <div className="w-full grid grid-cols-3 gap-2 mt-3">
            <button onClick={onPortfolio} className="py-2 bg-soft-maroon text-pup-maroon rounded-lg text-[11px] font-bold">Portfolio</button>
            <button onClick={onSubmissions} className="py-2 bg-soft-maroon text-pup-maroon rounded-lg text-[11px] font-bold">Submissions</button>
            <button onClick={onSavedWorks} className="py-2 bg-soft-maroon text-pup-maroon rounded-lg text-[11px] font-bold">Saved</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-x-auto border-b border-border no-scrollbar sticky top-0 bg-main-bg z-10">
        <div className="flex px-5">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-3 px-4 text-[13px] font-bold transition-all relative ${
                activeTab === tab ? 'text-pup-maroon' : 'text-secondary-text'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pup-maroon" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-5 pt-6">
        <div className="grid grid-cols-2 gap-3">
          {portfolioWorks.map(work => (
            <div
              key={work.id}
              role="button"
              tabIndex={0}
              onClick={() => navigateTo(`/student/work/${work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  navigateTo(`/student/work/${work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`);
                }
              }}
              className="bg-card-bg border border-border rounded-lg overflow-hidden shadow-sm text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20"
            >
              <div className="aspect-square relative">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
                <div className="absolute top-1.5 left-1.5">
                  {work.status === 'Featured' && (
                    <div className="p-1 bg-pup-gold rounded flex items-center justify-center shadow-sm">
                      <Star size={10} fill="white" className="text-white" />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold rounded flex items-center gap-1">
                  <Heart size={10} className="fill-white" /> {work.appreciation}
                </div>
              </div>
              <div className="p-2.5">
                <h3 className="font-bold text-[12px] line-clamp-1 mb-1">{work.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-muted-text font-bold uppercase">{work.category}</span>
                  <button onClick={(event) => event.stopPropagation()} className="text-secondary-text">
                    <MoreHorizontal size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileBottomNav />
      <ShareProfileModalMobile
        isOpen={showShareProfile}
        onClose={() => {
          setShowShareProfile(false);
          onCloseShare?.();
        }}
      />
    </div>
  );
}
