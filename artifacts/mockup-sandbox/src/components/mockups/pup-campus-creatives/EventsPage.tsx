import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { Search, Filter, Calendar, MapPin, Users, ArrowRight, ExternalLink, ChevronDown, Clock } from 'lucide-react';
import './_group.css';

interface EventsPageProps {
  onEventDetail?: () => void;
}

export function EventsPage({ onEventDetail }: EventsPageProps = {}) {
  const [activeTab, setActiveTab] = useState('Open');

  const tabs = [
    { name: 'Open', count: 8 },
    { name: 'Closing Soon', count: 3 },
    { name: 'Upcoming', count: 5 },
    { name: 'Ongoing', count: 2 },
    { name: 'Completed', count: 12 },
  ];

  const events = [
    {
      id: 1,
      title: "PUP Likha 2026: Student Creative Showcase",
      code: "PUP-LIKHA-2026",
      organizer: "PUP OSA",
      type: "Showcase",
      category: "All Disciplines",
      deadline: "June 30, 2026",
      venue: "PUP Main Campus",
      eligibility: "All Students",
      status: "Open",
      entries: 145,
      image: "/__mockup/images/event_1.jpg",
      isClosingSoon: false
    },
    {
      id: 2,
      title: "Guhit Iskolar Digital Art Competition",
      code: "GUHIT-ISKOLAR-2026",
      organizer: "CAL",
      type: "Contest",
      category: "Digital Art",
      deadline: "July 15, 2026",
      venue: "Online",
      eligibility: "CAL Students",
      status: "Open",
      entries: 86,
      image: "/__mockup/images/event_2.jpg",
      isClosingSoon: false
    },
    {
      id: 3,
      title: "Sinta Short Film Festival",
      code: "SINTA-FILM-2026",
      organizer: "COC",
      type: "Film Screening",
      category: "Film & Video",
      deadline: "June 18, 2026",
      venue: "PUP COC Theater",
      eligibility: "Open to All",
      status: "Closing Soon",
      entries: 42,
      image: "/__mockup/images/event_3.jpg",
      isClosingSoon: true
    },
    {
      id: 4,
      title: "PUP Spoken Word Night",
      code: "SPOKEN-WORD-2026",
      organizer: "CAL Student Council",
      type: "Performance",
      category: "Spoken Word",
      deadline: "TBA",
      venue: "PUP Lagoon",
      eligibility: "Open to All",
      status: "Upcoming",
      entries: 0,
      image: "/__mockup/images/event_1.jpg",
      isClosingSoon: false
    },
    {
      id: 5,
      title: "Creative Tech Challenge 2026",
      code: "CCIS-CREATIVE-TECH-2026",
      organizer: "CCIS",
      type: "Design Challenge",
      category: "UI/UX+Multimedia",
      deadline: "July 5, 2026",
      venue: "Online / CCIS Lab",
      eligibility: "CCIS Students",
      status: "Open",
      entries: 34,
      image: "/__mockup/images/event_2.jpg",
      isClosingSoon: false
    },
    {
      id: 6,
      title: "Sta. Mesa Through the Lens",
      code: "STA-MESA-LENS-2026",
      organizer: "COC",
      type: "Contest",
      category: "Photography",
      deadline: "July 20, 2026",
      venue: "Sta. Mesa, Manila",
      eligibility: "All Students",
      status: "Open",
      entries: 112,
      image: "/__mockup/images/event_3.jpg",
      isClosingSoon: false
    },
    {
      id: 7,
      title: "Foundation Week Poster-Making Contest",
      code: "POSTER-CONTEST-2026",
      organizer: "OSA",
      type: "Contest",
      category: "Graphic Design",
      deadline: "August 5, 2026",
      venue: "PUP Gym",
      eligibility: "All Students",
      status: "Upcoming",
      entries: 0,
      image: "/__mockup/images/event_1.jpg",
      isClosingSoon: false
    },
    {
      id: 8,
      title: "Tinig ng PUP Music Showcase",
      code: "TINIG-PUP-2026",
      organizer: "CHK",
      type: "Performance",
      category: "Music",
      deadline: "TBA",
      venue: "PUP Oval",
      eligibility: "Open to All",
      status: "Upcoming",
      entries: 0,
      image: "/__mockup/images/event_2.jpg",
      isClosingSoon: false
    },
    {
      id: 9,
      title: "Red and Gold Photography Walk",
      code: "RED-GOLD-WALK-2026",
      organizer: "Photography Club",
      type: "Showcase",
      category: "Photography",
      deadline: "Ongoing",
      venue: "Campus Wide",
      eligibility: "Members Only",
      status: "Ongoing",
      entries: 230,
      image: "/__mockup/images/event_3.jpg",
      isClosingSoon: false
    }
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto">
      <DesktopNav authenticated={true} />
      
      <main className="w-full max-w-[1200px] mx-auto px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-[40px] font-bold tracking-tight mb-2">Events and Open Calls</h1>
          <p className="text-secondary-text text-lg">Participate in campus competitions, exhibitions, and creative challenges.</p>
        </header>

        {/* Featured Event Hero */}
        <section className="mb-12">
          <div className="relative w-full h-[400px] rounded-[24px] overflow-hidden group cursor-pointer border border-border">
            <img 
              src="/__mockup/images/event_1.jpg" 
              alt="PUP Likha 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-maroon/90 via-dark-maroon/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full flex items-end justify-between">
              <div className="max-w-[600px]">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-status-approved text-white text-[12px] font-bold mb-4 uppercase tracking-wider">
                  Featured Event
                </div>
                <h2 className="text-[42px] font-bold text-white leading-tight mb-4">
                  PUP Likha 2026: Student Creative Showcase
                </h2>
                <div className="flex items-center gap-6 text-white/80 text-[15px] mb-8">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-pup-gold" />
                    <span>Organizer: PUP OSA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-pup-gold" />
                    <span>Deadline: June 30, 2026</span>
                  </div>
                </div>
                <button type="button" onClick={onEventDetail} className="px-8 py-3.5 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors shadow-lg flex items-center gap-2">
                  View Event <ArrowRight size={20} />
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white text-center min-w-[140px]">
                <div className="text-[32px] font-bold mb-0">15</div>
                <div className="text-[12px] uppercase font-bold tracking-widest text-white/60">Days Left</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Tabs */}
        <section className="mb-8">
          <div className="flex items-center justify-between border-b border-border mb-8">
            <div className="flex items-center gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`pb-4 text-[15px] font-bold transition-all relative ${
                    activeTab === tab.name ? 'text-pup-maroon' : 'text-muted-text hover:text-secondary-text'
                  }`}
                >
                  {tab.name}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-[11px] ${
                    activeTab === tab.name ? 'bg-soft-maroon text-pup-maroon' : 'bg-secondary-surface text-muted-text'
                  }`}>
                    {tab.count}
                  </span>
                  {activeTab === tab.name && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pup-maroon"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex-1 min-w-[300px] relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" size={20} />
              <input 
                type="text" 
                placeholder="Search events, organizers, or categories..." 
                className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon transition-all text-[15px]"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-colors text-[15px] font-medium">
              <Filter size={18} />
              Event Type
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-colors text-[15px] font-medium">
              Category
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-colors text-[15px] font-medium">
              College
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-colors text-[15px] font-medium">
              <Calendar size={18} />
              Deadline
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="bg-soft-gold/30 border border-soft-gold px-4 py-2.5 rounded-lg text-[13px] text-warm-gold font-medium mb-10 flex items-center gap-2">
            <Clock size={16} />
            Event names and details are sample academic prototype content.
          </div>
        </section>

        {/* Event Grid */}
        <section className="grid grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <div key={event.id} className="bg-card-bg border border-border rounded-[20px] overflow-hidden group hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${
                    event.status === 'Closing Soon' ? 'bg-red-600 text-white' : 
                    event.status === 'Open' ? 'bg-status-approved text-white' : 
                    event.status === 'Ongoing' ? 'bg-status-info text-white' :
                    'bg-status-pending text-white'
                  }`}>
                    {event.status}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[11px] font-mono text-muted-text mb-2 tracking-wider">{event.code}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-pup-maroon transition-colors line-clamp-2 min-h-[56px]">
                  {event.title}
                </h3>
                
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2 text-[13px] text-secondary-text">
                    <Users size={14} className="text-muted-text" />
                    <span className="font-semibold">{event.organizer}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>{event.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-secondary-text">
                    <Calendar size={14} className="text-muted-text" />
                    <span className={event.isClosingSoon ? "text-red-600 font-bold" : "text-warm-gold font-bold"}>
                      Deadline: {event.deadline}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-secondary-text">
                    <MapPin size={14} className="text-muted-text" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-secondary-surface text-primary-text text-[11px] font-medium rounded-md">
                    {event.category}
                  </span>
                  <span className="px-2 py-1 bg-secondary-surface text-primary-text text-[11px] font-medium rounded-md">
                    {event.eligibility}
                  </span>
                </div>

                <div className="pt-5 border-t border-border flex items-center justify-between">
                  <div className="text-[13px] text-muted-text">
                    <span className="font-bold text-secondary-text">{event.entries}</span> entries
                  </div>
                  <button type="button" onClick={onEventDetail} className="text-pup-maroon font-bold text-[14px] flex items-center gap-1 hover:underline underline-offset-4">
                    View Event <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Load More */}
        <div className="flex justify-center mb-20">
          <button className="px-10 py-3.5 border-2 border-border text-primary-text font-bold rounded-xl hover:border-pup-maroon hover:text-pup-maroon transition-all">
            Load More Events
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-surface py-12 px-8 border-t border-white/10 mt-auto">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-[12px] text-white/40">
          <p>© 2026 PUP Campus Creatives.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Guidelines</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
