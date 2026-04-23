export default function Badge({ children, tone = 'purple', className = '' }) {
  const tones = {
    purple: 'bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/25',
    green: 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/25',
    neutral: 'bg-white/5 text-[#CBD5E1] border-white/10',
  };
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
