const mockupImageBase = "/__mockup/images";

export const demoAssets = {
  campus: {
    hero: `${mockupImageBase}/hero-collage.jpg`,
    mainBuilding: `${mockupImageBase}/event_1.jpg`,
    pylon: `${mockupImageBase}/event_2.jpg`,
    mainBuildingWide: `${mockupImageBase}/event_3.jpg`,
  },
  works: {
    spoliariumStudy: `${mockupImageBase}/thumbnail_1.jpg`,
    pupPylonPlaceholder: `${mockupImageBase}/thumbnail_2.jpg`,
    unaBulaquena: `${mockupImageBase}/thumbnail_3.jpg`,
    pupMainBuildingPlaceholder: `${mockupImageBase}/thumbnail_4.jpg`,
  },
  events: {
    campusShowcase: `${mockupImageBase}/event_1.jpg`,
    pylonDeadline: `${mockupImageBase}/event_2.jpg`,
    officialAnnouncement: `${mockupImageBase}/event_3.jpg`,
  },
  colleges: {
    caf: `${mockupImageBase}/colleges/caf-pup-main-building.jpg`,
    cadbe: `${mockupImageBase}/colleges/cadbe-pup-campus-landmark.jpg`,
    cal: `${mockupImageBase}/colleges/cal-pup-campus-artwork.jpg`,
    cba: `${mockupImageBase}/colleges/cba-pup-campus-plaza.jpg`,
    coc: `${mockupImageBase}/colleges/coc-pup-ndc-campus.jpg`,
    ccis: `${mockupImageBase}/colleges/ccis-pup-main-building.jpg`,
    coed: `${mockupImageBase}/colleges/coed-pup-campus-learning.jpg`,
    ce: `${mockupImageBase}/colleges/ce-pup-engineering-campus.jpg`,
    chk: `${mockupImageBase}/colleges/chk-pup-campus-life.jpg`,
    cl: `${mockupImageBase}/colleges/cl-pup-law-campus.jpg`,
    cpspa: `${mockupImageBase}/colleges/cpspa-pup-public-service.jpg`,
    cs: `${mockupImageBase}/colleges/cs-pup-science-campus.jpg`,
    cssd: `${mockupImageBase}/colleges/cssd-pup-community-campus.jpg`,
    cthtm: `${mockupImageBase}/colleges/cthtm-pup-hasmin-campus.jpg`,
    itech: `${mockupImageBase}/colleges/itech-pup-technology-campus.jpg`,
    gs: `${mockupImageBase}/colleges/gs-pup-graduate-school.jpg`,
  },
  fallback: {
    generic: `${mockupImageBase}/fallback-campus-creatives.svg`,
  },
} as const;

export type DemoAssets = typeof demoAssets;
