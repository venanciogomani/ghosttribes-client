import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useGetSingleBlogArticle } from "../../hooks/use-get-single-article";

interface IRelatedArticles {
    id: number;
}

export function RelatedArticles({
    id
}: IRelatedArticles) {
    const navigate = useNavigate();
    const prevPostId = id > 0 ? id - 1 : 0;
    const nextPostId = id + 1
    const { data: prevPost } = useGetSingleBlogArticle(prevPostId);
    const { data: nextPost } = useGetSingleBlogArticle(nextPostId);

    if (!prevPost && !nextPost) return null;
    
    return (
        <div 
            className={`flex flex-col md:flex-row items-center 
                ${prevPost && nextPost ? "justify-between" 
                    : prevPost && !nextPost ? "justify-start" 
                    : "justify-end"} 
                w-full py-4 border-b-2`}
        >
            {prevPost?.id && (
                <ArticleCard 
                    actionTitle="Previous Article"
                    name={prevPost.title}
                    img={prevPost.img}
                    onClick={() => navigate(`/blog/article/${prevPostId}`)}
                    startIcon={<ArrowBackOutlined fontSize="small" className="text-slate-800 mr-2" />}
                />
            )}
            {nextPost?.id && (
                <ArticleCard 
                    actionTitle="Next Article"
                    name={nextPost.title}
                    img={nextPost.img}
                    onClick={() => navigate(`/blog/article/${nextPostId}`)}
                    endIcon={<ArrowForwardOutlined fontSize="small" className="text-slate-800 mr-2" />}
                />
            )}
        </div>
    )
}

interface IArticleCard {
    actionTitle: string;
    name: string;
    img: string;
    onClick: () => void;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
}
function ArticleCard({
    actionTitle,
    name,
    img,
    onClick,
    startIcon,
    endIcon
}: IArticleCard) {
    return (
        <div 
            className="max-w-[300px] mt-2 p-2 flex items-center border-2 border-slate-400/0 hover:border-slate-400/100 
            bg-transparent hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={onClick}
        >
            {startIcon}
            <div 
                className="flex flex-col"
            >
                <span className="text-slate-600 text-sm">{actionTitle}</span>
                <span className="font-semibold line-clamp-2 overflow-hidden text-ellipsis">
                    {name}
                </span>
            </div>
            <img src={img} alt={name} className="object-cover flex-shrink-0 w-12 h-16" />
            {endIcon}
        </div>
    )
}