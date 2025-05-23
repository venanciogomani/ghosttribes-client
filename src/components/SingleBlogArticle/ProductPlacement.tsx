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
    const { data, error } = useGetProducts(4, categoryId, tagId);

    if (!data || data.length === 0) return null;

    return (
        <div className="hidden md:flex flex-col w-1/5 py-2">
            <h1 className="text-lg font-semibold text-slate-600 px-2">Trending Products</h1>
            <div className="flex flex-col">
                {data.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}