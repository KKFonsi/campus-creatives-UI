import React, { useState } from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { 
  Calendar, MapPin, Users, ArrowRight, Bookmark, Share2, 
  ChevronDown, ChevronRight, CheckCircle2, Clock, Trophy, Award,
  Palette, Camera, Music, Film, Mic2, Sparkles, Image as ImageIcon
} from 'lucide-react';
import { ShareModalMobile } from './ShareModal';
import './_group.css';

interface EventDetailPageMobileProps {
  onBack?: () => void;
  onSubmitEntry?: () => void;
  onWorkDetail?: () => void;
}

export function EventDetailPageMobile({ onBack, onSubmitEntry, onWorkDetail }: EventDetailPageMobileProps = {}) {
  const [isSaved, setIsSaved] = useState(false);
  const [rulesExpanded, setRulesExpanded] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const approvedWorks = [
    { id: 1, title: "Sta. Mesa After the Rain", creator: "Bianca Reyes", image: "/__mockup/images/thumbnail_1.jpg", badge: "Featured" },
    { id: 2, title: "Sinta sa Riles", creator: "Marco Villanueva", image: "/__mockup/images/thumbnail_2.jpg", badge: "Finalist" },
    { id: 3, title: "Polytechnic Dreams", creator: "Dana Cruz", image: "/__mockup/images/thumbnail_3.jpg", badge: "Featured" }
  ];

  return (
    <div className="mobile-app-screen w-[390px] min-h-screen bg-main-bg font-inter">
      <MobileHeader />
      <main className="mobile-app-scroll pb-6">
      <button type="button" onClick={onBack} className="mx-4 mt-4 text-pup-maroon font-bold text-[13px]">
        ← Events
      </button>

      {/* Hero Cover */}
      <section className="relative w-full h-[240px] overflow-hidden">
        <img 
          src="/__mockup/images/event_1.jpg" 
          alt="PUP Likha 2026" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-maroon to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-pup-gold text-dark-maroon text-[10px] font-bold uppercase rounded">Open</span>
            <span className="text-white/60 font-mono text-[10px]">PUP-LIKHA-2026</span>
          </div>
          <h1 className="text-[24px] font-bold text-white leading-tight">
            PUP Likha 2026: Student Creative Showcase
          </h1>
        </div>
      </section>

      {/* Condensed Deadline Card */}
      <section className="px-4 -mt-6 relative z-10">
        <div className="bg-card-bg border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-red-600 font-bold text-[13px]">
              <Clock size={16} /> 15 days remaining
            </div>
            <div className="px-2 py-0.5 bg-status-approved/10 text-status-approved text-[11px] font-bold rounded">Submissions Open</div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-muted-text text-[11px] font-bold uppercase mb-0.5">Deadline Date</div>
              <div className="text-[16px] font-bold">June 30, 2026</div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-lg border transition-colors ${isSaved ? 'bg-soft-gold border-warm-gold text-warm-gold' : 'bg-white border-border text-primary-text'}`}
              >
                <Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} />
              </button>
              <button onClick={() => setShowShare(true)} className="p-2 rounded-lg border border-border bg-white text-primary-text" aria-label="Share event">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center font-bold text-[14px]">OSA</div>
          <div>
            <div className="text-[14px] font-bold">PUP Office for Student Affairs</div>
            <div className="text-[12px] text-muted-text">Event Organizer</div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-[18px] font-bold mb-3">Overview</h2>
            <p className="text-[14px] text-secondary-text leading-relaxed">
              PUP Likha 2026 is the premier campus-wide creative showcase celebrating the diverse talents of the PUP community. 
              Join us for a bridge between academic excellence and creative expression.
            </p>
          </div>

          <button type="button" onClick={onSubmitEntry} className="w-full py-4 bg-pup-maroon text-white font-bold rounded-xl text-[16px] shadow-lg flex items-center justify-center gap-2">
            Submit Entry <ArrowRight size={20} />
          </button>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary-surface p-3 rounded-lg flex items-center gap-3">
              <MapPin size={16} className="text-pup-maroon" />
              <div className="text-[12px] font-bold">Main Campus</div>
            </div>
            <div className="bg-secondary-surface p-3 rounded-lg flex items-center gap-3">
              <Users size={16} className="text-pup-maroon" />
              <div className="text-[12px] font-bold">All Students</div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[14px] font-bold mb-3 uppercase tracking-wider text-muted-text">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Visual Art', icon: Palette },
                { name: 'Digital Art', icon: Sparkles },
                { name: 'Photography', icon: Camera },
                { name: 'Music', icon: Music },
                { name: 'Film', icon: Film },
                { name: 'Spoken Word', icon: Mic2 }
              ].map(cat => (
                <div key={cat.name} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border rounded-full text-[12px] font-bold">
                  <cat.icon size={14} className="text-pup-maroon" />
                  {cat.name}
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Rules */}
          <div className="border border-border rounded-xl overflow-hidden">
            <button 
              onClick={() => setRulesExpanded(!rulesExpanded)}
              className="w-full p-4 flex items-center justify-between bg-white"
            >
              <span className="font-bold text-[15px]">Rules and Guidelines</span>
              <ChevronDown size={18} className={`transition-transform ${rulesExpanded ? 'rotate-180' : ''}`} />
            </button>
            {rulesExpanded && (
              <div className="p-4 bg-white border-t border-border space-y-3">
                {[
                  "All entries must be original works.",
                  "Max three entries per participant.",
                  "Adhere to university standards.",
                  "Include artist statement.",
                  "Valid PUP ID required."
                ].map((rule, i) => (
                  <div key={i} className="flex gap-2 text-[13px] text-secondary-text">
                    <CheckCircle2 size={14} className="text-pup-maroon shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-[16px] font-bold mb-6">Important Dates</h3>
            <div className="relative pl-6 border-l-2 border-border ml-2 space-y-8">
              {[
                { date: 'May 1', event: 'Announcement', done: true },
                { date: 'May 15', event: 'Submission Opens', done: true },
                { date: 'June 30', event: 'Deadline', current: true },
                { date: 'July 1-14', event: 'Review Period' },
                { date: 'July 20', event: 'Featured Entries' },
                { date: 'August 2', event: 'Showcase' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 bg-white ${item.done ? 'border-status-approved' : item.current ? 'border-pup-maroon bg-pup-maroon' : 'border-border'}`}></div>
                  <div className={`text-[12px] font-bold uppercase ${item.current ? 'text-pup-maroon' : 'text-primary-text'}`}>{item.date}</div>
                  <div className="text-[13px] text-secondary-text">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Approved Entries Section */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold">Approved Entries</h3>
              <button className="text-pup-maroon text-[12px] font-bold">View All →</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-4 px-4">
              {approvedWorks.map(work => (
                <button key={work.id} type="button" onClick={onWorkDetail} className="min-w-[200px] bg-card-bg border border-border rounded-xl overflow-hidden text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20">
                  <div className="relative h-[120px]">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-white/90 rounded text-[9px] font-bold text-pup-maroon uppercase">{work.badge}</div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-[13px] font-bold line-clamp-1 mb-0.5">{work.title}</h4>
                    <div className="text-[11px] text-secondary-text">{work.creator}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Related Events */}
          <div className="pt-4">
            <h3 className="text-[16px] font-bold mb-4">Related Events</h3>
            <div className="space-y-3">
              {[
                { title: "Guhit Iskolar Digital Art", college: "CAL", date: "July 15", image: "/__mockup/images/event_2.jpg" },
                { title: "Sinta Short Film Festival", college: "COC", date: "June 18", image: "/__mockup/images/event_3.jpg" }
              ].map((ev, i) => (
                <div key={i} className="flex gap-3 bg-card-bg border border-border rounded-xl p-3">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[13px] font-bold leading-tight mb-1">{ev.title}</h4>
                    <div className="text-[11px] text-muted-text mb-2">{ev.college}</div>
                    <div className="text-[11px] font-bold text-warm-gold">Deadline: {ev.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </main>

      <MobileBottomNav />
      {showShare && <ShareModalMobile onClose={() => setShowShare(false)} />}
    </div>
  );
}
