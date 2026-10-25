import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import type { Destination } from "@/data/destinations";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/study-abroad/${destination.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_12px_40px_rgba(20,18,14,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-gold/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithFallback
          src={destination.image}
          alt={destination.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-navy">{destination.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{destination.cardDescription}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue">
          Explore {destination.name}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
