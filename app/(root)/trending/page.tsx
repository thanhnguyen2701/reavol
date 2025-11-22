import BookItemComponent from '@/components/BookItemComponent'
import { getHomeData } from '@/lib/api';

const TrendingPage = async () => {
    const { data: homeData } = await getHomeData();
  
  const type1Data = homeData.find(item => item.type === 1);

  const freeList = type1Data?.freeList;
  return (
    <div className="m-5">
      <div>
        <div className="text-[28px]/[28px] font-medium text-white">Xu hướng trong tuần</div>
        <div className="flex mb-8 justify-between">
          <div className="text-[40px]/[50px] font-semibold text-white mt-2.5">Sách hay trong tuần
          </div>
        </div>
        <div className="mt-0 p-0! flex flex-wrap -mx-[15px]">
          {
            freeList?.map((item) => (
              <div key={item.id} className="mt-8 basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
                <BookItemComponent item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TrendingPage