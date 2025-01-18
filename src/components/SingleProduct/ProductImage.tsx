import { ChevronLeft, ChevronRight, CloseOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

interface IProductImage {
    img: string[];
}

export function ProductImage({
    img
}: IProductImage) {
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [openSlider, setOpenSlider] = useState(false);

    useEffect(() => {
        if (img) {
            setSelectedImage(img[0]);
        }
    }, [img]);
    
    return (
        <>
            <div className="flex items-start justify-between w-full max-h-[490px] border">
                <div className="w-1/5 h-16 p-2">
                    <div className="flex flex-col items-start justify-start h-full">
                        {img.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="product"
                                className="object-cover w-full max-h-[100px] h-auto cursor-pointer mb-2"
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-4/5 h-full p-2">
                    <img
                        src={selectedImage}
                        alt="product"
                        className="object-cover w-full h-full cursor-pointer"
                        onClick={() => setOpenSlider(true)}
                    />
                </div>
            </div>
            {openSlider && <ProductImageSlider img={img} closeSlider={() => setOpenSlider(false)} />}
        </>
    )
}

interface IProductImageSlider {
    img: string[];
    closeSlider: () => void;
}
function ProductImageSlider({
    img,
    closeSlider
}: IProductImageSlider) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showCloseSlider, setShowCloseSlider] = useState(false);

    const nextSlider = () => {
        setCurrentImageIndex((current) => (current + 1) % img.length);
    };

    const prevSlider = () => {
        setCurrentImageIndex((prev) => prev === 0 ? img.length - 1 : prev - 1);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black w-full h-[calc(100%_+_5rem)] overflow-hidden bg-black/80 -top-20">
            <div 
                className="w-1/2 h-[calc(100%_-_8rem)] mt-24 relative"
                onMouseOver={() => setShowCloseSlider(true)}
                onMouseOut={() => setShowCloseSlider(false)}
            >
                <img
                    src={img[currentImageIndex]}
                    alt="product"
                    className="object-cover w-full h-full"
                />
                {showCloseSlider && (
                    <div className="p-1 bg-black/80 absolute top-0 right-0 flex items-center justify-center">
                        <CloseOutlined 
                            className="text-white cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" 
                            fontSize="large"
                            onClick={closeSlider}
                        />
                    </div>
                )}
                {img.length > 1 && (
                    <div className="flex justify-center items-center absolute bottom-0 w-full h-16">
                        <div className="p-1 border-2 border-rose-600 bg-transparent">
                            <ChevronLeft 
                                className="text-gray-300 cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out" 
                                fontSize="large"
                                onClick={prevSlider}
                            />
                        </div>
                        <div className="p-1 border-2 border-rose-600 bg-transparent ml-4">
                            <ChevronRight 
                                className="text-gray-300 cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out" 
                                fontSize="large"
                                onClick={nextSlider}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}