import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Tag, 
  Calendar, 
  Award, 
  Flag, 
  BarChart3, 
  Activity, 
  Shield, 
  ArrowRight,
  ChevronLeft,
  Mail,
  User,
  Clock,
  ExternalLink,
  ShieldAlert,
  ShieldOff,
  History,
  AlertTriangle
} from 'lucide-react';
import './_group.css';

export default function UserDetailPage() {
  const [showRestrictModal, setShowRestrictModal] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-main-bg font-inter text-primary-text">
      {/* Admin Sidebar */}
      <aside className="w-[240px] bg-dark-surface text-white flex flex-col flex-shrink-0">
        <div className="p-6">
          <div className="text-pup-gold text-xl tracking-tight mb-1">
            <span className="font-bold">PUP:</span>
            <span className="font-medium ml-1 text-sm uppercase tracking-wider text-pup-gold/80">Campus Creatives</span>
          </div>
          <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-pup-gold text-dark-surface mt-2 uppercase">
            Admin
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <NavItem icon={<Users size={18} />} label="Users" active />
          <NavItem icon={<Building2 size={18} />} label="Colleges" />
          <NavItem icon={<Tag size={18} />} label="Categories" />
          <NavItem icon={<Calendar size={18} />} label="Events" />
          <NavItem icon={<Award size={18} />} label="Recognition" />
          <NavItem icon={<Flag size={18} />} label="Reports" />
          <NavItem icon={<BarChart3 size={18} />} label="Analytics" />
          <NavItem icon={<Activity size={18} />} label="Activity Log" />
          <NavItem icon={<Shield size={18} />} label="Roles" />
        </nav>

        <div className="p-4 border-t border-white/10 mt-auto">
          <a href="#" className="flex items-center text-sm text-pup-gold hover:text-white transition-colors">
            <span>Switch to Student View</span>
            <ArrowRight size={14} className="ml-2" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card-bg border-b border-border flex items-center px-6 flex-shrink-0">
          <button className="flex items-center gap-2 text-sm font-semibold text-secondary-text hover:text-pup-maroon transition-colors mr-4">
            <ChevronLeft size={18} />
            Back to Users
          </button>
          <div className="h-6 w-px bg-border mr-4"></div>
          <div className="flex items-center gap-2 text-sm text-muted-text">
            <span>Users</span>
            <span>/</span>
            <span className="font-medium text-primary-text">Rafael Mendoza</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-main-bg">
          <div className="max-w-[1000px] mx-auto grid grid-cols-[1fr_280px] gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="bg-card-bg border border-border rounded-2xl p-8 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-pup-maroon flex items-center justify-center text-white text-3xl font-bold shadow-md border-4 border-white/10">
                      RM
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold tracking-tight">Rafael Mendoza</h1>
                        <span className="px-2 py-0.5 bg-status-approved/10 text-status-approved text-[11px] font-bold rounded-full uppercase">Active</span>
                      </div>
                      <div className="text-secondary-text mt-1 flex items-center gap-2">
                        <Mail size={14} />
                        <span>2022-00001@iskolar.pup.edu.ph</span>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="px-2.5 py-1 bg-soft-maroon text-pup-maroon text-[11px] font-bold uppercase rounded border border-pup-maroon/20 tracking-wider">Creator</span>
                        <a href="#" className="text-sm font-bold text-pup-maroon hover:underline flex items-center gap-1">
                          View Public Profile <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-10 pt-8 border-t border-border">
                  <InfoItem label="College" value="CCIS" />
                  <InfoItem label="Program" value="BS Information Technology" />
                  <InfoItem label="Student Number" value="2022-00001" />
                  <InfoItem label="Date Joined" value="March 12, 2022" />
                  <InfoItem label="Last Active" value="Today, 9:21 AM" />
                  <InfoItem label="Current Role" value="Creator" />
                </div>
              </div>

              {/* Creator Stats */}
              <div className="grid grid-cols-4 gap-4">
                <StatBox label="Approved Works" value="24" color="text-status-approved" />
                <StatBox label="Pending" value="1" color="text-status-pending" />
                <StatBox label="Reports Received" value="0" color="text-status-rejected" />
                <StatBox label="Events Joined" value="5" color="text-status-info" />
              </div>

              {/* Recognition Badges */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Award size={18} className="text-pup-gold" />
                  Recognition Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                  <BadgeChip icon={<Building2 size={12} />} label="College Highlight" />
                  <BadgeChip icon={<Activity size={12} />} label="Rising Creator" />
                  <BadgeChip icon={<Shield size={12} />} label="Moderator's Pick" />
                  <button className="px-3 py-1.5 border border-dashed border-border rounded-full text-[12px] font-bold text-muted-text hover:border-pup-maroon hover:text-pup-maroon transition-colors">
                    + Award Badge
                  </button>
                </div>
              </div>

              {/* Moderation History */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <History size={18} className="text-secondary-text" />
                  Moderation History
                </h3>
                <div className="space-y-4">
                  <HistoryRow date="June 13, 2026" action="Featured Work" item="Digital Sinta" />
                  <HistoryRow date="June 10, 2026" action="Approved Submission" item="Campus Layout" />
                  <HistoryRow date="May 28, 2026" action="Report Submitted" item="Content Flagged" />
                </div>
                <button className="w-full mt-6 py-2 text-[12px] font-bold text-secondary-text hover:text-primary-text border border-border rounded-xl transition-colors">
                  View Full History
                </button>
              </div>

              {/* Internal Notes */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold mb-4">Account Notes (Internal Only)</h3>
                <textarea 
                  placeholder="Add a note about this user..."
                  className="w-full min-h-[100px] p-4 bg-main-bg border border-border rounded-xl text-sm focus:outline-none focus:border-pup-maroon transition-colors resize-none"
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 bg-pup-maroon text-white text-[12px] font-bold rounded-xl shadow-sm">Save Note</button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-4">
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm sticky top-8">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-pup-maroon">
                  <ShieldAlert size={18} />
                  Admin Actions
                </h3>
                <div className="space-y-3">
                  <ActionButton icon={<User size={16} />} label="Change User Role" />
                  <ActionButton 
                    icon={<ShieldOff size={16} />} 
                    label="Restrict Account" 
                    variant="amber" 
                    onClick={() => setShowRestrictModal(true)} 
                  />
                  <ActionButton 
                    icon={<ShieldAlert size={16} />} 
                    label="Suspend Account" 
                    variant="red" 
                    onClick={() => setShowSuspendModal(true)} 
                  />
                  <div className="h-px bg-border my-2"></div>
                  <ActionButton icon={<LayoutDashboard size={16} />} label="View Submissions" />
                  <ActionButton icon={<Mail size={16} />} label="Send Official Email" disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Restrict Modal */}
      {showRestrictModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-surface/60 backdrop-blur-sm p-4">
          <div className="bg-card-bg border border-border rounded-2xl shadow-2xl max-w-[480px] w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <div className="flex items-center gap-3 text-status-pending mb-4">
                <AlertTriangle size={24} />
                <h2 className="text-xl font-bold">Restrict Account?</h2>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed">
                You are about to restrict <span className="font-bold text-primary-text">Rafael Mendoza</span>. 
                Restricted users can still browse but cannot submit new works, comment, or interact with other content.
              </p>
              
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-sm font-semibold text-primary-text mb-1.5 block">Reason for Restriction</span>
                  <select className="w-full px-4 py-2.5 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon">
                    <option>Policy violation</option>
                    <option>Inappropriate behavior</option>
                    <option>Copyright concerns</option>
                    <option>Other</option>
                  </select>
                </label>
                <textarea 
                  className="w-full px-4 py-3 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon min-h-[100px]"
                  placeholder="Details for user notification..."
                ></textarea>
              </div>
            </div>
            <div className="bg-secondary-surface/30 p-4 px-6 flex items-center justify-end gap-3 border-t border-border">
              <button onClick={() => setShowRestrictModal(false)} className="px-4 py-2 text-sm font-bold text-secondary-text hover:text-primary-text">Cancel</button>
              <button className="px-6 py-2 bg-status-pending text-white text-sm font-bold rounded-xl shadow-md">Restrict Account</button>
            </div>
          </div>
        </div>
      )}

      {/* Suspend Modal */}
      {showSuspendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-surface/60 backdrop-blur-sm p-4">
          <div className="bg-card-bg border border-border rounded-2xl shadow-2xl max-w-[480px] w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <div className="flex items-center gap-3 text-status-rejected mb-4">
                <ShieldAlert size={24} />
                <h2 className="text-xl font-bold">Suspend Account?</h2>
              </div>
              <div className="bg-status-rejected/10 border border-status-rejected/20 p-4 rounded-xl mb-6">
                <p className="text-status-rejected text-sm font-medium">
                  Suspension will block all access to the platform and hide the user's public profile and works.
                </p>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed">
                Are you sure you want to suspend <span className="font-bold text-primary-text">Rafael Mendoza</span>? 
                This action will be logged and requires clear justification.
              </p>
            </div>
            <div className="bg-secondary-surface/30 p-4 px-6 flex items-center justify-end gap-3 border-t border-border">
              <button onClick={() => setShowSuspendModal(false)} className="px-4 py-2 text-sm font-bold text-secondary-text hover:text-primary-text">Cancel</button>
              <button className="px-6 py-2 bg-status-rejected text-white text-sm font-bold rounded-xl shadow-md">Suspend Account</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
      active 
        ? 'bg-white/10 text-white border-l-4 border-pup-gold' 
        : 'text-white/70 hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function InfoItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <div className="text-[12px] font-bold text-muted-text uppercase tracking-wider">{label}</div>
      <div className="text-sm font-semibold text-primary-text mt-1">{value}</div>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="bg-card-bg border border-border p-4 rounded-2xl shadow-sm text-center">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

function BadgeChip({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-soft-gold text-warm-gold text-[12px] font-bold uppercase rounded-full border border-pup-gold/30">
      {icon}
      {label}
    </span>
  );
}

function HistoryRow({ date, action, item }: { date: string, action: string, item: string }) {
  return (
    <div className="flex items-center justify-between text-sm py-2 border-b border-border/50 last:border-0">
      <div>
        <div className="font-semibold">{action}</div>
        <div className="text-[12px] text-muted-text">{item}</div>
      </div>
      <div className="text-[12px] text-secondary-text">{date}</div>
    </div>
  );
}

function ActionButton({ icon, label, variant = 'gray', onClick, disabled = false }: { 
  icon: React.ReactNode, 
  label: string, 
  variant?: 'gray' | 'amber' | 'red',
  onClick?: () => void,
  disabled?: boolean
}) {
  const styles = {
    gray: 'border-border text-primary-text hover:border-pup-maroon hover:text-pup-maroon',
    amber: 'border-status-pending/30 text-status-pending hover:bg-status-pending/5',
    red: 'border-status-rejected/30 text-status-rejected hover:bg-status-rejected/5'
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-3 px-4 py-3 border-2 rounded-xl text-sm font-bold transition-all ${styles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed border-dashed' : ''}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
