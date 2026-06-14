import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Clock, CheckCircle2, AlertCircle, XCircle, Star, ExternalLink, ChevronRight, FileText } from 'lucide-react';
import { DesktopNav } from './_shared/DesktopNav';
import './_group.css';

export default function MySubmissionsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", count: 6 },
    { name: "Drafts", count: 1 },
    { name: "Pending", count: 1 },
    { name: "Approved", count: 2 },
    { name: "Needs Revision", count: 1 },
    { name: "Rejected", count: 1 },
    { name: "Archived", count: 0 },
  ];

  const submissions = [
    {
      id: "CC-WORK-2026-0148",
      title: "Digital Sinta",
      category: "Digital Art",
      date: "June 14, 2026",
      status: "Pending Review",
      event: "PUP Likha 2026",
      image: "/__mockup/images/thumbnail_1.jpg",
      action: "View Submission",
      statusColor: "text-status-pending",
      statusBg: "bg-status-pending/10",
      statusIcon: <Clock size={14} />,
    },
    {
      id: "CC-WORK-2026-0132",
      title: "Campus Frequencies",
      category: "Music",
      date: "May 28, 2026",
      status: "Approved",
      image: "/__mockup/images/thumbnail_2.jpg",
      action: "View Published Work",
      statusColor: "text-status-approved",
      statusBg: "bg-status-approved/10",
      statusIcon: <CheckCircle2 size={14} />,
    },
    {
      id: "CC-WORK-2026-0119",
      title: "Railway Sketches",
      category: "Visual Art",
      date: "May 10, 2026",
      status: "Needs Revision",
      feedback: "Please provide clearer ownership details...",
      image: "/__mockup/images/thumbnail_3.jpg",
      action: "Revise and Resubmit",
      statusColor: "text-status-needs-revision",
      statusBg: "bg-status-needs-revision/10",
      statusIcon: <AlertCircle size={14} />,
      actionColor: "bg-status-needs-revision text-white",
    },
    {
      id: "DRAFT",
      title: "Concrete and Creativity",
      category: "Visual Art",
      date: "June 12, 2026",
      status: "Draft",
      image: "/__mockup/images/thumbnail_4.jpg",
      action: "Continue Editing",
      statusColor: "text-muted-text",
      statusBg: "bg-secondary-surface",
      statusIcon: <FileText size={14} />,
    },
    {
      id: "CC-WORK-2026-0097",
      title: "Polytechnic Dreams",
      category: "Graphic Design",
      date: "Apr 5, 2026",
      status: "Approved",
      featured: true,
      image: "/__mockup/images/college_1.jpg",
      action: "View Published Work",
      statusColor: "text-status-approved",
      statusBg: "bg-status-approved/10",
      statusIcon: <CheckCircle2 size={14} />,
    },
    {
      id: "CC-WORK-2026-0084",
      title: "Commuter's Canvas",
      category: "Photography",
      date: "Mar 20, 2026",
      status: "Rejected",
      feedback: "Work did not meet originality guidelines.",
      image: "/__mockup/images/college_2.jpg",
      action: "View Decision",
      statusColor: "text-status-rejected",
      statusBg: "bg-status-rejected/10",
      statusIcon: <XCircle size={14} />,
    },
  ];

  return (
    <div className="min-h-screen bg-main-bg font-inter pb-20">
      <DesktopNav authenticated={true} active="Profile" />

      <main className="max-w-[1280px] mx-auto px-8 py-10">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-bold text-primary-text mb-2">My Submissions</h1>
            <p className="text-secondary-text">Track, manage, and revise your creative contributions to Campus Creatives.</p>
          </div>
          <button className="px-6 py-3 bg-pup-maroon text-white font-bold rounded-xl flex items-center gap-2 hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20">
            <Plus size={20} strokeWidth={2.5} />
            New Submission
          </button>
        </header>

        {/* Tabs */}
        <div className="border-b border-border flex gap-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all relative ${
                activeTab === tab.name ? "text-pup-maroon" : "text-muted-text hover:text-secondary-text"
              }`}
            >
              {tab.name}
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTab === tab.name ? "bg-soft-maroon text-pup-maroon" : "bg-secondary-surface text-muted-text"
              }`}>
                {tab.count}
              </span>
              {activeTab === tab.name && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pup-maroon rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" />
            <input 
              type="text" 
              placeholder="Search submissions by title or reference..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pup-maroon/10 focus:border-pup-maroon transition-all"
            />
          </div>
          <button className="px-6 py-3 bg-white border border-border rounded-xl font-bold text-secondary-text flex items-center gap-2 hover:bg-secondary-surface transition-all">
            <Filter size={18} />
            Sort: Date Submitted
          </button>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {submissions.map((work) => (
            <div key={work.id} className="bg-card-bg border border-border rounded-2xl p-4 flex items-center gap-6 group hover:border-pup-maroon/30 transition-all hover:shadow-sm">
              <div className="w-32 h-24 rounded-xl overflow-hidden bg-secondary-surface shrink-0 border border-border">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 min-w-0 py-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="font-bold text-lg text-primary-text truncate">{work.title}</h3>
                  <code className="text-[10px] font-mono font-medium text-muted-text bg-secondary-surface px-1.5 py-0.5 rounded">{work.id}</code>
                  {work.featured && (
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-pup-gold/20 text-pup-maroon rounded text-[10px] font-bold uppercase tracking-tight border border-pup-gold/30">
                      <Star size={10} fill="currentColor" /> Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs font-medium mb-3">
                  <span className="px-2.5 py-1 bg-warm-white border border-border rounded-lg text-secondary-text">{work.category}</span>
                  <span className="text-muted-text">Submitted: {work.date}</span>
                  {work.event && (
                    <span className="text-status-info flex items-center gap-1">
                      <ExternalLink size={12} /> {work.event}
                    </span>
                  )}
                </div>

                {work.feedback && (
                  <div className="bg-status-needs-revision/5 border-l-2 border-status-needs-revision p-2 rounded-r-lg mb-1">
                    <p className="text-xs italic text-status-needs-revision truncate">
                      <span className="font-bold not-italic">Feedback:</span> "{work.feedback}"
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-6 px-4">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 ${work.statusBg} ${work.statusColor} rounded-full text-xs font-bold uppercase tracking-wider border border-current/10`}>
                  {work.statusIcon}
                  {work.status}
                </div>
                
                <button className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  work.actionColor || "bg-white border border-border text-primary-text hover:bg-secondary-surface"
                }`}>
                  {work.action}
                  <ChevronRight size={16} />
                </button>
                
                <button className="p-2 text-muted-text hover:text-pup-maroon transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Loading Skeleton Item */}
          <div className="bg-card-bg/50 border border-border/50 rounded-2xl p-4 flex items-center gap-6 animate-pulse">
            <div className="w-32 h-24 rounded-xl bg-secondary-surface/50 shrink-0" />
            <div className="flex-1 py-1 space-y-3">
              <div className="h-6 bg-secondary-surface/50 rounded-lg w-1/3" />
              <div className="h-4 bg-secondary-surface/50 rounded-lg w-1/4" />
              <div className="h-10 bg-secondary-surface/50 rounded-lg w-1/2" />
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="h-8 w-24 bg-secondary-surface/50 rounded-full" />
              <div className="h-10 w-36 bg-secondary-surface/50 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Empty State (Optional) */}
        {activeTab === "Archived" && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-secondary-surface flex items-center justify-center text-muted-text">
              <Plus size={32} strokeWidth={1} />
            </div>
            <div>
              <p className="text-lg font-bold text-primary-text">No archived submissions</p>
              <p className="text-secondary-text">Any submissions you archive will appear here.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
