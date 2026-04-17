export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-44 md:pb-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <p className="eyebrow animate-fade-in">
          Campaign Tech AI · Political-grade infrastructure
        </p>

        <h1 className="mt-8 font-sans font-light tracking-tightest-2 text-display-xl text-ink animate-fade-up [text-wrap:balance]">
          <span className="block">Verified infrastructure</span>
          <span className="block">
            for the <span className="serif-emph">modern campaign</span>.
          </span>
        </h1>

        <p
          className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-ink/75 md:text-xl animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          Campaign Tech AI builds the trusted information layer and secure
          workflow tools modern political organizations rely on — engineered for
          the era of agentic AI, designed for the pace of a live campaign.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          <a href="#contact" className="btn-primary">
            Request access
            <ArrowRight />
          </a>
          <a href="#products" className="btn-ghost">
            Explore the platform
          </a>
        </div>

        {/* Refined meta strip — reinforces credibility without logos. */}
        <div
          className="mt-24 grid grid-cols-1 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3 animate-fade-in"
          style={{ animationDelay: "340ms" }}
        >
          <MetaItem
            label="Verified"
            body="Campaign-controlled sources, signed and auditable end-to-end."
          />
          <MetaItem
            label="Secure"
            body="Encrypted storage, granular access, and approval workflows by default."
          />
          <MetaItem
            label="AI-ready"
            body="Retrieval-first architecture, engineered for agentic systems."
          />
        </div>
      </div>
    </section>
  );
}

function MetaItem({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="eyebrow text-forest-800">{label}</span>
      <p className="text-[0.9375rem] leading-relaxed text-ink/70">{body}</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
    >
      <path
        d="M1 7h12m0 0L7.5 1.5M13 7l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
