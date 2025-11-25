export type Project = {
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  github?: string;
  image?: string;
  isPrivate?: boolean;
  longDescription?: string;
  features?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Bar-Som | Comanda & Mesas",
    description:
      "Plataforma para bares/restaurantes com comandas por mesa, pedidos em tempo real e fechamento de conta.",
    longDescription:
      "Este projeto foi desenvolvido para atender a demanda de um estabelecimento local que precisava modernizar o controle de pedidos. O sistema permite a abertura de comandas por mesa, lançamento de pedidos em tempo real pela equipe de garçons e fechamento de conta com cálculo automático. Embora tenha suporte para emissão de NFC-e, o cliente optou por utilizar apenas o módulo de gestão interna inicialmente.",
    features: [
      "Gestão de mesas e comandas em tempo real",
      "Painel administrativo para cadastro de produtos e cardápio",
      "Emissão de NFC-e (opcional)",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Tailwind"],
    isPrivate: true,
  },
  {
    title: "CRM Multi-Tenant",
    description:
      "CRM completo com hierarquia de papéis, autenticação segura e gestão de leads com visualização Kanban.",
    longDescription:
      "Um sistema de CRM (Customer Relationship Management) robusto e escalável, desenvolvido com arquitetura Multi-Tenant para atender múltiplos clientes em uma única instância. O foco principal foi a segurança e a hierarquia de dados, garantindo que cada tenant acesse apenas suas informações. Inclui um quadro Kanban interativo para gestão de leads e pipeline de vendas.",
    features: [
      "Arquitetura Multi-Tenant (dados isolados por cliente)",
      "Autenticação JWT com Refresh Token e 2FA",
      "Controle de acesso baseado em cargos (RBAC)",
      "Logging de atividades e auditoria de IP",
      "Pipeline de vendas visual (Kanban)",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js"],
    isPrivate: true,
  },
  {
    title: "VLApi | Gestão de Alunos",
    description: "API para automação de cadastro de alunos e geração de fichas em PDF.",
    longDescription:
      "Solução desenvolvida para modernizar o processo de matrícula de uma instituição. O sistema substituiu o preenchimento manual de fichas por um fluxo digital, onde os dados do aluno são coletados e validados, resultando na geração automática de um PDF pronto para assinatura. O foco do projeto foi a otimização do tempo e a organização dos registros.",
    features: [
      "Autenticação de usuários",
      "Cadastro completo de alunos",
      "Geração automática de PDF (Ficha de Matrícula)",
      "Automação de fluxo de trabalho manual",
    ],
    stack: ["NestJS", "TypeScript", "PDF Generation"],
    github: "https://github.com/brenoleonel/VLApi",
  },
];
