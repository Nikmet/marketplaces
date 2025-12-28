"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../container";
import cn from "classnames";

export interface IStatsSectionProps {
    className?: string;
}

export const StatsSection = ({ className }: IStatsSectionProps): React.JSX.Element => {
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

    const stats = [
        {
            value: "С 2023 года",
            description: "Являемся надежными партнерами",
            accent: true
        },
        {
            value: "Более 100",
            description: "Действующих партнеров и акуп торговли"
        },
        {
            value: "ТОП-10",
            description: "Клиенты из рейтинга на маркетплейсах"
        },
        {
            value: "Более 35к",
            description: "Упаковывается товаров в 1 месяц"
        }
    ];

    return (
        <div ref={sectionRef} className={cn(className, "py-20 bg-gray-100")}>
            <Container>
                {/* Заголовок секции с анимацией */}
                <div className="text-center mb-16">
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-bold mb-4 text-gray-900 transition-all duration-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        Мы в цифрах
                    </h2>
                    <p
                        className={cn(
                            "text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        Доверяйте профессионалам с подтвержденной репутацией и опытом
                    </p>
                    <div
                        className={cn(
                            "w-24 h-1 bg-green-400 mx-auto mt-6 rounded-full transition-all duration-1000 delay-500",
                            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        )}
                    ></div>
                </div>

                {/* Статистика с анимацией */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={cn(
                                "text-center p-8 rounded-2xl transition-all duration-500 transform bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100",
                                isVisible ? "opacity-100 translate-y-0 hover:-translate-y-2" : "opacity-0 translate-y-8"
                            )}
                            style={{
                                transitionDelay: `${index * 150 + 300}ms`
                            }}
                        >
                            <div
                                className={cn(
                                    "text-2xl md:text-3xl font-bold mb-4",
                                    stat.accent ? "text-gray-900" : "text-gray-900"
                                )}
                            >
                                {stat.value}
                            </div>
                            <div
                                className={cn(
                                    "text-base leading-relaxed",
                                    stat.accent ? "text-gray-800" : "text-gray-600"
                                )}
                            >
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};
