import { ApiResponse } from "@/type";
import { BlogResponse } from "@/type/blog";

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
