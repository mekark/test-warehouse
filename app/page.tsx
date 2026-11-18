import BlueprintHeroSection from "@/components/BlueprintHeroSection";
import ProcessSection from "@/components/ProcessSection";
import TechnicalSpecificationsSection from "@/components/TechnicalSpecificationsSection";
import WhyMekarkSection from "@/components/WhyMekarkSection";
import WhyEditorialMobile from "@/components/WhyEditorialMobile";
import ProjectsGallerySection from "@/components/ProjectsGallerySection";
import ManufacturingCapabilitiesSection from "@/components/ManufacturingCapabilitiesSection";
import FaqAccordionSection from "@/components/FaqAccordionSection";
import LeadBlueprintSection from "@/components/LeadBlueprintSection";
import MobileActionBar from "@/components/MobileActionBar";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <MobileActionBar />
      <FloatingContact />
      <BlueprintHeroSection />
      <ProcessSection />
      <TechnicalSpecificationsSection />
      <WhyMekarkSection />
      <ProjectsGallerySection />
      <ManufacturingCapabilitiesSection />
      <FaqAccordionSection />
      <LeadBlueprintSection />
    </main>
  );
}
