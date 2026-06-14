import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import '../_group.css';

export function MobileHeader() {
  return (
    <header className="w-full h-14 bg-warm-white border-b border-border flex items-center justify-between px-4 sticky top-0 z-50">
      <a href="#" className="flex items-center gap-1.5 text-pup-maroon text-lg tracking-tight">
        <span className="font-bold font-inter">PUP:</span>
        <span className="font-medium font-inter hidden sm:inline">Campus Creatives</span>
        <span className="font-medium font-inter sm:hidden">CC</span>
      </a>

      <div className="flex items-center gap-1">
        <button className="p-2 text-secondary-text hover:text-pup-maroon transition-colors rounded-full hover:bg-soft-maroon">
          <Search size={20} />
        </button>
        <button className="p-2 text-secondary-text hover:text-pup-maroon transition-colors rounded-full hover:bg-soft-maroon relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pup-maroon rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
