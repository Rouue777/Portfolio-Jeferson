import { Container } from "@/components/ui/container";
import { SocialLink } from "@/components/ui/social-link";
import { socialLinks } from "@/data/social-links";

function hasValidDestination(href: string) {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("https://") ||
    href.startsWith("http://")
  );
}

export function ContactSection() {
  const configuredLinks = socialLinks.filter((link) =>
    hasValidDestination(link.href),
  );
  const emailLink = configuredLinks.find((link) =>
    link.href.startsWith("mailto:"),
  );

  return (
    <section
      id="contato"
      className="portfolio-section-compact scroll-mt-18 overflow-hidden"
      aria-labelledby="contact-title"
    >
      <Container className="portfolio-container min-w-0">
        <div
          className="contact-panel relative mx-auto max-w-4xl overflow-hidden rounded-card border border-border bg-card px-gutter py-12 text-center sm:py-14 lg:px-18 lg:py-16"
          data-reveal
        >
          <div
            className="pointer-events-none absolute -top-32 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 bottom-0 size-48 rounded-full bg-secondary/6 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto flex min-w-0 max-w-3xl flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              <p className="text-auxiliary font-semibold text-primary">
                CONTATO
              </p>
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
            </div>

            <h2 id="contact-title" className="mt-5">
              Vamos conversar?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
              Estou aberto a oportunidades, projetos e conexões profissionais.
            </p>

            {emailLink ? (
              <a
                href={emailLink.href}
                className="button-base button-primary mt-7 w-full sm:w-auto"
              >
                Entrar em contato
              </a>
            ) : null}

            {configuredLinks.length > 0 ? (
              <nav className="mt-8" aria-label="Links de contato">
                <ul className="flex min-w-0 flex-wrap justify-center gap-3">
                  {configuredLinks.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <SocialLink {...link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
