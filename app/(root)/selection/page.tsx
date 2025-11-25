import SelectionItem from "@/components/SelectionItem"
import { getHomeData } from "@/lib/api"

const SelectionPage = async () => {
    const { data } = await getHomeData();

    const type4Data = data.find(item => item.type === 4);
    const selections = type4Data?.selections;

    return (
        <div className="m-5">
            <div>
                <div className="text-[28px]/[28px] font-medium text-white">Tuyển chọn</div>
                <div className="flex mb-8 justify-between">
                    <div className="text-[40px]/[50px] font-semibold text-white mt-2.5">Đọc sách mọi lúc mọi nơi</div>
                </div>
                <div className="mt-0 p-0! flex flex-wrap -mx-[15px]">
                    {
                        selections?.map((item) => (
                            <div key={item.id} className="pb-6! flex-none w-full md:w-1/2 max-w-full md:max-w-[50%] relative min-h-px px-[15px]">
                                <SelectionItem item={item} />
                                <div className="mt-5 border border-[#1e475a]"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SelectionPage