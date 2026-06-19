import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import {
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Trophy,
  ArrowRight,
  Info,
  Tag
} from 'lucide-react';
import { PUP_LIKHA_ALLOWED_CATEGORY_LABELS } from '../../../app/data/creativeCategories';
import './_group.css';

interface EventEntryPageProps {
  onBack?: () => void;
  onCreateSubmission?: () => void;
}

export function EventEntryPage({ onBack, onCreateSubmission }: EventEntryPageProps = {}) {
  const [entryMode, setEntryMode] = useState<'existing' | 'new'>('existing');
  const [selectedWork, setSelectedWork] = useState<string | null>('digital-sinta');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const acceptedCategories = PUP_LIKHA_ALLOWED_CATEGORY_LABELS as readonly string[];
  const approvedWorks = [
    { id: 'digital-sinta', title: 'Digital Sinta', cat: 'Digital Art', img: '/__mockup/images/thumbnail_3.jpg' },
    { id: 'campus-freq', title: 'Campus Frequencies', cat: 'Music', img: '/__mockup/images/thumbnail_1.jpg' },
    { id: 'poly-dreams', title: 'Polytechnic Dreams', cat: 'Digital Art', img: '/__mockup/images/thumbnail_4.jpg' },
    { id: 'pasig-dusk', title: 'Pasig at Dusk', cat: 'Photography', img: '/__mockup/images/thumbnail_2.jpg' },
    { id: 'thread-memory', title: 'Thread Memory', cat: 'Crafts', img: '/__mockup/images/thumbnail_1.jpg' },
  ].map((work) => ({
    ...work,
    eligible: acceptedCategories.includes(work.cat),
    reason: acceptedCategories.includes(work.cat) ? undefined : 'Category not accepted',
  }));

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter pb-20">
      <DesktopNav authenticated={true} active="Events" />
      
      <main className="max-w-[1200px] mx-auto px-8 py-8">
        <button type="button" onClick={onBack} className="mb-6 text-pup-maroon font-bold hover:underline">
          ← Back to Event Detail
        </button>
        {/* Event Header Card */}
        <div className="bg-dark-surface text-white rounded-2xl border border-white/10 overflow-hidden mb-10 shadow-lg relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Trophy size={160} />
          </div>
          <div className="p-8 relative z-10">
            <div className="flex items-center gap-2 text-pup-gold text-sm font-bold mb-4 uppercase tracking-widest">
              <Calendar size={16} />
              Open Call for Entries
            </div>
            <h1 className="text-3xl font-bold mb-6">PUP Likha 2026: Student Creative Showcase</h1>
            
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-[10px] text-white/50 uppercase tracking-tighter">Event Code</p>
                <code className="text-sm font-mono text-pup-gold">PUP-LIKHA-2026</code>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-white/50 uppercase tracking-tighter">Organizer</p>
                <p className="text-sm font-bold">PUP Office of Student Affairs</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-white/50 uppercase tracking-tighter">Deadline</p>
                <p className="text-sm font-bold text-pup-gold flex items-center gap-1.5">
                  <Clock size={14} />
                  June 30, 2026 (15 days left)
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-white/50 uppercase tracking-tighter">Eligibility</p>
                <p className="text-sm font-bold">All Enrolled PUP Students</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 px-8 py-3 border-t border-white/5 flex items-center gap-4 text-xs">
            <span className="text-white/60">Allowed Categories:</span>
            <div className="flex flex-wrap gap-2">
              {PUP_LIKHA_ALLOWED_CATEGORY_LABELS.map(cat => (
                <span key={cat} className="px-2 py-0.5 bg-white/10 rounded-full border border-white/10 text-white/80">{cat}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[900px]">
          <h2 className="text-2xl font-bold mb-2">Submit Your Entry</h2>
          <p className="text-secondary-text mb-10">Select a work from your portfolio or submit a new creation specifically for this event.</p>

          <div className="space-y-12">
            {/* Entry Mode Selection */}
            <section>
              <h3 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-4">Entry Mode</h3>
              <div className="grid grid-cols-2 gap-6">
                <button 
                  onClick={() => setEntryMode('existing')}
                  className={`p-6 rounded-2xl border-2 text-left transition-all relative ${entryMode === 'existing' ? 'bg-white border-pup-maroon shadow-md' : 'bg-transparent border-border hover:border-pup-maroon/50'}`}
                >
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${entryMode === 'existing' ? 'bg-pup-maroon border-pup-maroon' : 'border-border'}`}>
                    {entryMode === 'existing' && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                  </div>
                  <CheckCircle2 className={`mb-4 ${entryMode === 'existing' ? 'text-pup-maroon' : 'text-muted-text'}`} size={28} />
                  <h4 className="font-bold mb-2">Use an existing approved work</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">Choose a piece already in your campus portfolio that matches the event categories.</p>
                </button>

                <button 
                  onClick={() => setEntryMode('new')}
                  className={`p-6 rounded-2xl border-2 text-left transition-all relative ${entryMode === 'new' ? 'bg-white border-pup-maroon shadow-md' : 'bg-transparent border-border hover:border-pup-maroon/50'}`}
                >
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${entryMode === 'new' ? 'bg-pup-maroon border-pup-maroon' : 'border-border'}`}>
                    {entryMode === 'new' && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                  </div>
                  <Calendar className={`mb-4 ${entryMode === 'new' ? 'text-pup-maroon' : 'text-muted-text'}`} size={28} />
                  <h4 className="font-bold mb-2">Submit a new work</h4>
                  <p className="text-xs text-secondary-text leading-relaxed">Create a fresh submission. This will redirect you to the standard Submit Work form.</p>
                </button>
              </div>
            </section>

            {/* Existing Work Grid */}
            {entryMode === 'existing' && (
              <section className="animate-in fade-in slide-in-from-top-4 duration-500">
                <h3 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-4">Select from Approved Works</h3>
                <div className="grid grid-cols-3 gap-6">
                  {approvedWorks.map((work) => (
                    <button 
                      key={work.id}
                      onClick={() => work.eligible && setSelectedWork(work.id)}
                      disabled={!work.eligible}
                      className={`group relative text-left rounded-2xl border-2 overflow-hidden transition-all ${!work.eligible ? 'opacity-50 grayscale cursor-not-allowed bg-secondary-surface' : selectedWork === work.id ? 'border-pup-maroon shadow-lg bg-white' : 'border-border hover:border-pup-maroon/50 bg-white'}`}
                    >
                      <div className="aspect-square bg-secondary-surface relative overflow-hidden">
                        <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        {selectedWork === work.id && (
                          <div className="absolute inset-0 bg-pup-maroon/10 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-pup-maroon text-pup-gold flex items-center justify-center shadow-lg border-2 border-pup-gold">
                              <CheckCircle2 size={24} />
                            </div>
                          </div>
                        )}
                        <div className="absolute top-2 left-2">
                           <span className="px-2 py-0.5 bg-status-approved text-white text-[10px] font-bold rounded shadow-sm">Approved ✓</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-sm mb-1 line-clamp-1">{work.title}</h4>
                        <div className="flex items-center justify-between">
                           <span className="text-[11px] text-muted-text">{work.cat}</span>
                           {work.eligible ? (
                             <span className="text-[10px] font-bold text-status-approved flex items-center gap-1">
                               Eligible ✓
                             </span>
                           ) : (
                             <span className="text-[10px] font-bold text-status-rejected flex items-center gap-1">
                               <AlertCircle size={10} />
                               {work.reason}
                             </span>
                           )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}
            {entryMode === 'new' && (
              <section className="animate-in fade-in slide-in-from-top-4 duration-500 rounded-2xl border border-pup-maroon/20 bg-soft-maroon p-6">
                <h3 className="text-lg font-bold text-pup-maroon mb-2">Create a new event submission</h3>
                <p className="text-sm text-secondary-text mb-5">
                  Start the standard Submit Work flow with PUP Likha 2026 selected as the event context.
                </p>
                <button
                  type="button"
                  onClick={onCreateSubmission}
                  className="inline-flex items-center gap-2 rounded-xl bg-pup-maroon px-6 py-3 text-sm font-bold text-white hover:bg-deep-maroon"
                >
                  Continue to Submit Work <ArrowRight size={18} />
                </button>
              </section>
            )}

            {/* Additional Fields */}
            <section className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Info size={20} className="text-pup-maroon" />
                Additional Entry Details
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-muted-text uppercase mb-2 block tracking-wider">Entry Title (Auto-generated)</label>
                    <input 
                      type="text" 
                      defaultValue="Digital Sinta — PUP Likha 2026 Entry" 
                      className="w-full bg-secondary-surface/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-text uppercase mb-2 block tracking-wider">Event Category</label>
                    <div className="relative">
                      <select className="w-full bg-secondary-surface/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 appearance-none font-medium">
                        {PUP_LIKHA_ALLOWED_CATEGORY_LABELS.map((category) => (
                          <option key={category}>{category}</option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted-text pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-muted-text uppercase mb-2 block tracking-wider">Short Entry Statement (Max 150 words)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-secondary-surface/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 leading-relaxed"
                    defaultValue="An exploration of student identity and commuter culture through digital poster design. This piece was specifically selected for PUP Likha as it represents the vibrant creative spirit of the CCIS student body."
                  ></textarea>
                </div>

                <div className="flex items-center gap-10">
                   <div>
                     <label className="text-xs font-bold text-muted-text uppercase mb-3 block tracking-wider">Entry Type</label>
                     <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="w-5 h-5 rounded-full border-2 border-pup-maroon flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-pup-maroon"></div>
                          </div>
                          <span className="text-sm font-medium">Individual</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer opacity-50">
                          <div className="w-5 h-5 rounded-full border-2 border-border"></div>
                          <span className="text-sm font-medium">Team/Collaboration</span>
                        </label>
                     </div>
                   </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-border text-pup-maroon focus:ring-pup-maroon cursor-pointer" />
                    <span className="text-sm text-secondary-text group-hover:text-primary-text transition-colors leading-relaxed">
                      I have read and agree to the <a href="#" className="text-pup-maroon font-bold hover:underline">Official Rules and Guidelines</a> of PUP Likha 2026 and confirm that I am eligible to participate.
                    </span>
                  </label>
                </div>
              </div>
            </section>

            {/* Review Summary */}
            <section className="bg-soft-maroon border border-pup-maroon/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6 text-pup-maroon">Review Entry Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-pup-maroon/10">
                  <span className="text-sm text-secondary-text">Selected Work</span>
                  <div className="flex items-center gap-2">
                    <img src="/__mockup/images/thumbnail_3.jpg" className="w-6 h-6 rounded object-cover" />
                    <span className="text-sm font-bold">Digital Sinta</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pup-maroon/10">
                  <span className="text-sm text-secondary-text">Event</span>
                  <span className="text-sm font-bold">PUP Likha 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pup-maroon/10">
                  <span className="text-sm text-secondary-text">Category</span>
                  <span className="text-sm font-bold">Digital Art</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pup-maroon/10">
                  <span className="text-sm text-secondary-text">Eligibility Status</span>
                  <span className="text-sm font-bold text-status-approved">✓ Confirmed Eligible</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pup-maroon/10">
                  <span className="text-sm text-secondary-text">Rules Agreement</span>
                  <span className="text-sm font-bold text-status-approved">✓ Agreed</span>
                </div>
              </div>
            </section>

            {/* Actions Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
               <div className="flex items-center gap-6">
                  <button type="button" onClick={onBack} className="text-secondary-text font-bold text-sm hover:text-pup-maroon">Cancel Entry</button>
                  <button className="px-6 py-3 border-2 border-border text-primary-text font-bold rounded-xl hover:bg-secondary-surface transition-colors">
                    Save as Draft
                  </button>
               </div>
               <button 
                 onClick={() => setShowConfirmModal(true)}
                 className="px-10 py-4 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors shadow-lg flex items-center gap-2 group"
               >
                 Submit Entry to Event
                 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm"
            onClick={() => setShowConfirmModal(false)}
          ></div>
          <div className="bg-white w-full max-w-[480px] rounded-2xl border border-border shadow-2xl relative z-10 overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-pup-gold/20 text-warm-gold flex items-center justify-center mb-6">
                <Trophy size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-text">Submit entry for review?</h3>
              <p className="text-secondary-text mb-8 leading-relaxed">
                Your entry "Digital Sinta" will be submitted for the <span className="font-bold">PUP Likha 2026 Showcase</span>. You will be notified once the event organizers have reviewed your entry.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 py-3.5 px-4 rounded-xl border border-border font-bold text-primary-text hover:bg-secondary-surface transition-colors"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 py-3.5 px-4 rounded-xl bg-pup-maroon text-white font-bold hover:bg-deep-maroon transition-colors shadow-sm"
                >
                  Submit Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
