"use client";

import React, { useRef, useEffect, useState } from "react";
import { Container } from "../container";

interface FeaturesProps {
    className?: string;
}

export const FeaturesSection: React.FC<FeaturesProps> = ({ className = "" }) => {
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

    const features = [
        {
            title: "Приемка",
            description: "Полная проверка и учет товара при поступлении на склад",
            icon: "📦"
        },
        {
            title: "Упаковка",
            description: "Профессиональная упаковка с учетом требований маркетплейсов",
            icon: "🎁"
        },
        {
            title: "Хранение",
            description: "Безопасное хранение на современных складских комплексах",
            icon: "🏪"
        },
        {
            title: "Забор и доставка",
            description: "Организация забора товара и доставки до конечного покупателя",
            icon: "🚚"
        },
        {
            title: "Честный знак",
            description: "Работа с системой маркировки и прослеживаемости товаров",
            icon: "🏷️"
        }
    ];

    return (
        <div className={className}>
            <Container>
                <div
                    ref={sectionRef}
                    className={`py-16 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    {/* Заголовок секции */}
                    <div className="text-center mb-16">
                        <h2
                            className={cn(
                                "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent transition-all duration-1000",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            )}
                        >
                            Ключевые возможности фулфилмента
                        </h2>

                        <div
                            className={cn(
                                "w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full transition-all duration-1000 delay-300",
                                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                            )}
                        ></div>
                    </div>

                    {/* Сетка возможностей */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-yellow-400 transition-all duration-500 group hover:shadow-xl",
                                    isVisible ? "animate-in" : "opacity-0"
                                )}
                                style={{
                                    animationDelay: isVisible ? `${index * 150}ms` : "0ms"
                                }}
                            >
                                {/* Иконка */}
                                <div className="text-4xl mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    {feature.icon}
                                </div>

                                {/* Заголовок */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-gray-800">
                                    {feature.title}
                                </h3>

                                {/* Описание */}
                                <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                                    {feature.description}
                                </p>

                                {/* Акцентная полоска */}
                                <div className="w-12 h-1 bg-yellow-400 mt-4 rounded-full transform transition-all duration-500 group-hover:w-16 group-hover:bg-yellow-500"></div>
                            </div>
                        ))}
                    </div>

                    {/* Дополнительный текст */}
                    <div
                        className={cn(
                            "text-center mt-12 transition-all duration-1000 delay-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Все услуги интегрированы в единый процесс для максимальной эффективности и прозрачности
                            работы с вашим товаром
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

// Добавьте стили анимации в глобальный CSS или используйте style jsx
<style jsx>{`
    @keyframes fade-in-up {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-in {
        animation: fade-in-up 0.8s ease-out both;
    }
`}</style>;

function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}
