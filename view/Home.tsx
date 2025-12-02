"use client";

import BookItemComponent from "@/components/BookItemComponent";
import BookItemComponent2 from "@/components/BookItemComponent2";
import Loading from "@/components/Loading";
import SelectionItem from "@/components/SelectionItem";
import { fetchBlogData } from "@/api/blog/action";
import { fetchHomeData } from "@/api/home/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { selectHomeData, selectHomeLoading } from "@/api/home";
import { selectBlogData, selectBlogLoading } from "@/api/blog";

const Home = () => {
  const dispatch = useAppDispatch();
  const homeData = useAppSelector(selectHomeData);
  const isHomeLoading = useAppSelector(selectHomeLoading);

  const blogData = useAppSelector(selectBlogData);
  const isBlogLoading = useAppSelector(selectBlogLoading);

  useEffect(() => {
    dispatch(fetchHomeData());
    dispatch(fetchBlogData());
  }, [dispatch]);

  const selectionsData = homeData?.data.find((item) => item.type === 4);
  const freeBookData = homeData?.data.find((item) => item.type === 0);
  const freeListData = homeData?.data.find((item) => item.type === 1);
  const forYouData = homeData?.data.find((item) => item.type === 3);
  const newestData = homeData?.data.find((item) => item.type === 7);
  const selections = selectionsData?.selections;
  const freeBook = freeBookData?.freeBook;
  const forYou = forYouData?.forYou;
  const freeList = freeListData?.freeList;
  const newest = newestData?.newest;

  const responsiveConfig = [
    {
      key: "lg",
      items: 4,
      col: "basis-1/4 max-w-1/4",
      className: "hidden lg:flex",
    },
    {
      key: "md",
      items: 3,
      col: "basis-1/3 max-w-1/3",
      className: "hidden md:flex lg:hidden",
    },
    {
      key: "sm",
      items: 2,
      col: "basis-1/2 max-w-1/2",
      className: "flex md:hidden",
    },
  ];

  const responsiveConfig2 = [
    {
      key: "md",
      items: 8,
      col: "basis-1/2 max-w-1/2",
      className: "hidden md:flex",
    },
    {
      key: "sm",
      items: 6,
      col: "basis-full max-w-full",
      className: "flex md:hidden",
    },
  ];

  const responsiveConfig3 = [
    {
      key: "lg",
      items: 3,
      col: "basis-1/3 max-w-1/3",
      className: "hidden lg:flex",
    },
    {
      key: "md",
      items: 2,
      col: "basis-1/2 max-w-1/2",
      className: "hidden md:flex lg:hidden",
    },
    {
      key: "sm",
      items: 2,
      col: "basis-full max-w-full",
      className: "flex md:hidden",
    },
  ];

  return (
    <div>
      <div className="m-5">
        <div className="flex flex-wrap -mx-4">
          <div className="px-4 w-full md:w-2/3 flex flex-col">
            <div className="text-white font-semibold text-[32px]/10 mb-7 font-SemiBold">
              Khám phá
            </div>

            <div className="relative flex-1 overflow-hidden rounded-[20px] aspect-2/1">
              {isBlogLoading === false && blogData ? (
                <Link href={`/blogs/${blogData.data.newest[0].slug}`}>
                  <Image
                    src={blogData.data.newest[0].media.originUrl}
                    fill
                    alt="image"
                    className="object-cover transition-transform duration-500 hover:scale-125"
                  />
                </Link>
              ) : (
                <Loading />
              )}
            </div>
          </div>

          <div className="px-4 w-full md:w-1/3 flex flex-col">
            <div className="text-white font-semibold text-[32px]/10 mb-7 font-SemiBold mt-7 md:mt-0">
              Hôm nay
            </div>

            <div className="relative flex-1  aspect-2/1 group">
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] z-10"></div>
              <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                {isBlogLoading == false && freeBook ? (
                  <Link href={`/blogs/freeBook/${freeBook.slug}`}>
                    <Image
                      src={freeBook.media.originUrl}
                      fill
                      alt="image"
                      className="object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                  </Link>
                ) : (
                  <Loading />
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
                <div className="rounded-[7px] bg-[#242730] opacity-50 font-medium text-[10px]/[10px] tracking-[0.5px] text-white py-1.5 px-2.5">
                  15 phút
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-18 mx-5 mb-5">
        <div className="mt-10 flex justify-between">
          <div className="text-[32px]/[28px] font-semibold text-white font-SemiBold">
            Tuyển tập sách hay cho bạn
          </div>
          <Link href={"/collection"} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">
              Xem tất cả
            </span>
          </Link>
        </div>
        {!isHomeLoading ? (
          responsiveConfig.map(({ key, items, col, className }) => (
            <div key={key} className={`flex-wrap -mx-4 ${className}`}>
              {forYou?.slice(0, items).map((item) => (
                <div key={item.id} className={`mt-[30px] ${col} relative w-full min-h-px px-4`}>
                  <BookItemComponent item={item} />
                </div>
              ))}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div className="m-5">
        <div className="text-[28px]/[28px] text-white font-medium font-Medium">Xu hướng</div>
        <div className="mt-5 flex justify-between">
          <div className="text-[32px]/[40px] font-semibold text-white font-SemiBold">
            Sách hay trong tuần
          </div>
          <Link href={"/trending"} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">
              Xem tất cả
            </span>
          </Link>
        </div>
        {!isHomeLoading ? (
          responsiveConfig.map(({ key, items, col, className }) => (
            <div key={key} className={`flex-wrap -mx-4 ${className}`}>
              {freeList?.slice(0, items).map((item) => (
                <div key={item.id} className={`${col} relative w-full min-h-px px-4 mt-[30px]`}>
                  <BookItemComponent item={item} />
                </div>
              ))}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div className="mt-18 mx-5 mb-5">
        <div className="mt-10 flex justify-between">
          <div className="text-[32px]/[28px] font-semibold text-white font-SemiBold">
            Top sách miễn phí
          </div>
          <Link href={"/bookfree"} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">
              Xem tất cả
            </span>
          </Link>
        </div>
        {!isHomeLoading ? (
          responsiveConfig2.map(({ key, items, col, className }) => (
            <div key={key} className={`mt-7.5 p-0! flex-wrap -mx-4 ${className}`}>
              {freeList?.slice(0, items).map((item) => (
                <div key={item.id} className={`${col} relative w-full min-h-px px-4`}>
                  <BookItemComponent2 item={item} />
                </div>
              ))}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div className="mt-18 mx-5 mb-5">
        <div>
          <div className="text-[28px]/[28px] font-medium text-white font-Medium">Tuyển chọn</div>
          <div className="flex mb-8 justify-between">
            <div className="text-[32px]/[40px] font-semibold text-white mt-2.5 font-SemiBold">
              Đọc sách mọi lúc mọi nơi
            </div>
            <Link href={"/selection"} className="my-auto ml-auto">
              <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">
                Xem tất cả
              </span>
            </Link>
          </div>
        </div>
        {isHomeLoading === false ? (
          responsiveConfig2.map(({ key, col, className }) => (
            <div key={key} className={`p-0! flex-wrap -mx-4 ${className}`}>
              {selections?.slice(0, 2).map((item) => (
                <div key={item.id} className={`pb-6! ${col} relative w-full min-h-px px-4`}>
                  <SelectionItem item={item} />
                </div>
              ))}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div className="m-5">
        <div>
          <div className="mt-15">
            <div className="text-[28px]/[28px] font-medium text-white font-Medium">
              Sách mới cập nhật
            </div>
            <div className="flex justify-between">
              <div className="text-[32px]/[40px] font-semibold mb-7.5 text-white mt-4 font-SemiBold">
                Mỗi ngày một phong cách đọc sách
              </div>
              <Link href={"/booknew"} className="my-auto ml-auto">
                <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">
                  Xem tất cả
                </span>
              </Link>
            </div>
            <div>
              <div className="relative aspect-[3.09]! w-full mb-5 overflow-hidden rounded-[10px]">
                {isHomeLoading === false && newest ? (
                  <Image
                    src={newest[0].media.originUrl}
                    width={2000}
                    height={500}
                    alt=""
                    className="object-cover object-center w-full h-full  transition-all duration-500 hover:scale-125"
                  />
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
          {isHomeLoading === false ? (
            responsiveConfig2.map(({ key, col, className }) => (
              <div key={key} className={`mt-7.5 p-0! flex-wrap -mx-4 ${className}`}>
                {newest?.slice(0, 6).map((item) => (
                  <div key={item.id} className={`${col} relative w-full min-h-px px-4`}>
                    <BookItemComponent2 item={item} />
                  </div>
                ))}
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="m-5">
        <div>
          <div className="mt-15 text-[28px]/[28px]! font-medium! text-white font-Medium">
            Blog sách
          </div>
          <div className="mt-2.5 text-[32px]/[40px]! font-semibold! mb-7.5! text-white font-SemiBold">
            Nơi sẻ chia mọi kiến thức về sách
          </div>
        </div>
        {!isBlogLoading && blogData ? (
          responsiveConfig3.map(({ key, items, col, className }) => (
            <div key={key} className={`flex-wrap -mx-4 ${className}`}>
              {blogData.data.blogs.slice(0, items).map((item) => (
                <div key={item.id} className={`${col} relative w-full min-h-px px-4`}>
                  <Link href={`/blogs/${item.slug}`}>
                    <div className="aspect-[1.43] relative w-full">
                      <div className="relative overflow-hidden rounded-[10px] h-full w-full">
                        <Image
                          src={item.media.originUrl}
                          width={500}
                          height={500}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-[10px] transition-all hover:scale-125"
                        />
                      </div>
                      <div>
                        <div className="text-ellipsis whitespace-nowrap overflow-hidden text-white text-[16px]/[26px] font-semibold tracking-[0.3px] my-1.5 py-0 px-4 font-SemiBold">
                          {item.title}
                        </div>
                        <div className="text-ellipsis whitespace-pre-wrap overflow-hidden text-[#b7b9d2] text-[13px]/[26px] font-medium tracking-[.3px] mix-blend-normal py-0 px-2.5 font-Medium -webkit-box line-clamp-3">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
