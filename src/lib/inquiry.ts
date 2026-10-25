import { siteConfig } from "@/config/site";
import {
  destinationOptions,
  dialCodeOptions,
  qualificationOptions,
  studyLevelOptions,
} from "@/data/inquiry-options";

export type InquiryInput = {
  fullName: string;
  email: string;
  dialCode: string;
  customDialCode: string;
  phone: string;
  location: string;
  destination: string;
  qualification: string;
  studyLevel: string;
  intake: string;
  message: string;
  consent: boolean;
  website: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\p{L}\s'.-]{2,80}$/u;

export const emptyInquiry: InquiryInput = {
  fullName: "",
  email: "",
  dialCode: "",
  customDialCode: "",
  phone: "",
  location: "",
  destination: "",
  qualification: "",
  studyLevel: "",
  intake: "",
  message: "",
  consent: false,
  website: "",
};

export function resolvedDialCode(input: Pick<InquiryInput, "dialCode" | "customDialCode">) {
  if (input.dialCode === "other") return input.customDialCode.trim();
  return input.dialCode.trim();
}

export function validateInquiry(input: InquiryInput): InquiryErrors {
  const errors: InquiryErrors = {};
  const name = input.fullName.trim();
  const email = input.email.trim();
  const phone = input.phone.replace(/[\s()-]/g, "");
  const dial = resolvedDialCode(input);
  const location = input.location.trim();

  if (!namePattern.test(name)) {
    errors.fullName = "Enter your full name using letters, spaces, apostrophes, or hyphens.";
  }
  if (!emailPattern.test(email) || email.length > 120) {
    errors.email = "Enter a valid email address.";
  }
  if (!dialCodeOptions.some((option) => option.value === input.dialCode) && input.dialCode !== "other") {
    errors.dialCode = "Select an international dialing code.";
  }
  if (input.dialCode === "other" && !/^\+\d{1,4}$/.test(dial)) {
    errors.customDialCode = "Enter a dialing code such as +92.";
  }
  if (!/^\d{6,15}$/.test(phone)) {
    errors.phone = "Enter a phone number of 6 to 15 digits, without the country code.";
  }
  if (location.length < 2 || location.length > 80) {
    errors.location = "Enter your current city and country.";
  }
  if (!destinationOptions.includes(input.destination as (typeof destinationOptions)[number])) {
    errors.destination = "Select a preferred study destination.";
  }
  if (!qualificationOptions.includes(input.qualification as (typeof qualificationOptions)[number])) {
    errors.qualification = "Select your current qualification.";
  }
  if (!studyLevelOptions.includes(input.studyLevel as (typeof studyLevelOptions)[number])) {
    errors.studyLevel = "Select the study level you want to explore.";
  }
  if (input.intake.trim().length > 40) {
    errors.intake = "Keep the intake preference under 40 characters.";
  }
  if (input.message.trim().length > 600) {
    errors.message = "Keep the message under 600 characters.";
  }
  if (!input.consent) {
    errors.consent = "Confirm that you agree to be contacted about this inquiry.";
  }
  if (input.website.trim()) {
    errors.website = "This inquiry could not be prepared.";
  }

  return errors;
}

export function formatInquiry(input: InquiryInput) {
  const phone = input.phone.replace(/[\s()-]/g, "");
  const subject = `Study consultation request - ${input.fullName.trim()}`;
  const lines = [
    `Study consultation request for ${siteConfig.name}`,
    "",
    `Name: ${input.fullName.trim()}`,
    `Email: ${input.email.trim()}`,
    `Phone: ${resolvedDialCode(input)} ${phone}`,
    `Current location: ${input.location.trim()}`,
    `Preferred destination: ${input.destination}`,
    `Current qualification: ${input.qualification}`,
    `Desired study level: ${input.studyLevel}`,
    `Preferred intake: ${input.intake.trim() || "Not specified"}`,
    `Message: ${input.message.trim() || "Not specified"}`,
    "",
    "The sender prepared this message on the website and still needs to send it.",
  ];

  return { subject, body: lines.join("\n") };
}

export function mailtoHref(subject: string, body: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
