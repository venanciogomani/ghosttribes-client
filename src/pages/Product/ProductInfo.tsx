import { useState } from "react";
import { ProductReviews } from "./ProductReviews";

interface IProductInfo {
    description?: string;
    specifications?: string;
    reviews?: string;
}

enum Tab {
    Description = "Description",
    Specifications = "Specifications",
    Reviews = "Reviews"
}

export function ProductInfo({
    description,
    specifications,
    reviews
}: IProductInfo) {
    const [selectedTab, setSelectedTab] = useState<string>(Tab.Description);
    
    return (
        <div className="flex flex-col items-start justify-start w-full mt-4">
            <div className="flex items-center justify-start w-full">
                {Object.values(Tab).map((name, index) => {
                    return (
                        <ProductTabNav
                            key={index}
                            selected={name === selectedTab}
                            name={name}
                            onClick={setSelectedTab}
                        />
                    )
                })}
            </div>
            {selectedTab === Tab.Description && (
                <div className="mt-4">
                    {description || ""}
                </div>
            ) || selectedTab === Tab.Specifications && (
                <div className="mt-4">Specifications</div>
            ) || selectedTab === Tab.Reviews && (
                <ProductReviews />
            )}
        </div>
    )
}

interface IProductTabNav {
    selected: boolean;
    name: string;
    onClick: (value: string) => void;
}
function ProductTabNav({
    selected,
    name,
    onClick
}: IProductTabNav) {
    return (
        <div 
            className={
                `text-sm font-semibold px-4 py-2 border-gray-300 
                ${selected ? 
                    "text-pink-600 border-l-2 border-r-2 border-t-2" 
                    : "border-b-2 text-slate-900"}`
            }
        >
            <span 
                onClick={() => onClick(name)} 
                className={`${selected ? "" : "cursor-pointer"}`}
            >
                {name}
            </span>
        </div>
    )
}