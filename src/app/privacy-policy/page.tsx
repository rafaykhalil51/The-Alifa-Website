import { PageBanner } from "@/components/PageBanner";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Draft privacy notice for inquiries sent to The Alifa Educational Consultants. This draft needs legal review before it is treated as final.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Privacy"
        title="Privacy policy draft"
        description="This is an editable draft for the company to review with its own legal adviser. It describes how this website handles a study inquiry. It is not a certificate of legal compliance."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]}
      />
      <article className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16 text-base leading-7 text-muted sm:px-6 lg:px-8 lg:py-24">
        <p className="rounded-2xl border border-line bg-white px-5 py-4 text-sm text-ink">
          Draft for editorial and legal review. Replace or expand this page before relying on it as the company&apos;s final privacy notice.
        </p>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Who this notice is for</h2>
          <p className="mt-3">
            This website is operated for {siteConfig.name}, {siteConfig.address.full}. Privacy questions can be sent to {siteConfig.email}.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">What the inquiry form collects</h2>
          <p className="mt-3">
            If you prepare an inquiry, the form asks for your name, email address, phone number and dialing code, current location, preferred study destination, current qualification, desired study level, an optional intake, an optional message, and your consent to be contacted. It is not designed to collect passport numbers, national identity numbers, or financial documents. Please do not add those in the message.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">How an inquiry leaves this website</h2>
          <p className="mt-3">
            By default, the form does not store or send the inquiry itself. After validation, you can open your own email application addressed to {siteConfig.email}, or open WhatsApp with a prefilled message when WhatsApp is enabled. The message is sent only if you confirm it in that application. Those services then process the message under their own terms.
          </p>
          <p className="mt-3">
            If the company later connects an email delivery service, the same details can be sent from a server route to the office inbox. That route is off until the required environment variables are set. The website shows a delivery confirmation only after the email service accepts the message.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Cookies and analytics</h2>
          <p className="mt-3">
            This version of the website does not add an analytics or advertising cookie. The hosting platform may keep ordinary technical logs, such as a request address, as part of running the site.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">How long information is kept</h2>
          <p className="mt-3">
            Messages you send by email or WhatsApp are stored in those accounts. The company should decide a retention period and add it here after review. This draft does not invent one.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Asking for a correction or deletion</h2>
          <p className="mt-3">
            Email {siteConfig.email} if you want the office to correct or delete an inquiry it holds. The company will need a process for that request. This draft does not claim a particular legal response time.
          </p>
        </section>
      </article>
    </>
  );
}
