import React, { useState } from 'react';
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
  Save,
  Eye,
  CheckCircle,
  AlertCircle,
  Clock,
  MapPin,
  FileText,
  Briefcase,
  Users as UsersIcon,
  HelpCircle,
  X
} from 'lucide-react';
import './_group.css';

export default function EventFormPage() {
  const [activeSection, setActiveSection] = useState('Basic Information');
  const [showPublishModal, setShowPublishModal] = useState(false);

  const sections = [
    'Basic Information',
    'Organizer',
    'Categories & Eligibility',
    'Dates & Deadline',
    'Venue',
    'Submission Requirements',
    'Judging Criteria',
    'Recognition & Prizes',
    'Cover & Media',
    'Publication Settings',
    'Review'
  ];

  const renderSectionNav = () => (
    <nav className="w-64 flex flex-col gap-1">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
            activeSection === section 
              ? 'bg-pup-maroon/10 text-pup-maroon border-l-4 border-pup-maroon' 
              : 'text-secondary-text hover:bg-secondary-surface'
          }`}
        >
          {section}
        </button>
      ))}
    </nav>
  );

  const renderBasicInfo = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-primary-text">Event Title</label>
          <input 
            type="text" 
            defaultValue="PUP Likha 2027: Student Creative Showcase"
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all"
          />
          <div className="text-[11px] text-muted-text text-right">43 / 100 characters</div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-primary-text">Event Code</label>
          <input 
            type="text" 
            defaultValue="PUP-LIKHA-2027"
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all"
          />
          <div className="text-[11px] text-muted-text">A unique identifier for URLs and record-keeping.</div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-primary-text">Description</label>
          <textarea 
            rows={5}
            defaultValue="The annual flagship creative showcase for all PUP students across all branches and campuses."
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all resize-none"
          />
          <div className="text-[11px] text-muted-text text-right">86 / 2000 characters</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary-text">Event Type</label>
            <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all">
              <option>Showcase</option>
              <option>Competition</option>
              <option>Exhibition</option>
              <option>Workshop</option>
              <option>Festival</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-primary-text">Status</label>
            <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white focus:border-pup-maroon focus:ring-2 focus:ring-pup-maroon/20 outline-none transition-all">
              <option>Draft</option>
              <option>Scheduled</option>
              <option>Open</option>
              <option>Ongoing</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewSection = () => (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="p-4 bg-status-info/10 border border-status-info/20 rounded-xl flex gap-3">
        <AlertCircle className="w-5 h-5 text-status-info shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-status-info">Ready for review</h4>
          <p className="text-xs text-secondary-text mt-1">Please double check all information before publishing. Published events will be immediately visible to students if the status is set to Open.</p>
        </div>
      </div>

      <div className="space-y-6">
        {sections.slice(0, -1).map((section) => (
          <div key={section} className="border-b border-border pb-4 last:border-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-primary-text">{section}</h3>
              <button 
                onClick={() => setActiveSection(section)}
                className="text-xs font-semibold text-pup-maroon hover:underline"
              >
                Edit
              </button>
            </div>
            {section === 'Basic Information' ? (
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div className="text-secondary-text">Title</div>
                <div className="text-primary-text font-medium text-right">PUP Likha 2027: Student Creative Showcase</div>
                <div className="text-secondary-text">Code</div>
                <div className="text-primary-text font-medium text-right">PUP-LIKHA-2027</div>
                <div className="text-secondary-text">Type</div>
                <div className="text-primary-text font-medium text-right">Showcase</div>
                <div className="text-secondary-text">Status</div>
                <div className="text-primary-text font-medium text-right">Draft</div>
              </div>
            ) : (
              <div className="text-sm text-muted-text italic">Section information configured correctly.</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const activeIndex = sections.indexOf(activeSection);

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
          <NavItem icon={<Calendar size={20} />} label="Events" active />
          <NavItem icon={<Award size={20} />} label="Recognition" />
          <NavItem icon={<Flag size={20} />} label="Reports" />
          <NavItem icon={<BarChart3 size={20} />} label="Analytics" />
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
          <div className="flex items-center gap-2 text-sm">
            <span className="text-secondary-text hover:text-pup-maroon cursor-pointer transition-colors">Events</span>
            <span className="text-muted-text">/</span>
            <span className="text-primary-text font-medium">New Event</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text group-focus-within:text-pup-maroon transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search records..." 
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
          <div className="max-w-6xl mx-auto space-y-8">
            <header className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary-text">Create Event</h1>
                <p className="text-secondary-text mt-1 text-lg">Configure the details for a new campus creative event or competition.</p>
              </div>
              <div className="flex items-center gap-4">
                {sections.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'bg-pup-maroon scale-125 ring-4 ring-pup-maroon/20' : 
                      i < activeIndex ? 'bg-pup-maroon/40' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </header>

            <div className="flex gap-8 items-start">
              {/* Left Section Nav */}
              <div className="sticky top-0">
                {renderSectionNav()}
              </div>

              {/* Main Form Content */}
              <div className="flex-1 bg-card-bg border border-border rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-primary-text mb-6 pb-4 border-b border-border">
                  {activeSection}
                </h2>

                {activeSection === 'Review' ? renderReviewSection() : renderBasicInfo()}

                <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
                  <div className="flex gap-3">
                    <button className="px-5 py-2.5 border-2 border-border rounded-xl text-sm font-bold text-primary-text hover:border-pup-maroon hover:text-pup-maroon transition-all flex items-center gap-2">
                      <Save size={18} />
                      Save Draft
                    </button>
                    <button className="px-5 py-2.5 border-2 border-border rounded-xl text-sm font-bold text-primary-text hover:border-pup-maroon hover:text-pup-maroon transition-all flex items-center gap-2">
                      <Eye size={18} />
                      Preview Event
                    </button>
                  </div>
                  
                  {activeSection === 'Review' ? (
                    <button 
                      onClick={() => setShowPublishModal(true)}
                      className="px-8 py-2.5 bg-pup-maroon text-white rounded-xl text-sm font-bold hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20"
                    >
                      Publish Event
                    </button>
                  ) : (
                    <button 
                      onClick={() => setActiveSection(sections[activeIndex + 1])}
                      className="px-8 py-2.5 bg-pup-maroon text-white rounded-xl text-sm font-bold hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20"
                    >
                      Next Section →
                    </button>
                  )}
                </div>
              </div>

              {/* Right Guidance */}
              <aside className="w-[260px] sticky top-0 space-y-6">
                <div className="bg-pup-gold/10 border border-pup-gold/20 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-warm-gold font-bold text-sm mb-3">
                    <HelpCircle size={18} />
                    Section Guide
                  </div>
                  <h4 className="font-bold text-dark-surface text-sm mb-2">{activeSection} Tips</h4>
                  <ul className="space-y-3">
                    <li className="text-xs text-secondary-text flex gap-2">
                      <span className="text-pup-gold font-bold">•</span>
                      Use a clear, compelling title that explains the purpose of the event.
                    </li>
                    <li className="text-xs text-secondary-text flex gap-2">
                      <span className="text-pup-gold font-bold">•</span>
                      The event code should be easy to remember and reference.
                    </li>
                    <li className="text-xs text-secondary-text flex gap-2">
                      <span className="text-pup-gold font-bold">•</span>
                      Describe the impact and who the event is for in the description.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      {/* Publish Confirm Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-surface/60 backdrop-blur-sm">
          <div className="bg-card-bg rounded-2xl w-full max-w-md p-8 shadow-2xl border border-border animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-status-approved/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <CheckCircle size={32} className="text-status-approved" />
            </div>
            <h3 className="text-xl font-bold text-center text-primary-text mb-2">Publish this event?</h3>
            <p className="text-secondary-text text-center text-sm mb-8">
              "PUP Likha 2027: Student Creative Showcase" will be published. This will make it visible to students if the status is set to Open.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowPublishModal(false)}
                className="flex-1 py-3 border-2 border-border rounded-xl text-sm font-bold text-primary-text hover:bg-secondary-surface transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowPublishModal(false)}
                className="flex-1 py-3 bg-pup-maroon text-white rounded-xl text-sm font-bold hover:bg-deep-maroon transition-all shadow-lg shadow-pup-maroon/20"
              >
                Confirm Publish
              </button>
            </div>
          </div>
        </div>
      )}
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
