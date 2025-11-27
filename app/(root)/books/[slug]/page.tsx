"use client";

import Loading from "@/components/Loading";
import { fetchBookDetails } from "@/redux/features/bookDetailsSlice";
import { fetchRelatedBooks } from "@/redux/features/bookRelatedSlice";
import { fetchHomeData } from "@/redux/features/homeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const BookPage = () => {
  const { slug } = useParams();

  const dispatch = useAppDispatch();

  const homeData = useAppSelector((state) => state.home.data);

  const detailsData = useAppSelector((state) => state.bookDetails.details);
  const detailsLoading = useAppSelector((state) => state.bookDetails.isLoading);

  const relatedData = useAppSelector((state) => state.bookRelated.related);
  const relatedLoading = useAppSelector((state) => state.bookRelated.isLoading);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  const type5Data = homeData?.data.find((item) => item.type === 5);
  const type1Data = homeData?.data.find((item) => item.type === 1);
  const type3Data = homeData?.data.find((item) => item.type === 3);
  const type7Data = homeData?.data.find((item) => item.type === 7);
  const forYou = type3Data?.forYou;
  const freeList = type1Data?.freeList;
  const newest = type7Data?.newest;
  const trending = type5Data?.trending;

  const book =
    forYou?.find((item) => item.slug === slug) ||
    freeList?.find((item) => item.slug === slug) ||
    newest?.find((item) => item.slug === slug) ||
    trending?.find((item) => item.slug === slug);

  useEffect(() => {
    if (book) {
      dispatch(fetchBookDetails(book.id));
      dispatch(fetchRelatedBooks(book.id));
    }
  }, [book, dispatch]);

  const responsiveConfig = [
    { key: "lg", items: 3, col: 'basis-full max-w-full', className: "hidden lg:flex" },
    { key: "md", items: 4, col: 'basis-[50%] max-w-[50%]', className: "flex lg:hidden" },
  ];

  return (
    <div className="m-5 lg:flex">
      {detailsLoading === false && detailsData ? (
        <div className="h-full m-0 lg:w-[65%] md:w-full bg-[#042c43] border border-[rgba(255,255,255,0.59)] box-border rounded-[20px] mt-12 flex flex-wrap overflow-hidden">
          <div className="w-full p-0">
            <div className="relative aspect-[1.01]">
              <span className="box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0">
                <Image
                  src={detailsData.data.media.originUrl}
                  sizes="100vw"
                  width={1500}
                  height={770}
                  alt=""
                  className="rounded-tl-[20px] rounded-tr-[20px] absolute inset-0 box-border p-0 m-auto block bg-cover"
                />
              </span>
            </div>
            <div>
              <div className="px-12.5 pt-12.5 pb-0 items-center  box-border justify-between! flex!">
                <div className="text-white text-[30px] font-semibold">
                  {detailsData.data.title}
                </div>
                <div className="w-37.5 bg-[#33bf71] text-white rounded-[20px] text-center text-[20px] font-InterBold py-1.25 cursor-pointer">
                  Mua ngay
                </div>
              </div>
              <div className="px-12.5 max-w-full relative w-full min-h-px">
                <div className="mt-12.5">
                  <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">
                    Những gì về sách ?
                  </h5>
                  <h6 className="text-[16px]/[24px]! mx-[13px] text-white mt-0 mb-[.5em] font-medium">
                    {detailsData.data.aboutTheBook}
                  </h6>
                </div>
                <div className="mt-12.5">
                  <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">
                    Ai nên đọc sách này ?
                  </h5>
                  <h6 className="text-[16px]/[24px]! mx-[13px] text-white mt-0 mb-[.5em] font-medium">
                    {detailsData.data.whoShouldRead}
                  </h6>
                </div>
                <div className="mt-12.5">
                  <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">
                    Ai viết ra cuốn sách này ?
                  </h5>
                  <h6 className="text-[16px]/[24px]! mx-[13px] text-white mt-0 mb-[.5em] font-medium">
                    {detailsData.data.aboutTheAuthor}
                  </h6>
                </div>
                <div className="mt-12.5">
                  <h5 className="text-[16px]/[20px]! text-white font-bold mt-0 mb-[.5em]">
                    Phụ lục
                  </h5>
                  <div className="mt-6">
                    {detailsData.data.chapters.map((item, index) => (
                      <div className="m-0! flex flex-wrap">
                        <div className="w-[3%] text-center text-white text-[16px]/[24px] tracking-[.5px]">
                          {index + 1}
                        </div>
                        <div className="text-white text-[16px]/[24px] tracking-[.5px] flex-none w-5/6 max-w-5/6 relative min-h-px px-4">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[18px]/[30px] font-[poppins] tracking-[.5px] text-white text-center pb-5 pt-7.5 mt-0 mb-[.5em] font-medium">
                  Tải app để đọc bản tóm tắt đầy đủ
                </h4>
                <div className="mt-9 flex pb-7.5 justify-center">
                  <div className="bg-black rounded-[10px] w-47 h-16 flex px-3">
                    <Link href={""} className="w-full flex touch-manipulation">
                      <div className="flex justify-center items-center">
                        <span className="box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0">
                          <Image
                            src={"/app-store.svg"}
                            width={30}
                            height={30}
                            alt=""
                            className="object-cover align-middle rounded-tl-[inherit]! rounded-tr-[inherit]!"
                          />
                        </span>
                      </div>
                      <div className="pl-4 pt-2">
                        <h6 className="font-medium text-[14px]/[21px] text-white mt-0! mb-0! w-full!">
                          Download on the
                        </h6>
                        <h5 className="mb-0! font-semibold text-[18px]/[27px] text-white mt-0">
                          App Store
                        </h5>
                      </div>
                    </Link>
                  </div>
                  <div className="ml-7 bg-black rounded-[10px] w-47 h-16 flex px-3">
                    <Link href={""} className="w-full flex touch-manipulation">
                      <div className="flex justify-center items-center rounded-tl-[20px]! rounded-tr-[20px]!">
                        <span className="box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 rounded-tl-[20px]! rounded-tr-[20px]!">
                          <Image
                            src={"/playstore.svg"}
                            width={30}
                            height={30}
                            alt=""
                            className="object-cover align-middle rounded-tl-[20px]! rounded-tr-[20px]!"
                          />
                        </span>
                      </div>
                      <div className="pl-4 pt-2">
                        <h6 className="font-medium text-[14px]/[21px] text-white mt-0! mb-0! w-full!">
                          GET IT ON
                        </h6>
                        <h5 className="mb-0! font-semibold text-[18px]/[27px] text-white mt-0">
                          Google Play
                        </h5>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {relatedLoading === false && relatedData ? (
        <div className="lg:w-[35%] md:w-full m-0! py-8 pr-0 lg:pl-8 flex flex-wrap">
          <div className="container">
            {responsiveConfig.map(({ key, items, col, className }) => (
              <div key={key} className={`${className} flex-wrap -mx-4`}>
                <div className="text-white text-[20px]/[36px] tracking-[.5px] font-bold pt-1.5 text-center w-full">
                  Có thể bạn quan tâm
                </div>
                {relatedData.data.slice(0, items).map((item) => (
                  <div
                    key={item.id}
                    className={`mt-12 flex justify-center ${col} relative min-h-px px-4`}
                  >
                    <Link
                      href={`/books/${item.slug}`}
                      className="w-full touch-manipulation"
                    >
                      <div className="bg-[#242730] p-0 rounded-[20px]">
                        <div className="w-full aspect-[.994] relative">
                          <span className="box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0 rounded-tr-[10px] rounded-tl-[10px]">
                            <Image
                              src={item.media.originUrl}
                              sizes="100vw"
                              width={1500}
                              height={770}
                              alt=""
                              className="rounded-tl-[20px] rounded-tr-[20px] absolute inset-0 box-border p-0 m-auto block bg-cover"
                            />
                          </span>
                          <div className="absolute w-16 right-5 bottom-5 rounded-[7px] bg-[#242730] opacity-50 font-medium text-[10px]/[10px] text-white p-2.5 tracking-[.5px]">
                            <div>
                              <span className="rounded-tr-[10px] rounded-tl-[10px] font-medium text-[10px]/[10px] tracking-[.5px] text-white">
                                15 phút
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="h-38 w-full pt-5">
                          <div className="flex items-end w-[80%] ml-7.5">
                            <span className="text-[16px]/[26px] text-ellipsis overflow-hidden whitespace-nowrap tracking-[0.3px] text-white font-medium">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-end w-[75%] tracking-[.5px] text-[#b7b9d2] text-[13px]/[13px] ml-7.5 mt-1.5">
                            <span className="mix-blend-normal font-normal tracking-[.5px] text-[#b7b9d2] text-[13px]/[13px]">
                              {item.author}
                            </span>
                          </div>
                          <div className="mx-7.5 mt-1.5">
                            <span className="line-clamp-2 text-ellipsis overflow-hidden whitespace-pre-wrap text-[13px]/[15px] tracking-[.5px] text-[#b7b9d2] mix-blend-normal font-normal">
                              {item.subTitle}
                            </span>
                          </div>
                          <div className="ml-7.5 items-center w-[76%] mt-2.5">
                            <span className="font-normal text-[12px]/[12px] tracking-[.5px] text-[#808191] mix-blend-normal">
                              53K views • 2 weeks ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BookPage;
