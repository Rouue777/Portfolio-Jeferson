import type { Expertise } from "@/types/portfolio";

export const expertise: readonly Expertise[] = [
  {
    title: "Backend",
    description: "Desenvolvimento de serviços e APIs para aplicações web.",
    technologies: ["Node.js", "NestJS", "TypeScript", "APIs REST"],
  },
  {
    title: "Database",
    description: "Persistência e acesso organizado aos dados das aplicações.",
    technologies: ["PostgreSQL", "Prisma", "MySQL"],
  },
  {
    title: "Frontend",
    description: "Construção de interfaces modernas para sistemas web.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Development",
    description:
      "Ferramentas de apoio ao desenvolvimento, documentação e entrega.",
    technologies: ["Git", "GitHub", "Docker", "Postman", "Swagger"],
  },
];
