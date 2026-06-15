import React, { useState } from 'react';
import { Plus, Clock, CheckCircle2, AlertCircle, XCircle, FileText, ChevronRight, Filter } from 'lucide-react';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import './_group.css';

interface MySubmissionsPageMobileProps {
  onBack?: () => void;
  onNewSubmission?: () => void;
  onSubmissionDetail?: () => void;
  onNeedsRevision?: () => void;
}

export default function MySubmissionsPageMobile({
  onBack,
  onNewSubmission,
  onSubmissionDetail,
  onNeedsRevision,
}: MySubmissionsPageMobileProps = {}) {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", count: 6 },
    { name: "Drafts", count: 1 },
    { name: "Pending", count: 1 },
    { name: "Approved", count: 2 },
    { name: "Needs Revision", count: 1 },
    { name: "Rejected", count: 1 },
  ];

  const submissions = [
    {
      id: "CC-WORK-2026-0148",
      title: "Digital Sinta",
      category: "Digital Art",
      date: "Jun 14, 2026",
      status: "Pending",
      image: "/__mockup/images/thumbnail_1.jpg",
      statusColor: "text-status-pending",
      statusBg: "bg-status-pending/10",
      statusIcon: <Clock size={12} />,
    },
    {
      id: "CC-WORK-2026-0132",
      title: "Campus Frequencies",
      category: "Music",
      date: "May 28, 2026",
      status: "Approved",
      image: "/__mockup/images/thumbnail_2.jpg",
      statusColor: "text-status-approved",
      statusBg: "bg-status-approved/10",
      statusIcon: <CheckCircle2 size={12} />,
    },
    {
      id: "CC-WORK-2026-0119",
      title: "Railway Sketches",
      category: "Visual Art",
      date: "May 10, 2026",
      status: "Revision",
      image: "/__mockup/images/thumbnail_3.jpg",
      statusColor: "text-status-needs-revision",
      statusBg: "bg-status-needs-revision/10",
      statusIcon: <AlertCircle size={12} />,
    },
    {
      id: "DRAFT",
      title: "Concrete and Creativity",
      category: "Visual Art",
      date: "Jun 12, 2026",
      status: "Draft",
      image: "/__mockup/images/thumbnail_4.jpg",
      statusColor: "text-muted-text",
      statusBg: "bg-secondary-surface",
      statusIcon: <FileText size={12} />,
    },
    {
      id: "CC-WORK-2026-0097",
      title: "Polytechnic Dreams",
      category: "Graphic Design",
      date: "Apr 5, 2026",
      status: "Approved",
      image: "/__mockup/images/college_1.jpg",
      statusColor: "text-status-approved",
      statusBg: "bg-status-approved/10",
      statusIcon: <CheckCircle2 size={12} />,
    },
    {
      id: "CC-WORK-2026-0084",
      title: "Commuter's Canvas",
      category: "Photography",
      date: "Mar 20, 2026",
      status: "Rejected",
      image: "/__mockup/images/college_2.jpg",
      statusColor: "text-status-rejected",
      statusBg: "bg-status-rejected/10",
      statusIcon: <XCircle size={12} />,
    },
  ];

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter pb-[100px] overflow-y-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border px-4 py-4 flex items-center justify-between">
        <div>
          {onBack && (
            <button onClick={onBack} className="mb-1 text-[11px] font-bold text-pup-maroon">
              Creator Profile
            </button>
          )}
          <h1 className="text-xl font-bold text-primary-text uppercase tracking-tight">My Submissions</h1>
        </div>
        <button onClick={onNewSubmission} className="w-10 h-10 rounded-full bg-pup-maroon text-white flex items-center justify-center shadow-md active:scale-95 transition-transform">
          <Plus size={20} strokeWidth={3} />
        </button>
      </header>

      {/* Tabs - Horizontal Scroll */}
      <div className="bg-white border-b border-border sticky top-[68px] z-40 overflow-x-auto no-scrollbar">
        <div className="flex px-4 py-2 gap-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === tab.name 
                  ? "bg-pup-maroon text-white" 
                  : "bg-secondary-surface text-secondary-text active:bg-border"
              }`}
            >
              {tab.name}
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                activeTab === tab.name ? "bg-white/20" : "bg-border text-muted-text"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <main className="p-4">
        {/* Submissions List */}
        <div className="space-y-3">
          {submissions.map((work) => (
            <div key={work.id} className="bg-white border border-border rounded-2xl p-3 flex gap-4 active:bg-secondary-surface transition-colors">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-secondary-surface shrink-0 border border-border">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-primary-text truncate">{work.title}</h3>
                    <div className={`shrink-0 flex items-center gap-1 px-2 py-0.5 ${work.statusBg} ${work.statusColor} rounded-full text-[9px] font-bold uppercase tracking-wider`}>
                      {work.statusIcon}
                      {work.status}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[10px] font-bold text-pup-maroon/70">{work.category}</span>
                    <span className="text-[10px] text-muted-text">{work.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                   <code className="text-[9px] font-mono font-medium text-muted-text bg-secondary-surface px-1.5 py-0.5 rounded">{work.id}</code>
                   <button
                     onClick={work.status === "Revision" ? onNeedsRevision : onSubmissionDetail}
                     className="text-xs font-bold text-pup-maroon flex items-center gap-1"
                   >
                     Action <ChevronRight size={14} />
                   </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State Mockup */}
          {activeTab === "None" && (
            <div className="py-20 flex flex-col items-center justify-center text-center px-8">
              <div className="w-16 h-16 rounded-full bg-secondary-surface flex items-center justify-center text-muted-text mb-4">
                <FileText size={32} />
              </div>
              <p className="text-base font-bold text-primary-text">No submissions found</p>
              <p className="text-xs text-secondary-text mt-1">Try changing your filters or start a new submission.</p>
            </div>
          )}
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}
