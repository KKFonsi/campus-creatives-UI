import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { 
  Camera, 
  Image as ImageIcon, 
  ChevronRight, 
  Check, 
  AlertCircle, 
  X,
  Plus,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Monitor,
  CheckCircle2,
  Trash2,
  Save
} from 'lucide-react';
import './_group.css';

interface EditProfilePageProps {
  onBack?: () => void;
  onDone?: () => void;
}

export function EditProfilePage({ onBack, onDone }: EditProfilePageProps = {}) {
  const [activeSection, setActiveSection] = useState('Profile Identity');
  const [isTouched, setIsTouched] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Form States
  const [displayName, setDisplayName] = useState('Rafael Mendoza');
  const [bio, setBio] = useState('Passionate about blending technology with visual storytelling. I focus on creating digital experiences that resonate with the student community and celebrate our unique campus culture.');
  const [fields, setFields] = useState(['UI/UX', 'Digital Art', 'Multimedia', 'Photography']);
  const [newField, setNewField] = useState('');
  const [collab, setCollab] = useState(true);

  const sections = [
    'Profile Identity', 
    'Academic Information', 
    'Creative Fields', 
    'Biography', 
    'Social Links', 
    'Portfolio Preferences', 
    'Collaboration Status'
  ];

  const handleFieldChange = () => {
    if (!isTouched) setIsTouched(true);
  };

  const handleAddField = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newField.trim() && fields.length < 6) {
      setFields([...fields, newField.trim()]);
      setNewField('');
      handleFieldChange();
    }
  };

  const removeField = (tag: string) => {
    setFields(fields.filter(f => f !== tag));
    handleFieldChange();
  };

  const handleSave = () => {
    setShowToast(true);
    setIsTouched(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter">
      <DesktopNav authenticated={true} />

      {/* Header Bar */}
      <div className="bg-card-bg border-b border-border sticky top-16 z-20">
        <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <button onClick={onBack} className="text-sm font-bold text-pup-maroon hover:underline">
                Back to Profile
              </button>
            )}
            <h1 className="text-xl font-bold">Edit Profile</h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onDone} className="px-4 py-2 text-sm font-semibold text-secondary-text hover:text-primary-text transition-colors">
              Preview Profile
            </button>
            <button 
              onClick={() => {
                handleSave();
                onDone?.();
              }}
              disabled={!isTouched}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                isTouched 
                ? 'bg-pup-maroon text-white shadow-md hover:bg-deep-maroon' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Unsaved Warning */}
      {isTouched && (
        <div className="bg-amber-50 border-b border-amber-200 py-2 animate-in fade-in slide-in-from-top-1">
          <div className="max-w-[1200px] mx-auto px-8 flex items-center gap-2 text-amber-700 text-sm font-medium">
            <AlertCircle size={16} />
            You have unsaved changes. Don't forget to save before leaving.
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-status-approved text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 size={20} />
          <span className="font-bold">Profile updated successfully!</span>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-8 py-10">
        <div className="grid grid-cols-12 gap-10">
          
          {/* Left Nav */}
          <div className="col-span-3 space-y-1">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeSection === section 
                  ? 'bg-soft-maroon text-pup-maroon' 
                  : 'text-secondary-text hover:bg-secondary-surface'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Main Form Area */}
          <div className="col-span-6 space-y-10">
            {activeSection === 'Profile Identity' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-bold mb-6">Profile Identity</h2>
                  
                  {/* Avatar Upload */}
                  <div className="flex items-center gap-8 mb-8">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-full bg-secondary-surface border-2 border-border overflow-hidden">
                        <InitialsAvatar name="Rafael Mendoza" className="w-full h-full" textClassName="text-3xl" />
                      </div>
                      <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera size={20} />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <button className="px-4 py-2 border border-border rounded-lg text-sm font-bold hover:bg-secondary-surface transition-colors">
                        Change Photo
                      </button>
                      <div className="text-xs text-muted-text">Recommended: 400x400px. JPG or PNG.</div>
                      <button className="text-xs font-bold text-red-500 hover:underline">Remove Photo</button>
                    </div>
                  </div>

                  {/* Cover Upload */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold mb-3">Cover Image</label>
                    <div className="relative h-32 w-full rounded-xl bg-secondary-surface border border-dashed border-border overflow-hidden group mb-2">
                      <img src="/__mockup/images/hero-collage.jpg" alt="Cover Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-4 py-2 bg-white rounded-lg text-sm font-bold flex items-center gap-2">
                          <ImageIcon size={16} /> Change Cover
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-muted-text">Ideal size: 1200x300px. High resolution campus imagery preferred.</div>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-1.5">Display Name</label>
                      <input 
                        type="text" 
                        value={displayName}
                        onChange={(e) => { setDisplayName(e.target.value); handleFieldChange(); }}
                        className="w-full px-4 py-2.5 bg-card-bg border border-border rounded-lg focus:ring-2 focus:ring-pup-maroon/20 focus:border-pup-maroon outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-1.5">First Name</label>
                        <input type="text" defaultValue="Rafael" className="w-full px-4 py-2.5 bg-card-bg border border-border rounded-lg outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-1.5">Last Name</label>
                        <input type="text" defaultValue="Mendoza" className="w-full px-4 py-2.5 bg-card-bg border border-border rounded-lg outline-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Academic Information' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold">Academic Information</h2>
                <div className="p-4 bg-soft-maroon/30 border border-soft-maroon rounded-lg text-sm text-pup-maroon flex gap-3">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>Your student identity is verified through the university database. If you see incorrect information, please contact the Registrar.</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-1.5">College</label>
                    <select className="w-full px-4 py-2.5 bg-card-bg border border-border rounded-lg outline-none">
                      <option>College of Computer and Information Sciences</option>
                      <option>College of Architecture, Design and the Built Environment</option>
                      <option>College of Arts and Letters</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5">Program</label>
                    <select className="w-full px-4 py-2.5 bg-card-bg border border-border rounded-lg outline-none">
                      <option>Bachelor of Science in Information Technology</option>
                      <option>Bachelor of Science in Computer Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5">Student ID</label>
                    <input type="text" value="2023-00123-MN-0" disabled className="w-full px-4 py-2.5 bg-secondary-surface border border-border rounded-lg text-muted-text cursor-not-allowed" />
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Creative Fields' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-2">Creative Fields</h2>
                  <p className="text-sm text-secondary-text mb-6">Select up to 6 fields that best represent your creative focus.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {fields.map(tag => (
                      <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-pup-maroon text-white text-xs font-bold rounded-full">
                        {tag}
                        <button onClick={() => removeField(tag)} className="hover:text-white/80 transition-colors">
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                    {fields.length < 6 && (
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Add field..."
                          value={newField}
                          onChange={(e) => setNewField(e.target.value)}
                          onKeyDown={handleAddField}
                          className="px-3 py-1.5 bg-card-bg border border-border rounded-full text-xs outline-none focus:border-pup-maroon w-32"
                        />
                      </div>
                    )}
                  </div>
                  
                  {fields.length >= 6 && (
                    <div className="text-xs text-amber-600 flex items-center gap-1 font-medium">
                      <AlertCircle size={12} /> Maximum 6 fields reached
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <h3 className="text-sm font-bold mb-3">Suggested for you</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Web Design', '3D Modeling', 'Motion Graphics', 'Branding'].map(s => (
                        <button 
                          key={s}
                          onClick={() => { if(fields.length < 6) { setFields([...fields, s]); handleFieldChange(); } }}
                          className="px-3 py-1.5 border border-border rounded-full text-xs font-medium hover:border-pup-maroon hover:text-pup-maroon transition-colors"
                        >
                          + {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Biography' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold">Biography</h2>
                <div>
                  <label className="block text-sm font-bold mb-1.5">Tell your story</label>
                  <div className="relative">
                    <textarea 
                      value={bio}
                      onChange={(e) => { setBio(e.target.value); handleFieldChange(); }}
                      maxLength={250}
                      className="w-full h-40 px-4 py-3 bg-card-bg border border-border rounded-xl outline-none focus:border-pup-maroon resize-none"
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-muted-text">
                      {bio.length}/250
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-secondary-surface rounded-lg">
                    <h4 className="text-xs font-bold text-secondary-text uppercase tracking-wider mb-2">Writing Guidance</h4>
                    <p className="text-sm text-secondary-text leading-relaxed">
                      Highlight your unique perspective as an Iskolar. Mention your favorite mediums, what inspires your campus-themed work, or your creative goals.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Social Links' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold">Social Links</h2>
                <div className="space-y-4">
                  {[
                    { icon: <Facebook size={18} />, label: 'Facebook', placeholder: 'facebook.com/username' },
                    { icon: <Instagram size={18} />, label: 'Instagram', placeholder: '@username' },
                    { icon: <Monitor size={18} />, label: 'Behance / Portfolio', placeholder: 'behance.net/username', error: true },
                    { icon: <Youtube size={18} />, label: 'YouTube', placeholder: 'youtube.com/@channel' },
                    { icon: <Globe size={18} />, label: 'Other Website', placeholder: 'https://...' },
                  ].map((social, i) => (
                    <div key={social.label}>
                      <label className="text-xs font-bold text-secondary-text mb-1.5 block uppercase">{social.label}</label>
                      <div className="relative flex items-center">
                        <div className="absolute left-4 text-muted-text">
                          {social.icon}
                        </div>
                        <input 
                          type="text" 
                          placeholder={social.placeholder}
                          onChange={handleFieldChange}
                          className={`w-full pl-12 pr-4 py-2.5 bg-card-bg border rounded-lg outline-none focus:ring-2 focus:ring-pup-maroon/20 transition-all ${
                            social.error ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-pup-maroon'
                          }`}
                        />
                      </div>
                      {social.error && <p className="text-[11px] text-red-500 mt-1 font-medium italic">Please enter a valid Behance URL</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'Portfolio Preferences' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold">Portfolio Preferences</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Public Profile', desc: 'Allow anyone on Campus Creatives to view your profile and portfolio.', default: true },
                    { title: 'Show College and Program', desc: 'Display your academic details on your public profile.', default: true },
                    { title: 'Show Social Links', desc: 'Make your social media connections visible to other students.', default: true },
                  ].map(pref => (
                    <div key={pref.title} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold">{pref.title}</div>
                        <div className="text-xs text-secondary-text">{pref.desc}</div>
                      </div>
                      <button 
                        onClick={handleFieldChange}
                        className={`w-12 h-6 rounded-full relative transition-colors ${pref.default ? 'bg-pup-maroon' : 'bg-gray-300'}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${pref.default ? 'right-1' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'Collaboration Status' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold">Collaboration Status</h2>
                <div className="p-6 bg-card-bg border border-border rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm font-bold">Open to campus collaborations</div>
                      <div className="text-xs text-secondary-text">Let other creators know you're looking for partners.</div>
                    </div>
                    <button 
                      onClick={() => { setCollab(!collab); handleFieldChange(); }}
                      className={`w-12 h-6 rounded-full relative transition-colors ${collab ? 'bg-status-approved' : 'bg-gray-300'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${collab ? 'right-1' : 'left-1'}`} />
                    </button>
                  </div>
                  
                  {collab && (
                    <div className="animate-in fade-in slide-in-from-top-2">
                      <label className="block text-sm font-bold mb-1.5">Collaboration Note (Optional)</label>
                      <textarea 
                        placeholder="e.g. Looking for a web developer for a student project..."
                        onChange={handleFieldChange}
                        className="w-full h-24 px-4 py-3 bg-main-bg border border-border rounded-lg outline-none focus:border-pup-maroon resize-none"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Bottom Bar Buttons */}
            <div className="flex items-center justify-end gap-3 pt-10 border-t border-border mt-10">
              <button onClick={onBack} className="px-6 py-2.5 text-sm font-bold text-secondary-text hover:text-primary-text transition-colors">
                Cancel
              </button>
              <button 
                onClick={() => {
                  handleSave();
                  onDone?.();
                }}
                disabled={!isTouched}
                className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  isTouched 
                  ? 'bg-pup-maroon text-white shadow-lg hover:bg-deep-maroon' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="col-span-3">
            <div className="sticky top-40 space-y-4">
              <h3 className="text-xs font-bold text-secondary-text uppercase tracking-widest px-1">Live Preview</h3>
              <div className="bg-card-bg border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="h-16 bg-soft-maroon relative">
                  <div className="absolute -bottom-6 left-4">
                    <div className="w-12 h-12 rounded-full border-2 border-card-bg bg-secondary-surface overflow-hidden">
                      <InitialsAvatar name="Rafael Mendoza" className="w-full h-full" textClassName="text-3xl" />
                    </div>
                  </div>
                </div>
                <div className="pt-8 p-4">
                  <div className="font-bold text-sm mb-0.5">{displayName}</div>
                  <div className="text-[10px] text-secondary-text mb-2">CCIS • BSIT</div>
                  <p className="text-[11px] text-secondary-text line-clamp-2 leading-relaxed mb-3 italic">"{bio}"</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {fields.slice(0, 3).map(f => (
                      <span key={f} className="px-1.5 py-0.5 bg-secondary-surface border border-border rounded text-[9px] font-medium text-muted-text">{f}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-full bg-soft-maroon text-pup-maroon text-[9px] font-bold flex items-center justify-center rounded">View Profile</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-secondary-surface rounded-xl border border-border">
                <div className="text-[11px] text-secondary-text flex items-center gap-2">
                  <Monitor size={14} /> Profile is public and searchable
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
