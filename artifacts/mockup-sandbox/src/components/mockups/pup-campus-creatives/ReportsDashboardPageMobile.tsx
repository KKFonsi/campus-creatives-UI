import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Flag, 
  Clock, 
  Shield, 
  ShieldAlert, 
  AlertCircle, 
  MoreVertical,
  ChevronLeft,
  Filter,
  ArrowRight,
  LayoutDashboard,
  ClipboardList,
  MoreHorizontal
} from 'lucide-react';
import './_group.css';

export function ReportsDashboardPageMobile() {
  const [activeTab, setActiveTab] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const tabs = ['All', 'Works', 'Comments', 'Copyright', 'Resolved'];

  const stats = [
    { label: 'Open', value: '4', color: 'text-status-rejected', bg: 'bg-status-rejected/10', icon: Flag },
    { label: 'Review', value: '2', color: 'text-status-pending', bg: 'bg-status-pending/10', icon: Clock },
    { label: 'Resolved', value: '18', color: 'text-status-approved', bg: 'bg-status-approved/10', icon: Shield },
    { label: 'Escalated', value: '1', color: 'text-crimson-accent', bg: 'bg-crimson-accent/10', icon: ShieldAlert },
    { label: 'Copyright', value: '3', color: 'text-status-needs-revision', bg: 'bg-status-needs-revision/10', icon: AlertCircle },
    { label: 'Comments', value: '2', color: 'text-secondary-text', bg: 'bg-secondary-surface', icon: MoreHorizontal },
  ];

  const reports = [
    {
      id: 'CC-RPT-2026-0031',
      reason: 'Suspected stolen work',
      target: 'Digital Sinta',
      date: 'June 11',
      severity: 'High',
      status: 'Open',
      thumbnail: '/__mockup/images/thumbnail_1.jpg'
    },
    {
      id: 'CC-RPT-2026-0028',
      reason: 'Copyright concern',
      target: 'Engineering in Motion',
      date: 'June 10',
      severity: 'High',
      status: 'Under Review',
      thumbnail: '/__mockup/images/thumbnail_4.jpg'
    },
    {
      id: 'CC-RPT-2026-0026',
      reason: 'Inappropriate content',
      target: 'Abstract Forms 3',
      date: 'June 9',
      severity: 'Medium',
      status: 'Open',
      thumbnail: '/__mockup/images/thumbnail_2.jpg'
    }
  ];

  const getSeverityColor = (sev: string) => {
    switch(sev) {
      case 'High': return 'text-status-rejected border-status-rejected/30 bg-status-rejected/5';
      case 'Medium': return 'text-status-needs-revision border-status-needs-revision/30 bg-status-needs-revision/5';
      default: return 'text-secondary-text border-border bg-main-bg';
    }
  };

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto flex flex-col pb-32">
      {/* Mobile Top Header */}
      <header className="h-[56px] bg-dark-surface flex items-center justify-between px-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pup-gold rounded flex items-center justify-center text-dark-surface font-bold text-sm">CC</div>
          <span className="text-pup-gold text-[14px] font-bold tracking-tight uppercase">Reports</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white/80 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-pup-maroon text-white text-[10px] flex items-center justify-center rounded-full border-2 border-dark-surface">6</span>
          </button>
          <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-pup-maroon flex items-center justify-center text-white text-[12px] font-bold">
            M
          </div>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <section className="p-4 grid grid-cols-3 gap-2">
        {stats.map((stat, i) => (
          <div key={i} className="bg-card-bg p-3 rounded-xl border border-border shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <stat.icon size={14} className={stat.color} />
              <span className={`text-[16px] font-bold ${stat.color}`}>{stat.value}</span>
            </div>
            <div className="text-[9px] font-bold text-secondary-text uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Tabs */}
      <div className="border-b border-border bg-card-bg overflow-x-auto no-scrollbar">
        <div className="flex px-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-4 text-[13px] font-bold whitespace-nowrap relative ${
                activeTab === tab ? 'text-pup-maroon' : 'text-secondary-text'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pup-maroon" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Filter Row */}
      <div className="p-4 flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
          <input 
            type="text" 
            placeholder="Search reports..." 
            className="w-full pl-9 pr-4 py-2 bg-secondary-surface border border-border rounded-lg text-[14px] outline-none"
          />
        </div>
        <button 
          onClick={() => setShowFilters(true)}
          className="px-4 py-2 bg-card-bg border border-border rounded-lg flex items-center gap-2 text-[14px] font-medium"
        >
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>

      {/* Report List */}
      <section className="px-4 space-y-3">
        {reports.map((report) => (
          <div key={report.id} className="bg-card-bg rounded-xl border border-border shadow-sm overflow-hidden p-4">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary-surface overflow-hidden shrink-0 border border-border">
                <img src={report.thumbnail} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[9px] font-bold uppercase rounded tracking-wide">
                    {report.reason}
                  </span>
                </div>
                <h3 className="text-[14px] font-bold text-primary-text truncate">{report.target}</h3>
                <div className="text-[11px] text-muted-text mt-0.5">{report.id} • {report.date}</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border/60">
              <div className="flex gap-2">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${getSeverityColor(report.severity)}`}>
                  {report.severity}
                </span>
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                  report.status === 'Open' ? 'bg-status-rejected/10 text-status-rejected' : 'bg-status-pending/10 text-status-pending'
                }`}>
                  {report.status}
                </span>
              </div>
              <button className="text-pup-maroon text-[13px] font-bold flex items-center gap-1">
                Open Report <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Filter Bottom Sheet */}
      {showFilters && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-card-bg rounded-t-2xl p-4 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6" />
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-bold">Filter Reports</h3>
              <button className="text-[14px] font-bold text-pup-maroon" onClick={() => setShowFilters(false)}>Clear All</button>
            </div>
            
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-[12px] font-bold text-secondary-text uppercase mb-3">Report Type</label>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Works', 'Comments', 'Creators', 'Copyright'].map(type => (
                    <button key={type} className={`px-4 py-2 rounded-full border text-[13px] font-medium ${type === 'All' ? 'bg-pup-maroon text-white border-pup-maroon' : 'bg-white border-border text-primary-text'}`}>{type}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-secondary-text uppercase mb-3">Severity</label>
                <div className="flex gap-2">
                  {['All', 'High', 'Medium', 'Low'].map(sev => (
                    <button key={sev} className={`flex-1 py-2 rounded-lg border text-[13px] font-medium ${sev === 'All' ? 'bg-pup-maroon text-white border-pup-maroon' : 'bg-white border-border text-primary-text'}`}>{sev}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-secondary-text uppercase mb-3">Status</label>
                <div className="space-y-2">
                  {['All', 'Open', 'Under Review', 'Escalated', 'Resolved'].map(status => (
                    <label key={status} className="flex items-center justify-between p-3 border border-border rounded-xl">
                      <span className="text-[14px] font-medium">{status}</span>
                      <input type="radio" name="status" className="w-4 h-4 accent-pup-maroon" defaultChecked={status === 'All'} />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowFilters(false)}
              className="w-full mt-6 py-4 bg-pup-maroon text-white rounded-xl font-bold"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav (Moderator) */}
      <nav className="fixed bottom-0 left-0 right-0 h-[68px] bg-dark-surface border-t border-white/10 px-6 flex items-center justify-between z-50">
        <button className="flex flex-col items-center gap-1 text-white/50">
          <LayoutDashboard size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Dashboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/50">
          <ClipboardList size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Reviews</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-pup-gold">
          <Flag size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Reports</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/50">
          <MoreHorizontal size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">More</span>
        </button>
      </nav>
    </div>
  );
}
