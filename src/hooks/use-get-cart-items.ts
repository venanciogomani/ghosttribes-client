import { useEffect, useState } from "react";
import { CartItemDto } from "../models/product";
import { products } from "../services/dummy";

export function useGetCartItems(pageLimit?: number) {
    const [cartItems, setCartItems] = useState<CartItemDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCartItems = async () => {
        setIsLoading(true);
        setTimeout(() => {
            const cartItems: CartItemDto[] = products.map((product) => ({
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
    }, [pageLimit]);

    const addToCart = (productId: number, quantity: number) => {
        // Simulate adding item to cart
        const existingItem = cartItems.find((item) => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const product = products.find((product) => product.id === productId);
            if (product) {
                const cartItem: CartItemDto = {
                    id: Math.random().toString(36).substr(2, 9),
                    product,
                    quantity,
                };
                setCartItems([...cartItems, cartItem]);
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