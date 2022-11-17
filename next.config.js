/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["geonhellas.gr"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
