import type { Experience } from "@/types/portfolio";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="relative grid min-w-0 gap-6 pl-10 md:grid-cols-[minmax(12rem,0.42fr)_minmax(0,1fr)] md:gap-10 md:pl-12">
      <span
        className="timeline-marker absolute top-2 left-0 z-10 flex size-4 items-center justify-center rounded-full border border-primary/60 bg-background"
        aria-hidden="true"
      >
        <span className="size-1.5 rounded-full bg-primary" />
      </span>

      <div className="min-w-0">
        <h3>{experience.company}</h3>
        <p className="mt-2 font-medium text-foreground">{experience.role}</p>
        <p className="mt-2 font-mono text-xs tracking-[0.06em] text-muted uppercase">
          <time dateTime={experience.startDate}>{experience.startDate}</time>
          {" — "}
          {experience.endDate ?? "Atual"}
        </p>
      </div>

      <div className="min-w-0 border-l border-border pl-5 md:pl-8">
        <p className="text-auxiliary font-semibold text-primary">Atuação</p>
        <p className="mt-3 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          {experience.description}
        </p>
      </div>
    </article>
  );
}
