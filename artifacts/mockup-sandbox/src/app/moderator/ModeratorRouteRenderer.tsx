import { useEffect } from "react";

import {
  DemoShell,
  getStoredDemoSelection,
  isDemoDisplayMode,
  navigateTo,
  storeDemoSelection,
} from "../demo";
import { routePaths } from "../routes";
import {
  getModeratorDestinationFromPath,
  isModeratorRoute as pathIsModeratorRoute,
  moderatorRoutePaths,
} from "./moderatorRoutes";
import { getModeratorScreen } from "./moderatorScreenMap";

interface ModeratorRouteRendererProps {
  pathname: string;
}

function redirect(path: string): void {
  window.setTimeout(() => {
    navigateTo(path, { replace: true });
  }, 0);
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

  return (
    <DemoShell mode={selection.mode} role="moderator">
      {screen.fallback ? (
        <div className="student-screen-fallback" data-fallback={screen.fallback}>
          {screen.node}
        </div>
      ) : (
        screen.node
      )}
    </DemoShell>
  );
}

export function isModeratorRoute(pathname: string): boolean {
  return pathIsModeratorRoute(pathname);
}
