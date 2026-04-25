"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Please share your full name.").max(120),
  email: z.string().email("Please enter a valid email."),
  organization: z.string().max(160).optional().or(z.literal("")),
  interest: z.enum(["registry", "desk", "both", "general"]).default("general"),
  message: z.string().min(10, "A little more detail helps us route your note.").max(4000),
  // Honeypot — real users never fill this.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
};

const INTEREST_LABEL: Record<string, string> = {
  registry: "Campaign Registry",
  desk: "Campaign Desk",
  both: "Campaign Registry + Campaign Desk",
  general: "General inquiry",
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    organization: String(formData.get("organization") ?? "").trim(),
    interest: String(formData.get("interest") ?? "general"),
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? ""),
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof ContactSchema>;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Honeypot tripped — pretend success to avoid signaling bots.
  if (parsed.data.website) {
    return { status: "success", message: "Thank you. We'll be in touch." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL ?? "hello@campaigntech.ai";
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "Campaign Tech AI <hello@campaigntech.ai>";

  if (!apiKey) {
    // In development without credentials, log and succeed so the UX can be tested.
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY missing — logging submission:", parsed.data);
      return {
        status: "success",
        message: "Thank you. We'll be in touch shortly.",
      };
    }
    return {
      status: "error",
      message: "Our inbox is temporarily unavailable. Please email hello@campaigntech.ai.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { name, email, organization, interest, message } = parsed.data;

    const subject = `New inquiry · ${INTEREST_LABEL[interest] ?? "General inquiry"} · ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : null,
      `Interest: ${INTEREST_LABEL[interest]}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#111310;line-height:1.55;">
        <h2 style="margin:0 0 16px;font-weight:500;letter-spacing:-0.01em;">New inquiry · Campaign Tech AI</h2>
        <table style="border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:4px 12px 4px 0;color:#4D4A40;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#4D4A40;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          ${organization ? `<tr><td style="padding:4px 12px 4px 0;color:#4D4A40;">Organization</td><td>${escapeHtml(organization)}</td></tr>` : ""}
          <tr><td style="padding:4px 12px 4px 0;color:#4D4A40;">Interest</td><td>${escapeHtml(INTEREST_LABEL[interest])}</td></tr>
        </table>
        <div style="margin-top:20px;padding-top:16px;border-top:1px solid #EBE5D5;white-space:pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: "We couldn't deliver your message. Please email hello@campaigntech.ai.",
      };
    }

    return {
      status: "success",
      message: "Thank you. A member of our team will be in touch shortly.",
    };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please email hello@campaigntech.ai.",
    };
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
