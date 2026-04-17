"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-forest-800/20 bg-forest-50/50 p-10 md:p-12"
      >
        <p className="eyebrow text-forest-800">Received</p>
        <p className="mt-5 font-serif text-3xl italic leading-tight text-ink md:text-4xl">
          {state.message ?? "Thank you. We'll be in touch."}
        </p>
        <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-ink/70">
          In the meantime, you can reach us directly at{" "}
          <a
            href="mailto:hello@campaigntech.ai"
            className="link-underline text-ink"
          >
            hello@campaigntech.ai
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-10" noValidate>
      {/* Honeypot — hidden from real users. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
        <Field
          id="name"
          name="name"
          label="Name"
          autoComplete="name"
          required
          error={state.fieldErrors?.name}
        />
        <Field
          id="email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          required
          error={state.fieldErrors?.email}
        />
        <Field
          id="organization"
          name="organization"
          label="Organization"
          autoComplete="organization"
          className="md:col-span-2"
          error={state.fieldErrors?.organization}
        />

        <div className="md:col-span-2">
          <Label htmlFor="interest">I'm interested in</Label>
          <div className="relative mt-1">
            <select
              id="interest"
              name="interest"
              defaultValue="general"
              className="field appearance-none pr-10"
            >
              <option value="general">General inquiry</option>
              <option value="registry">Campaign Registry</option>
              <option value="vault">Campaign Vault</option>
              <option value="both">Campaign Registry + Campaign Vault</option>
            </select>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink/50"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M3 5.5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="field mt-1"
            placeholder="Tell us briefly about your organization and what you're exploring."
          />
          {state.fieldErrors?.message ? (
            <p className="mt-2 text-sm text-red-700">{state.fieldErrors.message}</p>
          ) : null}
        </div>
      </div>

      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm text-red-700">
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-6 pt-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-sm text-sm leading-relaxed text-ink/60">
          Submissions are routed to our team. We respond to qualified inquiries
          within two business days.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary disabled:opacity-60"
      aria-disabled={pending}
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M1 7h12m0 0L7.5 1.5M13 7l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
  error?: string;
};

function Field({ id, name, label, type = "text", autoComplete, required, className, error }: FieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true" className="ml-1 text-ink/30">*</span> : null}
      </Label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="field mt-1"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink/60"
    >
      {children}
    </label>
  );
}
