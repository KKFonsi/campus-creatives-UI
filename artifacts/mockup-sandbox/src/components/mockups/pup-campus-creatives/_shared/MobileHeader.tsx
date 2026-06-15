import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { navigateTo } from '../../../../app/demo';
import { routePaths } from '../../../../app/routes';
import '../_group.css';

interface MobileHeaderProps {
  publicMode?: boolean;
}

export function MobileHeader({ publicMode = false }: MobileHeaderProps = {}) {
  function handleNavigate(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    navigateTo(href);
  }

  const homePath = publicMode ? routePaths.public.landing : routePaths.student.home;
  const notificationPath = publicMode ? routePaths.public.login : routePaths.student.notifications;

  return (
    <header className="w-full h-14 bg-warm-white border-b border-border flex items-center justify-between px-4 sticky top-0 z-50">
      <a
        href={homePath}
        onClick={(event) => handleNavigate(event, homePath)}
        className="flex items-center gap-1.5 text-pup-maroon text-lg tracking-tight"
        aria-label={publicMode ? "Go to Landing" : "Go to Student Home"}
      >
        <span className="font-bold font-inter">PUP:</span>
        <span className="font-medium font-inter hidden sm:inline">Campus Creatives</span>
        <span className="font-medium font-inter sm:hidden">CC</span>
      </a>

      <div className="flex items-center gap-1">
        <button className="p-2 text-secondary-text hover:text-pup-maroon transition-colors rounded-full hover:bg-soft-maroon" aria-label="Search">
          <Search size={20} />
        </button>
        <a
          href={notificationPath}
          onClick={(event) => handleNavigate(event, notificationPath)}
          className="p-2 text-secondary-text hover:text-pup-maroon transition-colors rounded-full hover:bg-soft-maroon relative"
          aria-label={publicMode ? "Log in" : "Notifications"}
        >
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pup-maroon rounded-full"></span>
        </a>
      </div>
    </header>
  );
}
