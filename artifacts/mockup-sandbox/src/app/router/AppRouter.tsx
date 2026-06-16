import { useEffect, useState, type ComponentType } from "react";

import { modules as discoveredModules } from "../../.generated/mockup-components";
import {
  DemoLauncher,
  DemoShell,
  appRouteChangeEvent,
  storeDemoSelection,
} from "../demo";
import { AdminRouteRenderer, isAdminRoute } from "../admin";
import { isDemoDisplayMode } from "../demo/demoTypes";
import { isModeratorRoute, ModeratorRouteRenderer } from "../moderator";
import { isPublicRoute, PublicRouteRenderer } from "../public";
import { routePaths } from "../routes";
import { isStudentPrimaryRoute, StudentRouteRenderer } from "../student";
import { NotFoundScreen } from "./NotFoundScreen";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

function resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (value) => typeof value === "function",
  ) as ComponentType[];

  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const key = `./components/mockups/${componentPath}.tsx`;
      const loader = modules[key];
      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) {
          return;
        }

        const name = componentPath.split("/").pop()!;
        const comp = resolveComponent(mod, name);
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          );
          return;
        }

        setComponent(() => comp);
      } catch (error) {
        if (cancelled) {
          return;
        }

        const message = error instanceof Error ? error.message : String(error);
        setError(`Failed to load preview.\n${message}`);
      }
    }

    void loadComponent();

    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <pre style={{ color: "red", padding: "2rem", fontFamily: "system-ui" }}>
        {error}
      </pre>
    );
  }

  if (!Component) {
    return null;
  }

  return <Component />;
}

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function getLocalPathname(): string {
  const basePath = getBasePath();
  const { pathname } = window.location;

  return basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname;
}

function getPreviewPath(): string | null {
  const local = getLocalPathname();
  const match = local.match(/^\/preview\/(.+)$/);

  return match ? match[1] : null;
}

function parseDemoRoute(
  pathname: string,
): { mode: string; role: string } | null {
  const match = pathname.match(/^\/demo\/([^/]+)\/([^/]+)$/);

  return match ? { mode: match[1], role: match[2] } : null;
}

function getPreviewExamplePath(): string {
  const basePath = getBasePath();
  return `${basePath}${routePaths.preview.example}`;
}

function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Component Preview Server
        </h1>
        <p className="text-gray-500 mb-4">
          This server renders individual components for the workspace canvas.
        </p>
        <p className="text-sm text-gray-400">
          Access component previews at{" "}
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
            {getPreviewExamplePath()}
          </code>
        </p>
      </div>
    </div>
  );
}

export function AppRouter() {
  const [pathname, setPathname] = useState(() => getLocalPathname());
  const previewPath = getPreviewPath();

  useEffect(() => {
    function syncPathname(): void {
      setPathname(getLocalPathname());
    }

    window.addEventListener("popstate", syncPathname);
    window.addEventListener(appRouteChangeEvent, syncPathname);

    return () => {
      window.removeEventListener("popstate", syncPathname);
      window.removeEventListener(appRouteChangeEvent, syncPathname);
    };
  }, []);

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    );
  }

  if (pathname === routePaths.public.root || pathname === routePaths.demo.root) {
    return <DemoLauncher />;
  }

  if (isPublicRoute(pathname)) {
    return <PublicRouteRenderer pathname={pathname} />;
  }

  const demoRoute = parseDemoRoute(pathname);
  if (demoRoute) {
    if (demoRoute.role === "student" && (demoRoute.mode === "desktop" || demoRoute.mode === "mobile")) {
      storeDemoSelection({ mode: demoRoute.mode, role: "student" });
      window.setTimeout(() => {
        window.history.replaceState({}, "", routePaths.student.home);
        window.dispatchEvent(new Event(appRouteChangeEvent));
      }, 0);
    }

    if (
      demoRoute.role === "moderator" &&
      isDemoDisplayMode(demoRoute.mode)
    ) {
      storeDemoSelection({ mode: demoRoute.mode, role: "moderator" });
      window.setTimeout(() => {
        window.history.replaceState({}, "", routePaths.moderator.dashboard);
        window.dispatchEvent(new Event(appRouteChangeEvent));
      }, 0);
    }

    if (
      demoRoute.role === "admin" &&
      isDemoDisplayMode(demoRoute.mode)
    ) {
      storeDemoSelection({ mode: demoRoute.mode, role: "admin" });
      window.setTimeout(() => {
        window.history.replaceState({}, "", routePaths.admin.dashboard);
        window.dispatchEvent(new Event(appRouteChangeEvent));
      }, 0);
    }

    return <DemoShell mode={demoRoute.mode} role={demoRoute.role} />;
  }

  if (isStudentPrimaryRoute(pathname)) {
    return <StudentRouteRenderer pathname={pathname} />;
  }

  if (isModeratorRoute(pathname)) {
    return <ModeratorRouteRenderer pathname={pathname} />;
  }

  if (isAdminRoute(pathname)) {
    return <AdminRouteRenderer pathname={pathname} />;
  }

  return (
    <NotFoundScreen message="That address is not part of the presentation route map." />
  );
}
