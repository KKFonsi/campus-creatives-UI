import React, { useState } from 'react';
import { CalendarDays, ClipboardList, Flag, LayoutDashboard, MoreHorizontal, Shield, Star, History } from 'lucide-react';
import { navigateTo } from '../../../../app/demo';
import { routePaths } from '../../../../app/routes';

interface ModeratorMobileNavigationProps {
  active?: 'Dashboard' | 'Reviews' | 'Reports' | 'Featured' | 'Official' | 'History' | 'More';
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

export function ModeratorMobileBottomNav({
  active = 'Dashboard',
  onDashboard,
  onPending,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
  onEvents,
}: ModeratorMobileNavigationProps) {
  const [showMore, setShowMore] = useState(false);
  const go = (callback: (() => void) | undefined, fallback: string) => {
    setShowMore(false);
    if (callback) callback();
    else navigateTo(fallback);
  };
  const itemClass = (id: string) =>
    `flex flex-col items-center justify-center flex-1 min-w-0 gap-0.5 rounded-lg py-1 ${
      active === id ? 'bg-white/10 text-pup-gold shadow-inner' : 'text-white/60 hover:bg-white/5 hover:text-white'
    }`;

  return (
    <div className="mobile-bottom-nav absolute bottom-0 left-0 right-0 z-50">
      {showMore && (
        <>
          <button
            type="button"
            aria-label="Close more menu"
            className="absolute bottom-0 left-0 right-0 h-[844px] bg-black/30"
            onClick={() => setShowMore(false)}
          />
          <div className="absolute bottom-[76px] left-3 right-3 max-h-[330px] rounded-2xl bg-white border border-border shadow-xl overflow-hidden">
            <button onClick={() => go(onOfficialContent, routePaths.moderator.officialContent)} className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm font-bold text-primary-text hover:bg-soft-maroon">
              <Shield size={18} className="text-pup-maroon" /> Official Content
            </button>
            <button onClick={() => go(onEvents, routePaths.moderator.events)} className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm font-bold text-primary-text border-t border-border hover:bg-soft-maroon">
              <CalendarDays size={18} className="text-pup-maroon" /> Event Management
            </button>
            <button onClick={() => go(onHistory, routePaths.moderator.history)} className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm font-bold text-primary-text border-t border-border hover:bg-soft-maroon">
              <History size={18} className="text-pup-maroon" /> Moderation History
            </button>
          </div>
        </>
      )}
      <nav className="w-full h-[68px] bg-dark-surface border-t border-white/10 px-1 flex items-center justify-between">
        <button onClick={() => go(onDashboard, routePaths.moderator.dashboard)} className={itemClass('Dashboard')}>
          <LayoutDashboard size={20} />
          <span className="text-[9px] font-bold uppercase">Dashboard</span>
        </button>
        <button onClick={() => go(onPending, routePaths.moderator.pending)} className={itemClass('Reviews')}>
          <ClipboardList size={20} />
          <span className="text-[9px] font-bold uppercase">Reviews</span>
        </button>
        <button onClick={() => go(onReports, routePaths.moderator.reports)} className={itemClass('Reports')}>
          <Flag size={20} />
          <span className="text-[9px] font-bold uppercase">Reports</span>
        </button>
        <button onClick={() => go(onFeatured, routePaths.moderator.featured)} className={itemClass('Featured')}>
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
