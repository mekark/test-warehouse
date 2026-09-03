import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/Project";
import IndustrySection from "@/components/Industry";
import Warehouse from "@/components/Warehouse";
import CompletedProjects from "@/components/CompletedProject";
import DelayCtaSection from "@/components/DelayCtaSection";
import ComparisonSection from "@/components/Contract";
import WhyChooseUs from "@/components/Whyus";
import FacilitySection from "@/components/FacilitySection";
import OperationTimeline from "@/components/OperationTimeline";
import BlueprintSection from "@/components/BlueprintSection";
import FAQSection from "@/components/Faq";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      {/* <ProjectsSection /> */}
      <IndustrySection />
      <Warehouse />
      <CompletedProjects />
      <DelayCtaSection />
      <ComparisonSection />
      <WhyChooseUs />
      <FacilitySection />
      <OperationTimeline />
      <FAQSection />
      <BlueprintSection />
    </main>
  );
}
