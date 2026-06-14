import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import '../_group.css';

export function DesktopNav({ authenticated = false }: { authenticated?: boolean }) {
  return (
    <nav className="w-full h-20 bg-warm-white border-b border-border flex items-center justify-center px-8 sticky top-0 z-50">
      <div className="w-full max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-pup-maroon text-xl tracking-tight">
          <span className="font-bold font-inter">PUP:</span>
          <span className="font-medium font-inter">Campus Creatives</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-8 text-[15px] font-medium text-secondary-text">
          <a href="#" className="text-pup-maroon font-semibold border-b-2 border-pup-gold pb-1">Home</a>
          <a href="#" className="hover:text-pup-maroon transition-colors">Explore</a>
          <a href="#" className="hover:text-pup-maroon transition-colors">Gallery</a>
          <a href="#" className="hover:text-pup-maroon transition-colors">Events</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {authenticated ? (
            <>
              <button className="p-2 text-secondary-text hover:text-pup-maroon transition-colors rounded-full hover:bg-soft-maroon">
                <Search size={20} />
              </button>
              <button className="p-2 text-secondary-text hover:text-pup-maroon transition-colors rounded-full hover:bg-soft-maroon relative">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pup-maroon rounded-full"></span>
              </button>
              <button className="px-5 py-2.5 bg-pup-maroon text-white font-medium rounded-[10px] hover:bg-deep-maroon transition-colors text-[15px]">
                Submit Work
              </button>
              <div className="w-10 h-10 rounded-full bg-secondary-surface border border-border overflow-hidden ml-2 cursor-pointer">
                <img src="/__mockup/images/creator-portrait.png" alt="User avatar" className="w-full h-full object-cover" />
              </div>
            </>
          ) : (
            <>
              <a href="#" className="text-[15px] font-medium text-primary-text hover:text-pup-maroon transition-colors px-4 py-2">
                Log In
              </a>
              <a href="#" className="px-5 py-2.5 bg-pup-maroon text-white font-medium rounded-[10px] hover:bg-deep-maroon transition-colors text-[15px]">
                Join Campus Creatives
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
