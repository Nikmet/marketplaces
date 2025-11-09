"use client";

import React, { useRef, useEffect, useState } from "react";
import { Container } from "../container";
import cn from "classnames";

interface ServicesProps {
    className?: string;
}

export const ServicesSection: React.FC<ServicesProps> = ({ className = "" }) => {
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

    const scrollToCta = () => {
        const ctaSection = document.getElementById("cta-section");
        if (ctaSection) {
            ctaSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    const services = [
        {
            number: "01",
            title: "Приёмка и хранение",
            description: "Получение товаров от поставщика, проверка качества, учёт",
            features: ["Полная проверка качества", "Строгий учет товара", "Безопасное хранение"],
            icon: "📋",
            color: "from-blue-500 to-cyan-500"
        },
        {
            number: "02",
            title: "Упаковка и маркировка",
            description:
                "Упаковка товаров в соответствии с требованиями маркетплейсов или продавца и нанесение необходимой маркировки",
            features: ["Соответствие требованиям", "Профессиональная упаковка", "Точная маркировка"],
            icon: "📦",
            color: "from-green-500 to-emerald-500"
        },
        {
            number: "03",
            title: "Забор товара",
            description: "Заберем Ваш товар с оптовых рынков и Карго - ТЯК, Южные Ворота, Садовод, Альфа карго",
            features: ["ТЯК", "Южные Ворота", "Садовод", "Альфа карго"],
            icon: "🚛",
            color: "from-orange-500 to-amber-500"
        },
        {
            number: "04",
            title: "Отгрузка товара",
            description: "Отгрузка товара на вы и выбранный склад/распределение товаров по складам",
            features: ["Любой выбранный склад", "Оптимальное распределение", "Своевременная отгрузка"],
            icon: "📤",
            color: "from-purple-500 to-pink-500"
        },
        {
            number: "05",
            title: "Под ключ",
            description:
                "Забор вашего товара, учет, проверка товара, упаковка, подготовка к отгрузке, отгрузка на вами выбранный склад",
            features: ["Полный цикл услуг", "Единый исполнитель", "Максимальная эффективность"],
            icon: "🔑",
            color: "from-yellow-500 to-orange-500"
        },
        {
            number: "06",
            title: "Займы/Кредитование для Селлеров",
            description:
                "Команда опытных специалистов подберет возможность дополнительного финансирования на самых выгодных условиях!",
            features: [
                "Решение кассовых разрывов",
                "Пополнение оборотных средств",
                "Финансирование для увеличения поставок"
            ],
            icon: "💰",
            color: "from-red-500 to-pink-500"
        }
    ];

    return (
        <div className={className}>
            <Container>
                <div
                    ref={sectionRef}
                    className={`py-20 transition-all duration-1000 ${
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
                            Наши услуги
                        </h2>

                        <p
                            className={cn(
                                "text-xl text-gray-600 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-300",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            )}
                        >
                            Полный комплекс логистических и финансовых услуг для вашего бизнеса
                        </p>

                        <div
                            className={cn(
                                "w-24 h-1 bg-green-400 mx-auto rounded-full transition-all duration-1000 delay-500",
                                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                            )}
                        ></div>
                    </div>

                    {/* Сетка услуг */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl overflow-hidden",
                                    isVisible ? "animate-in" : "opacity-0"
                                )}
                                style={{
                                    animationDelay: isVisible ? `${index * 150}ms` : "0ms"
                                }}
                            >
                                {/* Градиентный фон при hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                                ></div>

                                {/* Номер услуги */}
                                <div className="text-6xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-gray-200 transition-colors duration-500">
                                    {service.number}
                                </div>

                                {/* Иконка */}
                                <div className="text-4xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    {service.icon}
                                </div>

                                {/* Заголовок */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-gray-800 relative z-10">
                                    {service.title}
                                </h3>

                                {/* Описание */}
                                <p className="text-gray-600 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-700 relative z-10">
                                    {service.description}
                                </p>

                                {/* Особенности */}
                                <div className="space-y-2 relative z-10">
                                    {service.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`}
                                            ></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Акцентная полоска */}
                                <div
                                    className={`w-12 h-1 bg-gradient-to-r ${service.color} mt-6 rounded-full transform transition-all duration-500 group-hover:w-20 group-hover:scale-110`}
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* Дополнительная информация о кредитовании */}
                    <div
                        className={cn(
                            "mt-16 p-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200 transition-all duration-1000 delay-800",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Нужны средства для развития бизнеса?
                                </h3>
                                <div className="space-y-3 text-gray-700">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-red-600 text-sm">?</span>
                                        </div>
                                        <p>Случился кассовый разрыв?</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-red-600 text-sm">💰</span>
                                        </div>
                                        <p>Не хватает денег на пополнение оборотных средств?</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-red-600 text-sm">📈</span>
                                        </div>
                                        <p>Хочется увеличить поставки, но деньги нужны сразу?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:text-right flex flex-col">
                                <p className="text-lg text-gray-600 mb-4">
                                    Мы поможем получить финансирование на выгодных условиях!
                                </p>
                                <button
                                    onClick={scrollToCta}
                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto lg:mx-0"
                                >
                                    <span>💰</span>
                                    <span>Получить консультацию</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Основной призыв к действию */}
                    <div
                        className={cn(
                            "text-center mt-8 p-8 bg-white rounded-2xl border border-gray-200 transition-all duration-1000 delay-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Готовы начать сотрудничество?</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Оставьте заявку и мы подберем оптимальное решение для вашего бизнеса
                        </p>
                        <button
                            onClick={scrollToCta}
                            className="mt-6 bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto"
                        >
                            <span>🚛</span>
                            <span>Получить расчет</span>
                        </button>
                    </div>
                </div>
            </Container>

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
            `}</style>
        </div>
    );
};
