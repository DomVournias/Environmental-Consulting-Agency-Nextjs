/** @type {import('next').NextConfig} */

const nextCommonProps = require("next-common-props");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["el"],
    defaultLocale: "el",
    localeDetection: false,
  },
  images: {
    domains: ["geonhellas.gr"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextCommonProps(nextConfig);
