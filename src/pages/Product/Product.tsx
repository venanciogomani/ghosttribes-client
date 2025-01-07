import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
    AddOutlined, 
    ArrowForwardOutlined, 
    CelebrationOutlined, 
    FavoriteBorderOutlined, 
    RemoveOutlined, 
    ShoppingCartOutlined, 
    VisibilityOutlined 
} from "@mui/icons-material";
import { useGetSingleProduct } from "../../hooks/get-single-product";

export default function Product() {
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

    const { id } = useParams();
    const { data, error } = useGetSingleProduct(Number(id));

    useEffect(() => {
        if (data) {
            setSelectedImage(data?.img[0]);
        }
    }, [data]);

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
    
    return (
        <div className="single-product flex flex-col items-center justify-center relative">
            <div className="w-full text-center">
                <img
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                    alt="category"
                    className="object-cover w-full h-40"
                />
                <div className="absolute left-0 top-0 w-full h-40 bg-black/50 flex flex-col items-center justify-center text-white">
                    <h1 className="text-xl font-bold">{data?.title || "No product found"}</h1>
                    <div className="flex justify-center w-full mt-2">
                        <div className="flex items-center">
                            <Link to="/" className="font-semibold">Home</Link>
                            <ArrowForwardOutlined className="mx-2" fontSize="small" />
                            <Link to="/store" className="font-semibold">Store</Link>
                            <ArrowForwardOutlined className="mx-2" fontSize="small" />
                            <span className="text-pink-600">{data?.title || "No product found"}</span>
                        </div>
                    </div>
                </div>
            </div>
            {error ? (
                <div className="flex flex-col items-center justify-center w-full h-40">
                    <h1>Error loading product</h1>
                    <p>
                        That's on us! Please try again later or go back to{" "}
                        <Link to="/store" className="btn p-2 bg-slate-600 text-white text-sm font-semibold mt-4">store</Link>
                    </p>
                </div>
            ) : !Boolean(data?.id) ? (
                <div className="flex flex-col items-center justify-center w-full h-40">
                    <h1>Whoops! Product not found</h1>
                    <Link to="/store" className="btn p-2 bg-slate-600 text-white text-sm font-semibold mt-4">
                        Go back to store
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-0 lg:px-8 py-6 mt-4 w-full">
                    {/* product overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="flex items-start justify-between w-full max-h-[490px]">
                            <div className="w-1/5 h-16 p-2">
                                <div className="flex flex-col items-start justify-start h-full">
                                    {data?.img.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt="product"
                                            className="object-cover w-full max-h-[100px] h-auto cursor-pointer mb-2"
                                            onClick={() => setSelectedImage(img)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="w-4/5 h-full p-2">
                                <img
                                    src={selectedImage}
                                    alt="product"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start justify-start">
                            <h1 className="text-2xl font-semibold">{data?.title}</h1>
                            <p className="text-sm font-light my-2 line-clamp-4 overflow-hidden text-ellipsis">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <span className="text-xl font-semibold text-pink-600">${data?.price}</span>
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
                    </div>
                    
                    {/* product description, specs, reviews */}
                    {/* related products */}
                </div>
            )}
        </div>
    );
}