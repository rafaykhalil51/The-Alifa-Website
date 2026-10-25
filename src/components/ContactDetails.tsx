import { Mail, MapPin, Phone } from "lucide-react";
import { mapsSearchUrl, siteConfig } from "@/config/site";

export function ContactDetails() {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_12px_40px_rgba(16,43,85,0.05)] sm:p-8">
      <h2 className="text-2xl font-semibold text-navy">{siteConfig.name}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        Use the details below to call, email, or visit the Karachi office. Office hours are not published on this website.
      </p>
      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex gap-3">
          <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
          <div>
            <p className="font-semibold text-navy">Phone</p>
            <a href={siteConfig.phoneTel} className="text-muted hover:text-blue">
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
          <div>
            <p className="font-semibold text-navy">Email</p>
            <a href={siteConfig.emailHref} className="break-all text-muted hover:text-blue">
              {siteConfig.email}
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
          <div>
            <p className="font-semibold text-navy">Office</p>
            <p className="leading-6 text-muted">{siteConfig.address.full}</p>
            <a href={mapsSearchUrl()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex font-semibold text-blue">
              Open in Google Maps
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
