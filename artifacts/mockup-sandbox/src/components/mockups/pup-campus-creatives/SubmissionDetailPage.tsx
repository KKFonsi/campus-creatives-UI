import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  ChevronRight, 
  Copy, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  User2, 
  Tag, 
  Hammer, 
  Globe, 
  FileText, 
  ExternalLink,
  MessageSquare,
  Share2,
  MoreVertical,
  ArrowLeft
} from 'lucide-react';
import './_group.css';

export function SubmissionDetailPage() {
  const [showWithdrawConfirm, setShowWithdrawConfirm] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter pb-20">
      <DesktopNav authenticated={true} />
      
      <main className="max-w-[1200px] mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-secondary-text mb-8">
          <a href="#" className="hover:text-pup-maroon transition-colors">My Submissions</a>
          <ChevronRight size={14} />
          <span className="font-medium text-primary-text">Digital Sinta</span>
        </div>

        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Header Area */}
            <div className="bg-card-bg rounded-2xl border border-border overflow-hidden mb-8">
              <div className="aspect-video bg-secondary-surface relative overflow-hidden">
                <img 
                  src="/__mockup/images/thumbnail_3.jpg" 
                  alt="Digital Sinta preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-pup-maroon text-white text-xs font-semibold rounded-full shadow-sm">
                    Artwork
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-pup-maroon text-xs font-semibold rounded-full shadow-sm border border-pup-maroon/20">
                    Digital Art
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Digital Sinta</h1>
                    <div className="flex items-center gap-3">
                      <code className="bg-secondary-surface px-2 py-1 rounded text-xs font-mono text-secondary-text">
                        CC-WORK-2026-0148
                      </code>
                      <button 
                        onClick={handleCopy}
                        className="text-secondary-text hover:text-pup-maroon transition-colors"
                        title="Copy reference number"
                      >
                        {copied ? <CheckCircle2 size={16} className="text-status-approved" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg border border-border hover:bg-secondary-surface transition-colors">
                      <Share2 size={20} className="text-secondary-text" />
                    </button>
                    <button className="p-2 rounded-lg border border-border hover:bg-secondary-surface transition-colors">
                      <MoreVertical size={20} className="text-secondary-text" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  <section>
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FileText size={20} className="text-pup-maroon" />
                      Work Description
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-2">Short Description</h3>
                        <p className="text-secondary-text leading-relaxed">
                          A multimedia poster series inspired by student life, commuter culture, and PUP campus identity.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-2">Artist Statement</h3>
                        <p className="text-secondary-text leading-relaxed">
                          Digital Sinta is a visual exploration of the daily rhythmic chaos within and around the PUP Sta. Mesa campus. It aims to elevate the mundane experiences of students—from the long queues at the train station to the shared moments in the lagoon—into vibrant, digital compositions that celebrate our collective resilience and creativity.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="grid grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Hammer size={20} className="text-pup-maroon" />
                        Tools & Medium
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {['Adobe Illustrator', 'Procreate', 'Canva'].map(tool => (
                          <span key={tool} className="px-3 py-1.5 bg-soft-maroon text-pup-maroon text-sm font-medium rounded-lg">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Tag size={20} className="text-pup-maroon" />
                        Tags
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {['campus-life', 'sta-mesa', 'student-design', 'digital-art', 'filipino-identity'].map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-secondary-surface text-secondary-text text-sm font-medium rounded-lg">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="grid grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <User2 size={20} className="text-pup-maroon" />
                        Collaborators
                      </h2>
                      <div className="p-4 rounded-xl border border-border bg-warm-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-surface flex items-center justify-center border border-border overflow-hidden">
                           <img src="/__mockup/images/creator-portrait.jpg" alt="Marco Santos" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Marco Santos</p>
                          <p className="text-xs text-muted-text">CCIS • BSIT</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <ExternalLink size={20} className="text-pup-maroon" />
                        Event Association
                      </h2>
                      <div className="p-4 rounded-xl border border-border bg-warm-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-soft-gold flex items-center justify-center text-warm-gold">
                           <Tag size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold">PUP Likha 2026</p>
                          <p className="text-xs text-muted-text">Main Showcase</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Globe size={20} className="text-pup-maroon" />
                      Visibility & Ownership
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Add to Public Portfolio after approval",
                        "Allow comments",
                        "Allow sharing",
                        "Show college and program"
                      ].map((setting, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-secondary-text">
                          <CheckCircle2 size={18} className="text-status-approved shrink-0" />
                          {setting}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 rounded-xl bg-soft-maroon border border-pup-maroon/10">
                      <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                        <AlertCircle size={16} className="text-pup-maroon" />
                        Ownership Confirmations
                      </h3>
                      <div className="space-y-2">
                        {[
                          "I created this work or have permission from all collaborators.",
                          "I understand that suspected stolen content may be reported.",
                          "I confirm that all media follows community guidelines.",
                          "I have permission to identify collaborators."
                        ].map((confirm, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-secondary-text">
                            <CheckCircle2 size={14} className="text-pup-maroon shrink-0 mt-0.5" />
                            {confirm}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Submission History */}
            <section className="bg-card-bg rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold mb-6">Submission History</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-soft-maroon flex items-center justify-center text-pup-maroon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Submitted for Review</p>
                    <p className="text-sm text-secondary-text mb-1">June 14, 2026 • 2:45 PM</p>
                    <p className="text-sm text-muted-text italic">Original submission sent to moderation queue.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-secondary-surface flex items-center justify-center text-secondary-text">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary-text">Saved as Draft</p>
                    <p className="text-sm text-muted-text mb-1">June 12, 2026 • 11:30 AM</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-[320px] shrink-0">
            {/* Status Card */}
            <div className="bg-card-bg rounded-2xl border border-border p-6 mb-6 sticky top-28">
              <div className="mb-8">
                <h3 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-4">Current Status</h3>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-status-pending/10 border border-status-pending/20 text-status-pending mb-4">
                  <Clock className="animate-spin-slow" size={24} />
                  <div>
                    <p className="font-bold">Pending Review</p>
                    <p className="text-xs opacity-80">Submitted June 14</p>
                  </div>
                </div>
                
                {/* Timeline Visual */}
                <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                  <div className="relative">
                    <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-status-approved flex items-center justify-center border-4 border-card-bg">
                      <CheckCircle2 size={10} className="text-white" />
                    </div>
                    <p className="text-sm font-bold">Draft Created</p>
                    <p className="text-xs text-muted-text">June 12, 2026</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-status-approved flex items-center justify-center border-4 border-card-bg">
                      <CheckCircle2 size={10} className="text-white" />
                    </div>
                    <p className="text-sm font-bold">Submitted</p>
                    <p className="text-xs text-muted-text">June 14, 2026</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-status-pending border-4 border-card-bg"></div>
                    <p className="text-sm font-bold text-status-pending">Under Review</p>
                    <p className="text-xs text-muted-text">Currently with moderator</p>
                  </div>
                  <div className="relative opacity-40">
                    <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-border border-4 border-card-bg"></div>
                    <p className="text-sm font-bold">Decision</p>
                    <p className="text-xs text-muted-text">Pending</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8 pt-8 border-t border-border">
                <button 
                  onClick={() => setShowWithdrawConfirm(true)}
                  className="w-full py-3 px-4 rounded-xl border border-status-rejected text-status-rejected font-bold text-sm hover:bg-status-rejected/5 transition-colors flex items-center justify-center gap-2"
                >
                  <AlertCircle size={18} />
                  Withdraw Submission
                </button>
                <button 
                  onClick={handleCopy}
                  className="w-full py-3 px-4 rounded-xl border border-border text-primary-text font-bold text-sm hover:bg-secondary-surface transition-colors flex items-center justify-center gap-2"
                >
                  <Copy size={18} />
                  Copy Reference
                </button>
              </div>

              <div className="p-4 rounded-xl bg-secondary-surface/50 border border-border">
                <p className="text-xs font-bold text-secondary-text mb-2 uppercase tracking-tight">Need Help?</p>
                <p className="text-xs text-muted-text mb-4 leading-relaxed">
                  Have questions about the review process or need to update your submission?
                </p>
                <div className="space-y-2">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold text-pup-maroon hover:underline">
                    <MessageSquare size={14} />
                    Message Moderator
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold text-pup-maroon hover:underline">
                    <ExternalLink size={14} />
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Withdraw Confirmation Modal */}
      {showWithdrawConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm"
            onClick={() => setShowWithdrawConfirm(false)}
          ></div>
          <div className="bg-card-bg w-full max-w-[440px] rounded-2xl border border-border shadow-2xl relative z-10 overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 rounded-xl bg-status-rejected/10 text-status-rejected flex items-center justify-center mb-4">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-text">Withdraw Submission?</h3>
              <p className="text-secondary-text mb-6 leading-relaxed">
                This will remove "Digital Sinta" from the moderation queue and return it to your drafts. You can resubmit it later if you wish.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowWithdrawConfirm(false)}
                  className="flex-1 py-3 px-4 rounded-xl border border-border font-bold text-primary-text hover:bg-secondary-surface transition-colors"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 py-3 px-4 rounded-xl bg-status-rejected text-white font-bold hover:bg-status-rejected/90 transition-colors shadow-sm"
                >
                  Withdraw Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
