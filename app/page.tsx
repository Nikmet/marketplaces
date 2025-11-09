import { AboutSection } from "@/components/sections/about_section";
import { CarouselSection } from "@/components/sections/carousel_section";
import { FeaturesSection } from "@/components/sections/features_section";
import { HowItWorks } from "@/components/sections/how_it_work_section";
import { MainSection } from "@/components/sections/main_section";
import { PhotoSection } from "@/components/sections/photo_section";
import { BeforeAfterSection } from "@/components/sections/before_after_section";
import { StatsSection } from "@/components/sections/stats_section";
import { Footer } from "@/components/sections/footer";
import { ServicesSection } from "@/components/sections/services_section";
import { CTASection } from "@/components/sections/cta_section";

export default function Home() {
    return (
        <div>
            <MainSection />
            <AboutSection className="bg-white" />
            <ServicesSection className="bg-gray-100" />
            <CarouselSection className="bg-white" />
            <FeaturesSection className="bg-gray-100" />
            <PhotoSection className="bg-white" />
            <StatsSection className="bg-gray-100" />
            <HowItWorks className="bg-white" />
            <BeforeAfterSection className="bg-gray-100" />
            <CTASection className="bg-white" />
            <Footer />
        </div>
    );
}
