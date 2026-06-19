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
  Filter,
  Download,
  Calendar,
  ExternalLink,
  CheckCircle2,
  XCircle,
  RefreshCw,
  AlertTriangle,
  ChevronDown,
  User,
  MoreVertical,
  Clock,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ModeratorDesktopSidebar } from './_shared/ModeratorDesktopSidebar';
import './_group.css';

interface ModeratorNavigationProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

const ModeratorSidebar = ({ active, navigation }: { active: string; navigation?: ModeratorNavigationProps }) => (
  <aside className="w-[240px] bg-dark-surface text-white flex flex-col flex-shrink-0 min-h-screen">
    <div className="p-6 text-center">
      <div className="text-pup-gold font-bold text-xl tracking-tight leading-tight mb-1">
        CAMPUS<br />CREATIVES
      </div>
      <div className="inline-block bg-white/10 text-pup-gold text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
        Moderator
      </div>
    </div>
    
    <nav className="flex-1 px-3 space-y-1">
      {[
        { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard', onClick: navigation?.onDashboard },
        { id: 'Pending Reviews', icon: ClipboardList, label: 'Pending Reviews', badge: '24', onClick: navigation?.onPending },
        { id: 'Reports', icon: Flag, label: 'Reports', badge: '6', onClick: navigation?.onReports },
        { id: 'Featured Works', icon: Star, label: 'Featured Works', onClick: navigation?.onFeatured },
        { id: 'Official Content', icon: Shield, label: 'Official Content', onClick: navigation?.onOfficialContent },
        { id: 'Events', icon: Calendar, label: 'Events', onClick: navigation?.onEvents },
        { id: 'Moderation History', icon: History, label: 'Moderation History', onClick: navigation?.onHistory },
      ].map((item) => (
        <button
          key={item.id}
          onClick={item.onClick}
            className={`w-full flex items-center justify-between border-l-4 px-3 py-2 rounded-lg transition-colors ${
              active === item.id 
              ? 'bg-white/10 text-white border-pup-gold' 
              : 'border-transparent text-white/70 hover:bg-white/5 hover:text-white'
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
        placeholder="Search history..."
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
        <InitialsAvatar name="Maria Moderator" className="w-10 h-10 border border-pup-maroon/20" textClassName="text-xs" />
      </div>
    </div>
  </header>
);

export default function ModerationHistoryPage(props: ModeratorNavigationProps = {}) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const historyEntries = [
    {
      id: 1,
      date: "June 14, 2026",
      time: "9:21 AM",
      moderator: "Maria Moderator",
      action: "Approved",
      actionColor: "text-status-approved bg-status-approved/10 border-status-approved/20",
      icon: <CheckCircle2 size={14} />,
      work: "Campus Frequencies / CC-WORK-0132",
      prevStatus: "Pending Review",
      newStatus: "Approved",
      note: "Strong composition and clear institutional relevance. All guidelines met."
    },
    {
      id: 2,
      date: "June 14, 2026",
      time: "8:45 AM",
      moderator: "Maria Moderator",
      action: "Requested Revision",
      actionColor: "text-status-needs-revision bg-status-needs-revision/10 border-status-needs-revision/20",
      icon: <RefreshCw size={14} />,
      work: "Railway Sketches / CC-WORK-0119",
      prevStatus: "Pending Review",
      newStatus: "Needs Revision",
      note: "Alt text + ownership clarification needed. Specifically concerning the second illustration source."
    },
    {
      id: 3,
      date: "June 13, 2026",
      time: "4:12 PM",
      moderator: "Carlos Moderator",
      action: "Rejected",
      actionColor: "text-status-rejected bg-status-rejected/10 border-status-rejected/20",
      icon: <XCircle size={14} />,
      work: "Abstract Forms 3 / CC-WORK-0118",
      prevStatus: "Pending Review",
      newStatus: "Rejected",
      note: "Copyright issue confirmed. Content matches external commercial portfolio without license."
    },
    {
      id: 4,
      date: "June 13, 2026",
      time: "2:30 PM",
      moderator: "Maria Moderator",
      action: "Featured",
      actionColor: "text-pup-maroon bg-soft-gold/30 border-pup-gold/30",
      icon: <Star size={14} />,
      work: "Digital Sinta / CC-WORK-0148",
      prevStatus: "Approved",
      newStatus: "Featured",
      note: "Nominated Work of Week. Exceptional technical execution and student engagement potential."
    },
    {
      id: 5,
      date: "June 13, 2026",
      time: "11:00 AM",
      moderator: "Carlos Moderator",
      action: "Resolved Report",
      actionColor: "text-status-approved bg-status-approved/10 border-status-approved/20",
      icon: <CheckCircle2 size={14} />,
      work: "CC-RPT-0019 / Misleading info",
      prevStatus: "Open",
      newStatus: "Resolved",
      note: "No violation found. Description is factually accurate to the creator's intent."
    },
    {
      id: 6,
      date: "June 12, 2026",
      time: "3:45 PM",
      moderator: "Maria Moderator",
      action: "Removed Content",
      actionColor: "text-white bg-crimson-accent",
      icon: <AlertTriangle size={14} />,
      work: "Stolen Pixels / CC-WORK-0105",
      prevStatus: "Approved",
      newStatus: "Removed",
      note: "Confirmed copyright theft after senior review."
    },
    {
      id: 7,
      date: "June 12, 2026",
      time: "1:20 PM",
      moderator: "Carlos Moderator",
      action: "Escalated",
      actionColor: "text-orange-700 bg-orange-100 border-orange-200",
      icon: <ChevronRight className="rotate-[-45deg]" size={14} />,
      work: "CC-RPT-0022 / Copyright concern",
      prevStatus: "Open",
      newStatus: "Escalated",
      note: "Requires legal review of source material."
    }
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar {...props} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-main-bg">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-text uppercase tracking-tight">Moderation History</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border text-secondary-text rounded-lg text-sm font-bold hover:bg-secondary-surface transition-colors shadow-sm uppercase tracking-wide">
              <Download size={18} />
              Export
            </button>
          </div>

          {/* Filter Bar */}
          <div className="bg-card-bg p-4 rounded-xl border border-border shadow-sm space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest px-1">Moderator</label>
                <select className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-xs font-semibold focus:outline-none appearance-none">
                  <option>All Moderators</option>
                  <option>Maria Moderator</option>
                  <option>Carlos Moderator</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest px-1">Action</label>
                <select className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-xs font-semibold focus:outline-none appearance-none">
                  <option>All Actions</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                  <option>Requested Revision</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest px-1">Status</label>
                <select className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-xs font-semibold focus:outline-none appearance-none">
                  <option>All Statuses</option>
                  <option>Pending</option>
                  <option>Resolved</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest px-1">Date Range</label>
                <div className="relative">
                  <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-text" size={14} />
                  <input type="text" placeholder="Last 30 Days" className="w-full pl-8 pr-2 py-2 bg-secondary-surface border border-border rounded-lg text-xs font-semibold focus:outline-none" />
                </div>
              </div>
              <div className="space-y-1 lg:col-span-2">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest px-1">Submission Ref</label>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-text" size={14} />
                  <input type="text" placeholder="e.g. CC-WORK-0148" className="w-full pl-8 pr-2 py-2 bg-secondary-surface border border-border rounded-lg text-xs font-semibold focus:outline-none" />
                </div>
              </div>
            </div>
          </div>

          {/* History Table */}
          <div className="bg-card-bg rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary-surface/50 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 font-bold text-[10px] text-muted-text uppercase tracking-widest w-[180px]">Date / Time</th>
                    <th className="px-4 py-3 font-bold text-[10px] text-muted-text uppercase tracking-widest">Moderator</th>
                    <th className="px-4 py-3 font-bold text-[10px] text-muted-text uppercase tracking-widest">Action</th>
                    <th className="px-4 py-3 font-bold text-[10px] text-muted-text uppercase tracking-widest">Work / Report</th>
                    <th className="px-4 py-3 font-bold text-[10px] text-muted-text uppercase tracking-widest">Status Change</th>
                    <th className="px-4 py-3 font-bold text-[10px] text-muted-text uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {historyEntries.map((entry) => (
                    <React.Fragment key={entry.id}>
                      <tr 
                        onClick={() => setExpandedRow(expandedRow === entry.id ? null : entry.id)}
                        className={`hover:bg-secondary-surface/30 cursor-pointer transition-colors ${expandedRow === entry.id ? 'bg-soft-maroon/20' : ''}`}
                      >
                        <td className="px-4 py-4">
                          <div className="font-bold text-primary-text">{entry.date}</div>
                          <div className="text-[10px] text-muted-text font-bold uppercase tracking-tight">{entry.time}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-soft-maroon flex items-center justify-center text-[10px] font-black text-pup-maroon">
                              {entry.moderator.split(' ')[0][0]}
                            </div>
                            <span className="font-semibold text-primary-text">{entry.moderator}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1.5 w-fit uppercase tracking-wider ${entry.actionColor}`}>
                            {entry.icon}
                            {entry.action}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-bold text-primary-text truncate max-w-[200px] uppercase tracking-tight">{entry.work.split(' / ')[0]}</div>
                          <div className="text-[10px] text-muted-text font-bold uppercase tracking-widest">{entry.work.split(' / ')[1]}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5 text-xs">
                            <span className="text-muted-text line-through opacity-50">{entry.prevStatus}</span>
                            <ArrowRight size={10} className="text-muted-text" />
                            <span className="font-bold text-primary-text">{entry.newStatus}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <button className="text-[10px] font-black text-pup-maroon hover:underline uppercase tracking-widest">View</button>
                        </td>
                      </tr>
                      {expandedRow === entry.id && (
                        <tr className="bg-soft-maroon/5 animate-in fade-in duration-300">
                          <td colSpan={6} className="px-6 py-4 border-t border-pup-maroon/10">
                            <div className="flex gap-4">
                              <div className="p-3 bg-white rounded-lg border border-pup-maroon/10 flex-1 shadow-sm">
                                <div className="text-[10px] font-black text-pup-maroon uppercase tracking-widest mb-2 flex items-center gap-2">
                                  <MessageSquare size={12} /> Moderator Note
                                </div>
                                <p className="text-sm text-secondary-text leading-relaxed italic">
                                  "{entry.note}"
                                </p>
                              </div>
                              <div className="w-[280px] space-y-2">
                                <button className="w-full flex items-center justify-between p-2 bg-white border border-border rounded-lg text-xs font-bold text-secondary-text hover:bg-secondary-surface transition-colors">
                                  <span>Full History Logs</span>
                                  <ExternalLink size={14} />
                                </button>
                                <button className="w-full flex items-center justify-between p-2 bg-white border border-border rounded-lg text-xs font-bold text-secondary-text hover:bg-secondary-surface transition-colors">
                                  <span>View Original Submission</span>
                                  <ExternalLink size={14} />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-6 py-4 bg-secondary-surface/30 border-t border-border flex items-center justify-between">
              <div className="text-[10px] font-bold text-muted-text uppercase tracking-widest">
                Showing Page 1 of 3 (45 entries)
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 border border-border bg-white text-muted-text rounded-lg text-[10px] font-bold uppercase tracking-widest opacity-50 cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-1.5 border border-pup-maroon text-pup-maroon bg-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-soft-maroon transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from 'react';
