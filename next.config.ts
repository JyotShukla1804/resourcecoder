import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/case_studies',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/case_studies/:id*',
        destination: '/case-studies/:id*',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
