import type { ReactNode } from "react";

import { CreatorProfilePage } from "../../../components/mockups/pup-campus-creatives/CreatorProfilePage";
import { CreatorProfilePageMobile } from "../../../components/mockups/pup-campus-creatives/CreatorProfilePageMobile";
import { EditProfilePage } from "../../../components/mockups/pup-campus-creatives/EditProfilePage";
import { EditProfilePageMobile } from "../../../components/mockups/pup-campus-creatives/EditProfilePageMobile";
import MySubmissionsPage from "../../../components/mockups/pup-campus-creatives/MySubmissionsPage";
import MySubmissionsPageMobile from "../../../components/mockups/pup-campus-creatives/MySubmissionsPageMobile";
import { NeedsRevisionPage } from "../../../components/mockups/pup-campus-creatives/NeedsRevisionPage";
import {
  NeedsRevisionPageMobile,
  ReviseSubmissionPageMobile,
  SubmissionConfirmationPageMobile,
  SubmissionDetailPageMobile,
} from "../../../components/mockups/pup-campus-creatives/MobileSubmissionStatusPages";
import PortfolioManagementPage from "../../../components/mockups/pup-campus-creatives/PortfolioManagementPage";
import PortfolioManagementPageMobile from "../../../components/mockups/pup-campus-creatives/PortfolioManagementPageMobile";
import { ReviseSubmissionPage } from "../../../components/mockups/pup-campus-creatives/ReviseSubmissionPage";
import { SavedWorksPage } from "../../../components/mockups/pup-campus-creatives/SavedWorksPage";
import { SavedWorksPageMobile } from "../../../components/mockups/pup-campus-creatives/SavedWorksPageMobile";
import { SubmissionDetailPage } from "../../../components/mockups/pup-campus-creatives/SubmissionDetailPage";
import SubmissionConfirmationPage from "../../../components/mockups/pup-campus-creatives/SubmissionConfirmationPage";
import { navigateTo, type DemoDisplayMode } from "../../demo";
import { studentDiscoveryRoutes } from "../discovery";
import { creatorSpaceRoutes, type CreatorSpaceRoute } from "./creatorRoutes";

interface CreatorScreenDefinition {
  fallback?: string;
  node: ReactNode;
}

function go(path: string): () => void {
  return () => navigateTo(path);
}

export function getCreatorSpaceScreen(
  route: CreatorSpaceRoute,
  mode: DemoDisplayMode,
): CreatorScreenDefinition {
  if (route === "editProfile") {
    const EditProfile = mode === "mobile" ? EditProfilePageMobile : EditProfilePage;
    return {
      node: (
        <EditProfile
          onBack={go(creatorSpaceRoutes.profile)}
          onDone={go(creatorSpaceRoutes.profile)}
        />
      ),
    };
  }

  if (route === "portfolio") {
    const Portfolio =
      mode === "mobile" ? PortfolioManagementPageMobile : PortfolioManagementPage;
    return {
      node: (
        <PortfolioFrame mode={mode} onBack={go(creatorSpaceRoutes.profile)}>
          <Portfolio />
        </PortfolioFrame>
      ),
    };
  }

  if (route === "savedWorks") {
    const SavedWorks = mode === "mobile" ? SavedWorksPageMobile : SavedWorksPage;
    return {
      node: (
        <SavedWorks
          onBack={go(creatorSpaceRoutes.profile)}
          onWorkDetail={go(studentDiscoveryRoutes.work)}
        />
      ),
    };
  }

  if (route === "shareProfile") {
    const Profile = mode === "mobile" ? CreatorProfilePageMobile : CreatorProfilePage;
    return {
      node: (
        <Profile
          initialShareOpen
          onEditProfile={go(creatorSpaceRoutes.editProfile)}
          onPortfolio={go(creatorSpaceRoutes.portfolio)}
          onSubmissions={go(creatorSpaceRoutes.submissions)}
          onSavedWorks={go(creatorSpaceRoutes.savedWorks)}
          onCloseShare={go(creatorSpaceRoutes.profile)}
        />
      ),
    };
  }

  if (route === "submissions") {
    const Submissions =
      mode === "mobile" ? MySubmissionsPageMobile : MySubmissionsPage;
    return {
      node: (
        <Submissions
          onBack={go(creatorSpaceRoutes.profile)}
          onNewSubmission={go(creatorSpaceRoutes.submitWork)}
          onSubmissionDetail={go(creatorSpaceRoutes.submissionDetail)}
          onNeedsRevision={go(creatorSpaceRoutes.needsRevision)}
        />
      ),
    };
  }

  if (route === "submissionDetail") {
    if (mode === "mobile") {
      return {
        node: (
          <SubmissionDetailPageMobile
            onBack={go(creatorSpaceRoutes.submissions)}
          />
        ),
      };
    }

    return {
      node: (
        <SubmissionDetailPage
          onBack={go(creatorSpaceRoutes.submissions)}
        />
      ),
    };
  }

  if (route === "needsRevision") {
    if (mode === "mobile") {
      return {
        node: (
          <NeedsRevisionPageMobile
            onBack={go(creatorSpaceRoutes.submissions)}
            onRevise={go(creatorSpaceRoutes.reviseSubmission)}
          />
        ),
      };
    }

    return {
      node: (
        <NeedsRevisionPage
          onBack={go(creatorSpaceRoutes.submissions)}
          onRevise={go(creatorSpaceRoutes.reviseSubmission)}
        />
      ),
    };
  }

  if (route === "reviseSubmission") {
    if (mode === "mobile") {
      return {
        node: (
          <ReviseSubmissionPageMobile
            onBack={go(creatorSpaceRoutes.needsRevision)}
            onDone={go(creatorSpaceRoutes.submissions)}
          />
        ),
      };
    }

    return {
      node: (
        <ReviseSubmissionPage
          onBack={go(creatorSpaceRoutes.needsRevision)}
          onDone={go(creatorSpaceRoutes.submissions)}
        />
      ),
    };
  }

  if (mode === "mobile") {
    return {
      node: (
        <SubmissionConfirmationPageMobile
          onMySubmissions={go(creatorSpaceRoutes.submissions)}
        />
      ),
    };
  }

  return {
    node: (
      <SubmissionConfirmationPage
        onMySubmissions={go(creatorSpaceRoutes.submissions)}
      />
    ),
  };
}

export function getCreatorPrimaryProps() {
  return {
    onEditProfile: go(creatorSpaceRoutes.editProfile),
    onPortfolio: go(creatorSpaceRoutes.portfolio),
    onSubmissions: go(creatorSpaceRoutes.submissions),
    onSavedWorks: go(creatorSpaceRoutes.savedWorks),
    onShareProfile: go(creatorSpaceRoutes.shareProfile),
  };
}

export function getSubmitWorkProps() {
  return {
    onSubmitted: go(creatorSpaceRoutes.submitConfirmation),
  };
}

function PortfolioFrame({
  children,
  mode,
  onBack,
}: {
  children: ReactNode;
  mode: DemoDisplayMode;
  onBack: () => void;
}) {
  return (
    <div className={mode === "mobile" ? "w-[390px]" : ""}>
      <button
        type="button"
        onClick={onBack}
        className="mx-6 mt-6 text-pup-maroon font-bold hover:underline"
      >
        Back to Creator Profile
      </button>
      {children}
    </div>
  );
}
