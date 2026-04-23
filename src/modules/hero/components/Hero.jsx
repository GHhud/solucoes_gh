import { ArrowRight } from 'lucide-react';
import { MeshGradient } from '@paper-design/shaders-react';
import Button from '../../../components/ui/Button';

export default function Hero({ onContact }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <MeshGradient
          className="w-full h-full opacity-40"
          colors={["#0A0A0F", "#1e1e26", "#8B5CF6", "#3B82F6"]}
          speed={0.5}
          backgroundColor="#0A0A0F"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
          <span className="text-white/90">Automação · IA · Sistemas</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-8 leading-[1.1] text-white">
          Sistemas, Automação e Agentes de IA para{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#60A5FA]">
            escalar empresas.
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#CBD5E1] max-w-2xl mb-12 leading-relaxed">
          Catálogo de soluções em automação, sistemas e inteligência artificial com preços transparentes.
          Construímos a infraestrutura digital do seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button as="a" href="#solucoes" variant="primary" size="lg">
            Ver Soluções <ArrowRight size={20} aria-hidden="true" />
          </Button>
          <Button variant="secondary" size="lg" onClick={onContact}>
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
}
