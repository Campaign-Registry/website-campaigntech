import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-bone-50">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 md:px-10 md:py-16">
        <div className="md:col-span-5">
          <Wordmark className="text-xl" />
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ink/60">
            Verified infrastructure for the modern campaign.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-ink/50">Platform</p>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            <li>
              <a href="#products" className="text-ink/75 hover:text-ink">
                Campaign <span className="serif-emph">Registry</span>
              </a>
            </li>
            <li>
              <a href="#products" className="text-ink/75 hover:text-ink">
                Campaign <span className="serif-emph">Vault</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-ink/50">Contact</p>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            <li>
              <a
                href="mailto:hello@campaigntech.ai"
                className="link-underline text-ink/80"
              >
                hello@campaigntech.ai
              </a>
            </li>
            <li>
              <a href="#contact" className="text-ink/75 hover:text-ink">
                Request access
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/5">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-6 py-8 text-xs text-ink/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {year} Campaign Tech AI. All rights reserved.</p>
          <p className="font-serif italic">
            Built for campaigns that take information integrity seriously.
          </p>
        </div>
      </div>
    </footer>
  );
}
