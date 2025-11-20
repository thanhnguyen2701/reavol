import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookItem2 = () => {
    return (
        <Link href={'/'} className="touch-manipulation">
            <div className="flex items-center">
                <div className="h-[76px] w-[76px] rounded-[10px] relative animation-fadein inline-block overflow-hidden">
                    <Image src='/new_mediumPQv.jpg' width={76} height={76} alt="image" />
                </div>
                <div className="w-[80%] border-b border-[#1e475a] h-[92px] flex items-center ml-[30px] relative overflow-hidden">
                    <div className="flex! w-full!">
                        <div className="grow text-white w-0 pr-5">
                            <div className="font-semibold text-[16px]/[20px] -tracking-[.01em] text-white font-SemiBold">6 thói quen làm việc hiệu quả </div>
                            <div className="mt-2 font-normal text-[13px]/[20px] text-white font-Regular">Brendon Burchard</div>
                        </div>
                        <div className="readButton w-[102px] flex justify-end items-center">
                            <div className="w-full font-bold text-[12px]/[20px] -tracking-[.01em] rounded-[10px] text-[#33bf71] uppercase transition-all duration-300 relative overflow-hidden py-1 px-3 z-1 cursor-pointer flex justify-center hover:text-white">
                                ĐỌC NGAY
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BookItem2