import { BlogArticleDto } from "../models/article";
import { articles } from "../services/dummy";

export function useGetSingleBlogArticle(id?: number) {
    if (!id) return { data: null, error: null };

    const article = articles.find((blog) => blog.id === id);
    
    const data = mapToBlogArticleDto(article);

    return { data, error: null };
}

function mapToBlogArticleDto(blog: Object | undefined): BlogArticleDto {
    if (!blog) return {} as BlogArticleDto;

    return blog as BlogArticleDto;
}