import { SuperAdminPage } from "../../components/mockups/pup-campus-creatives/SuperAdminPages";
import { navigateTo, type DemoDisplayMode } from "../demo";
import { adminRoutePaths, type AdminDestination } from "./adminRoutes";

export function getAdminScreen(destination: AdminDestination, mode: DemoDisplayMode) {
  return {
    node: (
      <SuperAdminPage
        destination={destination}
        mode={mode}
        onNavigate={(nextDestination) => navigateTo(adminRoutePaths[nextDestination])}
      />
    ),
  };
}
