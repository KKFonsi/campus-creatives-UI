import React, { useState } from 'react';
import { MobileHeader } from './_shared/MobileHeader';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { Search, Filter, Calendar, MapPin, Users, ArrowRight, ChevronRight, Clock } from 'lucide-react';
import './_group.css';

interface EventsPageMobileProps {
  onEventDetail?: () => void;
}

export function EventsPageMobile({ onEventDetail }: EventsPageMobileProps = {}) {
  const [activeTab, setActiveTab] = useState('Open');
  const [showFilters, setShowFilters] = useState(false);

  const tabs = ['Open', 'Closing Soon', 'Upcoming', 'Ongoing', 'Completed'];

  const events = [
    {
      id: 1,
      title: "PUP Likha 2026: Student Creative Showcase",
      code: "PUP-LIKHA-2026",
      organizer: "PUP OSA",
      type: "Showcase",
      deadline: "June 30, 2026",
      status: "Open",
      image: "/__mockup/images/event_1.jpg",
      isClosingSoon: false
    },
    {
      id: 2,
      title: "Guhit Iskolar Digital Art Competition",
      code: "GUHIT-ISKOLAR-2026",
      organizer: "CAL",
      type: "Contest",
      deadline: "July 15, 2026",
      status: "Open",
      image: "/__mockup/images/event_2.jpg",
      isClosingSoon: false
    },
    {
      id: 3,
      title: "Sinta Short Film Festival",
      code: "SINTA-FILM-2026",
      organizer: "COC",
      type: "Film Screening",
      deadline: "June 18, 2026",
      status: "Closing Soon",
      image: "/__mockup/images/event_3.jpg",
      isClosingSoon: true
    }
  ];

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-[80px]">
      <MobileHeader />

      {/* Featured Event Hero */}
      <section className="px-4 py-4">
        <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden border border-border">
          <img 
            src="/__mockup/images/event_1.jpg" 
            alt="PUP Likha 2026" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-maroon/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <div className="inline-flex px-2 py-0.5 rounded bg-status-approved text-white text-[10px] font-bold uppercase mb-2">
              Featured
            </div>
            <h2 className="text-[18px] font-bold text-white mb-2 leading-tight">
              PUP Likha 2026: Student Creative Showcase
            </h2>
            <div className="flex items-center gap-3 text-white/80 text-[11px]">
              <div className="flex items-center gap-1">
                <Calendar size={12} className="text-pup-gold" />
                <span>June 30, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={12} className="text-pup-gold" />
                <span>PUP OSA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Search & Filter */}
      <div className="sticky top-[60px] z-30 bg-main-bg px-4 py-3 border-b border-border">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-border rounded-lg text-[14px] focus:outline-none focus:border-pup-maroon"
            />
          </div>
          <button 
            onClick={() => setShowFilters(true)}
            className="p-2 bg-white border border-border rounded-lg relative"
          >
            <Filter size={18} className="text-secondary-text" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-pup-maroon text-white text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
          </button>
        </div>
      </div>

      {/* Horizontal Tabs */}
      <div className="bg-main-bg border-b border-border overflow-x-auto no-scrollbar">
        <div className="flex px-4 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 text-[13px] font-bold transition-all relative ${
                activeTab === tab ? 'text-pup-maroon' : 'text-muted-text'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pup-maroon"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Event List */}
      <section className="px-4 py-6 space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-card-bg border border-border rounded-[16px] overflow-hidden flex flex-col">
            <div className="relative h-[160px]">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  event.status === 'Closing Soon' ? 'bg-red-600 text-white' : 
                  event.status === 'Open' ? 'bg-status-approved text-white' : 
                  'bg-status-pending text-white'
                }`}>
                  {event.status}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-[10px] font-mono text-muted-text mb-1">{event.code}</div>
              <h3 className="text-[16px] font-bold mb-3 leading-snug">{event.title}</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-[12px] text-secondary-text">
                  <Users size={12} className="text-muted-text" />
                  <span className="truncate">{event.organizer}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-secondary-text">
                  <Calendar size={12} className="text-muted-text" />
                  <span className={`truncate font-bold ${event.isClosingSoon ? "text-red-600" : "text-warm-gold"}`}>
                    {event.deadline}
                  </span>
                </div>
              </div>

              <button type="button" onClick={onEventDetail} className="w-full py-2.5 bg-secondary-surface text-primary-text font-bold rounded-lg text-[13px] flex items-center justify-center gap-2">
                View Event Details <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}

        <button className="w-full py-3 border border-border rounded-xl text-primary-text font-bold text-[14px] mt-2">
          Load More Events
        </button>
      </section>

      {/* Filter Bottom Sheet (Prototype Overlay) */}
      {showFilters && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)}></div>
          <div className="relative w-full bg-white rounded-t-[24px] p-6 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6"></div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-bold">Filter Events</h3>
              <button onClick={() => setShowFilters(false)} className="text-pup-maroon font-bold text-[14px]">Reset</button>
            </div>
            
            <div className="space-y-6 mb-8">
              <div>
                <label className="text-[14px] font-bold mb-3 block">Event Type</label>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Showcase', 'Contest', 'Performance'].map(type => (
                    <button key={type} className={`px-4 py-2 rounded-full border text-[13px] ${type === 'All' ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' : 'border-border'}`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-[14px] font-bold mb-3 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Visual Art', 'Photography', 'Music'].map(cat => (
                    <button key={cat} className="px-4 py-2 rounded-full border border-border text-[13px]">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowFilters(false)}
              className="w-full py-4 bg-pup-maroon text-white font-bold rounded-xl text-[16px]"
            >
              Show 8 Events
            </button>
          </div>
        </div>
      )}

      <MobileBottomNav />
    </div>
  );
}
