import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  Star, 
  Shield, 
  History, 
  Search, 
  Bell, 
  User, 
  ExternalLink, 
  CheckCircle, 
  RefreshCw, 
  AlertTriangle,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import './_group.css';

interface ModeratorNavigationProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReview?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
}

export default function ModeratorDashboardPage({
  onDashboard,
  onPending,
  onReview,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
}: ModeratorNavigationProps = {}) {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleNav = (tab: string, callback?: () => void) => {
    setActiveTab(tab);
    callback?.();
  };

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      {/* Sidebar */}
      <aside className="w-[240px] bg-dark-surface text-white flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="p-6">
          <div className="text-pup-gold font-bold text-xl tracking-tight mb-1">Campus Creatives</div>
          <div className="inline-block px-2 py-0.5 bg-pup-gold text-dark-surface text-[10px] font-bold rounded uppercase tracking-wider">MODERATOR</div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => handleNav('Dashboard', onDashboard)} />
          <NavItem icon={<ClipboardList size={20} />} label="Pending Reviews" badge="24" active={activeTab === 'Pending Reviews'} onClick={() => handleNav('Pending Reviews', onPending)} />
          <NavItem icon={<Flag size={20} />} label="Reports" badge="6" active={activeTab === 'Reports'} onClick={() => handleNav('Reports', onReports)} />
          <NavItem icon={<Star size={20} />} label="Featured Works" active={activeTab === 'Featured Works'} onClick={() => handleNav('Featured Works', onFeatured)} />
          <NavItem icon={<Shield size={20} />} label="Official Content" active={activeTab === 'Official Content'} onClick={() => handleNav('Official Content', onOfficialContent)} />
          <NavItem icon={<History size={20} />} label="Moderation History" active={activeTab === 'History'} onClick={() => handleNav('History', onHistory)} />
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-2 text-[14px] text-gray-400 hover:text-white transition-colors w-full px-3 py-2">
            <span>Switch to Student View</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-[64px] bg-card-bg border-b border-border flex items-center justify-between px-8 shrink-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
            <input 
              type="text" 
              placeholder="Search submissions, reports, creators..." 
              className="w-full pl-10 pr-4 py-2 bg-secondary-surface border-none rounded-lg text-[14px] focus:ring-1 focus:ring-pup-maroon outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-secondary-text hover:bg-secondary-surface rounded-full relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson-accent rounded-full border-2 border-card-bg"></span>
            </button>
            <div className="h-8 w-px bg-border mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[14px] font-semibold text-primary-text leading-tight">Maria Moderator</div>
                <div className="text-[12px] text-secondary-text leading-tight">Senior Moderator</div>
              </div>
              <InitialsAvatar name="Maria Moderator" className="w-10 h-10 border border-border" textClassName="text-xs" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Page Header */}
          <section>
            <h1 className="text-2xl font-bold text-primary-text mb-1">Moderator Dashboard</h1>
            <p className="text-secondary-text max-w-2xl">
              Review student submissions, manage reports, and help maintain a safe and supportive creative community.
            </p>
          </section>

          {/* Stat Cards */}
          <section className="grid grid-cols-3 gap-6">
            <StatCard icon={<ClipboardList className="text-status-pending" />} label="Pending Reviews" value="24" subValue="4 urgent" color="bg-status-pending" />
            <StatCard icon={<RefreshCw className="text-status-needs-revision" />} label="Needs Revision" value="8" subValue="2 resubmitted" color="bg-status-needs-revision" />
            <StatCard icon={<Flag className="text-status-rejected" />} label="Reported Content" value="6" subValue="3 high priority" color="bg-status-rejected" />
            <StatCard icon={<CheckCircle className="text-status-approved" />} label="Approved Today" value="12" subValue="+20% from yesterday" color="bg-status-approved" />
            <StatCard icon={<Star className="text-pup-gold" />} label="Featured Works" value="18" subValue="4 current highlights" color="bg-pup-gold" />
            <StatCard icon={<AlertTriangle className="text-crimson-accent" />} label="Open Reports" value="4" subValue="Action required" color="bg-crimson-accent" />
          </section>

          {/* Two-Column Layout */}
          <section className="grid grid-cols-12 gap-8">
            {/* Left: Review Queue */}
            <div className="col-span-8 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-primary-text flex items-center gap-2">
                  Review Queue
                  <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[12px] rounded-full">24 New</span>
                </h2>
                <button onClick={onPending} className="text-[13px] text-pup-maroon font-semibold hover:underline">View All</button>
              </div>

              <div className="space-y-3">
                <ReviewCard 
                  thumbnail="/__mockup/images/thumbnail_1.jpg"
                  title="Digital Sinta"
                  creator="Rafael Mendoza"
                  college="CCIS"
                  category="Digital Art"
                  date="June 12"
                  waitingTime="3 days waiting"
                  waitingUrgent={true}
                  onOpenReview={onReview}
                />
                <ReviewCard 
                  thumbnail="/__mockup/images/thumbnail_2.jpg"
                  title="Railway Sketches"
                  creator="Rafael Mendoza"
                  college="CCIS"
                  category="Visual Art"
                  date="June 8"
                  waitingTime="7 days waiting"
                  waitingUrgent={true}
                  label="Reported"
                  labelColor="text-status-rejected bg-red-50 border-red-100"
                  onOpenReview={onReview}
                />
                <ReviewCard 
                  thumbnail="/__mockup/images/thumbnail_3.jpg"
                  title="Tinig ng Bayan"
                  creator="Maria Santos"
                  college="CAL"
                  category="Music"
                  date="June 7"
                  waitingTime="8 days waiting"
                  waitingUrgent={true}
                  onOpenReview={onReview}
                />
                <ReviewCard 
                  thumbnail="/__mockup/images/thumbnail_4.jpg"
                  title="Sta. Mesa After Rain"
                  creator="Bianca Reyes"
                  college="COC"
                  category="Photography"
                  date="June 5"
                  waitingTime="10 days waiting"
                  waitingUrgent={true}
                  label="Event Deadline"
                  labelColor="text-status-needs-revision bg-orange-50 border-orange-100"
                  onOpenReview={onReview}
                />
              </div>
            </div>

            {/* Right: Priority Reports & Submissions by Category */}
            <div className="col-span-4 space-y-8">
              {/* Priority Reports */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-primary-text">Priority Reports</h2>
                <div className="space-y-3">
                  <ReportCard 
                    reason="Suspected stolen work"
                    title="Pasig at Dusk"
                    date="June 11"
                    severity="High"
                  />
                  <ReportCard 
                    reason="Copyright concern"
                    title="Engineering in Motion"
                    date="June 10"
                    severity="High"
                  />
                  <ReportCard 
                    reason="Inappropriate content"
                    title="Abstract Forms 3"
                    date="June 12"
                    severity="Medium"
                  />
                </div>
                <button onClick={onReports} className="w-full py-2 text-[13px] font-semibold text-secondary-text border border-border rounded-lg hover:bg-secondary-surface transition-colors">
                  View All Reports
                </button>
              </div>

              {/* Submissions by Category */}
              <div className="p-6 bg-card-bg rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-primary-text mb-6">Submissions by Category</h3>
                <div className="space-y-5">
                  <CategoryBar label="Digital Art" count={42} max={42} />
                  <CategoryBar label="Photography" count={38} max={42} />
                  <CategoryBar label="Visual Art" count={31} max={42} />
                  <CategoryBar label="Music" count={19} max={42} />
                  <CategoryBar label="Film" count={12} max={42} />
                </div>
              </div>
            </div>
          </section>

          {/* Recent Decisions */}
          <section className="bg-card-bg p-4 rounded-xl border border-border flex items-center gap-8 shadow-sm">
            <span className="text-[14px] font-bold text-primary-text border-r border-border pr-8">Recent Decisions</span>
            <div className="flex items-center gap-6">
              <DecisionChip color="bg-status-approved" label="Approved" count="12" />
              <DecisionChip color="bg-status-needs-revision" label="Needs Revision" count="5" />
              <DecisionChip color="bg-status-rejected" label="Rejected" count="2" />
              <DecisionChip color="bg-pup-gold" label="Featured" count="3" />
            </div>
          </section>

          {/* Feature Candidates */}
          <section>
            <h2 className="text-lg font-bold text-primary-text mb-4">Feature Candidates</h2>
            <div className="grid grid-cols-3 gap-6">
              <CandidateCard 
                thumbnail="/__mockup/images/thumbnail_1.jpg"
                title="Sinta sa Riles"
                creator="Marco Villanueva"
              />
              <CandidateCard 
                thumbnail="/__mockup/images/thumbnail_3.jpg"
                title="Campus Frequencies"
                creator="Liza Santos"
              />
              <CandidateCard 
                thumbnail="/__mockup/images/thumbnail_4.jpg"
                title="Concrete & Creativity"
                creator="Dave Cruz"
              />
            </div>
          </section>

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}

