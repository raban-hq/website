import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "raban-website.vercel.app" }],
        destination: "https://raban.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
