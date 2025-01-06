import { Link } from "react-router-dom";

interface ICard {
    title: string;
    img: string;
    tall?: boolean;
}

export default function CategoryCard({ title, img, tall }: ICard) {
    return (
        <div className="category-item flex items-center justify-center h-full relative">
            <img
                src={img}
                alt="category"
                className={`object-cover w-full h-full overflow-hidden ${tall ? "max-h-[590px]" : "max-h-[290px]"}`}
            />
            <div
                className="absolute top-0 left-0 w-full h-full 
                hover:bg-black/50 flex items-center justify-center text-white text-2xl font-semibold 
                transition duration-300 ease-in-out cursor-pointer"
            >
                <Link 
                    to="/category/1"
                    className="category-link bg-pink-600 p-2"
                >
                    {title}
                </Link>
            </div>
        </div>
    )
}