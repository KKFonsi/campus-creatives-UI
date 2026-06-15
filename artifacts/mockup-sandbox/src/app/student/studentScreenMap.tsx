import type { ComponentType } from "react";

import { CampusGalleryPage } from "../../components/mockups/pup-campus-creatives/CampusGalleryPage";
import { CampusGalleryPageMobile } from "../../components/mockups/pup-campus-creatives/CampusGalleryPageMobile";
import { CreatorProfilePage } from "../../components/mockups/pup-campus-creatives/CreatorProfilePage";
import { CreatorProfilePageMobile } from "../../components/mockups/pup-campus-creatives/CreatorProfilePageMobile";
import { EventsPage } from "../../components/mockups/pup-campus-creatives/EventsPage";
import { EventsPageMobile } from "../../components/mockups/pup-campus-creatives/EventsPageMobile";
import { ExplorePage } from "../../components/mockups/pup-campus-creatives/ExplorePage";
import { ExplorePageMobile } from "../../components/mockups/pup-campus-creatives/ExplorePageMobile";
import { NotificationsPage } from "../../components/mockups/pup-campus-creatives/NotificationsPage";
import { SpotlightPage } from "../../components/mockups/pup-campus-creatives/SpotlightPage";
import { SpotlightPageMobile } from "../../components/mockups/pup-campus-creatives/SpotlightPageMobile";
import { StudentHomeDesktop } from "../../components/mockups/pup-campus-creatives/StudentHomeDesktop";
import { StudentHomeMobile } from "../../components/mockups/pup-campus-creatives/StudentHomeMobile";
import SubmitWorkPage from "../../components/mockups/pup-campus-creatives/SubmitWorkPage";
import SubmitWorkPageMobile from "../../components/mockups/pup-campus-creatives/SubmitWorkPageMobile";
import type { DemoDisplayMode } from "../demo";
import type { StudentDestination } from "./studentTypes";

interface StudentScreenDefinition {
  component: ComponentType;
  fallback?: string;
}

type StudentScreenProps = Record<string, unknown>;

export const studentScreenMap = {
  home: {
    desktop: { component: StudentHomeDesktop },
    mobile: { component: StudentHomeMobile },
  },
  explore: {
    desktop: { component: ExplorePage },
    mobile: { component: ExplorePageMobile },
  },
  gallery: {
    desktop: { component: CampusGalleryPage },
    mobile: { component: CampusGalleryPageMobile },
  },
  events: {
    desktop: { component: EventsPage },
    mobile: { component: EventsPageMobile },
  },
  spotlight: {
    desktop: { component: SpotlightPage },
    mobile: { component: SpotlightPageMobile },
  },
  submit: {
    desktop: { component: SubmitWorkPage },
    mobile: { component: SubmitWorkPageMobile },
  },
  notifications: {
    desktop: { component: NotificationsPage },
    mobile: {
      component: NotificationsPage,
      fallback: "Desktop NotificationsPage rendered inside the mobile viewport",
    },
  },
  profile: {
    desktop: { component: CreatorProfilePage },
    mobile: { component: CreatorProfilePageMobile },
  },
} as const satisfies Record<
  StudentDestination,
  Record<DemoDisplayMode, StudentScreenDefinition>
>;

export function getStudentScreen(
  destination: StudentDestination,
  mode: DemoDisplayMode,
  props: StudentScreenProps = {},
): StudentScreenDefinition {
  const screen = studentScreenMap[destination][mode];

  if (Object.keys(props).length === 0) {
    return screen;
  }

  const Component = screen.component as ComponentType<StudentScreenProps>;

  return {
    ...screen,
    component: () => <Component {...props} />,
  };
}
