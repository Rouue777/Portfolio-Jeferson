import { education } from "@/data/education";

export function EducationSection() {
  return (
    <div className="min-w-0">
        <header className="max-w-3xl" data-reveal>
          <h2 id="education-title">
            Formação acadêmica
          </h2>
        </header>

        <div className="mt-10" data-reveal data-reveal-delay="1">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.course}-${item.startDate}`}
              className="portfolio-card min-w-0 p-[clamp(1.25rem,3vw,1.875rem)]"
            >
              <div className="grid min-w-0 gap-7">
                <div className="flex min-w-0 gap-4 sm:gap-5">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-button border border-primary/25 bg-primary/8 text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
                      <path d="M7 12.2V17c2.8 2 7.2 2 10 0v-4.8" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <h3>{item.course}</h3>
                    <p className="mt-2 text-base font-medium text-foreground">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex min-w-0 flex-col items-start gap-3 border-t border-border pt-5">
                  <p className="font-mono text-sm whitespace-nowrap text-muted">
                    <time dateTime={item.startDate}>{item.startDate}</time>
                    {" — "}
                    {item.endDate ? (
                      <time dateTime={item.endDate}>{item.endDate}</time>
                    ) : (
                      "Atual"
                    )}
                  </p>

                  <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-xs font-semibold text-foreground">
                    <span
                      className="size-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {item.status}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
    </div>
  );
}
