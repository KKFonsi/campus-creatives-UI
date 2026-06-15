import { DemoViewport, navigateTo } from "../demo";
import { routePaths } from "../routes";
import { getPublicDisplayMode } from "./publicSession";
import { getPublicScreen } from "./publicScreenMap";
import "./public.css";

interface PublicRouteRendererProps {
  pathname: string;
}

export function PublicRouteRenderer({ pathname }: PublicRouteRendererProps) {
  const mode = getPublicDisplayMode();
  const screen = getPublicScreen(pathname, mode);

  if (!screen) {
    window.setTimeout(() => {
      navigateTo(routePaths.public.landing, { replace: true });
    }, 0);

    return (
      <main className="public-route-fallback">
        <section>
          <h1>Public page unavailable</h1>
          <p>Returning to the public Campus Creatives entry.</p>
        </section>
      </main>
    );
  }

  return (
    <div className={`public-shell public-shell--${mode}`}>
      <div className="public-mode-bar">
        <div className="public-mode-label">
          {mode === "desktop" ? "Desktop" : "Mobile"} / Public
        </div>
        <div className="public-mode-actions">
          <button
            type="button"
            className="public-mode-link"
            onClick={() => navigateTo(routePaths.public.landing)}
          >
            Landing
          </button>
          <button
            type="button"
            className="public-change-button"
            onClick={() => navigateTo(routePaths.demo.root)}
          >
            Change Demo Mode
          </button>
        </div>
      </div>
      <DemoViewport mode={mode}>{screen}</DemoViewport>
    </div>
  );
}
