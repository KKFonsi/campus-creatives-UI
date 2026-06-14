import { useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  Star, 
  Shield, 
  History, 
  Search, 
  Bell, 
  ChevronRight,
  MoreVertical,
  Award,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  Filter,
  ArrowRight,
  User,
  Building2,
  Calendar,
  MessageSquare,
  Layout
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
        placeholder="Search official content..."
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

export default function OfficialContentReviewPage() {
  const [activeTab, setActiveTab] = useState('Pending');
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const officialSubmissions = [
    {
      id: 1,
      org: "PUP OSA",
      orgFull: "Office of Student Affairs",
      rep: "Ana Reyes",
      title: "PUP Likha 2026 — Winners Announcement",
      type: "Competition Result",
      date: "June 12",
      status: "Pending",
      statusColor: "text-amber-700 bg-amber-50 border-amber-200",
      event: "PUP Likha 2026",
      verified: true
    },
    {
      id: 2,
      org: "CCIS College",
      orgFull: "CCIS College Office",
      rep: "Prof. Santos",
      title: "CCIS Creatives Showcase 2026",
      type: "College Event",
      date: "June 10",
      status: "Pending",
      statusColor: "text-amber-700 bg-amber-50 border-amber-200",
      event: "College Showcase",
      verified: true
    },
    {
      id: 3,
      org: "VPSA Office",
      orgFull: "Office of the Vice President for Student Affairs",
      rep: "Dr. Cruz",
      title: "Foundation Week Poster Winners",
      type: "Official Announcement",
      date: "June 8",
      status: "Approved",
      statusColor: "text-status-approved bg-status-approved/10 border-status-approved/20",
      event: "Foundation Week",
      verified: true
    },
    {
      id: 4,
      org: "CAL",
      orgFull: "College of Arts and Letters",
      rep: "Prof. Aquino",
      title: "Tinig ng PUP 2026 — Open Call Results",
      type: "Competition Result",
      date: "June 5",
      status: "Needs Revision",
      statusColor: "text-status-needs-revision bg-status-needs-revision/10 border-status-needs-revision/20",
      event: "Tinig ng PUP 2026",
      verified: true
    }
  ];

  const tabs = ['All', 'Pending', 'Approved', 'Needs Revision'];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorSidebar active="Official Content" />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-main-bg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary-text uppercase tracking-tight">Official Content Review</h1>
              <p className="text-sm text-secondary-text mt-1">Review and authorize institutional posts from colleges and offices.</p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all relative ${
                  activeTab === tab ? 'text-pup-maroon' : 'text-muted-text hover:text-secondary-text'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pup-maroon rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Submissions List */}
          <div className="space-y-4">
            {officialSubmissions
              .filter(sub => activeTab === 'All' || sub.status === activeTab)
              .map((sub) => (
              <div key={sub.id} className="space-y-4">
                <div className={`bg-card-bg border border-border rounded-xl p-4 flex items-center gap-6 hover:border-pup-maroon/20 transition-all cursor-pointer shadow-sm relative overflow-hidden ${expandedId === sub.id ? 'border-pup-maroon/30 shadow-md ring-1 ring-pup-maroon/5' : ''}`}
                     onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}>
                  
                  {/* Official Badge Overlay (Decorative) */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-pup-gold/10 rotate-45 pointer-events-none flex items-end justify-center pb-1">
                    <Shield size={12} className="text-pup-gold" />
                  </div>

                  <div className="w-14 h-14 bg-soft-maroon rounded-lg flex items-center justify-center text-pup-maroon font-bold flex-shrink-0 shadow-sm border border-pup-maroon/10">
                    <Building2 size={24} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-pup-gold text-pup-maroon text-[9px] font-bold rounded uppercase tracking-wider flex items-center gap-1">
                        <Shield size={10} strokeWidth={3} /> Official
                      </span>
                      <span className="text-xs font-bold text-pup-maroon uppercase tracking-tight">{sub.org}</span>
                      {sub.verified && <CheckCircle2 size={12} className="text-status-approved" />}
                    </div>
                    <h3 className="text-base font-bold text-primary-text truncate uppercase tracking-tight">{sub.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-[11px] text-secondary-text font-medium uppercase tracking-tight">
                      <span className="flex items-center gap-1.5"><User size={12} /> {sub.rep}</span>
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {sub.date}</span>
                      <span className="flex items-center gap-1.5"><Award size={12} /> {sub.event}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${sub.statusColor}`}>
                      {sub.status}
                    </div>
                    <div className="w-10 h-10 rounded-full hover:bg-secondary-surface flex items-center justify-center transition-colors text-muted-text">
                      <ChevronRight className={`transition-transform duration-300 ${expandedId === sub.id ? 'rotate-90' : ''}`} size={20} />
                    </div>
                  </div>
                </div>

                {/* Expanded Review Panel */}
                {expandedId === sub.id && (
                  <div className="bg-white border-x border-b border-border rounded-b-xl -mt-5 pt-8 p-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold text-muted-text uppercase tracking-widest border-b border-border pb-2">Source Information</h4>
                          <div className="flex items-center gap-4 p-4 bg-secondary-surface rounded-xl">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pup-maroon border border-border">
                              <Building2 size={24} />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-primary-text uppercase tracking-tight flex items-center gap-2">
                                {sub.orgFull}
                                <span className="px-1.5 py-0.5 bg-status-approved/10 text-status-approved text-[9px] font-bold rounded flex items-center gap-1 uppercase">
                                  <CheckCircle2 size={10} /> Verified Organization
                                </span>
                              </div>
                              <div className="text-xs text-secondary-text mt-0.5 font-medium uppercase tracking-tight">Authorized representative: {sub.rep}</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-bold text-muted-text uppercase tracking-widest border-b border-border pb-2">Content Details</h4>
                          <div className="space-y-4">
                            <div>
                              <div className="text-[10px] font-bold text-muted-text uppercase tracking-widest mb-1.5">Post Description</div>
                              <p className="text-sm text-primary-text leading-relaxed bg-secondary-surface/30 p-4 rounded-lg italic">
                                We are proud to announce the official winners of the PUP Likha 2026 competition. After careful deliberation by our board of judges, these student creators have demonstrated exceptional skill and vision.
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="aspect-video bg-secondary-surface rounded-xl border border-border flex flex-col items-center justify-center text-muted-text italic text-xs gap-2">
                                <Shield size={24} className="opacity-20" />
                                [Official Asset Preview 1]
                              </div>
                              <div className="aspect-video bg-secondary-surface rounded-xl border border-border flex flex-col items-center justify-center text-muted-text italic text-xs gap-2">
                                <Shield size={24} className="opacity-20" />
                                [Official Asset Preview 2]
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="space-y-1">
                                <div className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Target Audience</div>
                                <div className="text-xs font-bold text-primary-text uppercase tracking-tight">All PUP Students</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Publish Date</div>
                                <div className="text-xs font-bold text-primary-text uppercase tracking-tight">June 15, 2026</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Expiration</div>
                                <div className="text-xs font-bold text-primary-text uppercase tracking-tight">July 15, 2026</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-secondary-surface/50 rounded-xl p-6 border border-border space-y-4">
                          <h4 className="text-xs font-bold text-primary-text uppercase tracking-widest border-b border-border/50 pb-2">Actions</h4>
                          <div className="space-y-2">
                            <button className="w-full py-2.5 bg-pup-maroon text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-deep-maroon transition-colors shadow-sm">
                              Approve Post
                            </button>
                            <button className="w-full py-2.5 bg-white border border-border text-amber-700 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-amber-50 transition-colors">
                              Request Revision
                            </button>
                            <button className="w-full py-2.5 bg-white border border-border text-red-700 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-red-50 transition-colors">
                              Reject Submission
                            </button>
                          </div>
                          <div className="pt-2 border-t border-border/50 space-y-2">
                            <button className="w-full py-2 bg-white border border-border text-secondary-text rounded-lg font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary-surface">
                              <Calendar size={14} /> Schedule Publication
                            </button>
                            <button className="w-full py-2 bg-white border border-border text-pup-gold bg-soft-gold/10 rounded-lg font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-soft-gold/20">
                              <Star size={14} /> Mark as Campus Highlight
                            </button>
                          </div>
                        </div>

                        <div className="bg-pup-gold/5 rounded-xl p-4 border border-pup-gold/20">
                          <h4 className="text-[10px] font-bold text-warm-gold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Layout size={14} /> Official Label Preview
                          </h4>
                          <div className="bg-white p-3 rounded-lg border border-border flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-soft-maroon border border-pup-maroon/10 flex items-center justify-center text-pup-maroon">
                              <Building2 size={16} />
                            </div>
                            <div>
                              <div className="text-[10px] font-bold text-primary-text truncate uppercase tracking-tight">{sub.title}</div>
                              <div className="flex items-center gap-1 mt-0.5">
                                <span className="px-1.5 py-0.5 bg-pup-gold text-pup-maroon text-[7px] font-black rounded flex items-center gap-0.5 uppercase tracking-tighter shadow-sm border border-pup-gold/50">
                                  <Shield size={6} strokeWidth={4} /> OFFICIAL
                                </span>
                                <span className="text-[8px] font-bold text-pup-maroon uppercase tracking-tighter opacity-70">PUP OSA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
