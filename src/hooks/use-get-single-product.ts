import { ProductDto } from '../models/product';
import { products } from '../services/dummy';

export function useGetSingleProduct(id?: number) {
    if (!id) return { data: null, error: null };

    const product = products.find((product) => product.id === id);

    const data = mapToProductDto(product);

    return { data, error: null };
}

function mapToProductDto(product: Object | undefined): ProductDto {
    if (!product) return {} as ProductDto;

    return product as ProductDto;
}