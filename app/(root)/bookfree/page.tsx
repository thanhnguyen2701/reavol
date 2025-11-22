import BookItemComponent2 from "@/components/BookItemComponent2"
import { getHomeData } from "@/lib/api";
import Image from "next/image"

const BookFreePage = async () => {
    const { data: homeData } = await getHomeData();

    const type1Data = homeData.find(item => item.type === 1);

    const freeList = type1Data?.freeList;
    return (
        <div className="m-5">
            <div className="mt-2.5">
                <div className="text-[30px] font-semibold text-white leading-7">SÁCH MIỄN PHÍ</div>
                <div className="relative aspect-[2.96] w-full mt-8 mb-20">
                    <span className='box-border block overflow-hidden w-[initial] h-[initial] opacity-100 m-0 p-0 absolute inset-0 rounded-[20px]'>
                        <Image src='/new_mediumiiH.jpg' width={1496} height={505} alt='' className="absolute inset-0 box-border p-0 m-auto block bg-cover bg-center" />
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap -mx-[15px]">
                {
                    freeList?.map((item) => (
                        <div key={item.id} className="basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
                            <BookItemComponent2 item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BookFreePage