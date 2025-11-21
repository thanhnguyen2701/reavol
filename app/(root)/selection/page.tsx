import BookItem2 from "@/components/BookItem2"
import SelectionItem from "@/components/SelectionItem"
import Image from "next/image"

const SelectionPage = () => {
    return (
        <div className="m-5">
            <div>
                <div className="text-[28px]/[28px] font-medium text-white">Tuyển chọn</div>
                <div className="flex mb-8 justify-between">
                    <div className="text-[40px]/[50px] font-semibold text-white mt-2.5">Đọc sách mọi lúc mọi nơi</div>
                </div>
                <div className="mt-0 p-0! flex flex-wrap -mx-[15px]">
                    <div className="pb-6! flex-none w-1/2 max-w-[50%] relative min-h-px px-[15px]">
                        <SelectionItem />
                        <div className="mt-5 border border-[#1e475a]"></div>
                    </div>
                    <div className="pb-6! flex-none w-1/2 max-w-[50%] relative min-h-px px-[15px]">
                        <SelectionItem />
                        <div className="mt-5 border border-[#1e475a]"></div>
                    </div>
                    <div className="pb-6! flex-none w-1/2 max-w-[50%] relative min-h-px px-[15px]">
                        <SelectionItem />
                        <div className="mt-5 border border-[#1e475a]"></div>
                    </div>
                    <div className="pb-6! flex-none w-1/2 max-w-[50%] relative min-h-px px-[15px]">
                        <SelectionItem />
                        <div className="mt-5 border border-[#1e475a]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectionPage