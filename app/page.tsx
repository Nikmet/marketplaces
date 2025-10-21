import { AboutSection } from "@/components/sections/about_section";
import { CarouselSection } from "@/components/sections/carousel_section";
import { FeaturesSection } from "@/components/sections/features_section";
import { HowItWorks } from "@/components/sections/how_it_work_section";
import { MainSection } from "@/components/sections/main_section";
import { PhotoSection } from "@/components/sections/photo_section";
import { BeforeAfterSection } from "@/components/sections/before_after_section";
import { StatsSection } from "@/components/sections/stats_section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
    return (
        <div>
            <MainSection />
            <AboutSection className="bg-gray-100" />
            <CarouselSection className="bg-white" />
            <FeaturesSection className="bg-gray-100" />
            <PhotoSection className="bg-white" />
            <StatsSection />
            <HowItWorks className="bg-white" />
            <BeforeAfterSection className="bg-gray-100" />
            <Footer />
        </div>
    );
}
