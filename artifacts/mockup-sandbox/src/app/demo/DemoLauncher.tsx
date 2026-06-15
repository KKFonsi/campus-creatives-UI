import { Monitor, Smartphone, ShieldCheck, UserRound } from "lucide-react";
import type { ComponentType } from "react";
import { useMemo, useState } from "react";

import { routePaths } from "../routes";
import { getDemoRoute, navigateTo } from "./demoNavigation";
import {
  getStoredDemoSelection,
  storeDemoMode,
  storeDemoRole,
  storeDemoSelection,
} from "./demoSession";
import type { DemoDisplayMode, DemoRole } from "./demoTypes";
import "./demo.css";

interface OptionCardProps<T extends string> {
  description: string;
  icon: ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  label: string;
  selected: boolean;
  value: T;
  onSelect: (value: T) => void;
}

function OptionCard<T extends string>({
  description,
  icon: Icon,
  label,
  selected,
  value,
  onSelect,
}: OptionCardProps<T>) {
  return (
    <button
      type="button"
      className="demo-option-card"
      data-selected={selected ? "true" : "false"}
      aria-pressed={selected}
      onClick={() => onSelect(value)}
    >
      <span className="demo-option-icon" aria-hidden="true">
        <Icon size={24} aria-hidden />
      </span>
      <span className="demo-option-text">
        <span className="demo-option-title">{label}</span>
        <span className="demo-option-description">{description}</span>
      </span>
      <span className="demo-option-check" aria-hidden="true">
        {selected ? "Selected" : "Select"}
      </span>
    </button>
  );
}

export function DemoLauncher() {
  const storedSelection = useMemo(() => getStoredDemoSelection(), []);
  const [mode, setMode] = useState<DemoDisplayMode | null>(
    storedSelection.mode ?? null,
  );
  const [role, setRole] = useState<DemoRole | null>(storedSelection.role ?? null);

  const canStart = Boolean(mode && role);

  function handleModeSelect(nextMode: DemoDisplayMode): void {
    setMode(nextMode);
    storeDemoMode(nextMode);
  }

  function handleRoleSelect(nextRole: DemoRole): void {
    setRole(nextRole);
    storeDemoRole(nextRole);
  }

  function handleStart(): void {
    if (!mode || !role) {
      return;
    }

    storeDemoSelection({ mode, role });
    if (role === "student") {
      navigateTo(routePaths.student.home);
      return;
    }

    navigateTo(routePaths.moderator.dashboard);
  }

  return (
    <main className="demo-launcher-shell">
      <section className="demo-launcher" aria-labelledby="demo-launcher-title">
        <div className="demo-launcher-header">
          <p className="demo-launcher-kicker">HCI Prototype Demonstration</p>
          <h1 id="demo-launcher-title">PUP: Campus Creatives</h1>
          <p className="demo-launcher-subtitle">
            Select a display mode and user role for the prototype demonstration.
          </p>
        </div>

        <div className="demo-progress" aria-label="Demo setup progress">
          <span data-complete={mode ? "true" : "false"}>1. Display Mode</span>
          <span data-complete={role ? "true" : "false"}>2. Role</span>
          <span data-complete={canStart ? "true" : "false"}>3. Start Demo</span>
        </div>

        <div className="demo-selection-grid">
          <section className="demo-selection-panel" aria-labelledby="display-mode-title">
            <div className="demo-step-label">Step 1</div>
            <h2 id="display-mode-title">Choose Display Mode</h2>
            <div className="demo-option-list">
              <OptionCard
                description="Full-width interface for desktop demonstration"
                icon={Monitor}
                label="Desktop"
                selected={mode === "desktop"}
                value="desktop"
                onSelect={handleModeSelect}
              />
              <OptionCard
                description="Phone-sized interface displayed inside the browser"
                icon={Smartphone}
                label="Mobile"
                selected={mode === "mobile"}
                value="mobile"
                onSelect={handleModeSelect}
              />
            </div>
          </section>

          <section className="demo-selection-panel" aria-labelledby="role-title">
            <div className="demo-step-label">Step 2</div>
            <h2 id="role-title">Choose Role</h2>
            <div className="demo-option-list">
              <OptionCard
                description="Explore, discover, submit, and manage creative works"
                icon={UserRound}
                label="Student"
                selected={role === "student"}
                value="student"
                onSelect={handleRoleSelect}
              />
              <OptionCard
                description="Review submissions and manage showcase content"
                icon={ShieldCheck}
                label="Moderator"
                selected={role === "moderator"}
                value="moderator"
                onSelect={handleRoleSelect}
              />
            </div>
          </section>
        </div>

        <div className="demo-launcher-actions">
          <button
            type="button"
            className="demo-start-button"
            disabled={!canStart}
            onClick={handleStart}
          >
            Start Demo
          </button>
          <a className="demo-preview-link" href={routePaths.preview.example}>
            Open component preview
          </a>
        </div>
      </section>
    </main>
  );
}
