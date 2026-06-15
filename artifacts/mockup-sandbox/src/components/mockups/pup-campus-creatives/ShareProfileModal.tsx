import React, { useEffect, useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Facebook, 
  MessageCircle, 
  Instagram, 
  Share, 
  QrCode,
  Smartphone
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import './_group.css';

export function ShareProfileModal({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const [copied, setCopied] = useState(false);
  const profileUrl = "campuscreatives.pup.edu.ph/creators/rafael-mendoza";

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="bg-white w-full max-w-[480px] rounded-[24px] border border-border shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-warm-white">
          <h3 className="text-xl font-bold">Share Creator Profile</h3>
          <button onClick={onClose} className="p-2 hover:bg-secondary-surface rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {/* Profile Preview Card */}
          <div className="p-5 bg-secondary-surface/30 border border-border rounded-2xl mb-8 flex items-center gap-4">
            <InitialsAvatar name="Rafael Mendoza" className="w-16 h-16 border-2 border-white shadow-sm" textClassName="text-xl" />
            <div>
              <h4 className="font-bold text-lg">Rafael Mendoza</h4>
              <p className="text-xs text-secondary-text mb-2">CCIS • BS Information Technology</p>
              <div className="flex gap-1.5">
                {['UI/UX', 'Digital Art'].map(field => (
                  <span key={field} className="px-2 py-0.5 bg-white border border-border text-[10px] font-bold rounded-full text-pup-maroon">
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* URL Field */}
          <div className="mb-8">
             <label className="text-[10px] font-bold text-muted-text uppercase mb-2 block tracking-widest">Profile Link</label>
             <div className="flex gap-2">
                <div className="flex-1 bg-secondary-surface/50 border border-border rounded-xl px-4 py-3 text-sm text-secondary-text font-medium truncate">
                   {profileUrl}
                </div>
                <button 
                  onClick={handleCopy}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm ${copied ? 'bg-status-approved text-white' : 'bg-pup-maroon text-white hover:bg-deep-maroon'}`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
             </div>
          </div>

          {/* Share Grid */}
          <div className="mb-8">
             <label className="text-[10px] font-bold text-muted-text uppercase mb-4 block tracking-widest text-center">Share Via</label>
             <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-all group">
                   <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook size={20} fill="currentColor" />
                   </div>
                   <span className="text-sm font-bold text-secondary-text">Facebook</span>
                </button>
                <button className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-all group">
                   <div className="w-10 h-10 rounded-full bg-[#0084FF]/10 text-[#0084FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle size={20} fill="currentColor" />
                   </div>
                   <span className="text-sm font-bold text-secondary-text">Messenger</span>
                </button>
                <button className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-all group">
                   <div className="w-10 h-10 rounded-full bg-[#E4405F]/10 text-[#E4405F] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram size={20} />
                   </div>
                   <span className="text-sm font-bold text-secondary-text">Instagram</span>
                </button>
                <button className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl hover:bg-secondary-surface transition-all group">
                   <div className="w-10 h-10 rounded-full bg-pup-maroon/10 text-pup-maroon flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Smartphone size={20} />
                   </div>
                   <span className="text-sm font-bold text-secondary-text">Device Share</span>
                </button>
             </div>
          </div>

          {/* QR Code */}
          <div className="text-center">
             <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl text-primary-text font-bold text-sm hover:border-pup-maroon hover:text-pup-maroon transition-all group">
                <QrCode size={18} className="group-hover:scale-110 transition-transform" />
                Download QR Code
             </button>
             <p className="text-[10px] text-muted-text mt-3">(QR generator feature coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShareProfileModalMobile({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const [copied, setCopied] = useState(false);
  const profileUrl = "campuscreatives.pup.edu.ph/creators/rafael-mendoza";

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      <div 
        className="absolute inset-0 bg-dark-surface/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="bg-white w-[390px] rounded-t-[32px] relative z-10 animate-in slide-in-from-bottom-full duration-300 pb-safe">
        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto my-3"></div>
        
        <div className="px-6 pt-2 pb-10">
          <div className="flex items-center justify-between mb-8">
             <h3 className="text-xl font-bold">Share Profile</h3>
             <button onClick={onClose} className="p-2 bg-secondary-surface rounded-full">
                <X size={18} />
             </button>
          </div>

          <div className="flex items-center gap-4 mb-8 p-4 bg-secondary-surface/30 border border-border rounded-2xl">
            <InitialsAvatar name="Rafael Mendoza" className="w-14 h-14 border-2 border-white shadow-sm" textClassName="text-lg" />
            <div>
              <h4 className="font-bold">Rafael Mendoza</h4>
              <p className="text-[11px] text-secondary-text">CCIS • BS Information Technology</p>
            </div>
          </div>

          <div className="space-y-6">
             <div>
                <label className="text-[10px] font-bold text-muted-text uppercase mb-2 block">Profile Link</label>
                <div className="flex gap-2">
                   <div className="flex-1 bg-secondary-surface/50 border border-border rounded-xl px-4 py-3 text-xs text-secondary-text font-medium truncate leading-[20px]">
                      {profileUrl}
                   </div>
                   <button 
                     onClick={handleCopy}
                     className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all ${copied ? 'bg-status-approved text-white' : 'bg-pup-maroon text-white'}`}
                   >
                     {copied ? <Check size={20} /> : <Copy size={20} />}
                   </button>
                </div>
             </div>

             <div className="grid grid-cols-4 gap-4">
                <button className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
                      <Facebook size={24} fill="currentColor" />
                   </div>
                   <span className="text-[10px] font-bold text-secondary-text">Facebook</span>
                </button>
                <button className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-full bg-[#0084FF]/10 text-[#0084FF] flex items-center justify-center">
                      <MessageCircle size={24} fill="currentColor" />
                   </div>
                   <span className="text-[10px] font-bold text-secondary-text">Messenger</span>
                </button>
                <button className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-full bg-[#E4405F]/10 text-[#E4405F] flex items-center justify-center">
                      <Instagram size={24} />
                   </div>
                   <span className="text-[10px] font-bold text-secondary-text">Instagram</span>
                </button>
                <button className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-full bg-secondary-surface text-primary-text flex items-center justify-center">
                      <Share size={24} />
                   </div>
                   <span className="text-[10px] font-bold text-secondary-text">More</span>
                </button>
             </div>

             <button className="w-full flex items-center justify-center gap-3 py-4 border-2 border-border rounded-2xl font-bold text-sm">
                <QrCode size={20} />
                Generate QR Code
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
