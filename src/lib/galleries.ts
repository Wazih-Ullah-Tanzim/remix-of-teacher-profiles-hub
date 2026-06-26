// Shared image collections for gallery sub-pages.
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleries: Record<
  string,
  { title: string; eyebrow: string; description: string; images: { src: string; caption: string }[] }
> = {
  "first-day": {
    title: "First Day at School",
    eyebrow: "Beginnings",
    description: "Smiles, nerves and brand-new uniforms — the magic of every learner's first morning at John Amos.",
    images: [
      { src: u("photo-1503676260728-1c00da094a0b"), caption: "Welcome to John Amos" },
      { src: u("photo-1509062522246-3755977927d7"), caption: "First friendships" },
      { src: u("photo-1577896851231-70ef18881754"), caption: "Classroom day one" },
      { src: u("photo-1588072432836-e10032774350"), caption: "Curious minds, ready to learn" },
      { src: u("photo-1427504494785-3a9ca7044f45"), caption: "A proud morning" },
    ],
  },
  "sirat-un-nabi": {
    title: "Sirat-Un-Nabi (PBUH)",
    eyebrow: "Occasion",
    description: "Our annual Sirat-Un-Nabi gathering — students share the life and teachings of the Prophet (PBUH).",
    images: [
      { src: u("photo-1542816417-0983c9c9ad53"), caption: "Recitation" },
      { src: u("photo-1604881991720-f91add269bed"), caption: "Reflection circle" },
      { src: u("photo-1564769662533-4f00a87b4056"), caption: "Speeches by students" },
      { src: u("photo-1473177104440-ffee2f376098"), caption: "Community gathering" },
    ],
  },
  "pitha-utsob": {
    title: "Pitha Utsob",
    eyebrow: "Occasion",
    description: "Traditional Bangladeshi pithas, music and laughter — a true taste of winter at school.",
    images: [
      { src: u("photo-1565299624946-b28f40a0ae38"), caption: "Pitha stalls" },
      { src: u("photo-1559054663-e8d23213f55c"), caption: "Family flavours" },
      { src: u("photo-1504674900247-0877df9cc836"), caption: "Sweet traditions" },
      { src: u("photo-1414235077428-338989a2e8c0"), caption: "Sharing the table" },
    ],
  },
  "food-party": {
    title: "Food Party",
    eyebrow: "Occasion",
    description: "A joyful celebration of cuisine, culture and community across the John Amos family.",
    images: [
      { src: u("photo-1555939594-58d7cb561ad1"), caption: "Buffet of joy" },
      { src: u("photo-1567620905732-2d1ec7ab7445"), caption: "Sweet treats" },
      { src: u("photo-1414235077428-338989a2e8c0"), caption: "Shared meals" },
      { src: u("photo-1551218808-94e220e084d2"), caption: "Smiles all around" },
    ],
  },
  "music-and-art": {
    title: "Music & Art",
    eyebrow: "Occasion",
    description: "From watercolour to woodwind — every child is invited to express themselves.",
    images: [
      { src: u("photo-1513829596324-4bb2800c5efb"), caption: "Young painters" },
      { src: u("photo-1511379938547-c1f69419868d"), caption: "Music ensemble" },
      { src: u("photo-1499415479124-43c32433a620"), caption: "Stage performance" },
      { src: u("photo-1493612276216-ee3925520721"), caption: "Sketch & shade" },
    ],
  },
  "nobo-borsho": {
    title: "Nobo Borsho",
    eyebrow: "Occasion",
    description: "Pohela Boishakh on campus — colour, song and Bengali heritage celebrated together.",
    images: [
      { src: u("photo-1535905557558-afc4877a26fc"), caption: "Cultural parade" },
      { src: u("photo-1493804714600-6edb1cd93080"), caption: "Traditional dress" },
      { src: u("photo-1528605248644-14dd04022da1"), caption: "Festival joy" },
      { src: u("photo-1542317854-92a8866d2b80"), caption: "Boishakhi dance" },
    ],
  },
  excursion: {
    title: "Excursion",
    eyebrow: "Tour",
    description: "Learning beyond the classroom — museums, nature reserves and historic landmarks.",
    images: [
      { src: u("photo-1503454537195-1dcabb73ffb9"), caption: "Riverside discovery" },
      { src: u("photo-1485470733090-0aae1788d5af"), caption: "Botanical garden visit" },
      { src: u("photo-1551038247-3d9af20df552"), caption: "Heritage tour" },
      { src: u("photo-1500964757637-c85e8a162699"), caption: "Nature trail" },
    ],
  },
  "tour-domestic": {
    title: "Domestic Trip",
    eyebrow: "Tour",
    description: "Exploring the beauty of Bangladesh — Sundarbans, Cox's Bazar, Sylhet tea gardens and beyond.",
    images: [
      { src: u("photo-1528127269322-539801943592"), caption: "Cox's Bazar shoreline" },
      { src: u("photo-1469474968028-56623f02e42e"), caption: "Sylhet tea gardens" },
      { src: u("photo-1501785888041-af3ef285b470"), caption: "Sundarbans expedition" },
      { src: u("photo-1506905925346-21bda4d32df4"), caption: "Hill tracts of Bandarban" },
    ],
  },
  "tour-international": {
    title: "International Trip",
    eyebrow: "Tour",
    description: "Global learning journeys — Malaysia, Thailand, Singapore and cultural exchange programmes.",
    images: [
      { src: u("photo-1508009603885-50cf7c579365"), caption: "Singapore skyline study" },
      { src: u("photo-1528181304800-259b08848526"), caption: "Cultural exchange, Thailand" },
      { src: u("photo-1596422846543-75c6fc197f07"), caption: "Petronas, Malaysia" },
      { src: u("photo-1502602898657-3e91760cbb34"), caption: "Paris heritage walk" },
    ],
  },
};

export type GallerySlug = keyof typeof galleries;

// Categorized menu for the new Gallery dropdown.
export const galleryCategories: { label: string; items: { slug: string; label: string }[] }[] = [
  {
    label: "Tour",
    items: [
      { slug: "tour-domestic", label: "Domestic Trip" },
      { slug: "tour-international", label: "International Trip" },
      { slug: "excursion", label: "Excursion" },
    ],
  },
  {
    label: "Occasion",
    items: [
      { slug: "sirat-un-nabi", label: "Sirat-Un-Nabi (PBUH)" },
      { slug: "pitha-utsob", label: "Pitha Utsob" },
      { slug: "food-party", label: "Food Party" },
      { slug: "music-and-art", label: "Music & Art" },
      { slug: "nobo-borsho", label: "Nobo Borsho" },
    ],
  },
];

// Flat list (used by older index page).
export const galleryMenu: { slug: string; label: string }[] = galleryCategories.flatMap((c) => c.items);
