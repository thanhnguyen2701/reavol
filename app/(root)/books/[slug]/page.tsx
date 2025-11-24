
const BookPage = () => {
    return (
        <div className='m-5 flex'>
            <div className='h-full m-0 w-[65%] bg-[#042c43] border  boder-[rgba(255,255,255,0.59)] box-border rounded-[20px] mt-12 flex flex-wrap'>
                <div className='w-full p-0'>
                    <div className='relative aspect-[1.01]'>
                        <span className='box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 absolute inset-0 rounded-[20px]'>
                            {/* {
                                blogData ?
                                    <Image src={blogData?.media.originUrl} sizes="100vw" width={1500} height={770} alt='' className='align-middle rounded-[20px] absolute inset-0 box-border p-0 border-none m-auto block bg-cover bg-top' />
                                    :
                                    <></>
                            } */}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookPage