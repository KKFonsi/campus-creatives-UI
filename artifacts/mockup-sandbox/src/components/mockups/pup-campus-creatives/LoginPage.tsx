import React, { useState } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import './_group.css';

interface LoginPageProps {
  onLoginSuccess?: () => void;
  onRegister?: () => void;
}

export function LoginPage({ onLoginSuccess, onRegister }: LoginPageProps = {}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess?.();
    }, 1500);
  };

  return (
    <div className="login-page min-h-screen bg-main-bg flex flex-col md:flex-row font-inter overflow-x-hidden">
      {/* Left Panel */}
      <div className="hidden md:flex flex-1 relative bg-dark-surface items-center justify-center p-12 overflow-hidden border-r border-pup-maroon/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/hero-collage.jpg" 
            alt="PUP Campus Creatives" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[480px]">
          <div className="w-16 h-1 bg-pup-gold mb-8"></div>
          <h1 className="text-[48px] leading-[1.1] font-bold text-warm-white tracking-tight mb-6">
            Your creative campus identity starts here.
          </h1>
          <p className="text-lg text-warm-white/70 leading-relaxed">
            Join thousands of PUP students sharing their portfolios, discovering talent, and connecting through creativity.
          </p>
        </div>
      </div>
      
      {/* Mobile Top Bar */}
      <div className="md:hidden w-full h-14 bg-warm-white border-b border-border flex items-center px-4">
        <div className="flex items-center gap-1.5 text-pup-maroon text-lg tracking-tight">
          <span className="font-bold font-inter">PUP:</span>
          <span className="font-medium font-inter">Campus Creatives</span>
        </div>
      </div>
      
      <div className="md:hidden h-2 w-full bg-gradient-to-r from-pup-maroon to-pup-gold"></div>

      {/* Right Panel */}
      <div className="login-form-panel flex-1 flex items-center justify-center p-6 md:p-12 bg-main-bg">
        <div className="login-form-card w-full max-w-[400px] min-w-0">
          <div className="hidden md:flex items-center gap-2 text-pup-maroon text-2xl tracking-tight mb-12">
            <span className="font-bold font-inter">PUP:</span>
            <span className="font-medium font-inter">Campus Creatives</span>
          </div>
          
          <h2 className="text-[32px] font-bold text-primary-text mb-2 tracking-tight">Welcome back</h2>
          <p className="text-[15px] text-secondary-text mb-8">Log in to your creative portfolio.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[14px] font-semibold text-primary-text block">PUP Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@pup.edu.ph"
                className={`w-full px-4 py-3 rounded-xl border ${error && email ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-pup-maroon focus:ring-pup-maroon/20'} bg-card-bg text-primary-text outline-none focus:ring-4 transition-all`}
              />
              {error && email && <p className="text-[13px] text-destructive font-medium mt-1">{error}</p>}
            </div>
            
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[14px] font-semibold text-primary-text block">Password</label>
                <a href="#" className="text-[13px] font-medium text-pup-maroon hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 rounded-xl border ${error && !password ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-pup-maroon focus:ring-pup-maroon/20'} bg-card-bg text-primary-text outline-none focus:ring-4 transition-all pr-12`}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-text hover:text-primary-text transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && !password && <p className="text-[13px] text-destructive font-medium mt-1">{error}</p>}
            </div>
            
            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-border text-pup-maroon focus:ring-pup-maroon/30 accent-pup-maroon" />
              <label htmlFor="remember" className="text-[14px] text-secondary-text cursor-pointer select-none">Remember me for 30 days</label>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3.5 bg-pup-maroon text-white font-medium rounded-xl hover:bg-deep-maroon transition-colors text-[16px] shadow-sm mt-6 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : "Log In"}
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-[14px] text-secondary-text">
              Don't have a portfolio yet? <a href="#" onClick={(event) => { event.preventDefault(); onRegister?.(); }} className="font-semibold text-pup-maroon hover:underline">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
