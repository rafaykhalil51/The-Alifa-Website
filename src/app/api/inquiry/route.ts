import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { formatInquiry, validateInquiry, type InquiryInput } from "@/lib/inquiry";
import { allowInquiry } from "@/lib/rate-limit";

function deliveryConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.INQUIRY_FROM_EMAIL && process.env.INQUIRY_TO_EMAIL);
}

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "local";
}

export function GET() {
  return NextResponse.json({ serverDelivery: deliveryConfigured() });
}

export async function POST(request: Request) {
  if (!deliveryConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Direct delivery is not configured. Use the email or WhatsApp option." },
      { status: 503 },
    );
  }

  if (!allowInquiry(clientKey(request))) {
    return NextResponse.json(
      { ok: false, error: "Please wait a few minutes before sending another inquiry." },
      { status: 429 },
    );
  }

  let payload: InquiryInput;
  try {
    payload = (await request.json()) as InquiryInput;
  } catch {
    return NextResponse.json({ ok: false, error: "The inquiry could not be read." }, { status: 400 });
  }

  const errors = validateInquiry(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Check the form and try again." }, { status: 400 });
  }

  const { subject, body } = formatInquiry(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM_EMAIL,
      to: [process.env.INQUIRY_TO_EMAIL],
      reply_to: payload.email.trim(),
      subject,
      text: `${body}\n\nThis copy was delivered by the website form to ${siteConfig.name}.`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "The email service did not accept the inquiry. Use email or WhatsApp instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
