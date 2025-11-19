'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Aside = () => {
    const pathname = usePathname();

    return (
        <div className='p-5 sidebar fixed top-0 left-0  h-full transition-all bg-[#0b2631]'>
            <div className='pl-5'>
                <div className='img'>
                    <Image src="/ic_logo_reavol.svg" alt="" width={200}
                        height={100} />
                </div>
                <div className='mt-9 mr-[13px] mb-5 ml-0'>
                    <span className='text-[11px]/[11px] font-semibold tracking-[1.5px] text-[#808191] opacity-50 mix-blend-normal'>MENU</span>
                </div>
                <ul>
                    <li className='p-0 mb-2 mt-1 h-10 menu-item'>
                        <Link href={'/'}>
                            <div className='flex h-fit'>
                                <div className='flex items-center'>
                                    <div className={`w-8 h-8 ${pathname === '/' ? 'bg-[#33bf71] active' : 'bg-[#1c465d]'} rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}>
                                        <Image src={'/Home.svg'} width={20} height={20} alt='' />
                                    </div>
                                </div>
                                <span className={`menu-item_text ${pathname === '/' ? 'active' : ''} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}>Khám phá</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-0 mb-2 mt-1 h-10 menu-item'>
                        <Link href={'/introduce'}>
                            <div className='flex h-fit'>
                                <div className='flex items-center'>
                                    <div className={`w-8 h-8 ${pathname === '/introduce' ? 'bg-[#33bf71] active' : 'bg-[#1c465d]'}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}>
                                        <Image src={'/Home.svg'} width={20} height={20} alt='' />
                                    </div>
                                </div>
                                <span className={`menu-item_text ${pathname === '/introduce' ? 'active' : ''} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}>Giới thiệu Reavol</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-0 mb-2 mt-1 h-10 menu-item'>
                        <Link href={'/collection'}>
                            <div className='flex h-fit'>
                                <div className='flex items-center'>
                                    <div className={`w-8 h-8 ${pathname === '/collection' ? 'bg-[#33bf71] active' : 'bg-[#1c465d]'}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}>
                                        <Image src={'/Home.svg'} width={20} height={20} alt='' />
                                    </div>
                                </div>
                                <span className={`menu-item_text ${pathname === '/collection' ? 'active' : ''} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}>Tuyển tập</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-0 mb-2 mt-1 h-10 menu-item'>
                        <Link href={'/bookfree'}>
                            <div className='flex h-fit'>
                                <div className='flex items-center'>
                                    <div className={`w-8 h-8 ${pathname === '/bookfree' ? 'bg-[#33bf71] active' : 'bg-[#1c465d]'}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}>
                                        <Image src={'/Home.svg'} width={20} height={20} alt='' />
                                    </div>
                                </div>
                                <span className={`menu-item_text ${pathname === '/bookfree' ? 'active' : ''} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}>Sách miễn phí</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-0 mb-2 mt-1 h-10 menu-item'>
                        <Link href={'/selection'}>
                            <div className='flex h-fit'>
                                <div className='flex items-center'>
                                    <div className={`w-8 h-8 ${pathname === '/selection' ? 'bg-[#33bf71] active' : 'bg-[#1c465d]'}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}>
                                        <Image src={'/Home.svg'} width={20} height={20} alt='' />
                                    </div>
                                </div>
                                <span className={`menu-item_text ${pathname === '/selection' ? 'active' : ''} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}>Tuyển chọn</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-0 mb-2 mt-1 h-10 menu-item'>
                        <Link href={'/trending'}>
                            <div className='flex h-fit'>
                                <div className='flex items-center'>
                                    <div className={`w-8 h-8 ${pathname === '/trending' ? 'bg-[#33bf71] active' : 'bg-[#1c465d]'}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}>
                                        <Image src={'/Home.svg'} width={20} height={20} alt='' />
                                    </div>
                                </div>
                                <span className={`menu-item_text ${pathname === '/trending' ? 'active' : ''} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}>Xu hướng</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Aside