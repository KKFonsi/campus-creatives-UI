import { useEffect, type ReactNode } from "react";

import {
  DemoShell,
  getStoredDemoSelection,
  isDemoDisplayMode,
  navigateTo,
  storeDemoSelection,
} from "../demo";
import { ModeratorMobileBottomNav } from "../../components/mockups/pup-campus-creatives/_shared/ModeratorMobileBottomNav";
import { routePaths } from "../routes";
import {
  getModeratorDestinationFromPath,
  isModeratorRoute as pathIsModeratorRoute,
  moderatorRoutePaths,
} from "./moderatorRoutes";
import { getModeratorScreen } from "./moderatorScreenMap";
import type { ModeratorDestination } from "./moderatorRoutes";

interface ModeratorRouteRendererProps {
  pathname: string;
}

function redirect(path: string): void {
  window.setTimeout(() => {
    navigateTo(path, { replace: true });
  }, 0);
}

function getMobileModeratorActive(destination: ModeratorDestination) {
  if (destination === "dashboard") return "Dashboard";
  if (destination === "pending" || destination === "review") return "Reviews";
  if (destination === "reports" || destination === "reportDetail") return "Reports";
  if (destination === "featured") return "Featured";
  return "More";
}

function MobileModeratorShell({
  children,
  destination,
}: {
  children: ReactNode;
  destination: ModeratorDestination;
}) {
  return (
    <div className="mobile-role-shell mobile-role-shell--moderator">
      <div className="mobile-role-scroll mobile-role-scroll--moderator">
        {children}
      </div>
      <ModeratorMobileBottomNav active={getMobileModeratorActive(destination)} />
    </div>
  );
}

export function ModeratorRouteRenderer({ pathname }: ModeratorRouteRendererProps) {
  const selection = getStoredDemoSelection();
  const destination = getModeratorDestinationFromPath(pathname);
  const validMode = Boolean(selection.mode && isDemoDisplayMode(selection.mode));
  const validModeratorRole = selection.role === "moderator";
  const missingRoleWithMode = validMode && !selection.role;

  useEffect(() => {
    if (!destination) {
      redirect(
        validMode && validModeratorRole
          ? moderatorRoutePaths.dashboard
          : routePaths.demo.root,
      );
      return;
    }

    if (!validMode) {
      redirect(routePaths.demo.root);
      return;
    }

    if (missingRoleWithMode && selection.mode) {
      storeDemoSelection({ mode: selection.mode, role: "moderator" });
      return;
    }

    if (!validModeratorRole) {
      redirect(routePaths.demo.root);
    }
  }, [
    destination,
    missingRoleWithMode,
    selection.mode,
    validMode,
    validModeratorRole,
  ]);

  if (
    !destination ||
    !selection.mode ||
    !validMode ||
    (!validModeratorRole && !missingRoleWithMode)
  ) {
    return (
      <main className="student-route-fallback">
        <section>
          <h1>Moderator demo unavailable</h1>
          <p>Select Moderator and a display mode to continue.</p>
          <button type="button" onClick={() => navigateTo(routePaths.demo.root)}>
            Return to Demo Launcher
          </button>
        </section>
      </main>
    );
  }

  const screen = getModeratorScreen(destination, selection.mode);
  const content = screen.fallback ? (
    <div className="student-screen-fallback" data-fallback={screen.fallback}>
      {screen.node}
    </div>
  ) : (
    screen.node
  );

  return (
    <DemoShell mode={selection.mode} role="moderator">
      {selection.mode === "mobile" ? (
        <MobileModeratorShell destination={destination}>{content}</MobileModeratorShell>
      ) : (
        content
      )}
    </DemoShell>
  );
}

export function isModeratorRoute(pathname: string): boolean {
  return pathIsModeratorRoute(pathname);
}
