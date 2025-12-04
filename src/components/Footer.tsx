import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const t = useTranslations('Footer');
  return (
    <div className="mx-0 z-10">
      <div>
        <div>
          <div className="pb-24 bg-[#123543] m-0 pl-[20%] hidden lg:flex flex-wrap">
            <div className="pt-17.5 pr-0 pb-12 pl-5 flex-none w-5/12 max-w-5/12">
              <div>
                <div>
                  <Image src={"/ic_logo_reavol.svg"} width={250} height={100} alt="" />
                </div>
                <h6 className="mt-2.5 text-[16px]/[30px] text-white font-medium font-Medium mb-[.5em]">
                  {t('digital-ecommerce-platform')}
                </h6>
                <div className="text-white font-bold text-[16px]">{t('company-name')}</div>
                <div className="text-white">
                  {t('company-license')}
                </div>
                <div className="text-white">
                  {t('company-address')}
                </div>
                <div className="text-white">
                  Hotline: <Link href={"tel:0977947961"}>0977947961</Link>
                </div>
                <div className="text-white">
                  Mail: <Link href={"mailto:namhoang@reavol.com"}>namhoang@reavol.com</Link>
                </div>
                <div className="mt-[35px] flex">
                  <Link href={"https://www.facebook.com/reavolvn"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ">
                      <Image src={"/ic_facebook.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"https://www.instagram.com/reavol.official/"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/ic_instagram.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"https://www.youtube.com/channel/UC4NcK6yLN-BlTmF_-2DTIwA"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/tik-tok.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"tel:0977947961"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/icon-telephone-call.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"mailto:namhoang@reavol.com"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/icon-email.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="mt-9 flex">
                  <div className="cursor-pointer">
                    <div>
                      <Image src={"/imgbin_app-google.svg"} width={156} height={55} alt="" />
                    </div>
                  </div>
                  <div className="cursor-pointer ml-5">
                    <div>
                      <Image src={"/imgbin_app-store.svg"} width={156} height={55} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-7/12 max-w-7/12 relative min-h-px px-4">
              <div className="mt-33 flex flex-wrap -mx-4">
                <div className="flex justify-center relative flex-none w-1/3 max-w-1/3 min-h-px px-4">
                  <div>
                    <h4 className="font-semibold text-[24px]/[36px] text-[#33bf71] font-SemiBold mt-0 mb-2">
                      {t('about-us-title')}
                    </h4>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('about-us-intro')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('about-us-join')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('about-us-contact')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"http://online.gov.vn/Home/WebDetails/100610"}
                        className="cursor-pointer mt-2.5"
                      >
                        <Image src={"/logoSaleNoti.avif"} width={270} height={110} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center relative flex-none w-2/3 max-w-2/3 min-h-px px-4">
                  <div>
                    <h4 className="font-semibold text-[24px]/[36px] text-[#33bf71] font-SemiBold mt-0 mb-2">
                      {t('policy-title')}
                    </h4>
                    <div className="mt-4">
                      <Link
                        href={"/privacy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-general')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/payment-policy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-payment')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/complaint-handling-policy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-complaint')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/return-refund-policy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-refund')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/warranty-policy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-warranty')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/checking-policy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-checking')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/information-privacy-policy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-privacy')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/protection-policy"}
                        className="font-InterRegular text-[18px]/[36px] text-white"
                      >
                        {t('policy-data-protection')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-24 bg-[#123543] m-0 pl-[15%] hidden md:flex lg:hidden flex-wrap">
            <div className="pt-17.5 pr-0 pb-12 pl-5 flex-none w-5/12 max-w-5/12">
              <div>
                <div>
                  <Image src={"/ic_logo_reavol.svg"} width={200} height={80} alt="" />
                </div>
                <h6 className="mt-2.5 text-[14px]/[26px] text-white font-medium font-Medium mb-[.5em]">
                  {t('digital-ecommerce-platform')}
                </h6>
                <div className="text-white font-bold text-[16px]">{t('company-name')}</div>
                <div className="text-white">
                  {t('company-license')}
                </div>
                <div className="text-white">
                  {t('company-address')}
                </div>
                <div className="text-white">
                  Hotline: <Link href={"tel:0977947961"}>0977947961</Link>
                </div>
                <div className="text-white">
                  Mail: <Link href={"mailto:namhoang@reavol.com"}>namhoang@reavol.com</Link>
                </div>
                <div className="mt-9 flex">
                  <Link href={"https://www.facebook.com/reavolvn"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ">
                      <Image src={"/ic_facebook.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"https://www.instagram.com/reavol.official/"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/ic_instagram.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"https://www.youtube.com/channel/UC4NcK6yLN-BlTmF_-2DTIwA"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/tik-tok.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"tel:0977947961"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/icon-telephone-call.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"mailto:namhoang@reavol.com"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-[30px]">
                      <Image src={"/icon-email.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="mt-9 flex">
                  <div className="cursor-pointer">
                    <div>
                      <Image src={"/imgbin_app-google.svg"} width={156} height={55} alt="" />
                    </div>
                  </div>
                  <div className="cursor-pointer ml-5">
                    <div>
                      <Image src={"/imgbin_app-store.svg"} width={156} height={55} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-7/12 max-w-7/12 relative min-h-px px-4">
              <div className="mt-33 flex flex-wrap -mx-4">
                <div className="flex justify-center relative flex-none w-1/3 max-w-1/3 min-h-px px-4">
                  <div>
                    <h4 className="font-semibold text-[16px]/[24px] text-[#33bf71] font-SemiBold mt-0 mb-2">
                      {t('about-us-title')}
                    </h4>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('about-us-intro')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('about-us-join')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('about-us-contact')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"http://online.gov.vn/Home/WebDetails/100610"}
                        className="cursor-pointer mt-2.5"
                      >
                        <Image src={"/logoSaleNoti.avif"} width={270} height={110} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center relative flex-none w-2/3 max-w-2/3 min-h-px px-4">
                  <div>
                    <h4 className="font-semibold text-[16px]/[24px] text-[#33bf71] font-SemiBold mt-0 mb-2">
                      {t('policy-title')}
                    </h4>
                    <div className="mt-4">
                      <Link
                        href={"/privacy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-general')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/payment-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-payment')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/complaint-handling-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-complaint')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/return-refund-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-refund')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/warranty-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-warranty')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/checking-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-checking')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/information-privacy-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-privacy')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/protection-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-data-protection')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-24 bg-[#123543] m-0 pl-19 flex md:hidden flex-wrap">
            <div className="pt-17.5 pr-0 pb-12 pl-5 flex-none w-5/12 max-w-5/12">
              <div>
                <div>
                  <Image src={"/ic_logo_reavol.svg"} width={200} height={80} alt="" />
                </div>
                <h6 className="mt-2.5 text-[14px]/[26px] text-white font-medium font-Medium mb-[.5em]">
                  {t('digital-ecommerce-platform')}
                </h6>
                <div className="text-white font-bold text-[16px]">{t('company-name')}</div>
                <div className="text-white">
                  {t('company-license')}
                </div>
                <div className="text-white">
                  {t('company-address')}
                </div>
                <div className="text-white">
                  Hotline: <Link href={"tel:0977947961"}>0977947961</Link>
                </div>
                <div className="text-white">
                  Mail: <Link href={"mailto:namhoang@reavol.com"}>namhoang@reavol.com</Link>
                </div>
                <div className="mt-9 flex">
                  <Link href={"https://www.facebook.com/reavolvn"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ">
                      <Image src={"/ic_facebook.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"https://www.instagram.com/reavol.official/"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-7.5">
                      <Image src={"/ic_instagram.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"https://www.youtube.com/channel/UC4NcK6yLN-BlTmF_-2DTIwA"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-7.5">
                      <Image src={"/tik-tok.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"tel:0977947961"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-7.5">
                      <Image src={"/icon-telephone-call.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                  <Link href={"mailto:namhoang@reavol.com"}>
                    <div className="w-12 h-12 border border-white box-border rounded-lg flex justify-center items-center ml-7.5">
                      <Image src={"/icon-email.svg"} width={24} height={24} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="mt-9 flex">
                  <div className="cursor-pointer">
                    <div>
                      <Image src={"/imgbin_app-google.svg"} width={156} height={55} alt="" />
                    </div>
                  </div>
                  <div className="cursor-pointer ml-5">
                    <div>
                      <Image src={"/imgbin_app-store.svg"} width={156} height={55} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-7/12 max-w-7/12 relative min-h-px px-4">
              <div className="mt-33 flex flex-wrap -mx-4">
                <div className="flex justify-center relative flex-none w-1/3 max-w-1/3 min-h-px px-4">
                  <div>
                    <h4 className="font-semibold text-[16px]/[24px] text-[#33bf71] font-SemiBold mt-0 mb-2">
                      {t('about-us-title')}
                    </h4>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('about-us-intro')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('about-us-join')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"/introduce"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('about-us-contact')}
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={"http://online.gov.vn/Home/WebDetails/100610"}
                        className="cursor-pointer mt-2.5"
                      >
                        <Image src={"/logoSaleNoti.avif"} width={270} height={110} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center relative flex-none w-2/3 max-w-2/3 min-h-px px-4">
                  <div>
                    <h4 className="font-semibold text-[16px]/[24px] text-[#33bf71] font-SemiBold mt-0 mb-2">
                      {t('policy-title')}
                    </h4>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/privacy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-general')}
                      </Link>
                    </div>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/payment-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-payment')}
                      </Link>
                    </div>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/complaint-handling-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-complaint')}
                      </Link>
                    </div>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/return-refund-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-refund')}
                      </Link>
                    </div>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/warranty-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-warranty')}
                      </Link>
                    </div>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/checking-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-checking')}
                      </Link>
                    </div>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/information-privacy-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-privacy')}
                      </Link>
                    </div>
                    <div className="mt-4 font-InterRegular text-[14px]/[20px] text-white">
                      <Link
                        href={"/protection-policy"}
                        className="font-InterRegular text-[14px]/[20px] text-white"
                      >
                        {t('policy-data-protection')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
