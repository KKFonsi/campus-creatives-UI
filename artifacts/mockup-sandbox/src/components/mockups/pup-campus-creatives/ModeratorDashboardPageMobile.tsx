import React from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  MoreHorizontal, 
  Bell, 
  Star,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ModeratorMobileBottomNav } from './_shared/ModeratorMobileBottomNav';
import './_group.css';

interface ModeratorDashboardPageMobileProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReview?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
}

export default function ModeratorDashboardPageMobile({
  onDashboard,
  onPending,
  onReview,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
}: ModeratorDashboardPageMobileProps = {}) {
  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto flex flex-col relative">
      {/* Mobile Top Header */}
      <header className="h-[56px] bg-dark-surface flex items-center justify-between px-4 shrink-0 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="text-pup-gold font-bold text-lg tracking-tight">Campus Creatives</div>
          <div className="px-1.5 py-0.5 bg-pup-gold text-dark-surface text-[8px] font-extrabold rounded uppercase tracking-wider">MODERATOR</div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative text-white/80">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-crimson-accent rounded-full border border-dark-surface"></span>
          </button>
          <InitialsAvatar name="Maria Moderator" className="w-8 h-8 border border-white/20" textClassName="text-[11px]" />
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6 pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <CompactStatCard icon={<ClipboardList size={18} className="text-status-pending" />} label="Pending" value="24" color="bg-status-pending" />
          <CompactStatCard icon={<RefreshCw size={18} className="text-status-needs-revision" />} label="Revisions" value="8" color="bg-status-needs-revision" />
          <CompactStatCard icon={<Flag size={18} className="text-status-rejected" />} label="Reported" value="6" color="bg-status-rejected" />
          <CompactStatCard icon={<CheckCircle size={18} className="text-status-approved" />} label="Approved" value="12" color="bg-status-approved" />
          <CompactStatCard icon={<Star size={18} className="text-pup-gold" />} label="Featured" value="18" color="bg-pup-gold" />
          <CompactStatCard icon={<AlertTriangle size={18} className="text-crimson-accent" />} label="Alerts" value="4" color="bg-crimson-accent" />
        </div>

        {/* Review Queue */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-[16px] font-bold text-primary-text uppercase tracking-wide">Review Queue</h2>
            <button onClick={onPending} className="text-[12px] text-pup-maroon font-bold">View All</button>
          </div>
          <div className="space-y-3">
            <MobileReviewCard 
              thumbnail="/__mockup/images/thumbnail_1.jpg"
              title="Digital Sinta"
              creator="Rafael Mendoza"
              waiting="3d waiting"
              urgent={true}
              onOpenReview={onReview}
            />
            <MobileReviewCard 
              thumbnail="/__mockup/images/thumbnail_2.jpg"
              title="Railway Sketches"
              creator="Rafael Mendoza"
              waiting="7d waiting"
              urgent={true}
              onOpenReview={onReview}
            />
            <MobileReviewCard 
              thumbnail="/__mockup/images/thumbnail_3.jpg"
              title="Tinig ng Bayan"
              creator="Maria Santos"
              waiting="8d waiting"
              urgent={true}
              onOpenReview={onReview}
            />
          </div>
        </section>

        {/* Priority Reports */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-[16px] font-bold text-primary-text uppercase tracking-wide">Priority Reports</h2>
            <button onClick={onReports} className="text-[12px] text-pup-maroon font-bold">View All</button>
          </div>
          <div className="space-y-3">
            <MobileReportCard 
              reason="Stolen work"
              title="Pasig at Dusk"
              severity="High"
            />
            <MobileReportCard 
              reason="Inappropriate"
              title="Abstract Forms 3"
              severity="Med"
            />
          </div>
        </section>
      </div>

      <ModeratorMobileBottomNav
        active="Dashboard"
        onDashboard={onDashboard}
        onPending={onPending}
        onReports={onReports}
        onFeatured={onFeatured}
        onOfficialContent={onOfficialContent}
        onHistory={onHistory}
      />
    </div>
  );
}

function CompactStatCard({ icon, label, value, color }: any) {
  return (
    <div className="bg-card-bg p-3 rounded-xl border border-border shadow-sm flex items-center gap-3">
      <div className={`p-1.5 rounded-lg bg-opacity-10 ${color}`}>
        {icon}
      </div>
      <div>
        <div className="text-[16px] font-bold text-primary-text leading-none mb-0.5">{value}</div>
        <div className="text-[11px] text-secondary-text font-medium leading-none">{label}</div>
      </div>
    </div>
  );
}

function MobileReviewCard({ thumbnail, title, creator, waiting, urgent, onOpenReview }: any) {
  return (
    <div className="bg-card-bg p-3 rounded-xl border border-border shadow-sm flex items-center gap-3">
      <div className="w-[50px] h-[40px] rounded bg-secondary-surface shrink-0 overflow-hidden">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold text-primary-text truncate leading-tight">{title}</h4>
        <div className="text-[11px] text-secondary-text leading-tight">{creator}</div>
        <div className={`text-[10px] font-bold mt-0.5 ${urgent ? 'text-status-pending' : 'text-secondary-text'}`}>
          {waiting}
        </div>
      </div>
      <button onClick={onOpenReview} className="px-3 py-1.5 bg-soft-maroon text-pup-maroon text-[11px] font-bold rounded-lg shrink-0">
        Open Review
      </button>
    </div>
  );
}

function MobileReportCard({ reason, title, severity }: any) {
  return (
    <div className="bg-card-bg p-3 rounded-xl border border-border shadow-sm flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="px-1.5 py-0.5 bg-red-50 text-status-rejected text-[9px] font-bold rounded uppercase">
            {reason}
          </span>
          <span className={`text-[9px] font-bold uppercase ${severity === 'High' ? 'text-status-rejected' : 'text-status-needs-revision'}`}>
            {severity}
          </span>
        </div>
        <h4 className="text-[13px] font-bold text-primary-text truncate">{title}</h4>
      </div>
      <button className="p-1.5 text-secondary-text hover:text-pup-maroon">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

