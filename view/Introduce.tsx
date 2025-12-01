import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Introduce = () => {
  return (
    <div className="w-full relative h-full bg-[#044063]">
      <div className="bg-[#044063]">
        <div className={styles.container}>
          <div className="flex justify-between pt-5">
            <div className="my-auto max-0 cursor-pointer">
              <Link href="/">
                <Image
                  src={"/icon_logoReavol.svg"}
                  width={150}
                  height={50}
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-10">
              <span className="cursor-pointer text-white text-[24px]/[130%] font-semibold">
                Đăng nhập
              </span>
            </div>
          </div>
          <div className={`flex flex-wrap -mx-4`}>
            <div
              className={`text-white mt-[70px] relative w-full min-h-px px-4 md:w-1/2`}
            >
              <p className="lg:text-[50px]/[140%] md:text-[46px]/[120%] text-[42px]/[110%] font-bold w-[600px] md:w-[500px] mt-0 lg:mb-[1em] mb-[.5em]">
                KHƠI NGUỒN TRI THỨC VÀ SÁNG TẠO CÙNG REAVOL
              </p>
              <p className="lg:mt-[82px] font-normal lg:text-[30px]/[160%] md:text-[28px]/[140%] text-[24px]/[120%] lg:mb-[1em] mb-[.5em]">
                Ứng dụng chuyên về nội dung số đầu tiên của Việt Nam, hứa hẹn
                mang đến cho người dùng những sản phẩm chất lượng cùng trải
                nghiệm tuyệt vời
              </p>
              <div className="lg:mt-[35px] flex items-center justify-center w-[438px] lg:h-[92px] h-20 bg-[#43b871] rounded-[10px]">
                <span className="font-bold text-[24px] text-white">
                  Bắt đầu ngay
                </span>
              </div>
            </div>
            <div
              className={`md:mt-[119px] mt-10 relative aspect-square md:aspect-[.794979079] w-full min-h-px px-4 md:w-1/2`}
            >
                <Image
                  src={"/ic_silver.avif"}
                  sizes="100vw"
                  width={570}
                  height={720}
                  alt=""
                  className="pl-[74px] align-middle"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.container}>
          <div className="lg:pt-[150px] pt-[100px]">
            <div className="font-semibold text-[24px]/[130%] text-[#43b871] text-center">
              TIỆN ÍCH
            </div>
            <div className="mt-6 font-semibold text-[36px]/[130%] text-[#163b56] text-center">
              Khám phá mọi điều hay
            </div>
            <div className="mt-[90px] flex flex-wrap -mx-4">
              <div className="flex-none w-1/2 md:w-1/4 max-w-1/2 md:max-w-1/4 relative min-h-px px-4">
                <div className="font-normal text-[24px]/[36px] text-[#163b56] text-center flex justify-center h-[52px]">
                  <Image src={"/ic_agenda.svg"} width={52} height={52} alt="" />
                </div>
                <div className="text-center font-normal text-[24px]/[36px] text-[#163b56]">
                  <p className="mt-[41px] font-semibold text-[30px]/[45px] text-[43b871] mb-[1em]">
                    Đọc sách
                  </p>
                  <span className="line-clamp-3 font-normal text-[24px]/[36px] text-[#163b56]">
                    Trên 2500 cuốn sách
                  </span>
                </div>
              </div>
              <div className="flex-none w-1/2 md:w-1/4 max-w-1/2 md:max-w-1/4 relative min-h-px px-4">
                <div className="font-normal text-[24px]/[36px] text-[#163b56] text-center flex justify-center h-[52px]">
                  <Image
                    src={"/ic_headphones.svg"}
                    width={52}
                    height={52}
                    alt=""
                  />
                </div>
                <div className="text-center font-normal text-[24px]/[36px] text-[#163b56]">
                  <p className="mt-[41px] font-semibold text-[30px]/[45px] text-[43b871] mb-[1em]">
                    Sách nói
                  </p>
                  <span className="line-clamp-3 font-normal text-[24px]/[36px] text-[#163b56]">
                    Giọng đọc tự nhiên, truyền cảm hứng
                  </span>
                </div>
              </div>
              <div className="flex-none w-1/2 md:w-1/4 max-w-1/2 md:max-w-1/4 relative min-h-px px-4">
                <div className="font-normal text-[24px]/[36px] text-[#163b56] text-center flex justify-center h-[52px]">
                  <Image
                    src={"/ic_play-button.svg"}
                    width={52}
                    height={52}
                    alt=""
                  />
                </div>
                <div className="text-center font-normal text-[24px]/[36px] text-[#163b56]">
                  <p className="mt-[41px] font-semibold text-[30px]/[45px] text-[43b871] mb-[1em]">
                    Xem video
                  </p>
                  <span className="line-clamp-3 font-normal text-[24px]/[36px] text-[#163b56]">
                    Nghe sách miễn phí không có quảng cáo
                  </span>
                </div>
              </div>
              <div className="flex-none w-1/2 md:w-1/4 max-w-1/2 md:max-w-1/4 relative min-h-px px-4">
                <div className="font-normal text-[24px]/[36px] text-[#163b56] text-center flex justify-center h-[52px]">
                  <Image src={"/ic_hands.svg"} width={52} height={52} alt="" />
                </div>
                <div className="text-center font-normal text-[24px]/[36px] text-[#163b56]">
                  <p className="mt-[41px] font-semibold text-[30px]/[45px] text-[43b871] mb-[1em]">
                    Sáng tác
                  </p>
                  <span className="line-clamp-3 font-normal text-[24px]/[36px] text-[#163b56]">
                    Tự do sáng tác, đa dạng, hấp dẫn
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[150px] flex flex-wrap -mx-4">
            <div className="flex-none w-1/2 max-w-1/2 relative min-h-px px-4">
              <p className="font-semibold text-[24px]/[130%] text-[#43b871] mt-0 mb-[1em]">
                LỰA CHỌN TỐT NHẤT
              </p>
              <h3 className="font-bold text-[48px]/[130%] text-[#163b56] lg:w-[70%] font-[poppins] mt-0 mb-[0.5em]">
                Đọc - Nghe sách mỗi khi
              </h3>
              <div>
                <div>
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <span className="ml-6 font-semibold text-[36px]/[75px] tracking-[.005em] text-[#163b56]">
                    Học tập
                  </span>
                </div>
                <div>
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <span className="ml-6 font-semibold text-[36px]/[75px] tracking-[.005em] text-[#163b56]">
                    Lái xe
                  </span>
                </div>
                <div>
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <span className="ml-6 font-semibold text-[36px]/[75px] tracking-[.005em] text-[#163b56]">
                    Đi lại
                  </span>
                </div>
                <div>
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <span className="ml-6 font-semibold text-[36px]/[75px] tracking-[.005em] text-[#163b56]">
                    Làm việc
                  </span>
                </div>
                <div>
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <span className="ml-6 font-semibold text-[36px]/[75px] tracking-[.005em] text-[#163b56]">
                    Chạy bộ
                  </span>
                </div>
                <div>
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <span className="ml-6 font-semibold text-[36px]/[75px] tracking-[.005em] text-[#163b56]">
                    Thư giãn
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-none w-1/2 max-w-1/2 relative min-h-px px-4">
              <div className="relative hidden lg:block lg:left-5 xl:left-30">
                  <Image
                    src={"/ic_select_listen.avif"}
                    width={513}
                    height={716}
                    alt=""
                  />
              </div>
              <div className="absolute aspect-[.610878661] -left-20 lg:-left-50 xl:-left-30">
                  <Image
                    src={"/ic_select_read.avif"}
                    width={438}
                    height={716}
                    alt=""
                  />
              </div>
            </div>
          </div>
          <div className="mt-[175px] lg:pb-25 pb-15 flex flex-wrap -mx-4">
            <div className="flex-none w-1/2 max-w-1/2 relative min-h-px px-4">
              <div>
                  <Image
                    src={"/ic_silver_dots.avif"}
                    width={465}
                    height={653}
                    alt=""
                  />
              </div>
            </div>
            <div className="flex-none w-1/2 max-w-1/2 relative min-h-px px-4">
              <p className="font-semibold text-[24px]/[130%] text-[#43b871] font-[poppins] mt-0 mb-[1em]">
                NỘI DUNG HẤP DẪN
              </p>
              <h3 className="mt-6 font-bold text-[48px]/[130%] text-[#163b56] font-[poppins] mb-[0.5em]">
                Xây dựng thói quen đọc sách mỗi ngày
              </h3>
              <div className="lg:mt-15 font-normal text-[20px]/[30px] tracking-[.005em] text-[#163b56]">
                Tại Trại sáng tác của Reavol, các bạn có thể đăng tải những tác
                phẩm của mình và kiếm tiền từ chính tác phẩm đó. Hãy đăng kí làm
                Cộng tác viên của Reavol ngay hôm nay để có thể mang tác phẩm
                của mình đến gần hơn với những người yêu sách!
              </div>
              <div className="mt-[35px] mb-auto mx-auto flex lg:w-[438px] h-[92px] bg-[#43b871] rounded-[10px] items-center justify-center">
                <span className="font-bold text-[24px]/[160%] text-white">
                  Bắt đầu thử
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4faf6]">
        <h3 className="pt-15 font-semibold text-[24px]/[130%] text-[#43b871] text-center font-[poppins] mt-0 mb-[0.5em]">
          THỂ LOẠI
        </h3>
        <h4 className="mt-6 font-bold text-[48px]/[130%] text-[#163b56] text-center font-[poppins] mg-[.5em]">
          Sách bạn yêu thích nhất ?
        </h4>
        <div className="flex justify-center">
          <div className="ml-5 w-[285px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Chính trị & xã hội
            </span>
          </div>
          <div className="ml-5 w-[215px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Tâm lý học
            </span>
          </div>
          <div className="ml-5 w-[209px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Khoa học
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="ml-5 w-[308px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Tiểu sử và lịch sử
            </span>
          </div>
          <div className="ml-5 w-[350px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Sức khỏe và thể hình
            </span>
          </div>
          <div className="ml-5 w-[339px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Văn hóa doanh nghiệp
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="ml-5 w-[612px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Tính thần khởi nghiệp & Doanh nghiệp nhỏ
            </span>
          </div>
          <div className="ml-5 w-[431px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Động lực và Truyền cảm hứng
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="ml-5 w-[219px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Kinh tế học
            </span>
          </div>
          <div className="ml-5 w-[274px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Quản lý lãnh đạo
            </span>
          </div>
          <div className="ml-5 w-[305px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Tiền bạc và đầu tư
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="ml-5 w-[546px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Hiệu suất làm việc và Quản lý thời gian
            </span>
          </div>
          <div className="ml-5 w-[612px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Phát triển cá nhân và tự hoàn thiện bản thân
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4 pb-15">
          <div className="ml-5 w-[359px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Marketing và bán hàng
            </span>
          </div>
          <div className="ml-5 w-[375px] h-[71px] bg-white rounded-[10px] flex justify-center items-center">
              <Image src={"/ic_tower.svg"} width={30} height={30} alt="" />
            <span className="font-normal lg:text-[24px]/[17px] md:text-[20px]/[17px] text-[14px]/[12px] -tracking-[.01em] text-[#163b56] ">
              Giới tính và mối quan hệ
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white lg:pb-[150px] md:pb-25 pb-10">
        <div className={styles.container}>
          <div className="flex flex-wrap -mx-4">
            <div className="md:mt-[231px] mt-[150px] flex-none w-1/2 max-w-1/2 relative min-h-px px-4">
                <Image
                  src={"/icon_investment.avif"}
                  width={540}
                  height={560}
                  alt=""
                />
            </div>
            <div className="lg:mt-[150px] md:mt-25 mt-15 flex-none w-1/2 max-w-1/2 relative min-h-px px-4">
              <div className="lg:w-[450px]">
                <span className="font-bold lg:text-[48px]/[130%] md:text-[40px]/[115%] text-[36px]/[100%] text-[#163b56]">
                  Đầu tư nhỏ, phát triển nhanh
                </span>
              </div>
              <div className="mt-8">
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4 w-full">
                    <span className="font-normal md:text-[20px]/[30px] text-[16px]/[20px]">
                      Mở khóa toàn bộ sách<b> 1 năm/trọn đời</b>
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4 w-full">
                    <span className="font-normal md:text-[20px]/[30px] text-[16px]/[20px]">
                      Đọc và nghe hơn <b>2500 cuốn sách cùng 16 thể loại</b>{" "}
                      khác nhau
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4 w-full">
                    <span className="font-normal md:text-[20px]/[30px] text-[16px]/[20px]">
                      Dễ dàng tiếp thu tri thức từ<b> 5 cuồn sách mỗi ngày</b>
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4 w-full">
                    <span className="font-normal md:text-[20px]/[30px] text-[16px]/[20px]">
                      Xem thỏa thích những video hay về sách<b> không</b> bị làm
                      phiền bởi<b> quảng cáo</b>
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4 w-full">
                    <span className="font-normal md:text-[20px]/[30px] text-[16px]/[20px]">
                      <b>Đọc miễn phí</b> chương đầu tiên với các{" "}
                      <b>truyện độc quyền</b>
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4 w-full">
                    <span className="font-normal md:text-[20px]/[30px] text-[16px]/[20px]">
                      Tham gia vào các sự kiện<b> kiếm Rtoken</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white!">
        <div className={styles.container}>
          <div className="flex flex-wrap -mx-4">
              <Image
                src="/icon_community.avif"
                width={1140}
                height={451.7}
                alt=""
              />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center lg:pt-30 pt-20">
          <h5 className="font-semibold text-[36px]/[130%] text-[#43b871] mt-0 mb-[0.5em]">
            QUYỀN LỢI CỦA KOCS
          </h5>
        </div>
        <div className={styles.container}>
          <div className="mt-15 flex flex-wrap -mx-4">
            <div className="flex-none w-1/2 max-w-1/2">
              <div>
                  <Image
                    src="/ic_interest.avif"
                    width={540}
                    height={350}
                    alt=""
                  />
              </div>
            </div>
            <div className="flex-none w-1/2 max-w-1/2">
              <div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4">
                    <span className="font-normal text-[20px]/[30px]">
                      Hưởng % hoa hồng trực tiếp từ mỗi đơn hàng
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4">
                    <span className="font-normal text-[20px]/[30px]">
                      Hỗ trợ KOCs xây dựng nội dung trên mạng xã hội
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-9">
                    <Image
                      src="/ic_integrated.svg"
                      width={48}
                      height={48}
                      alt=""
                    />
                  <div className="ml-4">
                    <span className="font-normal text-[20px]/[30px]">
                      Tham gia vào các chiến lược phát triển với các đối tác của
                      Reavol.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.container}>
          <div className="lg:pb-[242px] pb-20 flex flex-wrap -mx-4">
            <div className="flex-none w-1/2 max-w-1/2 relative min-h-px px-4">
              <h6 className="lg:pt-[150px] pt-25 font-semibold lg:text-[36px]/[130%] text-[30px]/[110%] md:w-[450px] text-[#43b871] mt-0 mb-[.5em]">
                ĐĂNG KÝ TÀI KHOẢN KOCS
              </h6>
              <h5 className="mt-6 font-bold lg:text-[48px]/[140%] md:text-[44px]/[130%] text-[40px]/[110%] text-[#163b56] w-[80%] mb-[.5em]">
                Bạn đã sẵn sàng gia tăng thu nhập cùng Reavol KOCs?
              </h5>
              <div className="mt-[21px]">
                  <Image
                    src="/ic_loginKOCS.avif"
                    width={540}
                    height={540}
                    alt=""
                  />
              </div>
            </div>
            <div className="flex-none w-1/2 max-w-1/2 relative min-h-px px-4 lg:mt-[271px] mt-30">
              <form
                id="basic"
                className="box-border m-0 p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715]"
              >
                <div className="gap-y-0 flex-col box-border p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] mb-6 align-top flex flex-wrap">
                  <div className="w-full flex flex-col grow relative max-w-full min-h-px">
                    <div className="relative flex items-center min-h-8">
                      <div className="flex-auto max-w-full">
                        <input
                          type="text"
                          placeholder="Tên đăng ký *"
                          id="basic_name"
                          value=""
                          className="text-[20px]/[1.5715] lg:mt-6 h-15! rounded-[10px] text-ellipsis touch-manipulation box-border m-0 relative inline-block w-full min-w-0 py-1 px-[11px] text-[rgba(0,0,0,0.85)] bg-white border border-gray-300 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-y-0 flex-col box-border p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] mb-6 align-top flex flex-wrap">
                  <div className="w-full flex flex-col grow relative max-w-full min-h-px">
                    <div className="relative flex items-center min-h-8">
                      <div className="flex-auto max-w-full">
                        <input
                          type="text"
                          placeholder="Số điện thoại *"
                          id="basic_phone"
                          value=""
                          className="text-[20px]/[1.5715] lg:mt-6 h-15! rounded-[10px] text-ellipsis touch-manipulation box-border m-0 relative inline-block w-full min-w-0 py-1 px-[11px] text-[rgba(0,0,0,0.85)] bg-white border border-gray-300 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-y-0 flex-col box-border p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] mb-6 align-top flex flex-wrap">
                  <div className="w-full flex flex-col grow relative max-w-full min-h-px">
                    <div className="relative flex items-center min-h-8">
                      <div className="flex-auto max-w-full">
                        <input
                          type="text"
                          placeholder="Email *"
                          id="basic_email"
                          value=""
                          className="text-[20px]/[1.5715] lg:mt-6 h-15! rounded-[10px] text-ellipsis touch-manipulation box-border m-0 relative inline-block w-full min-w-0 py-1 px-[11px] text-[rgba(0,0,0,0.85)] bg-white border border-gray-300 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-y-0 flex-col box-border p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] mb-6 align-top flex flex-wrap">
                  <div className="w-full flex flex-col grow relative max-w-full min-h-px">
                    <div className="relative flex items-center min-h-8">
                      <div className="flex-auto max-w-full">
                        <input
                          type="text"
                          placeholder="Địa chỉ *"
                          id="basic_address"
                          value=""
                          className="text-[20px]/[1.5715] lg:mt-6 h-15! rounded-[10px] text-ellipsis touch-manipulation box-border m-0 relative inline-block w-full min-w-0 py-1 px-[11px] text-[rgba(0,0,0,0.85)] bg-white border border-gray-300 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-y-0 flex-col box-border p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] mb-6 align-top flex flex-wrap">
                  <div className="w-full flex flex-col grow relative max-w-full min-h-px">
                    <div className="relative flex items-center min-h-8">
                      <div className="flex-auto max-w-full">
                        <input
                          type="text"
                          placeholder="Công việc hiện tại *"
                          id="basic_working"
                          value=""
                          className="text-[20px]/[1.5715] lg:mt-6 h-15! rounded-[10px] text-ellipsis touch-manipulation box-border m-0 relative inline-block w-full min-w-0 py-1 px-[11px] text-[rgba(0,0,0,0.85)] bg-white border border-gray-300 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-y-0 flex-col box-border p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] mb-6 align-top flex flex-wrap">
                  <div className="pb-2 leading-[1.5715] whitespace-normal text-left inline-block grow-0 overflow-hidden align-middle relative max-w-full min-h-px">
                    <label
                      htmlFor="basic_platform"
                      title="Nền tảng lựa chọn:"
                      className="ant-form-item-required m-0 h-auto relative inline-flex items-center text-[rgba(0,0,0,0.85)] text-[14px]"
                    >
                      Nền tảng lựa chọn:
                    </label>
                  </div>
                  <div className="flex flex-col grow relative max-w-full min-h-px">
                    <div className="relative flex items-center min-h-8">
                      <div className="flex-auto max-w-full">
                        <div className="w-full box-border m-0 p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] inline-block">
                          <div className="m-0 flex flex-wrap">
                            <div className="border border-[#33bf71] box-border rounded-[10px] h-[49px] w-[236px] flex items-center lg:mt-[39px] mt-5 flex-none basis-5/12 max-w-5/12 relative min-h-px px-4">
                              <label className="w-full text-[14px] m-0 p-0 text-[rgba(0,0,0,0.85)] inline-flex items-baseline cursor-pointer">
                                <span className="w-4 h-4 justify-between flex items-center box-border m-0 p-0 text-[rgba(0,0,0,0.85)] text-[14px] relative top-[.2em] leading-1 whitespace-nowrap outline-none cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="leading-normal w-3.5 h-3.5 box-border p-0 touch-manipulation absolute top-0 left-0 right-0 bottom-0 z-1 cursor-pointer overflow-visible m-0 text-[rgba(0,0,0,0.85)] text-[14px]"
                                  />
                                  <span className="ant-checkbox-inner w-full justify-between flex items-center relative top-0 left-0 h-4 ltr bg-white "></span>
                                </span>
                                <span className="w-full justify-between flex items-center px-2">
                                  <div>Youtube</div>
                                  <div className="h-8 flex items-center">
                                      <Image
                                        src={"/icon_youtube.avif"}
                                        width={32}
                                        height={32}
                                        alt=""
                                      />
                                  </div>
                                </span>
                              </label>
                            </div>
                            <div className="border border-[#33bf71] box-border rounded-[10px] h-[49px] w-[236px] flex items-center lg:mt-[39px] mt-5 flex-none basis-5/12 max-w-5/12 relative min-h-px px-4 ml-auto">
                              <label className="w-full text-[14px] m-0 p-0 text-[rgba(0,0,0,0.85)] inline-flex items-baseline cursor-pointer">
                                <span className="w-4 h-4 justify-between flex items-center box-border m-0 p-0 text-[rgba(0,0,0,0.85)] text-[14px] relative top-[.2em] leading-1 whitespace-nowrap outline-none cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="leading-normal w-3.5 h-3.5 box-border p-0 touch-manipulation absolute top-0 left-0 right-0 bottom-0 z-1 cursor-pointer overflow-visible m-0 text-[rgba(0,0,0,0.85)] text-[14px]"
                                  />
                                  <span className="ant-checkbox-inner w-full justify-between flex items-center relative top-0 left-0 h-4 ltr bg-white "></span>
                                </span>
                                <span className="w-full justify-between flex items-center px-2">
                                  <div>Instagram</div>
                                  <div className="h-8 flex items-center">
                                      <Image
                                        src={"/icon_instargram.avif"}
                                        width={32}
                                        height={32}
                                        alt=""
                                      />
                                  </div>
                                </span>
                              </label>
                            </div>
                            <div className="border border-[#33bf71] box-border rounded-[10px] h-[49px] w-[236px] flex items-center lg:mt-[39px] mt-5 flex-none basis-5/12 max-w-5/12 relative min-h-px px-4">
                              <label className="w-full text-[14px] m-0 p-0 text-[rgba(0,0,0,0.85)] inline-flex items-baseline cursor-pointer">
                                <span className="w-4 h-4 justify-between flex items-center box-border m-0 p-0 text-[rgba(0,0,0,0.85)] text-[14px] relative top-[.2em] leading-1 whitespace-nowrap outline-none cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="leading-normal w-3.5 h-3.5 box-border p-0 touch-manipulation absolute top-0 left-0 right-0 bottom-0 z-1 cursor-pointer overflow-visible m-0 text-[rgba(0,0,0,0.85)] text-[14px]"
                                  />
                                  <span className="ant-checkbox-inner w-full justify-between flex items-center relative top-0 left-0 h-4 ltr bg-white "></span>
                                </span>
                                <span className="w-full justify-between flex items-center px-2">
                                  <div>Facebook</div>
                                  <div className="h-8 flex items-center">
                                      <Image
                                        src={"/icon_facebook.avif"}
                                        width={32}
                                        height={32}
                                        alt=""
                                      />
                                  </div>
                                </span>
                              </label>
                            </div>
                            <div className="border border-[#33bf71] box-border rounded-[10px] h-[49px] w-[236px] flex items-center lg:mt-[39px] mt-5 flex-none basis-5/12 max-w-5/12 relative min-h-px px-4 ml-auto">
                              <label className="w-full text-[14px] m-0 p-0 text-[rgba(0,0,0,0.85)] inline-flex items-baseline cursor-pointer">
                                <span className="w-4 h-4 justify-between flex items-center box-border m-0 p-0 text-[rgba(0,0,0,0.85)] text-[14px] relative top-[.2em] leading-1 whitespace-nowrap outline-none cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="leading-normal w-3.5 h-3.5 box-border p-0 touch-manipulation absolute top-0 left-0 right-0 bottom-0 z-1 cursor-pointer overflow-visible m-0 text-[rgba(0,0,0,0.85)] text-[14px]"
                                  />
                                  <span className="ant-checkbox-inner w-full justify-between flex items-center relative top-0 left-0 h-4 ltr bg-white "></span>
                                </span>
                                <span className="w-full justify-between flex items-center px-2">
                                  <div>Tiktok</div>
                                  <div className="h-8 flex items-center">
                                      <Image
                                        src={"/icon_tiktok.avif"}
                                        width={32}
                                        height={32}
                                        alt=""
                                      />
                                  </div>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-y-0 flex-col box-border p-0 text-[rgba(0,0,0,0.85)] text-[14px]/[1.5715] mb-6 align-top flex flex-wrap">
                  <div className="w-full flex flex-col grow relative min-h-px">
                    <div className="relative flex items-center min-h-8">
                      <div className="flex-auto max-w-full ">
                        <button
                          type="submit"
                          className="h-15 w-full lg:mt-14 bg-[#43b871] border-none text-white leading-[1.5715] relative inline-block font-normal whitespace-nowrap text-center cursor-pointer touch-manipulation py-1 px-4 text-[14px]"
                        >
                          <span className="font-bold text-[24px]/[160%] text-white">
                            Gửi ngay
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#044063]">
        <div className={styles.container}>
          <div className="pb-24 flex flex-wrap -mx-4">
            <div className="mt-[95px] flex-none w-5/12 max-w-5/12 relative min-h-px px-4">
              <div>
                  <Image src="/ic_footer.svg" width={197} height={64} alt="" />
              </div>
              <h6 className="mt-8 font-normal md:text-[20px]/[30px] text-[16px]/[20px] text-white w-[80%] mb-[.5em]">
                Tòa Licogi 13, Khuất Duy Tiến, Thanh Xuân, Hà Nội
              </h6>
              <div className="mt-[35px] flex">
                <Link href={"https://www.facebook.com/reavolvn"}>
                  <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ">
                    <Image
                      src={"/ic_facebook.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </Link>
                <Link href={"https://www.instagram.com/reavol.official/"}>
                  <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-5 md:ml-[30px]">
                    <Image
                      src={"/ic_instagram.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </Link>
                <Link
                  href={
                    "https://www.youtube.com/channel/UC4NcK6yLN-BlTmF_-2DTIwA"
                  }
                >
                  <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-5 md:ml-[30px]">
                    <Image src={"/tik-tok.svg"} width={24} height={24} alt="" />
                  </div>
                </Link>
                <Link href={"tel:0977947961"}>
                  <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-5 md:ml-[30px]">
                    <Image
                      src={"/icon-telephone-call.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="mt-[35px] flex">
                <div className="cursor-pointer">
                  <div>
                    <Image
                      src={"/imgbin_app-google.svg"}
                      width={156}
                      height={55}
                      alt=""
                    />
                  </div>
                </div>
                <div className="cursor-pointer ml-5">
                  <div>
                    <Image
                      src={"/imgbin_app-store.svg"}
                      width={156}
                      height={55}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-7/12 max-w-7/12 relative min-h-px px-4">
              <div className="mt-[122px] flex flex-wrap -mx-4">
                <div className="mt-[33px] font-medium text-[20px]/[30px] text-white flex-none w-1/3 max-w-1/3 relative min-h-px px-4">
                  <h4 className="font-semibold md:text-[24px]/[36px] text-[20px]/[28px] text-white">
                    Ứng dụng
                  </h4>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Thể loại
                  </div>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Cộng tác viên
                  </div>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Lợi ích của đọc
                  </div>
                </div>
                <div className="mt-[33px] font-medium text-[20px]/[30px] text-white flex-none w-1/3 max-w-1/3 relative min-h-px px-4">
                  <h4 className="font-semibold md:text-[24px]/[36px] text-[20px]/[28px] text-white">
                    Chính sách
                  </h4>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Thanh toán
                  </div>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Dịch vụ
                  </div>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Thẻ đọc sách
                  </div>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Trợ giúp
                  </div>
                </div>
                <div className="mt-[33px] font-medium text-[20px]/[30px] text-white flex-none w-1/3 max-w-1/3 relative min-h-px px-4">
                  <h4 className="font-semibold md:text-[24px]/[36px] text-[20px]/[28px] text-white">
                    Về chúng tôi
                  </h4>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Giới thiệu
                  </div>
                  <div className="mt-[33px] font-medium md:text-[20px]/[30px] text-[16px]/[24px] text-white">
                    Website
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

export default Introduce