import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  Star, 
  Calendar,
  MessageSquare,
  ClipboardList,
  ShieldAlert,
  XCircle,
  FileText,
  RefreshCw,
  Info
} from 'lucide-react';
import './_group.css';

interface ModalProps {
  onClose: () => void;
}

// 1. Request Revision Modal
export function RequestRevisionModal({ onClose }: ModalProps) {
  const [sent, setSent] = useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>(['Accessibility']);

  const chips = [
    'Media Quality', 'Ownership', 'Copyright', 'Description', 
    'Classification', 'Accessibility', 'Event Requirement', 
    'Community Guidelines', 'Other'
  ];

  const toggleChip = (chip: string) => {
    setSelectedChips(prev => 
      prev.includes(chip) ? prev.filter(c => c !== chip) : [...prev, chip]
    );
  };

  if (sent) {
    return (
      <div className="w-[520px] bg-card-bg rounded-2xl shadow-xl border border-border overflow-hidden">
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-status-approved/10 text-status-approved rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-[20px] font-bold mb-2">Revision Request Sent</h3>
          <p className="text-secondary-text text-[15px] mb-6">Student has been notified via dashboard and email. The work status has been updated to "Needs Revision".</p>
          <button 
            onClick={onClose}
            className="w-full py-3 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors"
          >
            Back to Review
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[520px] bg-card-bg rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col max-h-[90vh]">
      <div className="p-5 border-b border-border flex items-center justify-between bg-main-bg/50">
        <div>
          <h2 className="text-[18px] font-bold flex items-center gap-2">
            Request revisions
          </h2>
          <p className="text-[12px] text-secondary-text font-mono mt-0.5">Digital Sinta — CC-WORK-2026-0148</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-border rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="p-6 overflow-y-auto space-y-6">
        <div>
          <label className="block text-[13px] font-bold text-secondary-text uppercase mb-3 tracking-wide">Issue Categories</label>
          <div className="flex flex-wrap gap-2">
            {chips.map(chip => (
              <button
                key={chip}
                onClick={() => toggleChip(chip)}
                className={`px-3 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${
                  selectedChips.includes(chip) 
                    ? 'bg-soft-gold border-warm-gold text-warm-gold' 
                    : 'bg-white border-border text-primary-text hover:border-pup-maroon'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Feedback sent to student</label>
            <textarea 
              className="w-full h-24 p-4 bg-secondary-surface border border-border rounded-xl text-[14px] outline-none focus:border-pup-maroon focus:ring-1 focus:ring-pup-maroon"
              defaultValue="Please add alt text to all images and clarify whether the reference photographs were taken by you. The third image should also be replaced with a higher-resolution version."
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Required changes</label>
            <textarea 
              className="w-full h-20 p-4 bg-secondary-surface border border-border rounded-xl text-[14px] outline-none"
              defaultValue="• Complete alt text for all images&#10;• Provide proof of original photography&#10;• Upload high-res version of image 3"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Optional suggestions (Optional)</label>
            <textarea 
              className="w-full h-20 p-4 bg-secondary-surface border border-border rounded-xl text-[14px] outline-none"
              placeholder="E.g., Try adjusting the brightness of the background..."
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-soft-maroon/30 rounded-xl border border-soft-maroon">
          <div className="flex items-center gap-3">
            <Calendar size={18} className="text-pup-maroon" />
            <div className="text-left">
              <div className="text-[13px] font-bold text-pup-maroon">Revision Deadline</div>
              <div className="text-[12px] text-secondary-text">Student has until this date to resubmit</div>
            </div>
          </div>
          <input 
            type="date" 
            defaultValue="2026-07-01"
            className="bg-white border border-border rounded-lg p-2 text-[13px] font-medium outline-none"
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-6 bg-pup-maroon rounded-full relative p-1 cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
            <span className="text-[14px] font-medium">Allow resubmission</span>
          </div>
          <p className="text-[12px] text-muted-text max-w-[200px] text-right">Use clear, actionable language. Avoid accusatory wording.</p>
        </div>
      </div>

      <div className="p-5 border-t border-border flex gap-3 bg-main-bg/50">
        <button onClick={onClose} className="px-6 py-2.5 border border-border rounded-xl font-bold text-secondary-text hover:bg-white transition-colors">Cancel</button>
        <button className="px-6 py-2.5 border border-border rounded-xl font-bold text-secondary-text hover:bg-white transition-colors">Save Draft</button>
        <button 
          onClick={() => setSent(true)}
          className="flex-1 py-2.5 bg-status-needs-revision text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
        >
          Send Revision Request
        </button>
      </div>
    </div>
  );
}

// 2. Reject Submission Modal
export function RejectSubmissionModal({ onClose }: ModalProps) {
  const [step, setStep] = useState<'form' | 'confirm' | 'success'>('form');
  const [reason, setReason] = useState('Clear copyright violation');

  const reasons = [
    'Clear copyright violation',
    'Stolen or unauthorized work',
    'Inappropriate content',
    'Does not meet event requirements',
    'Repeated unresolved guideline issue',
    'Misleading information',
    'Other'
  ];

  if (step === 'success') {
    return (
      <div className="w-[480px] bg-card-bg rounded-2xl shadow-xl border border-border overflow-hidden">
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-status-rejected/10 text-status-rejected rounded-full flex items-center justify-center mb-4">
            <XCircle size={32} />
          </div>
          <h3 className="text-[20px] font-bold mb-2">Submission Rejected</h3>
          <p className="text-secondary-text text-[15px] mb-6">The student has been notified. This action has been logged in the moderation history.</p>
          <button 
            onClick={onClose}
            className="w-full py-3 bg-pup-maroon text-white font-bold rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
      <div className="w-[480px] bg-card-bg rounded-2xl shadow-xl border-4 border-status-rejected/20 overflow-hidden">
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-status-rejected/10 text-status-rejected rounded-full flex items-center justify-center mb-4">
            <ShieldAlert size={32} />
          </div>
          <h3 className="text-[20px] font-bold mb-2">Reject "Digital Sinta"?</h3>
          <div className="bg-main-bg p-4 rounded-xl w-full text-left mb-6 border border-border">
            <div className="text-[12px] text-secondary-text uppercase font-bold mb-1">Reason for Rejection</div>
            <div className="text-[14px] font-semibold">{reason}</div>
          </div>
          <div className="flex gap-3 w-full">
            <button 
              onClick={() => setStep('form')}
              className="flex-1 py-3 border border-border rounded-xl font-bold text-secondary-text"
            >
              Cancel
            </button>
            <button 
              onClick={() => setStep('success')}
              className="flex-1 py-3 bg-status-rejected text-white font-bold rounded-xl"
            >
              Reject Submission
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[480px] bg-card-bg rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col max-h-[90vh]">
      <div className="p-5 border-b border-border flex items-center justify-between bg-status-rejected/5">
        <div>
          <h2 className="text-[18px] font-bold text-status-rejected flex items-center gap-2">
            Reject submission
          </h2>
          <p className="text-[12px] text-secondary-text font-mono mt-0.5">CC-WORK-2026-0148</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-border rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="p-6 overflow-y-auto space-y-6">
        <div className="p-4 bg-red-50 border-l-4 border-status-rejected rounded-r-xl flex items-start gap-3">
          <AlertTriangle size={20} className="text-status-rejected shrink-0" />
          <p className="text-[13px] text-status-rejected leading-tight">
            <strong>Warning:</strong> Rejection should be used only when revision is not appropriate. This action is significant and will be notified to the student.
          </p>
        </div>

        <div className="space-y-3">
          <label className="block text-[13px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Reason (Required)</label>
          {reasons.map(r => (
            <label key={r} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-main-bg transition-colors cursor-pointer">
              <input 
                type="radio" 
                name="reject-reason" 
                checked={reason === r} 
                onChange={() => setReason(r)}
                className="w-4 h-4 accent-pup-maroon" 
              />
              <span className="text-[14px] font-medium">{r}</span>
            </label>
          ))}
          {reason === 'Other' && (
            <textarea 
              className="w-full h-20 p-4 bg-secondary-surface border border-border rounded-xl text-[14px] outline-none"
              placeholder="Specify other reason..."
            />
          )}
        </div>

        <div>
          <label className="block text-[13px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Required explanation</label>
          <textarea className="w-full h-24 p-4 bg-secondary-surface border border-border rounded-xl text-[14px] outline-none" placeholder="Explain why this work cannot be accepted even with revisions..." />
        </div>

        <div>
          <label className="block text-[13px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Internal moderator note</label>
          <textarea className="w-full h-20 p-4 bg-secondary-surface border border-border rounded-xl text-[14px] outline-none" placeholder="Internal only — not visible to student" />
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-medium">Allow new submission</span>
            <div className="w-10 h-6 bg-pup-maroon rounded-full relative p-1 cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </div>
          <div className="flex items-center justify-between text-secondary-text">
            <span className="text-[14px] font-medium">Escalate to senior moderator</span>
            <div className="w-10 h-6 bg-border rounded-full relative p-1 cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-border flex gap-3 bg-main-bg/50">
        <button onClick={onClose} className="flex-1 py-3 border border-border rounded-xl font-bold text-secondary-text">Cancel</button>
        <button 
          onClick={() => setStep('confirm')}
          className="flex-1 py-3 bg-status-rejected text-white font-bold rounded-xl"
        >
          Reject Submission
        </button>
      </div>
    </div>
  );
}

// 3. Approval Modal
export function ApprovalModal({ onClose }: ModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [nominate, setNominate] = useState(false);

  if (step === 'success') {
    return (
      <div className="w-[480px] bg-card-bg rounded-2xl shadow-xl border border-border overflow-hidden">
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-status-approved/10 text-status-approved rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-[20px] font-bold mb-2">Work Approved</h3>
          <p className="text-secondary-text text-[15px] mb-6">"Digital Sinta" is now live on the platform and visible to the public.</p>
          <button 
            onClick={onClose}
            className="w-full py-3 bg-pup-maroon text-white font-bold rounded-xl"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[480px] bg-card-bg rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col max-h-[90vh]">
      <div className="p-5 border-b border-border flex items-center justify-between bg-status-approved/5">
        <h2 className="text-[18px] font-bold text-status-approved flex items-center gap-2">
          Approve this work?
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-border rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="p-6 overflow-y-auto space-y-6">
        <div className="flex gap-4 p-3 bg-main-bg rounded-2xl border border-border">
          <img src="/__mockup/images/thumbnail_1.jpg" className="w-20 h-20 rounded-lg object-cover" />
          <div className="flex flex-col justify-center">
            <h4 className="text-[16px] font-bold">Digital Sinta</h4>
            <p className="text-[13px] text-secondary-text">Rafael Mendoza</p>
            <p className="text-[12px] text-pup-maroon font-medium uppercase mt-1 tracking-wider">Digital Art / CCIS</p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-[13px] font-bold text-secondary-text uppercase tracking-wide">Approval Options</label>
          <div className="space-y-3">
            {[
              { label: 'Approve for public display', checked: true },
              { label: 'Add to creator portfolio', checked: true },
              { label: 'Include in Explore', checked: true },
              { label: 'Include in college showcase', checked: false },
            ].map((opt, i) => (
              <label key={i} className="flex items-center justify-between p-3 rounded-xl border border-border hover:bg-main-bg transition-colors cursor-pointer">
                <span className="text-[14px] font-medium">{opt.label}</span>
                <div className={`w-10 h-6 ${opt.checked ? 'bg-pup-maroon' : 'bg-border'} rounded-full relative p-1 transition-colors`}>
                  <div className={`absolute ${opt.checked ? 'right-1' : 'left-1'} top-1 w-4 h-4 bg-white rounded-full shadow-sm`} />
                </div>
              </label>
            ))}
            
            <label className="flex items-center justify-between p-3 rounded-xl border border-border hover:bg-main-bg transition-colors cursor-pointer">
              <span className="text-[14px] font-medium">Nominate for feature</span>
              <div 
                onClick={(e) => { e.preventDefault(); setNominate(!nominate); }}
                className={`w-10 h-6 ${nominate ? 'bg-pup-gold' : 'bg-border'} rounded-full relative p-1 transition-colors`}
              >
                <div className={`absolute ${nominate ? 'right-1' : 'left-1'} top-1 w-4 h-4 bg-white rounded-full shadow-sm`} />
              </div>
            </label>
          </div>
        </div>

        {nominate && (
          <div className="p-4 bg-soft-gold/30 border border-pup-gold rounded-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div>
              <label className="block text-[12px] font-bold text-warm-gold uppercase mb-2">Feature Type</label>
              <select className="w-full p-2.5 bg-white border border-pup-gold/50 rounded-lg text-[14px] outline-none">
                <option>Work of the Week</option>
                <option>Creator Spotlight</option>
                <option>College Highlight</option>
                <option>Event Finalist</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] font-bold text-warm-gold uppercase mb-2">Recognition Badge</label>
                <input type="text" defaultValue="PUP Likha Top Pick" className="w-full p-2 bg-white border border-pup-gold/50 rounded-lg text-[13px]" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-warm-gold uppercase mb-2">Duration</label>
                <select className="w-full p-2 bg-white border border-pup-gold/50 rounded-lg text-[13px]">
                  <option>7 Days</option>
                  <option>14 Days</option>
                  <option>End of Month</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <span className="px-3 py-1 bg-main-bg border border-border rounded-full text-[11px] font-bold text-secondary-text">Public Portfolio</span>
          <span className="px-3 py-1 bg-soft-maroon border border-pup-maroon rounded-full text-[11px] font-bold text-pup-maroon">PUP Likha 2026</span>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-secondary-text uppercase mb-2 tracking-wide">Internal note (Optional)</label>
          <textarea className="w-full h-20 p-4 bg-secondary-surface border border-border rounded-xl text-[14px] outline-none" placeholder="Reason for approval or feature nomination..." />
        </div>
      </div>

      <div className="p-5 border-t border-border flex gap-3 bg-main-bg/50">
        <button onClick={onClose} className="flex-1 py-3 border border-border rounded-xl font-bold text-secondary-text">Cancel</button>
        <button 
          onClick={() => setStep('success')}
          className="flex-1 py-3 bg-pup-maroon text-white font-bold rounded-xl shadow-lg shadow-pup-maroon/20"
        >
          Approve Work
        </button>
      </div>
    </div>
  );
}

// Demo Page Export
export default function ModerationModals() {
  const [activeModal, setActiveModal] = useState<'revision' | 'reject' | 'approve' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-main-bg p-12 font-inter">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-[32px] font-bold mb-8">Moderation Modals Demo</h1>
        
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-card-bg p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center">
            <RefreshCw size={40} className="text-status-needs-revision mb-4" />
            <h3 className="text-[18px] font-bold mb-2">Request Revision</h3>
            <p className="text-secondary-text text-[14px] mb-6">Ask student to make specific changes to their work before approval.</p>
            <button 
              onClick={() => setActiveModal('revision')}
              className="px-6 py-2.5 bg-status-needs-revision text-white font-bold rounded-xl w-full"
            >
              Open Modal
            </button>
          </div>

          <div className="bg-card-bg p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center">
            <XCircle size={40} className="text-status-rejected mb-4" />
            <h3 className="text-[18px] font-bold mb-2">Reject Submission</h3>
            <p className="text-secondary-text text-[14px] mb-6">Formally reject work that violates guidelines or cannot be fixed.</p>
            <button 
              onClick={() => setActiveModal('reject')}
              className="px-6 py-2.5 bg-status-rejected text-white font-bold rounded-xl w-full"
            >
              Open Modal
            </button>
          </div>

          <div className="bg-card-bg p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center">
            <CheckCircle2 size={40} className="text-status-approved mb-4" />
            <h3 className="text-[18px] font-bold mb-2">Approve Work</h3>
            <p className="text-secondary-text text-[14px] mb-6">Publish work to the platform and optionally feature it.</p>
            <button 
              onClick={() => setActiveModal('approve')}
              className="px-6 py-2.5 bg-pup-maroon text-white font-bold rounded-xl w-full"
            >
              Open Modal
            </button>
          </div>
        </div>

        {/* Modal Overlay Render */}
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm" onClick={closeModal} />
            <div className="relative z-10 animate-in fade-in zoom-in-95 duration-200">
              {activeModal === 'revision' && <RequestRevisionModal onClose={closeModal} />}
              {activeModal === 'reject' && <RejectSubmissionModal onClose={closeModal} />}
              {activeModal === 'approve' && <ApprovalModal onClose={closeModal} />}
            </div>
          </div>
        )}

        <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-border flex flex-col items-center gap-4">
          <Info size={24} className="text-secondary-text" />
          <p className="text-secondary-text text-center italic">
            This demo page showcases the three main moderation actions. In a real flow, these would be triggered from the Review Page.
          </p>
        </div>
      </div>
    </div>
  );
}
