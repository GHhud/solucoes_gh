import { CheckCircle2, X, ArrowRight } from 'lucide-react';
import Modal from '../../../components/ui/Modal';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

export default function ServiceDetailModal({ service, onClose, onContact }) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <Modal open={!!service} onClose={onClose} labelledBy="service-modal-title">
      <div className="p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-transparent border border-[#8B5CF6]/30 shrink-0">
            <Icon size={32} className="text-[#A78BFA]" aria-hidden="true" />
          </div>
          <div>
            <Badge tone="purple" className="mb-2">{service.tag}</Badge>
            <h2 id="service-modal-title" className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {service.title}
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs text-[#94A3B8] uppercase tracking-[0.2em] font-semibold mb-2">Descrição da solução</h4>
            <p className="text-white leading-relaxed">{service.fullDesc}</p>
          </div>

          <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/15">
            <h4 className="text-sm text-red-400 font-semibold mb-1 flex items-center gap-2">
              <X size={16} aria-hidden="true" /> Problema que resolve
            </h4>
            <p className="text-white/85 text-sm leading-relaxed">{service.problem}</p>
          </div>

          <div>
            <h4 className="text-xs text-[#94A3B8] uppercase tracking-[0.2em] font-semibold mb-2">Para quem é indicado</h4>
            <div className="flex items-center gap-3 text-white bg-white/5 border border-white/10 px-4 py-3 rounded-lg">
              <CheckCircle2 size={18} className="text-[#22C55E] shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">{service.forWho}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
            <div className="p-5 rounded-2xl glass">
              <span className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                {service.monthly === 'Sem mensalidade' ? 'Preço Único' : 'Implementação'}
              </span>
              <span className="text-xl font-mono font-bold text-white">{service.implementation}</span>
            </div>
            <div className="p-5 rounded-2xl glass">
              <span className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Mensalidade</span>
              <span className="text-xl font-mono font-bold text-[#A78BFA]">{service.monthly}</span>
            </div>
          </div>

          <p className="text-xs text-[#94A3B8] leading-relaxed px-1">
            * A mensalidade inclui o uso do sistema e alterações/modificações mapeadas anteriormente. Alterações extras são pagas à parte.
          </p>
        </div>

        <div className="mt-8">
          <Button variant="primary" size="lg" className="w-full" onClick={onContact}>
            Falar com Especialista <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Modal>
  );
}
