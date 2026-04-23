export default function GlassCard({ as: Tag = 'div', interactive = false, className = '', children, ...rest }) {
  const hover = interactive
    ? 'hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.25)] transition-[background-color,border-color,box-shadow] duration-250 cursor-pointer'
    : '';
  return (
    <Tag className={`glass rounded-3xl ${hover} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
