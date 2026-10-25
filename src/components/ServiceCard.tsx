import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function ServiceCard({
  href,
  title,
  text,
  icon: Icon,
  index,
}: {
  href: string;
  title: string;
  text: string;
  icon: LucideIcon;
  index: string;
}) {
  return (
    <Link href={href} className="flex h-full flex-col rounded-3xl border border-line bg-white/80 p-6 shadow-[0_12px_40px_rgba(20,18,14,0.05)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-gold/50">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold tracking-[0.16em] text-gold-deep">{index}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{text}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue">
        Read the service
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </span>
    </Link>
  );
}
