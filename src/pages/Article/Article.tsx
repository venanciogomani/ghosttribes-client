import { Link, useNavigate, useParams } from "react-router-dom";
import { ModeCommentOutlined } from "@mui/icons-material";
import { formatDate } from "../../utils/formatDate";
import { formatSlug } from "../../utils/formatSlug";
import { useGetSingleBlogArticle } from "../../hooks/use-get-single-article";
import { ArticleHeader } from "./ArticleHeader";
import { RelatedArticles } from "../../components/SingleBlogArticle/RelatedArticles";
import ShareOn from "../../components/shared/ShareOn/ShareOn";
import { CommentsSection } from "../../components/SingleBlogArticle/CommentsSection";

export default function Article() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, error } = useGetSingleBlogArticle(Number(id));

    if (!id || !data) {
        return (<div>Nothing to show</div>);
    }

    return (
        <div className="single-product flex flex-col items-center justify-center relative">
            <ArticleHeader 
                title={data.title}
                img={data.img}
            />
            <div className="flex flex-col items-start justify-center max-w-7xl px-2 lg:px-8 py-6 mt-4 w-full">
                <div className="w-full flex justify-between">
                    <div className="w-full md:w-4/5 flex flex-col p-2">
                        <h1 className="text-4xl text-slate-700 font-bold">{data.title}</h1>
                        <div className="flex items-center justify-between w-full mt-2">
                            <div className="flex items-center">
                                <div className="w-10 h-10 border-2 border-pink-800 rounded-full bg-gray-200"></div>
                                <span className="text-sm text-pink-800 font-semibold ml-2">
                                    By {data.author}
                                </span>
                            </div>
                            <span className="text-sm text-pink-800 font-semibold">
                                {formatDate(data.date)}
                            </span>
                        </div>
                        <div className="w-full h-96 border mt-2">
                            <img 
                                src={data.img}
                                alt={data.title}
                                className="object-cover w-full h-full flex-shrink-0"
                            />
                        </div>
                        <div className="flex items-center justify-between w-full mt-2">
                            <Link 
                                to={`/blog/category/${data.categoryId}`}
                                className="text-sm text-pink-800 border-2 border-pink-800 px-2 py-1 cursor-pointer"
                            >
                                {data.category}
                            </Link>
                            {Boolean(data.tags.length) && (
                                <div className="flex items-center">
                                    {data.tags.map((tag, index) => (
                                        <Link
                                            key={index}
                                            to={`/blog/tag/${formatSlug(tag)}`}
                                            className="text-sm px-2 py-1 ml-1 font-semibold text-white border-2 border-pink-600 
                                            bg-pink-600 hover:text-pink-800 hover:bg-transparent transition duration-300 ease-in-out 
                                            cursor-pointer"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="p-3 w-full bg-gray-300 border-l-4 border-slate-800 text-sm my-2 text-slate-600">
                            {data.excerpt}
                        </div>
                        <div className="flex flex-col w-full mt-4 pb-2">
                            {data.description}
                        </div>
                        <div className="flex justify-between items-center border-b-2">
                            <div className="flex items-center">
                                <ModeCommentOutlined fontSize="small" className="text-slate-600 mr-2" />
                                <span className="text-sm text-slate-600">{data.comments?.length} comments</span>
                            </div>
                            <ShareOn />
                        </div>
                        <RelatedArticles id={data.id} />
                        <CommentsSection comments={data.comments} />
                    </div>
                    <div className="hidden md:flex w-1/5 p-2 border-2 h-96">
                        Product placement
                    </div>
                </div>
            </div>
        </div>
    )
}