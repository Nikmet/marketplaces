"use client";
import { useState, useRef, useEffect } from "react";

export const LeadForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            value: "",
            label: "Выберите услугу",
            disabled: true
        },
        {
            value: "receiving-storage",
            label: "Приёмка и хранение"
        },
        {
            value: "packaging-labeling",
            label: "Упаковка и маркировка"
        },
        {
            value: "pickup",
            label: "Забор товара"
        },
        {
            value: "shipping",
            label: "Отгрузка товара"
        },
        {
            value: "turnkey",
            label: "Под ключ"
        },
        {
            value: "credit",
            label: "Займы/Кредитование для Селлеров"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
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
            return "text-red-600 font-semibold";
        }
        return "text-black";
    };

    const getButtonStyle = () => {
        if (service === "credit") {
            return "bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white";
        }
        return "bg-green-400 hover:bg-green-500 disabled:bg-green-300 text-black";
    };

    const getButtonIcon = () => {
        if (service === "credit") {
            return "💰";
        }
        return "🚛";
    };

    const getButtonText = () => {
        if (service === "credit") {
            return "Получить консультацию";
        }
        return "Узнать стоимость";
    };

    return (
        <>
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

            <div
                ref={formRef}
                className="relative flex flex-col items-center justify-center text-center text-white w-full px-4 sm:px-6 lg:px-8"
            >
                {/* Заголовок */}
                <h2
                    className={`
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight
                    transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                >
                    Фулфилмент для маркетплейсов
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className={`
                        flex flex-col gap-4 sm:gap-6 w-full max-w-4xl mx-auto p-4 sm:p-6
                        transition-all duration-1000 ease-out
                        ${isVisible ? "opacity-100" : "opacity-0"}
                    `}
                >
                    {/* Поле услуги */}
                    <div className="flex-1 flex flex-col text-left w-full">
                        <label
                            htmlFor="service"
                            className={`
                                text-lg sm:text-xl mb-2 sm:mb-3 font-medium
                                transition-all duration-700 ease-out
                                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                            `}
                        >
                            Выберите услугу <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex-1">
                            <select
                                id="service"
                                value={service}
                                onChange={e => setService(e.target.value)}
                                className={`
            w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg md:text-xl rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400
            transition-all duration-300 border-2
            h-[52px] sm:h-[60px] md:h-[68px] cursor-pointer bg-white
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            appearance-none pr-12
            ${!service ? "text-gray-500 border-gray-300 hover:border-green-400 " : "text-black"}
        `}
                                required
                            >
                                {services.map(serviceOption => (
                                    <option
                                        key={serviceOption.value}
                                        value={serviceOption.value}
                                        disabled={serviceOption.disabled}
                                        className={`
                    ${serviceOption.disabled ? "text-gray-400" : getServiceStyle(serviceOption.value)}
                    ${
                        serviceOption.value === service
                            ? serviceOption.value === "credit"
                                ? "bg-red-100 text-red-800"
                                : "bg-green-100 text-green-800"
                            : ""
                    }
                `}
                                    >
                                        {serviceOption.label}
                                    </option>
                                ))}
                            </select>

                            {/* Кастомная стрелка */}
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg
                                    className={`w-5 h-5 transition-colors duration-300 ${
                                        !service
                                            ? "text-gray-400"
                                            : service === "credit"
                                            ? "text-red-600"
                                            : "text-green-600"
                                    }`}
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
                                className={`
                                text-sm sm:text-base mt-2 transition-all duration-500 p-3 rounded-lg
                                ${isVisible ? "opacity-100" : "opacity-0"}
                                ${
                                    service === "credit"
                                        ? "text-red-700 bg-red-50 border border-red-200"
                                        : "text-gray-300 bg-gray-800/50"
                                }
                            `}
                            >
                                {getServiceDescription(service)}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 w-full">
                        {/* Поле имени */}
                        <div className="flex-1 flex flex-col text-left w-full">
                            <label
                                htmlFor="name"
                                className={`
                                    text-lg sm:text-xl mb-2 sm:mb-3 font-medium
                                    transition-all duration-700 ease-out
                                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                                `}
                            >
                                Ваше имя <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className={`
                                    px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg md:text-xl rounded-lg text-black bg-white 
                                    focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent 
                                    transition-all duration-300 border border-gray-300 hover:border-green-400
                                    h-[52px] sm:h-[60px] md:h-[68px]
                                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                                `}
                                placeholder="Иван Иванов"
                                required
                            />
                        </div>

                        {/* Поле телефона */}
                        <div className="flex-1 flex flex-col text-left w-full">
                            <label
                                htmlFor="phone"
                                className={`
                                    text-lg sm:text-xl mb-2 sm:mb-3 font-medium
                                    transition-all duration-700 ease-out
                                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                                `}
                            >
                                Ваш номер телефона <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className={`
                                    px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg md:text-xl rounded-lg text-black bg-white 
                                    focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent 
                                    transition-all duration-300 border border-gray-300 hover:border-green-400
                                    h-[52px] sm:h-[60px] md:h-[68px]
                                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                                `}
                                placeholder="+7 (999) 999-99-99"
                                required
                            />
                        </div>
                    </div>

                    {/* Кнопка */}
                    <div className="flex flex-col text-left w-full">
                        <button
                            id="button"
                            type="submit"
                            disabled={loading}
                            className={`
                                flex items-center justify-center gap-2 font-semibold 
                                px-6 sm:px-8 rounded-lg transition-all duration-500 
                                disabled:cursor-not-allowed w-full text-base sm:text-lg md:text-xl
                                h-[52px] sm:h-[60px] md:h-[68px] min-h-[52px]
                                border-2 border-transparent hover:shadow-lg
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                                ${getButtonStyle()}
                                ${service === "credit" ? "hover:border-red-400" : "hover:border-green-400"}
                            `}
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 sm:h-6 sm:w-6"
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
                                    Отправка...
                                </>
                            ) : (
                                <>
                                    <span className="text-lg sm:text-xl">{getButtonIcon()}</span>
                                    {getButtonText()}
                                </>
                            )}
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-5">
                            Нажимая кнопку, вы соглашаетесь с <a href="/privacyPolicy" className="text-green-100">политикой конфиденциальности</a>
                        </p>
                    </div>
                </form>
            </div>

            <style jsx global>{`
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
        </>
    );
};
