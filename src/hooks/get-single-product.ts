import { products } from '../services/dummy';

export function useGetSingleProduct(id?: number) {
    if (!id) return { data: null, error: null };

    const data = products.find((product) => product.id === id);

    return { data, error: null };
}