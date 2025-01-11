import { useEffect, useState } from "react";

export default function LoadingAnimation() {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [dotCount, setDotCount] = useState(1);
    const totalImages = 9;
    
    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                if (prevIndex >= totalImages) {
                    return 1;
                }
                return prevIndex + 1;
            });
        }, 50);

        const dotInterval = setInterval(() => {
            setDotCount((prevDotCount) => {
                if (prevDotCount >= 3) {
                    return 1;
                }
                return prevDotCount + 1;
            });
        }, 1000);

        return () => {
            clearInterval(imageInterval);
            clearInterval(dotInterval);
        };
    }, []);

    return (
        <div className="p-4 flex flex-col items-center">
            <div className="w-32">
                <img 
                    src={`/img/loading/${currentImageIndex}.png`}
                    alt="Loading animation"
                />
            </div>
            <span className="text-sm text-slate-600 mt-2">
                Loading{'.'.repeat(dotCount)}
            </span>
        </div>
    )
}