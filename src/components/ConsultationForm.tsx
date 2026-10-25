"use client";

import { useId, useMemo, useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import {
  destinationOptions,
  dialCodeOptions,
  intakeOptions,
  qualificationOptions,
  studyLevelOptions,
} from "@/data/inquiry-options";
import {
  emptyInquiry,
  formatInquiry,
  mailtoHref,
  validateInquiry,
  type InquiryErrors,
  type InquiryInput,
} from "@/lib/inquiry";
import { whatsappUrl } from "@/lib/whatsapp";

type Status = "idle" | "ready" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 h-12 w-full rounded-xl border border-line bg-white px-3 text-base text-ink outline-none focus-visible:border-blue";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-[#9f1239]">
      {message}
    </p>
  );
}

export function ConsultationForm({ initialDestination = "" }: { initialDestination?: string }) {
  const formId = useId();
  const [input, setInput] = useState<InquiryInput>({
    ...emptyInquiry,
    destination: destinationOptions.includes(initialDestination as (typeof destinationOptions)[number]) ? initialDestination : "",
  });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverDelivery, setServerDelivery] = useState(false);
  const [serverNote, setServerNote] = useState("");
  const [checkedDelivery, setCheckedDelivery] = useState(false);

  const prepared = useMemo(() => (status === "ready" || status === "sent" || status === "error" ? formatInquiry(input) : null), [input, status]);

  function update<K extends keyof InquiryInput>(key: K, value: InquiryInput[K]) {
    setInput((current) => ({ ...current, [key]: value }));
    setStatus("idle");
  }

  async function ensureDeliveryMode() {
    if (checkedDelivery) return serverDelivery;
    try {
      const response = await fetch("/api/inquiry", { method: "GET" });
      const data = (await response.json()) as { serverDelivery?: boolean };
      const enabled = Boolean(data.serverDelivery);
      setServerDelivery(enabled);
      setCheckedDelivery(true);
      return enabled;
    } catch {
      setCheckedDelivery(true);
      return false;
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateInquiry(input);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${first}`)?.focus();
      return;
    }
    await ensureDeliveryMode();
    setStatus("ready");
    requestAnimationFrame(() => {
      document.getElementById(`${formId}-handoff`)?.focus();
    });
  }

  async function submitToOffice() {
    setStatus("sending");
    setServerNote("");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (response.ok && data.ok) {
        setStatus("sent");
        return;
      }
      setStatus("error");
      setServerNote(data.error || "The office inbox could not confirm delivery. Use email or WhatsApp below.");
    } catch {
      setStatus("error");
      setServerNote("The website could not reach the delivery service. Use email or WhatsApp below.");
    }
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-5 shadow-[0_12px_40px_rgba(16,43,85,0.05)] sm:p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-navy">Student assessment</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          This form prepares an inquiry. It is not sent until you choose email, WhatsApp, or, when configured, direct delivery. Please do not include passport numbers, identity numbers, or financial documents.
        </p>
      </div>

      {errorCount > 0 ? (
        <div role="alert" className="mt-6 rounded-2xl border border-[#fecdd3] bg-[#fff1f2] px-4 py-3 text-sm text-[#9f1239]">
          Please correct {errorCount} {errorCount === 1 ? "field" : "fields"} before preparing the inquiry.
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-fullName`} className="text-sm font-semibold text-navy">Full name</label>
          <input id={`${formId}-fullName`} name="fullName" autoComplete="name" value={input.fullName} onChange={(event) => update("fullName", event.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined} className={fieldClass} />
          <FieldError id={`${formId}-fullName-error`} message={errors.fullName} />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="text-sm font-semibold text-navy">Email</label>
          <input id={`${formId}-email`} name="email" type="email" autoComplete="email" value={input.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${formId}-email-error` : undefined} className={fieldClass} />
          <FieldError id={`${formId}-email-error`} message={errors.email} />
        </div>
        <div>
          <label htmlFor={`${formId}-location`} className="text-sm font-semibold text-navy">Current location</label>
          <input id={`${formId}-location`} name="location" autoComplete="address-level2" placeholder="Karachi, Pakistan" value={input.location} onChange={(event) => update("location", event.target.value)} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? `${formId}-location-error` : undefined} className={fieldClass} />
          <FieldError id={`${formId}-location-error`} message={errors.location} />
        </div>
        <div>
          <label htmlFor={`${formId}-dialCode`} className="text-sm font-semibold text-navy">Dialing code</label>
          <select id={`${formId}-dialCode`} name="dialCode" value={input.dialCode} onChange={(event) => update("dialCode", event.target.value)} aria-invalid={Boolean(errors.dialCode)} aria-describedby={errors.dialCode ? `${formId}-dialCode-error` : undefined} className={fieldClass}>
            <option value="">Select a code</option>
            {dialCodeOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
            <option value="other">Other</option>
          </select>
          <FieldError id={`${formId}-dialCode-error`} message={errors.dialCode} />
        </div>
        {input.dialCode === "other" ? (
          <div>
            <label htmlFor={`${formId}-customDialCode`} className="text-sm font-semibold text-navy">Other dialing code</label>
            <input id={`${formId}-customDialCode`} name="customDialCode" inputMode="tel" placeholder="+92" value={input.customDialCode} onChange={(event) => update("customDialCode", event.target.value)} aria-invalid={Boolean(errors.customDialCode)} aria-describedby={errors.customDialCode ? `${formId}-customDialCode-error` : undefined} className={fieldClass} />
            <FieldError id={`${formId}-customDialCode-error`} message={errors.customDialCode} />
          </div>
        ) : null}
        <div className={input.dialCode === "other" ? "" : "sm:col-span-1"}>
          <label htmlFor={`${formId}-phone`} className="text-sm font-semibold text-navy">Phone number</label>
          <input id={`${formId}-phone`} name="phone" type="tel" autoComplete="tel-national" inputMode="tel" placeholder="3001234567" value={input.phone} onChange={(event) => update("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? `${formId}-phone-error` : `${formId}-phone-hint`} className={fieldClass} />
          <p id={`${formId}-phone-hint`} className="mt-2 text-sm text-muted">Enter the local number without the dialing code.</p>
          <FieldError id={`${formId}-phone-error`} message={errors.phone} />
        </div>
        <div>
          <label htmlFor={`${formId}-destination`} className="text-sm font-semibold text-navy">Preferred study destination</label>
          <select id={`${formId}-destination`} name="destination" value={input.destination} onChange={(event) => update("destination", event.target.value)} aria-invalid={Boolean(errors.destination)} aria-describedby={errors.destination ? `${formId}-destination-error` : undefined} className={fieldClass}>
            <option value="">Select a destination</option>
            {destinationOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <FieldError id={`${formId}-destination-error`} message={errors.destination} />
        </div>
        <div>
          <label htmlFor={`${formId}-qualification`} className="text-sm font-semibold text-navy">Current qualification</label>
          <select id={`${formId}-qualification`} name="qualification" value={input.qualification} onChange={(event) => update("qualification", event.target.value)} aria-invalid={Boolean(errors.qualification)} aria-describedby={errors.qualification ? `${formId}-qualification-error` : undefined} className={fieldClass}>
            <option value="">Select a qualification</option>
            {qualificationOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <FieldError id={`${formId}-qualification-error`} message={errors.qualification} />
        </div>
        <div>
          <label htmlFor={`${formId}-studyLevel`} className="text-sm font-semibold text-navy">Desired study level</label>
          <select id={`${formId}-studyLevel`} name="studyLevel" value={input.studyLevel} onChange={(event) => update("studyLevel", event.target.value)} aria-invalid={Boolean(errors.studyLevel)} aria-describedby={errors.studyLevel ? `${formId}-studyLevel-error` : undefined} className={fieldClass}>
            <option value="">Select a study level</option>
            {studyLevelOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <FieldError id={`${formId}-studyLevel-error`} message={errors.studyLevel} />
        </div>
        <div>
          <label htmlFor={`${formId}-intake`} className="text-sm font-semibold text-navy">Preferred intake <span className="font-normal text-muted">(optional)</span></label>
          <select id={`${formId}-intake`} name="intake" value={input.intake} onChange={(event) => update("intake", event.target.value)} className={fieldClass}>
            <option value="">No preference yet</option>
            {intakeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-message`} className="text-sm font-semibold text-navy">Message <span className="font-normal text-muted">(optional)</span></label>
          <textarea id={`${formId}-message`} name="message" rows={5} maxLength={600} value={input.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${formId}-message-error` : undefined} className="mt-2 w-full rounded-xl border border-line px-3 py-3 text-base text-ink outline-none focus-visible:border-blue" />
          <FieldError id={`${formId}-message-error`} message={errors.message} />
        </div>
      </div>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input id={`${formId}-website`} name="website" tabIndex={-1} autoComplete="off" value={input.website} onChange={(event) => update("website", event.target.value)} />
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm leading-6 text-ink" htmlFor={`${formId}-consent`}>
          <input id={`${formId}-consent`} name="consent" type="checkbox" checked={input.consent} onChange={(event) => update("consent", event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? `${formId}-consent-error` : undefined} className="mt-1 h-4 w-4" />
          <span>
            I agree that {siteConfig.name} may contact me about this study inquiry by email or phone. I have read the <a href="/privacy-policy" className="font-semibold text-blue">privacy policy</a>.
          </span>
        </label>
        <FieldError id={`${formId}-consent-error`} message={errors.consent} />
      </div>

      <button type="submit" className="mt-6 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-ink transition duration-200 hover:bg-[#c99a00] sm:w-auto">
        Prepare my inquiry
      </button>

      {prepared ? (
        <div id={`${formId}-handoff`} tabIndex={-1} className="mt-6 rounded-2xl bg-canvas p-5" aria-live="polite">
          <h3 className="text-lg font-semibold text-navy">Choose how to send it</h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Nothing has been delivered yet. Email opens your email app with the message addressed to {siteConfig.email}. WhatsApp opens a prefilled chat. You still have to press send in that app.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={mailtoHref(prepared.subject, prepared.body)} className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-ink">
              Email this inquiry
            </a>
            {siteConfig.whatsapp.enabled ? (
              <a href={whatsappUrl(prepared.body)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#128C7E] px-5 text-sm font-semibold text-white">
                Continue on WhatsApp
              </a>
            ) : null}
            {serverDelivery ? (
              <button type="button" onClick={submitToOffice} disabled={status === "sending"} aria-busy={status === "sending"} className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/15 px-5 text-sm font-semibold text-navy disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Submit to the office"}
              </button>
            ) : null}
          </div>
          {status === "sent" ? (
            <p role="status" className="mt-4 text-sm font-medium text-[#166534]">
              The office confirmed that this inquiry was delivered by email.
            </p>
          ) : null}
          {status === "error" ? (
            <p role="alert" className="mt-4 text-sm text-[#9f1239]">{serverNote}</p>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
