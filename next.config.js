/** @type {import('next').NextConfig} */

const nextCommonProps = require("next-common-props");

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

module.exports = nextCommonProps(nextConfig);
