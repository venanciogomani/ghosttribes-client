interface ILeaveComment {
    close: () => void;
}

export function LeaveComment({
    close
}: ILeaveComment) {
    return (
        <div className="flex flex-col w-full mt-2 border-b pb-2">
            <span className="font-semibold text-slate-600">Leave a Comment</span>
            <div className="w-full mt-2 flex flex-col md:flex-row">
                <input 
                    type="text"
                    className="w-[350px] h-8 text-sm mr-2 border-2 border-slate-400 text-slate-600 px-1"
                    placeholder="Enter name"
                />
                <input 
                    type="text"
                    className="w-[350px] h-8 text-sm mr-2 border-2 border-slate-400 text-slate-600 px-1"
                    placeholder="Enter email address"
                />
            </div>
            <textarea
                className="w-full min-h-20 mt-2 border-2 border-slate-400 text-sm p-1"
                placeholder="Message"
            ></textarea>
            <div className="flex w-full justify-end mt-2">
                <span 
                    className="text-pink-600 border-2 border-pink-600 p-2 font-semibold text-sm cursor-pointer mr-2"
                    onClick={close}
                >
                    Cancel
                </span>
                <span 
                    className="text-white p-2 bg-pink-600 font-semibold text-sm hover:bg-pink-800 
                    transition duration-300 ease-in-out cursor-pointer"
                >
                    Post Comment
                </span>
            </div>
        </div>
    )
}