import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical, 
  CheckCircle2, 
  RefreshCw, 
  XCircle, 
  Flag, 
  Star, 
  Info,
  Clock,
  User,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  ClipboardList,
  Shield,
  History,
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import './_group.css';

export function SubmissionReviewPageMobile() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [sections, setSections] = useState({
    details: true,
    ownership: false,
    accessibility: false,
    checklist: true,
  });
  const [checklist, setChecklist] = useState(Array(8).fill(false));
  const [showMoreActions, setShowMoreActions] = useState(false);
  const [notes, setNotes] = useState('');

  const toggleSection = (section: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleCheck = (index: number) => {
    const newChecklist = [...checklist];
    newChecklist[index] = !newChecklist[index];
    setChecklist(newChecklist);
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

  const thumbnails = [
    "/__mockup/images/thumbnail_1.jpg",
    "/__mockup/images/thumbnail_2.jpg",
    "/__mockup/images/thumbnail_3.jpg",
    "/__mockup/images/event_1.jpg"
  ];

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto flex flex-col pb-32">
      {/* Mobile Top Header */}
      <header className="h-[56px] bg-dark-surface flex items-center justify-between px-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button className="text-white/80">
            <ChevronLeft size={24} />
          </button>
          <div className="flex flex-col">
            <span className="text-white text-[14px] font-bold tracking-tight uppercase">Pending Review</span>
            <span className="text-pup-gold text-[10px] font-mono">CC-WORK-2026-0148</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white/80 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-pup-maroon text-white text-[10px] flex items-center justify-center rounded-full border-2 border-dark-surface">3</span>
          </button>
          <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-pup-maroon flex items-center justify-center text-white text-[12px] font-bold">
            M
          </div>
        </div>
      </header>

      {/* Media Cover */}
      <section className="relative w-full aspect-video bg-black">
        <img 
          src={thumbnails[activeThumb]} 
          alt="Digital Sinta" 
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={() => setActiveThumb(prev => (prev > 0 ? prev - 1 : thumbnails.length - 1))}
            className="w-10 h-10 bg-black/40 text-white flex items-center justify-center rounded-r-lg"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={() => setActiveThumb(prev => (prev < thumbnails.length - 1 ? prev + 1 : 0))}
            className="w-10 h-10 bg-black/40 text-white flex items-center justify-center rounded-l-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {thumbnails.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full ${i === activeThumb ? 'bg-pup-gold' : 'bg-white/40'}`} 
            />
          ))}
        </div>
      </section>

      {/* Title & Core Info */}
      <section className="p-4 bg-card-bg border-b border-border">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-[20px] font-bold text-primary-text leading-tight">Digital Sinta</h1>
          <span className="px-2 py-0.5 bg-soft-gold text-warm-gold text-[10px] font-bold rounded uppercase">Pending</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-secondary-surface border border-border overflow-hidden">
            <img src="/__mockup/images/creator-portrait.jpg" alt="Rafael" className="w-full h-full object-cover" />
          </div>
          <span className="text-[13px] font-semibold">Rafael Mendoza</span>
          <span className="text-border">•</span>
          <span className="text-[12px] text-secondary-text">CCIS</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-main-bg border border-border rounded-md text-[11px] font-medium">Digital Art</span>
          <span className="px-2 py-1 bg-main-bg border border-border rounded-md text-[11px] font-medium flex items-center gap-1">
            <Clock size={12} className="text-secondary-text" /> June 12, 2026
          </span>
        </div>
      </section>

      {/* Collapsible Sections */}
      <div className="flex flex-col gap-px bg-border">
        {/* Submission Details */}
        <div className="bg-card-bg">
          <button 
            onClick={() => toggleSection('details')}
            className="w-full flex items-center justify-between p-4"
          >
            <span className="font-bold text-[14px] uppercase tracking-wider text-secondary-text">Submission Details</span>
            {sections.details ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {sections.details && (
            <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-1 duration-200">
              <p className="text-[14px] text-primary-text leading-relaxed mb-4">
                A digital interpretation of the classic Filipino "Sinta" (beloved) concept, blending traditional motifs with cyberpunk aesthetics. Created to explore the intersection of heritage and technological future.
              </p>
              <div className="mb-4">
                <h4 className="text-[12px] font-bold text-secondary-text uppercase mb-2">Artist Statement</h4>
                <div className="p-3 bg-secondary-surface rounded-lg text-[13px] text-secondary-text italic leading-relaxed">
                  "As a student at CCIS, I often find myself between two worlds: the lines of code and the vibrant culture of our campus. Digital Sinta is my way of bridge these worlds..."
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Cyberpunk', 'Heritage', 'Digital-Painting', 'PUP-Likha', 'Futurism'].map(tag => (
                  <span key={tag} className="text-[11px] text-pup-maroon font-medium">#{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ownership */}
        <div className="bg-card-bg">
          <button 
            onClick={() => toggleSection('ownership')}
            className="w-full flex items-center justify-between p-4"
          >
            <span className="font-bold text-[14px] uppercase tracking-wider text-secondary-text">Ownership</span>
            {sections.ownership ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {sections.ownership && (
            <div className="px-4 pb-4 space-y-3">
              {[
                "I am the sole creator of this work",
                "I have not used unauthorized assets",
                "I grant PUP permission to showcase",
                "This work complies with university policies"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-status-approved/5 border border-status-approved/10">
                  <CheckCircle2 size={16} className="text-status-approved shrink-0" />
                  <span className="text-[13px] text-primary-text">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Accessibility */}
        <div className="bg-card-bg">
          <button 
            onClick={() => toggleSection('accessibility')}
            className="w-full flex items-center justify-between p-4"
          >
            <span className="font-bold text-[14px] uppercase tracking-wider text-secondary-text">Accessibility</span>
            {sections.accessibility ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {sections.accessibility && (
            <div className="px-4 pb-4 space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <Info size={16} className="text-status-pending" />
                  <span className="text-[13px] font-medium">Alt Text</span>
                </div>
                <span className="text-[12px] text-status-pending font-bold">2 of 4 provided</span>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <Info size={16} className="text-secondary-text" />
                  <span className="text-[13px] font-medium">Captions</span>
                </div>
                <span className="text-[12px] text-secondary-text">Not provided</span>
              </div>
            </div>
          )}
        </div>

        {/* Review Checklist */}
        <div className="bg-card-bg">
          <button 
            onClick={() => toggleSection('checklist')}
            className="w-full flex items-center justify-between p-4"
          >
            <span className="font-bold text-[14px] uppercase tracking-wider text-secondary-text">Review Checklist</span>
            {sections.checklist ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {sections.checklist && (
            <div className="px-4 pb-4 space-y-2">
              {checklistItems.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => toggleCheck(i)}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${checklist[i] ? 'bg-soft-maroon border-pup-maroon' : 'bg-main-bg border-border'}`}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checklist[i] ? 'bg-pup-maroon border-pup-maroon text-white' : 'bg-white border-border'}`}>
                    {checklist[i] && <CheckCircle2 size={14} />}
                  </div>
                  <span className={`text-[13px] ${checklist[i] ? 'text-pup-maroon font-medium' : 'text-primary-text'}`}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Private Notes */}
      <section className="p-4 bg-card-bg border-t border-border mt-4">
        <label className="block text-[12px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Private Notes (Internal Only)</label>
        <textarea 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add observations or notes for other moderators..."
          className="w-full h-24 p-3 bg-secondary-surface border border-border rounded-lg text-[14px] outline-none focus:border-pup-maroon"
        />
      </section>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-[68px] left-0 right-0 p-3 bg-white border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex gap-2 z-40">
        <button className="flex-1 h-11 bg-status-approved text-white rounded-lg font-bold text-[14px] flex items-center justify-center gap-2">
          <CheckCircle2 size={18} /> Approve
        </button>
        <button className="flex-1 h-11 bg-status-needs-revision text-white rounded-lg font-bold text-[14px] flex items-center justify-center gap-2">
          <RefreshCw size={18} /> Revision
        </button>
        <button className="flex-1 h-11 bg-status-rejected text-white rounded-lg font-bold text-[14px] flex items-center justify-center gap-2">
          <XCircle size={18} /> Reject
        </button>
        <button 
          onClick={() => setShowMoreActions(true)}
          className="w-11 h-11 bg-secondary-surface border border-border rounded-lg flex items-center justify-center text-secondary-text"
        >
          <MoreVertical size={20} />
        </button>
      </div>

      {/* More Actions Bottom Sheet */}
      {showMoreActions && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMoreActions(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-card-bg rounded-t-2xl p-4 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6" />
            <h3 className="text-[18px] font-bold mb-4">Additional Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-main-bg active:bg-main-bg transition-colors">
                <Star size={20} className="text-pup-gold" />
                <div className="text-left">
                  <div className="text-[15px] font-semibold text-primary-text">Approve and Feature</div>
                  <div className="text-[12px] text-secondary-text">Showcase work in highlights</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-main-bg active:bg-main-bg transition-colors">
                <Flag size={20} className="text-crimson-accent" />
                <div className="text-left">
                  <div className="text-[15px] font-semibold text-primary-text">Flag for Senior Review</div>
                  <div className="text-[12px] text-secondary-text">Escalate complex cases</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-main-bg active:bg-main-bg transition-colors">
                <History size={20} className="text-secondary-text" />
                <div className="text-left">
                  <div className="text-[15px] font-semibold text-primary-text">Save Notes</div>
                  <div className="text-[12px] text-secondary-text">Update internal moderation log</div>
                </div>
              </button>
            </div>
            <button 
              onClick={() => setShowMoreActions(false)}
              className="w-full mt-4 p-4 border border-border rounded-xl font-bold text-secondary-text"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav (Moderator) */}
      <nav className="fixed bottom-0 left-0 right-0 h-[68px] bg-dark-surface border-t border-white/10 px-6 flex items-center justify-between z-50">
        <button className="flex flex-col items-center gap-1 text-white/50">
          <LayoutDashboard size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Dashboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-pup-gold">
          <ClipboardList size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Reviews</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/50">
          <Flag size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Reports</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/50">
          <MoreVertical size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">More</span>
        </button>
      </nav>
    </div>
  );
}
