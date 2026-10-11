const profileTopics = [
  "Backend",
  "APIs REST",
  "Arquitetura",
  "Database",
  "Full Stack",
] as const;

export function AboutSection() {
  return (
    <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(17rem,0.7fr)] lg:items-center lg:gap-16">
        <div className="min-w-0" data-reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <p className="text-auxiliary font-semibold text-primary">
              SOBRE
            </p>
          </div>

          <h2 id="about-title" className="mt-5 max-w-xl">
            Sobre mim
          </h2>

          <div className="mt-7 max-w-3xl space-y-4 text-base leading-7 sm:text-lg sm:leading-8">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e
              desenvolvedor com foco em backend e desenvolvimento Full Stack.
            </p>
            <p>
              Tenho interesse na construção de APIs, sistemas web e soluções
              bem estruturadas, buscando desenvolver aplicações com código
              organizado, boas práticas e uma arquitetura clara.
            </p>
            <p>
              Atualmente venho aprofundando meus conhecimentos em Node.js,
              NestJS, TypeScript, bancos de dados, Prisma e desenvolvimento de
              interfaces com Next.js.
            </p>
          </div>
        </div>

        <aside
          className="min-w-0 rounded-card border border-border bg-card p-[clamp(1.25rem,2.5vw,1.75rem)]"
          aria-label="Resumo do perfil"
          data-reveal
          data-reveal-delay="1"
        >
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <h3 className="font-mono text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
              Perfil
            </h3>
            <span
              className="flex size-8 items-center justify-center rounded-button border border-primary/30 bg-primary/8 text-primary"
              aria-hidden="true"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 9-4 3 4 3" />
                <path d="m16 9 4 3-4 3" />
                <path d="m14 5-4 14" />
              </svg>
            </span>
          </div>

          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {profileTopics.map((topic, index) => (
              <li
                key={topic}
                className="flex min-w-0 items-center gap-3 rounded-button border border-border bg-surface px-3.5 py-2.5"
              >
                <span
                  className="font-mono text-xs text-primary"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {topic}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="mt-5 h-px w-full bg-gradient-to-r from-primary/60 via-secondary/40 to-transparent"
            aria-hidden="true"
          />
        </aside>
    </div>
  );
}
