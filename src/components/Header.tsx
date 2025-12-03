import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="mt-2.5 mr-5 px-5 h-20 flex items-center">
      <div className="flex items-center w-full">
        <div className="flex items-center justify-between w-full!">
          <div className="w-[60%]!">
            <div className="w-full flex items-center">
              <div className="w-full! rounded-[10px]! bg-[#1c465d]! h-10 px-[11px] py-1 transition-all duration-500 ease-in inline-flex">
                <input
                  type="text"
                  placeholder="Tìm Kiếm"
                  className="text-white text-[16px]/[13px] font-Regular text-ellipsis touch-manipulation w-full transition-all duration-500 ease-in"
                />
                <span className="box-border ml-1 flex flex-none items-center">
                  <Image src="/ic_search.svg" width={14} height={14} alt="logo" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-[10%]">
            <div className="w-full flex items-center justify-center">
              <Image src="/icon_paddlock.svg" width={34} height={34} alt="logo" />
            </div>
          </div>
          <div className="w-[30%]">
            <div className="w-full flex items-center justify-end h-in">
              <div className="mr-5">
                <Image
                  src="/avatar.avif"
                  width={50}
                  height={50}
                  alt="logo"
                  className="rounded-[30px]"
                />
              </div>
              <div className="flex justify-start w-13">
                <Image src="/img_notification.svg" width={27} height={27} alt="logo" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
