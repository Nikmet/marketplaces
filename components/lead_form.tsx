"use client";
import { useState, useRef, useEffect } from "react";

export const LeadForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

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
        if (!name || !phone) return;

        setLoading(true);
        try {
            const res = await fetch("/api/sendToTelegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone })
            });

            if (res.ok) {
                setName("");
                setPhone("");
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
                        flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 w-full max-w-4xl mx-auto p-4 sm:p-6
                        transition-all duration-1000 ease-out
                        ${isVisible ? "opacity-100" : "opacity-0"}
                    `}
                >
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
                                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent 
                                transition-all duration-300 border border-gray-300 hover:border-yellow-400
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
                                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent 
                                transition-all duration-300 border border-gray-300 hover:border-yellow-400
                                h-[52px] sm:h-[60px] md:h-[68px]
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                            `}
                            placeholder="+7 (999) 999-99-99"
                            required
                        />
                    </div>

                    {/* Кнопка */}
                    <div className="flex flex-col text-left w-full md:w-auto">
                        <label
                            htmlFor="button"
                            className={`
                                text-lg sm:text-xl mb-2 sm:mb-3 font-medium
                                transition-all duration-700 ease-out
                                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                            `}
                        >
                            &nbsp;
                        </label>
                        <button
                            id="button"
                            type="submit"
                            disabled={loading}
                            className={`
                                flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 
                                text-black font-semibold px-6 sm:px-8 rounded-lg transition-all duration-500 
                                disabled:cursor-not-allowed w-full text-base sm:text-lg md:text-xl
                                h-[52px] sm:h-[60px] md:h-[68px] min-h-[52px]
                                border-2 border-transparent hover:border-yellow-600 hover:shadow-lg
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
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
                                    <span className="text-lg sm:text-xl">🚛</span>
                                    Узнать стоимость
                                </>
                            )}
                        </button>
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
