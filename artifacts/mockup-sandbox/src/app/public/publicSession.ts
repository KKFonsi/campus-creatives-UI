import {
  getStoredDemoSelection,
  storeDemoMode,
  storeDemoRole,
} from "../demo/demoSession";
import type { DemoDisplayMode } from "../demo/demoTypes";

export const defaultPublicDisplayMode: DemoDisplayMode = "desktop";

export function getPublicDisplayMode(): DemoDisplayMode {
  return getStoredDemoSelection().mode ?? defaultPublicDisplayMode;
}

export function completeMockStudentAuth(): void {
  storeDemoMode(getPublicDisplayMode());
  storeDemoRole("student");
}
