import type { ReactNode } from "react";

import type { DemoDisplayMode } from "./demoTypes";

interface DemoViewportProps {
  children: ReactNode;
  mode: DemoDisplayMode;
}

export function DemoViewport({ children, mode }: DemoViewportProps) {
  if (mode === "desktop") {
    return <main className="demo-viewport demo-viewport--desktop">{children}</main>;
  }

  return (
    <main className="demo-viewport demo-viewport--mobile" aria-label="Mobile demo viewport">
      <div className="demo-phone-frame">
        <div className="demo-phone-speaker" aria-hidden="true" />
        <div className="demo-phone-screen">{children}</div>
      </div>
    </main>
  );
}
