import Image from 'next/image'
import React from 'react'

const SelectionItem = () => {
    return (
        <>
            <div className="relative aspect-[1.53] w-full bg-cover rounded-[20px] bg-position-[50%] cursor-pointer animation-fadein overflow-hidden">
                <Image src={'/banner.jpg'} width={800} height={600} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="ml-5 mt-3">
                <div className="text-[13px]/[13px] text-[#b7b9d2] font-normal tracking-[0.5px] mix-blend-normal font-Regular">Chìa khóa mở cửa những tâm hồn thảnh thơi</div>
                <div className="text-[16px]/[26px] text-white text-ellipsis overflow-hidden whitespace-nowrap font-medium tracking-[0.3px] mt-[5px] font-Medium">Tĩnh lặng trong thiền định chính là yếu tố cốt lõi mở ra không gian riêng tư cho chính bạn</div>
                <div className="text-[13px]/[13px] mix-blend-normal text-[#b7b9d2] tracking-[0.5px] mt-[5px] font-normal font-Regular">5 chủ đề</div>
            </div>
        </>
    )
}

export default SelectionItem