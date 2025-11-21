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
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
  )
}

export default layout