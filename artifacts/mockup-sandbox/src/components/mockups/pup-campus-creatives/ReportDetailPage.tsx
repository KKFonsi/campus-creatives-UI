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
  ChevronRight,
  MoreVertical,
  AlertTriangle,
  ExternalLink,
  Image as ImageIcon,
  MessageSquare,
  FileText,
  Clock,
  User,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowLeft,
  Info
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import './_group.css';

const ModeratorSidebar = ({ active }: { active: string }) => (
  <aside className="w-[240px] bg-dark-surface text-white flex flex-col flex-shrink-0 min-h-screen">
    <div className="p-6">
      <div className="text-pup-gold font-bold text-xl tracking-tight leading-tight mb-1">
        CAMPUS<br />CREATIVES
      </div>
      <div className="inline-block bg-white/10 text-pup-gold text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
        Moderator
      </div>
    </div>
    
    <nav className="flex-1 px-3 space-y-1">
      {[
        { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'Pending Reviews', icon: ClipboardList, label: 'Pending Reviews', badge: '24' },
        { id: 'Reports', icon: Flag, label: 'Reports', badge: '6' },
        { id: 'Featured Works', icon: Star, label: 'Featured Works' },
        { id: 'Official Content', icon: Shield, label: 'Official Content' },
        { id: 'Moderation History', icon: History, label: 'Moderation History' },
      ].map((item) => (
        <button
          key={item.id}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
            active === item.id 
              ? 'bg-white/10 text-white border-l-4 border-pup-maroon' 
              : 'text-white/70 hover:bg-white/5 hover:text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <item.icon size={18} />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
          {item.badge && (
            <span className="bg-pup-maroon text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              {item.badge}
            </span>
          )}
        </button>
      ))}
    </nav>
    
    <div className="p-4 border-t border-white/10">
      <button className="flex items-center gap-2 text-sm text-pup-gold hover:underline">
        <span>Switch to Student View</span>
        <ChevronRight size={14} />
      </button>
    </div>
  </aside>
);

const TopBar = ({ role = "Moderator" }) => (
  <header className="h-16 bg-card-bg border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
      <input 
        type="text" 
        placeholder="Search submissions, creators, or reports..."
        className="w-full pl-10 pr-4 py-2 bg-secondary-surface rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-pup-maroon/20"
      />
    </div>
    
    <div className="flex items-center gap-4">
      <button className="relative p-2 text-secondary-text hover:bg-secondary-surface rounded-full transition-colors">
        <Bell size={20} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson-accent rounded-full border-2 border-card-bg"></span>
      </button>
      
      <div className="h-8 w-px bg-border mx-2"></div>
      
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-semibold text-primary-text leading-tight text-right">Maria Moderator</div>
          <div className="text-[11px] font-bold text-pup-maroon uppercase tracking-wider">{role}</div>
        </div>
        <InitialsAvatar name="Maria Moderator" className="w-10 h-10 border border-pup-maroon/20" textClassName="text-xs" />
      </div>
    </div>
  </header>
);

