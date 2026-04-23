import { Building2, Users, Monitor, Briefcase } from 'lucide-react';

export const USE_CASES = [
  { icon: Building2, segment: 'Clínicas',             scenario: 'Agendamento automático, qualificação de pacientes e CRM médico', solutions: ['Agente IA + Agendamento', 'CRM de Leads'] },
  { icon: Users,     segment: 'Empresas de Serviço',  scenario: 'CRM comercial, automação de follow-up e gestão de propostas',    solutions: ['CRM de Leads', 'Agente IA Pré-Atendimento'] },
  { icon: Monitor,   segment: 'Infoprodutores',       scenario: 'LPs de alta conversão, funis automatizados e gestão financeira', solutions: ['Landing Pages', 'Micro SaaS Financeiro'] },
  { icon: Briefcase, segment: 'Agências',             scenario: 'CRM White Label, soluções de IA para clientes e SaaS',           solutions: ['CRM WL', 'Agente IA + CRM WL', 'SaaS Custom'] },
];
