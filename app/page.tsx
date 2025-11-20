import BookItem from "@/components/BookItem";
import BookItem2 from "@/components/BookItem2";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="m-5">
        <div className="flex flex-wrap -mr-[15px] -ml-[15px]">
          <div className="col relative min-h-px pr-[15px] pl-[15px] w-[66.6666667%]">
            <div className="text-white font-semibold text-[32px]/10 mb-7 font-SemiBold">Khám phá</div>

            <div className="overflow-hidden w-full h-[500px] rounded-[20px]">
              <Image src='/banner.jpg' width={1000} height={500} alt='image' className="h-full object-cover transition-transform duration-300 hover:scale-120" />
            </div>
          </div>
          <div className="col relative min-h-px pr-[15px] pl-[15px] w-[33.3333333%] h-full">
            <div className="text-white font-semibold text-[32px]/10 mb-7 font-SemiBold">Hôm nay</div>

            <div className="relative">
              <div className="overflow-hidden w-full h-[500px] rounded-[10px]">
                <Image src='/new_mediumtX3.jpg' width={470} height={500} alt='image' className="h-full object-cover transition-transform duration-300 hover:scale-120" />
              </div>
              <div className="absolute top-0 w-full bg-[rgba(0,0,0,0.1)]">
                <div className="flex items-center w-[70%] justify-center ml-10">
                  <span className="font-semibold text-[30px]/[36px] tracking-[0.3px] mt-10 text-white font-SemiBold">15 Phút đọc sách mỗi ngày</span>
                </div>
              </div>
              <div className="absolute bottom-0 w-full bg-[rgba(0,0,0,0.1)] flex justify-between items-end px-10 py-6">
                <div className="text-white text-[12px]/[12px] tracking-[0.5px] opacity-80 font-normal font-Regular">
                  53K đọc • 1 ngày trước
                </div>
                <div className="rounded-[7px] bg-[#242730] opacity-50 font-medium text-[10px]/[10px] tracking-[0.5px] text-white py-[5px] px-2.5">
                  15 phút
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-18 mx-5 mb-5">
        <div className="mt-[41px] flex justify-between">
          <div className="text-[32px]/[28px] font-semibold text-white font-SemiBold">Tuyển tập sách hay cho bạn</div>
          <Link href={'/collection'} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
          </Link>
        </div>
        <div className="flex flex-wrap -mx-[15px]">
          <div className="mt-8 basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
          <div className="mt-8 basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
          <div className="mt-8 basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
          <div className="mt-8 basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="text-[28px]/[28px] text-white font-medium font-Medium">Xu hướng</div>
        <div className="mt-5 flex justify-between">
          <div className="text-[32px]/[40px] font-semibold text-white font-SemiBold">Sách hay trong tuần</div>
          <Link href={'/'} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
          </Link>
        </div>
        <div className="flex flex-wrap -mx-[15px]">
          <div className="mt-[30px] basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
          <div className="mt-[30px] basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
          <div className="mt-[30px] basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
          <div className="mt-[30px] basis-[25%] max-w-[25%] relative w-full min-h-px px-[15px]">
            <BookItem />
          </div>
        </div>

      </div>
      <div className="mt-18 mx-5 mb-5">
        <div className="mt-[41px] flex justify-between">
          <div className="text-[32px]/[28px] font-semibold text-white font-SemiBold">Top sách miễn phí</div>
          <Link href={'/'} className="my-auto ml-auto touch-manipulation">
            <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
          </Link>
        </div>
        <div className="mt-[30px] p-0! flex flex-wrap -mx-[15px]">
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
      <div className="mt-18 mx-5 mb-5">
        <div>
          <div className="text-[28px]/[28px] font-medium text-white font-Medium">Tuyển chọn</div>
          <div className="flex mb-8 justify-between">
            <div className="text-[32px]/[40px] font-semibold text-white mt-2.5 font-SemiBold">Đọc sách mọi lúc mọi nơi</div>
            <Link href={'/'} className="my-auto ml-auto">
              <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
            </Link>
          </div>
        </div>
        <div className="p-0! flex flex-wrap -mx-[15px]">
          <div className="pb-6! basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
            <div className="relative aspect-[1.53] w-full bg-cover rounded-[20px] bg-position-[50%] cursor-pointer animation-fadein overflow-hidden">
              <Image src={'/banner.jpg'} width={800} height={600} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="ml-5 mt-3">
              <div className="text-[13px]/[13px] text-[#b7b9d2] font-normal tracking-[0.5px] mix-blend-normal font-Regular">Chìa khóa mở cửa những tâm hồn thảnh thơi</div>
              <div className="text-[16px]/[26px] text-white text-ellipsis overflow-hidden whitespace-nowrap font-medium tracking-[0.3px] mt-[5px] font-Medium">Tĩnh lặng trong thiền định chính là yếu tố cốt lõi mở ra không gian riêng tư cho chính bạn</div>
              <div className="text-[13px]/[13px] mix-blend-normal text-[#b7b9d2] tracking-[0.5px] mt-[5px] font-normal font-Regular">5 chủ đề</div>
            </div>
          </div>
          <div className="pb-6! basis-[50%] max-w-[50%] relative w-full min-h-px px-[15px]">
            <div className="relative aspect-[1.53] w-full bg-cover rounded-[20px] bg-position-[50%] cursor-pointer animation-fadein overflow-hidden">
              <Image src={'/banner.jpg'} width={800} height={600} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="ml-5 mt-3">
              <div className="text-[13px]/[13px] text-[#b7b9d2] font-normal tracking-[0.5px] mix-blend-normal font-Regular">Chìa khóa mở cửa những tâm hồn thảnh thơi</div>
              <div className="text-[16px]/[26px] text-white text-ellipsis overflow-hidden whitespace-nowrap font-medium tracking-[0.3px] mt-[5px] font-Medium">Tĩnh lặng trong thiền định chính là yếu tố cốt lõi mở ra không gian riêng tư cho chính bạn</div>
              <div className="text-[13px]/[13px] mix-blend-normal text-[#b7b9d2] tracking-[0.5px] mt-[5px] font-normal font-Regular">5 chủ đề</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div>
          <div className="mt-15">
            <div className="text-[28px]/[28px] font-medium text-white font-Medium">Sách mới cập nhật</div>
            <div className="flex justify-between">
              <div className="text-[32px]/[40px] font-semibold mb-7.5 text-white mt-4 font-SemiBold">Mỗi ngày một phong cách đọc sách</div>
              <Link href={'/booknew'} className="my-auto ml-auto">
                <span className="text-[16px]/[28px] text-[#33bf71] cursor-pointer font-light font-Light">Xem tất cả</span>
              </Link>
            </div>
            <div>
              <div className="relative aspect-[3.09] w-full mb-5">
                <Image src="/banner.jpg" width={1500} height={500} alt="" className="object-cover rounded-[10px]" />
              </div>
            </div>
          </div>
          <div className="mt-7.5 p-0! flex flex-wrap -mx-[15px]">
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
      </div>
      <div className="m-5">
        <div>
          <div className="mt-15 text-[28px]/[28px]! font-medium! text-white font-Medium">Blog sách</div>
          <div className="mt-2.5 text-[32px]/[40px]! font-semibold! mb-7.5! text-white font-SemiBold">Nơi sẻ chia mọi kiến thức về sách</div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-[15px]">
        <div className="basis-[33.333333%] max-w-[33.333333%] relative w-full min-h-px px-[15px]">
          <Link href={'/'}>
            <div className="aspect-[1.43] relative w-full">
              <div className="relative overflow-hidden my-0 mx-auto rounded-[10px] h-full w-full inline-block">
                <Image src="/new_mediumPQv.jpg" width={500} height={500} alt="" className="object-cover rounded-[10px]" />
              </div>
              <div>
                <div className="text-ellipsis whitespace-nowrap overflow-hidden text-white text-[16px]/[26px] font-semibold tracking-[0.3px] my-[5px] py-0 px-[15px] font-SemiBold">👉 Soạn YOLO125V gửi 888 để tận hưởng 7GB data/ngày + DATA VÔ HẠN truy cập app MyTV cho "mọt phim" và Reavol cho "mọt sách" 🎞📚</div>
                <div className="text-ellipsis whitespace-pre-wrap overflow-hidden text-[#b7b9d2] text-[13px]/[26px] font-medium tracking-[.3px] mix-blend-normal py-0 px-2.5 font-Medium -webkit-box line-clamp-3">- 7 GB data/ngày (hết dung lượng dừng truy cập). <br/>
                  - Truy cập MyTV add-on VTVCAB (140 kênh truyền hình bao gồm VTVCAB)<br/>
                  - 1 tài khoản sử dụng các nội dung tại ứng dụng đọc sách Reavol
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-[33.333333%] max-w-[33.333333%] relative w-full min-h-px px-[15px]">
          <Link href={'/'}>
            <div className="aspect-[1.43] relative w-full">
              <div className="relative overflow-hidden my-0 mx-auto rounded-[10px] h-full w-full inline-block">
                <Image src="/new_mediumPQv.jpg" width={500} height={500} alt="" className="object-cover rounded-[10px]" />
              </div>
              <div>
                <div className="text-ellipsis whitespace-nowrap overflow-hidden text-white text-[16px]/[26px] font-semibold tracking-[0.3px] my-[5px] py-0 px-[15px] font-SemiBold">👉 Soạn YOLO125V gửi 888 để tận hưởng 7GB data/ngày + DATA VÔ HẠN truy cập app MyTV cho "mọt phim" và Reavol cho "mọt sách" 🎞📚</div>
                <div className="text-ellipsis whitespace-pre-wrap overflow-hidden text-[#b7b9d2] text-[13px]/[26px] font-medium tracking-[.3px] mix-blend-normal py-0 px-2.5 font-Medium -webkit-box line-clamp-3">- 7 GB data/ngày (hết dung lượng dừng truy cập). <br/>
                  - Truy cập MyTV add-on VTVCAB (140 kênh truyền hình bao gồm VTVCAB)<br/>
                  - 1 tài khoản sử dụng các nội dung tại ứng dụng đọc sách Reavol
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-[33.333333%] max-w-[33.333333%] relative w-full min-h-px px-[15px]">
          <Link href={'/'}>
            <div className="aspect-[1.43] relative w-full">
              <div className="relative overflow-hidden my-0 mx-auto rounded-[10px] h-full w-full inline-block">
                <Image src="/new_mediumPQv.jpg" width={500} height={500} alt="" className="object-cover rounded-[10px]" />
              </div>
              <div>
                <div className="text-ellipsis whitespace-nowrap overflow-hidden text-white text-[16px]/[26px] font-semibold tracking-[0.3px] my-[5px] py-0 px-[15px] font-SemiBold">👉 Soạn YOLO125V gửi 888 để tận hưởng 7GB data/ngày + DATA VÔ HẠN truy cập app MyTV cho "mọt phim" và Reavol cho "mọt sách" 🎞📚</div>
                <div className="text-ellipsis whitespace-pre-wrap overflow-hidden text-[#b7b9d2] text-[13px]/[26px] font-medium tracking-[.3px] mix-blend-normal py-0 px-2.5 font-Medium -webkit-box line-clamp-3">- 7 GB data/ngày (hết dung lượng dừng truy cập). <br/>
                  - Truy cập MyTV add-on VTVCAB (140 kênh truyền hình bao gồm VTVCAB)<br/>
                  - 1 tài khoản sử dụng các nội dung tại ứng dụng đọc sách Reavol
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
