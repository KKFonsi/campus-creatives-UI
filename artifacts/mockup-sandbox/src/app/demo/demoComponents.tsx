import type { ComponentType } from "react";

import ModeratorDashboardPage from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPage";
import ModeratorDashboardPageMobile from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPageMobile";
import { StudentHomeDesktop } from "../../components/mockups/pup-campus-creatives/StudentHomeDesktop";
import { StudentHomeMobile } from "../../components/mockups/pup-campus-creatives/StudentHomeMobile";
import type { DemoDisplayMode, DemoRole } from "./demoTypes";

export const demoStartComponents = {
  desktop: {
    student: StudentHomeDesktop,
    moderator: ModeratorDashboardPage,
  },
  mobile: {
    student: StudentHomeMobile,
    moderator: ModeratorDashboardPageMobile,
  },
} as const satisfies Record<
  DemoDisplayMode,
  Record<DemoRole, ComponentType>
>;

export function getDemoStartComponent(
  mode: DemoDisplayMode,
  role: DemoRole,
): ComponentType {
  return demoStartComponents[mode][role];
}
