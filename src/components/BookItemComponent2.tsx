import { BookItem } from "@/type";
import Image from "next/image";
import Link from "next/link";

const BookItemComponent2 = ({ item }: { item: BookItem }) => {
  return (
    <Link href={`/books/${item.slug}`} className="touch-manipulation">
      <div className="flex items-center">
        <div className="h-19 w-19 rounded-[10px] relative animation-fadein inline-block overflow-hidden">
          <Image
            src={item.media.originUrl}
            width={76}
            height={76}
            alt="image"
            className="hover:scale-125 transition-all duration-500"
          />
        </div>
        <div className="w-[80%] border-b border-[#1e475a] h-23 flex items-center ml-8 relative overflow-hidden">
          <div className="flex! w-full!">
            <div className="grow w-0 pr-5">
              <div className="line-clamp-2 font-semibold text-[16px]/[20px] -tracking-[.01em] text-white font-SemiBold">
                {item.title}
              </div>
              <div className="line-clamp-1 mt-2 font-normal text-[13px]/[20px] text-white font-Regular">
                {item.author}
              </div>
            </div>
            <div className="readButton w-26 flex justify-end items-center">
              <div className="w-full font-bold text-[12px]/[20px] -tracking-[.01em] rounded-[10px] text-[#33bf71] uppercase transition-all duration-500 relative overflow-hidden py-1 px-3 z-1 cursor-pointer flex justify-center hover:text-white">
                ĐỌC NGAY
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookItemComponent2;
