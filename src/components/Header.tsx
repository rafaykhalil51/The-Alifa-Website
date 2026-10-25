"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";
import { siteConfig } from "@/config/site";
import { mainNav, type NavItem } from "@/config/navigation";
import { usePathname } from "next/navigation";

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        className={`inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-medium ${active ? "text-gold-deep shadow-[inset_0_-2px_0_0_#e0b000]" : "text-ink hover:text-gold-deep"}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
          setOpen((value) => (canHover ? true : !value));
        }}
      >
        {item.label}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div id={panelId} className={`${open ? "block" : "hidden"} absolute top-full left-0 z-40 w-72 pt-2`} role="region" aria-label={item.label}>
        <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_18px_50px_rgba(20,18,14,0.12)]">
          <Link href={item.href} className="block rounded-xl px-3 py-2 text-sm font-semibold text-navy hover:bg-canvas" onClick={() => setOpen(false)}>
            {item.label} overview
          </Link>
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-canvas"
              aria-current={pathname === child.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuPath(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="sticky top-0 z-40">
      <div className="hidden bg-navy text-sm text-white lg:block">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-6 xl:px-8">
          <p className="truncate">Karachi office · {siteConfig.address.locality}</p>
          <div className="flex items-center gap-5">
            <a href={siteConfig.phoneTel} className="hover:text-gold">
              {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.emailHref} className="hover:text-gold">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
      <header className="border-b border-line bg-white/90 shadow-[inset_0_-1px_0_0_rgba(224,176,0,0.45)] backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <Logo priority variant="mark" decorative />
            <span className="font-display min-w-0 text-[11px] leading-tight font-semibold tracking-[0.12em] text-ink uppercase sm:text-xs lg:text-[13px]">
              The Alifa
              <span className="mt-0.5 block text-[9px] font-medium tracking-[0.14em] text-gold-deep sm:text-[10px] lg:text-[11px]">
                Educational Consultants
              </span>
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium ${pathname === item.href ? "text-gold-deep shadow-[inset_0_-2px_0_0_#e0b000]" : "text-ink hover:text-gold-deep"}`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/apply" aria-label="Request consultation" className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(224,176,0,0.28)] transition duration-200 hover:bg-[#c99a00]">
              <span className="md:hidden">Consult</span>
              <span className="hidden md:inline">Request Consultation</span>
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuPath(pathname)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-navigation">
        <MobileNavigation open={menuOpen} pathname={pathname} onClose={() => setMenuPath(null)} />
      </div>
    </div>
  );
}
