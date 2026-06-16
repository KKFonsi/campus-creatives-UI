import type { ReactNode } from "react";

import FeaturedWorksPage from "../../components/mockups/pup-campus-creatives/FeaturedWorksPage";
import FeaturedWorksPageMobile from "../../components/mockups/pup-campus-creatives/FeaturedWorksPageMobile";
import ModerationHistoryPage from "../../components/mockups/pup-campus-creatives/ModerationHistoryPage";
import { ModeratorEventFormPage, ModeratorEventsPage } from "../../components/mockups/pup-campus-creatives/ModeratorEventPages";
import {
  ModerationHistoryPageMobile,
  ModeratorEventFormPageMobile,
  ModeratorEventsPageMobile,
  OfficialContentReviewPageMobile,
  ReportDetailPageMobile,
} from "../../components/mockups/pup-campus-creatives/ModeratorMobileUtilityPages";
import ModeratorDashboardPage from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPage";
import ModeratorDashboardPageMobile from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPageMobile";
import OfficialContentReviewPage from "../../components/mockups/pup-campus-creatives/OfficialContentReviewPage";
import PendingReviewsPage from "../../components/mockups/pup-campus-creatives/PendingReviewsPage";
import PendingReviewsPageMobile from "../../components/mockups/pup-campus-creatives/PendingReviewsPageMobile";
import { ReportsDashboardPage } from "../../components/mockups/pup-campus-creatives/ReportsDashboardPage";
import { ReportsDashboardPageMobile } from "../../components/mockups/pup-campus-creatives/ReportsDashboardPageMobile";
import ReportDetailPage from "../../components/mockups/pup-campus-creatives/ReportDetailPage";
import SubmissionReviewPage from "../../components/mockups/pup-campus-creatives/SubmissionReviewPage";
import { SubmissionReviewPageMobile } from "../../components/mockups/pup-campus-creatives/SubmissionReviewPageMobile";
import { navigateTo, type DemoDisplayMode } from "../demo";
import {
  moderatorRoutePaths,
  type ModeratorDestination,
} from "./moderatorRoutes";

interface ModeratorScreenDefinition {
  fallback?: string;
  node: ReactNode;
}

function go(path: string): () => void {
  return () => navigateTo(path);
}

export function getModeratorNavigationProps() {
  return {
    onDashboard: go(moderatorRoutePaths.dashboard),
    onPending: go(moderatorRoutePaths.pending),
    onReview: go(moderatorRoutePaths.review),
    onReports: go(moderatorRoutePaths.reports),
    onReportDetail: go(moderatorRoutePaths.reportDetail),
    onFeatured: go(moderatorRoutePaths.featured),
    onOfficialContent: go(moderatorRoutePaths.officialContent),
    onHistory: go(moderatorRoutePaths.history),
    onEvents: go(moderatorRoutePaths.events),
    onNewEvent: go(moderatorRoutePaths.newEvent),
  };
}

export function getModeratorScreen(
  destination: ModeratorDestination,
  mode: DemoDisplayMode,
): ModeratorScreenDefinition {
  const navigationProps = getModeratorNavigationProps();

  if (destination === "dashboard") {
    const Dashboard =
      mode === "mobile" ? ModeratorDashboardPageMobile : ModeratorDashboardPage;
    return { node: <Dashboard {...navigationProps} /> };
  }

  if (destination === "pending") {
    const Pending = mode === "mobile" ? PendingReviewsPageMobile : PendingReviewsPage;
    return { node: <Pending {...navigationProps} /> };
  }

  if (destination === "review") {
    const Review =
      mode === "mobile" ? SubmissionReviewPageMobile : SubmissionReviewPage;
    return {
      node: (
        <Review
          {...navigationProps}
          onBack={go(moderatorRoutePaths.pending)}
          onDecisionComplete={go(moderatorRoutePaths.pending)}
        />
      ),
    };
  }

  if (destination === "reports") {
    const Reports =
      mode === "mobile" ? ReportsDashboardPageMobile : ReportsDashboardPage;
    return { node: <Reports {...navigationProps} /> };
  }

  if (destination === "reportDetail") {
    const Detail = mode === "mobile" ? ReportDetailPageMobile : ReportDetailPage;
    return { node: <Detail {...navigationProps} /> };
  }

  if (destination === "featured") {
    const Featured =
      mode === "mobile" ? FeaturedWorksPageMobile : FeaturedWorksPage;
    return { node: <Featured {...navigationProps} /> };
  }

  if (destination === "officialContent") {
    if (mode === "mobile") {
      return { node: <OfficialContentReviewPageMobile {...navigationProps} /> };
    }

    return {
      node: <OfficialContentReviewPage {...navigationProps} />,
    };
  }

  if (destination === "history") {
    if (mode === "mobile") {
      return { node: <ModerationHistoryPageMobile {...navigationProps} /> };
    }

    return {
      node: <ModerationHistoryPage {...navigationProps} />,
    };
  }

  if (destination === "events") {
    const Events = mode === "mobile" ? ModeratorEventsPageMobile : ModeratorEventsPage;
    return { node: <Events {...navigationProps} /> };
  }

  if (destination === "newEvent") {
    const EventForm =
      mode === "mobile" ? ModeratorEventFormPageMobile : ModeratorEventFormPage;
    return { node: <EventForm {...navigationProps} /> };
  }

  return {
    node: <ModeratorDashboardPage {...navigationProps} />,
  };
}
