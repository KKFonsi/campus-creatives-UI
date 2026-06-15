import { routePaths } from "../routes";

export const sampleReviewId = "sample-submission";

export const moderatorRoutePaths = {
  dashboard: routePaths.moderator.dashboard,
  pending: routePaths.moderator.pending,
  review: `/moderator/review/${sampleReviewId}`,
  reports: routePaths.moderator.reports,
  featured: routePaths.moderator.featured,
  officialContent: routePaths.moderator.officialContent,
  history: routePaths.moderator.history,
} as const;

export type ModeratorDestination =
  | "dashboard"
  | "pending"
  | "review"
  | "reports"
  | "featured"
  | "officialContent"
  | "history";

export function getModeratorDestinationFromPath(
  pathname: string,
): ModeratorDestination | null {
  if (pathname === moderatorRoutePaths.dashboard) return "dashboard";
  if (pathname === moderatorRoutePaths.pending) return "pending";
  if (/^\/moderator\/review\/[^/]+$/.test(pathname)) return "review";
  if (pathname === moderatorRoutePaths.reports) return "reports";
  if (pathname === moderatorRoutePaths.featured) return "featured";
  if (pathname === moderatorRoutePaths.officialContent) return "officialContent";
  if (pathname === moderatorRoutePaths.history) return "history";

  return null;
}

export function isModeratorRoute(pathname: string): boolean {
  return pathname.startsWith("/moderator/");
}
