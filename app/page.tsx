import { AboutSection } from "@/components/sections/about_section";
import { CarouselSection } from "@/components/sections/carousel_section";
import { FeaturesSection } from "@/components/sections/features_section";
import { MainSection } from "@/components/sections/main_section";

export default function Home() {
    return (
        <div>
            <MainSection />
            <AboutSection className="bg-gray-100" />
            <CarouselSection />
            <FeaturesSection className="bg-gray-100" />
        </div>
    );
}
