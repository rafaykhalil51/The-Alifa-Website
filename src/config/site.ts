/**
 * Edit company facts, WhatsApp, the logo switch, and the public site URL here.
 * Do not add unverified awards, statistics, office hours, or social accounts.
 */

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function resolveSiteUrl() {
  if (!configuredSiteUrl) return "http://localhost:3000";
  try {
    return new URL(configuredSiteUrl).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export const siteConfig = {
  name: "The Alifa Educational Consultants",
  shortName: "The Alifa",
  phoneDisplay: "+604440296",
  phoneTel: "tel:+604440296",
  email: "rafaykhalil@thealifa.com",
  emailHref: "mailto:rafaykhalil@thealifa.com",
  /**
   * WhatsApp Business contact.
   * Set `enabled` to false to hide WhatsApp links. `number` must include the
   * country code. The floating button, inquiry handoff, and page CTAs all
   * read this object. Opening a wa.me link does not send a message.
   */
  whatsapp: {
    enabled: true,
    number: "+604440296",
    label: "WhatsApp Business Contact",
    defaultMessage:
      "Hello, I would like to request a study abroad consultation with The Alifa Educational Consultants.",
  },
  address: {
    street: "2nd Floor, 15-C, Khayaban-e-Rizwan, Phase-VII Phase 7 Ext, Defence Housing Authority",
    locality: "Karachi",
    postalCode: "75500",
    country: "Pakistan",
    countryCode: "PK",
    full: "2nd Floor, 15-C, Khayaban-e-Rizwan, Phase-VII Phase 7 Ext, Defence Housing Authority, Karachi, 75500, Pakistan.",
  },
  /**
   * Official logo at public/images/logo.png (served as /images/logo.png).
   * The file is a transparent PNG. Black and gold pixels are both part of the mark.
   * On charcoal or black surfaces, render it with the Logo `plate` prop so the
   * black half stays visible. Do not knock out black pixels.
   * width and height are the file's pixel size and only reserve space.
   */
  logo: {
    useImage: true,
    imagePath: "/images/logo.png",
    markPath: "/images/logo-mark.png",
    width: 800,
    height: 814,
    markWidth: 739,
    markHeight: 586,
  },
  url: resolveSiteUrl(),
  copyrightYear: 2026,
  disclaimer:
    "Universities and immigration authorities make their own admission and visa decisions. Nothing on this website is an offer of admission, a visa approval, or a guarantee of a particular outcome. Requirements, fees, and processing steps change, so confirm the current rules on the official university or government website before you apply.",
} as const;

export function mapsSearchUrl(address = siteConfig.address.full) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function mapsEmbedUrl(address = siteConfig.address.full) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
}
