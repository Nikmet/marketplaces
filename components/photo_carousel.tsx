"use client";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PhotoCarouselProps {
    images: string[];
}

export const PhotoCarousel = ({ images }: PhotoCarouselProps) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (swiperInstance && swiperInstance.params.navigation) {
            const navigation = swiperInstance.params.navigation as any;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className="relative w-full mx-auto py-10">
            {/* Контейнер для слайдов и пагинации */}
            <div className="relative">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination" // Указываем кастомный элемент для пагинации
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                    onSwiper={setSwiperInstance}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    className="rounded-xl"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="overflow-hidden rounded-xl relative group">
                            <Image
                                src={src}
                                alt={`photo-${index}`}
                                width={400}
                                height={500}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Кнопки навигации внутри контейнера слайдов */}
                <button
                    ref={prevRef}
                    className="absolute top-1/2 -left-5 -translate-y-1/2 z-10 
                    bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center 
                    hover:bg-yellow-500 transition shadow-lg cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    ref={nextRef}
                    className="absolute top-1/2 -right-5 -translate-y-1/2 z-10 
                    bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center 
                    hover:bg-yellow-500 transition shadow-lg cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Кастомная пагинация под фотографиями */}
                <div className="custom-pagination mt-8 flex justify-center items-center space-x-2"></div>
            </div>
        </div>
    );
};
