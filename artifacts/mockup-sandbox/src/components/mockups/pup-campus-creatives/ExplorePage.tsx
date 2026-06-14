import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  X, 
  Heart, 
  Bookmark, 
  ExternalLink, 
  Award,
  MoreVertical
} from 'lucide-react';
import './_group.css';

export function ExplorePage() {
  const [activeFilters, setActiveFilters] = useState(['Photography', 'COC']);
  const [sortBy, setSortBy] = useState('Recently Approved');

  const filters = [
    { label: 'College', options: ['CAF', 'CADBE', 'CAL', 'CBA', 'COC', 'CCIS', 'COED', 'CE', 'CHK', 'CL', 'CPSPA', 'CS', 'CSSD', 'CTHTM', 'ITECH', 'GS'] },
    { label: 'Program', options: ['Broadcasting', 'Journalism', 'Communication Management', 'Computer Science', 'Information Technology'] },
    { label: 'Creative Category', options: ['Visual Art', 'Photography', 'Digital Art', 'Music', 'Film and Video', 'Spoken Word', 'Dance', 'Design'] },
    { label: 'Content Type', options: ['Project', 'Portfolio', 'Process', 'Case Study'] },
    { label: 'Event', options: ['PUP Likha 2026', 'Sinta Film Fest', 'Guhit Iskolar'] },
    { label: 'Recognition', options: ['Campus Highlight', 'Moderator\'s Pick', 'Rising Creator'] },
  ];

  const works = [
    { id: 1, title: 'Sta. Mesa After the Rain', creator: 'Bianca Reyes', college: 'COC', category: 'Photography', highlight: 'Campus Highlight', image: '/__mockup/images/thumbnail_1.jpg', appreciates: 245 },
    { id: 2, title: 'Sinta sa Riles', creator: 'Marco Villanueva', college: 'COC', category: 'Photography', image: '/__mockup/images/thumbnail_2.jpg', appreciates: 182 },
    { id: 3, title: 'Digital Sinta', creator: 'Rafael Mendoza', college: 'CCIS', category: 'Digital Art', highlight: 'CCIS Highlight', image: '/__mockup/images/thumbnail_3.jpg', appreciates: 156 },
    { id: 4, title: 'Railway Sketches', creator: 'Elena Mercado', college: 'CADBE', category: 'Visual Art', image: '/__mockup/images/thumbnail_4.jpg', appreciates: 142 },
    { id: 5, title: 'Campus Frequencies', creator: 'Joven Bautista', college: 'COC', category: 'Music', image: '/__mockup/images/event_1.jpg', appreciates: 98 },
    { id: 6, title: 'Polytechnic Dreams', creator: 'Dana Cruz', college: 'CCIS', category: 'Graphic Design', image: '/__mockup/images/thumbnail_3.jpg', appreciates: 120 },
    { id: 7, title: 'Pasig at Dusk', creator: 'Sofia Lim', college: 'CAL', category: 'Photography', image: '/__mockup/images/college_1.jpg', appreciates: 85 },
    { id: 8, title: 'Voices from the Lagoon', creator: 'Mika Santos', college: 'CAL', category: 'Poetry', highlight: 'Moderator\'s Pick', image: '/__mockup/images/college_2.jpg', appreciates: 134 },
    { id: 9, title: 'Engineering in Motion', creator: 'Leo Torres', college: 'CE', category: 'Film and Video', image: '/__mockup/images/college_3.jpg', appreciates: 76 },
    { id: 10, title: 'Manila Student Life', creator: 'Ana dela Cruz', college: 'COC', category: 'Documentary Photography', image: '/__mockup/images/college_4.jpg', appreciates: 112 },
    { id: 11, title: 'Tinig ng Bayan', creator: 'Rafael Santos', college: 'CAL', category: 'Spoken Word', image: '/__mockup/images/thumbnail_4.jpg', appreciates: 145 },
    { id: 12, title: 'Concrete and Creativity', creator: 'Mark Rivera', college: 'CADBE', category: 'Architecture', image: '/__mockup/images/college_5.jpg', appreciates: 64 },
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter">
      <DesktopNav authenticated={true} />
      
      <main className="max-w-[1200px] mx-auto px-8 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Explore PUP Creativity</h1>
          <p className="text-secondary-text text-lg">Discover the best student works across all colleges and disciplines.</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-text" size={24} />
          <input 
            type="text" 
            placeholder="Search for works, creators, or categories..." 
            className="w-full h-16 pl-14 pr-6 bg-card-bg border-2 border-border rounded-2xl text-lg focus:border-pup-maroon outline-none transition-colors shadow-sm"
          />
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters */}
          <aside className="w-64 shrink-0 h-fit sticky top-28">
            <div className="flex items-center gap-2 mb-6 font-bold text-lg">
              <Filter size={20} />
              Filters
            </div>
            
            <div className="space-y-6">
              {filters.map((filter) => (
                <div key={filter.label} className="border-b border-border pb-4">
                  <button className="flex items-center justify-between w-full font-semibold mb-3 group">
                    {filter.label}
                    <ChevronDown size={18} className="text-muted-text group-hover:text-primary-text" />
                  </button>
                  <div className="space-y-2">
                    {filter.options.slice(0, 5).map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-4 h-4 rounded border border-border group-hover:border-pup-maroon transition-colors" />
                        <span className="text-sm text-secondary-text group-hover:text-primary-text transition-colors">{opt}</span>
                      </label>
                    ))}
                    {filter.options.length > 5 && (
                      <button className="text-xs font-bold text-pup-maroon mt-1 hover:underline">+ More</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="flex-1">
            {/* Active Filters & Sort */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-wrap gap-2">
                {activeFilters.map(filter => (
                  <div key={filter} className="flex items-center gap-1.5 px-3 py-1.5 bg-soft-maroon text-pup-maroon text-sm font-semibold rounded-full border border-pup-maroon/10">
                    {filter}
                    <button onClick={() => setActiveFilters(activeFilters.filter(f => f !== filter))}>
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {activeFilters.length > 0 && (
                  <button 
                    onClick={() => setActiveFilters([])}
                    className="text-sm text-muted-text hover:text-pup-maroon font-medium ml-2"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm">
                <span className="text-muted-text">Showing 12 of 48 works</span>
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 bg-card-bg border border-border rounded-lg font-medium hover:border-pup-maroon transition-colors">
                    Sort: {sortBy}
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-6">
              {works.map((work) => (
                <div key={work.id} className="group bg-card-bg rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary-surface">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="px-6 py-2.5 bg-white text-pup-maroon font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Project
                      </button>
                    </div>
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {work.highlight && (
                        <div className="px-2.5 py-1 bg-pup-gold text-dark-maroon text-[11px] font-bold rounded flex items-center gap-1 shadow-sm">
                          <Award size={12} /> {work.highlight}
                        </div>
                      )}
                    </div>
                    <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-secondary-text hover:text-pup-maroon shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Bookmark size={18} />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-[17px] font-bold mb-2 group-hover:text-pup-maroon transition-colors line-clamp-1">{work.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-secondary-surface border border-border overflow-hidden">
                        <img src="/__mockup/images/creator-portrait.jpg" alt={work.creator} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[14px] font-medium text-secondary-text">{work.creator}</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[11px] font-bold rounded uppercase tracking-wider">{work.college}</span>
                        <span className="px-2 py-0.5 bg-secondary-surface text-secondary-text text-[11px] font-semibold rounded">{work.category}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[13px] font-medium text-muted-text">
                        <Heart size={14} className="fill-current" />
                        {work.appreciates}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Empty State Mockup */}
              <div className="bg-soft-maroon/50 rounded-2xl border-2 border-dashed border-pup-maroon/20 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                <div className="w-12 h-12 rounded-full bg-soft-maroon text-pup-maroon flex items-center justify-center mb-4">
                  <Search size={24} />
                </div>
                <h4 className="font-bold text-pup-maroon mb-1">No more matches</h4>
                <p className="text-sm text-secondary-text">Try adjusting your filters to see more amazing PUP works.</p>
              </div>
            </div>

            {/* Load More */}
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 bg-white border-2 border-border text-primary-text font-bold rounded-xl hover:border-pup-maroon hover:text-pup-maroon transition-colors shadow-sm">
                Load More Works
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-20 border-t border-border py-12 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center text-sm text-muted-text">
          <p>© 2026 PUP Campus Creatives • Academic Prototype</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pup-maroon">Guidelines</a>
            <a href="#" className="hover:text-pup-maroon">Help Center</a>
            <a href="#" className="hover:text-pup-maroon">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
