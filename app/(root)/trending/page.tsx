'use client';

import BookItemComponent from '@/components/BookItemComponent'
import Loading from '@/components/Loading';
import { fetchHomeData } from '@/redux/features/homeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';

const TrendingPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(state => state.home);
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  const type1Data = data?.data.find(item => item.type === 1);

  const freeList = type1Data?.freeList;
  return (
    <div className="m-5">
      <div>
        <div className="text-[28px]/[28px] font-medium text-white">Xu hướng trong tuần</div>
        <div className="flex mb-8 justify-between">
          <div className="text-[40px]/[50px] font-semibold text-white mt-2.5">Sách hay trong tuần
          </div>
        </div>
        <div className="mt-0 p-0! flex flex-wrap -mx-4">
          {
            !isLoading ? freeList?.map((item) => (
              <div key={item.id} className="mt-8 lg:basis-1/4 md:basis-1/3 basis-1/2 lg:max-w-1/4 md:max-w-1/3 max-w-1/2 relative w-full min-h-px px-4">
                <BookItemComponent item={item} />
              </div>
            ))
              :
              <Loading />
          }
        </div>
      </div>
    </div>
  )
}

export default TrendingPage