import React from "react";
import Image from "next/image";

export interface Marketplace {
    name: string;
    shortName: string;
    logo: React.ReactNode;
}

export const marketplaces: Marketplace[] = [
    {
        name: "Wildberries",
        shortName: "WB",
        logo: <Image src="/wb.svg" alt="Wildberries" width={80} height={40} className="w-20 h-10 object-contain" />
    },
    {
        name: "Ozon",
        shortName: "Ozon",
        logo: <Image src="/ozon.svg" alt="Ozon" width={80} height={40} className="w-20 h-10 object-contain" />
    },
    {
        name: "Яндекс Маркет",
        shortName: "Яндекс",
        logo: (
            <Image src="/yandex.svg" alt="Яндекс Маркет" width={80} height={40} className="w-20 h-10 object-contain" />
        )
    },
    {
        name: "Сбермаркет",
        shortName: "Сбер",
        logo: <Image src="/sber.png" alt="Сбермаркет" width={80} height={40} className="w-20 h-10 object-contain" />
    },
    {
        name: "Интернет магазины",
        shortName: "Online",
        logo: (
            <Image
                src="/cart.svg"
                alt="Интернет магазины"
                width={80}
                height={40}
                className="w-20 h-10 object-contain"
            />
        )
    }
];
