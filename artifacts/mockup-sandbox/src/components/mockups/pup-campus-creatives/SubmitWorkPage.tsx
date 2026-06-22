import React, { useState } from 'react';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  Star, 
  X, 
  Plus, 
  Info, 
  HelpCircle, 
  FileVideo, 
  FileImage, 
  AlertTriangle,
  FileText,
  UserPlus,
  ArrowRight,
  Eye,
  MessageSquare,
  Share2,
  Lock,
  Globe
} from 'lucide-react';
import { DesktopNav } from './_shared/DesktopNav';
import { CREATIVE_CATEGORY_LABELS } from '../../../app/data/creativeCategories';
import './_group.css';

interface SubmitWorkPageProps {
  onSubmitted?: () => void;
}

export default function SubmitWorkPage({ onSubmitted }: SubmitWorkPageProps = {}) {
  const [step, setStep] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const steps = [
    { number: 1, label: 'Basic Info' },
    { number: 2, label: 'Media' },
    { number: 3, label: 'Classification' },
    { number: 4, label: 'Ownership' },
    { number: 5, label: 'Review' },
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-main-bg font-inter pb-20">
      <DesktopNav authenticated={true} active="Submit Work" />

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Step Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative flex justify-between items-center">
            {/* Progress Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-border -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-pup-maroon transition-all duration-300 -z-10"
              style={{ width: `${(step - 1) / (steps.length - 1) * 100}%` }}
            ></div>

            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  step > s.number ? 'bg-pup-maroon border-pup-maroon text-white' : 
                  step === s.number ? 'bg-white border-pup-maroon text-pup-maroon ring-4 ring-soft-maroon' : 
                  'bg-white border-border text-muted-text'
                }`}>
                  {step > s.number ? <Check size={20} className="stroke-[3px]" /> : <span className="font-bold">{s.number}</span>}
                </div>
                <span className={`absolute -bottom-7 text-xs font-bold transition-all duration-300 ${
                  step === s.number ? 'text-pup-maroon' : 'text-muted-text'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content Container */}
        <div className="mt-16 grid grid-cols-12 gap-8">
          {/* Main Form Area */}
          <div className="col-span-8">
            <h2 className="text-2xl font-bold text-primary-text mb-8">
              {step === 1 && "Tell us about your work"}
              {step === 2 && "Add your creative media"}
              {step === 3 && "Help others discover your work"}
              {step === 4 && "Confirm ownership and visibility"}
              {step === 5 && "Review your submission"}
            </h2>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-bold text-primary-text">Work Title</label>
                    <span className="text-xs text-muted-text">12/80</span>
                  </div>
                  <input 
                    type="text" 
                    defaultValue="Digital Sinta"
                    placeholder="Enter a catchy title for your work" 
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-bold text-primary-text">Short Description</label>
                    <span className="text-xs text-muted-text">104/200</span>
                  </div>
                  <textarea 
                    rows={2}
                    defaultValue="A multimedia poster series inspired by student life, commuter culture, and PUP campus identity."
                    placeholder="Briefly describe what this work is about..." 
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-bold text-primary-text">Artist Statement</label>
                    <span className="text-xs text-muted-text">156/1000</span>
                  </div>
                  <textarea 
                    rows={6}
                    defaultValue="This series explores the intersections of academic struggle and cultural resilience in Santa Mesa. Each element is carefully chosen to represent the 'Sinta' we have for our University despite its daily challenges."
                    placeholder="Share the inspiration, story, or message behind this work..." 
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-text">Content Type</label>
                    <select defaultValue="Artwork" className="w-full px-4 py-3 bg-white border border-border rounded-xl appearance-none outline-none focus:border-pup-maroon transition-all">
                      <option>Artwork</option>
                      <option>Project</option>
                      <option>Performance</option>
                      <option>Writing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-text">Primary Category</label>
                    <select className="w-full px-4 py-3 bg-white border border-border rounded-xl appearance-none outline-none focus:border-pup-maroon transition-all">
                      {CREATIVE_CATEGORY_LABELS.map((category) => (
                        <option key={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-text">Collaborators</label>
                  <div className="flex flex-wrap gap-2 p-3 bg-white border border-border rounded-xl min-h-[50px]">
                    <div className="px-3 py-1 bg-soft-maroon text-pup-maroon text-sm font-medium rounded-full flex items-center gap-2">
                      Marco Santos (CCIS) <button><X size={14} /></button>
                    </div>
                    <button className="px-3 py-1 border border-dashed border-border text-secondary-text text-sm font-medium rounded-full hover:bg-secondary-surface flex items-center gap-2 transition-colors">
                      <UserPlus size={14} /> Add Collaborator
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-text">Tools / Medium</label>
                  <div className="flex flex-wrap gap-2 p-3 bg-white border border-border rounded-xl min-h-[50px]">
                    {['Adobe Illustrator', 'Procreate', 'Canva'].map(tool => (
                      <div key={tool} className="px-3 py-1 bg-secondary-surface text-secondary-text text-sm font-medium rounded-full flex items-center gap-2">
                        {tool} <button><X size={14} /></button>
                      </div>
                    ))}
                    <input 
                      type="text" 
                      placeholder="Add tool..." 
                      className="flex-1 min-w-[120px] bg-transparent outline-none text-sm px-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="border-2 border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center bg-white hover:bg-secondary-surface transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-soft-maroon text-pup-maroon rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-text mb-1">Drag files here or Browse</h3>
                  <p className="text-sm text-secondary-text">JPG, PNG, WebP or MP4 up to 50MB</p>
                </div>

                <div className="bg-soft-maroon/30 border border-soft-maroon rounded-xl p-4 flex items-start gap-3">
                  <Info size={18} className="text-pup-maroon mt-0.5" />
                  <p className="text-sm text-pup-maroon">
                    Upload only media you created or have permission from all collaborators to use.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-primary-text">Uploaded Files (4)</h4>
                  
                  {/* File cards */}
                  <div className="space-y-3">
                    <div className="bg-white border border-border rounded-xl p-3 flex gap-4">
                      <div className="w-24 h-24 rounded-lg bg-secondary-surface overflow-hidden relative">
                        <img src="/__mockup/images/thumbnail_1.jpg" className="w-full h-full object-cover" />
                        <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-pup-gold text-deep-maroon text-[8px] font-bold rounded flex items-center gap-0.5 shadow-sm">
                          <Star size={8} fill="currentColor" /> COVER
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-bold text-primary-text">digital-sinta-cover.webp</p>
                            <p className="text-[10px] text-muted-text uppercase font-bold tracking-wider">2.4 MB • Image</p>
                          </div>
                          <button className="text-muted-text hover:text-status-rejected transition-colors"><X size={18} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <input placeholder="Alt text (for accessibility)" className="text-xs bg-secondary-surface border-none rounded-lg px-3 py-2 outline-none" defaultValue="A creative poster showing PUP main building with artistic textures" />
                          <input placeholder="Caption (optional)" className="text-xs bg-secondary-surface border-none rounded-lg px-3 py-2 outline-none" defaultValue="Primary exhibition poster" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-status-needs-revision/30 border-l-4 border-l-status-needs-revision rounded-xl p-3 flex gap-4 shadow-sm">
                      <div className="w-24 h-24 rounded-lg bg-secondary-surface overflow-hidden">
                        <img src="/__mockup/images/thumbnail_2.jpg" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-bold text-primary-text">digital-sinta-process-02.webp</p>
                            <p className="text-[10px] text-muted-text uppercase font-bold tracking-wider">1.9 MB • Image</p>
                          </div>
                          <button className="text-muted-text hover:text-status-rejected transition-colors"><X size={18} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="relative">
                            <input placeholder="Add alt text" className="w-full text-xs bg-status-needs-revision/5 border border-status-needs-revision/20 rounded-lg px-3 py-2 pr-8 outline-none" />
                            <AlertTriangle size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-status-needs-revision" />
                          </div>
                          <input placeholder="Caption (optional)" className="text-xs bg-secondary-surface border-none rounded-lg px-3 py-2 outline-none" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border rounded-xl p-3 flex gap-4 opacity-75">
                      <div className="w-24 h-24 rounded-lg bg-dark-surface flex items-center justify-center text-white">
                        <FileVideo size={32} />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-bold text-primary-text">digital-sinta-presentation.mp4</p>
                            <p className="text-[10px] text-status-rejected font-bold uppercase tracking-wider">45.2 MB • File too large (Max 40MB)</p>
                          </div>
                          <button className="text-muted-text hover:text-status-rejected transition-colors"><X size={18} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-text">College</label>
                    <div className="px-4 py-3 bg-secondary-surface border border-border rounded-xl text-secondary-text text-sm flex items-center justify-between">
                      College of Computer and Information Sciences
                      <Lock size={14} className="text-muted-text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-text">Program</label>
                    <div className="px-4 py-3 bg-secondary-surface border border-border rounded-xl text-secondary-text text-sm flex items-center justify-between">
                      Bachelor of Science in Information Technology
                      <Lock size={14} className="text-muted-text" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-primary-text">Categories & Discovery</label>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-secondary-text">Primary: Digital Art</span>
                      <div className="flex flex-wrap gap-2">
                        {['Graphic Design', 'UI/UX and Multimedia'].map(cat => (
                          <div key={cat} className="px-3 py-1 bg-secondary-surface text-secondary-text text-xs font-medium rounded-full flex items-center gap-2">
                            {cat} <button><X size={14} /></button>
                          </div>
                        ))}
                        <button className="px-3 py-1 border border-dashed border-border text-secondary-text text-xs font-medium rounded-full hover:bg-secondary-surface flex items-center gap-1">
                          <Plus size={12} /> Add More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-text">Tags</label>
                  <div className="flex flex-wrap gap-2 p-3 bg-white border border-border rounded-xl min-h-[50px]">
                    {['campus-life', 'sta-mesa', 'student-design', 'digital-art', 'filipino-identity'].map(tag => (
                      <div key={tag} className="px-3 py-1 bg-soft-maroon text-pup-maroon text-xs font-medium rounded-full flex items-center gap-2">
                        #{tag} <button><X size={14} /></button>
                      </div>
                    ))}
                    <input 
                      type="text" 
                      placeholder="Add tag..." 
                      className="flex-1 min-w-[100px] bg-transparent outline-none text-xs px-2"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary-text">Event Association</label>
                  <div className="space-y-2">
                    {[
                      { id: 'none', label: 'Not for an event' },
                      { id: 'likha', label: 'PUP Likha 2026', selected: true },
                      { id: 'guhit', label: 'Guhit Iskolar Digital Art Competition' },
                      { id: 'tech', label: 'Creative Tech Challenge 2026' },
                    ].map(event => (
                      <label key={event.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        event.selected ? 'bg-soft-maroon border-pup-maroon ring-1 ring-pup-maroon' : 'bg-white border-border hover:border-pup-maroon/50'
                      }`}>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          event.selected ? 'border-pup-maroon' : 'border-border'
                        }`}>
                          {event.selected && <div className="w-2.5 h-2.5 bg-pup-maroon rounded-full" />}
                        </div>
                        <span className={`text-sm font-medium ${event.selected ? 'text-pup-maroon font-bold' : 'text-primary-text'}`}>{event.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-text">Portfolio Collection</label>
                    <select defaultValue="UI/UX and Multimedia" className="w-full px-4 py-3 bg-white border border-border rounded-xl appearance-none outline-none focus:border-pup-maroon transition-all">
                      <option>UI/UX and Multimedia</option>
                      <option>Featured Highlights</option>
                      <option>Academic Projects</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-text">Content Language</label>
                    <select defaultValue="Filipino/English (Mixed)" className="w-full px-4 py-3 bg-white border border-border rounded-xl appearance-none outline-none focus:border-pup-maroon transition-all">
                      <option>Filipino/English (Mixed)</option>
                      <option>Filipino</option>
                      <option>English</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary-text">Accessibility Details</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Alt text completed', checked: true },
                      { label: 'Captions included', checked: true },
                      { label: 'Transcript available', checked: false },
                      { label: 'Audio description', checked: false },
                    ].map(item => (
                      <label key={item.label} className="flex items-center gap-3 cursor-pointer">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          item.checked ? 'bg-pup-maroon border-pup-maroon' : 'bg-white border-border'
                        }`}>
                          {item.checked && <Check size={14} className="text-white stroke-[3px]" />}
                        </div>
                        <span className="text-sm text-secondary-text">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-primary-text">Ownership Confirmations</h4>
                  <div className="space-y-3">
                    {[
                      'I created this work or have permission from all collaborators.',
                      'I understand that suspected stolen or copyrighted content may be reported.',
                      'I confirm that all included media follows community guidelines.',
                      'I have permission to identify collaborators included in this submission.',
                    ].map((text, i) => (
                      <label key={i} className="flex items-start gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-pup-maroon/50 transition-colors">
                        <div className="w-5 h-5 rounded border-2 border-pup-maroon bg-pup-maroon flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-white stroke-[3px]" />
                        </div>
                        <span className="text-sm text-primary-text font-medium leading-tight">{text}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-soft-maroon border border-soft-maroon/50 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Info size={100} />
                  </div>
                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pup-maroon flex-shrink-0 shadow-sm">
                      <Info size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-pup-maroon mb-2">Campus Creatives Ownership Policy</h4>
                      <p className="text-sm text-pup-maroon/80 mb-4 leading-relaxed">
                        Campus Creatives protects student ownership. We do not claim rights to your work. However, moderators may request clarification or proof of authorship when necessary to maintain platform integrity.
                      </p>
                      <div className="flex gap-4">
                        <button className="text-xs font-bold text-pup-maroon hover:underline flex items-center gap-1">
                          Community Guidelines <ArrowRight size={12} />
                        </button>
                        <button className="text-xs font-bold text-pup-maroon hover:underline flex items-center gap-1">
                          Copyright and Ownership Policy <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-primary-text">Visibility & Interaction</h4>
                  <div className="bg-white border border-border rounded-2xl divide-y divide-border">
                    {[
                      { label: 'Add to Public Portfolio after approval', desc: 'Allow others to see this work on your profile.', checked: true },
                      { label: 'Allow comments', desc: 'Enable student feedback and appreciation.', checked: true },
                      { label: 'Allow sharing', desc: 'Let others share your work on campus networks.', checked: true },
                      { label: 'Allow recommendation for feature', desc: 'Make your work eligible for the campus spotlight.', checked: true },
                      { label: 'Show college and program', desc: 'Display your academic affiliation alongside the work.', checked: true },
                      { label: 'Show collaborators', desc: 'List your team members on the work page.', checked: true },
                      { label: 'Keep approved work unlisted', desc: 'Only people with the link can see it.', checked: false },
                    ].map(option => (
                      <div key={option.label} className="p-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold text-primary-text">{option.label}</p>
                          <p className="text-xs text-secondary-text">{option.desc}</p>
                        </div>
                        <button className={`w-12 h-6 rounded-full relative transition-colors ${option.checked ? 'bg-status-approved' : 'bg-border'}`}>
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${option.checked ? 'right-1' : 'left-1'}`}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="bg-white border border-border rounded-2xl overflow-hidden">
                  <div className="p-4 bg-secondary-surface flex justify-between items-center border-b border-border">
                    <h3 className="font-bold text-primary-text">Submission Summary</h3>
                    <div className="px-3 py-1 bg-white text-secondary-text text-[10px] font-bold uppercase rounded-lg border border-border">
                      Read Only
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-8">
                    <div className="grid grid-cols-12 gap-8">
                      <div className="col-span-4">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
                          <img src="/__mockup/images/thumbnail_1.jpg" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xs text-center text-muted-text mt-2 font-medium italic">Primary Cover Media</p>
                      </div>
                      <div className="col-span-8 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-2xl font-bold text-primary-text mb-1">Digital Sinta</h4>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[10px] font-bold rounded uppercase">Artwork</span>
                              <span className="px-2 py-0.5 bg-secondary-surface text-secondary-text text-[10px] font-bold rounded uppercase">Digital Art</span>
                            </div>
                          </div>
                          <button onClick={() => setStep(1)} className="text-pup-maroon text-sm font-bold hover:underline flex items-center gap-1">
                            Edit ✏️
                          </button>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary-text mb-1 italic">Short Description</p>
                          <p className="text-sm text-secondary-text">A multimedia poster series inspired by student life, commuter culture, and PUP campus identity.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h5 className="text-xs font-bold text-muted-text uppercase tracking-widest">Creator Info</h5>
                          <button onClick={() => setStep(1)} className="text-pup-maroon text-xs font-bold hover:underline">Edit</button>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm"><span className="font-bold">Rafael Mendoza</span></p>
                          <p className="text-sm text-secondary-text">CCIS • BS IT</p>
                          <p className="text-sm"><span className="text-muted-text">Collaborators:</span> <span className="font-medium">Marco Santos</span></p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h5 className="text-xs font-bold text-muted-text uppercase tracking-widest">Discovery</h5>
                          <button onClick={() => setStep(3)} className="text-pup-maroon text-xs font-bold hover:underline">Edit</button>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {['campus-life', 'sta-mesa', 'digital-art'].map(tag => (
                            <span key={tag} className="px-2 py-0.5 border border-border text-secondary-text text-[10px] rounded">#{tag}</span>
                          ))}
                          <span className="text-[10px] text-muted-text font-medium">+2 more</span>
                        </div>
                        <p className="text-sm"><span className="text-muted-text">Event:</span> <span className="font-bold text-pup-maroon">PUP Likha 2026</span></p>
                      </div>
                    </div>

                    <div className="h-px bg-border"></div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-bold text-muted-text uppercase">Media</h5>
                        <p className="text-sm font-medium flex items-center gap-1.5"><FileImage size={14} /> 4 files (1 video, 3 images)</p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-bold text-muted-text uppercase">Ownership</h5>
                        <p className="text-sm font-medium text-status-approved flex items-center gap-1.5"><Check size={14} /> 4 confirmations completed</p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-bold text-muted-text uppercase">Visibility</h5>
                        <p className="text-sm font-medium flex items-center gap-1.5 text-status-info"><Globe size={14} /> Public, Comments enabled</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-soft-maroon/50 border border-soft-maroon rounded-2xl p-6">
                  <h4 className="font-bold text-pup-maroon mb-2 flex items-center gap-2">
                    <Info size={18} /> Moderation Notice
                  </h4>
                  <p className="text-sm text-pup-maroon/80 leading-relaxed">
                    After submission, your work will be marked <span className="font-bold">Pending Review</span>. A moderator from your college or the university creative committee will review your submission. They may approve it, reject it, or request revisions. You will be notified of the decision via your student portal and email.
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
              <div>
                {step > 1 && (
                  <button 
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 bg-white border border-border text-primary-text font-bold rounded-xl hover:bg-secondary-surface transition-all"
                  >
                    <ChevronLeft size={20} /> Back
                  </button>
                )}
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 text-secondary-text font-bold hover:text-pup-maroon transition-all">
                  Save as Draft
                </button>
                {step < 5 ? (
                  <button 
                    onClick={nextStep}
                    className="flex items-center gap-2 px-8 py-3 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon shadow-lg shadow-pup-maroon/20 transition-all"
                  >
                    Continue <ChevronRight size={20} />
                  </button>
                ) : (
                  <button 
                    onClick={() => setShowConfirmModal(true)}
                    className="flex items-center gap-2 px-8 py-3 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon shadow-lg shadow-pup-maroon/20 transition-all"
                  >
                    Submit for Review <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Guidance Panel */}
          <div className="col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-4 bg-secondary-surface border-b border-border flex items-center gap-2">
                  <HelpCircle size={18} className="text-pup-maroon" />
                  <h3 className="font-bold text-sm text-primary-text">Submission Guidance</h3>
                </div>
                <div className="p-5 space-y-4">
                  {step === 1 && (
                    <>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider">Writing Tips</h4>
                        <p className="text-xs text-secondary-text leading-relaxed">
                          Give your work a clear, evocative title. In the artist statement, explain your creative process and what you hope to communicate.
                        </p>
                      </div>
                      <div className="h-px bg-border"></div>
                      <div className="flex items-center gap-2 text-xs text-status-info font-bold">
                        <Info size={14} /> Required fields are marked with *
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider">Supported Formats</h4>
                        <ul className="text-xs text-secondary-text space-y-1">
                          <li>• Images: JPG, PNG, WebP</li>
                          <li>• Video: MP4 (H.264), MOV</li>
                          <li>• Audio: MP3, WAV</li>
                        </ul>
                      </div>
                      <div className="h-px bg-border"></div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider">Accessibility</h4>
                        <p className="text-xs text-secondary-text leading-relaxed">
                          Adding alt-text helps visually impaired students appreciate your work. Describe the visual elements clearly and concisely.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider">Discovery Tips</h4>
                        <p className="text-xs text-secondary-text leading-relaxed">
                          Use tags that relate to both the medium and the subject matter. For example, #digitalart and #campuslife.
                        </p>
                      </div>
                      <div className="h-px bg-border"></div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider">Event Association</h4>
                        <p className="text-xs text-secondary-text leading-relaxed">
                          If this is for a specific campus competition or showcase, make sure to select the correct event.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 4 && (
                    <>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider">Privacy & Rights</h4>
                        <p className="text-xs text-secondary-text leading-relaxed">
                          You always retain full copyright of your work. The visibility settings only control how it's displayed on the platform.
                        </p>
                      </div>
                    </>
                  )}
                  {step === 5 && (
                    <>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-primary-text uppercase tracking-wider">Final Check</h4>
                        <p className="text-xs text-secondary-text leading-relaxed">
                          Review all your details one last time. Once submitted, you won't be able to edit the work until a moderator reviews it.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-pup-maroon text-white rounded-2xl p-6 shadow-xl shadow-pup-maroon/20">
                <FileText size={24} className="mb-4 opacity-50" />
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Check out our Submission Guide for detailed instructions on file formats, copyright, and best practices.
                </p>
                <button className="text-xs font-bold bg-white/10 hover:bg-white/20 w-full py-2.5 rounded-lg transition-colors border border-white/20">
                  Read Submission Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-soft-maroon text-pup-maroon rounded-2xl flex items-center justify-center mb-6 mx-auto rotate-3">
              <Check size={32} className="stroke-[3px]" />
            </div>
            <h3 className="text-2xl font-bold text-center text-primary-text mb-2">Submit work for review?</h3>
            <p className="text-center text-secondary-text mb-8">
              By submitting, you confirm that this work is your own and adheres to the PUP Campus Creatives community guidelines.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="py-3 px-6 bg-secondary-surface text-primary-text font-bold rounded-xl hover:bg-border transition-colors"
              >
                Cancel
              </button>
              <button 
                className="py-3 px-6 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon shadow-lg shadow-pup-maroon/20 transition-all"
                onClick={() => {
                  setShowConfirmModal(false);
                  onSubmitted?.();
                }}
              >
                Submit Work
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
