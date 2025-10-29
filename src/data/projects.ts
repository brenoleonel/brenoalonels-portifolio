export type Project = {
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  github?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Bar-Som | Comanda & Mesas",
    description:
      "Plataforma para bares/restaurantes com comandas por mesa, pedidos em tempo real, fechamento com geração de nota e dashboard administrativo.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Tailwind"],
    demo: "https://bar-som-demo.example.com",
    github: "https://github.com/brenoleonel/bar-som",
    image: "/images/proj1.png",
  },
  {
    title: "CRM Multi-Tenant",
    description:
      "CRM com hierarquia de papéis (Admin/Cliente/Funcionário), logging de IP, autenticação JWT, planos e permissões.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js"],
    demo: "https://crm-demo.example.com",
    github: "https://github.com/brenoleonel/crm",
    image: "/images/proj2.png",
  },
];
