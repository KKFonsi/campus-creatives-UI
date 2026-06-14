import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle2, Circle } from 'lucide-react';
import './_group.css';

const COLLEGES = [
  "College of Accountancy and Finance",
  "College of Architecture, Design and the Built Environment",
  "College of Arts and Letters",
  "College of Business Administration",
  "College of Communication",
  "College of Computer and Information Sciences",
  "College of Education",
  "College of Engineering",
  "College of Human Kinetics",
  "College of Law",
  "College of Political Science and Public Administration",
  "College of Science",
  "College of Social Sciences and Development",
  "College of Tourism, Hospitality and Transportation Management",
  "Institute of Technology",
  "Graduate School"
];

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div className="min-h-screen bg-main-bg py-12 px-4 font-inter">
      <div className="max-w-[560px] mx-auto bg-card-bg border border-border rounded-[20px] shadow-sm overflow-hidden">
        <div className="p-8 md:p-10 border-b border-border text-center">
          <div className="flex items-center justify-center gap-2 text-pup-maroon text-xl tracking-tight mb-6">
            <span className="font-bold font-inter">PUP:</span>
            <span className="font-medium font-inter">Campus Creatives</span>
          </div>
          <h1 className="text-[28px] font-bold text-primary-text mb-2 tracking-tight">Join Campus Creatives</h1>
          <p className="text-[15px] text-secondary-text">Set up your university portfolio profile.</p>
        </div>
        
        <form className="p-8 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[14px] font-semibold text-primary-text block">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-semibold text-primary-text block">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all" />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[14px] font-semibold text-primary-text block">PUP Email</label>
            <input type="email" placeholder="yourname@pup.edu.ph" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all" />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[14px] font-semibold text-primary-text block">Student Number</label>
            <input type="text" placeholder="e.g. 2024-00000-MN-0" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all" />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[14px] font-semibold text-primary-text block">College</label>
            <select className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all appearance-none cursor-pointer">
              <option value="" disabled selected>Select your college</option>
              {COLLEGES.map(college => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[14px] font-semibold text-primary-text block">Program / Course</label>
            <input type="text" placeholder="e.g. BS Information Technology" className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all" />
          </div>
          
          <div className="pt-2 pb-1 border-t border-border"></div>
          
          <div className="space-y-1.5">
            <label className="text-[14px] font-semibold text-primary-text block">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all pr-12"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-text hover:text-primary-text transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className={`flex items-center gap-1.5 text-[12px] ${hasLength ? 'text-status-approved' : 'text-secondary-text'}`}>
                {hasLength ? <CheckCircle2 size={14} /> : <Circle size={14} />} 8+ characters
              </div>
              <div className={`flex items-center gap-1.5 text-[12px] ${hasUpper ? 'text-status-approved' : 'text-secondary-text'}`}>
                {hasUpper ? <CheckCircle2 size={14} /> : <Circle size={14} />} Uppercase letter
              </div>
              <div className={`flex items-center gap-1.5 text-[12px] ${hasLower ? 'text-status-approved' : 'text-secondary-text'}`}>
                {hasLower ? <CheckCircle2 size={14} /> : <Circle size={14} />} Lowercase letter
              </div>
              <div className={`flex items-center gap-1.5 text-[12px] ${hasNumber ? 'text-status-approved' : 'text-secondary-text'}`}>
                {hasNumber ? <CheckCircle2 size={14} /> : <Circle size={14} />} Number
              </div>
              <div className={`flex items-center gap-1.5 text-[12px] ${hasSpecial ? 'text-status-approved' : 'text-secondary-text'}`}>
                {hasSpecial ? <CheckCircle2 size={14} /> : <Circle size={14} />} Special character
              </div>
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[14px] font-semibold text-primary-text block">Confirm Password</label>
            <input type={showPassword ? "text" : "password"} className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all" />
          </div>
          
          <div className="pt-4 space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="guidelines" className="mt-1 w-4 h-4 rounded border-border text-pup-maroon focus:ring-pup-maroon/30 accent-pup-maroon cursor-pointer" />
              <label htmlFor="guidelines" className="text-[13px] text-secondary-text leading-tight cursor-pointer select-none">
                I agree to the <a href="#" className="text-pup-maroon hover:underline font-medium">Community Guidelines</a> and will only upload works that are my own creation.
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="ownership" className="mt-1 w-4 h-4 rounded border-border text-pup-maroon focus:ring-pup-maroon/30 accent-pup-maroon cursor-pointer" />
              <label htmlFor="ownership" className="text-[13px] text-secondary-text leading-tight cursor-pointer select-none">
                I understand the <a href="#" className="text-pup-maroon hover:underline font-medium">Copyright & Ownership Policy</a> regarding works showcased on this academic platform.
              </label>
            </div>
          </div>
          
          <button 
            type="button" 
            className="w-full py-4 bg-pup-maroon text-white font-medium rounded-xl hover:bg-deep-maroon transition-colors text-[16px] shadow-sm mt-8 sticky bottom-4 z-10"
          >
            Create Account
          </button>
          
          <div className="text-center pt-2">
            <p className="text-[14px] text-secondary-text">
              Already have an account? <a href="#" className="font-semibold text-pup-maroon hover:underline">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
