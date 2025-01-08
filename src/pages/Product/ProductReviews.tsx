import { ArrowBackOutlined, ArrowForwardOutlined, Star, StarOutlineOutlined } from "@mui/icons-material";
import { UserReview } from "./UserReview";
import { useState } from "react";

export function ProductReviews() {
    const [showreviews, setShowReviews] = useState<boolean>(true);

    return (
        <div className="mt-4 flex justify-start w-full">
            <div className="flex flex-col">
                <div className="flex justify-between items-center p-2">
                    <div className="text-slate-600 text-5xl font-bold mr-4">4.8</div>
                    <div className="flex flex-col items-center px-2">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} fontSize="small" className="text-yellow-400"/>
                            ))}
                        </div>
                        <span className="p-1 text-sm">62 Reviews</span>
                    </div>
                </div>
                <div className="flex flex-col px-2">
                    <div className="flex items-center py-1">
                        <span className="text-xs text-slate-600 font-semibold mr-1">5</span>
                        <Star fontSize="small" className="text-yellow-400 mr-1"/>
                        <div className="h-2 w-32 bg-gray-300 rounded-full mr-1 flex justify-start items-center">
                            <div className="h-full w-[20%] bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-slate-600 font-semibold mr-1">12</span>
                    </div>
                    <div className="flex items-center py-1">
                        <span className="text-xs text-slate-600 font-semibold mr-1">4</span>
                        <Star fontSize="small" className="text-yellow-400 mr-1"/>
                        <div className="h-2 w-32 bg-gray-300 rounded-full mr-1 flex justify-start items-center">
                            <div className="h-full w-[80%] bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-slate-600 font-semibold mr-1">50</span>
                    </div>
                    <div className="flex items-center py-1">
                        <span className="text-xs text-slate-600 font-semibold mr-1">3</span>
                        <Star fontSize="small" className="text-yellow-400 mr-1"/>
                        <div className="h-2 w-32 bg-gray-300 rounded-full mr-1"></div>
                        <span className="text-xs text-slate-600 font-semibold mr-1">0</span>
                    </div>
                    <div className="flex items-center py-1">
                        <span className="text-xs text-slate-600 font-semibold mr-1">2</span>
                        <Star fontSize="small" className="text-yellow-400 mr-1"/>
                        <div className="h-2 w-32 bg-gray-300 rounded-full mr-1"></div>
                        <span className="text-xs text-slate-600 font-semibold mr-1">0</span>
                    </div>
                    <div className="flex items-center py-1">
                        <span className="text-xs text-slate-600 font-semibold mr-1">1</span>
                        <Star fontSize="small" className="text-yellow-400 mr-1"/>
                        <div className="h-2 w-32 bg-gray-300 rounded-full mr-1"></div>
                        <span className="text-xs text-slate-600 font-semibold mr-1">0</span>
                    </div>
                </div>
                <div 
                    className="w-full p-2 mt-2"
                >
                    <div 
                        className="border-2 border-pink-600 cursor-pointer text-pink-600 text-center 
                        text-sm font-semibold py-2 bg-transparent hover:bg-pink-600 hover:text-white hover:border-white 
                        transition duration-300 ease-in-out"
                        onClick={() => setShowReviews(!showreviews)}
                    >
                        {showreviews ? "Write Review" : "Cancel"}
                    </div>
                </div>
            </div>
            {showreviews ? (
                <ReviewsList />
            ) : (
                <WriteReview />
            )}
        </div>
    )
}

function WriteReview() {
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [reviewTitle, setReviewTitle] = useState<string>("");
    const [review, setReview] = useState<string>("");

    function handleRatingClick(rating: number) {
        setSelectedRating(rating);
    }

    function handleSubmitReview() {
        if (selectedRating > 0 && reviewTitle && review) {
            setSelectedRating(0);
            setReviewTitle("");
            setReview("");
        }
    }

    return (
        <div className="flex flex-col px-2 border-l">
            <span className="text-2xl text-slate-600 font-semibold border-b mb-2">Leave a review</span>
            <div className="flex items-center py-1 mt-2">
                {Array.from({ length: 5 }).map((_, index) => ( 
                    index < selectedRating ? 
                        ( 
                            <Star 
                                key={index} 
                                fontSize="medium" 
                                className="text-yellow-400 cursor-pointer" 
                                onClick={() => handleRatingClick(index + 1)}
                            />
                        ) 
                        : 
                        ( 
                            <StarOutlineOutlined 
                                key={index} 
                                fontSize="medium" 
                                className="text-yellow-400 cursor-pointer mr-1" 
                                onClick={() => handleRatingClick(index + 1)} 
                            /> 
                        ) 
                ))}
            </div>
            <span className="text-slate-600 font-semibold mt-2">Review Title</span>
            <input 
                type="text"
                placeholder="Great read..."
                className="p-2 w-96 border-2 border-slate-400 text-slate-600"
                onChange={(e) => setReviewTitle(e.target.value)}
            />
            <span className="text-slate-600 font-semibold mt-4">Review</span>
            <textarea 
                className="p-2 border-2 border-slate-400 min-h-32 mt-1"
                placeholder="Write your review"
                onChange={(e) => {setReview(e.target.value)}}
            ></textarea>
            <div 
                className="border-2 border-pink-600 cursor-pointer text-white text-center 
                text-sm font-semibold py-2 bg-pink-600 hover:bg-pink-800
                transition duration-300 ease-in-out mt-2"
                onClick={() => handleSubmitReview()}
            >
                Submit
            </div>
        </div>
    )
}

function ReviewsList() {
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