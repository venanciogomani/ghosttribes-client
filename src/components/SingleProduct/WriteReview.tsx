import { Star, StarOutlineOutlined } from "@mui/icons-material";
import { useState } from "react";

export function WriteReview() {
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