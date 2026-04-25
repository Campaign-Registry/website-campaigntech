type SignalMarkProps = {
  size?: number;
  /** Override the parent monochrome color — used for product variants. */
  outerRingColor?: string;
  className?: string;
};

/**
 * Concentric-ring signal mark from the brand guide.
 *
 *   • Solid core
 *   • Inner ring (close-in) and outer ring (further out), both breathing on 4s
 *   • Soft emitter pulse running outward from the core every 3s
 *
 * Parent form is fully monochrome in Signal Forest. Product variants may shift
 * the outer ring color; the inner ring and core stay constant — signaling the
 * shared infrastructure underneath.
 */
export function SignalMark({
  size = 22,
  outerRingColor,
  className = "",
}: SignalMarkProps) {
  return (
    <span
      className={`signal-mark ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        className="overflow-visible"
      >
        <circle
          cx="16"
          cy="16"
          r="13"
          stroke={outerRingColor ?? "currentColor"}
          strokeWidth="1.4"
          className="ring-2"
        />
        <circle
          cx="16"
          cy="16"
          r="8"
          stroke="currentColor"
          strokeWidth="1.4"
          className="ring-1"
        />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
      <span className="pulse" />
    </span>
  );
}
