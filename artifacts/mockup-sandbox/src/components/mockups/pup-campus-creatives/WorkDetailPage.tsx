import React, { useState } from 'react';
import { DesktopNav } from './_shared/DesktopNav';
import { 
  Heart, 
  Bookmark, 
  MessageCircle, 
  Share2, 
  Flag, 
  ChevronRight, 
  ChevronLeft,
  Award,
  Calendar,
  UserPlus,
  Check,
  MoreHorizontal,
  Link as LinkIcon,
  ExternalLink
} from 'lucide-react';
import './_group.css';

export function WorkDetailPage() {
  const [isAppreciated, setIsAppreciated] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [showFullStatement, setShowFullStatement] = useState(false);

  const images = [
    '/__mockup/images/thumbnail_1.jpg',
    '/__mockup/images/college_1.jpg',
    '/__mockup/images/college_2.jpg',
    '/__mockup/images/college_3.jpg',
    '/__mockup/images/college_4.jpg',
  ];

  const comments = [
    { id: 1, name: 'Ana dela Cruz', avatar: '/__mockup/images/creator-portrait.jpg', text: 'This perfectly captures the mood of Sta. Mesa! The reflection on the pavement is stunning.', time: '2 hours ago' },
    { id: 2, name: 'Marco Santos', avatar: '/__mockup/images/creator-portrait.jpg', text: 'PUP pride! Great shot, Bianca.', time: '5 hours ago' },
    { id: 3, name: 'Lea Reyes', avatar: '/__mockup/images/creator-portrait.jpg', text: 'What camera settings did you use for this?', time: '1 day ago' },
    { id: 4, name: 'Joven Bautista', avatar: '/__mockup/images/creator-portrait.jpg', text: 'The composition is amazing. It feels so nostalgic.', time: '2 days ago' },
    { id: 5, name: 'Sofia Lim', avatar: '/__mockup/images/creator-portrait.jpg', text: 'I love how you handled the lighting despite the gloomy weather.', time: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter pb-20">
      <DesktopNav authenticated={true} />
      
      <main className="max-w-[1200px] mx-auto px-8 py-10">
        <div className="flex gap-10">
          {/* Left Content Area */}
          <div className="flex-1">
            {/* Hero Image */}
            <div className="relative w-full h-[560px] rounded-3xl overflow-hidden bg-black shadow-lg mb-6">
              <img 
                src={images[activeImageIdx]} 
                alt="Main work" 
                className="w-full h-full object-contain"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${activeImageIdx === idx ? 'border-pup-maroon scale-95 shadow-inner' : 'border-transparent hover:border-border'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Header Info */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-soft-maroon text-pup-maroon text-xs font-bold rounded-full uppercase tracking-wider">Photography</span>
                <span className="px-3 py-1 bg-secondary-surface text-secondary-text text-xs font-bold rounded-full uppercase tracking-wider">Project</span>
                <span className="text-sm text-muted-text ml-auto">Approved: May 12, 2026</span>
              </div>
              
              <h1 className="text-4xl font-black mb-6 leading-tight">Sta. Mesa After the Rain</h1>
              
              <div className="flex items-center gap-4 p-5 bg-card-bg border border-border rounded-2xl shadow-sm">
                <div className="w-14 h-14 rounded-full bg-secondary-surface border-2 border-border overflow-hidden">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="Bianca Reyes" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Bianca Reyes</h3>
                  <p className="text-secondary-text">College of Communication • Broadcasting</p>
                </div>
                <div className="ml-auto flex gap-3">
                  <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${isFollowing ? 'bg-secondary-surface text-primary-text' : 'bg-pup-maroon text-white hover:bg-deep-maroon shadow-sm'}`}
                  >
                    {isFollowing ? <><Check size={18} /> Following</> : <><UserPlus size={18} /> Follow</>}
                  </button>
                </div>
              </div>
            </div>

            {/* Description / Artist Statement */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Artist Statement</h3>
              <div className="prose prose-slate max-w-none text-secondary-text leading-relaxed">
                <p>
                  "Sta. Mesa After the Rain" is a photographic series that explores the fleeting moments of serenity within the chaotic landscape of PUP Main Campus. This particular shot captures the Main Building's reflection on the rain-slicked pavement near the lagoon, moments after a heavy downpour.
                </p>
                {showFullStatement ? (
                  <p className="mt-4">
                    The series aims to highlight the dual nature of our campus life—the grit of the railway and the grace of the university architecture. Through a muted color palette and heavy emphasis on natural light, I wanted to evoke the feeling of "Sinta"—the deep affection we hold for this institution despite its challenges. This project was developed as part of my Documentary Photography course under the College of Communication.
                  </p>
                ) : null}
              </div>
              <button 
                onClick={() => setShowFullStatement(!showFullStatement)}
                className="mt-4 text-pup-maroon font-bold hover:underline"
              >
                {showFullStatement ? 'Show less' : 'Read full statement →'}
              </button>
            </div>

            {/* Metadata & Tags */}
            <div className="grid grid-cols-2 gap-10 border-y border-border py-10 mb-12">
              <div>
                <h4 className="text-sm font-bold text-muted-text uppercase tracking-widest mb-4">Tools & Medium</h4>
                <div className="flex flex-wrap gap-2">
                  {['Canon EOS R5', '35mm Prime Lens', 'Lightroom', 'Natural Light'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-card-bg border border-border rounded-lg text-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-muted-text uppercase tracking-widest mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {['#campus', '#photography', '#sta-mesa', '#rain', '#documentary'].map(tag => (
                    <span key={tag} className="text-pup-maroon font-medium hover:underline cursor-pointer">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Event & Recognition */}
            <div className="flex flex-wrap gap-6 mb-16">
              <div className="flex-1 bg-soft-maroon p-6 rounded-2xl border border-pup-maroon/10">
                <h4 className="text-xs font-bold text-pup-maroon uppercase tracking-widest mb-3">Event Association</h4>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-pup-maroon" />
                  <span className="font-bold text-lg">PUP Likha 2026</span>
                  <ExternalLink size={16} className="text-pup-maroon" />
                </div>
              </div>
              <div className="flex-1 bg-soft-gold p-6 rounded-2xl border border-warm-gold/20">
                <h4 className="text-xs font-bold text-warm-gold uppercase tracking-widest mb-3">Recognition</h4>
                <div className="flex items-center gap-3">
                  <Award size={24} className="text-warm-gold" />
                  <span className="font-bold text-lg text-dark-maroon">Campus Highlight</span>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <section className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">14 Comments</h3>
                <div className="h-px flex-1 bg-border mx-6"></div>
              </div>

              <div className="flex gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-secondary-surface border border-border overflow-hidden shrink-0">
                  <img src="/__mockup/images/creator-portrait.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <textarea 
                    placeholder="Add a comment..." 
                    className="w-full p-4 bg-card-bg border border-border rounded-xl focus:border-pup-maroon outline-none min-h-[100px] transition-colors"
                  />
                  <div className="flex justify-end mt-2">
                    <button className="px-6 py-2 bg-pup-maroon text-white font-bold rounded-xl hover:bg-deep-maroon transition-colors">Post Comment</button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-secondary-surface border border-border overflow-hidden shrink-0">
                      <img src={comment.avatar} alt={comment.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{comment.name}</span>
                          <span className="text-xs text-muted-text">• {comment.time}</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 p-1 text-muted-text hover:text-primary-text transition-opacity">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                      <p className="text-secondary-text mb-2 leading-relaxed">{comment.text}</p>
                      <div className="flex items-center gap-4 text-xs font-bold">
                        <button className="text-muted-text hover:text-pup-maroon">REPLY</button>
                        <button className="text-muted-text hover:text-status-rejected">REPORT</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-3 bg-white border border-border text-primary-text font-bold rounded-xl hover:border-pup-maroon transition-colors">
                Load More Comments
              </button>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="w-[320px] shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setIsAppreciated(!isAppreciated)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${isAppreciated ? 'bg-soft-maroon border-pup-maroon text-pup-maroon shadow-inner' : 'bg-card-bg border-border text-secondary-text hover:border-pup-maroon'}`}
                >
                  <Heart size={24} className={isAppreciated ? 'fill-current' : ''} />
                  <span className="text-xs font-bold mt-2">{isAppreciated ? 'Appreciated' : 'Appreciate'}</span>
                  <span className="text-[10px] opacity-60">245</span>
                </button>
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${isSaved ? 'bg-soft-gold border-warm-gold text-dark-maroon shadow-inner' : 'bg-card-bg border-border text-secondary-text hover:border-warm-gold'}`}
                >
                  <Bookmark size={24} className={isSaved ? 'fill-current' : ''} />
                  <span className="text-xs font-bold mt-2">{isSaved ? 'Saved' : 'Save'}</span>
                  <span className="text-[10px] opacity-60">128</span>
                </button>
              </div>

              <div className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm">
                <button className="w-full flex items-center gap-3 p-4 hover:bg-secondary-surface transition-colors text-sm font-semibold border-b border-border">
                  <MessageCircle size={20} className="text-secondary-text" />
                  Jump to Comments
                </button>
                <button className="w-full flex items-center gap-3 p-4 hover:bg-secondary-surface transition-colors text-sm font-semibold border-b border-border">
                  <Share2 size={20} className="text-secondary-text" />
                  Share Project
                </button>
                <button className="w-full flex items-center gap-3 p-4 hover:bg-status-rejected/10 text-status-rejected transition-colors text-sm font-semibold">
                  <Flag size={20} />
                  Report Work
                </button>
              </div>

              {/* Creator Info Card */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold text-muted-text uppercase tracking-widest mb-4">About the Creator</h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-surface border border-border overflow-hidden">
                    <img src="/__mockup/images/creator-portrait.jpg" alt="Bianca" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold leading-none mb-1">Bianca Reyes</p>
                    <p className="text-xs text-muted-text">COC • Broadcasting</p>
                  </div>
                </div>
                <p className="text-sm text-secondary-text mb-6 line-clamp-2">
                  Passionate storyteller through lens and light. Exploring the hidden corners of the Polytechnic University of the Philippines.
                </p>
                <button className="w-full py-2 bg-pup-maroon text-white font-bold rounded-lg text-sm mb-3">Follow</button>
                <button className="w-full py-2 bg-transparent text-pup-maroon border border-pup-maroon font-bold rounded-lg text-sm flex items-center justify-center gap-1">
                  View Portfolio <ChevronRight size={16} />
                </button>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs font-bold text-muted-text uppercase tracking-widest mb-3">More from Bianca</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden bg-secondary-surface border border-border cursor-pointer hover:opacity-80 transition-opacity">
                        <img src={`/__mockup/images/thumbnail_${i}.jpg`} alt="Related work" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Sections */}
        <section className="mt-20 space-y-16">
          <div>
            <div className="flex items-end justify-between mb-8">
              <h3 className="text-2xl font-black">Similar Works</h3>
              <a href="#" className="text-pup-maroon font-bold hover:underline flex items-center gap-1">View all <ChevronRight size={18} /></a>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[2, 3, 4, 1].map(i => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border mb-3 bg-secondary-surface">
                    <img src={`/__mockup/images/thumbnail_${i}.jpg`} alt="Related work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold line-clamp-1 group-hover:text-pup-maroon">The Sinta Spirit</h4>
                  <p className="text-sm text-secondary-text">Juan Dela Cruz • COC</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-end justify-between mb-8">
              <h3 className="text-2xl font-black">More from College of Communication</h3>
              <a href="#" className="text-pup-maroon font-bold hover:underline flex items-center gap-1">View all <ChevronRight size={18} /></a>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[3, 4, 1, 2].map(i => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border mb-3 bg-secondary-surface">
                    <img src={`/__mockup/images/thumbnail_${i}.jpg`} alt="Related work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold line-clamp-1 group-hover:text-pup-maroon">Communication Arts</h4>
                  <p className="text-sm text-secondary-text">Maria Santos • COC</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
