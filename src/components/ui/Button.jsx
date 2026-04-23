export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const base = variant === 'primary' ? 'btn-liquid' : variant === 'green' ? 'btn-cta-green' : 'btn-liquid-secondary';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm font-medium',
    lg: 'px-8 py-4 text-base font-semibold',
  };
  return (
    <Tag className={`${base} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
