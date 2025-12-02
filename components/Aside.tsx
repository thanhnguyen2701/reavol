"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Aside = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="p-5 sidebar top-0 left-0 h-full transition-all bg-[#0b2631] hidden md:block">
        <div className="pl-5">
          <div className="img w-full">
            <Link href={"/"}>
              <Image
                src="/ic_logo_reavol.svg"
                alt=""
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div className="mt-9 mr-3 mb-5 ml-0">
            <span className="text-[11px]/[11px] font-semibold tracking-[1.5px] text-[#808191] opacity-50 mix-blend-normal">
              MENU
            </span>
          </div>
          <ul>
            <li className="p-0 mb-2 mt-1 h-10 menu-item">
              <Link href={"/"}>
                <div className="flex h-fit">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${pathname === "/" ? "bg-[#33bf71] active" : "bg-[#1c465d]"} rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                    >
                      <Image
                        src={"/Home.svg"}
                        width={20}
                        height={20}
                        alt=""
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span
                    className={`menu-item_text ${pathname === "/" ? "active" : ""} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}
                  >
                    Khám phá
                  </span>
                </div>
              </Link>
            </li>
            <li className="p-0 mb-2 mt-1 h-10 menu-item">
              <Link href={"/introduce"}>
                <div className="flex h-fit">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${pathname === "/introduce" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                    >
                      <Image
                        src={"/ic_puzzle.svg"}
                        width={20}
                        height={20}
                        alt=""
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span
                    className={`menu-item_text ${pathname === "/introduce" ? "active" : ""} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}
                  >
                    Giới thiệu Reavol
                  </span>
                </div>
              </Link>
            </li>
            <li className="p-0 mb-2 mt-1 h-10 menu-item">
              <Link href={"/collection"}>
                <div className="flex h-fit">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${pathname === "/collection" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                    >
                      <Image
                        src={"/bookmark.svg"}
                        width={20}
                        height={20}
                        alt=""
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span
                    className={`menu-item_text ${pathname === "/collection" ? "active" : ""} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}
                  >
                    Tuyển tập
                  </span>
                </div>
              </Link>
            </li>
            <li className="p-0 mb-2 mt-1 h-10 menu-item">
              <Link href={"/bookfree"}>
                <div className="flex h-fit">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${pathname === "/bookfree" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                    >
                      <Image
                        src={"/bookfree.svg"}
                        width={20}
                        height={20}
                        alt=""
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span
                    className={`menu-item_text ${pathname === "/bookfree" ? "active" : ""} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}
                  >
                    Sách miễn phí
                  </span>
                </div>
              </Link>
            </li>
            <li className="p-0 mb-2 mt-1 h-10 menu-item">
              <Link href={"/selection"}>
                <div className="flex h-fit">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${pathname === "/selection" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                    >
                      <Image
                        src={"/rating.svg"}
                        width={20}
                        height={20}
                        alt=""
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span
                    className={`menu-item_text ${pathname === "/selection" ? "active" : ""} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}
                  >
                    Tuyển chọn
                  </span>
                </div>
              </Link>
            </li>
            <li className="p-0 mb-2 mt-1 h-10 menu-item">
              <Link href={"/trending"}>
                <div className="flex h-fit">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${pathname === "/trending" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-xl mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                    >
                      <Image
                        src={"/ic_wallet.svg"}
                        width={20}
                        height={20}
                        alt=""
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span
                    className={`menu-item_text ${pathname === "/trending" ? "active" : ""} text-[14px] tracking-[0.3px] text-white h-10 flex items-center font-semibold`}
                  >
                    Xu hướng
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden fixed w-19 z-15 h-1/2 p-4.5! flex-[0_0_20%] min-h-[55%] bg-[rgba(3,42,58,0.92)] max-w-full min-w-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-r-[22px] rounded-l-none transition-all duration-200">
        <div className="h-full overflow-y-scroll block overflow-x-hidden -mt-[.1px] pt-[.1px] items-center">
          <div className="pl-0">
            <Link href={"/"}>
              <div className="mt-4.5 bg-[#1c465d] rounded-[7px] w-8 h-8 flex justify-center items-center">
                <Image
                  src={"/ic_logo_R.svg"}
                  width={13}
                  height={17}
                  alt=""
                  className=""
                />
              </div>
            </Link>
            <ul className="pt-12.5 overflow-x-hidden rounded-r-[inherit]!">
              <li className="p-0 mb-2 mt-1 h-10 menu-item">
                <Link href={"/"}>
                  <div className="flex h-fit">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 ${pathname === "/" ? "bg-[#33bf71] active" : "bg-[#1c465d]"} rounded-[7px] mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                      >
                        <Image
                          src={"/Home.svg"}
                          width={20}
                          height={20}
                          alt=""
                          className="filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="p-0 mb-2 mt-1 h-10 menu-item">
                <Link href={"/introduce"}>
                  <div className="flex h-fit">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 ${pathname === "/introduce" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-[7px] mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                      >
                        <Image
                          src={"/ic_puzzle.svg"}
                          width={20}
                          height={20}
                          alt=""
                          className="filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="p-0 mb-2 mt-1 h-10 menu-item">
                <Link href={"/collection"}>
                  <div className="flex h-fit">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 ${pathname === "/collection" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-[7px] mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                      >
                        <Image
                          src={"/bookmark.svg"}
                          width={20}
                          height={20}
                          alt=""
                          className="filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="p-0 mb-2 mt-1 h-10 menu-item">
                <Link href={"/bookfree"}>
                  <div className="flex h-fit">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 ${pathname === "/bookfree" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-[7px] mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                      >
                        <Image
                          src={"/bookfree.svg"}
                          width={20}
                          height={20}
                          alt=""
                          className="filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="p-0 mb-2 mt-1 h-10 menu-item">
                <Link href={"/selection"}>
                  <div className="flex h-fit">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 ${pathname === "/selection" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-[7px] mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                      >
                        <Image
                          src={"/rating.svg"}
                          width={20}
                          height={20}
                          alt=""
                          className="filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="p-0 mb-2 mt-1 h-10 menu-item">
                <Link href={"/trending"}>
                  <div className="flex h-fit">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 ${pathname === "/trending" ? "bg-[#33bf71] active" : "bg-[#1c465d]"}  rounded-[7px] mr-4 mb-auto mt-auto px-2 py-0 flex justify-center`}
                      >
                        <Image
                          src={"/ic_wallet.svg"}
                          width={20}
                          height={20}
                          alt=""
                          className="filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
