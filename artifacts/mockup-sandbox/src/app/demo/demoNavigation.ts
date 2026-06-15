import { routePaths } from "../routes";
import type { DemoDisplayMode, DemoRole } from "./demoTypes";

export const appRouteChangeEvent = "campus-creatives-route-change";

export function getDemoRoute(mode: DemoDisplayMode, role: DemoRole): string {
  if (mode === "desktop" && role === "student") {
    return routePaths.demo.desktopStudent;
  }

  if (mode === "mobile" && role === "student") {
    return routePaths.demo.mobileStudent;
  }

  if (mode === "desktop" && role === "moderator") {
    return routePaths.demo.desktopModerator;
  }

  return routePaths.demo.mobileModerator;
}

export function navigateTo(path: string, options?: { replace?: boolean }): void {
  if (typeof window === "undefined") {
    return;
  }

  const target = `${window.location.origin}${path}`;
  if (window.location.pathname === path) {
    return;
  }

  if (options?.replace) {
    window.history.replaceState({}, "", target);
  } else {
    window.history.pushState({}, "", target);
  }

  window.dispatchEvent(new Event(appRouteChangeEvent));
}
