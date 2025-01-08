import { Star } from "@mui/icons-material";
import { useState } from "react";

export function UserReview() {
    const [readMore, setReadMore] = useState<boolean>(false);

    return (
        <div className="border-b flex flex-col p-2">
            <span className="text-2xl text-slate-600 font-semibold">Amazing book</span>
            <div className="flex items-center py-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fontSize="small" className="text-yellow-400" />
                ))}
            </div>
            <div className="flex items-center py-1">
                <span className="text-sm font-semibold text-slate-600">
                    John - 11 Oct 2024
                </span>
                <span className="text-slate-600 text-sm px-1">
                    (Reviewed 3 days after purchase)
                </span>
            </div>
            <div className="flex flex-col py-1">
                <span 
                    className={`text-sm text-slate-600 ${readMore ? "inline-block" : 
                        "line-clamp-2 overflow-hidden text-ellipsis"}`}
                >
                    This book exceeded my expectations. 
                    The storyline was gripping and the characters were well-developed. Highly recommend!
                    The pacing was perfect and kept me engaged throughout.
                    The author's writing style is both captivating and immersive, making it hard to put 
                    the book down. The themes explored are thought-provoking and relevant, adding depth to 
                    the narrative. Overall, this book is a must-read for anyone looking for a 
                    compelling and enriching experience.
                </span>
                <span 
                    className="text-pink-600 text-sm py-1 cursor-pointer underline"
                    onClick={() => setReadMore(!readMore)}
                >
                    {readMore ? "Show Less" : "Read More"}
                </span>
            </div>
        </div>
    )
}