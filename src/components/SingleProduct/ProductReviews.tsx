import { useState } from "react";
import { 
    Star,
} from "@mui/icons-material";
import { ReviewsList } from "./ReviewsList";
import { WriteReview } from "./WriteReview";

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