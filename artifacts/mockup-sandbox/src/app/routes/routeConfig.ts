import { routePaths } from "./routePaths";

export type RouteGroup =
  | "public"
  | "demo"
  | "student"
  | "moderator"
  | "admin"
  | "preview";

export interface AppRouteDefinition {
  id: string;
  path: string;
  label: string;
  group: RouteGroup;
}

export const publicRoutes = [
  { id: "public.root", path: routePaths.public.root, label: "Root" },
  { id: "public.landing", path: routePaths.public.landing, label: "Landing" },
  { id: "public.login", path: routePaths.public.login, label: "Login" },
  { id: "public.register", path: routePaths.public.register, label: "Register" },
  {
    id: "public.identityVerification",
    path: routePaths.public.identityVerification,
    label: "Proof of PUP Identity",
  },
  {
    id: "public.onboarding",
    path: routePaths.public.onboarding,
    label: "Student Onboarding",
  },
  {
    id: "public.explore",
    path: routePaths.public.explore,
    label: "Explore as Guest",
  },
  {
    id: "public.workDetail",
    path: routePaths.public.workDetail,
    label: "Public Work Detail",
  },
] as const satisfies ReadonlyArray<Omit<AppRouteDefinition, "group">>;

export const demoRoutes = [
  { id: "demo.root", path: routePaths.demo.root, label: "Demo Launcher" },
  {
    id: "demo.desktopStudent",
    path: routePaths.demo.desktopStudent,
    label: "Desktop Student Demo",
  },
  {
    id: "demo.mobileStudent",
    path: routePaths.demo.mobileStudent,
    label: "Mobile Student Demo",
  },
  {
    id: "demo.desktopModerator",
    path: routePaths.demo.desktopModerator,
    label: "Desktop Moderator Demo",
  },
  {
    id: "demo.mobileModerator",
    path: routePaths.demo.mobileModerator,
    label: "Mobile Moderator Demo",
  },
  {
    id: "demo.desktopAdmin",
    path: routePaths.demo.desktopAdmin,
    label: "Desktop Super Admin Demo",
  },
  {
    id: "demo.mobileAdmin",
    path: routePaths.demo.mobileAdmin,
    label: "Mobile Super Admin Demo",
  },
] as const satisfies ReadonlyArray<Omit<AppRouteDefinition, "group">>;

export const studentRoutes = [
  { id: "student.home", path: routePaths.student.home, label: "Student Home" },
  { id: "student.explore", path: routePaths.student.explore, label: "Explore" },
  { id: "student.gallery", path: routePaths.student.gallery, label: "Gallery" },
  { id: "student.events", path: routePaths.student.events, label: "Events" },
  {
    id: "student.spotlight",
    path: routePaths.student.spotlight,
    label: "Spotlight",
  },
  { id: "student.submit", path: routePaths.student.submit, label: "Submit Work" },
  {
    id: "student.notifications",
    path: routePaths.student.notifications,
    label: "Notifications",
  },
  {
    id: "student.profile",
    path: routePaths.student.profile,
    label: "Creator Profile",
  },
  { id: "student.search", path: routePaths.student.search, label: "Search" },
  {
    id: "student.searchResults",
    path: routePaths.student.searchResults,
    label: "Search Results",
  },
  {
    id: "student.workDetail",
    path: routePaths.student.workDetail,
    label: "Work Detail",
  },
  {
    id: "student.colleges",
    path: routePaths.student.colleges,
    label: "College Directory",
  },
  {
    id: "student.collegeShowcase",
    path: routePaths.student.collegeShowcase,
    label: "College Showcase",
  },
  {
    id: "student.collegeWorkDetail",
    path: routePaths.student.collegeWorkDetail,
    label: "College Work Detail",
  },
  {
    id: "student.creatorProfile",
    path: routePaths.student.creatorProfile,
    label: "Creator Profile Detail",
  },
  {
    id: "student.exhibitionDetail",
    path: routePaths.student.exhibitionDetail,
    label: "Exhibition Detail",
  },
  {
    id: "student.eventDetail",
    path: routePaths.student.eventDetail,
    label: "Event Detail",
  },
  {
    id: "student.eventEntry",
    path: routePaths.student.eventEntry,
    label: "Event Entry Submission",
  },
  {
    id: "student.editProfile",
    path: routePaths.student.editProfile,
    label: "Edit Profile",
  },
  {
    id: "student.portfolio",
    path: routePaths.student.portfolio,
    label: "Portfolio Management",
  },
  {
    id: "student.submissions",
    path: routePaths.student.submissions,
    label: "My Submissions",
  },
  {
    id: "student.submissionDetail",
    path: routePaths.student.submissionDetail,
    label: "Submission Detail",
  },
  {
    id: "student.needsRevision",
    path: routePaths.student.needsRevision,
    label: "Needs Revision",
  },
  {
    id: "student.reviseSubmission",
    path: routePaths.student.reviseSubmission,
    label: "Revise Submission",
  },
  {
    id: "student.savedWorks",
    path: routePaths.student.savedWorks,
    label: "Saved Works",
  },
  {
    id: "student.shareProfile",
    path: routePaths.student.shareProfile,
    label: "Share Profile",
  },
  {
    id: "student.submitBasicInformation",
    path: routePaths.student.submitBasicInformation,
    label: "Submit Basic Information",
  },
  {
    id: "student.submitMedia",
    path: routePaths.student.submitMedia,
    label: "Submit Media",
  },
  {
    id: "student.submitClassification",
    path: routePaths.student.submitClassification,
    label: "Submit Classification",
  },
  {
    id: "student.submitOwnership",
    path: routePaths.student.submitOwnership,
    label: "Submit Ownership and Visibility",
  },
  {
    id: "student.submitReview",
    path: routePaths.student.submitReview,
    label: "Submit Review",
  },
  {
    id: "student.submitConfirmation",
    path: routePaths.student.submitConfirmation,
    label: "Submission Confirmation",
  },
] as const satisfies ReadonlyArray<Omit<AppRouteDefinition, "group">>;

