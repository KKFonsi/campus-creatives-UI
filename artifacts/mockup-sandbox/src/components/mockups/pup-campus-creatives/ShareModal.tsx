import React, { useEffect, useState } from 'react';
import { Copy, Facebook, Instagram, Send, Link2, X, Check, Smartphone } from 'lucide-react';
import './_group.css';

interface ShareModalProps {
  onClose?: () => void;
}

export function ShareModal({ onClose }: ShareModalProps = {}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] flex items-center justify-center p-6" onClick={onClose}>
      <div className="w-full max-w-[480px] bg-card-bg rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200" onClick={(event) => event.stopPropagation()}>
        <div className="p-8 border-b border-border relative">
          <button type="button" onClick={onClose} aria-label="Close share modal" className="absolute right-6 top-6 w-10 h-10 rounded-full hover:bg-secondary-surface flex items-center justify-center transition-colors">
            <X size={20} />
          </button>
          <h2 className="text-2xl font-black mb-1">Share Work</h2>
          <p className="text-secondary-text">Support this PUP creative by sharing their work.</p>
        </div>

        <div className="p-8">
          {/* Content Preview */}
          <div className="flex items-center gap-4 p-4 bg-secondary-surface rounded-2xl mb-8">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-border">
              <img src="/__mockup/images/thumbnail_1.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold">Sta. Mesa After the Rain</h4>
              <p className="text-[13px] text-secondary-text">by Bianca Reyes</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Facebook', icon: <Facebook size={20} className="text-[#1877F2]" />, color: 'hover:bg-[#1877F2]/10 hover:border-[#1877F2]' },
              { label: 'Messenger', icon: <Send size={20} className="text-[#00B2FF]" />, color: 'hover:bg-[#00B2FF]/10 hover:border-[#00B2FF]' },
              { label: 'Instagram', icon: <Instagram size={20} className="text-[#E4405F]" />, color: 'hover:bg-[#E4405F]/10 hover:border-[#E4405F]' },
              { label: 'Device Share', icon: <Smartphone size={20} className="text-primary-text" />, color: 'hover:bg-primary-text/10 hover:border-primary-text' },
            ].map(option => (
              <button key={option.label} className={`flex items-center gap-3 p-4 bg-white border border-border rounded-2xl transition-all font-bold text-sm ${option.color}`}>
                {option.icon} {option.label}
              </button>
            ))}
          </div>

          <div>
            <label className="text-xs font-black uppercase tracking-widest text-muted-text mb-2 block">Direct Link</label>
            <div className="relative">
              <input 
                type="text" 
                readOnly 
                value="https://pup.creatives/works/sta-mesa-rain"
                className="w-full h-14 bg-secondary-surface border-none rounded-2xl px-5 pr-14 text-[14px] font-medium"
              />
              <button 
                onClick={handleCopy}
                className={`absolute right-2 top-1/2 -translate-y-1/2 h-10 px-4 rounded-xl flex items-center justify-center gap-2 transition-all ${copied ? 'bg-green-500 text-white' : 'bg-pup-maroon text-white hover:bg-deep-maroon'}`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span className="text-[13px] font-bold">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShareModalMobile({ onClose }: ShareModalProps = {}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[110] flex items-end" onClick={onClose}>
      <div className="w-full bg-white rounded-t-[32px] overflow-hidden animate-in slide-in-from-bottom duration-300" onClick={(event) => event.stopPropagation()}>
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto my-4"></div>
        
        <div className="px-6 pb-4">
          <h2 className="text-xl font-black mb-1">Share</h2>
          <p className="text-[13px] text-secondary-text mb-6">"Sta. Mesa After the Rain" by Bianca Reyes</p>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 mb-6 border-b border-border">
            {[
              { label: copied ? 'Copied' : 'Copy Link', icon: copied ? <Check size={24} /> : <Link2 size={24} />, color: copied ? 'bg-status-approved/10 text-status-approved' : 'bg-secondary-surface', onClick: handleCopy },
              { label: 'Facebook', icon: <Facebook size={24} className="text-[#1877F2]" />, color: 'bg-[#1877F2]/10' },
              { label: 'Messenger', icon: <Send size={24} className="text-[#00B2FF]" />, color: 'bg-[#00B2FF]/10' },
              { label: 'Instagram', icon: <Instagram size={24} className="text-[#E4405F]" />, color: 'bg-[#E4405F]/10' },
              { label: 'Twitter', icon: <X size={24} />, color: 'bg-black/5' },
            ].map(option => (
              <div key={option.label} className="flex flex-col items-center gap-2 min-w-[70px]">
                <button onClick={option.onClick} className={`w-14 h-14 rounded-2xl flex items-center justify-center ${option.color}`}>
                  {option.icon}
                </button>
                <span className="text-[11px] font-bold text-secondary-text">{option.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pb-10">
            <button className="w-full h-14 bg-secondary-surface rounded-2xl font-bold flex items-center justify-center gap-2">
              <Smartphone size={20} /> Share via System
            </button>
            <button type="button" onClick={onClose} className="w-full h-14 bg-pup-maroon text-white rounded-2xl font-bold">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
