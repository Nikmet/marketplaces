import Image from "next/image";

interface IHeaderProps {
    className?: string;
}

export const Header = ({ className = "" }: IHeaderProps) => {
    return (
        <header className={`flex items-center justify-between px-8 py-6  text-white ${className}`}>
            {/* Левая часть — логотип */}
            <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="GO Fulfillment" width={80} height={40} priority />
            </div>

            {/* Контакты и кнопка */}
            <div className="flex justify-center flex-col gap-6">
                <div className="flex flex-col text-right leading-tight">
                    <a href="tel:+74954323015" className="font-bold hover:text-yellow-400 transition">
                        +7 (495) 432-30-15
                    </a>
                    <a href="tel:+79855896455" className="font-bold hover:text-yellow-400 transition">
                        +7 (985) 589-64-55
                    </a>
                    <p className="text-xs text-gray-300">Ежедневно: с 9:00 до 22:00</p>
                    <a href="mailto:info@fulfilment-go.ru" className="text-xs hover:text-yellow-400 transition">
                        info@fulfilment-go.ru
                    </a>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md transition">
                    Бесплатная консультация
                </button>
            </div>
        </header>
    );
};
