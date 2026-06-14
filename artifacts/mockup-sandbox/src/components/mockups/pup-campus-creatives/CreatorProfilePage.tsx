import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  Heart, 
  Share2, 
  ExternalLink, 
  MoreHorizontal, 
  Eye, 
  Edit3, 
  Archive, 
  Plus, 
  Star,
  Award,
  Calendar,
  Users,
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import './_group.css';

export function CreatorProfilePage() {
  const [activeTab, setActiveTab] = useState('Portfolio');

  const portfolioWorks = [
    { id: 1, title: 'Digital Sinta', category: 'Digital Art', status: 'Featured', appreciation: 124, visibility: 'Public', img: '/__mockup/images/thumbnail_1.jpg' },
    { id: 2, title: 'Campus Frequencies', category: 'Music', status: 'Approved', appreciation: 86, visibility: 'Public', img: '/__mockup/images/thumbnail_2.jpg' },
    { id: 3, title: 'Railway Sketches', category: 'Visual Art', status: 'Needs Revision', appreciation: 0, visibility: 'Private', img: '/__mockup/images/thumbnail_3.jpg' },
    { id: 4, title: 'Polytechnic Dreams', category: 'Graphic Design', status: 'Featured', appreciation: 210, visibility: 'Public', img: '/__mockup/images/thumbnail_4.jpg' },
    { id: 5, title: 'Pasig at Dusk', category: 'Photography', status: 'Approved', appreciation: 54, visibility: 'Public', img: '/__mockup/images/college_1.jpg' },
    { id: 6, title: 'Concrete and Creativity', category: 'Visual Art', status: 'Draft', appreciation: 0, visibility: 'Private', img: '/__mockup/images/college_2.jpg' },
  ];

  const suggestedCreators = [
    { name: 'Marco Santos', college: 'CCIS', img: '/__mockup/images/creator-portrait.jpg' },
    { name: 'Liza de Leon', college: 'CAL', img: '/__mockup/images/creator-portrait.jpg' },
    { name: 'Miguel Torres', college: 'CADBE', img: '/__mockup/images/creator-portrait.jpg' },
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter">
      <DesktopNav authenticated={true} active="Profile" />

      {/* Cover Image */}
      <div className="w-full h-[280px] relative">
        <img 
          src="/__mockup/images/hero-collage.jpg" 
          alt="Campus Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 relative">
        {/* Profile Header Section */}
        <div className="flex justify-between items-start -mt-12 mb-8">
          <div className="flex gap-6 items-end">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-card-bg bg-secondary-surface overflow-hidden shadow-lg">
                <img 
                  src="/__mockup/images/creator-portrait.jpg" 
                  alt="Rafael Mendoza" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-status-approved rounded-full border-2 border-card-bg" title="Online" />
            </div>
            <div className="pb-2">
              <h1 className="text-3xl font-bold mb-1">Rafael Mendoza</h1>
              <div className="text-secondary-text flex flex-col gap-0.5 mb-3">
                <span className="font-medium text-primary-text">College of Computer and Information Sciences</span>
                <span className="text-sm">Bachelor of Science in Information Technology</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {['UI/UX', 'Digital Art', 'Multimedia', 'Photography'].map(field => (
                  <span key={field} className="px-3 py-1 bg-secondary-surface border border-border rounded-full text-xs font-medium">
                    {field}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-status-approved text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-status-approved animate-pulse" />
                Open to campus collaborations
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 pt-16">
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-border rounded-lg font-medium text-sm hover:border-pup-maroon hover:text-pup-maroon transition-colors flex items-center gap-2">
                <Edit3 size={16} /> Edit Profile
              </button>
              <button className="p-2 border border-border rounded-lg hover:bg-secondary-surface transition-colors">
                <Share2 size={18} />
              </button>
            </div>
            <a href="#" className="text-pup-maroon text-sm font-semibold flex items-center gap-1 hover:underline">
              View Public Profile <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Bio & Stats */}
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-8">
            <p className="text-secondary-text leading-relaxed mb-8 max-w-2xl">
              Passionate about blending technology with visual storytelling. I focus on creating digital experiences that resonate with the student community and celebrate our unique campus culture.
            </p>

            <div className="flex gap-10 py-6 border-y border-border">
              {[
                { label: 'Approved Works', value: '24' },
                { label: 'Featured', value: '6' },
                { label: 'Appreciations', value: '1,842' },
                { label: 'Followers', value: '87' },
                { label: 'Events Joined', value: '5' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-pup-maroon">{stat.value}</div>
                  <div className="text-xs text-muted-text uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recognition Panel */}
          <div className="col-span-4 space-y-4">
            <div className="bg-card-bg border border-border rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-warm-gold">
                <Award size={16} /> Creator Recognitions
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-soft-gold flex items-center justify-center text-warm-gold">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">College Highlight</div>
                    <div className="text-xs text-secondary-text">Featured in CCIS Showcase '26</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-soft-maroon flex items-center justify-center text-pup-maroon">
                    <Star size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Rising Creator</div>
                    <div className="text-xs text-secondary-text">Top 10% this month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border flex gap-8 mb-8">
          {['Portfolio', 'Featured', 'Recognitions', 'Events', 'About'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-semibold transition-all relative ${
                activeTab === tab ? 'text-pup-maroon' : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pup-maroon" />
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Content */}
        <div className="mb-20">
          <div className="grid grid-cols-3 gap-6">
            {portfolioWorks.map(work => (
              <div key={work.id} className="group relative bg-card-bg border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-[16/10] relative overflow-hidden bg-secondary-surface">
                  <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  
                  {/* Status Overlay */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {work.status === 'Featured' && (
                      <span className="px-2 py-1 bg-pup-gold text-white text-[10px] font-bold rounded-md flex items-center gap-1 shadow-sm">
                        <Star size={10} fill="white" /> FEATURED
                      </span>
                    )}
                    {work.status === 'Needs Revision' && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-md shadow-sm">
                        REVISION NEEDED
                      </span>
                    )}
                    {work.status === 'Draft' && (
                      <span className="px-2 py-1 bg-gray-500 text-white text-[10px] font-bold rounded-md shadow-sm">
                        DRAFT
                      </span>
                    )}
                  </div>

                  {/* Appreciation Overlay */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium rounded-md flex items-center gap-1">
                    <Heart size={12} className="fill-white" /> {work.appreciation}
                  </div>

                  {/* Owner Controls Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="p-2 bg-white rounded-full text-pup-maroon hover:bg-pup-maroon hover:text-white transition-colors" title="Edit Work">
                      <Edit3 size={18} />
                    </button>
                    <button className="p-2 bg-white rounded-full text-pup-maroon hover:bg-pup-maroon hover:text-white transition-colors" title="Visibility">
                      {work.visibility === 'Public' ? <Eye size={18} /> : <Eye size={18} className="opacity-50" />}
                    </button>
                    <button className="p-2 bg-white rounded-full text-pup-maroon hover:bg-pup-maroon hover:text-white transition-colors" title="More">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-sm group-hover:text-pup-maroon transition-colors line-clamp-1">{work.title}</h3>
                    <span className="text-[10px] font-bold text-secondary-text border border-border px-1.5 py-0.5 rounded uppercase">{work.category}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-[11px] text-muted-text">
                      {work.visibility === 'Public' ? <Eye size={12} /> : <Eye size={12} />}
                      {work.visibility}
                    </div>
                    <div className="flex gap-2">
                      <button className="text-[11px] font-bold text-pup-maroon hover:underline">Manage</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Related Creators */}
        <section className="border-t border-border pt-12 pb-20">
          <h3 className="text-xl font-bold mb-8">Related Creators</h3>
          <div className="grid grid-cols-3 gap-6">
            {suggestedCreators.map(creator => (
              <div key={creator.name} className="bg-card-bg border border-border p-5 rounded-xl flex items-center gap-4 shadow-sm">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary-surface border border-border">
                  <img src={creator.img} alt={creator.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{creator.name}</div>
                  <div className="text-xs text-secondary-text mb-2">{creator.college}</div>
                  <button className="w-full py-1.5 bg-pup-maroon text-white text-[11px] font-bold rounded-lg hover:bg-deep-maroon transition-colors">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
