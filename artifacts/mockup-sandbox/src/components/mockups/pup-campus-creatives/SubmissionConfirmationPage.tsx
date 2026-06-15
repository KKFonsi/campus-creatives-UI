import React from 'react';
import { CheckCircle2, Clock, Copy, ArrowRight, Home } from 'lucide-react';
import { DesktopNav } from './_shared/DesktopNav';
import { navigateTo } from '../../../app/demo';
import { routePaths } from '../../../app/routes';
import './_group.css';

interface SubmissionConfirmationPageProps {
  onMySubmissions?: () => void;
}

export default function SubmissionConfirmationPage({ onMySubmissions }: SubmissionConfirmationPageProps = {}) {
  return (
    <div className="min-h-screen bg-main-bg font-inter">
      <DesktopNav authenticated={true} />
      
      <main className="max-w-[1280px] mx-auto px-8 py-20 flex flex-col items-center">
        <div className="w-full max-w-[640px] text-center space-y-10">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-status-approved/10 flex items-center justify-center text-status-approved animate-in zoom-in duration-500">
              <CheckCircle2 size={80} strokeWidth={1.5} />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary-text tracking-tight">Your work has been submitted.</h1>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-status-pending/10 text-status-pending rounded-full text-sm font-bold border border-status-pending/20">
                <Clock size={16} className="animate-pulse" />
                Pending Review
              </span>
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-card-bg border border-border rounded-3xl p-8 shadow-sm text-left space-y-6">
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <p className="text-xs font-bold text-muted-text uppercase tracking-widest mb-1">Work</p>
                <p className="text-lg font-bold text-primary-text">Digital Sinta</p>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-text uppercase tracking-widest mb-1">Reference</p>
                <div className="flex items-center gap-2">
                  <code className="text-[15px] font-mono font-medium text-secondary-text bg-secondary-surface px-2 py-0.5 rounded">CC-WORK-2026-0148</code>
                  <button className="text-muted-text hover:text-pup-maroon transition-colors" title="Copy reference">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-text uppercase tracking-widest mb-1">Submitted</p>
                <p className="text-base font-medium text-secondary-text">June 14, 2026</p>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-text uppercase tracking-widest mb-1">Next Step</p>
                <p className="text-base font-medium text-secondary-text leading-tight">A Campus Creatives moderator will review your submission.</p>
              </div>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="relative pt-8 px-10">
            <div className="absolute top-[52px] left-20 right-20 h-0.5 bg-border -z-10" />
            <div className="absolute top-[52px] left-20 w-[45%] h-0.5 bg-status-approved -z-10" />
            
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-status-approved text-white flex items-center justify-center shadow-md shadow-status-approved/20">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-xs font-bold text-status-approved">Submitted</p>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-status-pending text-white flex items-center justify-center shadow-md shadow-status-pending/20 animate-pulse">
                  <Clock size={20} />
                </div>
                <p className="text-xs font-bold text-status-pending">Pending Review</p>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-surface border-2 border-border text-muted-text flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-border" />
                </div>
                <p className="text-xs font-bold text-muted-text">Decision</p>
              </div>
            </div>
          </div>

          {/* Notification Reminder */}
          <div className="flex items-center justify-center gap-2 text-secondary-text bg-secondary-surface/50 py-3 px-6 rounded-2xl border border-border/50">
            <span className="flex h-2 w-2 rounded-full bg-pup-maroon"></span>
            <p className="text-sm">You'll receive a notification when there's an update.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-6">
            <button onClick={() => navigateTo(routePaths.student.home)} className="w-full py-4 bg-pup-maroon text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-deep-maroon transition-colors group">
              Return Home
              <Home size={18} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-4 border border-border text-primary-text rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary-surface transition-colors group">
                View Submission
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button onClick={onMySubmissions ?? (() => navigateTo(routePaths.student.submissions))} className="py-4 border border-border text-primary-text rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary-surface transition-colors group">
                View My Submissions
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