// Subcomponents
function NavItem({ icon, label, badge, active, onClick }: { icon: any, label: string, badge?: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
        active 
          ? 'bg-white/10 border-l-4 border-pup-gold text-white' 
          : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-[14px] font-medium">{label}</span>
      </div>
      {badge && (
        <span className="px-1.5 py-0.5 bg-pup-maroon text-white text-[10px] font-bold rounded">
          {badge}
        </span>
      )}
    </button>
  );
}

function StatCard({ icon, label, value, subValue, color }: { icon: any, label: string, value: string, subValue: string, color: string }) {
  return (
    <div className="bg-card-bg p-5 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg bg-opacity-10 ${color.replace('bg-', 'bg-')}`}>
          {icon}
        </div>
        <div className="text-[12px] text-secondary-text font-medium">{subValue}</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-primary-text mb-0.5">{value}</div>
        <div className="text-[13px] text-secondary-text font-medium">{label}</div>
      </div>
    </div>
  );
}

function ReviewCard({ thumbnail, title, creator, college, category, date, waitingTime, waitingUrgent, label, labelColor, onOpenReview }: any) {
  return (
    <div className="bg-card-bg p-4 rounded-xl border border-border shadow-sm hover:border-pup-maroon transition-colors flex items-center gap-4 group">
      <div className="w-[60px] h-[48px] rounded overflow-hidden bg-secondary-surface shrink-0">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="text-[14px] font-bold text-primary-text truncate">{title}</h4>
          {label && (
            <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded uppercase border ${labelColor}`}>
              {label}
            </span>
          )}
        </div>
        <div className="text-[12px] text-secondary-text truncate">
          {creator} • {college} • {category} • {date}
        </div>
      </div>
      <div className="text-right shrink-0 px-4">
        <div className={`text-[12px] font-bold ${waitingUrgent ? 'text-status-pending' : 'text-secondary-text'}`}>
          {waitingTime}
        </div>
        <div className="text-[11px] text-muted-text">Pending Review</div>
      </div>
      <button onClick={onOpenReview} className="px-4 py-1.5 border border-pup-maroon text-pup-maroon text-[13px] font-bold rounded-lg hover:bg-soft-maroon transition-colors shrink-0">
        Open Review →
      </button>
    </div>
  );
}

function ReportCard({ reason, title, date, severity }: any) {
  return (
    <div className="p-4 bg-warm-white rounded-xl border border-border space-y-3">
      <div className="flex items-center justify-between">
        <span className="px-2 py-0.5 bg-red-100 text-status-rejected text-[10px] font-bold rounded uppercase tracking-wider">
          {reason}
        </span>
        <span className={`text-[11px] font-bold ${severity === 'High' ? 'text-status-rejected' : 'text-status-needs-revision'}`}>
          {severity} Severity
        </span>
      </div>
      <div>
        <h4 className="text-[14px] font-bold text-primary-text">{title}</h4>
        <div className="text-[12px] text-secondary-text leading-tight mt-0.5">
          Reported by anonymous • {date}
        </div>
      </div>
      <button className="text-[13px] text-pup-maroon font-bold flex items-center gap-1 hover:underline">
        Open Report <ChevronRight size={14} />
      </button>
    </div>
  );
}

function CategoryBar({ label, count, max }: { label: string, count: number, max: number }) {
  const width = (count / max) * 100;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[13px]">
        <span className="font-medium text-secondary-text">{label}</span>
        <span className="font-bold text-primary-text">{count}</span>
      </div>
      <div className="h-1.5 w-full bg-secondary-surface rounded-full overflow-hidden">
        <div 
          className="h-full bg-pup-maroon rounded-full" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function DecisionChip({ color, label, count }: { color: string, label: string, count: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <span className="text-[13px] font-medium text-secondary-text">{label}</span>
      <span className="text-[13px] font-bold text-primary-text">{count}</span>
    </div>
  );
}

function CandidateCard({ thumbnail, title, creator }: any) {
  return (
    <div className="bg-card-bg rounded-xl border border-border overflow-hidden shadow-sm group">
      <div className="aspect-[16/10] bg-secondary-surface overflow-hidden relative">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 px-2 py-1 bg-pup-gold text-dark-surface text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-sm uppercase tracking-wider">
          <Star size={10} fill="currentColor" /> Candidate
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-[15px] font-bold text-primary-text mb-0.5">{title}</h4>
        <div className="text-[12px] text-secondary-text mb-4">{creator}</div>
        <button className="w-full py-2 bg-pup-maroon text-white text-[13px] font-bold rounded-lg hover:bg-deep-maroon transition-colors">
          Add to Featured
        </button>
      </div>
    </div>
  );
}
