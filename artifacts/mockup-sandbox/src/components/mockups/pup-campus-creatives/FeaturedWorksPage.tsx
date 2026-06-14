import { useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  Star, 
  Shield, 
  History, 
  ChevronRight,
  Bell,
  Search,
  Plus,
  Calendar,
  MoreVertical,
  X,
  Edit2,
  CheckCircle2,
  Trash2,
  Info,
  Clock,
  Layout,
  StarHalf,
  Award
} from 'lucide-react';
import './_group.css';

const ModeratorSidebar = ({ active }: { active: string }) => (
  <aside className="w-[240px] bg-dark-surface text-white flex flex-col flex-shrink-0 min-h-screen">
    <div className="p-6">
      <div className="text-pup-gold font-bold text-xl tracking-tight leading-tight mb-1">
        CAMPUS<br />CREATIVES
      </div>
      <div className="inline-block bg-white/10 text-pup-gold text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
        Moderator
      </div>
    </div>
    
    <nav className="flex-1 px-3 space-y-1">
      {[
        { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'Pending Reviews', icon: ClipboardList, label: 'Pending Reviews', badge: '24' },
        { id: 'Reports', icon: Flag, label: 'Reports', badge: '6' },
        { id: 'Featured Works', icon: Star, label: 'Featured Works' },
        { id: 'Official Content', icon: Shield, label: 'Official Content' },
        { id: 'Moderation History', icon: History, label: 'Moderation History' },
      ].map((item) => (
        <button
          key={item.id}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
            active === item.id 
              ? 'bg-white/10 text-white border-l-4 border-pup-maroon' 
              : 'text-white/70 hover:bg-white/5 hover:text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <item.icon size={18} />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
          {item.badge && (
            <span className="bg-pup-maroon text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              {item.badge}
            </span>
          )}
        </button>
      ))}
    </nav>
    
    <div className="p-4 border-t border-white/10">
      <button className="flex items-center gap-2 text-sm text-pup-gold hover:underline">
        <span>Switch to Student View</span>
        <ChevronRight size={14} />
      </button>
    </div>
  </aside>
);

const TopBar = ({ role = "Moderator" }) => (
  <header className="h-16 bg-card-bg border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
      <input 
        type="text" 
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 bg-secondary-surface rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-pup-maroon/20"
      />
    </div>
    
    <div className="flex items-center gap-4">
      <button className="relative p-2 text-secondary-text hover:bg-secondary-surface rounded-full transition-colors">
        <Bell size={20} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson-accent rounded-full border-2 border-card-bg"></span>
      </button>
      <div className="h-8 w-px bg-border mx-2"></div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-semibold text-primary-text leading-tight text-right">Maria Moderator</div>
          <div className="text-[11px] font-bold text-pup-maroon uppercase tracking-wider">{role}</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-soft-maroon border border-pup-maroon/20 overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </header>
);

