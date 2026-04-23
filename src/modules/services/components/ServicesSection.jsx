import { useState } from 'react';
import SectionHeader from '../../../components/ui/SectionHeader';
import ServiceCard from './ServiceCard';
import ServiceDetailModal from './ServiceDetailModal';
import { SERVICES } from '../data/services';

export default function ServicesSection({ onContact }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 animate-float-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/4 animate-drift-glow pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader
          eyebrow="Catálogo"
          title="Catálogo de Soluções"
          description="Explore os nossos serviços, compreenda as faixas de preço e encontre a solução ideal para o seu momento."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <ServiceDetailModal
        service={selected}
        onClose={() => setSelected(null)}
        onContact={() => { setSelected(null); onContact?.(); }}
      />
    </section>
  );
}
