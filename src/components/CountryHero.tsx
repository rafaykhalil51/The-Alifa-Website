import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { destinations, type Destination } from "@/data/destinations";

export function CountryHero({ destination, crumbs }: { destination: Destination; crumbs: Crumb[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <ImageWithFallback src={destination.image} alt={destination.imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/82 to-navy/40" />
      <div className="gold-glow absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[28rem] w-full max-w-7xl flex-col justify-end px-4 pt-16 pb-10 sm:px-6 lg:min-h-[34rem] lg:px-8">
        <Breadcrumbs items={crumbs} />
        <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-cyan uppercase">Study destination</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{destination.heroTitle}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 sm:text-lg">{destination.summary}</p>
        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {destinations.map((item) => (
            <Link
              key={item.slug}
              href={`/study-abroad/${item.slug}`}
              aria-current={item.slug === destination.slug ? "page" : undefined}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-3 py-2 text-sm ${item.slug === destination.slug ? "bg-gold text-ink" : "border border-white/15 bg-white/10 text-white hover:border-gold/50"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
