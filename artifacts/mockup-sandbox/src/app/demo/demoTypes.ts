export const demoDisplayModes = ["desktop", "mobile"] as const;
export const demoRoles = ["student", "moderator"] as const;

export type DemoDisplayMode = (typeof demoDisplayModes)[number];
export type DemoRole = (typeof demoRoles)[number];

export interface DemoSelection {
  mode: DemoDisplayMode;
  role: DemoRole;
}

export function isDemoDisplayMode(value: string): value is DemoDisplayMode {
  return demoDisplayModes.includes(value as DemoDisplayMode);
}

export function isDemoRole(value: string): value is DemoRole {
  return demoRoles.includes(value as DemoRole);
}

export function isDemoSelection(
  mode: string,
  role: string,
): mode is DemoDisplayMode {
  return isDemoDisplayMode(mode) && isDemoRole(role);
}
