import React, { useState } from 'react';
import { ArrowLeft, X, Upload, Video, Image as ImageIcon, AlertCircle, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import './_group.css';

interface SubmitWorkPageMobileProps {
  onSubmitted?: () => void;
}

export default function SubmitWorkPageMobile({ onSubmitted }: SubmitWorkPageMobileProps = {}) {
  const [step, setStep] = useState(2); // Starting at Step 2 as per details "Step 2 of 5"
  const [showConfirm, setShowConfirm] = useState(false);

  const steps = [
    "Basic Info",
    "Media",
    "Classification",
    "Ownership",
    "Review"
  ];

  const progress = (step / steps.length) * 100;

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Work Title</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Digital Sinta"
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon transition-all"
                  maxLength={80}
                />
                <span className="absolute right-3 bottom-3 text-[10px] text-muted-text">13/80</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Short Description</label>
              <div className="relative">
                <textarea 
                  defaultValue="A multimedia poster series inspired by student life, commuter culture, and PUP campus identity."
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon transition-all h-24 resize-none"
                  maxLength={200}
                />
                <span className="absolute right-3 bottom-3 text-[10px] text-muted-text">105/200</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Full Artist Statement</label>
              <div className="relative">
                <textarea 
                  placeholder="Tell the story behind your work..."
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon transition-all h-40 resize-none"
                  maxLength={1000}
                />
                <span className="absolute right-3 bottom-3 text-[10px] text-muted-text">0/1000</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Content Type</label>
              <select className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon transition-all appearance-none">
                <option>Artwork</option>
                <option>Photography</option>
                <option>Music/Audio</option>
                <option>Film/Video</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Primary Category</label>
              <select className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon transition-all appearance-none">
                <option>Digital Art</option>
                <option>Traditional Art</option>
                <option>Graphic Design</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <button className="w-full aspect-video border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-3 bg-white active:bg-soft-maroon transition-colors group">
              <div className="w-12 h-12 rounded-full bg-soft-maroon flex items-center justify-center text-pup-maroon group-active:scale-95 transition-transform">
                <Upload size={24} />
              </div>
              <div className="text-center">
                <p className="font-semibold text-primary-text">Tap to upload media</p>
                <p className="text-xs text-muted-text mt-1 px-8">Drag files here or Browse (Images, Video, Audio)</p>
              </div>
            </button>

            <div className="flex items-start gap-3 p-4 bg-soft-maroon/30 rounded-xl">
              <AlertCircle size={18} className="text-pup-maroon shrink-0 mt-0.5" />
              <p className="text-xs text-secondary-text leading-relaxed">
                <span className="font-bold text-pup-maroon">Copyright Note:</span> Upload only media you created or have permission to use.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-primary-text">Uploaded Files (4)</h3>
              
              {/* File 1 - Cover */}
              <div className="bg-white border border-border rounded-xl p-3 flex gap-3 relative">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary-surface shrink-0">
                  <img src="/__mockup/images/thumbnail_1.jpg" alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 py-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold bg-pup-gold text-pup-maroon px-1.5 py-0.5 rounded uppercase tracking-wider">★ Cover</span>
                    <p className="text-xs font-semibold text-primary-text truncate">digital-sinta-cover.webp</p>
                  </div>
                  <p className="text-[10px] text-muted-text mb-2">2.4MB • image/webp</p>
                  <input type="text" placeholder="Add alt text..." defaultValue="Student life illustration" className="w-full text-[11px] px-2 py-1.5 bg-warm-white border border-border rounded-md focus:outline-none focus:border-pup-maroon" />
                </div>
                <button className="absolute top-2 right-2 p-1 text-muted-text hover:text-pup-maroon">
                  <X size={16} />
                </button>
              </div>

              {/* File 2 */}
              <div className="bg-white border border-border rounded-xl p-3 flex gap-3 relative">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary-surface shrink-0">
                  <img src="/__mockup/images/thumbnail_2.jpg" alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 py-0.5">
                  <p className="text-xs font-semibold text-primary-text truncate mb-1">digital-sinta-process-01.webp</p>
                  <p className="text-[10px] text-muted-text mb-2">1.8MB • image/webp</p>
                  <input type="text" placeholder="Add alt text..." defaultValue="Initial sketches" className="w-full text-[11px] px-2 py-1.5 bg-warm-white border border-border rounded-md focus:outline-none focus:border-pup-maroon" />
                </div>
                <button className="absolute top-2 right-2 p-1 text-muted-text hover:text-pup-maroon">
                  <X size={16} />
                </button>
              </div>

              {/* File 3 - Error example */}
              <div className="bg-white border-2 border-status-needs-revision/30 rounded-xl p-3 flex gap-3 relative">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary-surface shrink-0 relative">
                  <img src="/__mockup/images/thumbnail_3.jpg" alt="Preview" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AlertCircle size={20} className="text-status-needs-revision" />
                  </div>
                </div>
                <div className="flex-1 min-w-0 py-0.5">
                  <p className="text-xs font-semibold text-primary-text truncate mb-1 text-status-needs-revision">digital-sinta-process-02.webp</p>
                  <p className="text-[10px] text-muted-text mb-1">1.9MB • image/webp</p>
                  <div className="flex items-center gap-1 text-[10px] text-status-needs-revision font-medium mb-1">
                    <AlertCircle size={12} />
                    <span>Add alt text for accessibility</span>
                  </div>
                  <input type="text" placeholder="Add alt text..." className="w-full text-[11px] px-2 py-1.5 bg-warm-white border border-status-needs-revision/50 rounded-md focus:outline-none" />
                </div>
                <button className="absolute top-2 right-2 p-1 text-muted-text">
                  <X size={16} />
                </button>
              </div>

              {/* File 4 - Video */}
              <div className="bg-white border border-border rounded-xl p-3 flex gap-3 relative">
                <div className="w-20 h-20 rounded-lg bg-dark-surface shrink-0 flex items-center justify-center text-white">
                  <Video size={32} />
                </div>
                <div className="flex-1 min-w-0 py-0.5">
                  <p className="text-xs font-semibold text-primary-text truncate mb-1">digital-sinta-presentation.mp4</p>
                  <p className="text-[10px] text-muted-text mb-2">45.2MB • video/mp4</p>
                  <input type="text" placeholder="Add alt text..." className="w-full text-[11px] px-2 py-1.5 bg-warm-white border border-border rounded-md focus:outline-none" />
                </div>
                <button className="absolute top-2 right-2 p-1 text-muted-text">
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
             <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">College</label>
              <input type="text" disabled value="College of Computer and Information Sciences" className="w-full px-4 py-3 bg-secondary-surface border border-border rounded-xl text-secondary-text cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Program</label>
              <input type="text" disabled value="Bachelor of Science in Information Technology" className="w-full px-4 py-3 bg-secondary-surface border border-border rounded-xl text-secondary-text cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Secondary Categories</label>
              <div className="flex flex-wrap gap-2 p-3 bg-white border border-border rounded-xl">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-soft-maroon text-pup-maroon rounded-full text-xs font-medium border border-pup-maroon/10">
                  Graphic Design <X size={14} className="cursor-pointer" />
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-soft-maroon text-pup-maroon rounded-full text-xs font-medium border border-pup-maroon/10">
                  Multimedia <X size={14} className="cursor-pointer" />
                </span>
                <button className="text-xs text-pup-maroon font-semibold px-3 py-1.5 border border-dashed border-pup-maroon/40 rounded-full">+ Add more</button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-text">Tags</label>
              <div className="flex flex-wrap gap-2 p-3 bg-white border border-border rounded-xl">
                {["campus-life", "sta-mesa", "student-design", "digital-art", "filipino-identity"].map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary-surface text-secondary-text rounded-full text-xs border border-border">
                    #{tag} <X size={14} className="cursor-pointer" />
                  </span>
                ))}
                <input type="text" placeholder="Add tag..." className="text-xs focus:outline-none w-20 py-1.5" />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-primary-text">Ownership Confirmations</h3>
              <div className="space-y-3">
                {[
                  "I created this work or have permission from all collaborators.",
                  "I understand that suspected stolen or copyrighted content may be reported.",
                  "I confirm that all included media follows community guidelines.",
                  "I have permission to identify collaborators included in this submission."
                ].map((text, i) => (
                  <label key={i} className="flex gap-3 p-4 bg-white border border-border rounded-xl active:bg-soft-maroon transition-colors cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-border text-pup-maroon focus:ring-pup-maroon mt-0.5" />
                    <span className="text-sm text-secondary-text leading-tight">{text}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-soft-maroon/30 rounded-xl border-l-4 border-pup-maroon">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={18} className="text-pup-maroon" />
                <span className="text-sm font-bold text-pup-maroon uppercase tracking-wide">Ownership Policy</span>
              </div>
              <p className="text-xs text-secondary-text leading-relaxed">
                Campus Creatives protects student ownership. Moderators may request clarification or proof of authorship when necessary.
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 pb-4">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-muted-text uppercase tracking-widest">Summary</h3>
                <button onClick={() => setStep(1)} className="text-xs font-bold text-pup-maroon flex items-center gap-1">
                  Edit ✏
                </button>
              </div>
              
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-secondary-surface relative">
                  <img src="/__mockup/images/thumbnail_1.jpg" alt="Cover" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-pup-gold text-pup-maroon text-[10px] font-bold rounded-full uppercase tracking-tighter shadow-sm border border-white/20">Cover Media</span>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <h1 className="text-xl font-bold text-primary-text">Digital Sinta</h1>
                    <p className="text-xs text-secondary-text mt-1 leading-relaxed italic">
                      "A multimedia poster series inspired by student life, commuter culture, and PUP campus identity."
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-soft-maroon text-pup-maroon rounded-full text-[10px] font-bold uppercase tracking-wider">Digital Art</span>
                    <span className="px-3 py-1 bg-secondary-surface text-secondary-text rounded-full text-[10px] font-bold uppercase tracking-wider">Artwork</span>
                    <span className="px-3 py-1 bg-status-info/10 text-status-info rounded-full text-[10px] font-bold uppercase tracking-wider">PUP Likha 2026</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-muted-text uppercase tracking-widest">Media & Files</h3>
                <button onClick={() => setStep(2)} className="text-xs font-bold text-pup-maroon">Edit ✏</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-lg bg-secondary-surface border border-border overflow-hidden">
                    <img src={`/__mockup/images/thumbnail_${i}.jpg`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-text">4 files (1 video, 3 images) • All alt-text provided</p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-muted-text uppercase tracking-widest">Creator Info</h3>
                <button onClick={() => setStep(3)} className="text-xs font-bold text-pup-maroon">Edit ✏</button>
              </div>
              <div className="p-4 bg-white border border-border rounded-xl space-y-2">
                <p className="text-sm font-bold text-primary-text">Rafael Mendoza</p>
                <p className="text-xs text-secondary-text">CCIS • BS Information Technology</p>
                <p className="text-xs text-secondary-text"><span className="font-semibold">Collaborators:</span> Marco Santos (CCIS)</p>
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-muted-text uppercase tracking-widest">Visibility</h3>
                <button onClick={() => setStep(4)} className="text-xs font-bold text-pup-maroon">Edit ✏</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Public Portfolio", "Comments Enabled", "Sharing Enabled"].map(v => (
                  <div key={v} className="flex items-center gap-1.5 px-3 py-1.5 bg-status-approved/10 text-status-approved rounded-lg text-xs font-medium border border-status-approved/20">
                    <CheckCircle2 size={14} /> {v}
                  </div>
                ))}
              </div>
            </section>

            <div className="p-4 bg-soft-maroon rounded-2xl border border-pup-maroon/10 mb-20">
              <p className="text-xs text-secondary-text leading-relaxed">
                After submission, your work will be marked <span className="font-bold text-pup-maroon">Pending Review</span>. A moderator may approve it, reject it, or request revisions.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="submit-work-mobile-screen w-[390px] min-h-screen bg-main-bg font-inter flex flex-col overflow-hidden relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-secondary-text hover:text-pup-maroon transition-colors">
              <ArrowLeft size={20} />
            </button>
            <h1 className="font-bold text-primary-text">Submit Work</h1>
          </div>
          <button className="p-2 text-muted-text hover:text-pup-maroon transition-colors">
            <X size={20} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-border relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-pup-maroon transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="px-4 py-3 flex items-center justify-between bg-warm-white">
          <span className="text-[10px] font-bold text-pup-maroon uppercase tracking-widest">Step {step} of 5</span>
          <span className="text-xs font-bold text-primary-text truncate ml-4 text-right">{steps[step-1]}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-6">
        <h2 className="text-lg font-bold text-primary-text mb-6">
          {step === 1 && "Tell us about your work"}
          {step === 2 && "Add your creative media"}
          {step === 3 && "Help others discover your work"}
          {step === 4 && "Confirm ownership and visibility"}
          {step === 5 && "Review your submission"}
        </h2>

        {renderStepContent()}
      </main>

      {/* Sticky Bottom Actions */}
      <div className="shrink-0 bg-white border-t border-border p-4 flex gap-3 z-40">
        <button 
          onClick={() => setStep(s => Math.max(1, s - 1))}
          disabled={step === 1}
          className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all border ${step === 1 ? 'border-border text-muted-text' : 'border-border text-primary-text active:bg-secondary-surface'}`}
        >
          Back
        </button>
        {step < 5 ? (
          <button 
            onClick={() => setStep(s => Math.min(5, s + 1))}
            className="flex-[2] py-3.5 bg-pup-maroon text-white rounded-xl font-bold text-sm active:bg-deep-maroon shadow-md shadow-pup-maroon/20"
          >
            Continue
          </button>
        ) : (
          <button 
            onClick={() => setShowConfirm(true)}
            className="flex-[2] py-3.5 bg-pup-maroon text-white rounded-xl font-bold text-sm active:bg-deep-maroon shadow-md shadow-pup-maroon/20"
          >
            Submit for Review
          </button>
        )}
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="absolute inset-0 bg-black/60 z-[90] flex items-center justify-center p-5" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close confirmation"
            onClick={() => setShowConfirm(false)}
          />
          <div className="relative w-full max-w-[340px] bg-white rounded-[28px] p-6 shadow-2xl animate-in zoom-in-95 fade-in duration-200">
            <div className="text-center space-y-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-soft-maroon flex items-center justify-center text-pup-maroon mx-auto mb-2">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-text">Submit this work for review?</h3>
              <p className="text-sm text-secondary-text">
                You won't be able to edit your submission while it's being reviewed by our moderators.
              </p>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => {
                  setShowConfirm(false);
                  onSubmitted?.();
                }}
                className="w-full py-4 bg-pup-maroon text-white rounded-2xl font-bold text-base active:bg-deep-maroon"
              >
                Submit Work
              </button>
              <button 
                onClick={() => setShowConfirm(false)}
                className="w-full py-4 text-secondary-text font-bold text-base active:bg-secondary-surface rounded-2xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
