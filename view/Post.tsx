import Loading from "@/components/Loading";
import { fetchBlogDetails } from "@/api/blogDetails/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Post = () => {

    const { slug } = useParams();
    const dispatch = useAppDispatch();

    const data = useAppSelector((state) => state.blogDetails.details);
    const isLoading = useAppSelector((state) => state.blogDetails.isLoading);

    useEffect(() => {
        dispatch(fetchBlogDetails(String(slug)));
    }, [dispatch]);

    return isLoading === false && data ? (
        <div className="m-5">
            <div className="flex flex-wrap m-0!">
                <div className="p-0 flex-none w-full max-w-full relative min-h-px">
                    <div className="aspect-[1.95] mt-10 relative rounded-[20px] overflow-hidden">
                        {data ? (
                            <Image
                                src={data?.data.media.originUrl}
                                sizes="100vw"
                                width={1500}
                                height={770}
                                alt=""
                                className="align-middle rounded-[20px] absolute inset-0 box-border p-0 border-none m-auto block bg-cover bg-top"
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                    <div>
                        <div className="mt-5 font-semibold text-[18px]/[40px] text-[#2fbc6d]">
                            {data?.data.category.title}
                        </div>
                        <div className="mt-2.5 font-semibold lg:text-[40px]/[45px] md:text-[36px]/[40px] text-[28px]/[36px] text-white">
                            {data?.data.title}
                        </div>
                        <div
                            className="mt-8 font-normal text-[16px]/[30px] text-white blog-content"
                            dangerouslySetInnerHTML={{ __html: data?.data.content }}
                        />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default Post;

