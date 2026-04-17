import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2
              id="contact-title"
              className="mt-6 font-sans font-light tracking-tightest-2 text-display-md text-ink"
            >
              Let's talk about what you're <span className="serif-emph">building</span>.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/75">
              We work with campaigns, party committees, and allied organizations
              that take information integrity seriously. Tell us a little about
              your work and we'll reach out to schedule a briefing.
            </p>

            <div className="mt-12 space-y-6 border-t border-ink/10 pt-10">
              <ContactDetail label="Direct" value="hello@campaigntech.ai" href="mailto:hello@campaigntech.ai" />
              <ContactDetail label="Response" value="Within two business days" />
              <ContactDetail label="Discretion" value="All inquiries held in confidence" />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="font-serif text-xl italic text-ink">{value}</span>
  );
  return (
    <div className="flex flex-col gap-1">
      <span className="eyebrow text-ink/50">{label}</span>
      {href ? (
        <a href={href} className="link-underline w-fit">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
