"use client";

import React, { useRef, useEffect, useState } from "react";
import { marketplaces } from "@/constants/marketplaces";

interface CarouselProps {
    className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const duplicatedMarketplaces = [...marketplaces, ...marketplaces, ...marketplaces];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "50px"
            }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={carouselRef}
            className={`bg-white py-8 md:py-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } ${className}`}
        >
            <div className="overflow-hidden relative">
                {/* Градиенты - убраны отступы и расширены */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white via-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white via-white to-transparent z-10" />

                <div className={`flex animate-smooth-scroll ${isVisible ? "animate-in" : "opacity-0"}`}>
                    {duplicatedMarketplaces.map((marketplace, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-gray-50 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 mx-2 md:mx-4 min-w-[120px] md:min-w-[160px] lg:min-w-[200px] border border-gray-200 md:border-2 border-transparent hover:border-green-400 transition-all duration-300 hover:shadow-md md:hover:shadow-lg flex-shrink-0 group"
                            style={{
                                animationDelay: isVisible ? `${index * 0.1}s` : "0s"
                            }}
                        >
                            <div className="mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2 scale-75 md:scale-100">
                                {marketplace.logo}
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-sm md:text-lg lg:text-xl text-gray-900 transition-colors duration-300 group-hover:text-gray-700 whitespace-nowrap">
                                    {marketplace.shortName}
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1 transition-colors duration-300 group-hover:text-gray-500 line-clamp-1">
                                    {marketplace.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes smooth-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }

                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-smooth-scroll {
                    animation: smooth-scroll 60s linear infinite;
                }

                .animate-smooth-scroll.animate-in {
                    animation: fade-in-up 0.8s ease-out forwards, smooth-scroll 60s linear infinite 0.8s;
                }

                .animate-smooth-scroll:hover {
                    animation-play-state: paused;
                }

                .flex > div {
                    animation: fade-in-up 0.6s ease-out both;
                }

                /* Адаптивная скорость для мобильных */
                @media (max-width: 768px) {
                    .animate-smooth-scroll {
                        animation-duration: 40s;
                    }

                    .animate-smooth-scroll.animate-in {
                        animation: fade-in-up 0.8s ease-out forwards, smooth-scroll 40s linear infinite 0.8s;
                    }
                }

                /* Для очень маленьких экранов */
                @media (max-width: 480px) {
                    .animate-smooth-scroll {
                        animation-duration: 30s;
                    }

                    .animate-smooth-scroll.animate-in {
                        animation: fade-in-up 0.8s ease-out forwards, smooth-scroll 30s linear infinite 0.8s;
                    }
                }

                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};
