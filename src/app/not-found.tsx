import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col justify-center px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-blue uppercase">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">This page is not on the site</h1>
      <p className="mt-4 text-base leading-7 text-muted">
        The address may be out of date. You can return home, look at the study destinations, or request a consultation.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-ink">
          Back to home
        </Link>
        <Link href="/study-abroad" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold text-navy">
          Study destinations
        </Link>
        <Link href="/apply" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold text-navy">
          Request consultation
        </Link>
      </div>
    </section>
  );
}
