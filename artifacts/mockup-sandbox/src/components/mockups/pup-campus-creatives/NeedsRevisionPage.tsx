import React from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  ChevronRight, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  MessageCircle,
  Image as ImageIcon,
  ShieldCheck,
  Accessibility,
  Info,
  ChevronDown
} from 'lucide-react';
import './_group.css';

interface NeedsRevisionPageProps {
  onBack?: () => void;
  onRevise?: () => void;
}

export function NeedsRevisionPage({ onBack, onRevise }: NeedsRevisionPageProps = {}) {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter pb-20">
      <DesktopNav authenticated={true} active="Gallery" />
      
      <main className="max-w-[1200px] mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-secondary-text mb-8">
          <button onClick={onBack} className="hover:text-pup-maroon transition-colors">My Submissions</button>
          <ChevronRight size={14} />
          <span className="font-medium text-primary-text">Railway Sketches</span>
        </div>

        {/* Revision Header Banner */}
        <div className="bg-white rounded-2xl border-l-8 border-status-needs-revision shadow-sm border border-border p-6 mb-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-status-needs-revision/10 text-status-needs-revision flex items-center justify-center shrink-0">
              <AlertTriangle size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-text mb-1">Railway Sketches needs revision</h1>
              <p className="text-secondary-text text-sm">A moderator has requested some changes before this work can be approved and published.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-bold text-muted-text uppercase tracking-wider mb-1">Deadline</p>
              <p className="text-sm font-bold text-status-needs-revision flex items-center gap-1.5">
                <Clock size={14} />
                July 1, 2026
              </p>
            </div>
            <button onClick={onRevise} className="px-6 py-3 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors shadow-sm flex items-center gap-2">
              Start Revision
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Moderator Feedback Panel */}
          <section className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border bg-soft-gold/30">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <MessageCircle size={20} className="text-status-needs-revision" />
                  Moderator Feedback
                </h2>
                <span className="text-sm text-secondary-text">Received June 18, 2026</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="p-5 bg-secondary-surface/40 rounded-xl border border-border mb-8">
                <p className="text-primary-text leading-relaxed italic">
                  "Please provide clearer ownership details for the reference photographs and add alt text to all uploaded images. The third image also needs a higher-resolution replacement."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border border-border bg-warm-white">
                  <div className="flex items-center gap-3 mb-4 text-status-needs-revision">
                    <ImageIcon size={20} />
                    <h3 className="font-bold">Media Issues</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex flex-col gap-2">
                      <p className="text-sm text-secondary-text">Replace the third image with a higher-resolution version.</p>
                      <button className="text-xs font-bold text-pup-maroon flex items-center gap-1 hover:underline self-start">
                        Fix Now <ChevronRight size={12} />
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border bg-warm-white">
                  <div className="flex items-center gap-3 mb-4 text-status-needs-revision">
                    <ShieldCheck size={20} />
                    <h3 className="font-bold">Ownership</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex flex-col gap-2">
                      <p className="text-sm text-secondary-text">Clarify ownership of the reference photographs used in the composition.</p>
                      <button className="text-xs font-bold text-pup-maroon flex items-center gap-1 hover:underline self-start">
                        Fix Now <ChevronRight size={12} />
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border bg-warm-white">
                  <div className="flex items-center gap-3 mb-4 text-status-needs-revision">
                    <Accessibility size={20} />
                    <h3 className="font-bold">Accessibility</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex flex-col gap-2">
                      <p className="text-sm text-secondary-text">Add alt text to all images in the submission.</p>
                      <button className="text-xs font-bold text-pup-maroon flex items-center gap-1 hover:underline self-start">
                        Fix Now <ChevronRight size={12} />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Original Submission Preview */}
          <section className="bg-white rounded-2xl border border-border overflow-hidden opacity-80 pointer-events-none">
            <div className="p-6 border-b border-border bg-secondary-surface/50 flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Info size={20} className="text-secondary-text" />
                Original Submission
              </h2>
              <span className="text-xs font-bold px-2 py-1 bg-border rounded text-muted-text uppercase tracking-widest">Read Only</span>
            </div>
            <div className="p-8">
              <div className="flex gap-8 mb-8">
                <div className="w-48 aspect-square rounded-xl bg-secondary-surface border border-border overflow-hidden">
                  <img src="/__mockup/images/thumbnail_2.jpg" alt="Original preview" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Railway Sketches</h3>
                  <p className="text-secondary-text mb-4">A series of sketches documenting the daily life at the PNR Sta. Mesa station.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-secondary-surface rounded text-xs font-medium">Visual Art</span>
                    <span className="px-2 py-1 bg-secondary-surface rounded text-xs font-medium">Traditional Media</span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-border bg-secondary-surface/20">
                <h4 className="text-sm font-bold mb-2">Artist Statement</h4>
                <p className="text-sm text-muted-text leading-relaxed">
                  The PNR Sta. Mesa station is a melting pot of stories. Through these traditional sketches, I wanted to capture the fleeting moments of patience, exhaustion, and hope among the commuters.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
             <button className="px-6 py-3 border-2 border-border text-primary-text font-bold rounded-xl hover:bg-secondary-surface transition-colors flex items-center gap-2">
                View Full Original Submission
             </button>
             <div className="flex items-center gap-6">
                <a href="#" className="text-pup-maroon font-bold text-sm hover:underline">Contact Support</a>
                <button onClick={onRevise} className="px-10 py-3 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors shadow-sm">
                  Start Revision
                </button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
