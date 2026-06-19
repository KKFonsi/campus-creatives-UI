import { useEffect, type ReactNode } from "react";

import {
  DemoShell,
  getStoredDemoSelection,
  isDemoDisplayMode,
  navigateTo,
  storeDemoSelection,
} from "../demo";
import { MobileBottomNav } from "../../components/mockups/pup-campus-creatives/_shared/MobileBottomNav";
import { routePaths } from "../routes";
import { getStudentScreen } from "./studentScreenMap";
import {
  getCreatorPrimaryProps,
  getCreatorSpaceRoute,
  getCreatorSpaceScreen,
  getSubmitWorkProps,
} from "./creator";
import {
  getDiscoveryScreen,
  getPrimaryNavigationProps,
  getStudentSecondaryRoute,
} from "./discovery";
import {
  getStudentDestinationFromPath,
  studentRouteByDestination,
} from "./studentNavigation";
import type { StudentDestination } from "./studentTypes";
import "./student.css";

interface StudentRouteRendererProps {
  pathname: string;
}

function redirect(path: string): void {
  window.setTimeout(() => {
    navigateTo(path, { replace: true });
  }, 0);
}

function getSafeStudentParent(pathname: string): string {
  if (pathname.startsWith("/student/profile")) {
    return routePaths.student.profile;
  }

  if (pathname.startsWith("/student/submissions")) {
    return routePaths.student.submissions;
  }

  if (pathname.startsWith("/student/submit")) {
    return routePaths.student.submit;
  }

  if (pathname.startsWith("/student/events")) {
    return routePaths.student.events;
  }

  if (pathname.startsWith("/student/gallery")) {
    return routePaths.student.gallery;
  }

  if (
    pathname.startsWith("/student/search") ||
    pathname.startsWith("/student/work") ||
    pathname.startsWith("/student/colleges") ||
    pathname.startsWith("/student/creator")
  ) {
    return routePaths.student.explore;
  }

  if (pathname.startsWith("/student/spotlight")) {
    return routePaths.student.spotlight;
  }

  if (pathname.startsWith("/student/notifications")) {
    return routePaths.student.notifications;
  }

  return routePaths.student.home;
}

function MobileStudentShell({ children }: { children: ReactNode }) {
  return (
    <div className="mobile-role-shell mobile-role-shell--student">
      <div className="mobile-role-scroll mobile-role-scroll--student">
        {children}
      </div>
      <MobileBottomNav />
    </div>
  );
}

export function StudentRouteRenderer({ pathname }: StudentRouteRendererProps) {
  const selection = getStoredDemoSelection();
  const destination = getStudentDestinationFromPath(pathname);
  const secondaryRoute = getStudentSecondaryRoute(pathname);
  const creatorRoute = getCreatorSpaceRoute(pathname);
  const hasStudentRoute = Boolean(destination || secondaryRoute || creatorRoute);
  const validMode = Boolean(selection.mode && isDemoDisplayMode(selection.mode));
  const validStudentRole = selection.role === "student";
  const missingRoleWithMode = validMode && !selection.role;

  useEffect(() => {
    if (!hasStudentRoute) {
      redirect(
        validMode && validStudentRole
          ? getSafeStudentParent(pathname)
          : routePaths.demo.root,
      );
      return;
    }

    if (!validMode) {
      redirect(routePaths.demo.root);
      return;
    }

    if (missingRoleWithMode && selection.mode) {
      storeDemoSelection({ mode: selection.mode, role: "student" });
      return;
    }

    if (!validStudentRole) {
      redirect(routePaths.demo.root);
    }
  }, [
    destination,
    hasStudentRoute,
    missingRoleWithMode,
    creatorRoute,
    pathname,
    selection.mode,
    secondaryRoute,
    validMode,
    validStudentRole,
  ]);

  if (
    !hasStudentRoute ||
    !selection.mode ||
    !validMode ||
    (!validStudentRole && !missingRoleWithMode)
  ) {
    return (
      <main className="student-route-fallback">
        <section>
          <h1>Student demo unavailable</h1>
          <p>Select Student and a display mode to continue.</p>
          <button type="button" onClick={() => navigateTo(routePaths.demo.root)}>
            Return to Demo Launcher
          </button>
        </section>
      </main>
    );
  }

  const primaryProps = {
    ...getPrimaryNavigationProps(pathname),
    ...(destination === "profile" ? getCreatorPrimaryProps() : {}),
    ...(destination === "submit" ? getSubmitWorkProps() : {}),
  };

  const screen = creatorRoute
    ? getCreatorSpaceScreen(creatorRoute, selection.mode)
    : secondaryRoute
    ? getDiscoveryScreen(secondaryRoute, selection.mode)
    : getStudentScreen(
        destination as StudentDestination,
        selection.mode,
        primaryProps,
      );

  if ("node" in screen) {
    const content = screen.fallback ? (
      <div className="student-screen-fallback" data-fallback={screen.fallback}>
        {screen.node}
      </div>
    ) : (
      screen.node
    );

    return (
      <DemoShell mode={selection.mode} role="student">
        {selection.mode === "mobile" ? <MobileStudentShell>{content}</MobileStudentShell> : content}
      </DemoShell>
    );
  }

  const StudentScreen = screen.component;
  const componentContent = screen.fallback ? (
    <div className="student-screen-fallback" data-fallback={screen.fallback}>
      <StudentScreen />
    </div>
  ) : (
    <StudentScreen />
  );

  return (
    <DemoShell mode={selection.mode} role="student">
      {selection.mode === "mobile" ? <MobileStudentShell>{componentContent}</MobileStudentShell> : componentContent}
    </DemoShell>
  );
}

export function isStudentPrimaryRoute(pathname: string): boolean {
  return (
    pathname.startsWith("/student/") &&
    (Boolean(getStudentDestinationFromPath(pathname)) ||
      !Object.values(studentRouteByDestination).includes(pathname))
  );
}
