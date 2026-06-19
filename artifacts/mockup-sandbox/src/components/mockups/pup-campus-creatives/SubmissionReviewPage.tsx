import React, { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  Star, 
  Shield, 
  History, 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  XCircle, 
  Save, 
  ExternalLink,
  ChevronDown,
  Calendar,
  Clock,
  Video,
  Image as ImageIcon,
  Check
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ModeratorDesktopSidebar } from './_shared/ModeratorDesktopSidebar';
import './_group.css';

type ReviewDecision = "approve" | "revision" | "reject";

interface SubmissionReviewPageProps {
  onBack?: () => void;
  onDecisionComplete?: () => void;
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

export default function SubmissionReviewPage({
  onBack,
  onDecisionComplete,
  onDashboard,
  onPending,
  onReports,
  onFeatured,
  onOfficialContent,
  onHistory,
  onEvents,
}: SubmissionReviewPageProps = {}) {
  const [activeTab, setActiveTab] = useState('Pending Reviews');
  const [checklist, setChecklist] = useState<Record<number, boolean>>({});
  const [decisionModal, setDecisionModal] = useState<ReviewDecision | null>(null);

  const handleNav = (tab: string, callback?: () => void) => {
    setActiveTab(tab);
    callback?.();
  };

  const toggleCheck = (index: number) => {
    setChecklist(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const checklistItems = [
    "Content is appropriate",
    "Ownership confirmation is complete",
    "Description is clear",
    "Categories are accurate",
    "Media quality is acceptable",
    "Accessibility details are complete",
    "Event requirements are met",
    "Community guidelines are followed"
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar
        onDashboard={onDashboard}
        onPending={onPending}
        onReports={onReports}
        onFeatured={onFeatured}
        onOfficialContent={onOfficialContent}
        onEvents={onEvents}
        onHistory={onHistory}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-[64px] bg-card-bg border-b border-border flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-[13px] text-secondary-text">
            <button onClick={onBack} className="hover:text-pup-maroon cursor-pointer font-medium">Pending Reviews</button>
            <ChevronRight size={14} />
            <span className="font-bold text-primary-text">Digital Sinta — CC-WORK-2026-0148</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-secondary-text hover:bg-secondary-surface rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson-accent rounded-full border-2 border-card-bg"></span>
            </button>
            <div className="h-8 w-px bg-border mx-1"></div>
            <InitialsAvatar name="Maria Moderator" className="w-10 h-10 border border-border" textClassName="text-xs" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-main-bg">
          <div className="max-w-[1400px] mx-auto p-8 flex gap-8">
            
            {/* COL 1: Media (380px) */}
            <div className="w-[380px] shrink-0 space-y-6">
              <div className="bg-card-bg rounded-2xl border border-border shadow-sm overflow-hidden sticky top-0">
                <div className="relative aspect-[4/3] bg-secondary-surface">
                  <img src="/__mockup/images/thumbnail_1.jpg" alt="Cover" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                    <button className="w-10 h-10 rounded-full bg-dark-surface/50 text-white flex items-center justify-center backdrop-blur-md pointer-events-auto hover:bg-dark-surface transition-colors">
                      <ChevronLeft size={24} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-dark-surface/50 text-white flex items-center justify-center backdrop-blur-md pointer-events-auto hover:bg-dark-surface transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <button className="absolute bottom-4 right-4 p-2 rounded-lg bg-dark-surface/50 text-white backdrop-blur-md hover:bg-dark-surface transition-colors">
                    <Maximize2 size={18} />
                  </button>
                </div>
                <div className="p-4 bg-secondary-surface/30">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-16 h-12 rounded border-2 shrink-0 overflow-hidden cursor-pointer ${i === 1 ? 'border-pup-maroon' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                        <img src={`/__mockup/images/thumbnail_${i + 1}.jpg`} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-16 h-12 rounded bg-dark-surface/10 border-2 border-transparent shrink-0 flex items-center justify-center text-muted-text cursor-pointer hover:bg-dark-surface/20">
                      <Video size={20} />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-[12px] font-bold text-muted-text uppercase">
                      <span>Media Details</span>
                      <span className="text-pup-maroon lowercase hover:underline cursor-pointer">View full screen</span>
                    </div>
                    <div className="text-[13px] text-primary-text font-mono break-all">digital-sinta-cover.webp</div>
                    <p className="text-[12px] text-secondary-text leading-relaxed bg-white p-2 rounded border border-border">
                      <span className="font-bold">Alt Text:</span> An illustration of Sinta standing by the train tracks with a warm sunset background in Sta. Mesa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COL 2: Details (flexible) */}
            <div className="flex-1 space-y-8 min-w-0">
              <section className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h1 className="text-3xl font-bold text-primary-text tracking-tight tracking-tight">Digital Sinta</h1>
                      <span className="px-2 py-0.5 bg-secondary-surface text-secondary-text text-[11px] font-mono font-bold rounded border border-border uppercase">CC-WORK-2026-0148</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <InitialsAvatar name="Rafael Mendoza" className="w-6 h-6 border border-border" textClassName="text-[10px]" />
                        <span className="text-[14px] font-bold text-primary-text">Rafael Mendoza</span>
                        <span className="text-muted-text">•</span>
                        <span className="text-[13px] text-secondary-text font-medium">CCIS • BSIT</span>
                        <a href="#" className="text-[13px] text-pup-maroon font-bold hover:underline flex items-center gap-1 ml-2">
                          View Creator Profile <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-status-pending text-[13px] font-bold rounded-full border border-amber-200 uppercase tracking-wide">
                      <Clock size={14} /> Pending Review
                    </div>
                    <div className="text-[12px] text-muted-text mt-1.5 font-medium">Submitted June 12, 2026</div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 gap-8">
                {/* Submission Details */}
                <section className="bg-card-bg rounded-2xl border border-border p-6 shadow-sm space-y-6">
                  <h3 className="text-[16px] font-bold text-primary-text uppercase tracking-wider border-b border-border pb-3">Submission Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[12px] font-bold text-muted-text uppercase mb-1.5">Description</h4>
                      <p className="text-[14px] text-secondary-text leading-relaxed">
                        A digital illustration capturing the intersection of academic life and urban transit at the Sta. Mesa campus. Created using Procreate and Photoshop over 2 weeks.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold text-muted-text uppercase mb-1.5">Artist Statement</h4>
                      <div className="text-[14px] text-secondary-text leading-relaxed bg-main-bg/50 p-4 rounded-xl border border-border relative">
                        <p className="line-clamp-3">
                          The Sta. Mesa railway is more than just a commute; it's a heartbeat that connects thousands of students. In "Digital Sinta," I wanted to explore how we as students find moments of peace and introspection amidst the noise and chaos of our daily travels. The sinta (lover/beloved) here represents our dreams and aspirations that we carry with us through the tracks...
                        </p>
                        <button className="text-pup-maroon font-bold mt-2 hover:underline">Read Full Statement</button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[12px] font-bold text-muted-text uppercase mb-2">Category & Type</h4>
                        <div className="flex gap-2">
                          <span className="px-2.5 py-1 bg-secondary-surface text-secondary-text text-[11px] font-bold rounded uppercase">Digital Art</span>
                          <span className="px-2.5 py-1 bg-secondary-surface text-secondary-text text-[11px] font-bold rounded uppercase">Artwork</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[12px] font-bold text-muted-text uppercase mb-2">Event Association</h4>
                        <span className="px-2.5 py-1 bg-soft-gold text-warm-gold text-[11px] font-bold rounded uppercase flex items-center gap-1 w-fit border border-warm-gold/20">
                          <Star size={12} fill="currentColor" /> PUP Likha 2026
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold text-muted-text uppercase mb-2">Tags & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {['StaMesa', 'Railways', 'StudentLife', 'DigitalPainting', 'Sunset'].map(tag => (
                          <span key={tag} className="text-[13px] text-pup-maroon font-medium">#{tag}</span>
                        ))}
                        <div className="w-px h-4 bg-border mx-2 self-center"></div>
                        {['Procreate', 'Photoshop', 'Wacom Tablet'].map(tool => (
                          <span key={tool} className="px-2 py-0.5 bg-main-bg border border-border text-muted-text text-[11px] font-medium rounded">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Ownership & Accessibility */}
                <div className="grid grid-cols-2 gap-6">
                  <section className="bg-card-bg rounded-2xl border-l-4 border-l-amber-400 border border-border p-6 shadow-sm space-y-4">
                    <h3 className="text-[15px] font-bold text-primary-text flex items-center gap-2">
                      Ownership <CheckCircle2 size={18} className="text-status-approved" />
                    </h3>
                    <div className="space-y-3">
                      <OwnershipRow checked={true} label="I am the original creator" />
                      <OwnershipRow checked={true} label="Work does not violate copyright" />
                      <OwnershipRow checked={true} label="No AI-generated content used" />
                      <OwnershipRow checked={true} label="Usage rights granted for PUP" />
                    </div>
                    <div className="pt-2">
                      <div className="px-3 py-2 bg-green-50 text-status-approved text-[12px] font-bold rounded-lg border border-green-100 flex items-center gap-2">
                        <Check size={16} /> No ownership concerns flagged
                      </div>
                    </div>
                  </section>

                  <section className="bg-card-bg rounded-2xl border border-border p-6 shadow-sm space-y-4">
                    <h3 className="text-[15px] font-bold text-primary-text flex items-center gap-2">
                      Accessibility <AlertCircle size={18} className="text-status-pending" />
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-secondary-text">Alt Text:</span>
                        <span className="font-bold text-status-pending flex items-center gap-1">2 of 4 completed <AlertCircle size={14} /></span>
                      </div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-secondary-text">Captions:</span>
                        <span className="font-bold text-muted-text">Not provided</span>
                      </div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-secondary-text">Transcript:</span>
                        <span className="font-bold text-muted-text italic">N/A</span>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Creator Summary */}
                <section className="bg-white p-5 rounded-2xl border border-border shadow-sm">
                  <div className="grid grid-cols-[minmax(220px,1.2fr)_minmax(260px,1fr)_auto] items-center gap-5">
                  <div className="flex items-center gap-4 min-w-0">
                    <InitialsAvatar name="Rafael Mendoza" className="w-14 h-14 border border-border" textClassName="text-base" />
                    <div className="min-w-0">
                      <h4 className="text-[15px] font-bold text-primary-text">Rafael Mendoza</h4>
                      <div className="text-[12px] text-muted-text">Member since Oct 2024</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary-surface p-2">
                    <SummaryItem label="Approved" value="24" color="text-status-approved" />
                    <SummaryItem label="Revisions" value="0" color="text-status-needs-revision" />
                    <SummaryItem label="Reports" value="0" color="text-status-rejected" />
                  </div>
                  <button className="px-4 py-2 bg-secondary-surface hover:bg-border text-primary-text text-[13px] font-bold rounded-xl transition-colors shrink-0">
                    Full History
                  </button>
                  </div>
                </section>
              </div>
            </div>

            {/* COL 3: Moderation Controls (300px) */}
            <aside className="w-[300px] shrink-0">
              <div className="bg-card-bg rounded-2xl border border-border p-6 shadow-md sticky top-8 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h3 className="font-bold text-primary-text uppercase tracking-wider text-[14px]">Moderation Controls</h3>
                </div>

                {/* Checklist */}
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold text-muted-text uppercase tracking-widest mb-1">Review Checklist</h4>
                  {checklistItems.map((item, i) => (
                    <button 
                      key={i}
                      onClick={() => toggleCheck(i)}
                      className="flex items-center gap-3 w-full group text-left"
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${checklist[i] ? 'bg-pup-maroon border-pup-maroon' : 'border-border group-hover:border-pup-maroon'}`}>
                        {checklist[i] && <Check size={14} className="text-white" strokeWidth={3} />}
                      </div>
                      <span className={`text-[13px] transition-colors ${checklist[i] ? 'text-primary-text font-medium' : 'text-secondary-text'}`}>{item}</span>
                    </button>
                  ))}
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-muted-text uppercase tracking-widest">Private Notes</h4>
                  <textarea 
                    placeholder="Internal comments (not visible to student)..."
                    className="w-full h-24 p-3 bg-secondary-surface rounded-xl text-[13px] border-none focus:ring-1 focus:ring-pup-maroon resize-none outline-none"
                  ></textarea>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <button onClick={() => setDecisionModal("approve")} className="w-full py-3 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-all shadow-sm">
                    Approve Work
                  </button>
                  <button onClick={() => setDecisionModal("approve")} className="w-full py-3 bg-pup-gold text-dark-surface font-bold rounded-xl hover:bg-warm-gold transition-all shadow-sm flex items-center justify-center gap-2">
                    <Star size={18} fill="currentColor" /> Approve & Feature
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => setDecisionModal("revision")} className="py-2.5 border border-status-needs-revision text-status-needs-revision text-[12px] font-bold rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-1.5">
                      <RefreshCw size={14} /> Revision
                    </button>
                    <button onClick={() => setDecisionModal("reject")} className="py-2.5 border border-status-rejected text-status-rejected text-[12px] font-bold rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-1.5">
                      <XCircle size={14} /> Reject
                    </button>
                  </div>
                  <button className="w-full py-2.5 border border-border text-secondary-text text-[12px] font-bold rounded-xl hover:bg-secondary-surface transition-colors flex items-center justify-center gap-1.5">
                    <Flag size={14} /> Flag for Senior Review
                  </button>
                  <button className="w-full text-center text-pup-maroon text-[12px] font-bold py-1 hover:underline">
                    Save Internal Notes
                  </button>
                </div>

                {/* Queue Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <button className="text-[13px] font-bold text-secondary-text hover:text-pup-maroon flex items-center gap-1">
                    <ChevronLeft size={16} /> Previous
                  </button>
                  <span className="text-[12px] font-medium text-muted-text">3 of 24 in Queue</span>
                  <button className="text-[13px] font-bold text-secondary-text hover:text-pup-maroon flex items-center gap-1">
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <ReviewDecisionModal
        decision={decisionModal}
        onCancel={() => setDecisionModal(null)}
        onConfirm={() => {
          setDecisionModal(null);
          onDecisionComplete?.();
        }}
      />
    </div>
  );
}

function ReviewDecisionModal({
  decision,
  onCancel,
  onConfirm,
}: {
  decision: ReviewDecision | null;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    if (!decision) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [decision, onCancel]);

  if (!decision) return null;

  const copy = {
    approve: {
      title: "Approve this work?",
      body: "This mock action marks Digital Sinta as approved for the classroom demo.",
      confirm: "Approve",
      color: "bg-status-approved",
      icon: <CheckCircle2 size={24} />,
    },
    revision: {
      title: "Request revisions?",
      body: "This mock action sends a revision request with moderator feedback.",
      confirm: "Request Revision",
      color: "bg-status-needs-revision",
      icon: <RefreshCw size={24} />,
    },
    reject: {
      title: "Reject this submission?",
      body: "This mock action records a rejection decision without changing persistent data.",
      confirm: "Reject",
      color: "bg-status-rejected",
      icon: <XCircle size={24} />,
    },
  }[decision];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm" onClick={onCancel}></div>
      <div className="relative z-10 w-full max-w-[420px] rounded-2xl bg-card-bg border border-border shadow-2xl p-6">
        <div className={`w-12 h-12 rounded-xl ${copy.color} text-white flex items-center justify-center mb-4`}>
          {copy.icon}
        </div>
        <h3 className="text-xl font-bold text-primary-text mb-2">{copy.title}</h3>
        <p className="text-sm text-secondary-text leading-relaxed mb-6">{copy.body}</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-3 rounded-xl border border-border font-bold text-primary-text hover:bg-secondary-surface transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className={`flex-1 py-3 rounded-xl ${copy.color} text-white font-bold transition-colors`}>
            {copy.confirm}
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, badge, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between border-l-4 px-3 py-2.5 rounded-lg transition-all ${
        active 
          ? 'bg-white/10 border-pup-gold text-white' 
          : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
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

function OwnershipRow({ checked, label }: { checked: boolean, label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-[13px]">
      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${checked ? 'bg-status-approved text-white' : 'bg-secondary-surface text-muted-text border border-border'}`}>
        <Check size={10} strokeWidth={4} />
      </div>
      <span className={checked ? 'text-primary-text font-medium' : 'text-secondary-text'}>{label}</span>
    </div>
  );
}

function SummaryItem({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="text-center">
      <div className={`text-xl font-bold ${color}`}>{value}</div>
      <div className="text-[11px] font-bold text-muted-text uppercase tracking-widest mt-0.5">{label}</div>
    </div>
  );
}
