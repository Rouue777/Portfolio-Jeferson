import { AboutSection } from "@/components/sections/about-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { Container } from "@/components/ui/container";

export function ProfileSection() {
  return (
    <section
      id="sobre"
      className="portfolio-section scroll-mt-18 overflow-hidden border-y border-border/50 bg-surface/40"
      aria-labelledby="about-title"
    >
      <Container className="portfolio-container min-w-0">
        <AboutSection />

        <div className="mt-[clamp(3.5rem,7vw,5rem)] border-t border-border/70 pt-[clamp(3rem,6vw,4.5rem)]">
          <ExpertiseSection />
        </div>
      </Container>
    </section>
  );
}
