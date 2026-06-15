import { routePaths } from "../routes";

export const publicRoutePaths = [
  routePaths.public.landing,
  routePaths.public.login,
  routePaths.public.register,
  routePaths.public.identityVerification,
  routePaths.public.onboarding,
  routePaths.public.explore,
] as const;

export type PublicRoutePath = (typeof publicRoutePaths)[number];

export function isPublicRoute(pathname: string): pathname is PublicRoutePath {
  return publicRoutePaths.includes(pathname as PublicRoutePath);
}
