import BlueprintHeroSection from "@/components/BlueprintHeroSection";
import ProcessSection from "@/components/ProcessSection";
import TechnicalSpecificationsSection from "@/components/TechnicalSpecificationsSection";
import WhyMekarkSection from "@/components/WhyMekarkSection";
import WhyEditorialMobile from "@/components/WhyEditorialMobile";
import ProjectsGallerySection from "@/components/ProjectsGallerySection";
import FaqAccordionSection from "@/components/FaqAccordionSection";
import LeadBlueprintSection from "@/components/LeadBlueprintSection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <FloatingContact />
      <BlueprintHeroSection />
      <ProcessSection />
      <TechnicalSpecificationsSection />
      <WhyMekarkSection />
      <ProjectsGallerySection />
      <FaqAccordionSection />
      <LeadBlueprintSection />
    </main>
  );
}
