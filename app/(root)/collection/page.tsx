import BookItem2 from "@/components/BookItem2"
import Image from "next/image"

const CollectionPage = () => {
    return (
        <div className="m-5">
            <div className="mt-2.5">
                <div className="text-[30px] font-semibold text-white leading-7">TUYỂN TẬP</div>
                <div className="relative aspect-[2.96] w-full mt-8 mb-20">
                    <span className='box-border block overflow-hidden w-[initial] h-[initial] opacity-100 m-0 p-0 absolute inset-0'>
                        <Image src='/640.webp' width={1496} height={505} alt='' className="absolute inset-0 box-border p-0 m-auto block bg-cover bg-center" />
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap -mx-[15px]">
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
                <div className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                    <BookItem2 />
                </div>
            </div>
        </div>
    )
}

export default CollectionPage