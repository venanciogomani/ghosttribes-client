import { ArrowForwardOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface IArticleHeader {
    title?: string;
    img?: string;
}

export function ArticleHeader({
    title = "Nothing found",
    img = "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
}: IArticleHeader) {
    return (
        <div className="w-full text-center">
            <img
                src={img}
                alt="category"
                className="object-cover w-full h-40"
            />
            <div className="absolute left-0 top-0 w-full h-40 bg-black/50 flex flex-col items-center justify-center text-white">
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="flex justify-center w-full mt-2">
                    <div className="flex items-center">
                        <Link to="/" className="font-semibold">Home</Link>
                        <ArrowForwardOutlined className="mx-2" fontSize="small" />
                        <Link to="/blog" className="font-semibold">Blog</Link>
                        <ArrowForwardOutlined className="mx-2" fontSize="small" />
                        <span className="text-pink-600">{title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}