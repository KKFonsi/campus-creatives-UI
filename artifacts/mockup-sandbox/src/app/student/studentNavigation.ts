import { routePaths } from "../routes";
import { navigateTo } from "../demo";
import type { StudentDestination } from "./studentTypes";

export const studentRouteByDestination: Record<StudentDestination, string> = {
  home: routePaths.student.home,
  explore: routePaths.student.explore,
  gallery: routePaths.student.gallery,
  events: routePaths.student.events,
  spotlight: routePaths.student.spotlight,
  submit: routePaths.student.submit,
  notifications: routePaths.student.notifications,
  profile: routePaths.student.profile,
};

export function navigateToStudent(destination: StudentDestination): void {
  navigateTo(studentRouteByDestination[destination]);
}

export function getStudentDestinationFromPath(
  pathname: string,
): StudentDestination | null {
  if (pathname.startsWith(`${routePaths.student.submit}/`)) {
    return "submit";
  }

  const entry = Object.entries(studentRouteByDestination).find(
    ([, route]) => route === pathname,
  );

  return entry ? (entry[0] as StudentDestination) : null;
}
