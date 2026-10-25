"use client";

import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { mainNav, type NavItem } from "@/config/navigation";

function MobileGroup({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) {
  const panelId = useId();
  const [open, setOpen] = useState(pathname.startsWith(item.href));

  return (
    <div className="border-b border-line">
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between px-5 text-left text-base font-semibold text-navy"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div id={panelId} hidden={!open} className="grid gap-1 px-5 pb-4">
        <Link href={item.href} onClick={onNavigate} className="rounded-lg px-3 py-2 text-sm font-medium text-blue" aria-current={pathname === item.href ? "page" : undefined}>
          {item.label} overview
        </Link>
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onNavigate}
            className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-canvas"
            aria-current={pathname === child.href ? "page" : undefined}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileNavigation({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const focusable = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    focusable()[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button type="button" className="absolute inset-0 bg-navy/55" aria-label="Close menu" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-[min(100%,24rem)] flex-col bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo variant="mark" />
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-line" onClick={onClose} aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-5">
            <Link href="/apply" onClick={onClose} className="flex min-h-12 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-ink">
              Request Consultation
            </Link>
          </div>
          <nav aria-label="Mobile">
            {mainNav.map((item) =>
              item.children ? (
                <MobileGroup key={item.href} item={item} pathname={pathname} onNavigate={onClose} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex min-h-12 items-center border-b border-line px-5 text-base font-semibold text-navy"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="grid gap-2 px-5 py-6 text-sm">
            <a href={siteConfig.phoneTel} className="font-semibold text-navy">
              Call {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.emailHref} className="text-muted">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
