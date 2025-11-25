'use client';

import BookItemComponent2 from "@/components/BookItemComponent2"
import Loading from "@/components/Loading";
import { ApiResponse } from "@/type";
import Image from "next/image"
import { useEffect, useState } from "react";

const BookFreePage = () => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

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
                setData(json);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHomeData();
    },[])

    const type1Data = data?.data.find(item => item.type === 1);
    const freeList = type1Data?.freeList;

    return (
        <div className="m-5">
            <div className="mt-2.5">
                <div className="text-[30px] font-semibold text-white leading-7">SÁCH MIỄN PHÍ</div>
                <div className="relative aspect-square md:aspect-[2.96] w-full mt-8 mb-20">
                    <span className='box-border block overflow-hidden w-[initial] h-[initial] opacity-100 m-0 p-0 absolute inset-0 rounded-[20px]'>
                        {
                            isLoading === false &&
                                freeList ?
                                <Image src={freeList[0].media.originUrl} width={1496} height={505} alt='' className="absolute inset-0 box-border p-0 m-auto block bg-cover bg-center" />
                                : <Loading />
                        }
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap -mx-[15px]">
                {
                    isLoading === false ?
                        freeList?.map((item) => (
                            <div key={item.id} className="basis-full md:basis-[50%] max-w-full md:max-w-[50%] relative w-full min-h-px px-[15px]">
                                <BookItemComponent2 item={item} />
                            </div>
                        ))
                        :
                        <Loading />
                }
            </div>
        </div>
    )
}

export default BookFreePage