import React, { useEffect, useState } from 'react';
import { X, AlertTriangle, ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import './_group.css';

const reportReasons = [
  'Suspected stolen work',
  'Copyright concern',
  'Inappropriate content',
  'Harassment',
  'Misleading information',
  'Spam',
  'Other'
];

interface ReportModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmitted?: () => void;
}

export function ReportModal({ isOpen = true, onClose, onSubmitted }: ReportModalProps = {}) {
  const [selectedReason, setSelectedReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] flex items-center justify-center p-6">
        <div className="w-full max-w-[480px] bg-card-bg rounded-[32px] p-10 shadow-2xl text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-black mb-2">Report Submitted</h2>
          <p className="text-secondary-text mb-8">Thank you for helping keep our campus creative community safe. Our moderators will review this report shortly.</p>
          <button 
            onClick={() => {
              setSubmitted(false);
              onSubmitted?.();
              onClose?.();
            }}
            className="w-full h-14 bg-pup-maroon text-white rounded-2xl font-bold hover:bg-deep-maroon transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] flex items-center justify-center p-6" onClick={onClose}>
      <div className="w-full max-w-[480px] bg-card-bg rounded-[32px] overflow-hidden shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="p-8 border-b border-border flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
              <AlertTriangle size={24} className="text-red-500" /> Report Content
            </h2>
            <p className="text-secondary-text text-sm">Help us maintain community standards.</p>
          </div>
          <button onClick={onClose} aria-label="Close report modal" className="w-10 h-10 rounded-full hover:bg-secondary-surface flex items-center justify-center">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 p-3 bg-secondary-surface rounded-xl mb-6 text-[13px] text-secondary-text border border-border">
            <Info size={18} className="text-pup-maroon shrink-0" />
            Reports are reviewed by Campus Creatives moderators. Misuse of reporting may result in account restrictions.
          </div>

          <h3 className="text-xs font-black uppercase tracking-widest text-muted-text mb-4">Reason for reporting</h3>
          <div className="space-y-3 mb-8">
            {reportReasons.map(reason => (
              <label key={reason} className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${selectedReason === reason ? 'border-pup-maroon bg-soft-maroon ring-1 ring-pup-maroon' : 'border-border bg-white hover:border-pup-maroon'}`}>
                <input 
                  type="radio" 
                  name="reportReason" 
                  className="w-5 h-5 accent-pup-maroon"
                  checked={selectedReason === reason}
                  onChange={() => setSelectedReason(reason)}
                />
                <span className="text-[15px] font-bold">{reason}</span>
              </label>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-black uppercase tracking-widest text-muted-text mb-4">Additional Details (Optional)</h3>
            <textarea 
              placeholder="Provide more context for the moderators..." 
              className="w-full h-32 bg-secondary-surface border-none rounded-2xl p-4 text-[14px] focus:ring-2 focus:ring-pup-maroon/20 focus:outline-none resize-none"
            />
          </div>

          <div className="flex gap-4">
            <button onClick={onClose} className="flex-1 h-14 bg-secondary-surface text-primary-text rounded-2xl font-bold hover:bg-border transition-colors">
              Cancel
            </button>
            <button 
              onClick={() => selectedReason && setSubmitted(true)}
              disabled={!selectedReason}
              className={`flex-[2] h-14 rounded-2xl font-bold transition-colors ${selectedReason ? 'bg-pup-maroon text-white hover:bg-deep-maroon' : 'bg-border text-muted-text cursor-not-allowed'}`}
            >
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReportModalMobile({ isOpen = true, onClose, onSubmitted }: ReportModalProps = {}) {
  const [selectedReason, setSelectedReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[110] flex items-end" onClick={onClose}>
      <div className="w-full bg-white rounded-t-[32px] overflow-hidden" onClick={(event) => event.stopPropagation()}>
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto my-4"></div>
        
        <div className="px-6 pb-10">
          {!submitted ? (
            <>
              <h2 className="text-xl font-black mb-1">Report Content</h2>
              <p className="text-[13px] text-secondary-text mb-6">What's wrong with this content?</p>
              
              <div className="space-y-2 mb-6">
                {reportReasons.map(reason => (
                  <button 
                    key={reason}
                    onClick={() => setSelectedReason(reason)}
                    className={`w-full text-left p-4 rounded-xl border flex items-center justify-between font-bold text-[14px] ${selectedReason === reason ? 'border-pup-maroon bg-soft-maroon text-pup-maroon' : 'border-border'}`}
                  >
                    {reason}
                    {selectedReason === reason && <CheckCircle2 size={18} />}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={onClose} className="flex-1 h-14 bg-secondary-surface rounded-2xl font-bold">Cancel</button>
                <button 
                  onClick={() => selectedReason && setSubmitted(true)}
                  disabled={!selectedReason}
                  className={`flex-[2] h-14 rounded-2xl font-bold ${selectedReason ? 'bg-pup-maroon text-white' : 'bg-border text-muted-text'}`}
                >
                  Submit
                </button>
              </div>
            </>
          ) : (
            <div className="py-10 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-xl font-black mb-2">Report Submitted</h2>
              <p className="text-[13px] text-secondary-text mb-8 px-4">Thank you for reporting. Our moderators will review this shortly.</p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  onSubmitted?.();
                  onClose?.();
                }}
                className="w-full h-14 bg-pup-maroon text-white rounded-2xl font-bold"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
