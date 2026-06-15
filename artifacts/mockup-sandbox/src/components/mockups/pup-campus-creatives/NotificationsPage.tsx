import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { Check, Settings, Award, AlertCircle, Info, MessageSquare, Heart, Calendar, Bell, ArrowLeft } from 'lucide-react';
import { navigateTo } from '../../../app/demo';
import { routePaths } from '../../../app/routes';
import './_group.css';

const NOTIFICATIONS = [
  { id: 1, type: 'status_pending', unread: true, title: "Your work 'Digital Sinta' is now pending review.", category: "Submissions", time: "2 min ago", action: "View Submission" },
  { id: 2, type: 'status_approved', unread: true, title: "Your submission 'Campus Frequencies' was approved.", category: "Submissions", time: "1 hour ago", action: "View Work", badge: "Approved", badgeColor: "status-approved" },
  { id: 3, type: 'status_revision', unread: true, title: "A moderator requested revisions to 'Railway Sketches.'", category: "Submissions", time: "Yesterday", action: "View Feedback", badge: "Needs Revision", badgeColor: "status-needs-revision" },
  { id: 4, type: 'recognition', unread: false, title: "Your work was selected as a CCIS College Highlight.", category: "Recognition", time: "2 days ago", action: "View Recognition", badge: "Campus Highlight", badgeColor: "pup-gold", isGold: true },
  { id: 5, type: 'social_like', unread: false, title: "Mika Santos appreciated your project.", category: "Community", time: "3 days ago" },
  { id: 6, type: 'event', unread: false, title: "PUP Likha 2026 closes in three days.", category: "Events", time: "3 days ago", action: "View Event" },
  { id: 7, type: 'social_post', unread: false, title: "A creator you follow published a new work.", category: "Community", time: "5 days ago" },
];

export function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const filtered = activeTab === 'All' ? notifications : notifications.filter(n => n.category === activeTab);
  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'status_pending': return <Info size={20} className="text-status-info" />;
      case 'status_approved': return <Check size={20} className="text-status-approved" />;
      case 'status_revision': return <AlertCircle size={20} className="text-status-needs-revision" />;
      case 'recognition': return <Award size={20} className="text-pup-gold" />;
      case 'social_like': return <Heart size={20} className="text-pup-maroon" />;
      case 'event': return <Calendar size={20} className="text-secondary-text" />;
      default: return <MessageSquare size={20} className="text-secondary-text" />;
    }
  };

  return (
    <div className="notifications-page min-h-screen bg-main-bg text-primary-text font-inter overflow-y-auto flex flex-col">
      <div className="notifications-desktop-only">
        <DesktopNav authenticated={true} />
      </div>

      <header className="notifications-mobile-only h-[56px] bg-warm-white border-b border-border items-center justify-between px-4 shrink-0">
        <button
          type="button"
          onClick={() => navigateTo(routePaths.student.home)}
          className="w-10 h-10 rounded-full border border-border bg-white text-pup-maroon flex items-center justify-center"
          aria-label="Back to Home"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-[14px] font-bold text-primary-text">Notifications</div>
        <button className="w-10 h-10 rounded-full border border-border bg-white text-secondary-text flex items-center justify-center">
          <Settings size={18} />
        </button>
      </header>
      
      <main className="notifications-content w-full max-w-[760px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[32px] font-bold tracking-tight">Notifications</h1>
          <button className="p-2 text-secondary-text hover:bg-secondary-surface rounded-full transition-colors">
            <Settings size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-border mb-6 gap-4">
          <div className="flex gap-6 overflow-x-auto no-scrollbar min-w-0">
            {['All', 'Submissions', 'Recognition', 'Events', 'Community'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[15px] font-medium transition-colors relative ${activeTab === tab ? 'text-pup-maroon' : 'text-secondary-text hover:text-primary-text'}`}
              >
                {tab}
                {tab === 'All' && unreadCount > 0 && (
                  <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-pup-maroon text-white text-[11px]">
                    {unreadCount}
                  </span>
                )}
                {activeTab === tab && (
                  <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-pup-maroon"></div>
                )}
              </button>
            ))}
          </div>
          {unreadCount > 0 && activeTab === 'All' && (
            <button onClick={markAllRead} className="pb-3 text-[13px] font-medium text-pup-maroon hover:underline shrink-0">
              Mark all as read
            </button>
          )}
        </div>

        {/* List */}
        <div className="bg-card-bg border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
          {filtered.length > 0 ? (
            filtered.map((notif, i) => (
              <div 
                key={notif.id}
                className={`p-5 flex gap-4 transition-colors ${notif.unread ? 'bg-soft-maroon/40' : 'bg-transparent'} ${i !== filtered.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="pt-0.5">
                  {notif.type === 'social_like' || notif.type === 'social_post' ? (
                    <InitialsAvatar
                      name={notif.type === 'social_like' ? 'Mika Santos' : 'Campus Creator'}
                      className="w-10 h-10 border border-border"
                      textClassName="text-sm"
                    />
                  ) : (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-card-bg border border-border shadow-sm`}>
                      {getIcon(notif.type)}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className={`text-[15px] leading-snug ${notif.unread ? 'font-semibold text-primary-text' : 'font-medium text-secondary-text'}`}>
                      {notif.title}
                    </p>
                    <span className="text-[12px] text-muted-text whitespace-nowrap shrink-0">{notif.time}</span>
                  </div>
                  
                  {notif.badge && (
                    <div className={`inline-block px-2 py-0.5 mt-2 rounded text-[11px] font-bold uppercase ${notif.isGold ? 'bg-soft-gold text-warm-gold border border-pup-gold/30' : 'bg-main-bg border border-border'}`}>
                      {notif.badge}
                    </div>
                  )}
                  
                  {notif.action && (
                    <div className="mt-3">
                      <button className="text-[13px] font-semibold text-pup-maroon hover:underline">
                        {notif.action}
                      </button>
                    </div>
                  )}
                </div>
                
                {notif.unread && (
                  <div className="w-2.5 h-2.5 rounded-full bg-pup-maroon shrink-0 mt-2"></div>
                )}
              </div>
            ))
          ) : (
            <div className="p-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-surface flex items-center justify-center text-muted-text mb-4">
                <Bell size={24} />
              </div>
              <h3 className="text-[16px] font-semibold mb-1">No notifications here</h3>
              <p className="text-[14px] text-secondary-text">You're all caught up on {activeTab.toLowerCase()}.</p>
            </div>
          )}
        </div>
      </main>
      <div className="notifications-mobile-only shrink-0">
        <MobileBottomNav />
      </div>
    </div>
  );
}
