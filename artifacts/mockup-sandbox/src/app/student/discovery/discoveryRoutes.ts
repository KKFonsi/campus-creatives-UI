import { routePaths } from "../../routes";

export const sampleIds = {
  work: "sample-work",
  college: "sample-college",
  creator: "sample-creator",
  exhibition: "sample-exhibition",
  event: "sample-event",
} as const;

export const studentDiscoveryRoutes = {
  search: routePaths.student.search,
  searchResults: routePaths.student.searchResults,
  work: `/student/work/${sampleIds.work}`,
  colleges: routePaths.student.colleges,
  college: `/student/colleges/${sampleIds.college}`,
  collegeWork: `/student/colleges/${sampleIds.college}/work/${sampleIds.work}`,
  creator: `/student/creator/${sampleIds.creator}`,
  exhibition: `/student/gallery/${sampleIds.exhibition}`,
  event: `/student/events/${sampleIds.event}`,
  eventEntry: `/student/events/${sampleIds.event}/entry`,
} as const;

export type StudentSecondaryRoute =
  | "search"
  | "searchResults"
  | "work"
  | "colleges"
  | "college"
  | "collegeWork"
  | "creator"
  | "exhibition"
  | "event"
  | "eventEntry";

export function getStudentSecondaryRoute(
  pathname: string,
): StudentSecondaryRoute | null {
  if (pathname === routePaths.student.search) {
    return "search";
  }

  if (pathname === routePaths.student.searchResults) {
    return "searchResults";
  }

  if (pathname === routePaths.student.colleges) {
    return "colleges";
  }

  if (/^\/student\/work\/[^/]+$/.test(pathname)) {
    return "work";
  }

  if (/^\/student\/colleges\/[^/]+\/work\/[^/]+$/.test(pathname)) {
    return "collegeWork";
  }

  if (/^\/student\/colleges\/[^/]+$/.test(pathname)) {
    return "college";
  }

  if (/^\/student\/creator\/[^/]+$/.test(pathname)) {
    return "creator";
  }

  if (/^\/student\/gallery\/[^/]+$/.test(pathname)) {
    return "exhibition";
  }

  if (/^\/student\/events\/[^/]+\/entry$/.test(pathname)) {
    return "eventEntry";
  }

  if (/^\/student\/events\/[^/]+$/.test(pathname)) {
    return "event";
  }

  return null;
}
