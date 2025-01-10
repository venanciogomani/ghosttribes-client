import { useState } from "react";
import { articles } from "../services/dummy";
import { BlogArticleDto } from "../models/article";

export function useGetArticles(
    pageLimit = 12,
    categoryId?: number, 
    tagId?: string,
) {
    const [page, setPage] = useState(pageLimit);
    const filteredBlogArticles = articles.filter(article => {
        // TODO: handle pagination on server-side once api is implemented
        if (categoryId && tagId) {
            return article.categoryId === categoryId && article.tags.includes(tagId);
        } else if (categoryId) {
            return article.categoryId === categoryId;
        } else if (tagId) {
            return article?.tags.includes(tagId);
        }
        return true;
    });
    
    const paginatedBlogArticles = filteredBlogArticles.slice(0, page);
    const data = mapToBlogArticleDto(paginatedBlogArticles);
    const loadMore = page < filteredBlogArticles.length;

    return { data, error: null, page, setPage, loadMore };
}

function mapToBlogArticleDto(data: Array<any>): BlogArticleDto[] {
    return data.map(article => ({
        id: article.id,
        img: article.img,
        title: article.title,
        author: article.author,
        date: article.date,
        excerpt: article.excerpt,
        description: article.description,
        category: article.category,
        categoryId: article.categoryId,
        tags: article.tags,
        comments: article.comments
    }))
}