/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
  images: {
    domains: ["i.picsum.photos"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
