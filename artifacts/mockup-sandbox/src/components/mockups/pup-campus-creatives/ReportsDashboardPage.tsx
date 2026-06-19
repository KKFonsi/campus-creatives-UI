import React, { useState } from 'react';
import {
  LayoutDashboard, 
  ClipboardList, 
  Flag, 
  Star, 
  Shield, 
  History,
  Search,
  Bell,
  ChevronDown,
  Filter,
  MoreVertical,
  AlertCircle,
  ExternalLink,
  ShieldAlert,
  Clock,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { ModeratorDesktopSidebar } from './_shared/ModeratorDesktopSidebar';
import './_group.css';

interface ReportsDashboardPageProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onReportDetail?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

export function ReportsDashboardPage({
  onDashboard,
  onPending,
  onReports,
  onReportDetail,
  onFeatured,
  onOfficialContent,
  onHistory,
  onEvents,
}: ReportsDashboardPageProps = {}) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedReports, setSelectedReports] = useState<string[]>([]);

  const tabs = [
    { name: 'All', count: 7 },
    { name: 'Work Reports', count: 4 },
    { name: 'Comment Reports', count: 2 },
    { name: 'Creator Reports', count: 1 },
    { name: 'Copyright', count: 3 },
    { name: 'Resolved', count: 18 }
  ];

  const stats = [
    { label: 'Open Reports', value: '4', color: 'text-status-rejected', bg: 'bg-status-rejected/10', icon: Flag },
    { label: 'Under Review', value: '2', color: 'text-status-pending', bg: 'bg-status-pending/10', icon: Clock },
    { label: 'Resolved', value: '18', color: 'text-status-approved', bg: 'bg-status-approved/10', icon: Shield },
    { label: 'Escalated', value: '1', color: 'text-crimson-accent', bg: 'bg-crimson-accent/10', icon: ShieldAlert },
    { label: 'Copyright Reports', value: '3', color: 'text-status-needs-revision', bg: 'bg-status-needs-revision/10', icon: AlertCircle },
    { label: 'Comment Reports', value: '2', color: 'text-secondary-text', bg: 'bg-secondary-surface', icon: MoreVertical },
  ];

  const reports = [
    {
      id: 'CC-RPT-2026-0031',
      reason: 'Suspected stolen work',
      target: 'Digital Sinta',
      creator: 'Rafael Mendoza',
      reporter: 'Anonymous user',
      date: 'June 11, 2026',
      status: 'Open',
      severity: 'High',
      type: 'Work',
      thumbnail: '/__mockup/images/thumbnail_1.jpg'
    },
    {
      id: 'CC-RPT-2026-0028',
      reason: 'Copyright concern',
      target: 'Engineering in Motion',
      creator: 'Dave Cruz',
      reporter: 'Anonymous user',
      date: 'June 10, 2026',
      status: 'Under Review',
      severity: 'High',
      type: 'Work',
      thumbnail: '/__mockup/images/thumbnail_4.jpg'
    },
    {
      id: 'CC-RPT-2026-0026',
      reason: 'Inappropriate content',
      target: 'Abstract Forms 3',
      creator: 'Unknown Artist',
      reporter: 'Anonymous user',
      date: 'June 9, 2026',
      status: 'Open',
      severity: 'Medium',
      type: 'Work',
      thumbnail: '/__mockup/images/thumbnail_2.jpg'
    },
    {
      id: 'CC-RPT-2026-0025',
      reason: 'Harassment',
      target: 'comment on "Campus Frequencies"',
      creator: 'Liza Santos',
      reporter: 'Anonymous user',
      date: 'June 9, 2026',
      status: 'Open',
      severity: 'Medium',
      type: 'Comment',
      thumbnail: '/__mockup/images/thumbnail_3.jpg'
    },
    {
      id: 'CC-RPT-2026-0022',
      reason: 'Copyright concern',
      target: 'Pasig at Dusk',
      creator: 'Bianca Reyes',
      reporter: 'Anonymous user',
      date: 'June 8, 2026',
      status: 'Escalated',
      severity: 'High',
      type: 'Work',
      thumbnail: '/__mockup/images/thumbnail_1.jpg'
    },
    {
      id: 'CC-RPT-2026-0019',
      reason: 'Misleading information',
      target: 'Sta. Mesa Nights',
      creator: 'Marco Villanueva',
      reporter: 'Anonymous user',
      date: 'June 8, 2026',
      status: 'Open',
      severity: 'Low',
      type: 'Work',
      thumbnail: '/__mockup/images/thumbnail_2.jpg'
    },
    {
      id: 'CC-RPT-2026-0017',
      reason: 'Spam',
      target: 'comment on "Polytechnic Dreams"',
      creator: 'Miguel Torres',
      reporter: 'Anonymous user',
      date: 'June 7, 2026',
      status: 'Open',
      severity: 'Low',
      type: 'Comment',
      thumbnail: '/__mockup/images/thumbnail_4.jpg'
    }
  ];

  const getSeverityColor = (sev: string) => {
    switch(sev) {
      case 'High': return 'text-status-rejected bg-status-rejected/10 border-status-rejected/20';
      case 'Medium': return 'text-status-needs-revision bg-status-needs-revision/10 border-status-needs-revision/20';
      case 'Low': return 'text-secondary-text bg-secondary-surface border-border';
      default: return 'text-secondary-text bg-secondary-surface border-border';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Open': return 'text-status-rejected bg-status-rejected/10';
      case 'Under Review': return 'text-status-pending bg-status-pending/10';
      case 'Escalated': return 'text-crimson-accent bg-crimson-accent/10';
      case 'Resolved': return 'text-status-approved bg-status-approved/10';
      default: return 'text-secondary-text bg-secondary-surface';
    }
  };

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar
        onDashboard={onDashboard}
        onPending={onPending}
        onReports={onReports}
        onFeatured={onFeatured}
        onOfficialContent={onOfficialContent}
        onEvents={onEvents}
        onHistory={onHistory}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-[64px] bg-card-bg border-b border-border px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
              <input 
                type="text" 
                placeholder="Search reports, users, or work IDs..." 
                className="w-full pl-10 pr-4 py-2 bg-secondary-surface border border-border rounded-lg text-[14px] focus:outline-none focus:border-pup-maroon focus:ring-1 focus:ring-pup-maroon"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-secondary-text hover:text-pup-maroon transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pup-maroon text-white text-[10px] flex items-center justify-center rounded-full border-2 border-card-bg">6</span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="text-right">
                <div className="text-[13px] font-bold">Maria Moderator</div>
                <div className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[10px] font-bold rounded uppercase inline-block mt-1">Senior Mod</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-pup-maroon flex items-center justify-center text-white font-bold border-2 border-soft-maroon">M</div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div>
            <h1 className="text-[28px] font-bold text-primary-text mb-2 tracking-tight">Reports and Content Safety</h1>
            <p className="text-secondary-text">Monitor community reports, copyright claims, and ensure platform safety standards.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-6 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card-bg p-4 rounded-xl border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <stat.icon size={18} />
                  </div>
                </div>
                <div className="text-[24px] font-bold text-primary-text">{stat.value}</div>
                <div className="text-[12px] font-bold text-secondary-text uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs and Filters */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border">
              <div className="flex gap-8">
                {tabs.map(tab => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`pb-4 text-[14px] font-bold transition-colors relative ${
                      activeTab === tab.name ? 'text-pup-maroon' : 'text-secondary-text hover:text-primary-text'
                    }`}
                  >
                    {tab.name}
                    <span className="ml-2 text-[12px] opacity-60">({tab.count})</span>
                    {activeTab === tab.name && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-pup-maroon rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[
                { label: 'Type', value: 'All Types' },
                { label: 'Reason', value: 'All Reasons' },
                { label: 'Status', value: 'All Status' },
                { label: 'Priority', value: 'All Priority' },
                { label: 'Date', value: 'Last 30 Days' },
              ].map((filter, i) => (
                <button key={i} className="px-4 py-2 bg-card-bg border border-border rounded-lg text-[13px] font-medium flex items-center gap-2 hover:bg-secondary-surface transition-colors shadow-sm">
                  <span className="text-secondary-text">{filter.label}:</span>
                  <span>{filter.value}</span>
                  <ChevronDown size={14} className="text-muted-text" />
                </button>
              ))}
              <button className="text-[13px] font-bold text-pup-maroon hover:underline ml-2">Clear All</button>
            </div>
          </div>

          {/* Report List */}
          <div className="space-y-4">
            {reports.map((report) => (
              <button
                type="button"
                onClick={onReportDetail}
                key={report.id} 
                className={`w-full text-left bg-card-bg rounded-xl border border-border shadow-sm overflow-hidden flex transition-all hover:shadow-md ${
                  report.severity === 'High' ? 'border-l-4 border-l-status-rejected' : 
                  report.severity === 'Medium' ? 'border-l-4 border-l-status-needs-revision' : 'border-l-4 border-l-secondary-text'
                }`}
              >
                <div className="p-4 flex-1 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-lg bg-secondary-surface overflow-hidden shrink-0 border border-border">
                    <img src={report.thumbnail} alt="" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        report.type === 'Work' ? 'bg-soft-maroon text-pup-maroon' : 'bg-status-info/10 text-status-info'
                      }`}>
                        {report.reason}
                      </span>
                      <span className="text-[12px] font-mono text-muted-text">{report.id}</span>
                    </div>
                    <h3 className="text-[16px] font-bold text-primary-text truncate">
                      {report.target}
                    </h3>
                    <div className="flex items-center gap-3 text-[13px] text-secondary-text mt-1">
                      <span className="flex items-center gap-1 font-medium text-primary-text">
                        By {report.creator}
                      </span>
                      <span className="text-border">•</span>
                      <span>Reported by {report.reporter}</span>
                      <span className="text-border">•</span>
                      <span>{report.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 pr-4">
                    <div className="text-center w-28">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    
                    <div className="text-center w-24">
                      <div className={`px-3 py-1 rounded-lg border text-[11px] font-bold uppercase tracking-wider ${getSeverityColor(report.severity)}`}>
                        {report.severity}
                      </div>
                    </div>

                    <span className="flex items-center gap-2 px-4 py-2 text-pup-maroon font-bold text-[13px] hover:bg-soft-maroon rounded-lg transition-colors">
                      Open Report <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-[14px] text-secondary-text">Showing 1-7 of 7 reports</span>
            <div className="flex gap-2">
              <button disabled className="px-4 py-2 border border-border rounded-lg text-[13px] font-bold text-muted-text bg-secondary-surface cursor-not-allowed">Previous</button>
              <button disabled className="px-4 py-2 border border-border rounded-lg text-[13px] font-bold text-muted-text bg-secondary-surface cursor-not-allowed">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
