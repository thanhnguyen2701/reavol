import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "reavol-app.s3.ap-southeast-1.amazonaws.com",
      "images.blinkist.io",
      "ungdungdocnhanh2021.s3.ap-southeast-1.amazonaws.com",
      "s3.ap-southeast-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
