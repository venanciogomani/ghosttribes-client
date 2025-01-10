import { ProductDto } from "../models/product";
import { products } from "../services/dummy";

export function useGetProducts(
    page: number = 1,
    pageSize: number = 12,
    categoryId?: number, 
    tagId?: string,
) {
    const filteredProducts = products.filter(product => {
        // TODO: handle pagination on server-side once api is implemented
        if (categoryId && tagId) {
            return product.categoryId === categoryId && product.tag.includes(tagId);
        } else if (categoryId) {
            return product.categoryId === categoryId;
        } else if (tagId) {
            return product.tag.includes(tagId);
        }
        return true;
    });
    
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    const data = mapToProductsDto(paginatedProducts);

    return { data, error: null };
}

function mapToProductsDto(data: Array<any>): ProductDto[] {
    return data.map((product) => ({ 
        id: product.id, 
        img: product.img, 
        title: product.title, 
        isNew: product.isNew, 
        oldPrice: product.oldPrice, 
        price: product.price, 
        category: product.category, 
        categoryId: product.categoryId, 
        tag: product.tag, 
        excerpt: product.excerpt, 
        description: product.description
    }));
}