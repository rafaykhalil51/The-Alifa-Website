# The Alifa Educational Consultants

Marketing website for The Alifa Educational Consultants. It is a Next.js front end with no database. Visitors prepare a study inquiry and send it themselves by email or WhatsApp. Direct email delivery can be turned on later with environment variables.

The UI UX Pro Max skill (installed under the local UIUX Skills project) was used for spacing, glass surfaces, focus, contrast, and restrained motion. Its suggested luxury palette was adjusted to colors sampled from the official logo: gold `#E0B000`, charcoal `#12110F`, off-white `#F6F4EF`, and ink `#14120E`. Small text on light backgrounds uses `#7C5A00`, because the bright gold is about 2:1 on white. Headings use Space Grotesk. Body text uses Manrope.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Deployment

The app is ready for Vercel.

1. Import the repository.
2. Set `NEXT_PUBLIC_SITE_URL` to the real `https` domain. Until you do, canonical URLs, the sitemap, and structured data use `http://localhost:3000`.
3. Leave the Resend variables empty unless you want server-side email delivery.
4. Deploy. `npm run build` is the production build.

## Where to edit content

| What | File |
| --- | --- |
| Company name, phone, email, address, logo switch, WhatsApp, disclaimer | `src/config/site.ts` |
| Menu labels | `src/config/navigation.ts` |
| Destination pages | `src/data/destinations.ts` |
| Services | `src/data/services.ts` |
| Study levels | `src/data/courses.ts` |
| University examples | `src/data/universities.ts` |
| Homepage process, benefits, and FAQ | `src/data/home.ts` |
| Form choices | `src/data/inquiry-options.ts` |

Do not add awards, visa counts, partnerships, testimonials, office hours, or social accounts unless the company has confirmed them.

## Phone and WhatsApp

The published number is `+604440296`.

- Click-to-call uses `tel:+604440296`.
- WhatsApp is enabled in `src/config/site.ts` under `whatsapp.enabled`.
- The confirmed WhatsApp number is the same value, `whatsapp.number`.
- Links use `https://wa.me/604440296?text=...` with a URL-encoded message.
- Opening WhatsApp or the email app does not send the message. The visitor still has to press send.
- Set `whatsapp.enabled` to `false` to hide the floating button, page buttons, and the form's WhatsApp option.

## Consultation form

The form validates the inquiry in the browser. It does not pretend that a message was delivered.

1. The visitor chooses **Prepare my inquiry**.
2. If the fields are valid, the page shows two explicit actions:
   - **Email this inquiry**, a `mailto:` link to `rafaykhalil@thealifa.com`.
   - **Continue on WhatsApp**, a `wa.me` link with the same text.
3. If `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, and `INQUIRY_TO_EMAIL` are all set, a third button appears: **Submit to the office**.
4. That button calls `POST /api/inquiry`. The success message is shown only when the email service accepts the message.
5. The API includes a honeypot field and a basic in-memory rate limit of 5 requests per 10 minutes per IP. On Vercel, each server instance has its own memory, so this is a modest control rather than a global lock.

The first form does not ask for passports, identity numbers, or financial documents.

## Logo

The official mark is `public/images/logo.png`, served at `/images/logo.png`. It is a transparent PNG cropped from the supplied file. Black and gold pixels are both part of the logo. The supplied file had no white background, so none was removed. Knocking out the black pixels deletes the left half of the symbol and the wordmark, so that was not done.

`logo.useImage` in `src/config/site.ts` is `true`. The image uses `object-contain` and is not stretched. `logo.width` and `logo.height` match the file (800 by 814) and only reserve space.

On charcoal, including the footer, the full logo sits on a white plate so the black half stays readable. The header uses `public/images/logo-mark.png`, a crop of the same file showing only the symbol, so the mark stays sharp at header size. It is not a redraw. Favicon files are `src/app/icon.png`, `src/app/apple-icon.png`, and `src/app/favicon.ico`, made from that symbol on white.

To replace the logo later, save a new transparent PNG to `public/images/logo.png` and update the width and height in `src/config/site.ts`. Do not recolor the mark in code.

## Photographs

Destination and campus photographs are stored in `public/images` and were downloaded from Unsplash under the [Unsplash License](https://unsplash.com/license). Attribution is not required by that license. Source image ids:

- `hero.jpg` — `photo-1562774053-701939374585`
- `students.jpg` — `photo-1523240795612-9a054b0db644`
- `library.jpg` — `photo-1481627834876-b7833e8f5570`
- `malaysia.jpg` — `photo-1596422846543-75c6fc197f07`
- `uk.jpg` — `photo-1513635269975-59663e0ac1ad`
- `australia.jpg` — `photo-1506973035872-a4ec16b8e8d9`
- `canada.jpg` — `photo-1517935706615-2717063c2225`
- `usa.jpg` — `photo-1496442226666-8d4d0e62e6e9`
- `germany.jpg` — `photo-1560969184-10fe8719e047`

## Still needs configuration

- The production domain (`NEXT_PUBLIC_SITE_URL`).
- A higher-resolution logo export if the current 1024px source should be replaced. The current file is already in use.
- Resend, or another email provider, if inquiries should be delivered without the visitor's email app. The API route is written for Resend and will not claim success until that service accepts the email.
- A lawyer's review of `src/app/privacy-policy/page.tsx` before it is treated as a final notice.
- Office hours, social accounts, and any partnership or outcome claims, which are intentionally omitted.
