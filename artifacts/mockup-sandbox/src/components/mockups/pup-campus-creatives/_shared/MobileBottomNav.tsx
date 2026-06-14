import React from 'react';
import { Home, Compass, PlusSquare, Calendar, User } from 'lucide-react';
import '../_group.css';

export function MobileBottomNav() {
  return (
    <nav className="w-full h-[68px] bg-warm-white border-t border-border fixed bottom-0 left-0 z-50 flex items-center justify-around px-2 pb-safe">
      <a href="#" className="flex flex-col items-center justify-center w-16 h-full text-pup-maroon gap-1">
        <Home size={24} className="stroke-[2.5px]" />
        <span className="text-[10px] font-medium">Home</span>
      </a>
      
      <a href="#" className="flex flex-col items-center justify-center w-16 h-full text-secondary-text hover:text-pup-maroon gap-1">
        <Compass size={24} />
        <span className="text-[10px] font-medium">Explore</span>
      </a>
      
      <div className="flex flex-col items-center justify-center w-16 h-full -mt-5">
        <a href="#" className="w-12 h-12 rounded-full bg-pup-maroon text-white flex items-center justify-center shadow-sm hover:bg-deep-maroon transition-colors">
          <PlusSquare size={24} />
        </a>
        <span className="text-[10px] font-medium text-pup-maroon mt-1">Submit</span>
      </div>
      
      <a href="#" className="flex flex-col items-center justify-center w-16 h-full text-secondary-text hover:text-pup-maroon gap-1">
        <Calendar size={24} />
        <span className="text-[10px] font-medium">Events</span>
      </a>
      
      <a href="#" className="flex flex-col items-center justify-center w-16 h-full text-secondary-text hover:text-pup-maroon gap-1">
        <div className="w-6 h-6 rounded-full bg-secondary-surface border border-border overflow-hidden">
          <img src="/__mockup/images/creator-portrait.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <span className="text-[10px] font-medium">Profile</span>
      </a>
    </nav>
  );
}
