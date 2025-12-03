import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import i18nConfig from '@/i18n/request';
import { NextIntlClientProvider } from "next-intl";

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
  description:
    "REAVOL - Ứng dụng chuyên về nội dung số đầu tiên của Việt Nam, hứa hẹn mang đến cho người dùng những sản phẩm chất lượng cùng trải nghiệm tuyệt vời",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html className="hide-scrollbar overflow-auto">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar`}>
          <NextIntlClientProvider>
        <ReduxProvider>
            {children}
          </ReduxProvider>
            </NextIntlClientProvider>
      </body>
    </html>
  );
}
