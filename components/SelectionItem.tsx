import { Selection } from '@/type'
import Image from 'next/image'

const SelectionItem = ({ item }: { item: Selection }) => {
    return (
        <>
            <div className="relative aspect-[1.53] w-full bg-cover rounded-[20px] bg-position-[50%] cursor-pointer animation-fadein overflow-hidden">
                <Image src={item.image.originUrl} width={800} height={600} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="ml-5 mt-3">
                <div className="text-[13px]/[13px] text-[#b7b9d2] font-normal tracking-[0.5px] mix-blend-normal font-Regular">{item.name}</div>
                <div className="text-[16px]/[26px] text-white text-ellipsis overflow-hidden whitespace-nowrap font-medium tracking-[0.3px] mt-[5px] font-Medium">{item?.description}</div>
                <div className="text-[13px]/[13px] mix-blend-normal text-[#b7b9d2] tracking-[0.5px] mt-[5px] font-normal font-Regular">{item.numArticle} chủ đề</div>
            </div>
        </>
    )
}

export default SelectionItem