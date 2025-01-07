import { useMemo } from "react";
import { products } from "../../../services/dummy";
import ProductCard from "../ProductCard/ProductCard";

interface IProducts {
    title: string;
    description?: string;
    limit?: number;
}

export default function ProductsCarousel(
    { title = "Featured Products", limit }: IProducts
) {
    const data = useMemo(() => {
        return products;
    }, []);
    
    const pageLimit = limit || data.length;
    
    return (
        <div className="products flex flex-col items-center justify-center mx-auto max-w-7xl px-0 lg:px-8 py-6">
            <div className="flex justify-between w-full p-2 relative inline-block">
                <h1 className="text-xl font-bold">{title}</h1>
                <span className="absolute left-2 bottom-0 w-[100px] h-[2px] bg-pink-500 flex items-center"></span>
                <button className="btn py-1 px-2 bg-slate-700 text-white text-sm font-semibold">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-4">
                {data.map((product) => (
                    <ProductCard 
                        key={product.id}
                        title={product.title}
                        oldPrice={product.oldPrice}
                        price={product.price}
                        img={product.img[0]}
                        isNew={product.isNew}
                    />
                )).slice(0, pageLimit)}
            </div>
        </div>
    );
}