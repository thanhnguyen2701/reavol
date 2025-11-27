import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Aside from "@/components/Aside";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className={`flex flex-row min-h-screen`}>
        <div
          className={`overflow-hidden sidebarWrapper transition-all shrink-0 min-w-[76px] md:w-[20%] bg-[#0b2631]`}
        >
          <Aside />
        </div>
        <div className="flex-1 contentRight transition-all bg-[#0b2631] overflow-auto hide-scrollbar w-[80%]">
          <Header />
          {children}
        </div>
      </div>
      <div className="pt-10 bg-[#0b2631] relative z-10">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