export const moderatorRoutes = [
  {
    id: "moderator.dashboard",
    path: routePaths.moderator.dashboard,
    label: "Moderator Dashboard",
  },
  {
    id: "moderator.pending",
    path: routePaths.moderator.pending,
    label: "Pending Reviews",
  },
  {
    id: "moderator.review",
    path: routePaths.moderator.review,
    label: "Submission Review",
  },
  {
    id: "moderator.reports",
    path: routePaths.moderator.reports,
    label: "Reports",
  },
  {
    id: "moderator.reportDetail",
    path: routePaths.moderator.reportDetail,
    label: "Report Detail",
  },
  {
    id: "moderator.featured",
    path: routePaths.moderator.featured,
    label: "Featured Works",
  },
  {
    id: "moderator.officialContent",
    path: routePaths.moderator.officialContent,
    label: "Official Content Review",
  },
  {
    id: "moderator.officialContentDetail",
    path: routePaths.moderator.officialContentDetail,
    label: "Official Content Detail",
  },
  {
    id: "moderator.history",
    path: routePaths.moderator.history,
    label: "Moderation History",
  },
  {
    id: "moderator.events",
    path: routePaths.moderator.events,
    label: "Event Management",
  },
  {
    id: "moderator.newEvent",
    path: routePaths.moderator.newEvent,
    label: "Add Event",
  },
] as const satisfies ReadonlyArray<Omit<AppRouteDefinition, "group">>;

export const adminRoutes = [
  { id: "admin.dashboard", path: routePaths.admin.dashboard, label: "System Administration" },
  { id: "admin.users", path: routePaths.admin.users, label: "User Management" },
  { id: "admin.userDetail", path: routePaths.admin.userDetail, label: "User Detail" },
  { id: "admin.moderators", path: routePaths.admin.moderators, label: "Moderator Management" },
  { id: "admin.colleges", path: routePaths.admin.colleges, label: "College Management" },
  { id: "admin.categories", path: routePaths.admin.categories, label: "Category Management" },
  { id: "admin.events", path: routePaths.admin.events, label: "Event Management" },
  { id: "admin.newEvent", path: routePaths.admin.newEvent, label: "Create Event" },
  { id: "admin.recognition", path: routePaths.admin.recognition, label: "Recognition and Badges" },
  { id: "admin.analytics", path: routePaths.admin.analytics, label: "Platform Analytics" },
  { id: "admin.activityLog", path: routePaths.admin.activityLog, label: "System Activity Log" },
  { id: "admin.roles", path: routePaths.admin.roles, label: "Role and Permission Overview" },
  { id: "admin.reports", path: routePaths.admin.reports, label: "Reports Oversight" },
  { id: "admin.featured", path: routePaths.admin.featured, label: "Featured Content" },
  { id: "admin.settings", path: routePaths.admin.settings, label: "Settings" },
  { id: "admin.auditLog", path: routePaths.admin.auditLog, label: "Audit Log" },
] as const satisfies ReadonlyArray<Omit<AppRouteDefinition, "group">>;

export const previewRoutes = [
  {
    id: "preview.component",
    path: routePaths.preview.pattern,
    label: "Component Preview",
  },
] as const satisfies ReadonlyArray<Omit<AppRouteDefinition, "group">>;

function withGroup<const T extends ReadonlyArray<Omit<AppRouteDefinition, "group">>>(
  group: RouteGroup,
  routes: T,
): ReadonlyArray<AppRouteDefinition> {
  return routes.map((route) => ({ ...route, group }));
}

export const routeGroups = {
  public: withGroup("public", publicRoutes),
  demo: withGroup("demo", demoRoutes),
  student: withGroup("student", studentRoutes),
  moderator: withGroup("moderator", moderatorRoutes),
  admin: withGroup("admin", adminRoutes),
  preview: withGroup("preview", previewRoutes),
} as const;

export const appRoutes = [
  ...routeGroups.public,
  ...routeGroups.demo,
  ...routeGroups.student,
  ...routeGroups.moderator,
  ...routeGroups.admin,
  ...routeGroups.preview,
] as const;
