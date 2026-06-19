import { useEffect } from "react";
import {
  DemoShell,
  getStoredDemoSelection,
  isDemoDisplayMode,
  navigateTo,
  storeDemoSelection,
} from "../demo";
import { routePaths } from "../routes";
import { adminRoutePaths, getAdminDestinationFromPath, isAdminRoute as pathIsAdminRoute } from "./adminRoutes";
import { getAdminScreen } from "./adminScreenMap";

interface AdminRouteRendererProps {
  pathname: string;
}

function redirect(path: string): void {
  window.setTimeout(() => navigateTo(path, { replace: true }), 0);
}

export function AdminRouteRenderer({ pathname }: AdminRouteRendererProps) {
  const selection = getStoredDemoSelection();
  const destination = getAdminDestinationFromPath(pathname);
  const validMode = Boolean(selection.mode && isDemoDisplayMode(selection.mode));
  const validRole = selection.role === "admin";
  const missingRoleWithMode = validMode && !selection.role;

  useEffect(() => {
    if (!destination) {
      redirect(validMode && validRole ? adminRoutePaths.dashboard : routePaths.demo.root);
      return;
    }

    if (destination === "dashboard" && pathname !== adminRoutePaths.dashboard) {
      redirect(adminRoutePaths.dashboard);
      return;
    }

    if (!validMode) {
      redirect(routePaths.demo.root);
      return;
    }

    if (missingRoleWithMode && selection.mode) {
      storeDemoSelection({ mode: selection.mode, role: "admin" });
      return;
    }

    if (!validRole) {
      redirect(routePaths.demo.root);
    }
  }, [destination, missingRoleWithMode, selection.mode, validMode, validRole]);

  if (!destination || !selection.mode || !validMode || (!validRole && !missingRoleWithMode)) {
    return (
      <main className="student-route-fallback">
        <section>
          <h1>Super Admin demo unavailable</h1>
          <p>Select Super Admin and a display mode to continue.</p>
          <button type="button" onClick={() => navigateTo(routePaths.demo.root)}>
            Return to Demo Launcher
          </button>
        </section>
      </main>
    );
  }

  const screen = getAdminScreen(destination, selection.mode);

  return (
    <DemoShell mode={selection.mode} role="admin">
      {screen.node}
    </DemoShell>
  );
}

export function isAdminRoute(pathname: string): boolean {
  return pathIsAdminRoute(pathname);
}
