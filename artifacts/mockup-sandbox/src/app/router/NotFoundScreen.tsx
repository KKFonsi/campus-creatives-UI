import { navigateTo } from "../demo";
import { routePaths } from "../routes";

interface NotFoundScreenProps {
  homePath?: string;
  homeLabel?: string;
  message?: string;
}

export function NotFoundScreen({
  homePath,
  homeLabel = "Return to Home",
  message = "This prototype route is not part of the current demo path.",
}: NotFoundScreenProps) {
  return (
    <main className="demo-invalid-route">
      <section>
        <p className="demo-not-found-kicker">PUP Campus Creatives</p>
        <h1>Page Not Found</h1>
        <p>{message}</p>
        <div className="demo-not-found-actions">
          {homePath ? (
            <button
              type="button"
              className="demo-change-button"
              onClick={() => navigateTo(homePath, { replace: true })}
            >
              {homeLabel}
            </button>
          ) : null}
          <button
            type="button"
            className="demo-start-button"
            onClick={() => navigateTo(routePaths.demo.root, { replace: true })}
          >
            Return to Demo Launcher
          </button>
        </div>
      </section>
    </main>
  );
}
