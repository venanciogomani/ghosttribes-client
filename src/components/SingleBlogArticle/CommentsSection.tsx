import { useState } from "react";
import { LeaveComment } from "./LeaveComment";
import { SingleComment } from "./SingleComment";
import { CommentItem } from "../../models/article";

interface ICommentsSection {
    comments?: CommentItem[];
}
export function CommentsSection({
    comments
}: ICommentsSection) {
    const [openCommentForm, setOpenCommentForm] = useState<boolean>(false);
    const [page, setPage] = useState(3);

    return (
        <div className="flex flex-col mt-4 w-full">
            <div className="flex justify-between items-center">
                <span className="text-slate-600 font-semibold">{comments?.length || 0} Comments</span>
                {!openCommentForm && (
                    <span 
                        className="p-2 text-white bg-pink-600 hover:bg-pink-800 transition 
                        duration-300 ease-in-out cursor-pointer font-semibold"
                        onClick={() => setOpenCommentForm(true)}
                    >
                        Leave Comment
                    </span>
                )}
            </div>
            {openCommentForm && (
                <LeaveComment close={() => setOpenCommentForm(false)}/>
            )}
            {Boolean(comments?.length) && comments?.slice(0, page).map((comment, index) => (
                <SingleComment comment={comment} key={index} />
            ))}
            {(Boolean(comments?.length ?? 0) && page < (comments?.length ?? 0)) && (
                    <div className="w-full flex items-center justify-center mt-2">
                        <span 
                            className="text-sm text-pink-600 underline cursor-pointer"
                            onClick={() => setPage(page + 2)}
                        >
                            Show More Comments
                        </span>
                    </div>
                )}
        </div>
    )
}