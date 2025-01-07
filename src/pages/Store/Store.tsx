import { ArrowForwardOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ProductCard from "../../components/shared/ProductCard/ProductCard";
import { useMemo, useState } from "react";
import { products } from "../../services/dummy";

export default function Store() {
    const [page, setPage] = useState(8);
    const [sortBy, setSortBy] = useState("");
    const sortOptions: { [key: string]: string } = {
        newest: "Newest",
        relevance: "Relevance",
        priceLowToHigh: "Price (low to high)",
        rating: "Rating"
    }
    const data = useMemo(() => {
        return products;
    }, []);

    function toggleSortBy() {
        const dropdownMenu = document.querySelector(".dropdown-sort-by");
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("hidden");
        }
    }

    function handleSortBy(key: string) {
        setSortBy(key);
        toggleSortBy();
    }

    return (
        <div className="store flex flex-col items-center justify-center relative">
            <div className="w-full text-center">
                <img
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                    alt="category"
                    className="object-cover w-full h-48"
                />
                <div className="absolute left-0 top-0 w-full h-48 bg-black/50 flex flex-col items-center justify-center text-white">
                    <h1 className="text-xl font-bold">Store</h1>
                    <div className="flex justify-center w-full mt-2">
                        <div className="flex items-center">
                            <Link to="/" className="font-semibold">Home</Link>
                            <ArrowForwardOutlined className="mx-2" fontSize="small" />
                            <span className="text-pink-600">Store</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products flex flex-col items-center justify-center mx-auto max-w-7xl px-0 lg:px-8 py-6">
                <div className="flex justify-between w-full p-2 relative inline-block">
                    <h1 className="text-xl font-bold">All Products</h1>
                    <span className="absolute left-2 bottom-0 w-[100px] h-[2px] bg-pink-500 flex items-center"></span>
                    <div className="flex flex-col items-center justify-center relative">
                        <div 
                            className="border-2 border-slate-600 hover:border-pink-600 
                            py-2 px-4 text-sm transition duration-300 ease-in-out cursor-pointer flex items-center justify-between"
                            onClick={toggleSortBy}
                        >
                            <span>
                                {sortOptions[sortBy] || "Sort by"}
                            </span>
                            <KeyboardArrowDownOutlined fontSize="small"/>
                        </div>
                        <div
                            className="absolute left-0 top-full z-10 mt-1 w-40 border border-slate-800/20 
                            overflow-hidden bg-white shadow-lg dropdown-menu flex flex-col hidden dropdown-sort-by"
                        >
                            {Object.keys(sortOptions).map((key) => (
                                <div 
                                    key={key}
                                    className="p-2 text-sm/6 hover:bg-gray-100 hover:cursor-pointer"
                                    onClick={() => handleSortBy(key)}
                                >
                                    {sortOptions[key]}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full mt-4">
                    <div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
                    >
                        {data.map((product) => (
                            <ProductCard 
                                key={product.id}
                                title={product.title}
                                oldPrice={product.oldPrice}
                                price={product.price}
                                img={product.img[0]}
                                isNew={product.isNew}
                            />
                        )).slice(0, page)}
                    </div>
                    {page < data.length && (
                        <div 
                            className="border-2 border-slate-600 hover:border-pink-600 
                                py-2 px-4 text-sm transition duration-300 ease-in-out cursor-pointer flex items-center justify-between mt-4"
                            onClick={() => setPage(page + 8)}
                        >
                            Load More
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}