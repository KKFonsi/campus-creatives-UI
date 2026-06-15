export const sampleSubmissionIds = {
  pending: "sample-submission",
  needsRevision: "needs-revision",
} as const;

export const creatorSpaceRoutes = {
  profile: "/student/profile",
  editProfile: "/student/profile/edit",
  portfolio: "/student/profile/portfolio",
  savedWorks: "/student/profile/saved",
  shareProfile: "/student/profile/share",
  submissions: "/student/submissions",
  submissionDetail: `/student/submissions/${sampleSubmissionIds.pending}`,
  needsRevision: `/student/submissions/${sampleSubmissionIds.pending}/revision`,
  reviseSubmission: `/student/submissions/${sampleSubmissionIds.pending}/revise`,
  submitWork: "/student/submit",
  submitConfirmation: "/student/submit/confirmation",
} as const;

export type CreatorSpaceRoute =
  | "editProfile"
  | "portfolio"
  | "savedWorks"
  | "shareProfile"
  | "submissions"
  | "submissionDetail"
  | "needsRevision"
  | "reviseSubmission"
  | "submitConfirmation";

export function getCreatorSpaceRoute(pathname: string): CreatorSpaceRoute | null {
  if (pathname === creatorSpaceRoutes.editProfile) {
    return "editProfile";
  }

  if (pathname === creatorSpaceRoutes.portfolio) {
    return "portfolio";
  }

  if (pathname === creatorSpaceRoutes.savedWorks) {
    return "savedWorks";
  }

  if (pathname === creatorSpaceRoutes.shareProfile) {
    return "shareProfile";
  }

  if (pathname === creatorSpaceRoutes.submissions) {
    return "submissions";
  }

  if (pathname === creatorSpaceRoutes.submitConfirmation) {
    return "submitConfirmation";
  }

  if (/^\/student\/submissions\/[^/]+\/revision$/.test(pathname)) {
    return "needsRevision";
  }

  if (/^\/student\/submissions\/[^/]+\/revise$/.test(pathname)) {
    return "reviseSubmission";
  }

  if (/^\/student\/submissions\/[^/]+$/.test(pathname)) {
    return "submissionDetail";
  }

  return null;
}
