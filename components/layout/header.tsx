import { MobileMenu } from "@/components/layout/mobile-menu";
import { Container } from "@/components/ui/container";
import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md"
    >
      <Container className="portfolio-container relative flex min-h-18 items-center justify-between gap-8">
        <a
          href="#top"
          className="shrink-0 text-sm font-semibold tracking-[0.12em] text-foreground hover:text-primary"
          aria-label="Jeferson Paixão — início"
        >
          JEFERSON PAIXÃO
        </a>

        <nav className="ml-auto hidden lg:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link text-sm font-medium text-muted hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contato"
          className="button-base button-primary hidden shrink-0 lg:inline-flex"
        >
          Vamos conversar
        </a>

        <MobileMenu />
      </Container>
    </header>
  );
}
