import React from 'react';
import { Search } from 'lucide-react';
import { DesktopNav } from './_shared/DesktopNav';
import './_group.css';

const colleges = [
  { abbr: 'CAF', name: 'College of Accountancy and Finance', desc: 'Financial storytelling and professional excellence.', categories: ['Writing', 'Design', 'Media'], creators: 124, works: 450 },
  { abbr: 'CADBE', name: 'College of Architecture and the Built Environment', desc: 'Shaping spaces and visualizing the future of the campus.', categories: ['Design', 'Visual Art', 'Technology'], creators: 210, works: 840 },
  { abbr: 'CAL', name: 'College of Arts and Letters', desc: 'The heartbeat of PUP creative expression and humanities.', categories: ['Visual Art', 'Writing', 'Performing Arts'], creators: 450, works: 1800 },
  { abbr: 'CBA', name: 'College of Business Administration', desc: 'Creative marketing and entrepreneurial storytelling.', categories: ['Media', 'Design', 'Writing'], creators: 180, works: 620 },
  { abbr: 'COC', name: 'College of Communication', desc: 'Mastering the art of media, journalism, and production.', categories: ['Media', 'Photography', 'Film'], creators: 520, works: 2100 },
  { abbr: 'CCIS', name: 'College of Computer and Information Sciences', desc: 'Where technology meets digital creativity and innovation.', categories: ['Technology', 'Design', 'Digital Art'], creators: 380, works: 1200 },
  { abbr: 'COED', name: 'College of Education', desc: 'Creative pedagogy and educational media design.', categories: ['Media', 'Visual Art', 'Writing'], creators: 150, works: 540 },
  { abbr: 'CE', name: 'College of Engineering', desc: 'The intersection of technical precision and creative solutions.', categories: ['Technology', 'Design', 'Visual Art'], creators: 240, works: 780 },
  { abbr: 'CHK', name: 'College of Human Kinetics', desc: 'Expressing movement, sports culture, and physical artistry.', categories: ['Performing Arts', 'Media', 'Photography'], creators: 95, works: 320 },
  { abbr: 'CL', name: 'College of Law', desc: 'The art of advocacy and legal storytelling.', categories: ['Writing', 'Media'], creators: 60, works: 180 },
  { abbr: 'CPSPA', name: 'College of Political Science and Public Administration', desc: 'Creative activism and socio-political visual narratives.', categories: ['Media', 'Writing', 'Visual Art'], creators: 110, works: 410 },
  { abbr: 'CS', name: 'College of Science', desc: 'Visualizing data and the beauty of the natural world.', categories: ['Visual Art', 'Technology', 'Photography'], creators: 130, works: 480 },
  { abbr: 'CSSD', name: 'College of Social Sciences and Development', desc: 'Creative perspectives on community and social change.', categories: ['Writing', 'Media', 'Photography'], creators: 170, works: 590 },
  { abbr: 'CTHTM', name: 'College of Tourism, Hospitality and Transportation Management', desc: 'Hospitality arts and cultural creative experiences.', categories: ['Media', 'Design', 'Visual Art'], creators: 145, works: 460 },
  { abbr: 'ITECH', name: 'Institute of Technology', desc: 'Practical creative skills and technical craftsmanship.', categories: ['Technology', 'Design', 'Visual Art'], creators: 190, works: 610 },
  { abbr: 'GS', name: 'Graduate School', desc: 'Advanced creative research and professional portfolios.', categories: ['Writing', 'Media', 'Design'], creators: 85, works: 310 },
];

export function CollegeDirectoryPage() {
  return (
    <div className="min-h-screen bg-main-bg font-inter text-primary-text pb-20">
      <DesktopNav authenticated={true} />
      
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <header className="mb-12">
          <h1 className="text-[42px] font-bold tracking-tight mb-2">Explore by College</h1>
          <p className="text-secondary-text text-lg">Discover the diverse creative landscape across all PUP academic units.</p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="relative flex-1 max-w-[500px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" size={20} />
            <input 
              type="text" 
              placeholder="Search for a college..." 
              className="w-full h-12 pl-12 pr-4 bg-card-bg border border-border rounded-xl focus:outline-none focus:border-pup-maroon transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {['All', 'Visual Art', 'Design', 'Technology', 'Performing Arts', 'Writing', 'Media'].map((cat, i) => (
              <button 
                key={cat}
                className={`px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-colors ${
                  i === 0 ? 'bg-pup-maroon text-white' : 'bg-secondary-surface text-secondary-text hover:bg-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <div key={college.abbr} className="bg-card-bg rounded-[20px] p-6 border border-border hover:shadow-md transition-all group cursor-pointer relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 rounded-2xl bg-pup-maroon text-white flex items-center justify-center font-bold text-xl shadow-sm">
                  {college.abbr}
                </div>
                <div className="w-20 h-20 rounded-xl bg-secondary-surface border border-border overflow-hidden rotate-3 translate-x-4 -translate-y-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <img src={`/__mockup/images/college_${Math.floor(Math.random() * 5) + 1}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1 group-hover:text-pup-maroon transition-colors">{college.name}</h3>
              <p className="text-[14px] text-secondary-text mb-4 line-clamp-1">{college.desc}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {college.categories.map(cat => (
                  <span key={cat} className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[11px] font-semibold rounded">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-[15px] font-bold">{college.creators}</div>
                    <div className="text-[11px] text-muted-text uppercase tracking-wider">Creators</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[15px] font-bold">{college.works}</div>
                    <div className="text-[11px] text-muted-text uppercase tracking-wider">Works</div>
                  </div>
                </div>
                <button className="text-pup-maroon font-bold text-[14px] flex items-center gap-1 group/btn">
                  View Showcase 
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
