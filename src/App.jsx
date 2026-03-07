import React, { useState, useEffect } from 'react';
import {
  Zap, Monitor, Brain, Cloud, BarChart,
  Layout, Code, Users, Briefcase,
  MessageSquare, Calendar, GitBranch,
  CheckCircle2, X, ArrowRight, Building2,
  Menu
} from 'lucide-react';
import { MeshGradient } from "@paper-design/shaders-react";

// --- Dados do PRD ---

const PILLARS = [
  { id: 1, title: 'Automação', desc: 'Processos que rodam sozinhos, liberando seu time', icon: Zap },
  { id: 2, title: 'Sistemas', desc: 'Plataformas sob medida que se adaptam ao negócio', icon: Monitor },
  { id: 3, title: 'Inteligência Artificial', desc: 'Agentes inteligentes que qualificam, atendem e convertem', icon: Brain },
  { id: 4, title: 'SaaS', desc: 'Produtos digitais escaláveis prontos para o mercado', icon: Cloud },
  { id: 5, title: 'CRM', desc: 'Gestão de leads e relacionamento com inteligência', icon: BarChart },
];

const SERVICES = [
  {
    id: 1,
    icon: Layout,
    title: "Landing Pages (LP)",
    tag: "Conversão",
    shortDesc: "Páginas de alta conversão para campanhas de tráfego pago.",
    fullDesc: "Páginas de alta conversão para campanhas de tráfego pago, lançamentos e captação de leads. Foco total em UI/UX e copywriting persuasivo para maximizar o ROI dos seus anúncios.",
    problem: "Campanhas sem página otimizada perdem até 70% dos cliques.",
    forWho: "Infoprodutores, agências, empresas com campanhas ativas",
    implementation: "R$ 1.300",
    monthly: "R$ 200/mês"
  },
  {
    id: 2,
    icon: Monitor,
    title: "Sites Institucionais",
    tag: "Presença Digital",
    shortDesc: "Sites modernos e responsivos que transmitem credibilidade.",
    fullDesc: "Sites modernos e responsivos que transmitem credibilidade e posicionam a marca no mercado digital. Desenvolvidos com as melhores práticas de SEO e performance (Lighthouse > 90).",
    problem: "Empresas sem site perdem credibilidade e oportunidades de negócio online.",
    forWho: "PMEs, startups, profissionais liberais",
    implementation: "R$ 3.000",
    monthly: "R$ 400/mês"
  },
  {
    id: 3,
    icon: Users,
    title: "CRM Leads White Label",
    tag: "Gestão",
    shortDesc: "Sistema de gestão de leads com etiquetamento inteligente.",
    fullDesc: "Sistema de gestão de leads com etiquetamento inteligente, funis de vendas e dashboards de performance. Permite organizar todo o pipeline comercial num único local.",
    problem: "Leads perdidos no WhatsApp, planilhas desorganizadas e falta de acompanhamento comercial.",
    forWho: "Equipes comerciais, clínicas, empresas de serviço",
    implementation: "R$ 3.000+",
    monthly: "R$ 400/mês"
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Micro SaaS",
    tag: "SaaS",
    shortDesc: "Soluções SaaS de nicho e alta eficiência.",
    fullDesc: "Desenvolvimento de Micro SaaS focados em resolver problemas específicos de nicho com alta eficiência e baixo custo operacional.",
    problem: "Falta de ferramentas focadas em necessidades específicas de micro-operações.",
    forWho: "Empreendedores digitais, pequenas operações",
    implementation: "R$ 6.000",
    monthly: "R$ 600/mês"
  },
  {
    id: 5,
    icon: BarChart,
    title: "Gestão Financeira",
    tag: "Sistemas",
    shortDesc: "Sistema de controle com dashboards e relatórios.",
    fullDesc: "Sistema de controle financeiro com dashboards interativos, relatórios automáticos e visão financeira completa. Automatize cobranças, emissão de faturas e conciliação bancária.",
    problem: "Falta de visibilidade financeira e controle manual em planilhas.",
    forWho: "PMEs, freelancers, startups",
    implementation: "R$ 3.500+",
    monthly: "R$ 400/mês"
  },
  {
    id: 6,
    icon: Code,
    title: "SaaS Customizado",
    tag: "Desenvolvimento",
    shortDesc: "Desenvolvimento de plataformas completas e personalizadas.",
    fullDesc: "Desenvolvimento de plataformas SaaS completas e personalizadas, da arquitetura ao deploy. Criamos o seu produto digital do zero com tecnologias modernas e escaláveis.",
    problem: "Soluções genéricas não atendem processos únicos e complexos.",
    forWho: "Empresas com processos específicos, startups SaaS",
    implementation: "10k +",
    monthly: "R$ 1.000/mês"
  },
  {
    id: 7,
    icon: MessageSquare,
    title: "Agente IA de Pré-Atendimento",
    tag: "IA",
    shortDesc: "Agente que qualifica leads via chat e direciona ao comercial.",
    fullDesc: "Agente inteligente que qualifica leads via chat, coleta informações vitais e direciona ao time comercial. Funciona 24/7 no WhatsApp, Site ou Instagram.",
    problem: "Time comercial sobrecarregado com leads não qualificados.",
    forWho: "Clínicas, imobiliárias, empresas de serviço",
    implementation: "R$ 3.000",
    monthly: "R$ 1.000/mês"
  },
  {
    id: 8,
    icon: Calendar,
    title: "Agente IA + Agendamento",
    tag: "IA",
    shortDesc: "IA que qualifica e realiza agendamento automático.",
    fullDesc: "IA que qualifica leads e realiza agendamento automático integrado com Google Calendar ou Calendly. O bot consulta a disponibilidade real e marca a reunião sem intervenção humana.",
    problem: "Perda de leads por demora no agendamento e follow-up manual.",
    forWho: "Clínicas, consultorias, prestadores de serviço",
    implementation: "R$ 4.000",
    monthly: "R$ 1.000/mês"
  },
  {
    id: 9,
    icon: GitBranch,
    title: "Agente IA Avançado",
    tag: "IA Avançada",
    shortDesc: "IA com múltiplas ferramentas e integrações com APIs.",
    fullDesc: "IA com múltiplas ferramentas, integrações com APIs externas e automações complexas. Capacidade de consultar bancos de dados internos, emitir propostas e tomar decisões.",
    problem: "Processos complexos que exigem múltiplas integrações e decisões inteligentes.",
    forWho: "Empresas de médio/grande porte, operações complexas",
    implementation: "R$ 6.000",
    monthly: "R$ 2.000/mês"
  },
  {
    id: 10,
    icon: Brain,
    title: "Agente IA + CRM White Label",
    tag: "Solução Completa",
    shortDesc: "CRM personalizado + agente de IA integrado.",
    fullDesc: "CRM personalizado + agente de IA integrado para qualificação, atendimento e automação numa única plataforma. A solução definitiva para escalar operações comerciais.",
    problem: "Ferramentas desconectadas, falta de inteligência nos processos comerciais.",
    forWho: "Agências, revendedores de soluções, operações robustas",
    implementation: "R$ 8.000",
    monthly: "R$ 2.500/mês"
  },
  {
    id: 11,
    icon: Zap,
    title: "Automação de Processos",
    tag: "Automação",
    shortDesc: "Otimização e integração de fluxos de trabalho operacionais.",
    fullDesc: "Mapeamento e automação de processos internos complexos utilizando ferramentas como Make, n8n ou Zapier. Integramos suas ferramentas atuais (ERP, CRM, Planilhas) para eliminar tarefas repetitivas.",
    problem: "Processos manuais lentos, erro humano e falta de produtividade.",
    forWho: "Empresas com fluxos operacionais repetitivos",
    implementation: "Personalizado",
    monthly: "Personalizado"
  }
];

