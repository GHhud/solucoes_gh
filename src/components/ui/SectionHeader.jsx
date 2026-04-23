export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left mx-0' : 'text-center mx-auto';
  return (
    <div className={`mb-16 max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA] mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">{title}</h2>
      {description && <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
