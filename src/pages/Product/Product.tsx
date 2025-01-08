import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useGetSingleProduct } from "../../hooks/get-single-product";
import { ProductImage } from "./ProductImage";
import { ProductDetails } from "./ProductDetails";
import { ProductHeader } from "./ProductHeader";
import { ProductError } from "./ProductError";
import { NoContentFound } from "./NoContentFound";
import { ProductInfo } from "./ProductInfo";
import ProductsCarousel from "../../components/shared/ProductsCarousel/ProductsCarousel";

export default function Product() {
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
                        excerpt={data.excerpt}
                        category={data.category}
                        tag={data.tag}
                    />
                </div>
                
                {/* product description, specs, reviews */}
                <ProductInfo
                    description={data.description}
                />
            </div>
            <ProductsCarousel title="Related Producs" limit={4} showMore={false} />
        </div>
    );
}