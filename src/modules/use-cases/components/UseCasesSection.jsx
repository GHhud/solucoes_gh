import SectionHeader from '../../../components/ui/SectionHeader';
import { USE_CASES } from '../data/useCases';

export default function UseCasesSection() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute -top-20 right-1/3 w-[420px] h-[420px] bg-[#8B5CF6]/10 rounded-full blur-[140px] animate-drift-glow pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <SectionHeader
          eyebrow="Casos de Uso"
          title="Para Quem Construímos"
          description="Segmentos que já usam nossas soluções para escalar operação."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USE_CASES.map((uc) => {
            const Icon = uc.icon;
            return (
              <div key={uc.segment} className="p-8 rounded-3xl glass hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] transition-[background-color,border-color,box-shadow] duration-250 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.25)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                    <Icon size={24} className="text-[#A78BFA]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight mt-1">{uc.segment}</h3>
                </div>
                <p className="text-[#94A3B8] leading-relaxed mb-5">{uc.scenario}</p>
                <div className="flex flex-wrap gap-2">
                  {uc.solutions.map((sol) => (
                    <span key={sol} className="text-xs font-medium px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/25">
                      {sol}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
