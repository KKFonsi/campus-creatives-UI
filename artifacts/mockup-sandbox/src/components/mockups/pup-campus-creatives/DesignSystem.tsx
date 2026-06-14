import React from 'react';
import './_group.css';

export function DesignSystem() {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-inter p-12 overflow-y-auto">
      <div className="max-w-[1000px] mx-auto space-y-16">
        
        <header className="border-b border-border pb-8">
          <div className="text-pup-maroon text-2xl tracking-tight mb-2">
            <span className="font-bold font-inter">PUP:</span>
            <span className="font-medium font-inter">Campus Creatives</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight">Design System</h1>
          <p className="text-lg text-secondary-text">UI components and visual identity guidelines.</p>
        </header>

        {/* 1. Color Tokens */}
        <section>
          <h2 className="text-[24px] font-bold mb-6 border-b border-border pb-2">1. Color Tokens</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-secondary-text mb-3">Brand Colors</h3>
              <div className="flex gap-4 flex-wrap">
                <ColorSwatch hex="#800000" name="PUP Maroon" varName="--color-pup-maroon" />
                <ColorSwatch hex="#5B0000" name="Deep Maroon" varName="--color-deep-maroon" />
                <ColorSwatch hex="#3D0000" name="Dark Maroon" varName="--color-dark-maroon" />
                <ColorSwatch hex="#FFB81C" name="PUP Gold" varName="--color-pup-gold" border />
                <ColorSwatch hex="#D89B00" name="Warm Gold" varName="--color-warm-gold" />
                <ColorSwatch hex="#FFF2CC" name="Soft Gold" varName="--color-soft-gold" border />
                <ColorSwatch hex="#A71930" name="Crimson Accent" varName="--color-crimson-accent" />
              </div>
            </div>
            
            <div>
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-secondary-text mb-3">Surfaces & Text</h3>
              <div className="flex gap-4 flex-wrap">
                <ColorSwatch hex="#F8F6F1" name="Main Background" varName="--color-main-bg" border />
                <ColorSwatch hex="#FFFDF8" name="Warm White" varName="--color-warm-white" border />
                <ColorSwatch hex="#FFFFFF" name="Card Background" varName="--color-card-bg" border />
                <ColorSwatch hex="#F1EDE6" name="Secondary Surface" varName="--color-secondary-surface" border />
                <ColorSwatch hex="#F5E7E7" name="Soft Maroon Surface" varName="--color-soft-maroon" border />
                <ColorSwatch hex="#251717" name="Dark Surface" varName="--color-dark-surface" />
                <ColorSwatch hex="#DDD5CC" name="Border" varName="--color-border" />
              </div>
            </div>

            <div>
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-secondary-text mb-3">Status Colors</h3>
              <div className="flex gap-4 flex-wrap">
                <ColorSwatch hex="#2F7D57" name="Approved" varName="--color-status-approved" />
                <ColorSwatch hex="#B7791F" name="Pending" varName="--color-status-pending" />
                <ColorSwatch hex="#C76A24" name="Needs Revision" varName="--color-status-needs-revision" />
                <ColorSwatch hex="#B63737" name="Rejected" varName="--color-status-rejected" />
                <ColorSwatch hex="#356B9C" name="Info" varName="--color-status-info" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Typography */}
        <section>
          <h2 className="text-[24px] font-bold mb-6 border-b border-border pb-2">2. Typography (Inter)</h2>
          <div className="bg-card-bg border border-border rounded-xl p-8 space-y-8 shadow-sm">
            <div>
              <div className="text-[12px] text-muted-text mb-1">Desktop Hero Title (48px, Bold, -tight)</div>
              <div className="text-[48px] leading-[1.1] font-bold tracking-tight">The quick brown fox</div>
            </div>
            <div>
              <div className="text-[12px] text-muted-text mb-1">Page Title (32px, Bold, -tight)</div>
              <div className="text-[32px] leading-[1.2] font-bold tracking-tight">The quick brown fox</div>
            </div>
            <div>
              <div className="text-[12px] text-muted-text mb-1">Section Heading (24px, Bold)</div>
              <div className="text-[24px] font-bold">The quick brown fox jumps over</div>
            </div>
            <div>
              <div className="text-[12px] text-muted-text mb-1">Card Title (17px, SemiBold)</div>
              <div className="text-[17px] font-semibold">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-[12px] text-muted-text mb-1">Body Text (15px, Regular)</div>
              <div className="text-[15px] leading-relaxed max-w-[600px]">The quick brown fox jumps over the lazy dog. Build your campus creative portfolio, discover student talent, join showcases, and share approved works.</div>
            </div>
            <div>
              <div className="text-[12px] text-muted-text mb-1">Metadata (13px, Medium, Secondary Text)</div>
              <div className="text-[13px] font-medium text-secondary-text">College of Arts and Letters • 245 Likes</div>
            </div>
          </div>
        </section>

        {/* 3. Buttons */}
        <section>
          <h2 className="text-[24px] font-bold mb-6 border-b border-border pb-2">3. Buttons</h2>
          <div className="bg-card-bg border border-border rounded-xl p-8 flex flex-wrap gap-8 items-end shadow-sm">
            <div className="space-y-4">
              <div className="text-[13px] font-semibold text-secondary-text">Primary (Maroon)</div>
              <button className="px-6 py-3 bg-pup-maroon text-white font-medium rounded-xl hover:bg-deep-maroon transition-colors shadow-sm">Submit Work</button>
            </div>
            <div className="space-y-4">
              <div className="text-[13px] font-semibold text-secondary-text">Secondary (Outline)</div>
              <button className="px-6 py-3 bg-transparent border-2 border-border text-primary-text font-medium rounded-xl hover:border-pup-maroon hover:text-pup-maroon transition-colors">View Portfolio</button>
            </div>
            <div className="space-y-4">
              <div className="text-[13px] font-semibold text-secondary-text">Disabled</div>
              <button disabled className="px-6 py-3 bg-pup-maroon/50 text-white/80 font-medium rounded-xl cursor-not-allowed">Loading...</button>
            </div>
            <div className="space-y-4">
              <div className="text-[13px] font-semibold text-secondary-text">Gold Action</div>
              <button className="px-6 py-3 bg-pup-gold text-dark-surface font-bold rounded-xl hover:bg-warm-gold transition-colors shadow-sm">Join Creatives</button>
            </div>
          </div>
        </section>

        {/* 4. Form Controls */}
        <section>
          <h2 className="text-[24px] font-bold mb-6 border-b border-border pb-2">4. Form Controls</h2>
          <div className="bg-card-bg border border-border rounded-xl p-8 grid grid-cols-2 gap-8 shadow-sm">
            <div className="space-y-1.5">
              <label className="text-[14px] font-semibold text-primary-text block">Standard Input</label>
              <input type="text" placeholder="Placeholder text..." className="w-full px-4 py-3 rounded-xl border border-border focus:border-pup-maroon focus:ring-4 focus:ring-pup-maroon/20 bg-main-bg text-primary-text outline-none transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-semibold text-primary-text block text-destructive">Error State</label>
              <input type="text" value="Invalid input" className="w-full px-4 py-3 rounded-xl border border-destructive focus:ring-4 focus:ring-destructive/20 bg-main-bg text-primary-text outline-none transition-all" />
              <p className="text-[12px] text-destructive font-medium">This field is required.</p>
            </div>
            <div className="col-span-2 flex items-center gap-3">
              <input type="checkbox" id="demo-check" defaultChecked className="w-5 h-5 rounded border-border text-pup-maroon focus:ring-pup-maroon/30 accent-pup-maroon cursor-pointer" />
              <label htmlFor="demo-check" className="text-[14px] text-secondary-text cursor-pointer select-none">
                I agree to the Community Guidelines
              </label>
            </div>
          </div>
        </section>

        {/* 5. Chips & Badges */}
        <section>
          <h2 className="text-[24px] font-bold mb-6 border-b border-border pb-2">5. Chips & Badges</h2>
          <div className="bg-card-bg border border-border rounded-xl p-8 flex flex-wrap gap-6 shadow-sm">
            <div className="space-y-3">
              <div className="text-[12px] font-semibold text-secondary-text">Category Chips</div>
              <div className="flex gap-2">
                <span className="px-4 py-2 rounded-full text-[14px] font-medium border bg-soft-maroon border-pup-maroon text-pup-maroon">Selected</span>
                <span className="px-4 py-2 rounded-full text-[14px] font-medium border bg-card-bg border-border text-secondary-text">Default</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-[12px] font-semibold text-secondary-text">Recognition Badge</div>
              <div>
                <span className="px-2.5 py-1 bg-soft-gold text-warm-gold text-[12px] font-bold uppercase rounded border border-pup-gold/30">Campus Highlight</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[12px] font-semibold text-secondary-text">Status Badges</div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-status-approved/10 text-status-approved text-[12px] font-semibold rounded">Approved</span>
                <span className="px-2 py-1 bg-status-pending/10 text-status-pending text-[12px] font-semibold rounded">Pending</span>
                <span className="px-2 py-1 bg-status-needs-revision/10 text-status-needs-revision text-[12px] font-semibold rounded">Revision</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function ColorSwatch({ hex, name, varName, border = false }: { hex: string, name: string, varName: string, border?: boolean }) {
  return (
    <div className="w-[140px]">
      <div 
        className={`h-24 rounded-lg w-full mb-2 ${border ? 'border border-border' : ''}`}
        style={{ backgroundColor: hex }}
      ></div>
      <div className="text-[14px] font-bold text-primary-text">{name}</div>
      <div className="text-[12px] font-mono text-secondary-text mt-0.5">{hex}</div>
      <div className="text-[10px] font-mono text-muted-text mt-0.5">{varName}</div>
    </div>
  );
}
