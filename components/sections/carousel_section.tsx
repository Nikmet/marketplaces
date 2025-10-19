"use client"

import { Carousel } from "../carousel";
import { Container } from "../container";
import cn from "classnames";
import { useRef, useEffect, useState } from "react";

export interface ICarousel_SectionProps {
    className?: string;
}

export const CarouselSection = ({ className }: ICarousel_SectionProps): React.JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={cn("py-16", className)}>
            <Container>
                <div ref={titleRef} className="text-center mb-12">
                    {/* Основной заголовок с анимацией */}
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent transition-all duration-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        Площадки с которыми мы работаем
                    </h2>

                    {/* Подзаголовок с задержкой */}
                    <p
                        className={cn(
                            "text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        Интегрируем ваши товары со всеми популярными маркетплейсами для максимального охвата аудитории
                    </p>

                    {/* Анимированная линия */}
                    <div
                        className={cn(
                            "w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-6 rounded-full transition-all duration-1000 delay-500",
                            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        )}
                    ></div>
                </div>
                <Carousel />
            </Container>
        </div>
    );
};
