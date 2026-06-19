import { routePaths } from "../routes";

export const sampleReviewId = "sample-submission";

export const moderatorRoutePaths = {
  dashboard: routePaths.moderator.dashboard,
  pending: routePaths.moderator.pending,
  review: `/moderator/review/${sampleReviewId}`,
  reports: routePaths.moderator.reports,
  reportDetail: "/moderator/reports/CC-RPT-2026-0031",
  featured: routePaths.moderator.featured,
  officialContent: routePaths.moderator.officialContent,
  officialContentNew: routePaths.moderator.officialContentNew,
  officialContentDetail: "/moderator/official-content/1",
  history: routePaths.moderator.history,
  events: routePaths.moderator.events,
  newEvent: routePaths.moderator.newEvent,
} as const;

export type ModeratorDestination =
  | "dashboard"
  | "pending"
  | "review"
  | "reports"
  | "reportDetail"
  | "featured"
  | "officialContent"
  | "officialContentNew"
  | "officialContentDetail"
  | "history"
  | "events"
  | "newEvent";

export function getModeratorDestinationFromPath(
  pathname: string,
): ModeratorDestination | null {
  if (pathname === moderatorRoutePaths.dashboard) return "dashboard";
  if (pathname === moderatorRoutePaths.pending) return "pending";
  if (/^\/moderator\/review\/[^/]+$/.test(pathname)) return "review";
  if (pathname === moderatorRoutePaths.reports) return "reports";
  if (/^\/moderator\/reports\/[^/]+$/.test(pathname)) return "reportDetail";
  if (pathname === moderatorRoutePaths.featured) return "featured";
  if (pathname === moderatorRoutePaths.officialContentNew) return "officialContentNew";
  if (/^\/moderator\/official-content\/[^/]+$/.test(pathname)) return "officialContentDetail";
  if (pathname === moderatorRoutePaths.officialContent) return "officialContent";
  if (pathname === moderatorRoutePaths.history) return "history";
  if (pathname === moderatorRoutePaths.events) return "events";
  if (pathname === moderatorRoutePaths.newEvent) return "newEvent";

  return null;
}

export function isModeratorRoute(pathname: string): boolean {
  return pathname.startsWith("/moderator/");
}
