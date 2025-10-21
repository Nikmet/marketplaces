"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "../container";
import cn from "classnames";

export interface IBeforeAfterProps {
    className?: string;
}

export const BeforeAfterSection = ({ className }: IBeforeAfterProps): React.JSX.Element => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const x = e.clientX - container.left;
        const percentage = (x / container.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - container.left;
        const percentage = (x / container.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", handleMouseUp);
        } else {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleMouseUp);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className={cn(className, "py-20 ")}>
            <Container>
                {/* Заголовок секции */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">До и после нашего фулфилмента</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Слайдер до/после */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        {/* Контейнер слайдера */}
                        <div ref={containerRef} className="relative h-96 md:h-[500px] cursor-default">
                            {/* Изображение "После" */}
                            <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-64 h-64 bg-green-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                        <span className="text-white text-2xl font-bold">После</span>
                                    </div>
                                    <p className="text-gray-700 font-semibold">Упорядоченный склад</p>
                                    <p className="text-gray-600">Быстрая отгрузка</p>
                                </div>
                            </div>

                            {/* Изображение "До" */}
                            <div
                                className="absolute top-0 left-0 h-full overflow-hidden"
                                style={{ width: `${sliderPosition}%` }}
                            >
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-64 h-64 bg-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                            <span className="text-white text-2xl font-bold">До</span>
                                        </div>
                                        <p className="text-gray-700 font-semibold">Хаотичный склад</p>
                                        <p className="text-gray-600">Медленная обработка</p>
                                    </div>
                                </div>
                            </div>

                            {/* Ползунок */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-yellow-400 cursor-grab active:cursor-grabbing flex items-center justify-center transform -translate-x-1/2 transition-transform duration-100 hover:scale-110"
                                style={{ left: `${sliderPosition}%` }}
                                onMouseDown={handleMouseDown}
                                onTouchStart={handleMouseDown}
                            >
                                <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                                    <div className="flex space-x-1">
                                        <div className="w-1 h-3 bg-white"></div>
                                        <div className="w-1 h-3 bg-white"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Подписи */}
                            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
                                До
                            </div>
                            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
                                После
                            </div>
                        </div>
                    </div>

                    {/* Описание */}
                    <div className="text-center mt-8">
                        <p className="text-gray-600 text-lg">Нажмите и перемещайте ползунок, чтобы увидеть разницу</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};
