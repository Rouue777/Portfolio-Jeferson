import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="portfolio-section-featured scroll-mt-18 overflow-hidden border-y border-border/50 bg-surface/40"
      aria-labelledby="projects-title"
    >
      <Container className="portfolio-container min-w-0">
        <header className="max-w-4xl" data-reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <p className="text-auxiliary font-semibold text-primary">
              PROJETOS
            </p>
          </div>

          <h2 id="projects-title" className="mt-5">
            Projetos selecionados
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Uma seleção de projetos desenvolvidos para aplicar conhecimentos de
            backend, frontend, bancos de dados e arquitetura de aplicações.
          </p>
        </header>

        <div
          className="mt-12 grid min-w-0 items-stretch gap-6 md:grid-cols-2 lg:gap-8"
          data-reveal
          data-reveal-delay="1"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
