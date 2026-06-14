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
  ArrowRight,
  Search,
  Plus,
  Edit2,
  X,
  Camera,
  Check
} from 'lucide-react';
import './_group.css';

export default function CollegeManagementPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState<any>(null);

  const colleges = [
    { id: 'CAF', name: 'College of Accountancy and Finance', creators: 124, works: 342, events: 4, featured: 12 },
    { id: 'CADBE', name: 'College of Architecture, Design and the Built Environment', creators: 189, works: 567, events: 6, featured: 24 },
    { id: 'CAL', name: 'College of Arts and Letters', creators: 245, works: 890, events: 8, featured: 42 },
    { id: 'CBA', name: 'College of Business Administration', creators: 98, works: 156, events: 3, featured: 5 },
    { id: 'COC', name: 'College of Communication', creators: 212, works: 678, events: 7, featured: 31 },
    { id: 'CCIS', name: 'College of Computer and Information Sciences', creators: 234, works: 789, events: 5, featured: 28 },
    { id: 'COED', name: 'College of Education', creators: 45, works: 89, events: 2, featured: 3 },
    { id: 'CE', name: 'College of Engineering', creators: 87, works: 234, events: 4, featured: 8 },
    { id: 'CHK', name: 'College of Human Kinetics', creators: 32, works: 56, events: 2, featured: 2 },
    { id: 'CL', name: 'College of Law', creators: 12, works: 24, events: 1, featured: 1 },
    { id: 'CPSPA', name: 'College of Political Science and Public Administration', creators: 28, works: 67, events: 2, featured: 4 },
    { id: 'CS', name: 'College of Science', creators: 56, works: 145, events: 3, featured: 6 },
    { id: 'CSSD', name: 'College of Social Sciences and Development', creators: 67, works: 189, events: 3, featured: 9 },
    { id: 'CTHTM', name: 'College of Tourism, Hospitality and Transportation Management', creators: 54, works: 112, events: 2, featured: 5 },
    { id: 'ITECH', name: 'Institute of Technology', creators: 76, works: 198, events: 4, featured: 7 },
    { id: 'GS', name: 'Graduate School', creators: 24, works: 78, events: 2, featured: 4 },
  ];

  const handleEdit = (college: any) => {
    setSelectedCollege(college);
    setShowEditModal(true);
  };

  return (
    <div className="flex min-h-screen bg-main-bg font-inter text-primary-text">
      {/* Admin Sidebar */}
      <aside className="w-[240px] bg-dark-surface text-white flex flex-col flex-shrink-0">
        <div className="p-6">
          <div className="text-pup-gold text-xl tracking-tight mb-1">
            <span className="font-bold">PUP:</span>
            <span className="font-medium ml-1 text-sm uppercase tracking-wider text-pup-gold/80">Campus Creatives</span>
          </div>
          <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-pup-gold text-dark-surface mt-2 uppercase">
            Admin
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <NavItem icon={<Users size={18} />} label="Users" />
          <NavItem icon={<Building2 size={18} />} label="Colleges" active />
          <NavItem icon={<Tag size={18} />} label="Categories" />
          <NavItem icon={<Calendar size={18} />} label="Events" />
          <NavItem icon={<Award size={18} />} label="Recognition" />
          <NavItem icon={<Flag size={18} />} label="Reports" />
          <NavItem icon={<BarChart3 size={18} />} label="Analytics" />
          <NavItem icon={<Activity size={18} />} label="Activity Log" />
          <NavItem icon={<Shield size={18} />} label="Roles" />
        </nav>

        <div className="p-4 border-t border-white/10 mt-auto">
          <a href="#" className="flex items-center text-sm text-pup-gold hover:text-white transition-colors">
            <span>Switch to Student View</span>
            <ArrowRight size={14} className="ml-2" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card-bg border-b border-border flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold tracking-tight">College Management</h1>
            <span className="text-sm text-secondary-text">All 16 academic units</span>
          </div>

          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
            <input 
              type="text" 
              placeholder="Search colleges..." 
              className="w-full pl-9 pr-4 py-2 bg-main-bg border border-border rounded-xl text-sm focus:outline-none focus:border-pup-maroon transition-colors"
            />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-main-bg">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {colleges.map((college) => (
                <div key={college.id} className="bg-card-bg border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-pup-maroon text-white flex items-center justify-center font-bold rounded-xl shadow-sm">
                      {college.id}
                    </div>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-status-approved/10 text-status-approved text-[10px] font-bold rounded-full uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-status-approved"></div>
                      Active
                    </span>
                  </div>
                  <h3 className="font-bold text-sm leading-tight mb-2 group-hover:text-pup-maroon transition-colors">{college.name}</h3>
                  <p className="text-[12px] text-muted-text line-clamp-1 mb-4">Official academic unit at PUP Manila Main Campus.</p>
                  
                  <div className="grid grid-cols-2 gap-y-3 pt-4 border-t border-border/50">
                    <CollegeStat label="Creators" value={college.creators} />
                    <CollegeStat label="Works" value={college.works} />
                    <CollegeStat label="Events" value={college.events} />
                    <CollegeStat label="Featured" value={college.featured} color="text-pup-gold" />
                  </div>

                  <button 
                    onClick={() => handleEdit(college)}
                    className="w-full mt-5 py-2 flex items-center justify-center gap-2 border border-border rounded-xl text-[12px] font-bold text-secondary-text hover:border-pup-maroon hover:text-pup-maroon hover:bg-soft-maroon transition-all"
                  >
                    <Edit2 size={14} />
                    Edit Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {showEditModal && selectedCollege && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-surface/60 backdrop-blur-sm p-4">
          <div className="bg-card-bg border border-border rounded-2xl shadow-2xl max-w-[560px] w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold">Edit College — {selectedCollege.id}</h2>
              <button onClick={() => setShowEditModal(false)} className="p-2 text-muted-text hover:text-primary-text transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-muted-text uppercase">Full College Name</label>
                  <input type="text" value={selectedCollege.name} readOnly className="w-full px-4 py-2.5 bg-secondary-surface/50 border border-border rounded-xl text-sm font-medium text-secondary-text cursor-not-allowed" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-text uppercase">Abbreviation</label>
                  <input type="text" value={selectedCollege.id} readOnly className="w-full px-4 py-2.5 bg-secondary-surface/50 border border-border rounded-xl text-sm font-bold text-secondary-text cursor-not-allowed text-center" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-text uppercase">Description</label>
                <textarea 
                  className="w-full px-4 py-3 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon min-h-[100px] resize-none"
                  placeholder="Describe the college's role in the creative community..."
                  defaultValue="Leading the innovation in computer science and information technology at Polytechnic University of the Philippines."
                ></textarea>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-text uppercase">Creative Focus Tags</label>
                <input 
                  type="text" 
                  defaultValue="Technology, Design, Multimedia, Information Systems" 
                  className="w-full px-4 py-2.5 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-text uppercase">Official Representative</label>
                  <input type="text" defaultValue="Prof. Juan Santos" className="w-full px-4 py-2.5 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-text uppercase">Status Visibility</label>
                  <div className="flex items-center gap-3 h-[42px]">
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pup-maroon"></div>
                    </div>
                    <span className="text-sm font-semibold text-primary-text">Visible to Public</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-text uppercase block mb-1">Cover Image</label>
                <div className="relative h-24 bg-secondary-surface rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center group cursor-pointer hover:border-pup-maroon transition-colors">
                  <Camera size={24} className="text-muted-text group-hover:text-pup-maroon mb-1" />
                  <span className="text-[11px] font-bold text-muted-text group-hover:text-pup-maroon uppercase">Change Cover Image</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary-surface/30 p-4 px-6 flex items-center justify-end gap-3 border-t border-border">
              <button onClick={() => setShowEditModal(false)} className="px-4 py-2 text-sm font-bold text-secondary-text hover:text-primary-text">Cancel</button>
              <button className="px-8 py-2.5 bg-pup-maroon text-white text-sm font-bold rounded-xl shadow-md hover:bg-deep-maroon transition-colors flex items-center gap-2">
                <Check size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
      active 
        ? 'bg-white/10 text-white border-l-4 border-pup-gold' 
        : 'text-white/70 hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function CollegeStat({ label, value, color = 'text-primary-text' }: { label: string, value: number | string, color?: string }) {
  return (
    <div>
      <div className={`text-sm font-bold ${color}`}>{value}</div>
      <div className="text-[10px] font-bold text-muted-text uppercase tracking-wider">{label}</div>
    </div>
  );
}
