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
  Plus,
  GripVertical,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Palette,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';
import './_group.css';

export default function CategoryManagementPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    { id: 1, name: 'Digital Art', icon: 'Palette', description: 'Digital paintings, illustrations, and 3D renders.', count: 142, active: true, featured: true, order: 1 },
    { id: 2, name: 'Photography', icon: 'Camera', description: 'Conceptual, landscape, and campus photography.', count: 128, active: true, featured: true, order: 2 },
    { id: 3, name: 'Visual Art', icon: 'Brush', description: 'Traditional painting, sketching, and sculpture.', count: 89, active: true, featured: true, order: 3 },
    { id: 4, name: 'Graphic Design', icon: 'Layout', description: 'Posters, branding, and typography design.', count: 76, active: true, featured: true, order: 4 },
    { id: 5, name: 'Music', icon: 'Music', description: 'Original compositions and instrumental works.', count: 58, active: true, featured: false, order: 5 },
    { id: 6, name: 'Film', icon: 'Video', description: 'Short films, documentaries, and animations.', count: 45, active: true, featured: false, order: 6 },
    { id: 7, name: 'Animation', icon: 'Zap', description: '2D/3D animation and motion graphics.', count: 34, active: true, featured: false, order: 7 },
    { id: 8, name: 'Crafts', icon: 'Scissors', description: 'Handmade items, textile art, and ceramics.', count: 28, active: true, featured: false, order: 8 },
    { id: 9, name: 'Fashion and Cosplay', icon: 'Shirt', description: 'Costume design and fashion photography.', count: 0, active: false, featured: false, order: 9 },
  ];

  const handleEdit = (category: any) => {
    setSelectedCategory(category);
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
          <NavItem icon={<Building2 size={18} />} label="Colleges" />
          <NavItem icon={<Tag size={18} />} label="Categories" active />
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
            <h1 className="text-xl font-bold tracking-tight">Creative Categories</h1>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-sm text-secondary-text">16 defined categories</div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-pup-maroon text-white text-sm font-bold rounded-xl shadow-sm hover:bg-deep-maroon transition-all">
            <Plus size={18} />
            Add Category
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-main-bg">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary-surface/30 text-secondary-text font-semibold">
                  <tr>
                    <th className="px-6 py-4 w-12 text-center">Order</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4 text-center">Work Count</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-center">Featured</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {categories.map((category) => (
                    <tr key={category.id} className={`hover:bg-main-bg/50 transition-colors ${!category.active ? 'opacity-60 bg-secondary-surface/20' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 justify-center">
                          <GripVertical size={16} className="text-muted-text cursor-grab active:cursor-grabbing" />
                          <span className="font-mono font-bold text-secondary-text">{category.order}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-soft-maroon flex items-center justify-center text-pup-maroon">
                            <Palette size={16} />
                          </div>
                          <span className="font-bold text-primary-text">{category.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-secondary-text max-w-xs truncate">{category.description}</td>
                      <td className="px-6 py-4 text-center font-bold">{category.count}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          {category.active ? (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-status-approved/10 text-status-approved text-[10px] font-bold rounded-full uppercase">
                              Active
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-muted-text/10 text-muted-text text-[10px] font-bold rounded-full uppercase">
                              Disabled
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <div className={`w-10 h-6 rounded-full relative transition-colors ${category.featured ? 'bg-pup-gold' : 'bg-border'}`}>
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${category.featured ? 'left-5' : 'left-1'}`} />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleEdit(category)}
                            className="p-2 text-secondary-text hover:text-pup-maroon hover:bg-soft-maroon rounded-lg transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button className="p-2 text-secondary-text hover:text-status-rejected hover:bg-status-rejected/10 rounded-lg transition-colors">
                            {category.active ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showEditModal && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-surface/60 backdrop-blur-sm p-4">
          <div className="bg-card-bg border border-border rounded-2xl shadow-2xl max-w-[500px] w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold">Edit Category — {selectedCategory.name}</h2>
              <button onClick={() => setShowEditModal(false)} className="p-2 text-muted-text hover:text-primary-text transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-text uppercase">Category Name</label>
                <input type="text" defaultValue={selectedCategory.name} className="w-full px-4 py-2.5 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-text uppercase">Description</label>
                <textarea 
                  className="w-full px-4 py-3 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon min-h-[100px] resize-none"
                  defaultValue={selectedCategory.description}
                ></textarea>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-text uppercase block mb-3">Icon Selector</label>
                <div className="grid grid-cols-6 gap-2">
                  {['Palette', 'Camera', 'Brush', 'Layout', 'Music', 'Video', 'Zap', 'Scissors', 'Shirt', 'Layers', 'Feather', 'Activity'].map((icon) => (
                    <button 
                      key={icon}
                      className={`p-3 rounded-xl border flex items-center justify-center transition-all ${
                        selectedCategory.icon === icon ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' : 'bg-main-bg border-border text-muted-text hover:border-pup-maroon/50'
                      }`}
                    >
                      <Palette size={20} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-text uppercase">Display Order</label>
                  <input type="number" defaultValue={selectedCategory.order} className="w-full px-4 py-2.5 bg-main-bg border border-border rounded-xl text-sm outline-none focus:border-pup-maroon" />
                </div>
                <div className="space-y-4 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-text">Active Status</span>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={selectedCategory.active} />
                      <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-status-approved"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-text">Feature on Home</span>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={selectedCategory.featured} />
                      <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pup-gold"></div>
                    </div>
                  </div>
                </div>
              </div>

              {!selectedCategory.active && (
                <div className="bg-status-pending/10 border border-status-pending/20 p-4 rounded-xl flex gap-3">
                  <AlertTriangle size={18} className="text-status-pending shrink-0" />
                  <p className="text-[12px] text-secondary-text leading-snug">
                    <span className="font-bold text-status-pending block mb-0.5">Disabling Category</span>
                    Disabling this category will hide {selectedCategory.count} works from category filtering. Works will remain accessible via direct link and creator profiles.
                  </p>
                </div>
              )}
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
