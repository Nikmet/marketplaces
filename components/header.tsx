"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface IHeaderProps {
    className?: string;
}

export const Header = ({ className = "" }: IHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => observer.disconnect();
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
        <header
            ref={headerRef}
            className={`relative flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 text-white ${className}`}
        >
            {/* Левая часть — логотип */}
            <div
                className={`
                flex items-center gap-3 transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
            `}
            >
                <img
                    src="/logo.svg"
                    alt="MarketFull"
                    className="w-30 sm:w-34 md:w-32 lg:w-40" // Увеличил размеры
                />
            </div>

            {/* Десктопная версия */}
            <div
                className={`
                hidden md:flex items-center gap-8 transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
            >
                {/* Контакты */}
                <div className="flex flex-col text-right leading-tight">
                    <div className="flex gap-4 justify-end mb-1">
                        <a href="tel:+74954323015" className="font-bold hover:text-green-400 transition">
                            +7 (495) 432-30-15
                        </a>
                        <a href="tel:+79855896455" className="font-bold hover:text-green-400 transition">
                            +7 (985) 589-64-55
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <p>Ежедневно: с 9:00 до 22:00</p>
                        <span>•</span>
                        <a href="mailto:info@marketfull.ru" className="hover:text-green-400 transition">
                            info@marketfull.ru
                        </a>
                    </div>
                </div>

                {/* Кнопка */}
                <button
                    onClick={scrollToCta}
                    className={`
                    bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md whitespace-nowrap
                    transform transition-all duration-300 hover:scale-105
                `}
                >
                    Бесплатная консультация
                </button>
            </div>

            {/* Мобильная версия - бургер меню */}
            <div
                className={`
                md:hidden transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
            >
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 " aria-label="Открыть меню">
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5 relative">
                        <span
                            className={`w-full h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? "opacity-0 -translate-x-2" : ""
                            }`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Мобильное меню с анимацией */}
            <div
                className={`
                fixed md:hidden top-0 left-0 right-0 bottom-0 z-50
                transition-all duration-500 ease-in-out
                ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}
            `}
            >
                {/* Затемнение фона */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                        isMenuOpen ? "opacity-70" : "opacity-0"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Контент меню */}
                <div
                    className={`
                    absolute top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md
                    transform transition-all duration-500 ease-out
                    ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
                `}
                >
                    {/* Заголовок меню */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <img
                            src="/logo_dark.svg"
                            alt="MarketFull"
                            className="w-30 sm:w-34 md:w-32 lg:w-40" // Увеличил размеры
                        />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-md transition duration-300"
                            aria-label="Закрыть меню"
                        >
                            <div className="w-5 h-5 relative">
                                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -rotate-45"></span>
                                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform rotate-45"></span>
                            </div>
                        </button>
                    </div>

                    {/* Контент */}
                    <div className="p-6 space-y-6 text-gray-900">
                        {/* Контакты */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800">Контакты</h3>
                            <div className="space-y-3">
                                <a
                                    href="tel:+74954323015"
                                    className="flex items-center gap-3 font-bold hover:text-green-500 transition duration-300 text-lg group"
                                >
                                    <span className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                                    +7 (495) 432-30-15
                                </a>
                                <a
                                    href="tel:+79855896455"
                                    className="flex items-center gap-3 font-bold hover:text-green-500 transition duration-300 text-lg group"
                                >
                                    <span className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                                    +7 (985) 589-64-55
                                </a>
                            </div>
                            <div className="space-y-2 pt-2 border-t border-gray-200">
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    Ежедневно: с 9:00 до 22:00
                                </p>
                                <a
                                    href="mailto:info@marketfull.ru"
                                    className="text-sm hover:text-green-500 transition duration-300 flex items-center gap-2"
                                >
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    info@marketfull.ru
                                </a>
                            </div>
                        </div>

                        {/* Кнопка */}
                        <button
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-md transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                            onClick={() => {
                                setIsMenuOpen(false);
                                scrollToCta();
                            }}
                        >
                            Бесплатная консультация
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
