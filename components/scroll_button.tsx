"use client";

import React, { useState, useEffect } from "react";

export const ScrollToCtaButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mainSection = document.getElementById("main-section");
            const ctaSection = document.getElementById("cta-section");

            if (mainSection && ctaSection) {
                const mainSectionBottom = mainSection.offsetTop + mainSection.offsetHeight;
                const currentScroll = window.scrollY + window.innerHeight;

                // Показываем кнопку только когда main секция полностью прокручена
                // и мы еще не дошли до cta секции
                const shouldShow = currentScroll > mainSectionBottom && window.scrollY < ctaSection.offsetTop;

                setIsVisible(shouldShow);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCta = () => {
        const ctaSection = document.getElementById("cta-section");
        if (ctaSection) {
            ctaSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    return (
        <>
            <button
                onClick={scrollToCta}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`
                    fixed bottom-8 right-8 z-40
                    bg-gradient-to-r from-green-500 to-green-600 
                    hover:from-green-600 hover:to-green-700
                    text-white font-bold 
                    px-8 py-4 rounded-2xl 
                    shadow-2xl hover:shadow-3xl
                    transition-all duration-500 
                    transform 
                    flex items-center space-x-3
                    border-2 border-green-400
                    backdrop-blur-sm
                    ${
                        isVisible
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-10 scale-90 pointer-events-none"
                    }
                    ${isHovered ? "scale-110 shadow-xl" : "scale-100"}
                `}
            >
                <div className="relative">
                    <span className="text-xl">🚛</span>
                </div>
                <span className="text-lg whitespace-nowrap">Получить расчет</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-y-1" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>
        </>
    );
};
