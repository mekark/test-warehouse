import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where supported (smaller than WebP), WebP otherwise
    formats: ["image/avif", "image/webp"],
    // Finer small steps than the default (640, 750, ...) so phone-sized images
    // get a srcset candidate close to their displayed width
    deviceSizes: [480, 560, 640, 680, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    // Inline the (small, Tailwind) stylesheet into the HTML so it no longer
    // blocks first render with a separate request
    inlineCss: true,
  },
};

export default nextConfig;
