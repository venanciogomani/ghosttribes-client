import { CloseOutlined, SendOutlined } from "@mui/icons-material";
import { useState } from "react";
import { CommentItem } from "../../models/article";

interface ISingleComment {
    comment: CommentItem;
}
export function SingleComment({
    comment
}: ISingleComment) {
    const [openReplyForm, setOpenReplyForm] = useState<boolean>(false);
    const [page, setPage] = useState(1);

    return (
        <div className="mt-2 w-full flex py-2 border-b">
            <div className="hidden md:flex w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
            <div className="flex flex-col">
                <span className="font-semibold text-slate-600">{comment.author}</span>
                <span className="text-sm text-slate-400 mt-1">January 10, 2024 10:15 pm</span>
                <p className="text-sm text-slate-400 mt-2">
                    {comment.message}
                </p>
                {!openReplyForm && (
                    <div className="flex justify-end w-full mt-2">
                        <span 
                            className="p-1 text-sm text-pink-600 font-semibold border-2 border-pink-600 cursor-pointer"
                            onClick={() => setOpenReplyForm(true)}
                        >
                            Reply
                        </span>
                    </div>
                )}
                {openReplyForm && (
                    <div className="flex justify-between items-center w-full mt-2">
                        <textarea
                            className="w-full min-h-8 border-2 border-slate-400 text-sm p-1"
                            placeholder={`Reply to ${comment.author}`}
                        ></textarea>
                        <CloseOutlined 
                            fontSize="small" 
                            className="text-rose-600 cursor-pointer mx-2"
                            onClick={() => setOpenReplyForm(false)}
                        />
                        <SendOutlined fontSize="small" className="text-emerald-600 cursor-pointer" />
                    </div>
                )}
                {Boolean(comment.replies?.length) && comment.replies?.slice(0, page).map(reply => (
                    <div key={reply.id} className="mt-2 w-full flex py-2 bg-gray-100 p-2">
                        <div className="hidden md:flex w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-slate-600">{reply.author}</span>
                            <p className="text-sm text-slate-400 mt-2">
                                {reply.message}
                            </p>
                        </div>
                    </div>
                ))}
                {(Boolean(comment.replies?.length ?? 0) && page < (comment.replies?.length ?? 0)) && (
                    <div className="w-full flex items-center justify-center mt-2">
                        <span 
                            className="text-sm text-pink-600 underline cursor-pointer"
                            onClick={() => setPage(page + 2)}
                        >
                            More replies
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}