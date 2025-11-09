"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface IFooterProps {
    className?: string;
}

export const Footer = ({ className = "" }: IFooterProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
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
        <footer ref={footerRef} className={`bg-gray-900 text-white py-12 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Левая часть — логотип и описание */}
                    <div
                        className={`
                        flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ease-out
                        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                    `}
                    >
                        <img
                            src="/logo.svg"
                            alt="MarketFull"
                            className="w-30 sm:w-34 md:w-32 lg:w-40 mb-4" // Увеличил размеры
                        />
                        <p className="text-gray-300 max-w-md text-sm md:text-base">
                            Профессиональный фулфилмент для маркетплейсов. Полный цикл услуг от приемки до отправки
                            ваших товаров.
                        </p>
                    </div>

                    {/* Центральная часть — контакты */}
                    <div
                        className={`
                        flex flex-col items-center lg:items-center text-center transition-all duration-700 ease-out
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-green-400">Контакты</h3>
                        <div className="space-y-2">
                            <div className="flex gap-4 justify-center">
                                <a href="tel:+74954323015" className="font-bold hover:text-green-400 transition">
                                    +7 (495) 432-30-15
                                </a>
                                <a href="tel:+79855896455" className="font-bold hover:text-green-400 transition">
                                    +7 (985) 589-64-55
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-300">
                                <p>Ежедневно: с 9:00 до 22:00</p>
                                <span className="hidden sm:inline">•</span>
                                <a href="mailto:info@fulfilment-go.ru" className="hover:text-green-400 transition">
                                    info@fulfilment-go.ru
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Правая часть — кнопка */}
                    <div
                        className={`
                        flex flex-col items-center lg:items-end text-center lg:text-right transition-all duration-700 ease-out
                        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
                    `}
                    >
                        <button
                            onClick={scrollToCta}
                            className={`
                            bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-8 rounded-md whitespace-nowrap
                            transform transition-all duration-300 hover:scale-105 text-lg
                        `}
                        >
                            Бесплатная консультация
                        </button>
                        <p className="text-gray-400 text-sm mt-3 max-w-xs">Получите расчет стоимости</p>
                    </div>
                </div>

                {/* Нижняя часть — копирайт */}
                <div
                    className={`
                    border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm
                    transition-all duration-700 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                >
                    <p>© {new Date().getFullYear()} MarketFul. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};
