import { SuperAdminPage } from "../../components/mockups/pup-campus-creatives/SuperAdminPages";
import { navigateTo, type DemoDisplayMode } from "../demo";
import { adminRoutePaths, type AdminDestination } from "./adminRoutes";

function navigateAdmin(destination: AdminDestination): void {
  navigateTo(adminRoutePaths[destination]);
}

function compactAdmin(destination: AdminDestination, mode: DemoDisplayMode) {
  return (
    <SuperAdminPage
      destination={destination}
      mode={mode}
      onNavigate={navigateAdmin}
    />
  );
}

export function getAdminScreen(destination: AdminDestination, mode: DemoDisplayMode) {
  return {
    node: compactAdmin(destination, mode),
  };
}
