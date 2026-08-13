import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProfileSection } from "@/components/sections/profile-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" tabIndex={-1}>
        <HeroSection />
        <ProfileSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
