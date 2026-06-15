import { useEffect, type ReactNode } from "react";

import { routePaths } from "../routes";
import { getDemoStartComponent } from "./demoComponents";
import { navigateTo } from "./demoNavigation";
import { storeDemoSelection } from "./demoSession";
import { DemoViewport } from "./DemoViewport";
import {
  isDemoDisplayMode,
  isDemoRole,
  type DemoDisplayMode,
  type DemoRole,
} from "./demoTypes";
import "./demo.css";

interface DemoShellProps {
  children?: ReactNode;
  mode: string;
  role: string;
}

export function DemoShell({ children, mode, role }: DemoShellProps) {
  const validMode = isDemoDisplayMode(mode);
  const validRole = isDemoRole(role);

  useEffect(() => {
    if (validMode && validRole) {
      storeDemoSelection({
        mode: mode as DemoDisplayMode,
        role: role as DemoRole,
      });
      return;
    }

    window.setTimeout(() => {
      navigateTo(routePaths.demo.root, { replace: true });
    }, 0);
  }, [mode, role, validMode, validRole]);

  if (!validMode || !validRole) {
    return (
      <main className="demo-invalid-route">
        <section>
          <h1>Demo mode unavailable</h1>
          <p>The selected prototype route is not available.</p>
          <button
            type="button"
            className="demo-start-button"
            onClick={() => navigateTo(routePaths.demo.root)}
          >
            Return to Demo Launcher
          </button>
        </section>
      </main>
    );
  }

  const StartComponent = children ? null : getDemoStartComponent(mode, role);
  const modeLabel = mode === "desktop" ? "Desktop" : "Mobile";
  const roleLabel = role === "student" ? "Student" : "Moderator";

  return (
    <div className={`demo-shell demo-shell--${mode}`}>
      <div className="demo-mode-bar">
        <div className="demo-mode-label">
          {modeLabel} / {roleLabel}
        </div>
        <button
          type="button"
          className="demo-change-button"
          aria-label="Change Demo Mode"
          onClick={() => navigateTo(routePaths.demo.root)}
        >
          Change Demo Mode
        </button>
      </div>
      <DemoViewport mode={mode}>
        {children ?? (StartComponent ? <StartComponent /> : null)}
      </DemoViewport>
    </div>
  );
}
