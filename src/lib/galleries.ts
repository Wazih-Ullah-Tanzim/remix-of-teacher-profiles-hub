// Shared image collections for gallery sub-pages.
import artCompetitionGroupAsset from "@/assets/art-competition-group.jpeg.asset.json";
import artClassAsset from "@/assets/art-class-2.jpeg.asset.json";
import artPosterAsset from "@/assets/art-poster-design.jpeg.asset.json";
import artFirstPrizeAsset from "@/assets/art-first-prize.jpeg.asset.json";
import victoryPerformanceAsset from "@/assets/victory-day-performance.jpg.asset.json";
import victoryAwardAsset from "@/assets/victory-day-award.jpg.asset.json";
import victoryGroupAsset from "@/assets/victory-day-group.jpg.asset.json";
import victoryArtworkAsset from "@/assets/victory-day-artwork.jpg.asset.json";
import victorySecondPrizeAsset from "@/assets/victory-day-second-prize.jpg.asset.json";

const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleries: Record<
  string,
  { title: string; eyebrow: string; description: string; images: { src: string; caption: string }[] }
> = {
  excursion: {
    title: "Domestic Excursion",
    eyebrow: "Domestic Trip",
    description: "Learning beyond the classroom — museums, nature reserves and historic landmarks around Bangladesh.",
    images: [
      { src: u("photo-1503454537195-1dcabb73ffb9"), caption: "Riverside discovery" },
      { src: u("photo-1485470733090-0aae1788d5af"), caption: "Botanical garden visit" },
      { src: u("photo-1551038247-3d9af20df552"), caption: "Heritage tour" },
      { src: u("photo-1500964757637-c85e8a162699"), caption: "Nature trail" },
    ],
  },
  "international-excursion": {
    title: "China Study Tour",
    eyebrow: "International Trip",
    description: "Our flagship international journey — cultural exchange, universities and city study tours in China.",
    images: [
      { src: u("photo-1508009603885-50cf7c579365"), caption: "Shanghai skyline" },
      { src: u("photo-1547981609-4b6bfe67ca0b"), caption: "Great Wall walk" },
      { src: u("photo-1513415564515-763d91423bdd"), caption: "Beijing heritage" },
      { src: u("photo-1502602898657-3e91760cbb34"), caption: "Cultural exchange" },
    ],
  },
  "sports-day": {
    title: "Sports Day",
    eyebrow: "Occasion",
    description: "Track, field and team spirit — our annual sports day brings the whole school together.",
    images: [
      { src: u("photo-1517649763962-0c623066013b"), caption: "Track events" },
      { src: u("photo-1521412644187-c49fa049e84d"), caption: "Team spirit" },
      { src: u("photo-1526506118085-60ce8714f8c5"), caption: "Field games" },
      { src: u("photo-1518972559570-7cc1309f3229"), caption: "Award ceremony" },
    ],
  },
  "cultural-program": {
    title: "Cultural Program",
    eyebrow: "Occasion",
    description: "Music, dance and drama — students showcase talent and celebrate heritage on the school stage.",
    images: [
      { src: u("photo-1511379938547-c1f69419868d"), caption: "Music ensemble" },
      { src: u("photo-1499415479124-43c32433a620"), caption: "Stage performance" },
      { src: u("photo-1493612276216-ee3925520721"), caption: "Dance recital" },
      { src: u("photo-1513829596324-4bb2800c5efb"), caption: "Drama night" },
    ],
  },

  "pohela-boishakh": {
    title: "Pohela Boishakh",
    eyebrow: "Occasion",
    description: "Bangla New Year on campus — colour, song and Bengali heritage celebrated together.",
    images: [
      { src: u("photo-1535905557558-afc4877a26fc"), caption: "Cultural parade" },
      { src: u("photo-1493804714600-6edb1cd93080"), caption: "Traditional dress" },
      { src: u("photo-1528605248644-14dd04022da1"), caption: "Festival joy" },
      { src: u("photo-1542317854-92a8866d2b80"), caption: "Boishakhi dance" },
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
  "art-exhibition": {
    title: "Art Exhebetion",
    eyebrow: "Occasion",
    description: "A colourful celebration of imagination, craftsmanship and student expression.",
    images: [
      { src: artCompetitionGroupAsset.url, caption: "Drawing competition participants" },
      { src: artClassAsset.url, caption: "Students creating their artwork" },
      { src: artPosterAsset.url, caption: "Poster design competition" },
      { src: artFirstPrizeAsset.url, caption: "First prize artwork" },
    ],
  },
  "victory-day": {
    title: "Victory Day",
    eyebrow: "Occasion",
    description: "A proud celebration of Bangladesh's Victory Day, honouring student talent, achievement and national spirit.",
    images: [
      { src: victoryPerformanceAsset.url, caption: "Victory Day student performance" },
      { src: victoryAwardAsset.url, caption: "Award presentation" },
      { src: victoryGroupAsset.url, caption: "Victory Day celebration" },
      { src: victoryArtworkAsset.url, caption: "Students at the art activity" },
      { src: victorySecondPrizeAsset.url, caption: "Second prize presentation" },
    ],
  },
  "class-party": {
    title: "Class Party",
    eyebrow: "School Life",
    description: "Shared treats, laughter and memorable moments with classmates and teachers.",
    images: [
      { src: u("photo-1529156069898-49953e39b3ac"), caption: "Celebration together" },
      { src: u("photo-1519167758481-83f550bb49b3"), caption: "Classroom smiles" },
      { src: u("photo-1511632765486-a01980e01a18"), caption: "Party games" },
      { src: u("photo-1527529482837-4698179dc6ce"), caption: "Happy memories" },
    ],
  },
  "parents-meeting": {
    title: "Parents Meeting",
    eyebrow: "School Community",
    description: "Meaningful conversations and strong partnerships between families and school.",
    images: [
      { src: u("photo-1516321318423-f06f85e504b3"), caption: "Parent consultation" },
      { src: u("photo-1523240795612-9a054b0db644"), caption: "Learning together" },
      { src: u("photo-1509062522246-3755977927d7"), caption: "School discussion" },
      { src: u("photo-1531482615713-2afd69097998"), caption: "Community partnership" },
    ],
  },
};

export type GallerySlug = keyof typeof galleries;

export type GalleryNode = { slug: string; label: string; description?: string; children?: GalleryNode[] };

export const galleryTree: GalleryNode[] = [
  { slug: "victory-day", label: "Victory Day", description: "A proud celebration of Bangladesh's Victory Day." },
  { slug: "art-exhibition", label: "Art Exhebetion", description: "Student creativity on display." },
  { slug: "food-party", label: "Food Party", description: "A joyful celebration of food and friendship." },
  { slug: "class-party", label: "Class Party", description: "Celebrations shared with classmates." },
  { slug: "sirat-un-nabi", label: "Sirat-Un-Nabi", description: "A reflective school gathering." },
  { slug: "parents-meeting", label: "Parents Meeting", description: "Family and school working together." },
  { slug: "excursion", label: "Excursion Program", description: "Learning beyond the classroom." },
];

export const galleryMenu: { slug: string; label: string }[] = [
  ...galleryTree.map(({ slug, label }) => ({ slug, label })),
];

export const findGalleryNode = (slug: string, nodes: GalleryNode[] = galleryTree): GalleryNode | undefined => {
  for (const node of nodes) {
    if (node.slug === slug) return node;
    const found = node.children ? findGalleryNode(slug, node.children) : undefined;
    if (found) return found;
  }
};

export const getNodePreview = (node: GalleryNode) => {
  const firstLeaf = node.children?.[0]?.children?.[0] ?? node.children?.[0];
  const gallery = galleries[node.slug] ?? (firstLeaf ? galleries[firstLeaf.slug] : undefined);
  return gallery?.images[0]?.src ?? u("photo-1503676260728-1c00da094a0b");
};
