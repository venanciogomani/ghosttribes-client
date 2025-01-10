import { useGetProducts } from "../../hooks/use-get-products"
import ProductCard from "../shared/ProductCard/ProductCard";

interface IProductPlacement {
    categoryId?: number;
    tagIds?: string[]
}
export function ProductPlacement({
    categoryId,
    tagIds
}: IProductPlacement) {
    const tagId = tagIds ? tagIds[0] : undefined;
    const { data, error } = useGetProducts(1, 3, categoryId, tagId);

    if (!data || data.length === 0) return null;

    return (
        <div className="hidden md:flex flex-col w-1/5 py-2">
            <h1 className="text-lg font-semibold text-slate-600 px-2">Trending Products</h1>
            <div className="flex flex-col">
                {data.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        img={product.img[0]}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        isNew={product.isNew}
                    />
                ))}
            </div>
        </div>
    )
}