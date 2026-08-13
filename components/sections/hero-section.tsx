import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="portfolio-section relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 size-80 rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 size-64 rounded-full bg-secondary/6 blur-3xl"
        aria-hidden="true"
      />

      <Container className="portfolio-container relative grid min-w-0 items-center gap-12 md:grid-cols-[minmax(0,1.12fr)_minmax(18rem,0.88fr)] md:gap-10 lg:gap-16">
        <div className="min-w-0">
          <p className="hero-enter hero-enter-1 text-auxiliary flex items-center gap-3 font-semibold text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            OLÁ, EU SOU
          </p>

          <h1
            id="hero-title"
            className="hero-enter hero-enter-2 mt-5 max-w-3xl"
          >
            <span className="block">JEFERSON PAIXÃO</span>
            <span className="accent-gradient mt-4 block max-w-2xl bg-clip-text text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.045em] text-transparent">
              Desenvolvedor Backend &amp; Full Stack
            </span>
          </h1>

          <p className="hero-enter hero-enter-3 mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Construo APIs e aplicações web modernas, com foco em arquitetura,
            organização e soluções reais.
          </p>

          <div className="hero-enter hero-enter-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projetos"
              className="button-base button-primary w-full sm:w-auto"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="button-base button-secondary w-full sm:w-auto"
            >
              Vamos conversar
            </a>
          </div>
        </div>

        <div
          className="hero-code-enter relative mx-auto w-full min-w-0 max-w-[30rem] md:mx-0 md:justify-self-end"
          aria-hidden="true"
        >
          <div className="absolute -inset-4 rounded-[1.25rem] bg-primary/5 blur-2xl" />

          <div className="code-panel relative overflow-hidden rounded-card border border-border bg-card">
            <div className="flex h-11 items-center gap-2 border-b border-border bg-surface px-4">
              <span className="size-2.5 rounded-full bg-muted/40" />
              <span className="size-2.5 rounded-full bg-secondary/70" />
              <span className="size-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-[0.6875rem] text-muted">
                developer.ts
              </span>
            </div>

            <div className="overflow-hidden p-5 font-mono text-[0.75rem] leading-6 sm:p-7 sm:text-sm sm:leading-7">
              <div>
                <span className="text-primary">const</span>{" "}
                <span className="text-secondary">developer</span>{" "}
                <span className="text-muted">=</span>{" "}
                <span className="text-foreground">{"{"}</span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-muted">name:</span>{" "}
                <span className="text-secondary">&quot;Jeferson&quot;</span>,
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-muted">backend:</span>{" "}
                <span className="text-primary">true</span>,
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-muted">fullStack:</span>{" "}
                <span className="text-primary">true</span>,
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-muted">focus:</span>{" "}
                <span className="text-secondary">&quot;solutions&quot;</span>,
              </div>
              <div className="text-foreground">{"}"};</div>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-border px-5 py-4 sm:px-7">
              {[
                ["API", "bg-primary"],
                ["Full Stack", "bg-secondary"],
                ["Arquitetura", "bg-primary"],
              ].map(([label, color]) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-xs text-muted"
                >
                  <span className={`size-1.5 rounded-full ${color}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
