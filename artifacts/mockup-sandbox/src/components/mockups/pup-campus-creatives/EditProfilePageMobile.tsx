import React, { useState } from 'react';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { 
  Camera, 
  Image as ImageIcon, 
  ChevronLeft, 
  Check, 
  AlertCircle, 
  X,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Monitor,
  CheckCircle2,
  Plus,
  ArrowRight
} from 'lucide-react';
import './_group.css';

interface EditProfilePageMobileProps {
  onBack?: () => void;
  onDone?: () => void;
}

export function EditProfilePageMobile({ onBack, onDone }: EditProfilePageMobileProps = {}) {
  const [isTouched, setIsTouched] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // Form States
  const [displayName, setDisplayName] = useState('Rafael Mendoza');
  const [bio, setBio] = useState('Passionate about blending technology with visual storytelling...');
  const [fields, setFields] = useState(['UI/UX', 'Digital Art', 'Multimedia', 'Photography']);
  const [collab, setCollab] = useState(true);

  const handleFieldChange = () => {
    if (!isTouched) setIsTouched(true);
  };

  const handleSave = () => {
    setShowToast(true);
    setIsTouched(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter pb-32">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-30 bg-card-bg border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="p-1 hover:bg-secondary-surface rounded-full transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-[17px] font-bold">Edit Profile</h1>
        </div>
        <button 
          onClick={() => {
            handleSave();
            onDone?.();
          }}
          className={`text-sm font-bold px-4 py-1.5 rounded-full transition-all ${
            isTouched 
            ? 'bg-pup-maroon text-white shadow-md' 
            : 'text-muted-text'
          }`}
        >
          Save
        </button>
      </div>

      {/* Unsaved Banner */}
      {isTouched && (
        <div className="bg-amber-50 border-b border-amber-200 py-1.5 px-4 animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center gap-2 text-amber-700 text-[11px] font-medium">
            <AlertCircle size={14} />
            Unsaved changes detected.
          </div>
        </div>
      )}

      <div className="px-4 py-6 space-y-6">
        {/* Profile Identity Card */}
        <section className="bg-card-bg border border-border rounded-xl p-5 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold flex items-center gap-2">
              <div className="w-1 h-4 bg-pup-maroon rounded-full" />
              Profile Identity
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <InitialsAvatar name="Rafael Mendoza" className="w-20 h-20 border-2 border-border" textClassName="text-2xl" />
              <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center text-white pointer-events-none">
                <Camera size={18} />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="text-[11px] text-muted-text uppercase font-bold tracking-wider">Cover Image</div>
              <div className="h-14 w-full rounded-lg bg-secondary-surface border border-border overflow-hidden relative">
                <img src="/__mockup/images/hero-collage.jpg" alt="Cover" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon size={16} className="text-pup-maroon" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-secondary-text mb-1.5 block">DISPLAY NAME</label>
              <input 
                type="text" 
                value={displayName}
                onChange={(e) => { setDisplayName(e.target.value); handleFieldChange(); }}
                className="w-full px-4 py-2.5 bg-main-bg border border-border rounded-lg text-sm outline-none focus:border-pup-maroon"
              />
            </div>
          </div>
        </section>

        {/* Academic Information Card */}
        <section className="bg-card-bg border border-border rounded-xl p-5 shadow-sm space-y-5">
          <h2 className="text-sm font-bold flex items-center gap-2">
            <div className="w-1 h-4 bg-pup-maroon rounded-full" />
            Academic Info
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-secondary-text mb-1.5 block">COLLEGE</label>
              <div className="w-full px-4 py-2.5 bg-secondary-surface border border-border rounded-lg text-sm text-secondary-text flex justify-between items-center">
                CCIS <span className="text-[10px] text-muted-text">Locked</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-secondary-text mb-1.5 block">PROGRAM</label>
              <div className="w-full px-4 py-2.5 bg-secondary-surface border border-border rounded-lg text-sm text-secondary-text">
                BS Information Technology
              </div>
            </div>
          </div>
        </section>

        {/* Creative Fields Card */}
        <section className="bg-card-bg border border-border rounded-xl p-5 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold flex items-center gap-2">
              <div className="w-1 h-4 bg-pup-maroon rounded-full" />
              Creative Fields
            </h2>
            <span className="text-[11px] text-muted-text">{fields.length}/6</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {fields.map(f => (
              <span key={f} className="flex items-center gap-1 px-3 py-1.5 bg-soft-maroon text-pup-maroon text-[11px] font-bold rounded-full">
                {f} <X size={12} onClick={() => { setFields(fields.filter(i => i !== f)); handleFieldChange(); }} />
              </span>
            ))}
            <button className="px-3 py-1.5 border border-border border-dashed rounded-full text-[11px] font-bold text-secondary-text flex items-center gap-1">
              <Plus size={12} /> Add
            </button>
          </div>
        </section>

        {/* Biography Card */}
        <section className="bg-card-bg border border-border rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold flex items-center gap-2">
              <div className="w-1 h-4 bg-pup-maroon rounded-full" />
              Biography
            </h2>
            <span className="text-[11px] text-muted-text">{bio.length}/250</span>
          </div>
          <textarea 
            value={bio}
            onChange={(e) => { setBio(e.target.value); handleFieldChange(); }}
            className="w-full h-32 px-4 py-3 bg-main-bg border border-border rounded-lg text-sm outline-none focus:border-pup-maroon resize-none"
          />
        </section>

        {/* Social Links Card */}
        <section className="bg-card-bg border border-border rounded-xl p-5 shadow-sm space-y-5">
          <h2 className="text-sm font-bold flex items-center gap-2">
            <div className="w-1 h-4 bg-pup-maroon rounded-full" />
            Social Links
          </h2>
          <div className="space-y-3">
            {[
              { icon: <Facebook size={16} />, label: 'Facebook' },
              { icon: <Instagram size={16} />, label: 'Instagram' },
              { icon: <Monitor size={16} />, label: 'Portfolio' },
            ].map(social => (
              <div key={social.label} className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text">{social.icon}</div>
                <input 
                  type="text" 
                  placeholder={social.label}
                  onChange={handleFieldChange}
                  className="w-full pl-10 pr-4 py-2 bg-main-bg border border-border rounded-lg text-[13px] outline-none"
                />
              </div>
            ))}
            <button className="w-full py-2 text-[12px] font-bold text-pup-maroon flex items-center justify-center gap-1">
              <Plus size={14} /> Add more links
            </button>
          </div>
        </section>

        {/* Preferences Card */}
        <section className="bg-card-bg border border-border rounded-xl p-5 shadow-sm space-y-6">
          <h2 className="text-sm font-bold flex items-center gap-2">
            <div className="w-1 h-4 bg-pup-maroon rounded-full" />
            Preferences
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Public Profile', default: true },
              { title: 'Show College/Program', default: true },
              { title: 'Show Social Links', default: true },
            ].map(pref => (
              <div key={pref.title} className="flex items-center justify-between">
                <span className="text-[13px] font-medium">{pref.title}</span>
                <button 
                  onClick={handleFieldChange}
                  className={`w-10 h-5 rounded-full relative transition-colors ${pref.default ? 'bg-pup-maroon' : 'bg-gray-200'}`}
                >
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${pref.default ? 'right-0.5' : 'left-0.5'}`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Status Card */}
        <section className="bg-card-bg border border-border rounded-xl p-5 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold mb-1">Collaborations</h2>
              <p className="text-[11px] text-muted-text">Open to campus collaborations</p>
            </div>
            <button 
              onClick={() => { setCollab(!collab); handleFieldChange(); }}
              className={`w-10 h-5 rounded-full relative transition-colors ${collab ? 'bg-status-approved' : 'bg-gray-200'}`}
            >
              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${collab ? 'right-0.5' : 'left-0.5'}`} />
            </button>
          </div>
          {collab && (
            <textarea 
              placeholder="Collaboration message..."
              onChange={handleFieldChange}
              className="w-full h-20 px-3 py-2 bg-main-bg border border-border rounded-lg text-sm outline-none animate-in fade-in slide-in-from-top-1"
            />
          )}
        </section>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-[390px] bg-card-bg border-t border-border px-5 py-4 flex gap-3 z-30">
        <button onClick={onBack} className="flex-1 py-3 border border-border rounded-xl font-bold text-sm">Cancel</button>
        <button 
          onClick={() => {
            handleSave();
            onDone?.();
          }}
          disabled={!isTouched}
          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
            isTouched ? 'bg-pup-maroon text-white shadow-lg' : 'bg-gray-100 text-gray-400'
          }`}
        >
          Save Changes
        </button>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-status-approved text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50 animate-in zoom-in slide-in-from-bottom-2">
          <CheckCircle2 size={18} />
          <span className="text-[13px] font-bold">Profile updated!</span>
        </div>
      )}

      <MobileBottomNav />
    </div>
  );
}