export default function FeaturedWorksPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentFeatures = [
    {
      id: 1,
      title: "Digital Sinta",
      creator: "Rafael Mendoza",
      college: "CCIS",
      type: "Work of the Week",
      badgeColor: "bg-pup-gold",
      dates: "June 12 - June 19",
      recognition: "Work of the Week — June 2026",
      image: "bg-gradient-to-br from-soft-maroon to-soft-gold"
    },
    {
      id: 2,
      title: "Polytechnic Dreams",
      creator: "Maria Santos",
      college: "CAL",
      type: "Creator of the Month",
      badgeColor: "bg-pup-maroon text-white",
      dates: "June 1 - June 30",
      recognition: "Creator of the Month — June",
      image: "bg-gradient-to-br from-blue-100 to-soft-maroon"
    },
    {
      id: 3,
      title: "Campus Frequencies",
      creator: "Bianca Reyes",
      college: "COC",
      type: "Moderator's Pick",
      badgeColor: "bg-secondary-surface text-primary-text",
      dates: "June 10 - June 17",
      recognition: "Staff Favorite June '26",
      image: "bg-gradient-to-br from-soft-gold to-orange-50"
    },
    {
      id: 4,
      title: "Pasig at Dusk",
      creator: "Ben Santos",
      college: "COC",
      type: "College Highlight",
      badgeColor: "bg-crimson-accent text-white",
      dates: "June 8 - June 15",
      recognition: "COC College Highlight",
      image: "bg-gradient-to-br from-soft-maroon to-deep-maroon"
    }
  ];

  const collegeHighlights = [
    { id: 'CCIS', name: 'CCIS' },
    { id: 'CAL', name: 'CAL' },
    { id: 'CADBE', name: 'CADBE' },
    { id: 'CE', name: 'CE' },
    { id: 'COC', name: 'COC' },
    { id: 'CBA', name: 'CBA' }
  ];

  const candidates = [
    { id: 1, title: "Railway Sketches", creator: "Rafael Mendoza", college: "CCIS", type: "Visual Art" },
    { id: 2, title: "Sta. Mesa After Rain", creator: "Bianca Reyes", college: "COC", type: "Photography" },
    { id: 3, title: "Tinig ng Bayan", creator: "Maria Santos", college: "CAL", type: "Music" }
  ];

  const scheduled = [
    { id: 1, name: "Polytechnic Pulse", type: "Work of the Week", start: "June 20", end: "June 27", status: "Scheduled" }
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorSidebar active="Featured Works" />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-main-bg">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-text uppercase tracking-tight">Featured Works</h1>
            <button 
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-pup-maroon text-white rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-deep-maroon transition-colors shadow-sm uppercase tracking-wide"
            >
              <Plus size={18} />
              Add Feature
            </button>
          </div>

          {/* Current Homepage Features */}
          <section>
            <h2 className="text-sm font-bold text-white bg-pup-maroon px-4 py-1.5 inline-block rounded-t-lg uppercase tracking-widest mb-0">
              Current Homepage Features
            </h2>
            <div className="p-4 bg-card-bg rounded-b-xl rounded-r-xl border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentFeatures.map((item) => (
                  <div key={item.id} className="bg-white border border-border rounded-xl overflow-hidden group relative shadow-sm">
                    <div className={`aspect-[3/2] ${item.image} relative`}>
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        <button className="p-1.5 bg-white/90 backdrop-blur-sm text-red-600 rounded-full hover:bg-white shadow-sm">
                          <Trash2 size={14} />
                        </button>
                        <button className="p-1.5 bg-white/90 backdrop-blur-sm text-pup-maroon rounded-full hover:bg-white shadow-sm">
                          <Edit2 size={14} />
                        </button>
                      </div>
                      <div className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${item.badgeColor}`}>
                        {item.type}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-primary-text text-sm truncate">{item.title}</h3>
                      <p className="text-xs text-secondary-text mb-2">{item.creator} • {item.college}</p>
                      <div className="flex flex-col gap-1.5 border-t border-border pt-2">
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-text uppercase font-bold tracking-tight">
                          <Calendar size={12} />
                          {item.dates}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-pup-maroon font-bold uppercase tracking-tight">
                          <Award size={12} />
                          {item.recognition}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* College Highlights */}
          <section>
            <h2 className="text-sm font-bold text-primary-text uppercase tracking-widest px-1 mb-4">College Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {collegeHighlights.map((item) => (
                <div key={item.id} className="bg-card-bg border border-border rounded-xl p-3 flex flex-col items-center gap-3 hover:border-pup-maroon/40 transition-colors shadow-sm group">
                  <div className="w-full aspect-square bg-secondary-surface rounded-lg flex items-center justify-center text-pup-maroon font-bold text-xl group-hover:scale-105 transition-transform duration-300 italic opacity-40">
                    [{item.id}]
                  </div>
                  <div className="text-center">
                    <div className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[9px] font-bold rounded uppercase tracking-wider mb-1">College Highlight</div>
                    <div className="text-xs font-bold text-primary-text uppercase">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature Candidates */}
            <section className="space-y-4">
              <div>
                <h2 className="text-sm font-bold text-primary-text uppercase tracking-widest px-1">Feature Candidates</h2>
                <p className="text-xs text-muted-text italic px-1 mt-1">Candidates are works flagged by moderators during review</p>
              </div>
              <div className="space-y-3">
                {candidates.map((item) => (
                  <div key={item.id} className="bg-card-bg border border-border rounded-xl p-3 flex items-center gap-4 hover:border-pup-maroon/20 transition-colors group">
                    <div className="w-16 h-16 bg-secondary-surface rounded-lg flex-shrink-0 flex items-center justify-center text-pup-maroon/20 italic text-[10px]">
                      IMG
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-sm font-bold text-primary-text truncate">{item.title}</h4>
                        <span className="px-1.5 py-0.5 bg-soft-gold text-warm-gold text-[9px] font-bold rounded uppercase tracking-tight flex items-center gap-0.5">
                          <Star size={8} /> Candidate
                        </span>
                      </div>
                      <p className="text-xs text-secondary-text truncate">{item.creator} • {item.college}</p>
                    </div>
                    <button className="px-3 py-1.5 bg-pup-maroon text-white text-xs font-bold rounded-lg hover:bg-deep-maroon transition-colors uppercase tracking-tight">
                      Add to Featured
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Scheduled Features */}
            <section className="space-y-4">
              <h2 className="text-sm font-bold text-primary-text uppercase tracking-widest px-1">Scheduled Features</h2>
              <div className="bg-card-bg border border-border rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary-surface/50 border-b border-border">
                    <tr>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest">Work Name</th>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest">Type</th>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest">Date Range</th>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {scheduled.map((item) => (
                      <tr key={item.id} className="hover:bg-secondary-surface/20 transition-colors">
                        <td className="px-4 py-3 font-semibold text-primary-text">{item.name}</td>
                        <td className="px-4 py-3 text-xs text-secondary-text">{item.type}</td>
                        <td className="px-4 py-3 text-xs text-muted-text tracking-tight uppercase">{item.start} — {item.end}</td>
                        <td className="px-4 py-3 text-right">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100 uppercase tracking-tighter">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Add Feature Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card-bg w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-border">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-secondary-surface/30">
              <h3 className="font-bold text-primary-text uppercase tracking-tight">Add Featured Work</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 hover:bg-secondary-surface rounded-lg">
                <X size={20} className="text-muted-text" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Search Work</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type work title or creator..."
                      className="w-full pl-9 pr-4 py-2 bg-secondary-surface border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pup-maroon/20"
                    />
                  </div>
                  {searchQuery.toLowerCase().includes('digital') && (
                    <div className="mt-2 p-2 bg-soft-maroon border border-pup-maroon/20 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/50 rounded text-[8px] flex items-center justify-center">IMG</div>
                        <div>
                          <div className="text-xs font-bold text-pup-maroon">Digital Sinta</div>
                          <div className="text-[10px] text-secondary-text">Rafael Mendoza</div>
                        </div>
                      </div>
                      <CheckCircle2 size={16} className="text-pup-maroon" />
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Feature Type</label>
                  <select className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-sm focus:outline-none appearance-none font-medium">
                    <option>Work of the Week</option>
                    <option>Creator of the Month</option>
                    <option>Moderator's Pick</option>
                    <option>College Highlight</option>
                    <option>Event Finalist</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Display Location</label>
                  <select className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-sm focus:outline-none appearance-none font-medium">
                    <option>Homepage Hero</option>
                    <option>Explore Spotlight</option>
                    <option>College Showcase Header</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Start Date</label>
                    <input type="date" className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-xs" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">End Date</label>
                    <input type="date" className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-xs" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Recognition Label</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Work of the Week — June 2026"
                    className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Editorial Caption</label>
                  <textarea 
                    placeholder="Why was this work selected?"
                    className="w-full h-24 p-2 bg-secondary-surface border border-border rounded-lg text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Preview Preview</label>
                <div className="bg-secondary-surface rounded-xl p-4 border border-border space-y-4">
                  <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm max-w-[240px] mx-auto">
                    <div className="aspect-[3/2] bg-gradient-to-br from-soft-maroon to-soft-gold relative">
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-pup-gold">
                        Work of the Week
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-bold text-primary-text mb-0.5 uppercase tracking-tight">Digital Sinta</div>
                      <div className="text-[10px] text-secondary-text mb-2">Rafael Mendoza • CCIS</div>
                      <div className="pt-2 border-t border-border space-y-1">
                        <div className="flex items-center gap-1.5 text-[9px] text-muted-text font-bold uppercase">
                          <Calendar size={10} /> June 12 - June 19
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] text-pup-maroon font-bold uppercase">
                          <Award size={10} /> Work of the Week — June 2026
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg border border-border text-[11px] leading-relaxed text-secondary-text italic">
                    "This striking digital illustration capture's the spirit of sinta through a modern, polytechnic lens..." (Editorial Preview)
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                  <Info className="text-amber-600 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-tight">Feature Capacity Warning</div>
                    <p className="text-[10px] text-amber-700 mt-0.5 font-medium leading-normal italic">
                      Currently 4 of 6 active slots used for Homepage Hero. Adding this will occupy a slot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-border bg-secondary-surface/30 flex items-center justify-between">
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-sm font-bold text-secondary-text hover:underline uppercase tracking-widest"
              >
                Cancel
              </button>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-pup-maroon text-pup-maroon rounded-lg text-xs font-bold hover:bg-soft-maroon transition-colors uppercase tracking-widest">
                  Preview on Home
                </button>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 bg-pup-maroon text-white rounded-lg text-xs font-bold hover:bg-deep-maroon transition-colors shadow-sm uppercase tracking-widest"
                >
                  Save Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
