"use client";

import React, { useRef, useEffect, useState } from "react";
import { Container } from "../container";
import cn from "classnames";

interface FulfillmentProps {
    className?: string;
}

export const AboutSection: React.FC<FulfillmentProps> = ({ className = "" }) => {
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
        <div className={className}>
            <Container>
                <div
                    ref={sectionRef}
                    className={`py-16 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    {/* Красивый заголовок */}
                    <div className="text-center mb-12">
                        <h2
                            className={cn(
                                "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent transition-all duration-1000",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            )}
                        >
                            Чем мы занимаемся
                        </h2>

                        {/* Декоративная линия */}
                        <div
                            className={cn(
                                "w-24 h-1 bg-green-400 mx-auto mt-6 rounded-full transition-all duration-1000 delay-300",
                                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                            )}
                        ></div>
                    </div>

                    {/* Вводный текст */}
                    <section className="mb-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            <strong className="bg-green-400 px-1 transition-all duration-500 delay-300 hover:scale-105 hover:-rotate-1 transform inline-block">
                                Фулфилмент
                            </strong>{" "}
                            (fulfillment, «воплощение заказа») простыми словами — это комплекс логистических услуг
                            полного цикла, которые выполняются на аутсорсинге. Например: Вы селлер-продавец, который не
                            арендует собственный склад и не хочет тратить свое время, силы, деньги, а «прямо» делегирует
                            нам «фулфилмент-оператору!» свой товар.
                        </p>
                    </section>

                    {/* Список услуг */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 transform transition-all duration-700 delay-200">
                            Мы берём на себя:
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                            {[
                                "приемку",
                                "проверку на брак",
                                "упаковку",
                                "маркировку",
                                "фасовку",
                                "фотоотчёты и видеоотчёты на всех этапах работ",
                                "ведение номенклатуры на всех площадках",
                                "фиксированный договор (без скрытых и добавочных платежей)",
                                "доставку по системе FBO/FBW и FBS/real FBS на доступные склады"
                            ].map((service, index) => (
                                <li
                                    key={index}
                                    className="flex items-start transform transition-all duration-500 hover:translate-x-2 hover:text-gray-900"
                                    style={{
                                        transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? "translateX(0)" : "translateX(-20px)"
                                    }}
                                >
                                    <span className="bg-green-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 transform transition-all duration-300 hover:scale-125"></span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Заключительный текст */}
                    <section>
                        <p
                            className="text-lg text-gray-700 leading-relaxed transform transition-all duration-700 delay-1000"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateY(0)" : "translateY(20px)"
                            }}
                        >
                            Все оказываемые услуги осуществляются «под ключ» как по Москве, так и по всей Московской
                            области.
                        </p>
                    </section>
                </div>
            </Container>
        </div>
    );
};
