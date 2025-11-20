import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REAVOL",
  description: "REAVOL - Ứng dụng chuyên về nội dung số đầu tiên của Việt Nam, hứa hẹn mang đến cho người dùng những sản phẩm chất lượng cùng trải nghiệm tuyệt vời",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className={`flex flex-row min-h-screen`} >
          <div className={`overflow-hidden sidebarWrapper transition-all shrink-0 min-w-[260px] w-[20%] bg-[#0b2631]`}>
            <Aside />
          </div>
          <div className="flex-1 contentRight transition-all bg-[#0b2631] overflow-auto w-[80%]">
            <Header />
            {children}
          </div>
        </div>
        <div className="pt-10 bg-[#0b2631] relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
