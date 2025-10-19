import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // Разбор тела запроса
        const { name, phone }: { name: string; phone: string } = await req.json();

        const text = `
📩 Новая заявка с сайта:
👤 Имя: ${name}
📧 Номер телефона: ${phone}
`;

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
