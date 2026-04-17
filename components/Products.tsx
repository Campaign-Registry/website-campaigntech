import { Reveal } from "./Reveal";

export function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="relative pt-14 pb-28 md:pt-20 md:pb-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow">Products</p>
              <h2
                id="products-title"
                className="mt-6 font-sans font-light tracking-tightest-2 text-display-lg text-ink"
              >
                Built for the way campaigns actually{" "}
                <span className="serif-emph">work</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-ink/75">
                We make the information the world sees about a campaign
                trustworthy — and the work happening behind it controlled.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 space-y-6 md:mt-24 md:space-y-10">
          <ProductCard
            titlePrefix="Campaign"
            titleEmph="Registry"
            positioning="Verified political information, structured for AI."
            body="Search, answer engines, and agents increasingly shape how voters, journalists, and staffers find information. Campaign Registry is a verified source layer — campaign-controlled, campaign-verified content, structured for retrieval by modern AI systems. Today it powers answer engine and generative engine optimization. Tomorrow it becomes the agentic access point for trusted political information."
            features={[
              "AI-ready structured data",
              "Campaign-controlled verification",
              "Retrieval-optimized architecture",
              "Built for agentic access",
            ]}
          />

          <ProductCard
            titlePrefix="Campaign"
            titleEmph="Vault"
            positioning="Secure storage. Streamlined approvals."
            body="Campaign content moves fast — and usually through dozens of hands before it clears. Campaign Vault gives teams a secure, auditable home for sensitive materials and a faster path to approval, replacing inbox chaos and scattered drives with a single source of truth built for political workflows."
            features={[
              "Streamlined approval workflows",
              "Encrypted document and asset storage",
              "Granular, role-based access",
              "Audit-ready activity trails",
            ]}
          />
        </div>

        <Reveal delay={120} className="mt-20 md:mt-28">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-ink/70">
              Offered by invitation to qualified campaigns, party committees,
              and allied organizations.
            </p>
            <a href="#contact" className="btn-primary">
              Request a briefing
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type ProductCardProps = {
  titlePrefix: string;
  titleEmph: string;
  positioning: string;
  body: string;
  features: string[];
};

function ProductCard({
  titlePrefix,
  titleEmph,
  positioning,
  body,
  features,
}: ProductCardProps) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-bone-100/55 p-8 transition-colors duration-500 ease-out-expo hover:border-forest-800/30 md:p-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-sans text-4xl font-light tracking-tight text-ink md:text-5xl">
              {titlePrefix}{" "}
              <span className="serif-emph">{titleEmph}</span>
            </h3>
            <p className="mt-5 max-w-sm font-serif text-xl italic leading-snug text-forest-800">
              {positioning}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-ink/75 md:text-[1.0625rem]">
              {body}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[0.9375rem] text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1 w-1 flex-none rounded-full bg-forest-700"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-forest-100/50 opacity-0 blur-2xl transition-opacity duration-700 ease-out-expo group-hover:opacity-100"
        />
      </article>
    </Reveal>
  );
}
