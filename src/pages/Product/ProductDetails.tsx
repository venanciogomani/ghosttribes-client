import { useState } from "react";
import { 
    AddOutlined, 
    CelebrationOutlined, 
    Facebook, 
    FavoriteBorderOutlined, 
    Instagram, 
    MailOutline, 
    RemoveOutlined, 
    ShoppingCartOutlined, 
    StarBorderOutlined, 
    Twitter, 
    VisibilityOutlined 
} from "@mui/icons-material";

interface IProductDetails {
    title: string;
    price: number;
    oldPrice: number;
}

export function ProductDetails({
    title,
    price,
    oldPrice
}: IProductDetails) {
    const [quantity, setQuantity] = useState<number>(1);
    const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
    
    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleAddToCart() {
        setIsAddedToCart(true);
        setQuantity(1);
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 3000);
    }

    function handleShareTo(link: string) {
        const url = `https://www.${link}.com/share?url=${window.location.href}`;
        window.open(url, "_blank");
    }

    function handleShareByMail() {
        const url = `mailto:?subject=Check out this product&body=${window.location.href}`;
        window.open(url, "_blank");
    }
    
    return (
        <div className="w-full flex flex-col items-start justify-start px-2">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm font-light my-2 line-clamp-4 overflow-hidden text-ellipsis">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-start">
                    <div className="flex items-center justify-start">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <StarBorderOutlined key={index} fontSize="small" className="text-yellow-400 cursor-pointer" />
                        ))}
                    </div>
                    <span 
                        className="text-pink-600 hover:text-pink-800 transition duration-300 ease-in-out text-sm underline 
                        ml-2 cursor-pointer"
                    >
                        62 reviews
                    </span>
                </div>
                <div className="flex items-center justify-start ml-4">
                    <div 
                        className="p-1 mx-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                        title="Share on Facebook"
                        onClick={() => handleShareTo("facebook")}
                    >
                        <Facebook fontSize="small" />
                    </div>
                    <div 
                        className="p-1 mx-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                        title="Share on X"
                        onClick={() => handleShareTo("twitter")}
                    >
                        <Twitter fontSize="small" />
                    </div>
                    <div 
                        className="p-1 mx-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                        title="Share on Instagram"
                        onClick={() => handleShareTo("instagram")}
                    >
                        <Instagram fontSize="small" />
                    </div>
                    <div 
                        className="p-1 mx-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                        title="Share by email"
                        onClick={handleShareByMail}
                    >
                        <MailOutline fontSize="small" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start">
                <span className="line-through text-slate-500">${oldPrice}</span>
                <span className="text-xl font-semibold text-pink-600 ml-2">${price}</span>
            </div>
            {isAddedToCart && (
                <div className="w-full max-w-[240px] py-1 px-2 border-2 border-emerald-600 text-emerald-600 text-sm mt-4">
                    Product added to cart
                </div>
            )}
            <div className="flex items-center justify-start mt-4">
                <div className="flex items-center justify-between">
                    <div 
                        className="p-1 border bg-gray-100 text-slate-700 font-semibold cursor-pointer"
                        onClick={decrement}
                    >
                        <RemoveOutlined fontSize="small"/>
                    </div>
                    <input 
                        type="text"
                        className="p-1 w-8 text-center border border-slate-300"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <div 
                        className="p-1 border bg-gray-100 text-slate-700 font-semibold cursor-pointer"
                        onClick={increment}
                    >
                        <AddOutlined fontSize="small"/>
                    </div>
                </div>
                <div 
                    className={
                        `flex items-center justify-center ml-4 py-2 px-3 text-white text-xs 
                        transition duration-300 ease-in-out uppercase 
                        ${!isAddedToCart ? "cursor-pointer bg-pink-600 hover:bg-pink-700" 
                            : "cursor-not-allowed bg-emerald-600"
                        }`
                    }
                    onClick={isAddedToCart ? () => {} : handleAddToCart}
                >
                    {isAddedToCart ? 
                        <CelebrationOutlined fontSize="small"/> 
                        : <ShoppingCartOutlined fontSize="small" />
                    }
                    <span className="ml-2">{isAddedToCart ? "Success!" : "Add to cart"}</span>
                </div>
            </div>
            <div className="flex items-center justify-start mt-4">
                <div 
                    className="flex items-center justify-center py-2 px-3 text-slate-600 text-xs 
                    cursor-pointer hover:text-slate-700 uppercase border border-slate-600"
                >
                    <FavoriteBorderOutlined fontSize="small" />
                    <span className="ml-2">Add to wishlist</span>
                </div>
                <div 
                    className="flex items-center justify-center py-2 px-3 text-slate-600 text-xs 
                    cursor-pointer hover:text-slate-700 uppercase border border-slate-600 ml-4"
                >
                    <VisibilityOutlined fontSize="small" />
                    <span className="ml-2">Compare</span>
                </div>
            </div>
        </div>
    )
}