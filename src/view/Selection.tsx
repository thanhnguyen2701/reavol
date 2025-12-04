"use client";

import Loading from "@/components/Loading";
import SelectionItem from "@/components/SelectionItem";
import { fetchHomeData } from "@/api/home/action";
import { useAppDispatch } from "@/hooks";
import { useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { selectHomeData, selectHomeLoading } from "@/api/home";
import { useTranslations } from "next-intl";

const Selection = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectHomeData);
  const isLoading = useAppSelector(selectHomeLoading);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  const selectionsData = data?.data.find((item) => item.type === 4);
  const selections = selectionsData?.selections;

  const t= useTranslations("Selection");

  return (
    <div className="m-5">
      <div>
        <div className="text-[28px]/[28px] font-medium text-white">{t('selection')}</div>
        <div className="flex mb-8 justify-between">
          <div className="text-[40px]/[50px] font-semibold text-white mt-2.5">
            {t('read-anytime-anywhere')}
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

export default Selection;
