import { BookItem } from '@/type'
import Image from 'next/image'
import Link from 'next/link'

const BookItemComponent = ({ item }: { item: BookItem }) => {
  return (
    <Link href={`/books/${item.slug}`}>
      <div className="w-full bg-[#0d2d3a] p-0 rounded-[20px] relative inline-block overflow-hidden">
        <div className="bg-cover aspect-[1.61] relative animation-fadein overflow-hidden">
          <Image src={item.media.originUrl} width={350} height={220} alt='image' className="object-cover h-55 transition-transform duration-500 hover:scale-120" />
          <div className="absolute right-5 top-5 rounded-[7px] bg-[#242730] opacity-50 px-2.5 py-1.5 tracking-[0.5px]">
            <span className="font-medium text-[10px]/[10px] tracking-[0.5px] text-white">7 phút</span>
          </div>
        </div>
        <div className="aspect-[1.69] flex items-center w-full">
          <div className="w-full">
            <div className="flex mt-1.5 items-end w-[80%] ml-7.5">
              <span className="text-[16px]/[26px] text-ellipsis overflow-hidden whitespace-nowrap tracking-[0.3px] text-white font-medium font-Medium">{item.title}</span>
            </div>
            <div className="mx-7.5 mt-1.5">
              <span className="line-clamp-2 text-ellipsis overflow-hidden whitespace-pre-wrap text-[13px]/[18px] text-[#b7b9d2] tracking-[0.5px] mix-blend-normal font-normal font-Regular">
                {item.subTitle}
              </span>
            </div>
            <div className="ml-7.5 items-center w-[76%] mt-2.5">
              <span className="text-[12px]/[12px] tracking-[0.5px] text-[#808191] mix-blend-normal font-Regular font-normal">53K views • 2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BookItemComponent