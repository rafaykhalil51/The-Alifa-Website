import { siteConfig } from "@/config/site";
import { ImageWithFallback } from "@/components/ImageWithFallback";

/**
 * Official artwork from public/images/logo.png.
 * `mark` uses the symbol crop so the header stays sharp.
 * `plate` puts the lockup on white, because the black half disappears on charcoal.
 */
export function Logo({
  plate = false,
  priority = false,
  variant = "full",
}: {
  plate?: boolean;
  priority?: boolean;
  variant?: "full" | "mark";
}) {
  const mark = variant === "mark";

  if (!siteConfig.logo.useImage) {
    return (
      <span className="font-display text-base font-semibold tracking-tight text-ink">The Alifa</span>
    );
  }

  return (
    <span className={plate ? "inline-flex rounded-2xl bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(224,176,0,0.45)]" : "inline-flex"}>
      <ImageWithFallback
        src={mark ? siteConfig.logo.markPath : siteConfig.logo.imagePath}
        alt={siteConfig.name}
        width={mark ? siteConfig.logo.markWidth : siteConfig.logo.width}
        height={mark ? siteConfig.logo.markHeight : siteConfig.logo.height}
        priority={priority}
        className={
          mark
            ? "h-11 w-auto object-contain sm:h-12"
            : "h-28 w-auto max-w-[12rem] object-contain sm:h-36"
        }
      />
    </span>
  );
}
