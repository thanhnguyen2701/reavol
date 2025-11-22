import { getBlogData } from '@/lib/api';
import Image from 'next/image';

interface PageProps {
    params: { slug: string }; // slug được Next.js truyền tự động
}

const PostPage = async ({ params }: PageProps) => {
    const { slug } = params;
    const { data: blogData } = await getBlogData();
    const blog = blogData.blogs.find((p) => p.slug === slug) || blogData.newest.find((p) => p.slug === slug) || blogData.popular.find((p) => p.slug === slug) || blogData.suitable.find((p) => p.slug === slug)

    console.log(blog)
    return (
        <div className='m-5'>
            <div className='flex flex-wrap m-0!'>
                <div className='p-0 flex-none w-full max-w-full relative min-h-px'>
                    <div className='aspect-[1.95] mt-10 relative'>
                        <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0'>
                            {
                                blog ?
                                    <Image src={blog?.media.originUrl} sizes="100vw" width={570} height={720} alt='' className='pl-[74px] align-middle' />
                                    :
                                    <></>
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage