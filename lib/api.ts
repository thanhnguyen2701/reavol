import { ApiResponse, BookDetailsResponse, RelatedBooksDataResponse } from "@/type";
import { BlogDetailsResponse, BlogResponse } from "@/type/blog";

export async function getHomeData(): Promise<ApiResponse> {
    const res = await fetch("https://api.reavol.vn/api/v1/home/get-home-data?page=0&unLock=false", {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch home data");
    }

    return res.json();
}


export async function getBlogData(): Promise<BlogResponse> {
    const res = await fetch("https://api.reavol.vn/api/v1/blog/get-blog-for-web", {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch home data");
    }

    return res.json();
}

export async function getBlogDetailsData(slug: string): Promise<BlogDetailsResponse> {
    const res = await fetch(`https://api.reavol.vn/api/v1/blog/detail/${slug}`, {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch home data");
    }

    return res.json();
}

export async function getBooksDetailsData(id: number | undefined): Promise<BookDetailsResponse> {
    const res = await fetch(`https://api.reavol.vn/api/v1/article/get-detail-article?articleId=${id}`, {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok && id === undefined) {
        throw new Error("Failed to fetch home data");
    }

    return res.json();
}

export async function getRelatedBooksData(id: number | undefined): Promise<RelatedBooksDataResponse> {
    const res = await fetch(`https://api.reavol.vn/api/v1/article/get-related-article?articleId=${id}`, {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok && id === undefined) {
        throw new Error("Failed to fetch home data");
    }

    return res.json();
}