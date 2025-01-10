import { useState } from "react";
import { 
    AddOutlined, 
    CelebrationOutlined, 
    CheckCircleOutline, 
    CloseOutlined, 
    ErrorOutline, 
    FavoriteBorderOutlined, 
    RemoveOutlined, 
    ShoppingCartOutlined, 
    StarBorderOutlined, 
    VisibilityOutlined 
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import ShareOn from "../shared/ShareOn/ShareOn";

interface IProductDetails {
    title: string;
    price: number;
    oldPrice: number;
    excerpt?: string;
    category: string;
    tag: string[];
}

export function ProductDetails({
    title,
    price,
    oldPrice,
    excerpt,
    category,
    tag
}: IProductDetails) {
    const [quantity, setQuantity] = useState<number>(1);
    const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
    const [inputError, setInputError] = useState<string>("");
    
    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleInputAddToCart(value: string) {
        const numberValue = parseInt(value);
        if (!isNaN(numberValue)) {
            setQuantity(numberValue);
        } else {
            setQuantity(1);
        }
    }

    function confirmInputChange() {
        setIsAddedToCart(true);
        setQuantity(1);
        if (inputError) {
            setInputError("");
        }
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 3000);
    }

    function cancelInputChange() {
        setQuantity(1);
        setInputError("")
    }

    function handleAddToCart() {
        if (quantity > 100) {
            const flagError = `That's one large number! Are you sure that this is the correct number of items you want?`;
            setInputError(flagError);
        } else {
            confirmInputChange();
        }
    }
    
    return (
        <div className="w-full flex flex-col items-start justify-start px-2">
            <h1 className="text-2xl font-semibold">{title}</h1>
            {excerpt && (
                <p className="text-sm font-light my-2 line-clamp-4 overflow-hidden text-ellipsis">
                    {excerpt}
                </p>
            )}
            <div className="flex items-center justify-start">
                {oldPrice > 0 && (
                    <span className="line-through text-yellow-600">${oldPrice}</span>
                )}
                <span className="text-xl font-semibold text-pink-600 ml-2">${price}</span>
            </div>
            {isAddedToCart && (
                <div className="w-full max-w-[240px] py-1 px-2 border-2 border-emerald-600 text-emerald-600 text-sm mt-4">
                    Product added to cart
                </div>
            )}
            {inputError && (
                <div className="w-full max-w-[340px] py-1 px-2 border-2 border-red-600 text-sm mt-4 flex items-center justify-between">
                    <div className="flex items-center justify-start text-red-600">
                        <ErrorOutline fontSize="small" />
                        <span className="ml-4 text-xs">{inputError}</span>
                    </div>
                    <div className="flex items-center justify-start px-1">
                        <div 
                            className="cursor-pointer mr-1 text-emerald-600"
                            onClick={confirmInputChange}
                        >
                            <CheckCircleOutline fontSize="small"/>
                        </div>
                        <div 
                            className="cursor-pointer text-red-600"
                            onClick={cancelInputChange}
                        >
                            <CloseOutlined fontSize="small"/>
                        </div>
                    </div>
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
                        className="p-1 min-w-8 max-w-16 text-center border border-slate-300"
                        value={quantity}
                        onChange={(e) => handleInputAddToCart(e.target.value)}
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
            <div className="flex flex-col justify-start items-start py-2 mt-4 border-t-2">
                <div className="flex items-center justify-start px-1">
                    <div className="flex items-center justify-start">
                        <span className="font-semibold text-slate-600 mr-1">4.8</span>
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
                <ShareOn />
            </div>
            <div className="flex items-center justify-start py-2 border-t-2 w-full">
                <span className="py-1 mr-2 text-xs text-slate-600 w-16">Category:</span>
                <Link 
                    to={`/store/category/${category.toLowerCase()}`}
                    className="py-1 px-2 mx-1 border-2 border-pink-600 text-xs text-pink-600 cursor-pointer"
                >
                    {category}
                </Link>
            </div>
            {Boolean(tag.length) && (
                <div className="flex items-center justify-start py-2 border-t">
                    <span className="py-1 mr-2 text-xs text-slate-600 w-16">Tags:</span>
                    {tag.map((name, index) => {
                        return (
                            <Link
                                key={index} 
                                to={`/store/tag/${name}`}
                                className="py-1 px-2 mx-1 border-2 border-pink-600 text-xs text-pink-600 cursor-pointer"
                            >
                                {name}
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}