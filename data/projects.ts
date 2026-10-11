import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    title: "Comida Feliz",
    image: "/capaprojetocomidafeliz.png",
    description:
      "Sistema web para gerenciamento de pedidos de um restaurante, desenvolvido com foco em organização de pedidos, regras de negócio e integração entre frontend e backend.",
    technicalContext:
      "Projeto full stack desenvolvido para praticar arquitetura de aplicações, APIs, persistência de dados e integração entre frontend e backend.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    liveUrl: "https://comida-feliz-web.onrender.com/login",
    githubUrl: "https://github.com/Rouue777/comida-feliz-api",
  },
  {
    title: "Help Desk API",
    image: "/capaprojetohelpdesk.png",
    description:
      "API para gerenciamento de tickets de suporte, com autenticação, controle de usuários, tickets, comentários e registros de operações.",
    technicalContext:
      "Projeto backend desenvolvido para aplicar modelagem de sistemas, autenticação, autorização, validação, persistência de dados e organização de uma API utilizando NestJS.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Bcrypt",
      "Docker",
      "Swagger",
    ],

    liveUrl: "https://helpdeskapi-e7cx.onrender.com/api",
    githubUrl: "https://github.com/Rouue777/helpDeskApi",
  },
  {
  title: "DevFlow",
  image: "/capaprojetodevflow.png",
  description:
    "Sistema full stack para gerenciamento de projetos e tarefas, com autenticação, controle de permissões e regras de negócio para organizar o fluxo de trabalho das equipes.",
  technicalContext:
    "Projeto full stack desenvolvido com foco em arquitetura backend, modelagem de dados, APIs REST, autenticação JWT, controle de acesso, testes automatizados e integração contínua.",
  technologies: [
    "NestJS",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Jest",
    "GitHub Actions",
  ],
  liveUrl: "https://devflow-web-ifa1.onrender.com",
  githubUrl: "https://github.com/Rouue777/devflow-api",
}
];
