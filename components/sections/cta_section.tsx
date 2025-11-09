"use client";

import React, { useRef, useEffect, useState } from "react";
import { Container } from "../container";
import cn from "classnames";

interface CTASectionProps {
    className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const services = [
        { value: "", label: "Выберите услугу", disabled: true },
        { value: "receiving-storage", label: "Приёмка и хранение" },
        { value: "packaging-labeling", label: "Упаковка и маркировка" },
        { value: "pickup", label: "Забор товара" },
        { value: "shipping", label: "Отгрузка товара" },
        { value: "turnkey", label: "Под ключ" },
        { value: "credit", label: "Займы/Кредитование для Селлеров" }
    ];

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !service) return;

        setLoading(true);
        try {
            const res = await fetch("/api/sendToTelegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, service })
            });

            if (res.ok) {
                setName("");
                setPhone("");
                setService("");
                setShowToast(true);
                setTimeout(() => setShowToast(false), 5000);
            } else {
                alert("Ошибка при отправке. Попробуйте позже.");
            }
        } catch (err) {
            console.error(err);
            alert("Не удалось отправить сообщение.");
        } finally {
            setLoading(false);
        }
    };

    const getServiceDescription = (serviceValue: string) => {
        switch (serviceValue) {
            case "receiving-storage":
                return "Получение товаров от поставщика, проверка качества, учёт.";
            case "packaging-labeling":
                return "Упаковка товаров в соответствии с требованиями маркетплейсов или продавца и нанесение необходимой маркировки";
            case "pickup":
                return "Заберем Ваш товар с оптовых рынков и Карго - ТЯК, Южные Ворота, Садовод, Альфа карго";
            case "shipping":
                return "Отгрузка товара на вы и выбранный склад/распределение товаров по складам.";
            case "turnkey":
                return "Забор вашего товара, учет, проверка товара, упаковка, подготовка к отгрузке, отгрузка на вами выбранный склад";
            case "credit":
                return "Команда опытных специалистов подберет возможность дополнительного финансирования на самых выгодных условиях!";
            default:
                return "";
        }
    };

    const getServiceStyle = (serviceValue: string) => {
        if (serviceValue === "credit") {
            return "text-red-600 font-semibold bg-red-50 border-l-4 border-red-500";
        }
        return "text-gray-900";
    };

    return (
        <div className={className} id="cta-section">
            {/* Toast уведомление */}
            {showToast && (
                <div className="fixed top-4 right-4 z-50 animate-fadeIn">
                    <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg border border-green-400 max-w-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[40px]">
                                ✓
                            </div>
                            <div>
                                <p className="font-semibold">Заявка отправлена!</p>
                                <p className="text-sm opacity-90">Мы свяжемся с вами!</p>
                            </div>
                            <button
                                onClick={() => setShowToast(false)}
                                className="ml-2 text-white hover:text-gray-200 transition-colors"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Container>
                <div
                    ref={sectionRef}
                    className={`py-20 lg:py-24 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Левая часть - Контент */}
                        <div className="space-y-8">
                            {/* Заголовок */}
                            <div className="space-y-6">
                                <h2
                                    className={cn(
                                        "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    )}
                                >
                                    <span className="text-gray-900 block">Готовы</span>
                                    <span className="text-green-500 block">к росту?</span>
                                </h2>

                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Начните сотрудничество с нами и увеличьте эффективность вашего бизнеса
                                </p>
                            </div>

                            {/* Преимущества */}
                            <div className="space-y-4">
                                {[
                                    "Рассчитаем стоимость за 15 минут",
                                    "Подберем индивидуальное решение",
                                    "Запустим сотрудничество за 1 день"
                                ].map((benefit, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "flex items-center space-x-4 transition-all duration-1000",
                                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                                        )}
                                        style={{
                                            transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms"
                                        }}
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-green-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Доверие */}
                            <div className="flex items-center space-x-6 pt-6 text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-sm">100+ довольных клиентов</span>
                                </div>
                            </div>
                        </div>

                        {/* Правая часть - Форма */}
                        <div
                            className={cn(
                                "bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transition-all duration-1000 delay-300",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            )}
                        >
                            {/* Заголовок формы */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Получите расчет стоимости</h3>
                                <p className="text-gray-600">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Поле услуги */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Выберите услугу *
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            value={service}
                                            onChange={e => setService(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white cursor-pointer"
                                            required
                                        >
                                            {services.map(serviceOption => (
                                                <option
                                                    key={serviceOption.value}
                                                    value={serviceOption.value}
                                                    disabled={serviceOption.disabled}
                                                    className={cn(
                                                        serviceOption.disabled
                                                            ? "text-gray-400"
                                                            : getServiceStyle(serviceOption.value),
                                                        serviceOption.value === "credit" ? "pl-2 py-2" : ""
                                                    )}
                                                >
                                                    {serviceOption.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    {service && (
                                        <p
                                            className={cn(
                                                "text-sm mt-2 p-3 rounded-lg",
                                                service === "credit"
                                                    ? "text-red-700 bg-red-50 border border-red-200"
                                                    : "text-gray-500 bg-gray-50"
                                            )}
                                        >
                                            {getServiceDescription(service)}
                                        </p>
                                    )}
                                </div>

                                {/* Поле имени */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ваше имя *
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Иван Иванов"
                                        required
                                    />
                                </div>

                                {/* Поле телефона */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ваш номер телефона *
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="+7 (999) 999-99-99"
                                        required
                                    />
                                </div>

                                {/* Кнопка отправки */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={cn(
                                        "w-full text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2",
                                        service === "credit"
                                            ? "bg-red-500 hover:bg-red-600 disabled:bg-red-300"
                                            : "bg-green-500 hover:bg-green-600 disabled:bg-green-300"
                                    )}
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            <span>Отправка...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{service === "credit" ? "💰" : "🚛"}</span>
                                            <span>
                                                {service === "credit" ? "Получить консультацию" : "Узнать стоимость"}
                                            </span>
                                        </>
                                    )}
                                </button>

                                {/* Примечание */}
                                <p className="text-xs text-gray-500 text-center">
                                    Нажимая кнопку, вы соглашаетесь с{" "}
                                    <a href="/privacyPolicy" className="text-green-500">
                                        политикой конфиденциальности
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};
