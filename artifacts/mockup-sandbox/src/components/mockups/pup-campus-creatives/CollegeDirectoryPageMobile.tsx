import React from 'react';
import { Search } from 'lucide-react';
import { MobileBottomNav } from './_shared/MobileBottomNav';
import './_group.css';

const colleges = [
  { abbr: 'CAF', name: 'College of Accountancy and Finance', creators: 124, works: 450 },
  { abbr: 'CADBE', name: 'College of Architecture and the Built Environment', creators: 210, works: 840 },
  { abbr: 'CAL', name: 'College of Arts and Letters', creators: 450, works: 1800 },
  { abbr: 'CBA', name: 'College of Business Administration', creators: 180, works: 620 },
  { abbr: 'COC', name: 'College of Communication', creators: 520, works: 2100 },
  { abbr: 'CCIS', name: 'College of Computer and Information Sciences', creators: 380, works: 1200 },
  { abbr: 'COED', name: 'College of Education', creators: 150, works: 540 },
  { abbr: 'CE', name: 'College of Engineering', creators: 240, works: 780 },
  { abbr: 'CHK', name: 'College of Human Kinetics', creators: 95, works: 320 },
  { abbr: 'CL', name: 'College of Law', creators: 60, works: 180 },
  { abbr: 'CPSPA', name: 'College of Political Science and Public Administration', creators: 110, works: 410 },
  { abbr: 'CS', name: 'College of Science', creators: 130, works: 480 },
  { abbr: 'CSSD', name: 'College of Social Sciences and Development', creators: 170, works: 590 },
  { abbr: 'CTHTM', name: 'College of Tourism, Hospitality and Transportation Management', creators: 145, works: 460 },
  { abbr: 'ITECH', name: 'Institute of Technology', creators: 190, works: 610 },
  { abbr: 'GS', name: 'Graduate School', creators: 85, works: 310 },
];

export function CollegeDirectoryPageMobile() {
  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-y-auto pb-24">
      <header className="px-5 pt-8 pb-4 bg-warm-white border-b border-border sticky top-0 z-40">
        <h1 className="text-2xl font-bold mb-4">Colleges</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
          <input 
            type="text" 
            placeholder="Search colleges..." 
            className="w-full h-11 pl-10 pr-4 bg-secondary-surface border-none rounded-xl text-[15px] focus:ring-2 focus:ring-pup-maroon/20 focus:outline-none"
          />
        </div>
      </header>

      <div className="flex items-center gap-2 overflow-x-auto px-5 py-4 no-scrollbar">
        {['All', 'Visual Art', 'Design', 'Technology', 'Performing Arts', 'Writing', 'Media'].map((cat, i) => (
          <button 
            key={cat}
            className={`px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors ${
              i === 0 ? 'bg-pup-maroon text-white' : 'bg-card-bg text-secondary-text border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 px-5">
        {colleges.map((college) => (
          <div key={college.abbr} className="bg-card-bg p-4 rounded-2xl border border-border active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 rounded-xl bg-pup-maroon text-white flex items-center justify-center font-bold text-xs mb-3">
              {college.abbr}
            </div>
            <h3 className="text-[14px] font-bold mb-3 line-clamp-2 leading-tight">{college.name}</h3>
            
            <div className="flex flex-col gap-1">
              <div className="text-[11px] text-muted-text uppercase font-medium tracking-wider">{college.creators} Creators</div>
              <div className="text-[11px] text-muted-text uppercase font-medium tracking-wider">{college.works} Works</div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-border flex justify-end">
              <div className="text-pup-maroon font-bold text-[11px] uppercase tracking-wide">View →</div>
            </div>
          </div>
        ))}
      </div>

      <MobileBottomNav />
    </div>
  );
}
