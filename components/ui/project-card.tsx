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
        className="project-visual relative flex min-h-36 items-center justify-center overflow-hidden border-b border-border bg-surface"
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:2rem_2rem]" />
        <div className="absolute top-4 left-4 flex gap-1.5">
          <span className="size-2 rounded-full bg-muted/40" />
          <span className="size-2 rounded-full bg-secondary/60" />
          <span className="size-2 rounded-full bg-primary/70" />
        </div>
        <span className="relative font-mono text-3xl font-semibold tracking-[-0.12em] text-primary/80">
          {"{ }"}
        </span>
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
