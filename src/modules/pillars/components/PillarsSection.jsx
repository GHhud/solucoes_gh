import SectionHeader from '../../../components/ui/SectionHeader';
import PillarCard from './PillarCard';
import { PILLARS } from '../data/pillars';

export default function PillarsSection() {
  return (
    <section className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[120px] animate-float-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[100px] animate-drift-glow pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <SectionHeader
          eyebrow="Pilares"
          title="O Que Fazemos"
          description="Os 5 pilares de atuação da Growth Hub para modernizar a sua operação."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PILLARS.map((p) => <PillarCard key={p.id} pillar={p} />)}
        </div>
      </div>
    </section>
  );
}
