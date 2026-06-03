import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 84, 86, 90],
  },
  async headers() {
    return [
      {
        source: "/video.mp4",
        headers: [
          { key: "Content-Type", value: "video/mp4" },
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
