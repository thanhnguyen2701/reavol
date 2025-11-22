import Aside from '@/components/Aside';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <div className={`flex flex-row min-h-screen`} >
                <div className={`overflow-hidden sidebarWrapper transition-all shrink-0 min-w-[260px] w-[20%] bg-[#0b2631]`}>
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
        </body>
    )
}

export default Layout