export default function ReportDetailPage() {
  const [showConfirmModal, setShowConfirmModal] = useState<string | null>(null);

  const breadcrumbs = [
    { label: "Reports", href: "#" },
    { label: "CC-RPT-2026-0031", active: true }
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorSidebar active="Reports" />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto p-6 bg-main-bg">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-secondary-text mb-4">
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <span className={bc.active ? "text-primary-text font-semibold" : "hover:text-pup-maroon cursor-pointer"}>
                  {bc.label}
                </span>
                {idx < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-primary-text tracking-tight">Report CC-RPT-2026-0031</h1>
              <span className="px-3 py-1 bg-soft-maroon text-pup-maroon text-xs font-bold rounded-full border border-pup-maroon/20 uppercase tracking-wider">
                Suspected stolen work
              </span>
              <span className="px-3 py-1 bg-crimson-accent/10 text-crimson-accent text-xs font-bold rounded-full border border-crimson-accent/20 flex items-center gap-1 uppercase tracking-wider">
                <AlertCircle size={12} />
                High Priority
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full border border-amber-200 uppercase tracking-wider">
                Open
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Reported Content */}
              <section className="bg-card-bg rounded-xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border bg-secondary-surface/30">
                  <h3 className="font-bold text-primary-text flex items-center gap-2">
                    <ImageIcon size={18} className="text-pup-maroon" />
                    Reported Content
                  </h3>
                </div>
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-[300px] aspect-[4/3] bg-secondary-surface rounded-lg overflow-hidden flex-shrink-0 border border-border relative group">
                    <div className="w-full h-full bg-gradient-to-br from-soft-maroon to-soft-gold flex items-center justify-center text-pup-maroon/30 italic">
                      [Digital Sinta Thumbnail]
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-primary-text mb-1">Digital Sinta</h2>
                      <div className="flex items-center gap-2 text-secondary-text mb-3">
                        <div className="w-6 h-6 rounded-full bg-soft-maroon flex items-center justify-center text-[10px] font-bold text-pup-maroon">RM</div>
                        <span className="text-sm">Rafael Mendoza</span>
                        <span className="text-xs px-2 py-0.5 bg-secondary-surface rounded text-secondary-text font-medium uppercase tracking-wider">Digital Art</span>
                      </div>
                      <button className="text-sm font-bold text-pup-maroon hover:underline flex items-center gap-1">
                        View Full Submission <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Report Information */}
              <section className="bg-card-bg rounded-xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border bg-secondary-surface/30">
                  <h3 className="font-bold text-primary-text flex items-center gap-2">
                    <FileText size={18} className="text-pup-maroon" />
                    Report Information
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
                  <div className="space-y-1">
                    <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider">Report Type</div>
                    <div className="text-primary-text font-semibold uppercase tracking-tight">Work Report</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider">Reason</div>
                    <div className="text-primary-text font-semibold uppercase tracking-tight">Suspected stolen work</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider">Date Submitted</div>
                    <div className="text-primary-text font-semibold uppercase tracking-tight">June 11, 2026</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider">Reporter</div>
                    <div className="text-primary-text font-semibold uppercase tracking-tight underline decoration-dotted">Anonymous</div>
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider">Description</div>
                    <div className="p-4 bg-secondary-surface rounded-lg text-primary-text leading-relaxed">
                      This work appears to reference an external commercial poster design without attribution. The third composition closely matches a published campaign from 2024.
                    </div>
                  </div>
                </div>
              </section>

              {/* Supporting Evidence */}
              <section className="space-y-4">
                <h3 className="font-bold text-primary-text px-1">Supporting Evidence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-card-bg rounded-xl border border-border p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary-surface rounded flex items-center justify-center text-muted-text">
                          <ImageIcon size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-primary-text">screenshot-0{i}.jpg</div>
                          <div className="text-xs text-muted-text uppercase tracking-wider font-medium">1.2 MB • JPG</div>
                        </div>
                      </div>
                      <button className="p-2 text-pup-maroon hover:bg-soft-maroon rounded-lg transition-colors">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Copyright Comparison */}
              <section className="bg-card-bg rounded-xl border border-pup-maroon/20 border-l-4 border-l-pup-maroon overflow-hidden">
                <div className="p-4 border-b border-border bg-soft-maroon/30">
                  <h3 className="font-bold text-pup-maroon flex items-center gap-2">
                    <Shield size={18} />
                    Copyright Comparison
                  </h3>
                </div>
                <div className="p-6 space-y-6 text-sm">
                  <div className="space-y-1">
                    <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider">Claimed Original Source</div>
                    <div className="text-pup-maroon font-bold underline cursor-pointer hover:text-deep-maroon">
                      https://example.com/commercial-campaign-2024-visuals
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-muted-text font-medium uppercase text-[10px] tracking-wider">Submission Ownership Declaration</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "I am the sole creator of this work",
                        "I have not violated any copyright",
                        "All reference materials are cited",
                        "I authorize PUP to display this work"
                      ].map((check, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-status-approved">
                          <CheckCircle2 size={16} />
                          <span className="font-medium">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="text-xs font-bold text-pup-maroon flex items-center gap-1 hover:underline">
                      Senior review recommendation <ArrowLeft className="rotate-180" size={12} />
                    </button>
                  </div>
                </div>
              </section>

              {/* Related Reports */}
              <section className="space-y-4">
                <h3 className="font-bold text-primary-text px-1">Related Reports</h3>
                <div className="bg-card-bg rounded-xl border border-border p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-primary-text tracking-tight uppercase">Inappropriate content</span>
                      <span className="text-[10px] text-muted-text uppercase tracking-widest font-bold">CC-RPT-2026-0012</span>
                    </div>
                    <div className="text-xs text-secondary-text">Reported on June 5, 2026 • Reason: Content violates community safety</div>
                  </div>
                  <button className="text-xs font-bold text-pup-maroon px-3 py-1.5 rounded-lg border border-pup-maroon/20 hover:bg-soft-maroon">
                    Open
                  </button>
                </div>
              </section>

              {/* Previous Moderation Actions */}
              <section className="space-y-4">
                <h3 className="font-bold text-primary-text px-1">Previous Moderation Actions</h3>
                <div className="bg-secondary-surface/50 rounded-xl border border-border p-8 text-center">
                  <div className="text-muted-text text-sm italic">No prior moderation actions for this work.</div>
                </div>
              </section>
            </div>

            {/* Right Column: Actions & Sidebar */}
            <div className="space-y-6">
              {/* Status Card */}
              <section className="bg-card-bg rounded-xl border border-border overflow-hidden shadow-sm">
                <div className="p-4 bg-dark-surface text-white font-bold text-sm tracking-widest uppercase">
                  Report Status
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-border/50 text-sm">
                    <span className="text-secondary-text font-medium uppercase text-[10px] tracking-wider">Current Status</span>
                    <span className="text-amber-700 font-bold uppercase tracking-tight">Open</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50 text-sm">
                    <span className="text-secondary-text font-medium uppercase text-[10px] tracking-wider">Created</span>
                    <span className="text-primary-text font-bold uppercase tracking-tight">June 11, 2026</span>
                  </div>
                  <div className="flex items-center justify-between py-2 text-sm">
                    <span className="text-secondary-text font-medium uppercase text-[10px] tracking-wider">Reported By</span>
                    <span className="text-primary-text font-bold uppercase tracking-tight">Anonymized</span>
                  </div>
                </div>
              </section>

              {/* Internal Notes */}
              <section className="bg-card-bg rounded-xl border border-border p-6 space-y-3 shadow-sm">
                <label className="text-muted-text font-bold uppercase text-[10px] tracking-widest">Internal only</label>
                <textarea 
                  placeholder="Add notes for other moderators..."
                  className="w-full h-32 p-3 bg-secondary-surface border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pup-maroon/20 resize-none"
                ></textarea>
                <div className="flex justify-end">
                  <button className="text-xs font-bold text-pup-maroon hover:underline uppercase tracking-wider">Save Note</button>
                </div>
              </section>

              {/* Action Buttons */}
              <section className="space-y-3">
                <h4 className="text-muted-text font-bold uppercase text-[10px] tracking-widest px-1">Moderation Controls</h4>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setShowConfirmModal('resolve')}
                    className="w-full py-3 bg-pup-maroon text-white rounded-lg font-bold text-sm hover:bg-deep-maroon transition-colors shadow-sm tracking-wide uppercase"
                  >
                    Resolve Report ✓
                  </button>
                  <button className="w-full py-2.5 bg-white border border-border text-secondary-text rounded-lg font-bold text-xs hover:bg-secondary-surface transition-colors tracking-wide uppercase">
                    Dismiss Report
                  </button>
                  <button className="w-full py-2.5 bg-white border border-border text-pup-maroon rounded-lg font-bold text-xs hover:bg-soft-maroon transition-colors tracking-wide uppercase">
                    Request More Info
                  </button>
                  <div className="pt-2 flex flex-col gap-2">
                    <button 
                      onClick={() => setShowConfirmModal('hide')}
                      className="w-full py-2.5 border border-amber-600/30 text-amber-700 bg-amber-50/50 rounded-lg font-bold text-xs hover:bg-amber-100/50 transition-colors tracking-wide uppercase"
                    >
                      Hide Content Temporarily
                    </button>
                    <button 
                      onClick={() => setShowConfirmModal('remove')}
                      className="w-full py-2.5 border border-red-600/30 text-red-700 bg-red-50/50 rounded-lg font-bold text-xs hover:bg-red-100/50 transition-colors tracking-wide uppercase"
                    >
                      Remove Content
                    </button>
                    <button className="w-full py-2.5 border border-orange-600/30 text-orange-700 bg-orange-50/50 rounded-lg font-bold text-xs hover:bg-orange-100/50 transition-colors tracking-wide uppercase">
                      Warn User
                    </button>
                    <button 
                      onClick={() => setShowConfirmModal('escalate')}
                      className="w-full py-2.5 border border-crimson-accent/30 text-crimson-accent bg-soft-maroon/30 rounded-lg font-bold text-xs hover:bg-soft-maroon/50 transition-colors tracking-wide uppercase"
                    >
                      Escalate
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Modals */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card-bg w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-border">
            <div className="p-6 space-y-4 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-soft-maroon flex items-center justify-center text-pup-maroon mb-2">
                <AlertCircle size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-text uppercase tracking-tight">
                  {showConfirmModal === 'hide' && "Hide 'Digital Sinta' temporarily?"}
                  {showConfirmModal === 'remove' && "Remove 'Digital Sinta' permanently?"}
                  {showConfirmModal === 'escalate' && "Escalate to Senior Moderator?"}
                  {showConfirmModal === 'resolve' && "Resolve this report?"}
                </h3>
                <p className="text-secondary-text text-sm mt-2 leading-relaxed italic">
                  {showConfirmModal === 'hide' && "This will hide the work from all public galleries until the report is resolved. The creator will be notified."}
                  {showConfirmModal === 'remove' && "This action cannot be undone. The content will be permanently removed from the platform and the creator will receive a formal warning."}
                  {showConfirmModal === 'escalate' && "This report will be moved to the Senior Moderator queue for higher-level review."}
                  {showConfirmModal === 'resolve' && "Mark this report as resolved. All temporary restrictions will be lifted if not specified otherwise."}
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => setShowConfirmModal(null)}
                  className="flex-1 py-3 bg-secondary-surface text-secondary-text rounded-xl font-bold text-sm hover:bg-border transition-colors uppercase tracking-widest"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowConfirmModal(null)}
                  className={`flex-1 py-3 text-white rounded-xl font-bold text-sm transition-colors uppercase tracking-widest ${
                    showConfirmModal === 'remove' ? 'bg-crimson-accent hover:bg-dark-maroon' : 'bg-pup-maroon hover:bg-deep-maroon'
                  }`}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
