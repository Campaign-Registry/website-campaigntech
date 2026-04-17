type WordmarkProps = {
  /** Render just the logotype without the link wrapper. */
  plain?: boolean;
  className?: string;
};

/**
 * "Campaign" — sans serif; "Tech AI" — italicized serif with underline.
 * The signature treatment. Used in the nav, footer, and emphasized copy.
 */
export function Wordmark({ plain, className = "" }: WordmarkProps) {
  const inner = (
    <span className={`inline-flex items-baseline gap-[0.3em] ${className}`}>
      <span className="font-sans font-medium tracking-tight">Campaign</span>
      <span className="serif-emph">Tech AI</span>
    </span>
  );

  if (plain) return inner;

  return (
    <a
      href="#top"
      aria-label="Campaign Tech AI — home"
      className="inline-flex items-baseline text-ink transition-opacity hover:opacity-80"
    >
      {inner}
    </a>
  );
}
