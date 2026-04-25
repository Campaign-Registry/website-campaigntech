import { SignalMark } from "./SignalMark";

type WordmarkProps = {
  /** Render just the logotype without the link wrapper. */
  plain?: boolean;
  className?: string;
  markSize?: number;
};

/**
 * The wordmark pairs the concentric-ring signal mark with the company name.
 * Per the brand guide, the wordmark itself sets in Public Sans medium —
 * the mark, not typography, is the brand's visual signature.
 */
export function Wordmark({ plain, className = "", markSize = 22 }: WordmarkProps) {
  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SignalMark size={markSize} />
      <span className="font-sans font-medium tracking-tight">
        Campaign Tech AI
      </span>
    </span>
  );

  if (plain) return inner;

  return (
    <a
      href="#top"
      aria-label="Campaign Tech AI — home"
      className="inline-flex items-center text-ink transition-opacity hover:opacity-80"
    >
      {inner}
    </a>
  );
}
