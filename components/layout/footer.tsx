import { Container } from "@/components/ui/container";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="portfolio-container min-w-0 py-8 sm:py-10">
        <div className="grid min-w-0 gap-7 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-start md:gap-12">
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-[0.12em] text-foreground">
              JEFERSON PAIXÃO
            </p>
            <p className="mt-3 text-sm leading-6">
              Desenvolvedor Backend &amp; Full Stack
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex min-w-0 flex-wrap gap-x-6 gap-y-3 md:justify-end">
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
        </div>

        <div className="mt-8 border-t border-border/70 pt-5">
          <p className="text-xs leading-5 text-muted">
            © 2026 Jeferson Paixão. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
