import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";

// Generic hook for fetching a singleton document by type
function useSanityDocument<T>(type: string) {
  return useQuery<T>({
    queryKey: ["sanity", type],
    queryFn: () => sanityClient.fetch(`*[_type == "${type}"][0]`),
    staleTime: 1000 * 60 * 5, // 5 min
  });
}

// Generic hook for fetching multiple documents
function useSanityDocuments<T>(type: string, query?: string) {
  const groq = query || `*[_type == "${type}"] | order(order asc)`;
  return useQuery<T[]>({
    queryKey: ["sanity", type, "list"],
    queryFn: () => sanityClient.fetch(groq),
    staleTime: 1000 * 60 * 5,
  });
}

// --- Type definitions ---

export interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  colors: {
    greenDark: string;
    greenLight: string;
    black: string;
    white: string;
    grey: string;
    greyLight: string;
  };
  spacing: {
    sectionPaddingMobile: number;
    sectionPaddingDesktop: number;
    contentMaxWidth: number;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export interface HeroSectionData {
  subtitle: string;
  headlineLines: { _key: string; text: string; style: "normal" | "accent" | "accentDot" }[];
  description: string;
  ctaText: string;
  ctaLink: string;
  scrollText: string;
  keywords: string[];
  backgroundGradient: string;
}

export interface AboutSectionData {
  subtitle: string;
  heading: string;
  image?: { asset: { _ref: string } };
  stats: { _key: string; num: string; label: string }[];
  ctaText: string;
  ctaLink: string;
  paragraphs: string[];
}

export interface MissionVisionData {
  subtitle: string;
  heading: string;
  cards: {
    _key: string;
    cardId: string;
    label: string;
    icon: "target" | "eye";
    heading: string;
    body: string;
    stats: { _key: string; value: string; label: string }[];
  }[];
}

export interface ServicesSectionData {
  subtitle: string;
  heading: string;
  description: string;
  services: { _key: string; title: string; description: string }[];
}

export interface WhyVerdantData {
  subtitle: string;
  heading: string;
  description: string;
  points: { _key: string; title: string; description: string }[];
  backgroundGradient: string;
}

export interface InsightsSectionData {
  subtitle: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface InsightArticle {
  _id: string;
  title: string;
  slug?: { current: string };
  image?: { asset: { _ref: string } };
  excerpt: string;
  date: string;
  order: number;
}

export interface CtaSectionData {
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface FooterData {
  newsletterSubtitle: string;
  newsletterHeading: string;
  newsletterDescription: string;
  brandDescription: string;
  email: string;
  copyright: string;
  navColumns: {
    _key: string;
    title: string;
    links: { _key: string; label: string; href: string }[];
  }[];
}

// --- Hooks ---

export const useSiteSettings = () => useSanityDocument<SiteSettings>("siteSettings");
export const useHeroSection = () => useSanityDocument<HeroSectionData>("heroSection");
export const useAboutSection = () => useSanityDocument<AboutSectionData>("aboutSection");
export const useMissionVision = () => useSanityDocument<MissionVisionData>("missionVisionSection");
export const useServicesSection = () => useSanityDocument<ServicesSectionData>("servicesSection");
export const useWhyVerdant = () => useSanityDocument<WhyVerdantData>("whyVerdantSection");
export const useInsightsSection = () => useSanityDocument<InsightsSectionData>("insightsSection");
export const useInsightArticles = () => useSanityDocuments<InsightArticle>("insightArticle");
export const useCtaSection = () => useSanityDocument<CtaSectionData>("ctaSection");
export const useFooterSection = () => useSanityDocument<FooterData>("footerSection");
