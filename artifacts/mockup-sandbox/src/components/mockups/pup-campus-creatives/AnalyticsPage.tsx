import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Tag, 
  Calendar, 
  Award, 
  Flag, 
  BarChart3, 
  Activity, 
  Shield, 
  Search, 
  Bell, 
  ChevronRight,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Heart,
  Bookmark,
  MessageCircle,
  Share2,
  CheckCircle,
  Clock,
  Palette
} from 'lucide-react';
import './_group.css';

export default function AnalyticsPage() {
  const stats = [
    { label: "Total Approved Works", value: "892", change: "+12%", trend: "up", icon: <CheckCircle className="text-status-approved" /> },
    { label: "Active Creators", value: "347", change: "+8%", trend: "up", icon: <Palette className="text-pup-maroon" /> },
    { label: "Appreciations", value: "12,847", change: "+24%", trend: "up", icon: <Heart className="text-crimson-accent" /> },
    { label: "Saves", value: "4,290", change: "+18%", trend: "up", icon: <Bookmark className="text-pup-gold" /> },
    { label: "Event Participation", value: "234", change: "+15%", trend: "up", icon: <Calendar className="text-status-info" /> },
    { label: "Pending Reviews", value: "24", change: "-5%", trend: "down", icon: <Clock className="text-status-pending" /> }
  ];

  const categories = [
    { name: "Digital Art", count: 142, width: "100%" },
    { name: "Photography", count: 128, width: "90%" },
    { name: "Visual Art", count: 89, width: "63%" },
    { name: "Graphic Design", count: 76, width: "54%" },
    { name: "Music", count: 58, width: "41%" },
    { name: "Film", count: 45, width: "32%" },
    { name: "Animation", count: 34, width: "24%" },
    { name: "Crafts", count: 28, width: "20%" },
    { name: "Writing", count: 24, width: "17%" },
    { name: "Architecture", count: 21, width: "15%" },
    { name: "Fashion", count: 18, width: "13%" },
    { name: "UI/UX Design", count: 15, width: "11%" },
    { name: "3D Modeling", count: 12, width: "9%" },
    { name: "Sculpture", count: 10, width: "7%" },
    { name: "Performance Art", count: 8, width: "6%" },
    { name: "Coding/Generative", count: 5, width: "4%" }
  ];

  const colleges = [
    { name: "CCIS", count: 234, creators: 89, width: "100%" },
    { name: "CAL", count: 187, creators: 64, width: "80%" },
    { name: "COC", count: 156, creators: 52, width: "67%" },
    { name: "CADBE", count: 134, creators: 48, width: "57%" },
    { name: "CBA", count: 89, creators: 31, width: "38%" },
    { name: "CE", count: 67, creators: 24, width: "29%" },
    { name: "CS", count: 54, creators: 19, width: "23%" },
    { name: "CSSD", count: 42, creators: 15, width: "18%" }
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      {/* Admin Sidebar */}
      <aside className="w-[240px] bg-dark-surface text-white flex flex-col shrink-0">
        <div className="p-6">
          <div className="text-pup-gold text-xl tracking-tight mb-1">
            <span className="font-bold">PUP:</span>
            <span className="font-medium"> Campus Creatives</span>
          </div>
          <div className="inline-block px-2 py-0.5 bg-pup-gold/20 rounded text-[10px] font-bold text-pup-gold tracking-wider">
            ADMIN
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem icon={<Users size={20} />} label="Users" />
          <NavItem icon={<Building2 size={20} />} label="Colleges" />
          <NavItem icon={<Tag size={20} />} label="Categories" />
          <NavItem icon={<Calendar size={20} />} label="Events" />
          <NavItem icon={<Award size={20} />} label="Recognition" />
          <NavItem icon={<Flag size={20} />} label="Reports" />
          <NavItem icon={<BarChart3 size={20} />} label="Analytics" active />
          <NavItem icon={<Activity size={20} />} label="Activity Log" />
          <NavItem icon={<Shield size={20} />} label="Roles" />
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <span>Switch to Student View</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card-bg border-b border-border flex items-center justify-between px-6 shrink-0">
          <h2 className="text-lg font-bold text-primary-text tracking-tight">Platform Analytics</h2>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text group-focus-within:text-pup-maroon transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search metrics..." 
                className="pl-10 pr-4 py-2 bg-main-bg border border-border rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-pup-maroon/20 transition-all"
              />
            </div>
            <button className="p-2 text-secondary-text hover:bg-secondary-surface rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pup-maroon rounded-full border-2 border-card-bg"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <div className="text-right">
                <div className="text-sm font-bold text-primary-text">Admin One</div>
                <div className="text-[11px] text-muted-text font-medium uppercase tracking-wider">System Admin</div>
              </div>
              <div className="w-9 h-9 bg-pup-maroon rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-sm">
                A1
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-main-bg">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary-text">Insights & Reports</h1>
                <p className="text-secondary-text mt-1 text-lg">Detailed performance and engagement metrics for the platform.</p>
              </div>
              <div className="flex bg-card-bg border border-border rounded-xl p-1 shadow-sm">
                {["Last 7 Days", "Last 30 Days", "Semester", "Academic Year", "Custom Range"].map((range) => (
                  <button 
                    key={range}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      range === 'Semester' 
                        ? 'bg-pup-maroon text-white shadow-md shadow-pup-maroon/20' 
                        : 'text-secondary-text hover:bg-secondary-surface'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-card-bg border border-border rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-main-bg flex items-center justify-center border border-border">
                      {React.cloneElement(stat.icon as React.ReactElement, { size: 20 } as any)}
                    </div>
                    <div className={`flex items-center text-[11px] font-bold ${
                      stat.trend === 'up' ? 'text-status-approved' : 'text-status-rejected'
                    }`}>
                      {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary-text">{stat.value}</div>
                  <div className="text-[11px] font-medium text-muted-text uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Works Submitted Over Time (ASCII-ish chart) */}
              <div className="lg:col-span-2 bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-bold text-primary-text">Works Submitted Over Time</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-pup-maroon"></div>
                      <span className="text-[11px] font-medium text-secondary-text uppercase tracking-wider">Submissions</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-64 flex items-end justify-between gap-4 px-4 border-b border-border pb-2">
                   {/* Y-axis labels */}
                   <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] text-muted-text -translate-x-full pr-4">
                      <span>150</span>
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                   </div>

                   {/* Grid lines */}
                   <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      <div className="w-full border-t border-border/50 border-dashed"></div>
                      <div className="w-full border-t border-border/50 border-dashed"></div>
                      <div className="w-full border-t border-border/50 border-dashed"></div>
                   </div>

                   {/* Bars */}
                   {[
                     { m: 'Jan', h: '30%', v: 45 },
                     { m: 'Feb', h: '45%', v: 67 },
                     { m: 'Mar', h: '60%', v: 89 },
                     { m: 'Apr', h: '85%', v: 123 },
                     { m: 'May', h: '68%', v: 98 },
                     { m: 'Jun', h: '100%', v: 142 }
                   ].map((bar, i) => (
                     <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                        <div className="w-full max-w-[40px] bg-pup-maroon rounded-t-lg transition-all duration-500 hover:bg-deep-maroon cursor-pointer group-hover:scale-x-110" style={{ height: bar.h }}>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {bar.v}
                          </div>
                        </div>
                        <span className="text-xs font-bold text-secondary-text uppercase tracking-tighter">{bar.m}</span>
                     </div>
                   ))}
                </div>
              </div>

              {/* Engagement Summary */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-text mb-6">Engagement Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Appreciations", value: "12,847", icon: <Heart size={18} className="text-crimson-accent" /> },
                    { label: "Comments", value: "2,341", icon: <MessageCircle size={18} className="text-status-info" /> },
                    { label: "Shares", value: "891", icon: <Share2 size={18} className="text-status-approved" /> },
                    { label: "New Followers", value: "234", icon: <Users size={18} className="text-pup-maroon" /> }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-main-bg rounded-xl border border-border">
                       <div className="mb-2">{item.icon}</div>
                       <div className="text-xl font-bold text-primary-text">{item.value}</div>
                       <div className="text-[10px] font-bold text-muted-text uppercase tracking-wider">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <h4 className="text-[11px] font-bold text-muted-text uppercase tracking-wider">Moderation Outcomes</h4>
                  <div className="flex gap-2">
                    <div className="flex-1 text-center p-2 rounded-lg bg-status-approved/10 border border-status-approved/20">
                      <div className="text-lg font-bold text-status-approved">89%</div>
                      <div className="text-[9px] font-bold text-secondary-text uppercase">Approved</div>
                    </div>
                    <div className="flex-1 text-center p-2 rounded-lg bg-status-needs-revision/10 border border-status-needs-revision/20">
                      <div className="text-lg font-bold text-status-needs-revision">7%</div>
                      <div className="text-[9px] font-bold text-secondary-text uppercase">Revision</div>
                    </div>
                    <div className="flex-1 text-center p-2 rounded-lg bg-status-rejected/10 border border-status-rejected/20">
                      <div className="text-lg font-bold text-status-rejected">3%</div>
                      <div className="text-[9px] font-bold text-secondary-text uppercase">Rejected</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Works by Category */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-primary-text">Works by Category</h3>
                  <button className="text-xs font-bold text-pup-maroon hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {categories.slice(0, 10).map((cat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-primary-text">{cat.name}</span>
                        <span className="text-muted-text">{cat.count}</span>
                      </div>
                      <div className="h-2 w-full bg-secondary-surface rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-pup-maroon rounded-full transition-all duration-1000" 
                          style={{ width: cat.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Creators by College */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-primary-text">Creators by College</h3>
                  <button className="text-xs font-bold text-pup-maroon hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {colleges.map((col, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <div className="flex items-center gap-2">
                           <span className="text-primary-text font-bold">{col.name}</span>
                           <span className="text-muted-text text-[10px]">{col.creators} creators</span>
                        </div>
                        <span className="text-muted-text font-bold">{col.count} works</span>
                      </div>
                      <div className="h-2 w-full bg-secondary-surface rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-pup-gold rounded-full transition-all duration-1000" 
                          style={{ width: col.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Participation & Most Saved */}
              <div className="space-y-8">
                <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-primary-text mb-6">Event Participation</h3>
                  <div className="space-y-4">
                    {[
                      { title: "PUP Likha 2026", count: 89, color: "bg-status-approved" },
                      { title: "Guhit Iskolar", count: 67, color: "bg-pup-gold" },
                      { title: "CTC Challenge", count: 45, color: "bg-pup-maroon" }
                    ].map((event, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className={`w-2 h-10 rounded-full ${event.color}`}></div>
                         <div className="flex-1">
                            <div className="text-sm font-bold text-primary-text">{event.title}</div>
                            <div className="text-[11px] text-muted-text uppercase font-bold tracking-wider">{event.count} Entries</div>
                         </div>
                         <ChevronRight size={16} className="text-muted-text" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-primary-text mb-6">Most Saved Works</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Digital Sinta", creator: "Rafael Mendoza", saves: 421 },
                      { title: "Railway Sketches", creator: "Rafael Mendoza", saves: 387 },
                      { title: "Pasig at Dusk", creator: "Bianca Reyes", saves: 312 },
                      { title: "Tinig ng Bayan", creator: "Maria Santos", saves: 289 },
                      { title: "Sta. Mesa After Rain", creator: "Bianca Reyes", saves: 245 }
                    ].map((work, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <span className="w-5 text-sm font-bold text-muted-text">{i + 1}</span>
                         <div className="flex-1">
                            <div className="text-sm font-bold text-primary-text leading-tight">{work.title}</div>
                            <div className="text-[11px] text-secondary-text">{work.creator}</div>
                         </div>
                         <div className="flex items-center gap-1 text-[11px] font-bold text-pup-gold">
                            <Bookmark size={12} fill="currentColor" />
                            {work.saves}
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div 
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
        active 
          ? 'bg-white/10 text-white' 
          : 'text-white/60 hover:text-white hover:bg-white/5'
      }`}
    >
      <span className={active ? 'text-pup-gold' : ''}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
