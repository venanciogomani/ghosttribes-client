import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    }

    const handleNext = () => {
        setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    ];

    return (
        <section className="hero bg-gray-100 dark:bg-slate-500 text-black dark:text-white h-96 w-full relative overflow-hidden">
            <div className="hero-slider flex w-full h-full transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {data.map((image, index) => (
                    <img key={index} src={image} alt="Hero" className="hero-slide object-cover w-full h-full flex-shrink-0" />
                ))}
            </div>
            <div className="slider-btns absolute left-2 right-2 bottom-1/2 mx-auto flex justify-between">
                <div className="prev-btn cursor-pointer bg-slate-900/10 border-2 border-slate-900 text-slate-900 p-2" onClick={handlePrev}>
                    <WestOutlined />
                </div>
                <div className="next-btn cursor-pointer bg-slate-900/10 border-2 border-slate-900 text-slate-900 p-2" onClick={handleNext}>
                    <EastOutlined />
                </div>
            </div>
        </section>
    );
}