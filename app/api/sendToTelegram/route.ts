import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // Разбор тела запроса
        const { name, phone, service }: { name: string; phone: string; service: string } = await req.json();

        // Маппинг значений услуг на читаемые названия
        const serviceMap: { [key: string]: string } = {
            "receiving-storage": "Приёмка и хранение",
            "packaging-labeling": "Упаковка и маркировка",
            pickup: "Забор товара",
            shipping: "Отгрузка товара",
            turnkey: "Под ключ",
            credit: "Займы/Кредитование для Селлеров" 
        };

        const serviceName = serviceMap[service] || "Не указана";

        const text = `
📩 Новая заявка с сайта:

👤 Имя: ${name}
📞 Телефон: ${phone}
🎯 Услуга: ${serviceName}
        `.trim();

        // Отправка сообщения в Telegram
        const telegramResponse = await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: process.env.TG_CHAT_ID,
                text,
                parse_mode: "HTML"
            })
        });

        if (!telegramResponse.ok) {
            const errText = await telegramResponse.text();
            console.error("Telegram error:", errText);
            return NextResponse.json({ ok: false, error: errText }, { status: 500 });
        }

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (error: unknown) {
        console.error("Server error:", error);
        return NextResponse.json(
            { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
