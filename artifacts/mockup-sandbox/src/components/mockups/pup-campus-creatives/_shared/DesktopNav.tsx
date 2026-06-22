import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { navigateTo } from '../../../../app/demo';
import { routePaths } from '../../../../app/routes';
import { InitialsAvatar } from './InitialsAvatar';
import '../_group.css';

interface DesktopNavProps {
  authenticated?: boolean;
  active?: string;
  onLogin?: () => void;
  onRegister?: () => void;
}

export function DesktopNav({ authenticated = false, active = "Home", onLogin, onRegister }: DesktopNavProps = {}) {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  const navLinks = [
    { name: "Home", href: routePaths.student.home },
    { name: "Explore", href: routePaths.student.explore },
    { name: "Gallery", href: routePaths.student.gallery },
    { name: "Events", href: routePaths.student.events },
    { name: "Spotlight", href: routePaths.student.spotlight },
  ];

  const activeByPath: Record<string, string> = {
    [routePaths.student.home]: "Home",
    [routePaths.student.explore]: "Explore",
    [routePaths.student.gallery]: "Gallery",
    [routePaths.student.events]: "Events",
    [routePaths.student.spotlight]: "Spotlight",
    [routePaths.student.submit]: "Submit Work",
    [routePaths.student.notifications]: "Notifications",
    [routePaths.student.profile]: "Profile",
  };
  const activeName = activeByPath[currentPath] ?? active;

  function handleNavigate(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    navigateTo(href);
  }

  return (
    <nav className="w-full h-20 bg-warm-white border-b border-border flex items-center justify-center px-8 sticky top-0 z-50">
      <div className="w-full max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <a
          href={routePaths.student.home}
          onClick={(event) => handleNavigate(event, routePaths.student.home)}
          className="flex items-center gap-2 rounded-lg px-2 py-1 text-pup-maroon text-xl tracking-tight"
          aria-label="Go to Student Home"
        >
          <span className="font-bold font-inter">PUP:</span>
          <span className="font-medium font-inter">Campus Creatives</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-8 text-[15px] font-medium text-secondary-text">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavigate(event, link.href)}
              aria-current={activeName === link.name ? "page" : undefined}
              className={`${
                activeName === link.name
                  ? "text-pup-maroon font-semibold border-b-2 border-pup-gold pb-1"
                  : "hover:text-pup-maroon hover:bg-soft-maroon/60 rounded-lg px-2 py-1 transition-colors"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {authenticated ? (
            <>
              <button
                type="button"
                onClick={() => navigateTo(routePaths.student.search)}
                className="cc-control p-2 text-secondary-text hover:text-pup-maroon transition-colors rounded-full hover:bg-soft-maroon"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <a
                href={routePaths.student.notifications}
                onClick={(event) => handleNavigate(event, routePaths.student.notifications)}
                className={`cc-control p-2 transition-colors rounded-full hover:bg-soft-maroon relative ${
                  activeName === "Notifications" ? "text-pup-maroon bg-soft-maroon" : "text-secondary-text hover:text-pup-maroon"
                }`}
                aria-label="Notifications"
                aria-current={activeName === "Notifications" ? "page" : undefined}
              >
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pup-maroon rounded-full"></span>
              </a>
              <a
                href={routePaths.student.submit}
                onClick={(event) => handleNavigate(event, routePaths.student.submit)}
                className={`cc-primary-action px-5 py-2.5 text-white font-medium rounded-[10px] hover:bg-deep-maroon transition-colors text-[15px] ${
                  activeName === "Submit Work" ? "bg-deep-maroon ring-2 ring-pup-gold/70" : "bg-pup-maroon"
                }`}
                aria-current={activeName === "Submit Work" ? "page" : undefined}
              >
                Submit Work
              </a>
              <a
                href={routePaths.student.profile}
                onClick={(event) => handleNavigate(event, routePaths.student.profile)}
                className={`w-10 h-10 rounded-full bg-secondary-surface border overflow-hidden ml-2 cursor-pointer ${
                  activeName === "Profile" ? "border-pup-maroon ring-2 ring-pup-gold/70" : "border-border"
                }`}
                aria-label="Creator Profile"
                aria-current={activeName === "Profile" ? "page" : undefined}
              >
                <InitialsAvatar name="Rafael Mendoza" className="w-full h-full" textClassName="text-sm" />
              </a>
            </>
          ) : (
            <>
              <a
                href={routePaths.public.login}
                onClick={(event) => {
                  event.preventDefault();
                  onLogin ? onLogin() : navigateTo(routePaths.public.login);
                }}
                className="rounded-lg text-[15px] font-medium text-primary-text hover:text-pup-maroon hover:bg-soft-maroon/60 transition-colors px-4 py-2"
              >
                Log In
              </a>
              <a
                href={routePaths.public.register}
                onClick={(event) => {
                  event.preventDefault();
                  onRegister ? onRegister() : navigateTo(routePaths.public.register);
                }}
                className="cc-primary-action px-5 py-2.5 bg-pup-maroon text-white font-medium rounded-[10px] hover:bg-deep-maroon transition-colors text-[15px]"
              >
                Join Campus Creatives
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
