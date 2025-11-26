'use client';

import Loading from "@/components/Loading";
import SelectionItem from "@/components/SelectionItem"
import { ApiResponse } from "@/type";
import { useEffect, useState } from "react";

const SelectionPage = () => {
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


    const type4Data = data?.data.find(item => item.type === 4);
    const selections = type4Data?.selections;

    return (
        <div className="m-5">
            <div>
                <div className="text-[28px]/[28px] font-medium text-white">Tuyển chọn</div>
                <div className="flex mb-8 justify-between">
                    <div className="text-[40px]/[50px] font-semibold text-white mt-2.5">Đọc sách mọi lúc mọi nơi</div>
                </div>
                <div className="mt-0 p-0! flex flex-wrap -mx-[15px]">
                    {
                        isLoading === false ? selections?.map((item) => (
                            <div key={item.id} className="pb-6! flex-none w-full md:w-1/2 max-w-full md:max-w-[50%] relative min-h-px px-[15px]">
                                <SelectionItem item={item} />
                                <div className="mt-5 border border-[#1e475a]"></div>
                            </div>
                        ))
                        : 
                        <Loading/>
                    }
                </div>
            </div>
        </div>
    )
}

export default SelectionPage