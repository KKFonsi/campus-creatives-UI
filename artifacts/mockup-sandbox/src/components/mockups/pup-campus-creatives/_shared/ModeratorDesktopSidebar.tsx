import React from "react";
import {
  Calendar,
  ClipboardList,
  Flag,
  History,
  LayoutDashboard,
  Shield,
  Star,
  type LucideIcon,
} from "lucide-react";
import { navigateTo } from "../../../../app/demo";
import { routePaths } from "../../../../app/routes";

export interface ModeratorDesktopSidebarProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onEvents?: () => void;
  onHistory?: () => void;
}

type ModeratorSidebarItem =
  | "dashboard"
  | "pending"
  | "reports"
  | "featured"
  | "official"
  | "events"
  | "history";

export function getModeratorSidebarActiveItem(pathname: string): ModeratorSidebarItem {
  if (pathname === routePaths.moderator.dashboard) return "dashboard";
  if (pathname === routePaths.moderator.pending || /^\/moderator\/review\/[^/]+$/.test(pathname)) return "pending";
  if (pathname === routePaths.moderator.reports || /^\/moderator\/reports\/[^/]+$/.test(pathname)) return "reports";
  if (pathname === routePaths.moderator.featured) return "featured";
  if (pathname === routePaths.moderator.officialContent) return "official";
  if (pathname === routePaths.moderator.events || pathname === routePaths.moderator.newEvent) return "events";
  if (pathname === routePaths.moderator.history) return "history";
  return "dashboard";
}

export function ModeratorDesktopSidebar({
  onDashboard,
  onPending,
  onReports,
  onFeatured,
  onOfficialContent,
  onEvents,
  onHistory,
}: ModeratorDesktopSidebarProps) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : routePaths.moderator.dashboard;
  const active = getModeratorSidebarActiveItem(pathname);

  const items: Array<{
    id: ModeratorSidebarItem;
    label: string;
    icon: LucideIcon;
    badge?: string;
    onClick?: () => void;
    href: string;
  }> = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, onClick: onDashboard, href: routePaths.moderator.dashboard },
    { id: "pending", label: "Pending Reviews", icon: ClipboardList, badge: "24", onClick: onPending, href: routePaths.moderator.pending },
    { id: "reports", label: "Reports", icon: Flag, badge: "6", onClick: onReports, href: routePaths.moderator.reports },
    { id: "featured", label: "Featured Works", icon: Star, onClick: onFeatured, href: routePaths.moderator.featured },
    { id: "official", label: "Official Content", icon: Shield, onClick: onOfficialContent, href: routePaths.moderator.officialContent },
    { id: "events", label: "Events", icon: Calendar, onClick: onEvents, href: routePaths.moderator.events },
    { id: "history", label: "Moderation History", icon: History, onClick: onHistory, href: routePaths.moderator.history },
  ];

  return (
    <aside className="w-[240px] bg-dark-surface text-white flex flex-col shrink-0 sticky top-0 h-screen">
      <div className="p-6">
        <div className="text-pup-gold font-bold text-xl tracking-tight mb-1">Campus Creatives</div>
        <div className="inline-block px-2 py-0.5 bg-pup-gold text-dark-surface text-[10px] font-bold rounded uppercase tracking-wider">
          MODERATOR
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => (item.onClick ? item.onClick() : navigateTo(item.href))}
            className={`w-full flex items-center justify-between border-l-4 px-3 py-2.5 rounded-lg transition-all ${
              active === item.id
                ? "bg-white/10 border-pup-gold text-white shadow-inner"
                : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/20"
            }`}
            aria-current={active === item.id ? "page" : undefined}
          >
            <div className="flex min-w-0 items-center gap-3">
              <item.icon size={20} className="shrink-0" />
              <span className="truncate text-[14px] font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <span className="ml-2 shrink-0 px-1.5 py-0.5 bg-pup-maroon text-white text-[10px] font-bold rounded">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 text-[11px] font-bold uppercase tracking-wide text-white/45">
        Moderator tools only
      </div>
    </aside>
  );
}
