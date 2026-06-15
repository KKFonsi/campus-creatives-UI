import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  Calendar, MapPin, Users, ArrowRight, Share2, Bookmark, 
  ChevronRight, Clock, CheckCircle2, Trophy, Award,
  Image as ImageIcon, Palette, Camera, Mic2, Film, Music, Sparkles
} from 'lucide-react';
import { ShareModal } from './ShareModal';
import './_group.css';

interface EventDetailPageProps {
  onBack?: () => void;
  onSubmitEntry?: () => void;
  onWorkDetail?: () => void;
}

export function EventDetailPage({ onBack, onSubmitEntry, onWorkDetail }: EventDetailPageProps = {}) {
  const [isSaved, setIsSaved] = useState(false);
  const [rulesExpanded, setRulesExpanded] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const categories = [
    { name: 'Visual Art', icon: Palette },
    { name: 'Digital Art', icon: Sparkles },
    { name: 'Photography', icon: Camera },
    { name: 'Music', icon: Music },
    { name: 'Film', icon: Film },
    { name: 'Spoken Word', icon: Mic2 },
  ];

  const timeline = [
    { date: 'May 1', event: 'Announcement', status: 'completed' },
    { date: 'May 15', event: 'Submission Opens', status: 'completed' },
    { date: 'June 30', event: 'Deadline', status: 'active' },
    { date: 'July 1-14', event: 'Review Period', status: 'upcoming' },
    { date: 'July 20', event: 'Featured Entries', status: 'upcoming' },
    { date: 'August 2', event: 'Showcase', status: 'upcoming' },
  ];

  const approvedWorks = [
    {
      id: 1,
      title: "Sta. Mesa After the Rain",
      creator: "Bianca Reyes",
      college: "COC",
      category: "Photography",
      image: "/__mockup/images/thumbnail_1.jpg",
      badge: "Featured"
    },
    {
      id: 2,
      title: "Sinta sa Riles",
      creator: "Marco Villanueva",
      college: "CAL",
      category: "Illustration",
      image: "/__mockup/images/thumbnail_2.jpg",
      badge: "Finalist"
    },
    {
      id: 3,
      title: "Polytechnic Dreams",
      creator: "Dana Cruz",
      college: "CCIS",
      category: "Digital Art",
      image: "/__mockup/images/thumbnail_3.jpg",
      badge: "Featured"
    },
    {
      id: 4,
      title: "Tinig ng Bayan",
      creator: "Rafael Santos",
      college: "CAL",
      category: "Spoken Word",
      image: "/__mockup/images/thumbnail_4.jpg",
      badge: "Finalist"
    },
    {
      id: 5,
      title: "Railway Sketches",
      creator: "Miguel Gomez",
      college: "CADBE",
      category: "Visual Art",
      image: "/__mockup/images/thumbnail_1.jpg",
      badge: "Featured"
    },
    {
      id: 6,
      title: "Campus Frequencies",
      creator: "Leo Castro",
      college: "COC",
      category: "Music",
      image: "/__mockup/images/thumbnail_2.jpg",
      badge: "Finalist"
    }
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto pb-20">
      <DesktopNav authenticated={true} />
      
      {/* Event Hero */}
      <section className="w-full h-[460px] relative overflow-hidden">
        <img 
          src="/__mockup/images/event_1.jpg" 
          alt="PUP Likha 2026" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-maroon via-transparent to-black/20"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-[1200px] mx-auto px-8 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-pup-gold text-dark-maroon text-[12px] font-bold uppercase rounded tracking-wider">Open for Submissions</span>
              <span className="text-white/80 font-mono text-[14px]">PUP-LIKHA-2026</span>
            </div>
            <h1 className="text-[48px] font-bold text-white leading-tight mb-2">
              PUP Likha 2026: Student Creative Showcase
            </h1>
            <p className="text-white/70 text-lg font-medium">Organized by the PUP Office for Student Affairs</p>
          </div>
        </div>
      </section>

      <main className="w-full max-w-[1200px] mx-auto px-8 py-12">
        <button type="button" onClick={onBack} className="mb-8 text-pup-maroon font-bold hover:underline">
          ← Back to Events
        </button>
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <div className="space-y-4 text-secondary-text leading-relaxed text-[16px]">
                <p>
                  PUP Likha 2026 is the premier campus-wide creative showcase celebrating the diverse talents of the PUP community. 
                  Now in its fifth year, the event serves as a bridge between academic excellence and creative expression, 
                  providing a platform for student artists, designers, and performers to share their vision with the entire university.
                </p>
                <p>
                  This year's theme focuses on "Identity and Innovation," encouraging participants to explore their roots while 
                  embracing the future of technology and creative media. Whether you are into traditional painting, digital art, 
                  or avant-garde performance, Likha 2026 is your stage.
                </p>
                <p>
                  Selected entries will be featured in the physical exhibition at the PUP Main Campus and showcased on the 
                  official Campus Creatives digital gallery.
                </p>
              </div>
            </section>

            {/* Info Chips */}
            <section className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-white border border-border p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-soft-maroon text-pup-maroon flex items-center justify-center">
                  <Award size={20} />
                </div>
                <div>
                  <div className="text-[12px] text-muted-text uppercase font-bold tracking-wider">Event Type</div>
                  <div className="font-bold text-[15px]">Showcase & Competition</div>
                </div>
              </div>
              <div className="bg-white border border-border p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-soft-maroon text-pup-maroon flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[12px] text-muted-text uppercase font-bold tracking-wider">Venue</div>
                  <div className="font-bold text-[15px]">PUP Main Campus, Sta. Mesa</div>
                </div>
              </div>
              <div className="bg-white border border-border p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-soft-maroon text-pup-maroon flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-[12px] text-muted-text uppercase font-bold tracking-wider">Eligibility</div>
                  <div className="font-bold text-[15px]">All PUP Students</div>
                </div>
              </div>
              <div className="bg-white border border-border p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-soft-maroon text-pup-maroon flex items-center justify-center">
                  <ImageIcon size={20} />
                </div>
                <div>
                  <div className="text-[12px] text-muted-text uppercase font-bold tracking-wider">Format</div>
                  <div className="font-bold text-[15px]">On-campus & Online</div>
                </div>
              </div>
            </section>

            {/* Categories */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-6">Eligible Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2 px-4 py-2.5 bg-secondary-surface rounded-full text-[14px] font-bold text-primary-text border border-border/50">
                    <cat.icon size={16} className="text-pup-maroon" />
                    {cat.name}
                  </div>
                ))}
              </div>
            </section>

            {/* Rules */}
            <section className="mb-12 border border-border rounded-2xl overflow-hidden">
              <button 
                onClick={() => setRulesExpanded(!rulesExpanded)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-secondary-surface transition-colors"
              >
                <h2 className="text-lg font-bold">Rules and Guidelines</h2>
                <ChevronRight size={20} className={`transition-transform ${rulesExpanded ? 'rotate-90' : ''}`} />
              </button>
              {rulesExpanded && (
                <div className="px-6 pb-6 bg-white border-t border-border">
                  <ul className="space-y-4 pt-6 text-[15px] text-secondary-text">
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">1</div>
                      <span>All entries must be original works created within the current academic year.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">2</div>
                      <span>Participants can submit a maximum of three entries across different categories.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">3</div>
                      <span>Works must adhere to the university's community standards and ethics policy.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">4</div>
                      <span>Submission must include a high-resolution file and a short artist statement (100-200 words).</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">5</div>
                      <span>Group entries are allowed for Film and Performance categories.</span>
                    </li>
                  </ul>
                </div>
              )}
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-8 text-center">Important Dates</h2>
              <div className="relative">
                <div className="absolute top-[18px] left-[50px] right-[50px] h-0.5 bg-border -z-10"></div>
                <div className="flex justify-between">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center max-w-[120px]">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 mb-3 bg-white ${
                        item.status === 'completed' ? 'border-status-approved text-status-approved' : 
                        item.status === 'active' ? 'border-pup-maroon text-pup-maroon scale-110 shadow-sm' : 
                        'border-border text-muted-text'
                      }`}>
                        {item.status === 'completed' ? <CheckCircle2 size={18} /> : <div className="w-2 h-2 rounded-full bg-current"></div>}
                      </div>
                      <div className="text-[12px] font-bold text-primary-text mb-1 uppercase tracking-tight">{item.date}</div>
                      <div className="text-[11px] font-medium text-secondary-text leading-tight">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Requirements & Judging */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-card-bg border border-border rounded-2xl p-6">
                <h3 className="text-[16px] font-bold mb-4 flex items-center gap-2">
                  <ImageIcon size={18} className="text-pup-maroon" /> Submission Requirements
                </h3>
                <ul className="text-[14px] text-secondary-text space-y-2.5">
                  <li>• Formats: JPG, PNG, PDF, MP4, MP3</li>
                  <li>• Size Limit: Up to 50MB per entry</li>
                  <li>• Description: Max 500 characters</li>
                  <li>• Identification: Valid PUP ID scan</li>
                </ul>
              </div>
              <div className="bg-card-bg border border-border rounded-2xl p-6">
                <h3 className="text-[16px] font-bold mb-4 flex items-center gap-2">
                  <Trophy size={18} className="text-pup-gold" /> Judging Criteria
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-secondary-text font-medium">Creativity & Originality</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-secondary-text font-medium">Technical Execution</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-secondary-text font-medium">Theme Relevance</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-secondary-text font-medium">Presentation</span>
                    <span className="font-bold">10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <section className="mb-12 bg-soft-maroon/30 border border-soft-maroon rounded-2xl p-8">
              <h2 className="text-lg font-bold text-pup-maroon mb-4">Recognition and Awards</h2>
              <p className="text-[15px] text-secondary-text mb-6">Winners in each category will receive:</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-soft-maroon text-center">
                  <div className="text-[20px] font-bold text-pup-maroon mb-1">1st Place</div>
                  <div className="text-[12px] text-secondary-text">Gold Certificate + Feature</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-soft-maroon text-center">
                  <div className="text-[20px] font-bold text-pup-maroon mb-1">2nd Place</div>
                  <div className="text-[12px] text-secondary-text">Silver Certificate</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-soft-maroon text-center">
                  <div className="text-[20px] font-bold text-pup-maroon mb-1">3rd Place</div>
                  <div className="text-[12px] text-secondary-text">Bronze Certificate</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-[360px]">
            <div className="sticky top-32 space-y-6">
              {/* Deadline Card */}
              <div className="bg-card-bg border-2 border-pup-maroon rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-2 text-red-600 font-bold text-[14px] mb-4">
                  <Clock size={18} /> 15 days remaining
                </div>
                <div className="mb-6">
                  <div className="text-muted-text text-[13px] font-bold uppercase tracking-wider mb-1">Submission Deadline</div>
                  <div className="text-2xl font-bold text-primary-text">June 30, 2026</div>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="px-3 py-1 bg-status-approved/10 text-status-approved text-[12px] font-bold rounded-full flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Submissions Open
                  </div>
                </div>
                <button type="button" onClick={onSubmitEntry} className="w-full py-4 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors shadow-lg shadow-pup-maroon/20 flex items-center justify-center gap-2 text-lg mb-4">
                  Submit Entry <ArrowRight size={20} />
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setIsSaved(!isSaved)}
                    className={`flex items-center justify-center gap-2 py-3 rounded-lg border font-bold text-[14px] transition-colors ${
                      isSaved ? 'bg-soft-gold border-warm-gold text-warm-gold' : 'bg-white border-border text-primary-text hover:bg-secondary-surface'
                    }`}
                  >
                    <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} />
                    {isSaved ? 'Saved' : 'Save Event'}
                  </button>
                  <button onClick={() => setShowShare(true)} className="flex items-center justify-center gap-2 py-3 rounded-lg border border-border bg-white text-primary-text font-bold text-[14px] hover:bg-secondary-surface transition-colors">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>

              {/* Organizer Card */}
              <div className="bg-card-bg border border-border rounded-2xl p-6">
                <h3 className="text-[14px] font-bold text-muted-text uppercase tracking-widest mb-4">Organizer</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center font-bold text-lg">
                    OSA
                  </div>
                  <div>
                    <div className="font-bold text-[15px]">PUP Office for Student Affairs</div>
                    <a href="#" className="text-pup-maroon text-[13px] font-bold hover:underline">View Organizer Profile →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approved Entries */}
        <section className="mt-20 border-t border-border pt-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-[32px] font-bold tracking-tight mb-2">Approved Entries</h2>
              <p className="text-secondary-text text-lg">Works already selected for this showcase.</p>
            </div>
            <button className="text-pup-maroon font-bold flex items-center gap-1.5 hover:underline">
              View all 145 entries <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-12">
            {approvedWorks.map((work) => (
              <button key={work.id} type="button" onClick={onWorkDetail} className="group text-left focus:outline-none focus:ring-4 focus:ring-pup-maroon/20 rounded-2xl">
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-border mb-4 bg-secondary-surface">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur text-pup-maroon text-[11px] font-bold rounded flex items-center gap-1 shadow-sm">
                    {work.badge === 'Featured' ? <Sparkles size={12} /> : <CheckCircle2 size={12} />} {work.badge}
                  </div>
                </div>
                <h3 className="text-[17px] font-bold mb-1 group-hover:text-pup-maroon transition-colors line-clamp-1">{work.title}</h3>
                <div className="text-[13px] text-secondary-text mb-3">{work.creator} • {work.college}</div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-secondary-surface rounded text-[11px] font-bold text-primary-text">{work.category}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Related Events */}
        <section className="mt-20 border-t border-border pt-16">
          <h2 className="text-[28px] font-bold mb-8">Related Events</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card-bg border border-border rounded-xl p-5 hover:border-pup-maroon transition-colors cursor-pointer group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-secondary-surface">
                <img src="/__mockup/images/event_2.jpg" alt="Event" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold mb-2 group-hover:text-pup-maroon transition-colors">Guhit Iskolar Digital Art Competition</h4>
              <div className="flex items-center justify-between text-[12px] text-muted-text">
                <span className="font-bold text-warm-gold">Deadline: July 15</span>
                <span>CAL</span>
              </div>
            </div>
            <div className="bg-card-bg border border-border rounded-xl p-5 hover:border-pup-maroon transition-colors cursor-pointer group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-secondary-surface">
                <img src="/__mockup/images/event_3.jpg" alt="Event" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold mb-2 group-hover:text-pup-maroon transition-colors">Sinta Short Film Festival</h4>
              <div className="flex items-center justify-between text-[12px] text-muted-text">
                <span className="font-bold text-red-600">Deadline: June 18</span>
                <span>COC</span>
              </div>
            </div>
            <div className="bg-card-bg border border-border rounded-xl p-5 hover:border-pup-maroon transition-colors cursor-pointer group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-secondary-surface">
                <img src="/__mockup/images/event_1.jpg" alt="Event" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold mb-2 group-hover:text-pup-maroon transition-colors">Creative Tech Challenge 2026</h4>
              <div className="flex items-center justify-between text-[12px] text-muted-text">
                <span className="font-bold text-warm-gold">Deadline: July 5</span>
                <span>CCIS</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      {showShare && <ShareModal onClose={() => setShowShare(false)} />}
    </div>
  );
}