const STEPS = [
  { num: '01', title: 'Diagnóstico', desc: 'Mapeamos seus processos, dores e oportunidades de automação. Entendemos o cenário atual e os objetivos do negócio.' },
  { num: '02', title: 'Planejamento', desc: 'Desenhamos a arquitetura da solução ideal, definindo tecnologias, integrações e cronograma de entrega.' },
  { num: '03', title: 'Implementação', desc: 'Construímos e entregamos a solução com acompanhamento total, testes e validação em cada etapa.' },
  { num: '04', title: 'Otimização', desc: 'Monitoramento contínuo, análise de performance e melhorias baseadas em dados reais de uso.' }
];

const USE_CASES = [
  { icon: Building2, segment: 'Clínicas', scenario: 'Agendamento automático, qualificação de pacientes e CRM médico', solutions: ['Agente IA + Agendamento', 'CRM de Leads'] },
  { icon: Users, segment: 'Empresas de Serviço', scenario: 'CRM comercial, automação de follow-up e gestão de propostas', solutions: ['CRM de Leads', 'Agente IA Pré-Atendimento'] },
  { icon: Monitor, segment: 'Infoprodutores', scenario: 'LPs de alta conversão, funis automatizados e gestão financeira', solutions: ['Landing Pages', 'Micro SaaS Financeiro'] },
  { icon: Briefcase, segment: 'Agências', scenario: 'CRM White Label, soluções de IA para clientes e SaaS', solutions: ['CRM WL', 'Agente IA + CRM WL', 'SaaS Custom'] }
];

