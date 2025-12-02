"use client";

import BookItemComponent2 from "@/components/BookItemComponent2";
import Loading from "@/components/Loading";
import { fetchHomeData } from "@/api/home/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useEffect } from "react";
const BookFree = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  const type1Data = data?.data.find((item) => item.type === 1);
  const freeList = type1Data?.freeList;

  return (
    <div className="m-5">
      <div className="mt-2.5">
        <div className="text-[30px] font-semibold text-white leading-7">
          SÁCH MIỄN PHÍ
        </div>
        <div className="relative aspect-square md:aspect-[2.96] w-full mt-8 mb-20 overflow-hidden rounded-lg">
          {isLoading === false && freeList ? (
            <Image
              src={freeList[0].media.originUrl}
              width={1496}
              height={505}
              alt=""
              className="absolute inset-0 box-border p-0 m-auto block bg-cover bg-center rounded-lg"
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {isLoading === false ? (
          freeList?.map((item) => (
            <div
              key={item.id}
              className="basis-full md:basis-1/2 max-w-full md:max-w-1/2 relative w-full min-h-px px-4"
            >
              <BookItemComponent2 item={item} />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default BookFree