"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../container";
import { PhotoCarousel } from "../photo_carousel";
import cn from "classnames";

export interface IPhoto_SectionProps {
    className?: string;
}

export const PhotoSection = ({ className }: IPhoto_SectionProps): React.JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={cn("py-8", className)}>
            <Container>
                {/* Заголовок секции */}
                <div className="text-center">
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent transition-all duration-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        Наша работа
                    </h2>

                    <div
                        className={cn(
                            "w-24 h-1 bg-green-400 mx-auto mt-6 rounded-full transition-all duration-1000 delay-300",
                            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        )}
                    ></div>
                </div>

                {/* Карусель */}
                <div
                    className={cn(
                        "transition-all duration-1000 delay-500",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <PhotoCarousel
                        images={[
                            "/warehouse.png",
                            "/warehouse.png",
                            "/warehouse.png",
                            "/warehouse.png",
                            "/warehouse.png",
                            "/warehouse.png",
                            "/warehouse.png",
                            "/warehouse.png"
                        ]}
                    />
                </div>
            </Container>
        </div>
    );
};
