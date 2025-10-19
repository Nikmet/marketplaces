"use client";
import { useState } from "react";

export const LeadForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

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
                setSent(true);
                setName("");
                setPhone("");
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
        <div className="relative flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-7xl font-bold mb-8">Фулфилмент для маркетплейсов</h2>

            {!sent ? (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-end gap-4 p-4 rounded-lg">
                    <div className="flex flex-col text-left">
                        <label htmlFor="name" className="text-xl mb-1">
                            Ваше имя <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="px-5 py-3 text-xl rounded-md text-black bg-white focus:outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="phone" className="text-xl mb-1">
                            Ваш номер телефона <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            className="px-5 py-3 text-xl rounded-md text-black bg-white focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex  text-xl items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-3 rounded-md transition"
                    >
                        {loading ? "Отправка..." : "✈ Узнать стоимость"}
                    </button>
                </form>
            ) : (
                <p className="text-xl font-semibold text-yellow-400 mt-6">Спасибо! Мы скоро свяжемся с вами.</p>
            )}
        </div>
    );
};
