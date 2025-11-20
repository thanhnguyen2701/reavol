import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='mx-0 z-10'>
            <div>
                <div>
                    <div className='pb-24 bg-[#123543] m-0 pl-[20%] flex flex-wrap'>
                        <div className='pt-[70px] pr-0 pb-12 pl-5 flex-none w-5/12 max-w-[41.666667%]'>
                            <div>
                                <div>
                                    <Image src={'/ic_logo_reavol.svg'} width={250} height={100} alt='' />
                                </div>
                                <h6 className='mt-2.5 text-[16px]/[30px] text-white font-medium font-Medium mb-[.5em]'>DIGITAL E-COMMERCE PLATFORM</h6>
                                <div className='text-white font-bold  text-[16px]'>Công ty Cổ Phần Reavol</div>
                                <div className='text-white'>GPKD số 0109650648 do Sở KH và ĐT TP Hà Nội cấp ngày 27/05/2021</div>
                                <div className='text-white'>Địa chỉ: Tầng 6, Toà văn phòng 1, Tổ hợp Sunsquare Số 21 Lê Đức Thọ,<br /> P. Mỹ Đình 2, Q. Nam Từ Liêm, Tp. Hà Nội</div>
                                <div className='text-white'>
                                    Hotline: <Link href={'tel:0977947961'}>0977947961</Link>
                                </div>
                                <div className='text-white'>
                                    Mail: <Link href={'mailto:namhoang@reavol.com'}>namhoang@reavol.com</Link>
                                </div>
                                <div className='mt-[35px] flex'>
                                    <Link href={'https://www.facebook.com/reavolvn'}>
                                        <div className='w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center '>
                                            <Image src={'/ic_facebook.svg'} width={24} height={24} alt='' />
                                        </div>
                                    </Link>
                                    <Link href={'https://www.instagram.com/reavol.official/'}>
                                        <div className='w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]'>
                                            <Image src={'/ic_instagram.svg'} width={24} height={24} alt='' />
                                        </div>
                                    </Link>
                                    <Link href={'https://www.youtube.com/channel/UC4NcK6yLN-BlTmF_-2DTIwA'}>
                                        <div className='w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]'>
                                            <Image src={'/tik-tok.svg'} width={24} height={24} alt='' />
                                        </div>
                                    </Link>
                                    <Link href={'tel:0977947961'}>
                                        <div className='w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]'>
                                            <Image src={'/icon-telephone-call.svg'} width={24} height={24} alt='' />
                                        </div>
                                    </Link>
                                    <Link href={'mailto:namhoang@reavol.com'}>
                                        <div className='w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]'>
                                            <Image src={'/icon-email.svg'} width={24} height={24} alt='' />
                                        </div>
                                    </Link>
                                </div>
                                <div className='mt-[35px] flex'>
                                    <div className='cursor-pointer'>
                                        <div>
                                            <Image src={'/imgbin_app-google.svg'} width={156} height={55} alt=''/>
                                        </div>
                                    </div>
                                    <div className='cursor-pointer ml-5'>
                                        <div>
                                            <Image src={'/imgbin_app-store.svg'} width={156} height={55} alt=''/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer