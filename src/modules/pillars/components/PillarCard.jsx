export default function PillarCard({ pillar }) {
  const Icon = pillar.icon;
  return (
    <div className="group p-6 rounded-2xl glass hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] transition-[background-color,border-color,box-shadow] duration-250 hover:shadow-[0_0_24px_rgba(139,92,246,0.18)] flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-colors duration-200 group-hover:border-[#8B5CF6]/50 group-hover:text-[#A78BFA] group-hover:bg-[#8B5CF6]/10">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{pillar.title}</h3>
      <p className="text-sm text-[#94A3B8] leading-relaxed">{pillar.desc}</p>
    </div>
  );
}
