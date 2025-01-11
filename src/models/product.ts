export interface ProductDto {
    id: number;
    img: string[];
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    category: string;
    tag: string[];
    excerpt?: string;
    description?: string;
}

export interface CartItemDto {
    id: string;
    product: ProductDto;
    quantity: number;
}