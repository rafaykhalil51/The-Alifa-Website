import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { footerExplore } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Logo plate />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
            Study guidance for students and families comparing international education options. Admission and visa decisions remain with universities and the relevant authorities.
          </p>
          <address className="mt-5 space-y-2 text-sm leading-6 text-white/80 not-italic">
            <p>{siteConfig.address.full}</p>
            <p>
              <a href={siteConfig.phoneTel} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={siteConfig.emailHref} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
        <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="text-sm font-semibold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {footerExplore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Destinations</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {destinations.map((destination) => (
                <li key={destination.slug}>
                  <Link href={`/study-abroad/${destination.slug}`} className="hover:text-gold">
                    Study in {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-gold">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-xs leading-6 text-white/65 sm:px-6 lg:px-8">
          <p>{siteConfig.disclaimer}</p>
          <p>© {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
