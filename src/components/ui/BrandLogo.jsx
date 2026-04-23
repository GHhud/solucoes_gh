export default function BrandLogo({
  size = 'md',
  showWordmark = true,
  className = '',
}) {
  const sizes = {
    sm: { symbol: 'h-7', wordmark: 'h-[14px]', gap: 'gap-2.5' },
    md: { symbol: 'h-9', wordmark: 'h-[18px]', gap: 'gap-3' },
    lg: { symbol: 'h-11', wordmark: 'h-[22px]', gap: 'gap-3.5' },
  };
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`} aria-label="Growth Hub">
      <img
        src="/gh-symbol.svg"
        alt=""
        aria-hidden="true"
        className={`${s.symbol} w-auto shrink-0 select-none`}
        draggable="false"
      />
      {showWordmark && (
        <img
          src="/gh-wordmark.svg"
          alt="Growth Hub"
          className={`${s.wordmark} w-auto select-none`}
          draggable="false"
        />
      )}
    </span>
  );
}
