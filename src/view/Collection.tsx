"use client";

import BookItemComponent2 from "@/components/BookItemComponent2";
import Loading from "@/components/Loading";
import { fetchHomeData } from "@/api/home/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useEffect } from "react";
import { selectHomeData, selectHomeLoading } from "@/api/home";

const Collection = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectHomeData);
  const isLoading = useAppSelector(selectHomeLoading);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  const forYouData = data?.data.find((item) => item.type === 3);
  const forYou = forYouData?.forYou;

  return (
    <div className="m-5">
      <div className="mt-2.5">
        <div className="text-[30px] font-semibold text-white leading-7">TUYỂN TẬP</div>
        <div className="relative aspect-square md:aspect-3/1 w-full mt-8 mb-20 overflow-hidden rounded-lg">
          {forYou ? (
            <Image
              src={forYou[0].media.originUrl}
              width={1800}
              height={505}
              alt=""
              className="absolute inset-0 box-border p-0 m-auto block bg-cover bg-center hover:scale-125 transition-all duration-500"
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {isLoading === false ? (
          forYou?.map((item) => (
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
};

export default Collection;
