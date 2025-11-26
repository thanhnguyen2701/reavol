'use client';

import BookItemComponent2 from "@/components/BookItemComponent2"
import Loading from "@/components/Loading";
import { fetchHomeData } from "@/redux/features/homeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image"
import { useEffect} from "react";

const CollectionPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(state => state.home);
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);


    const type3Data = data?.data.find(item => item.type === 3);
    const forYou = type3Data?.forYou;
    return (
        <div className="m-5">
            <div className="mt-2.5">
                <div className="text-[30px] font-semibold text-white leading-7">TUYỂN TẬP</div>
                <div className="relative aspect-square md:aspect-3/1 w-full mt-8 mb-20">
                    <span className='box-border block overflow-hidden w-[initial] h-[initial] opacity-100 m-0 p-0 absolute inset-0  rounded-[20px]'>
                        {
                            forYou ?
                                <Image src={forYou[0].media.originUrl} width={1496} height={505} alt='' className="absolute inset-0 box-border p-0 m-auto block bg-cover bg-center hover:scale-125 transition-all duration-500" />
                                :
                                <Loading />
                        }
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap -mx-[15px]">
                {
                    isLoading === false ? forYou?.map((item) => (
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

export default CollectionPage