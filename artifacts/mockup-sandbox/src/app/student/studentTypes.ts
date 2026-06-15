export const studentDestinations = [
  "home",
  "explore",
  "gallery",
  "events",
  "spotlight",
  "submit",
  "notifications",
  "profile",
] as const;

export type StudentDestination = (typeof studentDestinations)[number];

export function isStudentDestination(
  value: string,
): value is StudentDestination {
  return studentDestinations.includes(value as StudentDestination);
}
