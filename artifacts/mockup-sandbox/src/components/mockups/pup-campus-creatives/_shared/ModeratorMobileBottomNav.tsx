import React, { useState } from 'react';
import { ClipboardList, Flag, LayoutDashboard, MoreHorizontal, Shield, Star, History } from 'lucide-react';

interface ModeratorMobileNavigationProps {
  active?: 'Dashboard' | 'Reviews' | 'Reports' | 'Featured' | 'Official' | 'History';
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
}

export function ModeratorMobileBottomNav({
  active = 'Dashboard',
  onDashboard,
  onPending,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
}: ModeratorMobileNavigationProps) {
  const [showMore, setShowMore] = useState(false);
  const itemClass = (id: string) =>
    `flex flex-col items-center justify-center flex-1 min-w-0 gap-0.5 ${
      active === id ? 'text-pup-gold' : 'text-white/60'
    }`;

  return (
    <div className="mobile-bottom-nav z-50">
      {showMore && (
        <div className="mx-3 mb-2 rounded-2xl bg-white border border-border shadow-xl overflow-hidden">
          <button onClick={() => { setShowMore(false); onOfficialContent?.(); }} className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm font-bold text-primary-text">
            <Shield size={18} className="text-pup-maroon" /> Official Content
          </button>
          <button onClick={() => { setShowMore(false); onHistory?.(); }} className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm font-bold text-primary-text border-t border-border">
            <History size={18} className="text-pup-maroon" /> Moderation History
          </button>
        </div>
      )}
      <nav className="w-full h-[68px] bg-dark-surface border-t border-white/10 px-1 flex items-center justify-between">
        <button onClick={onDashboard} className={itemClass('Dashboard')}>
          <LayoutDashboard size={20} />
          <span className="text-[9px] font-bold uppercase">Dashboard</span>
        </button>
        <button onClick={onPending} className={itemClass('Reviews')}>
          <ClipboardList size={20} />
          <span className="text-[9px] font-bold uppercase">Reviews</span>
        </button>
        <button onClick={onReports} className={itemClass('Reports')}>
          <Flag size={20} />
          <span className="text-[9px] font-bold uppercase">Reports</span>
        </button>
        <button onClick={onFeatured} className={itemClass('Featured')}>
          <Star size={20} />
          <span className="text-[9px] font-bold uppercase">Featured</span>
        </button>
        <button onClick={() => setShowMore((value) => !value)} className={itemClass('More')}>
          <MoreHorizontal size={20} />
          <span className="text-[9px] font-bold uppercase">More</span>
        </button>
      </nav>
    </div>
  );
}
