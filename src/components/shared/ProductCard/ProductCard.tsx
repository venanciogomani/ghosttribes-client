import { FavoriteOutlined, ShoppingCartOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ICard {
    id: number;
    title: string;
    img: string;
    price: number;
    oldPrice?: number;
    isNew?: boolean;
}

export default function ProductCard({ id, title, img, price, oldPrice = 0, isNew }: ICard) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div 
            className="product w-full flex flex-col p-2 border-2 cursor-pointer border-slate-900/0 hover:border-slate-900 transition ease-in-out duration-300 relative"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <div className="w-full h-80">
                <img src={img} alt={title} className="object-cover w-full h-full flex-shrink-0" />
            </div>
            <div className="py-2">
                <div className="flex items-center justify-center w-full border-2 border-pink-600 py-1 px-2 gap-x-2 lg:gap-x-4">
                    {oldPrice > 0 && <p className="text-sm text-slate-600 line-through">${oldPrice}</p>}
                    <p className="text-sm font-semibold text-slate-700">${price}</p>
                </div>
                <h2 
                    className="pt-2 font-semibold text-slate-800 hover:text-pink-600 transition ease-in-out duration-300"
                    onClick={() => navigate(`/store/product/${id}`)}
                >
                    {title}
                </h2>
            </div>
            {isNew && <div className="new-product absolute top-2 left-2 bg-pink-600 text-white text-xs font-semibold p-1">New</div>}
            {isHovered && 
                <div className="absolute top-2 right-2 flex flex-col gap-y-2 p-2">
                    <div className="bg-slate-800 hover:bg-pink-600 p-1 rounded-full transition ease-in-out duration-300 flex items-center justify-center">
                        <ShoppingCartOutlined className="text-white" fontSize="small" />
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