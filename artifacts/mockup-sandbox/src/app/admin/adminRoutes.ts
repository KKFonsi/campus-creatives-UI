import { routePaths } from "../routes";

export const adminRoutePaths = {
  dashboard: routePaths.admin.dashboard,
  users: routePaths.admin.users,
  moderators: routePaths.admin.moderators,
  colleges: routePaths.admin.colleges,
  categories: routePaths.admin.categories,
  events: routePaths.admin.events,
  newEvent: routePaths.admin.newEvent,
  reports: routePaths.admin.reports,
  featured: routePaths.admin.featured,
  settings: routePaths.admin.settings,
  auditLog: routePaths.admin.auditLog,
} as const;

export type AdminDestination = keyof typeof adminRoutePaths;

export function getAdminDestinationFromPath(pathname: string): AdminDestination | null {
  const entry = Object.entries(adminRoutePaths).find(([, path]) => path === pathname);
  return entry ? (entry[0] as AdminDestination) : null;
}

export function isAdminRoute(pathname: string): boolean {
  return pathname.startsWith("/admin/");
}
