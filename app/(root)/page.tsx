import BookItemComponent from "@/components/BookItemComponent";
import BookItemComponent2 from "@/components/BookItemComponent2";
import SelectionItem from "@/components/SelectionItem";
import { getBlogData, getHomeData } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: homeData } = await getHomeData();

  const { data: blogData } = await getBlogData();

  const type4Data = homeData.find(item => item.type === 4);
  const type0Data = homeData.find(item => item.type === 0);
  const type1Data = homeData.find(item => item.type === 1);
  const type3Data = homeData.find(item => item.type === 3);
  const type7Data = homeData.find(item => item.type === 7);
  const selections = type4Data?.selections;
  const freeBook = type0Data?.freeBook;
  const forYou = type3Data?.forYou;
  const freeList = type1Data?.freeList;
  const newest = type7Data?.newest;

  return (
    <div>
      <div className="m-5">
        <div className="flex flex-wrap -mx-[15px] h-[560px]">
          <div className="px-[15px] w-2/3 flex flex-col">
            <div className="text-white font-semibold text-[32px]/10 mb-7 font-SemiBold">
              Khám phá
            </div>

            <div className="relative flex-1 overflow-hidden rounded-[20px]">
              <Link href={`/blogs/${blogData.newest[0].slug}`}>
                <Image
                  src={blogData.newest[0].media.originUrl}
                  fill
                  alt="image"
                  className="object-cover transition-transform duration-300 hover:scale-125"
                />
              </Link>
            </div>
          </div>

          <div className="px-[15px] w-1/3 flex flex-col">
            <div className="text-white font-semibold text-[32px]/10 mb-7 font-SemiBold">
              Hôm nay
            </div>

            <div className="relative flex-1">
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] z-10"></div>
              <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                {freeBook && (
                  <Link href={`/blogs/freeBook/${freeBook.slug}`}>
                    <Image
                      src={freeBook.media.originUrl}
                      fill
                      alt="image"
                      className="object-cover transition-transform duration-300 hover:scale-125"
                    />
                  </Link>
                )}
              </div>

              <div className="absolute top-0 w-full">
                <div className="flex items-center w-[70%] justify-center ml-10">
                  <span className="font-semibold text-[30px]/[36px] tracking-[0.3px] mt-10 text-white font-SemiBold">
                    15 Phút đọc sách mỗi ngày
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 w-full flex justify-between items-end px-10 py-6 z-12">
                <div className="text-white! text-[12px]/[12px] tracking-[0.5px] opacity-80 font-Regular">
                  53K đọc • 1 ngày trước
                </div>
                <div className="rounded-[7px] bg-[#242730] opacity-50 font-medium text-[10px]/[10px] tracking-[0.5px] text-white py-[5px] px-2.5">
                  15 phút
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-18 mx-5 mb-5">
        <div className="mt-[41px] flex justify-between">
          <div className="text-[32px]/[28px] font-semibold text-white font-SemiBold">Tuyển tập sách hay cho bạn</div>
          <Link href={'/collection'} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
          </Link>
        </div>
        <div className="flex flex-wrap -mx-[15px]">
          {
            forYou?.slice(0, 4).map((item) => (
              <div key={item.id} className="mt-[30px] basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
                <BookItemComponent item={item} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="m-5">
        <div className="text-[28px]/[28px] text-white font-medium font-Medium">Xu hướng</div>
        <div className="mt-5 flex justify-between">
          <div className="text-[32px]/[40px] font-semibold text-white font-SemiBold">Sách hay trong tuần</div>
          <Link href={'/trending'} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
          </Link>
        </div>
        <div className="flex flex-wrap -mx-[15px]">
          {
            freeList?.slice(0, 4).map((item) => (
              <div key={item.id} className="mt-8 basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
                <BookItemComponent item={item} />
              </div>
            ))
          }
        </div>

      </div>
      <div className="mt-18 mx-5 mb-5">
        <div className="mt-[41px] flex justify-between">
          <div className="text-[32px]/[28px] font-semibold text-white font-SemiBold">Top sách miễn phí</div>
          <Link href={'/bookfree'} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
          </Link>
        </div>
        <div className="mt-[30px] p-0! flex flex-wrap -mx-[15px]">
          {
            freeList?.slice(0, 8).map((item) => (
              <div key={item.id} className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                <BookItemComponent2 item={item} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="mt-18 mx-5 mb-5">
        <div>
          <div className="text-[28px]/[28px] font-medium text-white font-Medium">Tuyển chọn</div>
          <div className="flex mb-8 justify-between">
            <div className="text-[32px]/[40px] font-semibold text-white mt-2.5 font-SemiBold">Đọc sách mọi lúc mọi nơi</div>
            <Link href={'/selection'} className="my-auto ml-auto">
              <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
            </Link>
          </div>
        </div>
        <div className="p-0! flex flex-wrap -mx-[15px]">
          {
            selections?.slice(0, 2).map((item) => (
              <div key={item.id} className="pb-6! basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                <SelectionItem item={item} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="m-5">
        <div>
          <div className="mt-15">
            <div className="text-[28px]/[28px] font-medium text-white font-Medium">Sách mới cập nhật</div>
            <div className="flex justify-between">
              <div className="text-[32px]/[40px] font-semibold mb-7.5 text-white mt-4 font-SemiBold">Mỗi ngày một phong cách đọc sách</div>
              <Link href={'/booknew'} className="my-auto ml-auto">
                <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
              </Link>
            </div>
            <div>
              <div className="relative aspect-[3.09] w-full mb-5 ">
                <Image src="/new_mediumiEc.jpg" width={1500} height={500} alt="" className="object-cover rounded-[10px] max-h-[350px]" />
              </div>
            </div>
          </div>
          <div className="mt-7.5 p-0! flex flex-wrap -mx-[15px]">
            {
              newest?.slice(0, 6).map((item) => (
                <div key={item.id} className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                  <BookItemComponent2 item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="m-5">
        <div>
          <div className="mt-15 text-[28px]/[28px]! font-medium! text-white font-Medium">Blog sách</div>
          <div className="mt-2.5 text-[32px]/[40px]! font-semibold! mb-7.5! text-white font-SemiBold">Nơi sẻ chia mọi kiến thức về sách</div>
        </div>
        <div className="flex flex-wrap -mx-[15px]">
          {
            blogData.newest.map((item) => (
              <div key={item.id} className="basis-[33.333333%] max-w-[33.333333%] relative w-full min-h-px px-[15px]">
                <Link href={`/blogs/${item.slug}`}>
                  <div className="aspect-[1.43] relative w-full">
                    <div className="relative overflow-hidden my-0 mx-auto rounded-[10px] h-full w-full inline-block">
                      <Image src={item.media.originUrl} width={500} height={500} alt="" className="object-cover rounded-[10px]" />
                    </div>
                    <div>
                      <div className="text-ellipsis whitespace-nowrap overflow-hidden text-white text-[16px]/[26px] font-semibold tracking-[0.3px] my-[5px] py-0 px-[15px] font-SemiBold">{item.title}</div>
                      <div className="text-ellipsis whitespace-pre-wrap overflow-hidden text-[#b7b9d2] text-[13px]/[26px] font-medium tracking-[.3px] mix-blend-normal py-0 px-2.5 font-Medium -webkit-box line-clamp-3">{item.description}
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
  );
}
