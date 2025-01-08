import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useGetSingleProduct } from "../../hooks/get-single-product";
import { ProductImage } from "./ProductImage";
import { ProductDetails } from "./ProductDetails";
import { ProductHeader } from "./ProductHeader";
import { ProductError } from "./ProductError";
import { NoContentFound } from "./NoContentFound";

enum Tab {
    Description = "description",
    Specifications = "specifications",
    Reviews = "reviews"
}

export default function Product() {
    const [selectedTab, setSelectedTab] = useState<string>(Tab.Description);

    const { id } = useParams();
    const { data, error } = useGetSingleProduct(Number(id));

    if (error) {
        return <ProductError title="Something went wrong" />
    }

    if (!data || !data.id) {
        return <NoContentFound title="No product found" />
    }
    
    return (
        <div className="single-product flex flex-col items-center justify-center relative">
            <ProductHeader
                title={data?.title}
                img={data?.img[0]}
            />
            <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-2 lg:px-8 py-6 mt-4 w-full">
                {/* product overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <ProductImage
                        img={data.img}
                    />
                    <ProductDetails
                        title={data.title}
                        price={data.price}
                        oldPrice={data.oldPrice}
                    />
                </div>
                
                {/* product description, specs, reviews */}
                <div className="flex flex-col items-start justify-start w-full mt-4">
                    <div className="flex items-center jusifty-start w-full">
                        <div 
                            className={
                                `text-sm font-semibold px-4 py-2 border-gray-300 
                                ${selectedTab === Tab.Description ? 
                                    "text-pink-600 border-l-2 border-r-2 border-t-2" 
                                    : "border-b-2 text-slate-900"}`
                            }
                        >
                            <span 
                                onClick={() => setSelectedTab(Tab.Description)} 
                                className={`${selectedTab === Tab.Description ? "" : "cursor-pointer"}`}
                            >
                                Description
                            </span>
                        </div>
                        <div 
                            className={
                                `text-sm font-semibold px-4 py-2 border-gray-300 
                                ${selectedTab === Tab.Specifications ? 
                                    "text-pink-600 border-l-2 border-r-2 border-t-2" 
                                    : "border-b-2 text-slate-900"}`
                            }
                        >
                            <span 
                                onClick={() => setSelectedTab(Tab.Specifications)} 
                                className={`${selectedTab === Tab.Specifications ? "" : "cursor-pointer"}`}
                            >
                                Specifications
                            </span>
                        </div>
                        <div 
                            className={
                                `text-sm font-semibold px-4 py-2 border-gray-300 
                                ${selectedTab === Tab.Reviews ? 
                                    "text-pink-600 border-l-2 border-r-2 border-t-2" 
                                    : "border-b-2 text-slate-900"}`
                            }
                        >
                            <span 
                                onClick={() => setSelectedTab(Tab.Reviews)} 
                                className={`${selectedTab === Tab.Reviews ? "" : "cursor-pointer"}`}
                            >
                                Reviews
                            </span>
                        </div>
                    </div>
                    {selectedTab === Tab.Description && (
                        <div className="mt-4">Description</div>
                    ) || selectedTab === Tab.Specifications && (
                        <div className="mt-4">Specifications</div>
                    ) || selectedTab === Tab.Reviews && (
                        <div className="mt-4">Reviews</div>
                    )}
                </div>

                {/* related products */}
            </div>
        </div>
    );
}