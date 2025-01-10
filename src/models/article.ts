export interface BlogArticleDto {
    id: number;
    img: string;
    title: string;
    author: string;
    date: string;
    excerpt?: string;
    description: string;
    category: string;
    categoryId: string;
    tags: string[];
    comments?: CommentItem[];
}

export interface CommentItem {
    id: number;
    author: string;
    message: string;
    replies?: ReplyItem[];
}

interface ReplyItem {
    id: number;
    author: string;
    message: string;
}