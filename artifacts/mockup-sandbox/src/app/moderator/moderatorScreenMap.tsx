import type { ReactNode } from "react";

import FeaturedWorksPage from "../../components/mockups/pup-campus-creatives/FeaturedWorksPage";
import FeaturedWorksPageMobile from "../../components/mockups/pup-campus-creatives/FeaturedWorksPageMobile";
import ModerationHistoryPage from "../../components/mockups/pup-campus-creatives/ModerationHistoryPage";
import ModeratorDashboardPage from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPage";
import ModeratorDashboardPageMobile from "../../components/mockups/pup-campus-creatives/ModeratorDashboardPageMobile";
import OfficialContentReviewPage from "../../components/mockups/pup-campus-creatives/OfficialContentReviewPage";
import PendingReviewsPage from "../../components/mockups/pup-campus-creatives/PendingReviewsPage";
import PendingReviewsPageMobile from "../../components/mockups/pup-campus-creatives/PendingReviewsPageMobile";
import { ReportsDashboardPage } from "../../components/mockups/pup-campus-creatives/ReportsDashboardPage";
import { ReportsDashboardPageMobile } from "../../components/mockups/pup-campus-creatives/ReportsDashboardPageMobile";
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
    onFeatured: go(moderatorRoutePaths.featured),
    onOfficialContent: go(moderatorRoutePaths.officialContent),
    onHistory: go(moderatorRoutePaths.history),
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

  if (destination === "featured") {
    const Featured =
      mode === "mobile" ? FeaturedWorksPageMobile : FeaturedWorksPage;
    return { node: <Featured {...navigationProps} /> };
  }

  if (destination === "officialContent") {
    return {
      fallback:
        mode === "mobile"
          ? "Desktop OfficialContentReviewPage rendered inside the mobile viewport"
          : undefined,
      node: <OfficialContentReviewPage {...navigationProps} />,
    };
  }

  return {
    fallback:
      mode === "mobile"
        ? "Desktop ModerationHistoryPage rendered inside the mobile viewport"
        : undefined,
    node: <ModerationHistoryPage {...navigationProps} />,
  };
}
