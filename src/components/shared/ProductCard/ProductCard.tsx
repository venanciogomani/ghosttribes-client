import { CelebrationOutlined, CheckCircleOutline, FavoriteOutlined, ShoppingCartOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCartItems } from "../../../hooks/use-get-cart-items";
import { ProductDto } from "../../../models/product";

interface ICard {
    product: ProductDto;
}

export default function ProductCard({ product }: ICard) {
    const [isHovered, setIsHovered] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const navigate = useNavigate();
    const { addToCart } = useGetCartItems();

    function handleAddToCart() {
        addToCart(product, 1);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    return (
        <div 
            className="product w-full flex flex-col p-2 border-2 cursor-pointer border-slate-900/0 hover:border-slate-900 transition ease-in-out duration-300 relative"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <div className="w-full h-80">
                <img src={product.img[0]} alt={product.title} className="object-cover w-full h-full flex-shrink-0" />
            </div>
            <div className="py-2">
                {addedToCart && (
                    <div className="flex items-center justify-center w-full bg-emerald-600 py-1 px-2 gap-x-2 lg:gap-x-4 mb-2">
                        <p className="text-sm font-semibold text-white">Added to cart</p>
                        <CelebrationOutlined className="text-white" fontSize="small"/> 
                    </div>
                )}
                <div className="flex items-center justify-center w-full border-2 border-pink-600 py-1 px-2 gap-x-2 lg:gap-x-4">
                    {product.oldPrice > 0 && <p className="text-sm text-slate-600 line-through">${product.oldPrice}</p>}
                    <p className="text-sm font-semibold text-slate-700">${product.price}</p>
                </div>
                <h2 
                    className="pt-2 font-semibold text-slate-800 hover:text-pink-600 transition ease-in-out duration-300"
                    onClick={() => navigate(`/store/product/${product.id}`)}
                >
                    {product.title}
                </h2>
            </div>
            {product.isNew && <div className="new-product absolute top-2 left-2 bg-pink-600 text-white text-xs font-semibold p-1">New</div>}
            {isHovered && 
                <div className="absolute top-2 right-2 flex flex-col gap-y-2 p-2">
                    <div className="bg-slate-800 hover:bg-pink-600 p-1 rounded-full transition ease-in-out duration-300 flex items-center justify-center">
                        {addedToCart ? (
                            <CheckCircleOutline 
                                className="text-white cursor-not-allowed" 
                                fontSize="small"
                            />
                        ) : (
                            <ShoppingCartOutlined 
                                className="text-white" 
                                fontSize="small" 
                                onClick={handleAddToCart}
                            />    
                        )}
                    </div>
                    <div className="bg-slate-800 hover:bg-pink-600 p-1 rounded-full transition ease-in-out duration-300 flex items-center justify-center">
                        <FavoriteOutlined className="text-white" fontSize="small" />
                    </div>
                    <div className="bg-slate-800 hover:bg-pink-600 p-1 rounded-full transition ease-in-out duration-300 flex items-center justify-center">
                        <VisibilityOutlined className="text-white" fontSize="small" />
                    </div>
                </div>
            }
        </div>
    )
}