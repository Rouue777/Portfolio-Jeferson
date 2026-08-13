import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    title: "Comida Feliz",
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
    liveUrl: "https://helpdeskapi-e7cx.onrender.com/api",
    githubUrl: "https://github.com/Rouue777/helpDeskApi",
  },
  {
    title: "Help Desk API",
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
];
