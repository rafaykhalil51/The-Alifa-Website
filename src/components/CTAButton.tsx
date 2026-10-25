import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-gold text-ink shadow-[0_0_24px_rgba(224,176,0,0.28)] hover:bg-[#c99a00]",
  navy: "bg-navy text-white hover:bg-ink",
  light: "bg-white text-ink hover:bg-canvas",
  outline: "border border-ink/15 bg-white text-ink hover:border-gold",
  outlineLight: "border border-white/40 bg-transparent text-white hover:border-gold hover:bg-white/10",
  whatsapp: "bg-[#128C7E] text-white hover:bg-[#0e6f64]",
};

type Variant = keyof typeof variants;

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function CTAButton({ href, children, variant = "primary", className = "", external = false }: Props) {
  const classes = `inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`;
  const opensNewTab = external || href.startsWith("http");

  if (opensNewTab || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
