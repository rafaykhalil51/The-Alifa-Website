import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

export function PageBanner({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="gold-glow absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Breadcrumbs items={crumbs} />
        <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-cyan uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
