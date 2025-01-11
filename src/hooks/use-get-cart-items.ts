import { useEffect, useState } from "react";
import { CartItemDto, ProductDto } from "../models/product";
import { cartProducts } from "../services/dummy";

export function useGetCartItems(pageLimit?: number) {
    const [cartItems, setCartItems] = useState<CartItemDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCartItems = async () => {
        setIsLoading(true);
        setTimeout(() => {
            const cartItems: CartItemDto[] = cartProducts.map((product) => ({
                id: Math.random().toString(36).substr(2, 9),
                product,
                quantity: 1,
            }));
            const limit = pageLimit || cartItems.length;
            setCartItems(cartItems.slice(0, limit));
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const addToCart = (product: ProductDto, quantity: number) => {
        // Simulate adding item to cart
        const existingItem = cartItems.find((item) => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            if (product) {
                const cartItem: CartItemDto = {
                    id: Math.random().toString(36).substr(2, 9),
                    product,
                    quantity,
                };
                const newCartItems = [...cartItems, cartItem];
                setCartItems(newCartItems);
            }
        }
    };

    const removeFromCart = (cartItemId: string) => {
        const updatedCartItems = cartItems.filter((item) => item.id!== cartItemId);
        setCartItems(updatedCartItems);
    };

    const updateCartQuantity = (cartItemId: string, newQuantity: number) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === cartItemId? {...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const isLoadingCart = isLoading;
    return {
        cartItems,
        fetchCartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        totalPrice,
        isLoadingCart,
        cartItemCount: cartItems.length,
    };
}