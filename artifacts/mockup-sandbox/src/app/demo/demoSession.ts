import {
  isDemoDisplayMode,
  isDemoRole,
  type DemoDisplayMode,
  type DemoRole,
  type DemoSelection,
} from "./demoTypes";

export const demoSessionKeys = {
  mode: "campus-creatives-demo-mode",
  role: "campus-creatives-demo-role",
} as const;

function getSessionStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function getStoredDemoSelection(): Partial<DemoSelection> {
  const storage = getSessionStorage();
  if (!storage) {
    return {};
  }

  const mode = storage.getItem(demoSessionKeys.mode);
  const role = storage.getItem(demoSessionKeys.role);

  return {
    ...(mode && isDemoDisplayMode(mode) ? { mode } : {}),
    ...(role && isDemoRole(role) ? { role } : {}),
  };
}

export function storeDemoSelection(selection: DemoSelection): void {
  const storage = getSessionStorage();
  if (!storage) {
    return;
  }

  storage.setItem(demoSessionKeys.mode, selection.mode);
  storage.setItem(demoSessionKeys.role, selection.role);
}

export function storeDemoMode(mode: DemoDisplayMode): void {
  const storage = getSessionStorage();
  if (!storage) {
    return;
  }

  storage.setItem(demoSessionKeys.mode, mode);
}

export function storeDemoRole(role: DemoRole): void {
  const storage = getSessionStorage();
  if (!storage) {
    return;
  }

  storage.setItem(demoSessionKeys.role, role);
}
