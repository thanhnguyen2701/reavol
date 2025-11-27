"use client";

import Loading from "@/components/Loading";
import SelectionItem from "@/components/SelectionItem";
import { fetchHomeData } from "@/redux/features/homeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

const SelectionPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  const type4Data = data?.data.find((item) => item.type === 4);
  const selections = type4Data?.selections;

  return (
    <div className="m-5">
      <div>
        <div className="text-[28px]/[28px] font-medium text-white">
          Tuyển chọn
        </div>
        <div className="flex mb-8 justify-between">
          <div className="text-[40px]/[50px] font-semibold text-white mt-2.5">
            Đọc sách mọi lúc mọi nơi
          </div>
        </div>
        <div className="mt-0 p-0! flex flex-wrap -mx-4">
          {isLoading === false ? (
            selections?.map((item) => (
              <div
                key={item.id}
                className="pb-6! flex-none w-full md:w-1/2 max-w-full md:max-w-1/2 relative min-h-px px-4"
              >
                <SelectionItem item={item} />
                <div className="mt-5 border border-[#1e475a]"></div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
