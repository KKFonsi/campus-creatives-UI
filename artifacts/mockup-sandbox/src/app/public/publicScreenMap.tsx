import { LandingDesktop } from "../../components/mockups/pup-campus-creatives/LandingDesktop";
import { LandingMobile } from "../../components/mockups/pup-campus-creatives/LandingMobile";
import { LoginPage } from "../../components/mockups/pup-campus-creatives/LoginPage";
import { OnboardingPage } from "../../components/mockups/pup-campus-creatives/OnboardingPage";
import { SignUpPage } from "../../components/mockups/pup-campus-creatives/SignUpPage";
import { IdentityVerificationPage } from "../../components/mockups/pup-campus-creatives/IdentityVerificationPage";
import { ExplorePage } from "../../components/mockups/pup-campus-creatives/ExplorePage";
import { ExplorePageMobile } from "../../components/mockups/pup-campus-creatives/ExplorePageMobile";
import { navigateTo } from "../demo";
import { routePaths } from "../routes";
import type { DemoDisplayMode } from "../demo/demoTypes";
import { completeMockStudentAuth } from "./publicSession";

function enterStudentHome(): void {
  completeMockStudentAuth();
  navigateTo(routePaths.student.home);
}

export function getPublicScreen(pathname: string, mode: DemoDisplayMode) {
  if (pathname === routePaths.public.landing) {
    const Landing = mode === "mobile" ? LandingMobile : LandingDesktop;

    return (
      <Landing
        onLogin={() => navigateTo(routePaths.public.login)}
        onRegister={() => navigateTo(routePaths.public.register)}
        onExplore={() => navigateTo(routePaths.public.explore)}
      />
    );
  }

  if (pathname === routePaths.public.login) {
    return (
      <LoginPage
        onLoginSuccess={enterStudentHome}
        onRegister={() => navigateTo(routePaths.public.register)}
      />
    );
  }

  if (pathname === routePaths.public.register) {
    return (
      <SignUpPage
        onRegisterSuccess={() => navigateTo(routePaths.public.identityVerification)}
        onLogin={() => navigateTo(routePaths.public.login)}
      />
    );
  }

  if (pathname === routePaths.public.identityVerification) {
    return (
      <IdentityVerificationPage
        onBack={() => navigateTo(routePaths.public.register)}
        onContinue={() => navigateTo(routePaths.public.onboarding)}
      />
    );
  }

  if (pathname === routePaths.public.onboarding) {
    return (
      <OnboardingPage
        onComplete={enterStudentHome}
        onBackToRegister={() => navigateTo(routePaths.public.register)}
      />
    );
  }

  if (pathname === routePaths.public.explore) {
    return mode === "mobile" ? (
      <ExplorePageMobile guest />
    ) : (
      <ExplorePage guest />
    );
  }

  return null;
}
