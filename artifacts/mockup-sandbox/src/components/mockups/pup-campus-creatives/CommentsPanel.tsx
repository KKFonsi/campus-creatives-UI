import React from 'react';
import { Send, MoreHorizontal, CornerDownRight, Heart, X } from 'lucide-react';
import './_group.css';

const comments = [
  { id: 1, name: 'Ana dela Cruz', role: 'COC Student', text: 'This captures the mood of Sta. Mesa so perfectly. The reflections on the pavement are incredible!', time: '2h ago', likes: 12 },
  { id: 2, name: 'Marco Santos', role: 'CAL Student', text: 'Stunning photography! I always pass by here after class but never noticed how beautiful it looks after the rain.', time: '5h ago', likes: 8 },
  { id: 3, name: 'Lea Reyes', role: 'CCIS Student', text: 'The composition is on point. What camera did you use for this?', time: '1d ago', likes: 3 },
  { id: 4, name: 'Joven Bautista', role: 'CADBE Student', text: 'Love the color grading here. It has that cinematic feel.', time: '1d ago', likes: 5 },
  { id: 5, name: 'Sofia Lim', role: 'CBA Student', text: 'Proud of you, Bianca! Keep creating!', time: '2d ago', likes: 2 },
];

export function CommentsPanel() {
  return (
    <div className="w-full bg-card-bg rounded-[24px] border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border flex justify-between items-center">
        <h3 className="text-lg font-bold">14 Comments</h3>
        <button className="text-[13px] font-bold text-pup-maroon hover:underline">Newest First</button>
      </div>

      <div className="p-6">
        {/* Add Comment */}
        <div className="flex gap-4 mb-10">
          <div className="w-10 h-10 rounded-full bg-secondary-surface overflow-hidden shrink-0 border border-border">
            <img src="/__mockup/images/creator-portrait.jpg" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <textarea 
              placeholder="Add a comment as an Iskolar..." 
              className="w-full h-24 bg-secondary-surface border-none rounded-2xl p-4 text-[14px] focus:ring-2 focus:ring-pup-maroon/20 focus:outline-none resize-none mb-3"
            />
            <div className="flex justify-end">
              <button className="h-10 px-6 bg-pup-maroon text-white font-bold rounded-xl flex items-center gap-2 hover:bg-deep-maroon transition-colors text-sm">
                Post Comment <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-8">
          {comments.map(comment => (
            <div key={comment.id} className="group">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-surface overflow-hidden shrink-0 border border-border">
                  <img src="/__mockup/images/creator-portrait.jpg" alt={comment.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <span className="font-bold text-[15px] hover:text-pup-maroon cursor-pointer mr-2">{comment.name}</span>
                      <span className="text-[11px] font-bold text-muted-text uppercase tracking-tighter bg-secondary-surface px-1.5 py-0.5 rounded">{comment.role}</span>
                    </div>
                    <button className="text-muted-text opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={18} /></button>
                  </div>
                  <p className="text-[14px] text-secondary-text leading-relaxed mb-3">{comment.text}</p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1.5 text-[12px] font-bold text-muted-text hover:text-pup-maroon">
                      <Heart size={14} /> {comment.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-[12px] font-bold text-muted-text hover:text-pup-maroon">
                      <CornerDownRight size={14} /> Reply
                    </button>
                    <span className="text-[12px] text-muted-text font-medium">{comment.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 mt-10 border-2 border-border border-dashed rounded-2xl text-[14px] font-bold text-secondary-text hover:border-pup-maroon hover:text-pup-maroon transition-all">
          Load More Comments
        </button>
      </div>
    </div>
  );
}

export function CommentsPanelMobile() {
  return (
    <div className="fixed inset-0 bg-black/60 z-[110] flex items-end">
      <div className="w-[390px] h-[70vh] bg-white rounded-t-[32px] overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto my-4 shrink-0"></div>
        
        <div className="px-5 pb-4 border-b border-border flex justify-between items-center shrink-0">
          <h2 className="text-lg font-black">Comments (14)</h2>
          <button className="text-muted-text"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {comments.map(comment => (
            <div key={comment.id} className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary-surface overflow-hidden shrink-0 border border-border">
                <img src="/__mockup/images/creator-portrait.jpg" alt={comment.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-[13px]">{comment.name}</span>
                  <span className="text-[10px] text-muted-text">{comment.time}</span>
                </div>
                <p className="text-[13px] text-secondary-text leading-snug mb-2">{comment.text}</p>
                <div className="flex items-center gap-4">
                  <button className="text-[11px] font-bold text-muted-text flex items-center gap-1"><Heart size={12} /> {comment.likes}</button>
                  <button className="text-[11px] font-bold text-muted-text">Reply</button>
                  <button className="text-[11px] font-bold text-muted-text">Report</button>
                </div>
              </div>
            </div>
          ))}
          
          <button className="w-full py-3 text-[13px] font-bold text-pup-maroon bg-soft-maroon rounded-xl">Load more comments</button>
        </div>

        <div className="p-5 border-t border-border bg-warm-white shrink-0">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-surface overflow-hidden shrink-0">
              <img src="/__mockup/images/creator-portrait.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="w-full h-11 bg-secondary-surface border-none rounded-xl px-4 pr-12 text-[14px] focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-pup-maroon p-1.5">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
