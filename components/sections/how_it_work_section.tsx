"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../container";
import cn from "classnames";

export interface IHowItWorksProps {
    className?: string;
}

export const HowItWorks = ({ className }: IHowItWorksProps): React.JSX.Element => {
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

    const steps = [
        {
            number: "01",
            title: "Обработка заявки",
            description:
                "Наш оператор компании свяжется для уточнения всех деталей с вами и подготовит индивидуальное «Коммерческое Предложение»",
            icon: "💬"
        },
        {
            number: "02",
            title: "Заключаем договор",
            description:
                "Мы работаем только по договору оказания услуг, как с юридическими, так и физическими лицами. Документы мгновенно приходят в любой регион через (2ДО) «Контур.Диадок»",
            icon: "✍️"
        },
        {
            number: "03",
            title: "Упаковка и отгрузка",
            description:
                "Приемка, фасовка и отправка осуществляется на теплом складе с видеонаблюдением. Маркировка - по всем требованиям! Наша WMS система контролирует весь цикл",
            icon: "🚚"
        }
    ];

    return (
        <div ref={sectionRef} className={cn(className, "py-20")}>
            <Container>
                {/* Заголовок секции */}
                <div className="text-center mb-16">
                    <h2
                        className={cn(
                            "text-4xl md:text-5xl font-bold mb-6 text-gray-900 transition-all duration-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        Как работает наш фулфилмент
                    </h2>
                    <div
                        className={cn(
                            "w-24 h-1 bg-yellow-400 mx-auto rounded-full transition-all duration-1000 delay-300",
                            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        )}
                    ></div>
                </div>

                {/* Вертикальные шаги */}
                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col lg:flex-row items-start mb-12 last:mb-0 transition-all duration-700",
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                            )}
                            style={{
                                transitionDelay: `${index * 200 + 300}ms`
                            }}
                        >
                            {/* Левая часть - номер и иконка */}
                            <div className="flex items-center lg:block lg:text-center mb-4 lg:mb-0 lg:mr-8">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                                        {step.number}
                                    </div>
                                    <div className="absolute -top-1 -right-1 text-2xl bg-white rounded-full p-1 shadow-md">
                                        {step.icon}
                                    </div>
                                </div>
                                {/* Линия соединения (кроме последнего элемента) */}
                                {index < steps.length - 1 && (
                                    <div
                                        className={cn(
                                            "hidden lg:block w-1 h-24 bg-yellow-400 mx-auto mt-4 rounded-full transition-all duration-1000 delay-700",
                                            isVisible ? "opacity-100" : "opacity-0"
                                        )}
                                    ></div>
                                )}
                            </div>

                            {/* Правая часть - контент */}
                            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};
