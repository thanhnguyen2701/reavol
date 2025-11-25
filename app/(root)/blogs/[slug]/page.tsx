import { getBlogDetailsData } from '@/lib/api';
import Image from 'next/image';

interface PageProps {
    params: { slug: string };
}

const PostPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const {data: blogData} = await getBlogDetailsData(slug);

    return (
        <div className='m-5'>
            <div className='flex flex-wrap m-0!'>
                <div className='p-0 flex-none w-full max-w-full relative min-h-px'>
                    <div className='aspect-[1.95] mt-10 relative rounded-[20px]'>
                        <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0 rounded-[20px]'>
                            {
                                blogData ?
                                    <Image src={blogData?.media.originUrl} sizes="100vw" width={1500} height={770} alt='' className='align-middle rounded-[20px] absolute inset-0 box-border p-0 border-none m-auto block bg-cover bg-top'/>
                                    : 
                                    <></>
                            }
                        </span>
                    </div>
                    <div>
                        <div className='mt-5 font-semibold text-[18px]/[40px] text-[#2fbc6d]'>{blogData.category.title}</div>
                        <div className='mt-2.5 font-semibold lg:text-[40px]/[45px] md:text-[36px]/[40px] text-[28px]/[36px] text-white'>{blogData?.title}</div>
                        <div className='mt-[33px] font-normal text-[16px]/[30px] text-white blog-content'  dangerouslySetInnerHTML={{ __html: blogData.content }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage