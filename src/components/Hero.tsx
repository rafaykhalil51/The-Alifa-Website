import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { destinations } from "@/data/destinations";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <ImageWithFallback
        src="/images/hero.jpg"
        alt="A university building with a symmetrical brick and stone facade, facing a wide green lawn."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/40" />
      <div className="gold-glow absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[40rem] w-full max-w-7xl flex-col justify-end px-4 pt-16 pb-10 sm:px-6 lg:min-h-[46rem] lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan uppercase">The Alifa Educational Consultants</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Your Future Begins Beyond Borders.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Explore international study opportunities in Malaysia, the UK, Australia, Canada, the USA and Germany with guidance from The Alifa Educational Consultants.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/apply" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-ink shadow-[0_0_28px_rgba(224,176,0,0.35)] transition duration-200 hover:bg-[#c99a00]">
              Get Study Guidance
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/study-abroad" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white hover:bg-white/10">
              Explore Destinations
            </Link>
          </div>
        </div>
        <ul className="mt-10 grid gap-2 rounded-3xl border border-gold/25 bg-white/10 p-3 shadow-[0_0_40px_rgba(224,176,0,0.08)] backdrop-blur-md sm:grid-cols-3 lg:grid-cols-6">
          {destinations.map((destination) => (
            <li key={destination.slug}>
              <Link href={`/study-abroad/${destination.slug}`} className="flex min-h-11 items-center justify-center rounded-2xl px-3 text-sm font-medium text-white hover:bg-white/10">
                {destination.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
