import { 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Users, 
  Briefcase, 
  BookOpen, 
  TrendingUp,
  FileText,
  PieChart,
  Bell,
  CheckCircle2
} from 'lucide-react';

export const navLinks = [
  { name: 'Funcionalidades', path: '/features' },
  { name: 'Planos', path: '/pricing' },
  { name: 'Sobre', path: '/about' },
];

export const heroContent = {
  title: "A plataforma que simplifica a vida do MEI.",
  subtitle: "Assessoria empresarial integrada, contabilidade simples, automações, insights e suporte para quem empreende sozinho.",
  ctaPrimary: "Criar Conta Grátis",
  ctaSecondary: "Conhecer Planos"
};

export const featuresList = [
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Assistente de Gestão",
    description: "Organize seu dia a dia com ferramentas que priorizam o que realmente importa."
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Emissão Simplificada",
    description: "Emita notas fiscais em segundos, sem burocracia e com preenchimento automático."
  },
  {
    icon: <PieChart className="w-6 h-6 text-primary" />,
    title: "Controle Financeiro",
    description: "Fluxo de caixa visual, categorização de despesas e relatórios fáceis de entender."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Educação Empresarial",
    description: "Conteúdos rápidos e práticos para você aprender a gerir melhor o seu negócio."
  },
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Alertas Inteligentes",
    description: "Nunca mais pague multas. Avisamos sobre DAS, Declaração Anual e outras obrigações."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Automação de Tarefas",
    description: "Automatize rotinas repetitivas e ganhe tempo para focar nas vendas."
  }
];

export const pricingPlans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Para quem está começando.",
    features: ["Emissão de NF-e (limitado)", "Controle de DAS", "Suporte via comunidade"],
    highlight: false,
    cta: "Começar Agora"
  },
  {
    name: "Essencial",
    price: "R$ 29,90",
    period: "/mês",
    description: "Tudo para organizar sua rotina.",
    features: ["Emissão de NF-e ilimitada", "Fluxo de Caixa Completo", "Relatórios Mensais", "Suporte via Chat"],
    highlight: true,
    cta: "Assinar Essencial"
  },
  {
    name: "Completo",
    price: "R$ 59,90",
    period: "/mês",
    description: "Assessoria total e automação.",
    features: ["Tudo do Essencial", "Consultoria com Contador", "Conciliação Bancária", "Clube de Vantagens"],
    highlight: false,
    cta: "Assinar Completo"
  }
];

export const testimonials = [
  {
    name: "Ana Silva",
    role: "Marketing Digital",
    content: "A Promoven One mudou minha forma de ver a contabilidade. Tudo é muito visual e simples."
  },
  {
    name: "Carlos Mendes",
    role: "Prestador de Serviços",
    content: "O assistente de gestão me salva horas toda semana. Recomendo para todo MEI."
  }
];
