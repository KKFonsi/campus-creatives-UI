import { useState } from 'react';
import { 
  Bell, 
  Search, 
  Filter, 
  Plus, 
  Star, 
  MoreVertical,
  Award
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ModeratorMobileBottomNav } from './_shared/ModeratorMobileBottomNav';
import './_group.css';

const MobileHeader = () => (
  <header className="h-[56px] bg-dark-surface flex items-center justify-between px-4 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <div className="text-pup-gold font-bold text-sm tracking-tight leading-tight uppercase">
        Campus<br />Creatives
      </div>
      <div className="bg-white/10 text-pup-gold text-[8px] font-bold px-1.5 py-0.5 rounded tracking-tighter uppercase">
        Moderator
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button className="relative p-1 text-white/80 hover:text-white">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-crimson-accent rounded-full border border-dark-surface"></span>
      </button>
      <InitialsAvatar name="Maria Moderator" className="w-8 h-8 border border-white/20" textClassName="text-[11px]" />
    </div>
  </header>
);

interface FeaturedWorksPageMobileProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
}

export default function FeaturedWorksPageMobile(props: FeaturedWorksPageMobileProps = {}) {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    'All', 'Work of the Week', 'Creator of the Month', 'College Highlight', 'Moderator\'s Pick', 'Event Finalist'
  ];

  const features = [
    {
      id: 1,
      title: "Digital Sinta",
      creator: "Rafael Mendoza",
      type: "Work of the Week",
      dates: "June 12 - June 19",
      badgeClass: "bg-pup-gold text-pup-maroon",
      image: "bg-gradient-to-br from-soft-maroon to-soft-gold"
    },
    {
      id: 2,
      title: "Polytechnic Dreams",
      creator: "Maria Santos",
      type: "Creator of the Month",
      dates: "June 1 - June 30",
      badgeClass: "bg-pup-maroon text-white",
      image: "bg-gradient-to-br from-blue-50 to-soft-maroon"
    },
    {
      id: 3,
      title: "Campus Frequencies",
      creator: "Bianca Reyes",
      type: "Moderator's Pick",
      dates: "June 10 - June 17",
      badgeClass: "bg-secondary-surface text-primary-text border border-border",
      image: "bg-gradient-to-br from-soft-gold to-orange-50"
    }
  ];

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto flex flex-col mx-auto border-x border-border shadow-2xl relative">
      <MobileHeader />

      <main className="flex-1 p-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-primary-text uppercase tracking-tight">Featured Works</h1>
          <button className="p-2 text-pup-maroon bg-soft-maroon rounded-full border border-pup-maroon/10">
            <Search size={20} />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-colors uppercase tracking-tight border ${
                activeTab === tab 
                  ? 'bg-pup-maroon text-white border-pup-maroon shadow-sm' 
                  : 'bg-white text-secondary-text border-border hover:border-pup-maroon/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Featured List */}
        <div className="space-y-4">
          {features.map((item) => (
            <div key={item.id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className={`h-[180px] w-full ${item.image} relative`}>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-primary-text">
                    <MoreVertical size={16} />
                  </button>
                </div>
                <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${item.badgeClass}`}>
                  {item.type}
                </div>
              </div>
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-primary-text text-base leading-tight uppercase tracking-tight mb-1">{item.title}</h3>
                    <p className="text-xs text-secondary-text font-medium">{item.creator}</p>
                  </div>
                  <Award size={20} className="text-pup-gold flex-shrink-0" />
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-[9px] text-muted-text font-bold uppercase tracking-widest">Active Dates</div>
                    <div className="text-[11px] font-bold text-primary-text tracking-tighter uppercase">{item.dates}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-2 border border-border text-secondary-text rounded-xl font-bold text-[10px] uppercase tracking-tighter">
                      Remove
                    </button>
                    <button className="px-4 py-2 bg-soft-maroon text-pup-maroon rounded-xl font-bold text-[10px] uppercase tracking-tighter">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="absolute bottom-[84px] right-6 w-14 h-14 bg-pup-maroon text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40 border-4 border-white">
        <Plus size={24} strokeWidth={3} />
      </button>

      <ModeratorMobileBottomNav
        active="Featured"
        onDashboard={props.onDashboard}
        onPending={props.onPending}
        onReports={props.onReports}
        onFeatured={props.onFeatured}
        onOfficialContent={props.onOfficialContent}
        onHistory={props.onHistory}
      />
    </div>
  );
}
