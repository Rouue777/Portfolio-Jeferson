import { ExperienceItem } from "@/components/ui/experience-item";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <div className="min-w-0">
        <header className="max-w-3xl" data-reveal>
          <h2 id="experience-title">
            Experiência profissional
          </h2>
        </header>

        <ol
          className="relative mt-10 max-w-5xl min-w-0 space-y-12 before:absolute before:top-2 before:bottom-2 before:left-[0.4375rem] before:w-px before:bg-border/80 md:mt-12 md:space-y-14"
          data-reveal
          data-reveal-delay="1"
        >
          {experiences.map((experience) => (
            <li
              key={`${experience.company}-${experience.role}-${experience.startDate}`}
              className="min-w-0"
            >
              <ExperienceItem experience={experience} />
            </li>
          ))}
        </ol>
    </div>
  );
}
