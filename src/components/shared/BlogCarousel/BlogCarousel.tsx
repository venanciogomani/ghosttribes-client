import { useMemo } from "react";
import BlogCard from "../BlogCard/BlogCard";
import { articles } from "../../../services/dummy";

interface IBlogs {
    title: string;
    description?: string;
    limit?: number;
}

export default function BlogCarousel({ title = "Featured Articles", limit }: IBlogs) {
    const data = useMemo(() => {
        return articles;
    }, []);
    
    const pageLimit = limit || data.length;

    return (
        <div className="blogs flex flex-col items-center justify-center mx-auto max-w-7xl px-0 lg:px-8 py-6">
            <div className="flex justify-between w-full p-2 relative inline-block">
                <h1 className="text-xl font-bold">{title}</h1>
                <span className="absolute left-2 bottom-0 w-[100px] h-[2px] bg-pink-500 flex items-center"></span>
                <button className="btn py-1 px-2 bg-slate-700 text-white text-sm font-semibold">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-4">
                {data.map((blog) => (
                    <BlogCard 
                        key={blog.id}
                        img={blog.img}
                        title={blog.title}
                        date={blog.date}
                        category={blog.category}
                        excerpt={blog.excerpt}
                    />
                )).slice(0, pageLimit)}
            </div>
        </div>
    )
}