import SectionHeader from '../../../components/ui/SectionHeader';
import { STEPS } from '../data/steps';

export default function ProcessSection() {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          eyebrow="Processo"
          title="Como Trabalhamos"
          description="Método claro em 4 etapas — do diagnóstico à otimização contínua."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.num} className="relative p-8 rounded-3xl glass hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] transition-[background-color,border-color] duration-250">
              <span className="block font-mono text-sm font-semibold text-[#A78BFA] mb-4">{step.num}</span>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
