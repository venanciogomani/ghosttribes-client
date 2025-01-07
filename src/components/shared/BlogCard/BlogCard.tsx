import { formatDate } from "../../../models/formatDate";

interface IBlog {
    title: string;
    img: string;
    date: string;
    category: string;
    excerpt?: string;
}

export default function BlogCard({ title, img, date, category, excerpt }: IBlog) {
    return (
        <div 
            className="blog-article w-full flex flex-col p-2 border-2 cursor-pointer border-slate-900/0 hover:border-slate-900 transition ease-in-out duration-300"
        >
            <div className="w-full h-60">
                <img src={img} alt={title} className="object-cover w-full h-full flex-shrink-0" />
            </div>
            <div className="py-2">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2 p-2 border-2 border-pink-600 text-slate-800 text-xs flex items-center justify-center">{category}</div>
                    <div className="w-1/2 p-2 text-slate-800 text-xs flex items-center justify-center uppercase">{formatDate(date)}</div>
                </div>
                <h2 className="pt-2 font-semibold text-slate-800 hover:text-pink-600 transition ease-in-out duration-300">{title}</h2>
                <p className="text-sm line-clamp-2 overflow-hidden text-ellipsis">{excerpt}</p>
            </div>
        </div>
    )
}