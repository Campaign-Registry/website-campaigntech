import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative pt-14 pb-28 md:pt-20 md:pb-40"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">Our mission</p>
            <h2
              id="about-title"
              className="mt-6 font-sans font-light tracking-tightest-2 text-display-md text-ink"
            >
              Trust, at the pace of a <span className="serif-emph">campaign</span>.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={120}>
            <div className="space-y-7 text-lg leading-relaxed text-ink/80">
              <p>
                Political campaigns run under extraordinary pressure — tight
                deadlines, high stakes, and an information landscape that is
                being rewritten by AI in real time. The tools most organizations
                rely on were not built for this moment.
              </p>
              <p>
                We build the infrastructure serious campaigns need to move fast
                without compromising control, security, or truth: a verified
                source layer for the AI era, and a secure home for the sensitive
                work that happens behind it.
              </p>
              <p>
                Campaign Tech AI is built by political technology veterans for
                teams that treat information integrity as a competitive
                advantage — and an obligation.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-ink/10 pt-10 sm:grid-cols-4">
              <Stat label="Verified" value="End-to-end" />
              <Stat label="Architecture" value="Retrieval-first" />
              <Stat label="Operations" value="Audit-ready" />
              <Stat label="Access" value="Invitation-only" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-serif text-2xl italic leading-none text-forest-800">
        {value}
      </div>
      <div className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink/60">
        {label}
      </div>
    </div>
  );
}
