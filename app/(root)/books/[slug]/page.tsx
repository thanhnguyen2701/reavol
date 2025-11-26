'use client';

import Loading from "@/components/Loading";
import { ApiResponse, BookDetailsResponse, RelatedBooksDataResponse } from "@/type";
import Image from "next/image"
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BookPage = () => {
    const { slug } = useParams();
    const [homeData, setHomeData] = useState<ApiResponse | null>(null);
    const [detailsData, setDetailsData] = useState<BookDetailsResponse | null>(null);
    const [isDetailsLoading, setIsDetailsLoading] = useState<Boolean>(true);
    const [relatedData, setRelatedData] = useState<RelatedBooksDataResponse | null>(null);
    const [isRelatedLoading, setIsRelatedLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const res = await fetch(
                    "https://api.reavol.vn/api/v1/home/get-home-data?page=0&unLock=false",
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                );

                if (!res.ok) throw new Error("Failed to fetch home data");

                const json = await res.json();
                setHomeData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchHomeData();
    }, [])

    const type5Data = homeData?.data.find(item => item.type === 5);
    const type1Data = homeData?.data.find(item => item.type === 1);
    const type3Data = homeData?.data.find(item => item.type === 3);
    const type7Data = homeData?.data.find(item => item.type === 7);
    const forYou = type3Data?.forYou;
    const freeList = type1Data?.freeList;
    const newest = type7Data?.newest;
    const trending = type5Data?.trending;

    const book = forYou?.find(item => item.slug === slug) || freeList?.find(item => item.slug === slug) || newest?.find(item => item.slug === slug) || trending?.find(item => item.slug === slug);

    useEffect(() => {
        const fetchDetailsData = async (id: number) => {
            try {
                const res = await fetch(
                    `https://api.reavol.vn/api/v1/article/get-detail-article?articleId=${id}`,
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                );

                if (!res.ok) throw new Error("Failed to fetch home data");

                const json = await res.json();
                setDetailsData(json);
            } catch (err) {
                console.error(err);
            } finally {
                setIsDetailsLoading(false);
            }
        };

        const fetchRelatedData = async (id: number) => {
            try {
                const res = await fetch(
                    `https://api.reavol.vn/api/v1/article/get-related-article?articleId=${id}`,
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                );

                if (!res.ok) throw new Error("Failed to fetch home data");

                const json = await res.json();
                setRelatedData(json);
            } catch (err) {
                console.error(err);
            } finally {
                setIsRelatedLoading(false);
            }
        };

        if (book) {
            fetchDetailsData(book.id);
            fetchRelatedData(book.id);
        }
    }, [book])

    return (
        <div className='m-5 lg:flex'>
            {
                isDetailsLoading === false && detailsData ?
                    <div className='h-full m-0 lg:w-[65%] md:w-full bg-[#042c43] border border-[rgba(255,255,255,0.59)] box-border rounded-[20px] mt-12 flex flex-wrap overflow-hidden'>
                        <div className='w-full p-0'>
                            <div className='relative aspect-[1.01]'>
                                <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0'>
                                    <Image src={detailsData.data.media.originUrl} sizes="100vw" width={1500} height={770} alt='' className='rounded-tl-[20px] rounded-tr-[20px] absolute inset-0 box-border p-0 m-auto block bg-cover' />
                                </span>
                            </div>
                            <div>
                                <div className="px-12.5 pt-12.5 pb-0 items-center  box-border justify-between! flex!">
                                    <div className="text-white text-[30px] font-semibold">{detailsData.data.title}</div>
                                    <div className="w-37.5 bg-[#33bf71] text-white rounded-[20px] text-center text-[20px] font-InterBold py-1.25 cursor-pointer">Mua ngay</div>
                                </div>
                                <div className="px-12.5 max-w-full relative w-full min-h-px">
                                    <div className="mt-12.5">
                                        <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">Những gì về sách ?</h5>
                                        <h6 className="text-[16px]/[24px]! mx-[13px] text-white mt-0 mb-[.5em] font-medium">{detailsData.data.aboutTheBook}</h6>
                                    </div>
                                    <div className="mt-12.5">
                                        <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">Ai nên đọc sách này ?</h5>
                                        <h6 className="text-[16px]/[24px]! mx-[13px] text-white mt-0 mb-[.5em] font-medium">{detailsData.data.whoShouldRead}</h6>
                                    </div>
                                    <div className="mt-12.5">
                                        <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">Ai viết ra cuốn sách này ?</h5>
                                        <h6 className="text-[16px]/[24px]! mx-[13px] text-white mt-0 mb-[.5em] font-medium">{detailsData.data.aboutTheAuthor}</h6>
                                    </div>
                                    <div className="mt-12.5">
                                        <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">Phụ lục</h5>
                                        <div className="mt-6">
                                            {
                                                detailsData.data.chapters.map((item, index) => (
                                                    <div className="m-0! flex flex-wrap">
                                                        <div className="w-[3%] text-center text-white text-[16px]/[24px] tracking-[.5px]">{index + 1}</div>
                                                        <div className="text-white text-[16px]/[24px] tracking-[.5px] flex-none w-[83.333333%] max-w-[83.333333%] relative min-h-px px-[15px]">{item.title}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[18px]/[30px] font-[poppins] tracking-[.5px] text-white text-center pb-5 pt-7.5 mt-0 mb-[.5em] font-medium">Tải app để đọc bản tóm tắt đầy đủ</h4>
                                    <div className="mt-[35px] flex pb-7.5 justify-center">
                                        <div className="bg-black rounded-[10px] w-[189px] h-[63px] flex px-3">
                                            <Link href={''} className="w-full flex touch-manipulation">
                                                <div className="flex justify-center items-center">
                                                    <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0'>
                                                        <Image src={'/app-store.svg'} width={30} height={30} alt="" className="object-cover align-middle !rounded-tl-[inherit] !rounded-tr-[inherit]" />
                                                    </span>
                                                </div>
                                                <div className="pl-[15px] pt-2">
                                                    <h6 className="font-medium text-[14px]/[21px] text-white mt-0! mb-0! w-full!">Download on the</h6>
                                                    <h5 className="mb-0! font-semibold text-[18px]/[27px] text-white mt-0">App Store</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="ml-[27px] bg-black rounded-[10px] w-[189px] h-[63px] flex px-3">
                                            <Link href={''} className="w-full flex touch-manipulation">
                                                <div className="flex justify-center items-center rounded-tl-[20px]! rounded-tr-[20px]!">
                                                    <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 rounded-tl-[20px]! rounded-tr-[20px]!'>
                                                        <Image src={'/playstore.svg'} width={30} height={30} alt="" className="object-cover align-middle rounded-tl-[20px]! rounded-tr-[20px]!" />
                                                    </span>
                                                </div>
                                                <div className="pl-[15px] pt-2">
                                                    <h6 className="font-medium text-[14px]/[21px] text-white mt-0! mb-0! w-full!">GET IT ON</h6>
                                                    <h5 className="mb-0! font-semibold text-[18px]/[27px] text-white mt-0">Google Play</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Loading />
            }
            {
                isRelatedLoading === false && relatedData ?
                    <div className="lg:w-[35%] md:w-full m-0! py-8 pr-0 lg:pl-8 flex flex-wrap">
                        <div className="container">
                            <div className="hidden lg:flex flex-wrap -mx-[15px]">
                                <div className="text-white text-[20px]/[36px] tracking-[.5px] font-bold pt-1.5 text-center w-full">Có thể bạn quan tâm</div>
                                {
                                    relatedData.data.slice(0, 3).map((item) => (
                                        <div key={item.id} className="mt-12 flex justify-center flex-none w-full max-w-full relative min-h-px px-[15px]">
                                            <Link href={`/books/${item.slug}`} className="w-full touch-manipulation">
                                                <div className="bg-[#242730] p-0 rounded-[20px]">
                                                    <div className="w-full aspect-[.994] relative">
                                                        <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0 rounded-tr-[10px] rounded-tl-[10px]'>
                                                            <Image src={item.media.originUrl} sizes="100vw" width={1500} height={770} alt='' className='rounded-tl-[20px] rounded-tr-[20px] absolute inset-0 box-border p-0 m-auto block bg-cover' />
                                                        </span>
                                                        <div className="absolute w-[65px] right-5 bottom-5 rounded-[7px] bg-[#242730] opacity-50 font-medium text-[10px]/[10px] text-white p-2.5 tracking-[.5px]">
                                                            <div>
                                                                <span className="rounded-tr-[10px] rounded-tl-[10px] font-medium text-[10px]/[10px] tracking-[.5px] text-white">15 phút</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-white h-[153px] w-full pt-5">
                                                        <div className="flex items-end w-[80%] ml-[1.9rem]">
                                                            <span className="text-[16px]/[26px] text-ellipsis overflow-hidden whitespace-nowrap tracking-[0.3px] text-white font-medium">{item.title}</span>
                                                        </div>
                                                        <div className="flex items-end w-[75%] tracking-[.5px] text-[#b7b9d2] text-[13px]/[13px] ml-[1.9rem] mt-[5px]">
                                                            <span className="mix-blend-normal font-normal tracking-[.5px] text-[#b7b9d2] text-[13px]/[13px]">{item.author}</span>
                                                        </div>
                                                        <div className="mx-[1.9rem] mt-[5px]">
                                                            <span className="line-clamp-2 text-ellipsis overflow-hidden whitespace-pre-wrap text-[13px]/[15px] tracking-[.5px] text-[#b7b9d2] mix-blend-normal font-normal">{item.subTitle}</span>
                                                        </div>
                                                        <div className="ml-[1.9rem] items-center w-[76%] mt-2.5">
                                                            <span className="font-normal text-[12px]/[12px] tracking-[.5px] text-[#808191] mix-blend-normal">53K views • 2 weeks ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex lg:hidden flex-wrap -mx-[15px]">
                                <div className="text-white text-[20px]/[36px] tracking-[.5px] font-bold pt-1.5 text-center w-full">Có thể bạn quan tâm</div>
                                {
                                    relatedData.data.slice(0, 4).map((item) => (
                                        <div key={item.id} className="mt-12 flex justify-center flex-none w-1/2 max-w-1/2 relative min-h-px px-[15px]">
                                            <Link href={`/books/${item.slug}`} className="w-full touch-manipulation">
                                                <div className="bg-[#242730] p-0 rounded-[20px]">
                                                    <div className="w-full aspect-[.994] relative">
                                                        <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0 rounded-tr-[10px] rounded-tl-[10px]'>
                                                            <Image src={item.media.originUrl} sizes="100vw" width={1500} height={770} alt='' className='rounded-tl-[20px] rounded-tr-[20px] absolute inset-0 box-border p-0 m-auto block bg-cover' />
                                                        </span>
                                                        <div className="absolute w-[65px] right-5 bottom-5 rounded-[7px] bg-[#242730] opacity-50 font-medium text-[10px]/[10px] text-white p-2.5 tracking-[.5px]">
                                                            <div>
                                                                <span className="rounded-tr-[10px] rounded-tl-[10px] font-medium text-[10px]/[10px] tracking-[.5px] text-white">15 phút</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-white h-[153px] w-full pt-5">
                                                        <div className="flex items-end w-[80%] ml-[1.9rem]">
                                                            <span className="text-[16px]/[26px] text-ellipsis overflow-hidden whitespace-nowrap tracking-[0.3px] text-white font-medium">{item.title}</span>
                                                        </div>
                                                        <div className="flex items-end w-[75%] tracking-[.5px] text-[#b7b9d2] text-[13px]/[13px] ml-[1.9rem] mt-[5px]">
                                                            <span className="mix-blend-normal font-normal tracking-[.5px] text-[#b7b9d2] text-[13px]/[13px]">{item.author}</span>
                                                        </div>
                                                        <div className="mx-[1.9rem] mt-[5px]">
                                                            <span className="line-clamp-2 text-ellipsis overflow-hidden whitespace-pre-wrap text-[13px]/[15px] tracking-[.5px] text-[#b7b9d2] mix-blend-normal font-normal">{item.subTitle}</span>
                                                        </div>
                                                        <div className="ml-[1.9rem] items-center w-[76%] mt-2.5">
                                                            <span className="font-normal text-[12px]/[12px] tracking-[.5px] text-[#808191] mix-blend-normal">53K views • 2 weeks ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <Loading />
            }
        </div>
    )
}

export default BookPage