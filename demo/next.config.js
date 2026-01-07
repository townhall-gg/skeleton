/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@townhall-gg/skeleton"],
  experimental: {
    turbopack: {
      root: "../../",
    },
  },
};

module.exports = nextConfig;
