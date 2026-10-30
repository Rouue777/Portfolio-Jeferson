import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
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
}, 
  {
  title: "Jarvis",
  image: "/capaprojetojarvis.png",
  description:
    "Assistente virtual para desktop com inteligência artificial e automação. Desenvolvi a integração com o Spotify, permitindo controlar a experiência musical por comandos de voz, incluindo reprodução, gerenciamento de faixas e controle inteligente de volume, tornando a interação com o assistente mais fluida e intuitiva.",
  technicalContext:
    "Contribuição em projeto open source, com foco na expansão das capacidades do assistente por meio da integração com o Spotify. A implementação contempla comandos para reprodução e controle de músicas, além de ajustes relativos de volume, permitindo interpretar solicitações como aumentar ou diminuir o volume gradualmente. O trabalho envolveu análise da base de código existente, integração com serviço externo e desenvolvimento de funcionalidades alinhadas à arquitetura do projeto.",
   technologies: [
    "Python",
    "AI Integration",
    "Spotify Web API",
    "Voice Commands",
    "Modular Architecture",
    "Git",
    "GitHub",
  ],
  liveUrl: "https://jgm-source.github.io/jarvis-opensource/instalacao.html",
  githubUrl: "https://github.com/Rouue777/Jarvis-v2",
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
];
