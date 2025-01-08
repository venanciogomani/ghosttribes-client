import { useEffect, useState } from "react";

interface IProductImage {
    img: string[];
}

export function ProductImage({
    img
}: IProductImage) {
    const [selectedImage, setSelectedImage] = useState<string>("");

    useEffect(() => {
        if (img) {
            setSelectedImage(img[0]);
        }
    }, [img]);
    
    return (
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
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}