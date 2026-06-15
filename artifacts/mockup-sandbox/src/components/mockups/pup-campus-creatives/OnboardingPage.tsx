import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import './_group.css';

const INTERESTS = [
  "Visual Art", "Digital Art", "Photography", "Graphic Design", 
  "Music", "Dance", "Spoken Word", "Poetry", 
  "Writing", "Film and Video", "Animation", "Theater and Performance", 
  "Crafts", "Fashion and Cosplay", "UI/UX and Multimedia", "Other"
];

const GOALS = [
  "Build my portfolio", "Share creative works", "Discover student creators", 
  "Join events and open calls", "Support classmates", "Find collaborators"
];

interface OnboardingPageProps {
  onComplete?: () => void;
  onBackToRegister?: () => void;
}

export function OnboardingPage({ onComplete, onBackToRegister }: OnboardingPageProps = {}) {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <div className="min-h-screen bg-main-bg flex flex-col font-inter">
      {/* Top Header */}
      <header className="h-16 bg-card-bg border-b border-border px-6 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-1.5 text-pup-maroon text-[17px] tracking-tight">
          <span className="font-bold font-inter">PUP:</span>
          <span className="font-medium font-inter">Campus Creatives</span>
        </div>
        <div className="text-[14px] font-medium text-secondary-text">
          Step {step} of 5
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-border">
        <div 
          className="h-full bg-pup-maroon transition-all duration-300 ease-out" 
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row max-w-[1000px] mx-auto w-full p-6 md:p-12 gap-12">
        {/* Main Content */}
        <div className="flex-1 max-w-[600px] w-full">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-[32px] font-bold text-primary-text tracking-tight mb-2">Build your identity</h1>
              <p className="text-[16px] text-secondary-text mb-8">This is how the campus community will see you.</p>

              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-secondary-surface border-2 border-dashed border-border flex items-center justify-center text-secondary-text relative cursor-pointer hover:border-pup-maroon hover:text-pup-maroon transition-colors group">
                  <Camera size={32} />
                  <div className="absolute inset-0 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <button className="text-[13px] font-medium text-pup-maroon mt-3 hover:underline">Upload Photo</button>
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-primary-text block">Display Name</label>
                  <input type="text" placeholder="How you want to be called" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-card-bg text-primary-text outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-primary-text block">Short Bio</label>
                  <textarea rows={3} placeholder="A brief introduction about your creative self..." className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-card-bg text-primary-text outline-none transition-all resize-none"></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-[32px] font-bold text-primary-text tracking-tight mb-2">What do you create?</h1>
              <p className="text-[16px] text-secondary-text mb-8">Select all the fields that apply to your work.</p>

              <div className="flex flex-wrap gap-3">
                {INTERESTS.map(interest => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                        isSelected 
                          ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' 
                          : 'bg-card-bg border-border text-secondary-text hover:border-pup-maroon/50 hover:text-primary-text'
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-[32px] font-bold text-primary-text tracking-tight mb-2">What are your goals?</h1>
              <p className="text-[16px] text-secondary-text mb-8">Help us tailor your experience on the platform.</p>

              <div className="space-y-3">
                {GOALS.map(goal => {
                  const isSelected = selectedGoals.includes(goal);
                  return (
                    <div 
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`w-full p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'bg-soft-maroon border-pup-maroon text-pup-maroon' 
                          : 'bg-card-bg border-border text-primary-text hover:border-pup-maroon/50'
                      }`}
                    >
                      <span className="font-medium">{goal}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-pup-maroon border-pup-maroon text-white' : 'border-border'
                      }`}>
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-[32px] font-bold text-primary-text tracking-tight mb-2">Connect your links</h1>
              <p className="text-[16px] text-secondary-text mb-8">Add links to your existing portfolios or socials (optional).</p>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-primary-text block">Instagram</label>
                  <input type="text" placeholder="instagram.com/yourhandle" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-card-bg text-primary-text outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-primary-text block">Behance / Portfolio</label>
                  <input type="text" placeholder="behance.net/yourhandle" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-card-bg text-primary-text outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-primary-text block">Facebook</label>
                  <input type="text" placeholder="facebook.com/yourhandle" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-card-bg text-primary-text outline-none transition-all" />
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-[32px] font-bold text-primary-text tracking-tight mb-2">You're all set</h1>
              <p className="text-[16px] text-secondary-text mb-8">Here's how your creator profile looks.</p>

              <div className="bg-card-bg rounded-[20px] p-8 border border-border shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-secondary-surface mx-auto mb-4 overflow-hidden border border-border">
                  <InitialsAvatar name="Rafael Mendoza" className="w-full h-full" textClassName="text-2xl" />
                </div>
                <h2 className="text-[22px] font-bold text-primary-text mb-1">Andrea Cruz</h2>
                <p className="text-[14px] text-pup-maroon font-medium mb-4">College of Computer and Information Sciences</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {selectedInterests.length > 0 ? selectedInterests.map(i => (
                    <span key={i} className="px-2 py-1 bg-secondary-surface text-primary-text text-[12px] font-medium rounded">{i}</span>
                  )) : (
                    <span className="px-2 py-1 bg-secondary-surface text-primary-text text-[12px] font-medium rounded">Digital Art</span>
                  )}
                </div>
                
                <p className="text-[14px] text-secondary-text mb-6 max-w-[300px] mx-auto">
                  Passionate about combining code and canvas to create interactive digital experiences.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-12 flex items-center justify-between pt-6 border-t border-border">
            <button 
              onClick={() => {
                if (step === 1) {
                  onBackToRegister?.();
                  return;
                }

                setStep(Math.max(1, step - 1));
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-colors ${
                step === 1 ? 'opacity-0 pointer-events-none' : 'text-secondary-text hover:bg-secondary-surface hover:text-primary-text'
              }`}
            >
              <ChevronLeft size={18} /> Back
            </button>

            {step < 5 ? (
              <button 
                onClick={() => setStep(Math.min(5, step + 1))}
                className="flex items-center gap-2 px-6 py-2.5 bg-pup-maroon text-white font-medium rounded-xl hover:bg-deep-maroon transition-colors"
              >
                Continue <ChevronRight size={18} />
              </button>
            ) : (
              <button 
                onClick={onComplete}
                className="flex items-center gap-2 px-8 py-3 bg-pup-maroon text-white font-medium rounded-xl hover:bg-deep-maroon transition-colors shadow-sm"
              >
                Enter Campus Creatives
              </button>
            )}
          </div>
        </div>

        {/* Right Panel / Desktop Hint */}
        <div className="hidden md:flex flex-1 items-center justify-center border-l border-border pl-12 opacity-50">
          <img src="/__mockup/images/hero-collage.jpg" alt="Art" className="w-full max-w-[300px] rounded-2xl object-cover grayscale mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}
