import BookItemComponent2 from "@/components/BookItemComponent2"
import { getHomeData } from "@/lib/api";
import Image from "next/image"

const CollectionPage = async () => {
    const { data: homeData } = await getHomeData();

    const type3Data = homeData.find(item => item.type === 3);
    const forYou = type3Data?.forYou;
    return (
        <div className="m-5">
            <div className="mt-2.5">
                <div className="text-[30px] font-semibold text-white leading-7">TUYỂN TẬP</div>
                <div className="relative aspect-square md:aspect-3/1 w-full mt-8 mb-20">
                    <span className='box-border block overflow-hidden w-[initial] h-[initial] opacity-100 m-0 p-0 absolute inset-0  rounded-[20px]'>
                        {
                            forYou ?
                                <Image src={forYou[0].media.originUrl} width={1496} height={505} alt='' className="absolute inset-0 box-border p-0 m-auto block bg-cover bg-center hover:scale-125 transition-all duration-500" />
                                : <></>
                        }
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap -mx-[15px]">
                {
                    forYou?.map((item) => (
                        <div key={item.id} className="basis-full md:basis-[50%] max-w-full md:max-w-[50%] relative w-full min-h-px px-[15px]">
                            <BookItemComponent2 item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPage