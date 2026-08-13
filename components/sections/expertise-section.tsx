import { TechnologyBadge } from "@/components/ui/technology-badge";
import { expertise } from "@/data/expertise";

export function ExpertiseSection() {
  return (
    <div className="min-w-0">
        <header className="max-w-3xl" data-reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <p className="text-auxiliary font-semibold text-primary">
              ESPECIALIDADES
            </p>
          </div>

          <h2 id="expertise-title" className="mt-5">
            Tecnologias e áreas em que atuo
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Tecnologias e áreas em que venho desenvolvendo experiência prática
            na construção de aplicações e sistemas web.
          </p>
        </header>

        <div
          className="mt-10 grid min-w-0 gap-4 md:grid-cols-3"
          data-reveal
          data-reveal-delay="1"
        >
          {expertise.map((item, index) => {
            const isToolsCard = item.title === "Tools & Development";

            return (
              <article
                key={item.title}
                className={`portfolio-card group min-w-0 p-[clamp(1.125rem,2.5vw,1.75rem)] ${
                  isToolsCard ? "md:col-span-3" : ""
                }`}
              >
                <div
                  className={`flex min-w-0 gap-4 ${
                    isToolsCard
                      ? "flex-col sm:flex-row sm:items-center sm:justify-between"
                      : "flex-col"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-9 shrink-0 items-center justify-center rounded-button border border-primary/25 bg-primary/8 font-mono text-xs text-primary"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-6">
                      {item.description}
                    </p>
                  </div>

                  <ul
                    className={`flex min-w-0 flex-wrap gap-2 ${
                      isToolsCard ? "sm:max-w-xl sm:justify-end" : ""
                    }`}
                    aria-label={`Tecnologias de ${item.title}`}
                  >
                    {item.technologies.map((technology) => (
                      <li key={technology}>
                        <TechnologyBadge name={technology} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
    </div>
  );
}
