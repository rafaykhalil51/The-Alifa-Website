import { destinations } from "@/data/destinations";
import { services } from "@/data/services";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    children: destinations.map((destination) => ({
      label: destination.name,
      href: `/study-abroad/${destination.slug}`,
    })),
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.navLabel,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "Courses", href: "/courses" },
  { label: "Universities", href: "/universities" },
  { label: "Contact", href: "/contact" },
];

export const footerExplore = [
  { label: "About Us", href: "/about" },
  { label: "Study destinations", href: "/study-abroad" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Universities", href: "/universities" },
  { label: "Request a consultation", href: "/apply" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

export const sitemapPaths = [
  "/",
  "/about",
  "/study-abroad",
  ...destinations.map((destination) => `/study-abroad/${destination.slug}`),
  "/services",
  ...services.map((service) => `/services/${service.slug}`),
  "/courses",
  "/universities",
  "/apply",
  "/contact",
  "/privacy-policy",
];
