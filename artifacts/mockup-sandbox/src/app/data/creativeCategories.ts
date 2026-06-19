export const CREATIVE_CATEGORIES = [
  { id: "visual-art", label: "Visual Art" },
  { id: "digital-art", label: "Digital Art" },
  { id: "photography", label: "Photography" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "music", label: "Music" },
  { id: "film-and-video", label: "Film and Video" },
  { id: "animation", label: "Animation" },
  { id: "spoken-word", label: "Spoken Word" },
  { id: "writing-and-poetry", label: "Writing and Poetry" },
  { id: "dance", label: "Dance" },
  { id: "theater-and-performance", label: "Theater and Performance" },
  { id: "crafts", label: "Crafts" },
  { id: "fashion-and-cosplay", label: "Fashion and Cosplay" },
  { id: "ui-ux-and-multimedia", label: "UI/UX and Multimedia" },
] as const;

export type CreativeCategory = (typeof CREATIVE_CATEGORIES)[number];
export type CreativeCategoryId = CreativeCategory["id"];
export type CreativeCategoryLabel = CreativeCategory["label"];

export const CREATIVE_CATEGORY_LABELS = CREATIVE_CATEGORIES.map(
  (category) => category.label,
);

export const PUP_LIKHA_ALLOWED_CATEGORY_IDS: CreativeCategoryId[] = [
  "visual-art",
  "digital-art",
  "photography",
  "graphic-design",
  "music",
  "film-and-video",
  "animation",
  "spoken-word",
  "writing-and-poetry",
  "dance",
  "theater-and-performance",
  "ui-ux-and-multimedia",
];

export const PUP_LIKHA_ALLOWED_CATEGORY_LABELS =
  PUP_LIKHA_ALLOWED_CATEGORY_IDS.map(
    (id) =>
      CREATIVE_CATEGORIES.find((category) => category.id === id)?.label ??
      "Visual Art",
  );

const CREATIVE_CATEGORY_ALIASES: Record<string, CreativeCategoryLabel> = {
  Design: "Graphic Design",
  Film: "Film and Video",
  "Film/Video": "Film and Video",
  "Film & Video": "Film and Video",
  Illustration: "Visual Art",
  Multimedia: "UI/UX and Multimedia",
  Performance: "Theater and Performance",
  "Performing Arts": "Theater and Performance",
  Poetry: "Writing and Poetry",
  "Traditional Art": "Visual Art",
  "UI/UX": "UI/UX and Multimedia",
  "UI/UX Design": "UI/UX and Multimedia",
  "UI/UX Works": "UI/UX and Multimedia",
  "UI/UX+Multimedia": "UI/UX and Multimedia",
};

export function normalizeCreativeCategory(label: string): CreativeCategoryLabel {
  const directMatch = CREATIVE_CATEGORY_LABELS.find(
    (categoryLabel) => categoryLabel === label,
  );

  return directMatch ?? CREATIVE_CATEGORY_ALIASES[label] ?? "Visual Art";
}
