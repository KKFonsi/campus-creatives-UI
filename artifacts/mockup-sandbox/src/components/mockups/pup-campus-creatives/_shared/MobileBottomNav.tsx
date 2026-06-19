import React from 'react';
import { Home, Compass, Image as ImageIcon, PlusSquare, Calendar } from 'lucide-react';
import { navigateTo } from '../../../../app/demo';
import { routePaths } from '../../../../app/routes';
import { InitialsAvatar } from './InitialsAvatar';
import '../_group.css';

interface MobileBottomNavProps {
  guest?: boolean;
}

export function MobileBottomNav({ guest = false }: MobileBottomNavProps = {}) {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  const homePath = guest ? routePaths.public.landing : routePaths.student.home;
  const explorePath = guest ? routePaths.public.explore : routePaths.student.explore;
  const galleryPath = guest ? routePaths.public.explore : routePaths.student.gallery;
  const submitPath = guest ? routePaths.public.login : routePaths.student.submit;
  const eventsPath = guest ? routePaths.public.explore : routePaths.student.events;
  const profilePath = guest ? routePaths.public.login : routePaths.student.profile;
  const isActive = (path: string) => {
    if (guest) return currentPath === path;
    if (path === routePaths.student.submit) {
      return currentPath.startsWith(routePaths.student.submit);
    }
    if (path === routePaths.student.profile) {
      return (
        currentPath.startsWith(routePaths.student.profile) ||
        currentPath.startsWith("/student/submissions")
      );
    }
    if (path === routePaths.student.home) {
      return (
        currentPath === routePaths.student.home ||
        currentPath.startsWith(routePaths.student.spotlight) ||
        currentPath.startsWith(routePaths.student.notifications)
      );
    }
    if (path === routePaths.student.events) {
      return currentPath.startsWith(routePaths.student.events);
    }
    if (path === routePaths.student.gallery) {
      return currentPath.startsWith(routePaths.student.gallery);
    }
    if (path === routePaths.student.explore) {
      return (
        currentPath === routePaths.student.explore ||
        currentPath.startsWith("/student/search") ||
        currentPath.startsWith("/student/work") ||
        currentPath.startsWith("/student/colleges") ||
        currentPath.startsWith("/student/creator")
      );
    }
    return currentPath === path;
  };
  const itemClass = (path: string) =>
    `flex flex-col items-center justify-center flex-1 min-w-0 h-full gap-0.5 ${
      isActive(path)
        ? "text-pup-maroon"
        : "text-secondary-text hover:text-pup-maroon"
    }`;

  function handleNavigate(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    navigateTo(href);
  }

  return (
    <nav className="mobile-bottom-nav w-full h-[68px] bg-warm-white border-t border-border shrink-0 z-50 flex items-center justify-around px-1 pb-safe">
      <a
        href={homePath}
        onClick={(event) => handleNavigate(event, homePath)}
        className={itemClass(homePath)}
        aria-current={isActive(homePath) ? "page" : undefined}
      >
        <Home size={24} className="stroke-[2.5px]" />
        <span className="text-[10px] font-medium">Home</span>
      </a>
      
      <a
        href={explorePath}
        onClick={(event) => handleNavigate(event, explorePath)}
        className={itemClass(explorePath)}
        aria-current={isActive(explorePath) ? "page" : undefined}
      >
        <Compass size={24} />
        <span className="text-[10px] font-medium">Explore</span>
      </a>

      <a
        href={galleryPath}
        onClick={(event) => handleNavigate(event, galleryPath)}
        className={itemClass(galleryPath)}
        aria-current={isActive(galleryPath) ? "page" : undefined}
      >
        <ImageIcon size={22} />
        <span className="text-[10px] font-medium">Gallery</span>
      </a>

      <a
        href={eventsPath}
        onClick={(event) => handleNavigate(event, eventsPath)}
        className={itemClass(eventsPath)}
        aria-current={isActive(eventsPath) ? "page" : undefined}
      >
        <Calendar size={24} />
        <span className="text-[10px] font-medium">Events</span>
      </a>
      
      <a
        href={profilePath}
        onClick={(event) => handleNavigate(event, profilePath)}
        className={itemClass(profilePath)}
        aria-current={isActive(profilePath) ? "page" : undefined}
        aria-label={guest ? "Log in to view profile" : "Creator Profile"}
      >
        <InitialsAvatar name="Rafael Mendoza" className="w-6 h-6 border border-border" textClassName="text-[10px]" />
        <span className="text-[10px] font-medium">Profile</span>
      </a>

      <div className="flex flex-col items-center justify-center flex-[1.45] min-w-0 h-full -mt-7">
        <a
          href={submitPath}
          onClick={(event) => handleNavigate(event, submitPath)}
          className={`w-16 h-16 rounded-full text-white flex items-center justify-center shadow-xl shadow-pup-maroon/30 hover:bg-deep-maroon transition-colors border-4 border-warm-white ${
            isActive(submitPath) ? "bg-deep-maroon ring-2 ring-pup-gold" : "bg-pup-maroon"
          }`}
          aria-label={guest ? "Log in to submit work" : "Submit Work"}
          aria-current={isActive(submitPath) ? "page" : undefined}
        >
          <PlusSquare size={34} strokeWidth={2.5} />
        </a>
        <span className="text-[11px] font-bold text-pup-maroon mt-0.5">Submit</span>
      </div>
    </nav>
  );
}
