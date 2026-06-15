import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  Upload, 
  Image as ImageIcon,
  ShieldCheck,
  ChevronUp,
  ChevronDown,
  Trash2,
  FileText,
  Eye,
  ArrowRight
} from 'lucide-react';
import './_group.css';

interface ReviseSubmissionPageProps {
  onBack?: () => void;
  onDone?: () => void;
}

export function ReviseSubmissionPage({ onBack, onDone }: ReviseSubmissionPageProps = {}) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(true);
  const [issuesResolved, setIssuesResolved] = useState({
    media: false,
    altText: false,
    ownership: true
  });
  const [showResubmitModal, setShowResubmitModal] = useState(false);

  const resolvedCount = Object.values(issuesResolved).filter(Boolean).length;
  const totalIssues = 3;

  const toggleIssue = (key: keyof typeof issuesResolved) => {
    setIssuesResolved(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter pb-20">
      <DesktopNav authenticated={true} active="Gallery" />
      
      <main className="max-w-[1200px] mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-secondary-text mb-6">
          <button onClick={onDone} className="hover:text-pup-maroon transition-colors">My Submissions</button>
          <ChevronRight size={14} />
          <button onClick={onBack} className="hover:text-pup-maroon transition-colors">Railway Sketches</button>
          <ChevronRight size={14} />
          <span className="font-medium text-primary-text">Revise</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Revise Your Submission</h1>
            <p className="text-secondary-text">Address the issues flagged by the moderator to resubmit your work.</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-status-pending/10 border border-status-pending/20 rounded-full">
            <span className="text-xs font-bold text-status-pending uppercase tracking-tight">Issues Remaining:</span>
            <span className="px-2 py-0.5 bg-status-pending text-white text-xs font-bold rounded-full">
              {totalIssues - resolvedCount} of {totalIssues}
            </span>
          </div>
        </div>

        {/* Sticky Feedback Accordion */}
        <div className="sticky top-24 z-40 mb-10">
          <div className={`bg-white border-2 border-status-pending rounded-2xl shadow-lg overflow-hidden transition-all duration-300`}>
            <button 
              onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
              className="w-full p-4 flex items-center justify-between bg-status-pending/5 hover:bg-status-pending/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle size={20} className="text-status-pending" />
                <span className="font-bold text-status-pending">Moderator Feedback Summary</span>
                <span className="text-xs bg-white border border-status-pending/20 px-2 py-0.5 rounded text-status-pending">4 issues to address</span>
              </div>
              {isFeedbackOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isFeedbackOpen && (
              <div className="p-6 border-t border-status-pending/20">
                <p className="text-sm text-secondary-text leading-relaxed italic">
                  "Please provide clearer ownership details for the reference photographs and add alt text to all uploaded images. The third image also needs a higher-resolution replacement."
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-12">
          {/* MEDIA SECTION */}
          <section className="bg-white rounded-2xl border-l-4 border-l-status-pending border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border bg-secondary-surface/10 flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <ImageIcon size={20} className="text-status-pending" />
                MEDIA SECTION
              </h2>
              {issuesResolved.media && issuesResolved.altText && (
                <span className="flex items-center gap-1.5 text-status-approved text-xs font-bold bg-status-approved/10 px-2.5 py-1 rounded-full border border-status-approved/20">
                  <CheckCircle2 size={14} /> Section Resolved
                </span>
              )}
            </div>
            
            <div className="p-8 space-y-10">
              {/* Replacement Issue */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-status-pending/10 text-status-pending flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-text mb-1">Issue: Replace the third image</h3>
                    <p className="text-sm text-secondary-text">Current version is low resolution. Please upload a high-quality replacement.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pl-12">
                  <div className="p-4 rounded-xl border border-border bg-secondary-surface/30">
                    <p className="text-xs font-bold text-muted-text mb-3 uppercase tracking-wider">Original (Low Res)</p>
                    <div className="aspect-square w-32 rounded-lg bg-border flex items-center justify-center text-muted-text">
                      <ImageIcon size={32} />
                    </div>
                    <p className="text-[10px] mt-2 text-muted-text font-mono">railway-sketches-03.jpg (45KB)</p>
                  </div>
                  <div className="p-4 rounded-xl border-2 border-dashed border-status-pending bg-status-pending/5 flex flex-col items-center justify-center text-center">
                    <Upload size={32} className="text-status-pending mb-3" />
                    <p className="text-sm font-bold text-status-pending mb-1">Upload New Image</p>
                    <p className="text-xs text-secondary-text mb-4">High res PNG or JPG (min 2000px)</p>
                    <button className="px-4 py-2 bg-white border border-status-pending text-status-pending text-xs font-bold rounded-lg hover:bg-white/80 transition-colors">
                      Browse Files
                    </button>
                  </div>
                </div>

                <div className="mt-6 ml-12 flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div 
                      onClick={() => toggleIssue('media')}
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${issuesResolved.media ? 'bg-status-approved border-status-approved' : 'border-border group-hover:border-status-pending'}`}
                    >
                      {issuesResolved.media && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className={`text-sm font-bold ${issuesResolved.media ? 'text-status-approved' : 'text-secondary-text'}`}>
                      Mark as resolved
                    </span>
                  </label>
                </div>
              </div>

              {/* Alt Text Issue */}
              <div className="pt-10 border-t border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-status-pending/10 text-status-pending flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-text mb-1">Issue: Add alt text to images</h3>
                    <p className="text-sm text-secondary-text">Screen readers need descriptive alt text for each image in the series.</p>
                  </div>
                </div>

                <div className="space-y-4 ml-12">
                  {[
                    { id: 1, img: "/__mockup/images/thumbnail_1.jpg", text: "A detailed pencil sketch of an elderly man waiting for the train.", status: 'resolved' },
                    { id: 2, img: "/__mockup/images/thumbnail_2.jpg", text: "Close-up of a commuter's hands clutching a train ticket.", status: 'resolved' },
                    { id: 3, img: null, text: "", status: 'pending' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-warm-white border border-border items-center">
                      <div className="w-16 h-16 rounded-lg bg-secondary-surface overflow-hidden shrink-0 border border-border">
                         {item.img ? <img src={item.img} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-muted-text"><ImageIcon size={20} /></div>}
                      </div>
                      <div className="flex-1">
                        <label className="text-[10px] font-bold text-muted-text uppercase mb-1 block">Alt Text for Image {item.id}</label>
                        <input 
                          type="text"
                          defaultValue={item.text}
                          placeholder="Describe the image content..."
                          className={`w-full bg-white border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${item.status === 'resolved' ? 'border-status-approved/30 focus:ring-status-approved/20' : 'border-status-pending/30 focus:ring-status-pending/20'}`}
                        />
                      </div>
                      {item.status === 'resolved' ? (
                        <CheckCircle2 className="text-status-approved shrink-0" size={20} />
                      ) : (
                        <AlertTriangle className="text-status-pending shrink-0" size={20} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 ml-12 flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div 
                      onClick={() => toggleIssue('altText')}
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${issuesResolved.altText ? 'bg-status-approved border-status-approved' : 'border-border group-hover:border-status-pending'}`}
                    >
                      {issuesResolved.altText && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className={`text-sm font-bold ${issuesResolved.altText ? 'text-status-approved' : 'text-secondary-text'}`}>
                      All alt text added
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* OWNERSHIP SECTION */}
          <section className="bg-white rounded-2xl border-l-4 border-l-status-pending border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border bg-secondary-surface/10 flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <ShieldCheck size={20} className="text-status-pending" />
                OWNERSHIP SECTION
              </h2>
              {issuesResolved.ownership && (
                <span className="flex items-center gap-1.5 text-status-approved text-xs font-bold bg-status-approved/10 px-2.5 py-1 rounded-full border border-status-approved/20">
                  <CheckCircle2 size={14} /> Resolved
                </span>
              )}
            </div>
            
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-status-pending/10 text-status-pending flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary-text mb-1">Issue: Clarify ownership of reference photos</h3>
                  <p className="text-sm text-secondary-text">Please specify if the reference photographs used were taken by you or sourced elsewhere.</p>
                </div>
              </div>

              <div className="ml-12">
                <textarea 
                  rows={4}
                  className="w-full bg-warm-white border border-border rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 leading-relaxed"
                  defaultValue="All reference photographs used for these sketches were taken by me at the Sta. Mesa PNR station during January and February 2026. No external stock images or works by other artists were used in the creation of these pieces."
                ></textarea>
                
                <div className="mt-6 flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div 
                      onClick={() => toggleIssue('ownership')}
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${issuesResolved.ownership ? 'bg-status-approved border-status-approved' : 'border-border group-hover:border-status-pending'}`}
                    >
                      {issuesResolved.ownership && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className={`text-sm font-bold ${issuesResolved.ownership ? 'text-status-approved' : 'text-secondary-text'}`}>
                      Clarification provided
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* OTHER SECTIONS (NORMAL) */}
          <section className="bg-white rounded-2xl border border-border shadow-sm opacity-60">
            <div className="p-6 border-b border-border bg-secondary-surface/10">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <FileText size={20} className="text-muted-text" />
                DESCRIPTION & DETAILS
              </h2>
            </div>
            <div className="p-8">
               <div className="max-w-[800px] space-y-6">
                  <div>
                    <label className="text-xs font-bold text-muted-text uppercase mb-2 block">Artist Statement</label>
                    <div className="p-4 rounded-xl border border-border bg-secondary-surface/20 text-sm text-secondary-text">
                       The PNR Sta. Mesa station is a melting pot of stories. Through these traditional sketches, I wanted to capture the fleeting moments of patience...
                    </div>
                  </div>
               </div>
            </div>
          </section>

          {/* Actions Bar */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
             <div className="flex items-center gap-4">
               <button className="px-6 py-3 border-2 border-border text-primary-text font-bold rounded-xl hover:bg-secondary-surface transition-colors">
                  Save Progress
               </button>
               <button className="px-6 py-3 border-2 border-border text-primary-text font-bold rounded-xl hover:bg-secondary-surface transition-colors flex items-center gap-2">
                  <Eye size={18} />
                  Preview Changes
               </button>
             </div>
             
             <div className="flex items-center gap-6">
               <p className="text-sm text-secondary-text">
                 {resolvedCount} of {totalIssues} issues resolved
               </p>
               <button 
                 onClick={() => setShowResubmitModal(true)}
                 disabled={resolvedCount < totalIssues}
                 className={`px-10 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 ${resolvedCount === totalIssues ? 'bg-pup-maroon text-white hover:bg-deep-maroon' : 'bg-secondary-surface text-muted-text cursor-not-allowed'}`}
               >
                 Resubmit for Review
                 <ArrowRight size={18} />
               </button>
             </div>
          </div>
        </div>
      </main>

      {/* Resubmit Modal */}
      {showResubmitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm"
            onClick={() => setShowResubmitModal(false)}
          ></div>
          <div className="bg-white w-full max-w-[480px] rounded-2xl border border-border shadow-2xl relative z-10 overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-status-approved/10 text-status-approved flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-text">Resubmit revised work?</h3>
              <p className="text-secondary-text mb-8 leading-relaxed">
                All flagged issues have been addressed. Your revised submission will return to <span className="text-status-pending font-bold italic">Pending Review</span> for a moderator to verify the changes.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowResubmitModal(false)}
                  className="flex-1 py-3.5 px-4 rounded-xl border border-border font-bold text-primary-text hover:bg-secondary-surface transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setShowResubmitModal(false);
                    onDone?.();
                  }}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-pup-maroon text-white font-bold hover:bg-deep-maroon transition-colors shadow-sm"
                >
                  Resubmit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
