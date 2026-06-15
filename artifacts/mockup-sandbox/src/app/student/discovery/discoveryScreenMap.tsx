import type { ReactNode } from "react";

import { CollegeDirectoryPage } from "../../../components/mockups/pup-campus-creatives/CollegeDirectoryPage";
import { CollegeDirectoryPageMobile } from "../../../components/mockups/pup-campus-creatives/CollegeDirectoryPageMobile";
import { CollegeShowcasePage } from "../../../components/mockups/pup-campus-creatives/CollegeShowcasePage";
import { CollegeShowcasePageMobile } from "../../../components/mockups/pup-campus-creatives/CollegeShowcasePageMobile";
import { CreatorProfilePage } from "../../../components/mockups/pup-campus-creatives/CreatorProfilePage";
import { CreatorProfilePageMobile } from "../../../components/mockups/pup-campus-creatives/CreatorProfilePageMobile";
import { EventDetailPage } from "../../../components/mockups/pup-campus-creatives/EventDetailPage";
import { EventDetailPageMobile } from "../../../components/mockups/pup-campus-creatives/EventDetailPageMobile";
import { EventEntryPage } from "../../../components/mockups/pup-campus-creatives/EventEntryPage";
import { ExhibitionDetailPage } from "../../../components/mockups/pup-campus-creatives/ExhibitionDetailPage";
import { ExhibitionDetailPageMobile } from "../../../components/mockups/pup-campus-creatives/ExhibitionDetailPageMobile";
import { SearchPage, SearchPageMobile } from "../../../components/mockups/pup-campus-creatives/SearchPage";
import { WorkDetailPage } from "../../../components/mockups/pup-campus-creatives/WorkDetailPage";
import { WorkDetailPageMobile } from "../../../components/mockups/pup-campus-creatives/WorkDetailPageMobile";
import { navigateTo, type DemoDisplayMode } from "../../demo";
import { routePaths } from "../../routes";
import { studentDiscoveryRoutes, type StudentSecondaryRoute } from "./discoveryRoutes";

interface DiscoveryScreenDefinition {
  fallback?: string;
  node: ReactNode;
}

function go(path: string): () => void {
  return () => navigateTo(path);
}

export function getDiscoveryScreen(
  route: StudentSecondaryRoute,
  mode: DemoDisplayMode,
): DiscoveryScreenDefinition {
  const common = {
    onBackToExplore: go(routePaths.student.explore),
    onWorkDetail: go(studentDiscoveryRoutes.work),
    onCollegeDirectory: go(studentDiscoveryRoutes.colleges),
    onCollegeShowcase: go(studentDiscoveryRoutes.college),
    onCreatorProfile: go(studentDiscoveryRoutes.creator),
    onSearchResults: go(studentDiscoveryRoutes.searchResults),
  };

  if (route === "search" || route === "searchResults") {
    const Search = mode === "mobile" ? SearchPageMobile : SearchPage;
    return {
      node: (
        <Search
          onBack={go(routePaths.student.explore)}
          onResult={go(studentDiscoveryRoutes.work)}
          onSeeAll={go(studentDiscoveryRoutes.searchResults)}
          onCollege={go(studentDiscoveryRoutes.college)}
          onCreator={go(studentDiscoveryRoutes.creator)}
        />
      ),
    };
  }

  if (route === "work" || route === "collegeWork") {
    const Work = mode === "mobile" ? WorkDetailPageMobile : WorkDetailPage;
    return {
      node: (
        <Work
          onBack={go(routePaths.student.explore)}
          onCreatorProfile={go(studentDiscoveryRoutes.creator)}
        />
      ),
    };
  }

  if (route === "colleges") {
    const Directory =
      mode === "mobile" ? CollegeDirectoryPageMobile : CollegeDirectoryPage;
    return {
      node: <Directory onCollege={go(studentDiscoveryRoutes.college)} />,
    };
  }

  if (route === "college") {
    const Showcase =
      mode === "mobile" ? CollegeShowcasePageMobile : CollegeShowcasePage;
    return {
      node: (
        <Showcase
          onBack={go(studentDiscoveryRoutes.colleges)}
          onWorkDetail={go(studentDiscoveryRoutes.collegeWork)}
          onCreatorProfile={go(studentDiscoveryRoutes.creator)}
        />
      ),
    };
  }

  if (route === "creator") {
    const Creator =
      mode === "mobile" ? CreatorProfilePageMobile : CreatorProfilePage;
    return {
      node: <Creator onBack={go(routePaths.student.explore)} />,
    };
  }

  if (route === "exhibition") {
    const Exhibition =
      mode === "mobile" ? ExhibitionDetailPageMobile : ExhibitionDetailPage;
    return {
      node: (
        <Exhibition
          onBack={go(routePaths.student.gallery)}
          onWorkDetail={go(studentDiscoveryRoutes.work)}
          onCreatorProfile={go(studentDiscoveryRoutes.creator)}
        />
      ),
    };
  }

  if (route === "event") {
    const EventDetail =
      mode === "mobile" ? EventDetailPageMobile : EventDetailPage;
    return {
      node: (
        <EventDetail
          onBack={go(routePaths.student.events)}
          onSubmitEntry={go(studentDiscoveryRoutes.eventEntry)}
          onWorkDetail={go(studentDiscoveryRoutes.work)}
        />
      ),
    };
  }

  return {
    fallback: "Desktop EventEntryPage rendered inside the mobile viewport",
    node: <EventEntryPage onBack={go(studentDiscoveryRoutes.event)} />,
  };
}

export function getPrimaryNavigationProps(pathname: string) {
  if (pathname === routePaths.student.explore) {
    return commonExploreProps();
  }

  if (pathname === routePaths.student.gallery) {
    return {
      onExhibitionDetail: go(studentDiscoveryRoutes.exhibition),
      onWorkDetail: go(studentDiscoveryRoutes.work),
      onCollegeShowcase: go(studentDiscoveryRoutes.college),
    };
  }

  if (pathname === routePaths.student.events) {
    return {
      onEventDetail: go(studentDiscoveryRoutes.event),
    };
  }

  if (pathname === routePaths.student.spotlight) {
    return {
      onFullProject: go(studentDiscoveryRoutes.work),
    };
  }

  return {};
}

function commonExploreProps() {
  return {
    onSearch: go(routePaths.student.search),
    onSearchResults: go(studentDiscoveryRoutes.searchResults),
    onWorkDetail: go(studentDiscoveryRoutes.work),
    onCollegeDirectory: go(studentDiscoveryRoutes.colleges),
    onCollegeShowcase: go(studentDiscoveryRoutes.college),
    onCreatorProfile: go(studentDiscoveryRoutes.creator),
  };
}