// --- Componentes ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efeito para navegação transparente/opaca
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Adicionar scroll suave à página
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Prevenir scroll do body quando o modal está aberto
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  const handleWhatsApp = () => {
    // Redirecionamento simulação
    alert("A redirecionar para o WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC] font-sans selection:bg-[#8B5CF6] selection:text-white">

      {/* --- Navegação --- */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-transparent py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src="/logo.png" alt="Growth Hub Logo" className="h-16 w-auto" />
            <span className="font-bold text-xl tracking-tight">Growth Hub</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
            <button onClick={handleWhatsApp} className="px-5 py-2.5 btn-liquid-secondary text-sm font-medium">
              Falar com Especialista
            </button>
          </div>

          {/* Menu Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden">
            <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} className="text-[#94A3B8] hover:text-white">Soluções</a>
            <button onClick={handleWhatsApp} className="px-6 py-3 btn-liquid w-3/4">
              Falar com Especialista
            </button>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Mesh Gradient */}
        <div className="absolute inset-0 z-0">
          <MeshGradient
            className="w-full h-full opacity-40"
            colors={["#0A0A0F", "#1e1e26", "#8B5CF6", "#3B82F6"]}
            speed={0.5}
            backgroundColor="#0A0A0F"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center animate-[fade-in_1s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#8B5CF6]/30 text-[#8B5CF6] text-sm font-medium mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
            Automação · IA · Sistemas
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl mb-8 leading-[1.15] text-white">
            Sistemas, Automação e Agentes de IA para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#60A5FA]">
              escalar empresas.
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#94A3B8] max-w-2xl mb-12 leading-relaxed">
            Catálogo de soluções em automação, sistemas e inteligência artificial com preços transparentes. Construímos a infraestrutura digital do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#solucoes" className="px-8 py-4 btn-liquid text-lg font-bold">
              Ver Soluções <ArrowRight size={20} />
            </a>
            <button onClick={handleWhatsApp} className="px-8 py-4 btn-liquid-secondary text-lg font-medium">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* --- O Que Fazemos --- */}
      <section className="py-24 bg-[#0A0A0F] relative border-t border-white/5 overflow-hidden">
        {/* Dynamic Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] animate-float-glow pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px] animate-drift-glow pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Fazemos</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">Os 5 pilares de atuação da Growth Hub para modernizar a sua operação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#8B5CF6]/50 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:border-[#8B5CF6]/50 group-hover:text-[#8B5CF6]">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#94A3B8]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Soluções / Serviços --- */}
      <section id="solucoes" className="py-24 relative overflow-hidden">
        {/* Background glow dynamic */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 animate-float-glow pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/4 animate-drift-glow pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold mb-4">Catálogo de Soluções</h2>
              <p className="text-[#94A3B8] max-w-2xl text-lg">
                Explore os nossos serviços, compreenda as faixas de preço e encontre a solução ideal para o seu momento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#8B5CF6]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.2)]">

                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5">
                    <service.icon size={24} className="text-[#8B5CF6]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#94A3B8] mb-8 flex-grow">{service.shortDesc}</p>

                <div className="space-y-3 mb-8 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#94A3B8]">
                      {service.monthly === "Sem mensalidade" ? "Preço Único" : "Implementação"}
                    </span>
                    <span className="font-mono font-medium text-white">{service.implementation}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#94A3B8]">Mensalidade</span>
                    <span className="font-mono font-medium text-white">{service.monthly}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3 btn-liquid-secondary !rounded-xl font-medium mt-auto"
                >
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- Footer --- */}
      <footer className="py-12 bg-[#050508] border-t border-white/5 text-center md:text-left">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Growth Hub Logo" className="h-12 w-auto" />
            <span className="font-bold text-lg">Growth Hub</span>
          </div>
          <p className="text-sm text-[#94A3B8]">
            © {new Date().getFullYear()} Growth Hub. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* --- Modal de Detalhes do Serviço --- */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-[fade-in_0.2s_ease-out]">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>

          <div className="relative bg-[#0A0A0F] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-[slide-up_0.3s_ease-out]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-transparent border border-[#8B5CF6]/30">
                  <selectedService.icon size={32} className="text-[#8B5CF6]" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 mb-2 inline-block">
                    {selectedService.tag}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedService.title}</h2>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-[#94A3B8] uppercase tracking-wider font-semibold mb-2">Descrição da Solução</h4>
                  <p className="text-white leading-relaxed">{selectedService.fullDesc}</p>
                </div>

                <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                  <h4 className="text-sm text-red-400 font-semibold mb-1 flex items-center gap-2">
                    <X size={16} /> Problema que resolve
                  </h4>
                  <p className="text-white/80 text-sm">{selectedService.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm text-[#94A3B8] uppercase tracking-wider font-semibold mb-2">Para quem é indicado</h4>
                  <div className="flex items-center gap-2 text-white bg-white/5 border border-white/10 px-4 py-3 rounded-lg">
                    <CheckCircle2 size={18} className="text-[#8B5CF6] shrink-0" />
                    <span className="text-sm font-medium">{selectedService.forWho}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="block text-sm text-[#94A3B8] mb-1">
                      {selectedService.monthly === "Sem mensalidade" ? "Preço Único" : "Implementação"}
                    </span>
                    <span className="text-xl font-mono font-bold text-white">{selectedService.implementation}</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="block text-sm text-[#94A3B8] mb-1">Mensalidade</span>
                    <span className="text-xl font-mono font-bold text-[#8B5CF6]">{selectedService.monthly}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#8B5CF6]/5 border border-[#8B5CF6]/10 mt-4">
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    * A mensalidade inclui o uso do sistema e alterações/modificações mapeadas anteriormente. Alterações extras são pagas à parte.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <button onClick={handleWhatsApp} className="w-full py-4 btn-liquid text-lg font-bold">
                  Falar com Especialista <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind Custom Animations via Style */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
