import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { TechnologyBadge } from "@/components/ui/technology-badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <article className="portfolio-card flex h-full min-w-0 flex-col overflow-hidden p-0">
      <div
        className="project-visual relative aspect-video overflow-hidden border-b border-border bg-surface"
      >
        <Image
          src={project.image}
          alt={`Capa do projeto ${project.title}`}
          fill
          className="object-cover object-center"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-card">
        <h3>{project.title}</h3>
        <p className="mt-3.5 text-base leading-7">{project.description}</p>

        <div className="mt-5 border-l border-primary/40 pl-4">
          <p className="text-auxiliary font-semibold text-primary">
            Contexto técnico
          </p>
          <p className="mt-2 text-sm leading-6">{project.technicalContext}</p>
        </div>

        <ul
          className="mt-6 flex min-w-0 flex-wrap gap-2"
          aria-label={`Tecnologias do projeto ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechnologyBadge name={technology} />
            </li>
          ))}
        </ul>

        {hasLinks ? (
          <div className="mt-auto flex flex-col gap-3 border-t border-border pt-7 sm:flex-row">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="https://helpdeskapi-e7cx.onrender.com/api"
                rel="noopener noreferrer"
                className="button-base button-primary w-full sm:w-auto"
                aria-label={`Ver o projeto ${project.title} (abre em nova aba)`}
              >
                Ver projeto
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="https://github.com/Rouue777/helpDeskApi"
                rel="noopener noreferrer"
                className="button-base button-secondary w-full sm:w-auto"
                aria-label={`Ver ${project.title} no GitHub (abre em nova aba)`}
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
