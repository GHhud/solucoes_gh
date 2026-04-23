import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

export default function ServiceCard({ service, onOpen }) {
  const Icon = service.icon;
  return (
    <article className="flex flex-col h-full p-8 rounded-3xl glass transition-[background-color,border-color,box-shadow] duration-250 hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.28)]">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
          <Icon size={24} className="text-[#A78BFA]" aria-hidden="true" />
        </div>
        <Badge tone="purple">{service.tag}</Badge>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white leading-tight">{service.title}</h3>
      <p className="text-[#94A3B8] mb-8 flex-grow leading-relaxed">{service.shortDesc}</p>

      <dl className="space-y-3 mb-8 pt-6 border-t border-white/10">
        <div className="flex justify-between items-center text-sm">
          <dt className="text-[#94A3B8]">
            {service.monthly === 'Sem mensalidade' ? 'Preço Único' : 'Implementação'}
          </dt>
          <dd className="font-mono font-semibold text-white">{service.implementation}</dd>
        </div>
        <div className="flex justify-between items-center text-sm">
          <dt className="text-[#94A3B8]">Mensalidade</dt>
          <dd className="font-mono font-semibold text-[#A78BFA]">{service.monthly}</dd>
        </div>
      </dl>

      <Button variant="secondary" className="w-full !rounded-xl" onClick={() => onOpen(service)}>
        Ver Detalhes
      </Button>
    </article>
  );
}
