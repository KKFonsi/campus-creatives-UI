import { routePaths } from "../routes";

export const adminRoutePaths = {
  dashboard: routePaths.admin.dashboard,
  users: routePaths.admin.users,
  userDetail: "/admin/users/rafael-mendoza",
  moderators: routePaths.admin.moderators,
  recognition: routePaths.admin.recognition,
  reports: routePaths.admin.reports,
  featured: routePaths.admin.featured,
  settings: routePaths.admin.settings,
  auditLog: routePaths.admin.auditLog,
} as const;

export type AdminDestination = keyof typeof adminRoutePaths;

const obsoleteAdminPaths = new Set([
  routePaths.admin.colleges,
  routePaths.admin.categories,
  routePaths.admin.events,
  routePaths.admin.newEvent,
  routePaths.admin.roles,
  routePaths.admin.analytics,
  routePaths.admin.activityLog,
  "/admin/recognition",
]);

export function getAdminDestinationFromPath(pathname: string): AdminDestination | null {
  if (obsoleteAdminPaths.has(pathname)) {
    return "dashboard";
  }

  if (/^\/admin\/users\/[^/]+$/.test(pathname)) {
    return "userDetail";
  }

  const entry = Object.entries(adminRoutePaths).find(([, path]) => path === pathname);
  return entry ? (entry[0] as AdminDestination) : null;
}

export function isAdminRoute(pathname: string): boolean {
  return pathname.startsWith("/admin/");
}
