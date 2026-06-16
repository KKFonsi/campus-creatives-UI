import type { ComponentType } from "react";

import ModeratorDashboardPage from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPage";
import ModeratorDashboardPageMobile from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPageMobile";
import { SuperAdminPage } from "../../components/mockups/pup-campus-creatives/SuperAdminPages";
import { StudentHomeDesktop } from "../../components/mockups/pup-campus-creatives/StudentHomeDesktop";
import { StudentHomeMobile } from "../../components/mockups/pup-campus-creatives/StudentHomeMobile";
import { navigateTo } from "./demoNavigation";
import { routePaths } from "../routes";
import type { DemoDisplayMode, DemoRole } from "./demoTypes";

export const demoStartComponents = {
  desktop: {
    student: StudentHomeDesktop,
    moderator: ModeratorDashboardPage,
    admin: () => (
      <SuperAdminPage
        destination="dashboard"
        mode="desktop"
        onNavigate={(destination) => navigateTo(routePaths.admin[destination])}
      />
    ),
  },
  mobile: {
    student: StudentHomeMobile,
    moderator: ModeratorDashboardPageMobile,
    admin: () => (
      <SuperAdminPage
        destination="dashboard"
        mode="mobile"
        onNavigate={(destination) => navigateTo(routePaths.admin[destination])}
      />
    ),
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
