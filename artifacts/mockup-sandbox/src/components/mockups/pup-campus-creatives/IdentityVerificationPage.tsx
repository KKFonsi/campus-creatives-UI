import React, { useState } from 'react';
import { FileCheck2, IdCard, ShieldCheck, Upload } from 'lucide-react';
import './_group.css';

interface IdentityVerificationPageProps {
  onBack?: () => void;
  onContinue?: () => void;
}

type ProofType = 'student-id' | 'cor';

export function IdentityVerificationPage({ onBack, onContinue }: IdentityVerificationPageProps = {}) {
  const [proofType, setProofType] = useState<ProofType | null>(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!proofType) {
      setError('Select a proof type to continue.');
      return;
    }

    if (!fileName) {
      setError('Attach a PUP identity document to continue.');
      return;
    }

    setError('');
    onContinue?.();
  }

  return (
    <div className="min-h-screen bg-main-bg py-12 px-4 font-inter">
      <form onSubmit={handleSubmit} className="max-w-[620px] mx-auto bg-card-bg border border-border rounded-[20px] shadow-sm overflow-hidden">
        <div className="p-8 md:p-10 border-b border-border text-center">
          <div className="flex items-center justify-center gap-2 text-pup-maroon text-xl tracking-tight mb-6">
            <span className="font-bold font-inter">PUP:</span>
            <span className="font-medium font-inter">Campus Creatives</span>
          </div>
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-soft-maroon text-pup-maroon flex items-center justify-center">
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-[28px] font-bold text-primary-text mb-2 tracking-tight">Verify Your PUP Identity</h1>
          <p className="text-[15px] text-secondary-text">Upload one proof document for this mock academic prototype flow.</p>
        </div>

        <div className="p-8 md:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: 'student-id' as const, title: 'PUP Student ID', icon: <IdCard size={24} /> },
              { id: 'cor' as const, title: 'Certificate of Registration (COR)', icon: <FileCheck2 size={24} /> },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setProofType(option.id);
                  setError('');
                }}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  proofType === option.id
                    ? 'border-pup-maroon bg-soft-maroon text-pup-maroon'
                    : 'border-border bg-main-bg text-primary-text hover:border-pup-maroon'
                }`}
              >
                <div className="mb-4">{option.icon}</div>
                <div className="font-bold">{option.title}</div>
                <div className="text-xs text-secondary-text mt-1">Used only for classroom prototype verification.</div>
              </button>
            ))}
          </div>

          <label className="block border-2 border-dashed border-border rounded-2xl p-8 text-center bg-main-bg hover:border-pup-maroon transition-colors cursor-pointer">
            <Upload size={28} className="mx-auto mb-3 text-pup-maroon" />
            <span className="block font-bold text-primary-text">{fileName || 'Upload proof document'}</span>
            <span className="block text-xs text-secondary-text mt-2">PDF, JPG, or PNG up to 10 MB. Mock upload only.</span>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="sr-only"
              onChange={(event) => {
                setFileName(event.currentTarget.files?.[0]?.name ?? '');
                setError('');
              }}
            />
          </label>

          <div className="rounded-xl bg-soft-gold border border-pup-gold/30 p-4 text-[13px] text-primary-text">
            Your document is not sent anywhere in this prototype. It only unlocks the next mock onboarding step.
          </div>

          {error && <p className="text-sm font-semibold text-status-rejected">{error}</p>}

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={onBack} className="flex-1 py-3 border border-border rounded-xl font-bold hover:border-pup-maroon hover:text-pup-maroon">
              Back
            </button>
            <button type="submit" className="flex-1 py-3 bg-pup-maroon text-white rounded-xl font-bold hover:bg-deep-maroon">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
