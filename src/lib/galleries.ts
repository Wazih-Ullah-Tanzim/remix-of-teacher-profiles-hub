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
import noboBorshoGroupAsset from "@/assets/nobo-borsho-group.jpg.asset.json";
import noboBorshoCostumesAsset from "@/assets/nobo-borsho-costumes.jpg.asset.json";
import noboBorshoRickshawAsset from "@/assets/nobo-borsho-rickshaw.jpg.asset.json";
import noboBorshoStageAsset from "@/assets/nobo-borsho-stage.jpg.asset.json";
import noboBorshoRedSariAsset from "@/assets/nobo-borsho-red-sari.jpg.asset.json";
import noboBorshoFlowersAsset from "@/assets/nobo-borsho-flowers.jpg.asset.json";
import noboBorshoTraditionalDressAsset from "@/assets/nobo-borsho-traditional-dress.jpg.asset.json";
import noboBorshoMaroonAsset from "@/assets/nobo-borsho-maroon.jpg.asset.json";
import noboBorshoHeadbandAsset from "@/assets/nobo-borsho-headband.jpg.asset.json";
import noboBorshoWhitePanjabiAsset from "@/assets/nobo-borsho-white-panjabi.jpg.asset.json";
import foodPartyTableAsset from "@/assets/food-party-table.jpg.asset.json";
import foodPartyGroupAsset from "@/assets/food-party-group.jpg.asset.json";
import foodPartySpreadAsset from "@/assets/food-party-spread.jpg.asset.json";
import foodPartyStudentsAsset from "@/assets/food-party-students.jpg.asset.json";
import foodPartyClassAsset from "@/assets/food-party-class.jpg.asset.json";
import siratHadithNarratorAsset from "@/assets/sirat-hadith-narrator.jpg.asset.json";
import siratStudentSpeechAsset from "@/assets/sirat-student-speech.jpg.asset.json";
import siratChairmanSpeechAsset from "@/assets/sirat-chairman-speech.jpg.asset.json";
import siratStudentAwardsAsset from "@/assets/sirat-student-awards.jpg.asset.json";
import siratAwardsCelebrationAsset from "@/assets/sirat-awards-celebration.jpg.asset.json";
import siratAwardPresentationAsset from "@/assets/sirat-award-presentation.jpg.asset.json";
import siratStudentAwardAsset from "@/assets/sirat-student-award.jpg.asset.json";
import siratPrizeDistributionAsset from "@/assets/sirat-prize-distribution.jpg.asset.json";
import classPartyChildrenAsset from "@/assets/class-party-children.jpg.asset.json";
import classPartyCakeAsset from "@/assets/class-party-cake.jpg.asset.json";
import classPartyCakeCuttingAsset from "@/assets/class-party-cake-cutting.jpg.asset.json";
import classPartyStaffAsset from "@/assets/class-party-staff.jpg.asset.json";
import classPartyGroupAsset from "@/assets/class-party-group.jpg.asset.json";
import firstAwardCeremonySingerAsset from "@/assets/first-award-ceremony-singer.jpg.asset.json";
import firstAwardCeremonyFootballDanceAsset from "@/assets/first-award-ceremony-football-dance.jpg.asset.json";
import firstAwardCeremonyFootballPerformanceAsset from "@/assets/first-award-ceremony-football-performance.jpg.asset.json";
import firstAwardCeremonyDanceAsset from "@/assets/first-award-ceremony-dance.jpg.asset.json";
import firstAwardCeremonyPurpleTeamAsset from "@/assets/first-award-ceremony-purple-team.jpg.asset.json";
import firstAwardCeremonyBlueTeamAsset from "@/assets/first-award-ceremony-blue-team.jpg.asset.json";
import firstAwardCeremonyFairyDanceAsset from "@/assets/first-award-ceremony-fairy-dance.jpg.asset.json";
import firstAwardCeremonyGuestSingerAsset from "@/assets/first-award-ceremony-guest-singer.jpg.asset.json";
import firstAwardCeremonyRedDanceAsset from "@/assets/first-award-ceremony-red-dance.jpg.asset.json";
import firstAwardCeremonyMusicianAsset from "@/assets/first-award-ceremony-musician.jpg.asset.json";
import parentsMeetingDiscussionAsset from "@/assets/parents-meeting-discussion.jpg.asset.json";
import parentsMeetingWideAsset from "@/assets/parents-meeting-wide.jpg.asset.json";

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
      { src: siratHadithNarratorAsset.url, caption: "Student Hadith narration" },
      { src: siratStudentSpeechAsset.url, caption: "Student speech performance" },
      { src: siratChairmanSpeechAsset.url, caption: "Chairman's address at the celebration" },
      { src: siratStudentAwardsAsset.url, caption: "Students celebrating their awards" },
      { src: siratAwardsCelebrationAsset.url, caption: "Award winners at Sirat-Un-Nabi" },
      { src: siratAwardPresentationAsset.url, caption: "Prize presentation ceremony" },
      { src: siratStudentAwardAsset.url, caption: "Student receiving an award" },
      { src: siratPrizeDistributionAsset.url, caption: "Sirat-Un-Nabi prize distribution" },
    ],
  },
  "food-party": {
    title: "Food Party",
    eyebrow: "Occasion",
    description: "A joyful celebration of cuisine, culture and community across the John Amos family.",
    images: [
      { src: foodPartyTableAsset.url, caption: "A colourful table of shared treats" },
      { src: foodPartyGroupAsset.url, caption: "Students and teachers at the Food Party" },
      { src: foodPartySpreadAsset.url, caption: "A festive spread prepared for everyone" },
      { src: foodPartyStudentsAsset.url, caption: "Food Party celebration with students and teachers" },
      { src: foodPartyClassAsset.url, caption: "Classroom Food Party memories" },
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
  "nobo-borsho-celebration": {
    title: "Nobo Borsho Celebration",
    eyebrow: "Occasion",
    description: "A colourful celebration of Bangla New Year, filled with traditional dress, student creativity and joyful cultural spirit.",
    images: [
      { src: noboBorshoGroupAsset.url, caption: "Students and teachers celebrating Nobo Borsho" },
      { src: noboBorshoCostumesAsset.url, caption: "Traditional Bangla New Year costumes" },
      { src: noboBorshoRickshawAsset.url, caption: "Student dressed as a rickshaw puller" },
      { src: noboBorshoStageAsset.url, caption: "Nobo Borsho presentation" },
      { src: noboBorshoRedSariAsset.url, caption: "Student in traditional red sari" },
      { src: noboBorshoFlowersAsset.url, caption: "Flowers and traditional celebration dress" },
      { src: noboBorshoTraditionalDressAsset.url, caption: "Young student in traditional Bangla attire" },
      { src: noboBorshoMaroonAsset.url, caption: "Student dressed for the celebration" },
      { src: noboBorshoHeadbandAsset.url, caption: "Bangla New Year headband and festive dress" },
      { src: noboBorshoWhitePanjabiAsset.url, caption: "Student in a traditional white panjabi" },
    ],
  },
  "class-party": {
    title: "Class Party",
    eyebrow: "School Life",
    description: "Shared treats, laughter and memorable moments with classmates and teachers.",
    images: [
      { src: classPartyChildrenAsset.url, caption: "Children celebrating together" },
      { src: classPartyCakeAsset.url, caption: "Class Party 2026 celebration cake" },
      { src: classPartyCakeCuttingAsset.url, caption: "Cake-cutting with students and families" },
      { src: classPartyStaffAsset.url, caption: "Teachers and staff at the Class Party" },
      { src: classPartyGroupAsset.url, caption: "Students and teachers celebrating Class Party" },
    ],
  },
  "first-award-ceremony": {
    title: "First Award Ceremony",
    eyebrow: "Annual Programme",
    description: "Highlights from our first annual award ceremony — student performances, music and a joyful celebration of achievement.",
    images: [
      { src: firstAwardCeremonySingerAsset.url, caption: "Live music performance on stage" },
      { src: firstAwardCeremonyFootballDanceAsset.url, caption: "Football-inspired student performance" },
      { src: firstAwardCeremonyFootballPerformanceAsset.url, caption: "Students performing with footballs" },
      { src: firstAwardCeremonyDanceAsset.url, caption: "Student dance presentation" },
      { src: firstAwardCeremonyPurpleTeamAsset.url, caption: "JAIS team at the award ceremony" },
      { src: firstAwardCeremonyBlueTeamAsset.url, caption: "Teachers and guests celebrating together" },
      { src: firstAwardCeremonyFairyDanceAsset.url, caption: "Young students performing on stage" },
      { src: firstAwardCeremonyGuestSingerAsset.url, caption: "Guest singer's special performance" },
      { src: firstAwardCeremonyRedDanceAsset.url, caption: "Colourful student dance programme" },
      { src: firstAwardCeremonyMusicianAsset.url, caption: "Musical performance at the ceremony" },
    ],
  },
  "parents-meeting": {
    title: "Parents Meeting",
    eyebrow: "School Community",
    description: "Meaningful conversations and strong partnerships between families and school.",
    images: [
      { src: parentsMeetingDiscussionAsset.url, caption: "Parents and school leaders in discussion" },
      { src: parentsMeetingWideAsset.url, caption: "Families gathered for the Parents Meeting" },
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
  { slug: "first-award-ceremony", label: "First Award Ceremony", description: "Highlights from the first annual award ceremony." },
  { slug: "victory-day", label: "Victory Day", description: "A proud celebration of Bangladesh's Victory Day." },
  { slug: "nobo-borsho-celebration", label: "Nobo Borsho Celebration", description: "Bangla New Year celebrations on campus." },
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
