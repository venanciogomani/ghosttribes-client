import { useState } from "react";
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { UserReview } from "./UserReview";

export function ReviewsList() {
    const [page, setPage] = useState<number>(0);
    const numOfReviews = 10;
    const reviewsPerPage = 3;
    const totalPages = Math.ceil(numOfReviews / reviewsPerPage);

    function handlePagination(num: number) {
        if (num >= 0 && num < totalPages) {
            setPage(num);
        }
    }

    const start = page * reviewsPerPage;
    const end = start + reviewsPerPage;

    return (
        <div className="flex flex-col px-2 border-l">
            {Array.from({ length: numOfReviews }).slice(start, end).map((_, index) => (
                <UserReview key={index + start} />
            ))}
            <div className="w-full py-1 flex justify-between items-center mt-2">
                <span 
                    className="py-1 px-2 bg-pink-600 border-2 border-pink-600 text-white cursor-pointer 
                    hover:bg-transparent hover:text-pink-600 transition duration-300 ease-in-out"
                    onClick={() => handlePagination(page - 1)}
                >
                    <ArrowBackOutlined fontSize="small" />
                </span>
                <div className="flex">
                    {Array.from({ length: totalPages }).map((_, num) => (
                        <span
                            key={num}
                            onClick={() => handlePagination(num)}
                            className={`py-1 px-3 border-2 border-gray-600 mr-1 
                                ${num === page ? "bg-gray-600 text-white" 
                                : "bg-gray-300 text-slate-700 cursor-pointer hover:bg-gray-400 transition duration-300 ease-in-out"}`}
                        >{Number(num + 1)}</span>
                    ))}
                </div>
                <span 
                    className="py-1 px-2 bg-pink-600 border-2 border-pink-600 text-white cursor-pointer 
                    hover:bg-transparent hover:text-pink-600 transition duration-300 ease-in-out"
                    onClick={() => handlePagination(page + 1)}
                >
                    <ArrowForwardOutlined fontSize="small" />
                </span>
            </div>
        </div>
    )
}