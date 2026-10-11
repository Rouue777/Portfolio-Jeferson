import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { LanguagesSection } from "@/components/sections/languages-section";
import { Container } from "@/components/ui/container";

export function JourneySection() {
  return (
    <section
      id="experiencia"
      className="portfolio-section scroll-mt-18 overflow-hidden"
      aria-label="Experiência, formação e idiomas"
    >
      <Container className="portfolio-container min-w-0">
        <div className="flex items-center gap-3" data-reveal>
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <p className="text-auxiliary font-semibold text-primary">
            EXPERIÊNCIA &amp; FORMAÇÃO
          </p>
        </div>

        <div className="mt-6 grid min-w-0 gap-14 xl:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)] xl:gap-12">
          <ExperienceSection />
          <div className="min-w-0 border-t border-border/70 pt-10 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-12">
            <EducationSection />
          </div>
        </div>

        <div className="mt-[clamp(3.5rem,7vw,5rem)] border-t border-border/70 pt-[clamp(3rem,6vw,4.5rem)]">
          <LanguagesSection />
        </div>
      </Container>
    </section>
  );
}
